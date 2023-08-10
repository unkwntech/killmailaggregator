import esiAttacker from "./esi/attacker.model";
import Victim from "./victim.model";

export default class Killmail {
    //values from zkill
    ID: number = -1;
    Hash: string = "";
    Value?: number = 0;
    Flags: KillmailFlags[];
    
    //values from esi
    Attackers?: esiAttacker[];
    Victim?: Victim;
    WarID?: number;
    Timestamp?: Date;
    
    constructor(json: any) {
        if(!json.ID && !json.killmail_id) throw new Error("Killmails must have an ID");
        else this.ID = json.ID ?? json.killmail_id;
        
        if(!json.Hash && !json.hash) throw new Error("Killamils must have a hash");
        else this.Hash = json.Hash ?? json.hash;
        
        this.Value = json.Value ?? json.totalValue;

        if(!json.Flags) {
            if(json.npc) this.Flags.push(KillmailFlags.NPC);
            if(json.solo) this.Flags.push(KillmailFlags.SOLO);
            if(json.awox) this.Flags.push(KillmailFlags.AWOX);
        } else {
            this.Flags = json.Flags;
        }

        this.Attackers = json.Attackers ?? json.attackers;

        if(json.victim) this.Victim = json.victim as Victim;
        if(json.Victim instanceof Victim) this.Victim = json.Victim;

        this.WarID = json.warID ?? json.war_id;
        this.Timestamp = json.timestamp ?? new Date(json.killmail_time);
    }
}

export enum KillmailFlags {
    NPC,
    SOLO,
    AWOX,
    PADDING,
    CAPITAL,
    SUPERCARRIER,
    TITAN
}