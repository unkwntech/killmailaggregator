import esiItem from "./esi/item.model";

export default class Item implements esiItem {
    public Flag: number;
    public TypeID: number;
    public QTYDropped: number;
    public Singleton: boolean;

    public get flag(): number {
        return this.Flag;
    }
    public get item_type_id(): number {
        return this.TypeID;
    }
    public get quantity_dropped(): number {
        return this.QTYDropped;
    }
    public get singleton(): boolean {
        return this.Singleton;
    }
}
