import { AppAuthResponse, ApplicationInfo, PlayerMetaItemResponse, PlayerMetaKeys, PlayerVote } from "../../types";
import fetcher from "../../util/fetcher";
import { UnauthenticatedError, VoteNotFoundError } from "./errors";

export class Application {
    public appId: string;
    public secret: string;

    /**
     * @description will always be defined after running auth()
     */
    public token?: string;

    private hasAuthenticated: boolean = false;
    
    constructor({
        appId, secret
    }: {appId: string, secret: string}) {
        this.appId = appId
        this.secret = secret
    }

    public async auth(): Promise<void> {
        const res = await fetcher(`https://api.skyblock.net/app/auth`, {
            appId: this.appId,
            secret: this.secret
        }, {}, 'POST')
        const data = await res.json() as AppAuthResponse

        this.token = data.auth.token
        this.hasAuthenticated = true;
    }

    private get headers(): Record<string, string | null> {
        return {
            'x-appId': this.appId,
            'x-token': this.token ?? null
        }
    }

    
    public async info(): Promise<ApplicationInfo> {
        if (!this.hasAuthenticated) throw new UnauthenticatedError(`tried to call info(...) without running auth() first`)

        const res = await fetcher(`https://api.skyblock.net/app`, undefined, this.headers, 'GET')
        const data = await res.json()
        // console.log(data, res.status)

        // data.createdTime = new Date(data.createdTs * 1000)
        // data.updatedTime = new Date(data.updatedTs * 1000)

        return data as ApplicationInfo

    }

    /**
     * 
     * @param playerUUID dashed uuid
     * @param message mustn't have some special characters (], [) (for now)
     */
    public async messagePlayer(playerUUID: string, message: string): Promise<void> {
        if (!this.hasAuthenticated) throw new UnauthenticatedError('tried to call messagePlayer(...) without running auth() first')

        const res = await fetcher(`https://api.skyblock.net/player/${playerUUID}/message`, {
            message: message,
        }, this.headers, 'POST')
        const data = await res.json()
        
        if (data.auth.refreshToken) this.token = data.auth.refreshToken
        console.log(data, res.status)
    }

    /**
     * @description requires player app permission `default`
     */
    public async playerMetaKeys(playerUUID: string): Promise<PlayerMetaKeys> {
        if (!this.hasAuthenticated) throw new UnauthenticatedError('tried to call playerMetaKeys(...) without running auth() first')

        const res = await fetcher(`https://api.skyblock.net/player/${playerUUID}/meta`, undefined, this.headers, 'GET')
        const data = await res.json()
        
        return data
    }

    /**
     * @description get valid `gamemode` and `key` values from {@link playerMetaKeys()}. requires player app permission `default`
     */
    public async playerMetaItem(playerUUID: string, gamemode: string, key: string): Promise<PlayerMetaItemResponse> {
        if (!this.hasAuthenticated) throw new UnauthenticatedError('tried to call playerMetaKeys(...) without running auth() first')
        
        const res = await fetcher(`https://api.skyblock.net/player/${playerUUID}/meta/${gamemode}/${key}`, undefined, this.headers, 'GET')
        const data = await res.json()
        
        return data
    }

    /**
     * 
     * @param playerUUID dashed uuid
     * @param gamemode 
     * @param command no leading slash, e.g. `is home`
     */
    public async playerExecute(playerUUID: string, gamemode: string, command: string) {
        if (!this.hasAuthenticated) throw new UnauthenticatedError('tried to call playerExecute(...) without running auth() first')
        
        const res = await fetcher(`https://api.skyblock.net/player/${playerUUID}/exec`, {
            mojangUuid: playerUUID,
            targetGamemodeId: gamemode, // docs say it should be gamemodeId, but it's targetGamemodeId
            command: command, // nothing seems to be allowed rn?
        }, this.headers, 'POST')
        const data = await res.json()

        if (data && data.auth && data.auth.refreshToken) this.token = data.auth.refreshToken

        
        return data
    }

    /**
     * 
     * @param playerUUID 
     * @param skip defaults to 0
     * @param limit defaults to 10
     */
    public async playerVoteHistory(playerUUID: string, skip?: number, limit?: number): Promise<PlayerVote[]> {
        skip ??= 0
        limit ??= 10

        if (!this.hasAuthenticated) throw new UnauthenticatedError('tried to call playerVoteHistory(...) without running auth() first')
        
        const res = await fetcher(`https://api.skyblock.net/player/${playerUUID}/vote/${skip}/${limit}`, undefined, this.headers, 'GET')
        const data = await res.json()

        if (data && data.auth && data.auth.refreshToken) this.token = data.auth.refreshToken
        
        if (data.error && data.error.startsWith('votes not found err')) throw new VoteNotFoundError(data.error)

        return data.map((v: PlayerVote) => Object.assign(v, {time: new Date(v.timestamp * 1000)})) as PlayerVote[]
    }
}


export * from './errors'
