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
        connectPing: number,
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
        switchGamemode: GameMode,
        switchGamemodeTs: number,
        /**
         * @description Host before SRV record, including port - e.g. skyblock.net:25565
         */
        disconnectTs: number,
        disconnectGamemode: GameMode,
        /**
         * @description May get omitted in future. Use with caution. Stringified java class. e.g. `"Location{world=CraftWorld{name=skyworld},x=21.72778164162466,y=66.0,z=0.5668415381804838,pitch=11.600031,yaw=-97.55067}"`
         */
        disconnectLocation: string,
    }
}