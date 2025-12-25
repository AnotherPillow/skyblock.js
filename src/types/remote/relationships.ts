export interface Relationship {
    /**
     * @description Location where the request was accepted
     */
    gamemode: string,
    /**
     * @description The player who sent the request - Dashed UUID
     */
    player: string,
    /**
     * @description The receiver of the request - Dashed UUID
     */
    target: string,
    ts: number,
}

export interface Player {
    forumsId: string,
    online: boolean,
    username: string,
    /**
     * @description Dashed
     */
    uuid: string,
}

export interface FullRelationshipsResponse {
    /**
     * One element
     */
    marriage: Relationship[] | null,
    friends: Relationship[] | null,
    /**
     * One element
     */
    players?: Player[]
}