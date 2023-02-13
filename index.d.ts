export type ServerList = "mineverse" | "skyblock" | "skywars"

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
    users: SearchResultUser[]
}

export type SearchResultUser = {
    username: string,
    id: string
}

type PlayerData = {
    uuid: string;
    last_username: string;
    last_username_pretty: string;
    info: {
        last_joined: number;
        first_joined: number;
        last_seen: number;
    };
};

type Player = {
    online: boolean;
    forums_user_id: number;
    data: PlayerData;
};

export function skywars(): Promise<ServerInfo>
export function economy(): Promize<ServerInfo>
export function survival(): Promise<ServerInfo>

export function friendsByForumsID(forums_id: number): Promise<FriendsByID>
export function forumsSearch(query: string): Promise<SearchResult>

export function player(name: string): Promise<Player>

export function friendsByIGN(name: string): Promise<FriendsByIGN>
export function playerCount(server: ServerList): Promise<ServerCount>