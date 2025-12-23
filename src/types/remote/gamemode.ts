export interface FullGamemodeInfoResponse {
    name: string,
    Type: 'GAMEMODE', // not sure what else
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
        mstp: number[],
        processors: number[],
        tickableTiles: number[],
        totalMemory: number[],
    },
    /**
     * @description A list of dashed UUIDS
     */
    players: string[],
    data: string
}