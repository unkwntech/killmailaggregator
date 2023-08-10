export default interface zkillKillmail {
    killmail_id: number,
    zkb: {
        locationID: number,
        hash: string,
        fittedValue: number,
        droppedValue: number,
        destroyedValue: number,
        totalValue: number,
        points: number,
        npc: boolean,
        solo: boolean,
        awox: boolean
    }
}