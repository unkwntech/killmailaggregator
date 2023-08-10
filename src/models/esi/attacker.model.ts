export default interface esiAttacker {
    alliance_id?: number;
    character_id: number;
    corporation_id: number;
    damage_done: number;
    final_blow: boolean;
    security_status: number;
    ship_type_id: number;
    weapon_type_id: number;
}