import Item from "./item.model";
import Character from "./character.model";
import esiItem from "./esi/item.model";
import esiVictim from "./esi/victim.model";
import Ship from "./ship.model";
import Location from "./location.model";

export default class Victim extends Character implements esiVictim {

    public DamageTaken: number;
    public Items: Item[];
    public Location: Location;
    public Ship: Ship;

    //#region esiVicim implemention
    public get character_id(): number {
        return this.ID;
    }
    public get faction_id(): number | undefined {
        return this.FactionID;
    }
    public get alliance_id(): number | undefined {
        return this.AllianceID;
    }
    public get corporation_id(): number {
        return this.CorporationID;
    }
    public get damage_taken(): number {
        return this.DamageTaken;
    }
    public get items(): esiItem[] {
        return this.Items;
    }
    public get position() {
        return {x: this.Location.Position?.x ?? 0, y: this.Location.Position?.y ?? 0, z: this.Location.Position?.z ?? 0};
    }
    public get ship_type_id(): number {
        return this.Ship.ID;
    }
    //#endregion
}
