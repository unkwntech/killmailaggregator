import axios from 'axios';
import Killmail from './models/killmail.model';
import zkillKillmail from './models/zkill/killmail.model';
import esiKillmail from './models/esi/killmail.model';

export const handler = async (event, context) => {

    //required
    if(!event.systemID) return {statusCode: 400, body: JSON.stringify({message: "Invalid systemID"})}
    
    let count = 10 || event.count;
    let excludes = event.excludes || {
        npc: false,
        solo: false,
        awox: false
    }
    
    const url = `https://zkillboard.com/api/kills/systemID/${event.systemID}/`;

    const killmails: Killmail[] = [];

    const systemResult = await axios.get<zkillKillmail[]>(url, {
        headers: {
            "User-Agent": `arron@arronchapman.com/${context.functionName}@${context.functionVersion}`
        }
    });
    
    const killmailSet = systemResult.data
    .filter(kill => !((excludes.npc && kill.zkb.npc) || (excludes.solo && kill.zkb.solo) || (excludes.awox && kill.zkb.awox)))
    .slice(0, count);

    for(const zkb of killmailSet) {
        const esiData = await axios.get<esiKillmail>(`https://esi.evetech.net/latest/killmails/${zkb.killmail_id}/${zkb.zkb.hash}/?datasource=tranquility`, {
            headers: {
                "User-Agent": `arron@arronchapman.com/${context.functionName}@${context.functionVersion}`
            }
        })
        //get victim/final blow details
        killmails.push(new Killmail({...zkb, ...zkb.zkb, ...esiData.data}));
    }

    const response = {
        statusCode: 200,
        killmails
    };

    return response;
};

handler({systemID: 30002542}, {functionName: "test", functionVersion: "0.0.1"});

