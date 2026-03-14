import { GameMode } from ".";

export type PlayerType = 'JAVA' | 'BEDROCK' | 'UNKNOWN' | 'FV3_IMPORT'

export interface IFullPlayerResponse {
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
        /**
         * @description Gamemode the player last joined onto
         */
        connectGamemode: GameMode,
        /**
         * @description Gamemode they are currently connected to (is **not** an indicator of online status)
         */
        switchGamemode: GameMode,
        switchGamemodeTs: number,
        /**
         * @description In seconds. Multiply by 1000 to feed into `new Date()`
         */
        disconnectTs: number,
        /**
         * @description Last gamemode the player disconnected while online on
         */
        disconnectGamemode: GameMode,
    }
}

type PlayerStatus = IFullPlayerResponse["status"] & {
    readonly connectTime: Date;
    readonly connectFirstTime: Date;
    readonly disconnectTime: Date;
    readonly switchGamemodeTime: Date;
};

export class PlayerReponse implements IFullPlayerResponse {
    mojangUsername!: string;
    mojangUsernamePretty!: string;
    discordId!: string;
    forumsId!: number;
    favouriteGamemode!: GameMode;
    nextGamemode!: GameMode;
    type!: PlayerType;
    updatedTs!: number;
    status!: PlayerStatus;

    constructor(res: IFullPlayerResponse) {
        Object.assign(this, {
            ...res,
            status: {
                ...res.status,
                get connectTime(): Date {
                    return new Date(this.connectTs * 1000)
                },
                get connectFirstTime(): Date {
                    return new Date(this.connectFirstTs * 1000)
                },
                get disconnectTime(): Date {
                    return new Date(this.disconnectTs * 1000)
                },
                get switchGamemodeTime(): Date {
                    return new Date(this.switchGamemodeTs * 1000)
                },
            }
        });
    }
}