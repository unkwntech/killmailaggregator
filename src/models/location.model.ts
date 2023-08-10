
export default class Location {
    public Position?: { x: number; y: number; z: number; };
    public System: {
        ID: number;
        Name: string;
    };
    public Region?: {
        ID: number;
        Name: string;
    };
    public Constelation?: {
        ID: number;
        Name: string;
    };
}
