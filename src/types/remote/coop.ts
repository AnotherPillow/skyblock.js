export interface FullIslandCoopResponse {
    /**
     * @description dashed UUID
     */
    leader: string,
    /**
     * @description In seconds. Multiply by 1000 to feed into `new Date()`
     */
    "createdTs" : number,
    /**
     * @description dashed UUID
     */
    "members" : string[]
}