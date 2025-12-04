export interface FullGamemodeInfoResponse {
    name: string,
    type: 'GAMEMODE', // not sure what else
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
         * @description Stored very accurately.
         */
        tps: number,
    },
    /**
     * @description A list of dashed UUIDS
     */
    players: string[]
}