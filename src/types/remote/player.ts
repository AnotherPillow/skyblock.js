import { GameMode } from ".";

export interface FullPlayerResponse {
    mojangUsername: string,
    mojangUsernamePretty: string,
    discordId: string, // unknown how this is calculated
    forumsId: number,
    favouriteGamemode: GameMode,
    nextGamemode: '' | GameMode, //presumably - example is empty
    state: 'UNLOCKED' | (string & {}) // account? island? banned? no idea
    /**
     * @description In seconds. Multiply by 1000 to feed into `new Date()`
     */
    updatedTs: number,
    status: {
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
        connectHost: string,
        /**
         * @description Protocol version - list located at https://minecraft.wiki/w/Protocol_version#Java_Edition_2
         */
        connectVersion: string, 
        connectGamemode: GameMode,
        /**
         * @description Host before SRV record, including port - e.g. skyblock.net:25565
         */
        disconnectTs: number,
        disconnectGamemode: number,
    }
}