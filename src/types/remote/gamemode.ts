export interface FullGamemodeInfoResponse {
    name: string,
    type: 'GAMEMODE', // Yes, that's uppercase. It'll change at some point in the future
    online: boolean,
    uptime: number,
    /**
     * @description In seconds. Multiply by 1000 to feed into `new Date()`
     */
    updateTs: number,
    playerCount: number,
    uniquePlayers: number,
    metrics: {
        /**
         * @description last 1/5/10/15m
         */
        tps: number[],
        freeMemory: number[],
        loadedChunks: number[],
        loadedEntities: number[],
        loadedTiles: number[],
        maxMemory: number[],
        mspt: number[],
        processors: number[],
        tickableTiles: number[],
        totalMemory: number[],
    },
    /**
     * @description A list of dashed UUIDS
     */
    players: string[],
    /**
     * @description unclear what use will be, however - might be `"arena starting in..." things like that, its useful for stuff like mob arena`
     */
    data: string 
}