import esiAttacker from "./attacker.model";
import esiVictim from "./victim.model";

export default interface esiKillmail {
    attackers: esiAttacker[];
    killmail_id: number;
    killmail_time: Date;
    solar_system_id: number;
    victim: esiVictim;
    war_id?: number;
}