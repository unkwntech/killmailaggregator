import Character from "./character.model";
import esiAttacker from "./esi/attacker.model";
import Item from "./item.model";
import Ship from "./ship.model";

export default class Attacker extends Character implements esiAttacker {

    public DamageDone: number;
    public Location: Location;
    public Ship: Ship;

    public FinalBlow: boolean;
    public WeaponUsed: Item;

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
    public get damage_done(): number {
        return this.DamageDone;
    }
    public get final_blow(): boolean {
        return this.FinalBlow;
    }
    public get security_status(): number {
        return this.SecurityStatus ?? 0.0;
    }
    public get ship_type_id(): number {
        return this.Ship.ID;
    }
    public get weapon_type_id(): number {
        return this.WeaponUsed.TypeID;
    }
    //#endregion
}
