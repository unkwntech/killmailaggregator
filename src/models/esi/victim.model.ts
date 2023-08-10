import esiItem from "./item.model";

export default interface esiVictim {
    alliance_id?: number;
    character_id: number;
    corporation_id: number;
    faction_id?: number;
    damage_taken: number;
    items: esiItem[];
    position: {
        x: number;
        y: number;
        z: number
    };
    ship_type_id: number
}