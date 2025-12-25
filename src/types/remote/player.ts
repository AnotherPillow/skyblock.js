import { GameMode } from ".";

export type PlayerType = 'JAVA' | 'BEDROCK' | 'UNKNOWN' | 'FV3_IMPORT'

export interface FullPlayerResponse {
    mojangUsername: string,
    mojangUsernamePretty: string,
    discordId: string, // unknown how this is calculated
    forumsId: number,
    favouriteGamemode: GameMode,
    nextGamemode: '' | GameMode,
    type: PlayerType,
    /**
     * @description In seconds. Multiply by 1000 to feed into `new Date()`
     */
    updatedTs: number,
    status: {
        connectPing?: number,
        /**
         * @description In seconds. Multiply by 1000 to feed into `new Date()`
         */
        connectTs: number,
        /**
         * @description In seconds. Multiply by 1000 to feed into `new Date()`
         */
        connectFirstTs: number,
        /**
         * @description Host before SRV record, including port - e.g. skyblock.net:25565
         */
        connectHost?: string,
        /**
         * @description Protocol version - list located at https://minecraft.wiki/w/Protocol_version#Java_Edition_2
         */
        connectVersion?: string, 
        connectGamemode: GameMode,
        switchGamemode: GameMode,
        switchGamemodeTs: number,
        /**
         * @description In seconds. Multiply by 1000 to feed into `new Date()`
         */
        disconnectTs: number,
        disconnectGamemode: GameMode,
    }
}