export interface AppAuthResponse {
    auth: {
        appId: string,
        success: true,
        /**
         * @description JWT
         */
        token: string,
    }
}

export interface ApplicationInfo {
    name: string,
    description: string,
    /**
     * @description Minecraft UUID of owner acount
     */
    owner: string,
    contact: string,
    /**
     * @description the appID
     */
    id: string,
    internal: boolean,
    
    // in docs but not there atm?
    /*
    
     * @description unix seconds
    
    createdTs: number,
    
     * @description unix seconds
    
    updatedTs: number,

    createdTime: Date,
    updatedTime: Date,*/
}

export interface PlayerMetaKey {
    gamemodeId: string,
    key: string,
}

export type PlayerMetaKeys = PlayerMetaKey[]

export interface PlayerMetaItemResponse {
    uid: string,
    mojangUuid: string,
    /*
     * @description unix seconds
     */
    updateTs: number,
    gamemodeId: string,
    key: string,
    value: string | number,
}

export interface PlayerVote {
    uid: string,
    from: string,
    /*
     * @description unix seconds
     */
    timestamp: number,
    time: Date,
}