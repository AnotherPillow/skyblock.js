export type ServerList = "skyblock-bungee-1" | "skyblock-bungee-2" | "skyblock-bungee-3" | "skyblock-hub-1" | "skyblock-hub-2" | "skyblock-skyblock" | "skyblock-economy" | "skyblock-classic" | "skyblock" | "skyblock-events" | "skywars" | "mineverse"

export type ShortUpdatedServerList = "skyblock" | "economy"

export type ServerCount = {
    result: number
}

export type ServerInfo = {
    online: boolean,
    players_online: string,
    max_players: string,
    player_list: string[]
}

export type FriendsByID = {
    success: boolean,
    player: object,
    married: boolean,
    friends: object,
}

export type SearchResult = {
    users: SearchResultUser[],
    _error?: string,
}

export type SearchResultUser = {
    username: string,
    id: string
}

export type PlayerData = {
    uuid: string;
    last_username: string;
    last_username_pretty: string;
    info: {
        last_joined: number;
        first_joined: number;
        last_seen: number;
    };
};

export type Player = {
    online: boolean;
    forums_user_id: number;
    data: PlayerData;
};

export type DownloadStats = {
    key: string;
    downloads: number;
    id: string;
}

export type ForumStats = {
    discussions: number;
    messages: number;
    members: number;
    latestMember: { username: string, id: number };
    mostOnlineUsers: number;
}

export type Staff = {
    uuid: string;
    position: string;
    since: string;
    username: string;
}

export type UserInfo = {
    error?: string;
    username?: string;
    title?: string;
    lastActivity?: string;
    joined?: string;
    messageCount?: number;
    trophyPoints?: number;
    positiveReactions?: number;
    neutralReactions?: number;
    negativeReactions?: number;
    homepage?: string | null;
    location?: string | null;
    occupation?: string | null;
    gender?: string | null;
    previousNames?: string[];
}

export type TraderItem = {
    item: string;
    maximumAmount: number;
    maximumAmountPerPlayer: number;
    value: number;
}

export type Traders = {
    entityId: number;
    active: boolean;
    sellable: TraderItem[];
    buyable: TraderItem[];

}


/**
 * @description Returns a player list of skywars
 * @example skyblock.skywars().then(result => console.log(result))
 */
export function skywars(): Promise<ServerInfo>

/**
 * @description Returns a player list of economy
 * @example skyblock.economy().then(result => console.log(result))
 */
export function economy(): Promise<ServerInfo>

/**
 * @description Returns a player list of survival
 * @example skyblock.survival().then(result => console.log(result))
 * 
 */
export function survival(): Promise<ServerInfo>

/**
 * @description Returns a player count of specific server
 * @example skyblock.playerCount().then(result => console.log(result))
 */
export function playerCount(server: ServerList): Promise<ServerCount>

/**
 * @description Returns forum statistics
 * @example skyblock.getForumStats().then(result => console.log(result))
 */
export function getForumStats(): Promise<ForumStats | {}>

/**
 * @description Returns a friend list by forums id
 * @example skyblock.friendsByForumsID("1").then(result => console.log(result))
 */
export function friendsByForumsID(forums_id: string): Promise<FriendsByID>

/**
 * @description Returns a friend list by minecraft username
 * @example skyblock.friendsByIGN("NoobCrew").then(result => console.log(result))
 */
export function friendsByIGN(name: string): Promise<FriendsByID>

/**
 * @description Returns a friend list by UUID
 * @example skyblock.friendsByUUID("1ba2d16f-3d11-4a1f-b214-09e83906e6b5").then(result => console.log(result))
 */
export function friendsByUUID(uuid: string): Promise<FriendsByID>

/**
 * @description Returns a list of forum members with the search query
 * @example skyblock.forumsSearch("NoobCrew").then(result => console.log(result))
 */
export function forumsSearch(query: string): Promise<SearchResult>

/**
 * @description Returns in game information for specified name
 * @example skyblock.player("NoobCrew").then(result => console.log(result))
 */
export function player(name: string): Promise<Player>

/**
 * @description Returns the uuid of specified username
 * @example skyblock.getUUID("NoobCrew").then(result => console.log(result))
 */
export function getUUID(name: string): Promise<string>
/**
 * @description Returns the skyblock download statistics
 * @example skyblock.getDownloadStats().then(result => console.log(result))
 */
export function getDownloadStats(): Promise<Array<DownloadStats>>

/**
 * @description Returns list of staff members
 * @example skyblock.getStaff().then(result => console.log(result))
 */
export function getStaff(): Promise<Array<Staff>>

/**
 * @description Returns the user in skyblock's API
 * @example skyblock.playerByUUID("1ba2d16f-3d11-4a1f-b214-09e83906e6b5").then(result => console.log(result))
 */
export function playerByUUID(uuid: string): Promise<Player>

/**
 * @description Return's the user's forum information
 * @example skyblock.forumsUserInfo("1").then(result => console.log(result)) 
 */
export function forumsUserInfo(id: string): Promise<UserInfo>

export function getTraders(server: ShortUpdatedServerList): Promise<Traders | null>