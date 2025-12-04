//#region src/types/remote/coop.d.ts
interface FullIslandCoopResponse {
  /**
   * @description dashed UUID
   */
  leader: string;
  /**
   * @description In seconds. Multiply by 1000 to feed into `new Date()`
   */
  "createdTs": number;
  /**
   * @description dashed UUID
   */
  "members": string[];
}
//#endregion
//#region src/types/remote/gamemode.d.ts
interface FullGamemodeInfoResponse {
  name: string;
  type: 'GAMEMODE';
  online: boolean;
  uptime: number;
  /**
   * @description In seconds. Multiply by 1000 to feed into `new Date()`
   */
  updateTs: number;
  playerCount: number;
  uniquePlayers: number;
  metrics: {
    /**
     * @description Stored very accurately.
     */
    tps: number;
  };
  /**
   * @description A list of dashed UUIDS
   */
  players: string[];
}
//#endregion
//#region src/types/remote/island.d.ts
declare const Settings: {
  ANVIL: "ANVIL";
  ARMOUR_STAND: "ARMOUR_STAND";
  BED: "BED";
  BLOCK_BREAK: "BLOCK_BREAK";
  BLOCK_PLACE: "BLOCK_PLACE";
  BREADING: "BREADING";
  BREWING: "BREWING";
  BUCKET: "BUCKET";
  CHEST: "CHEST";
  WORKBENCH: "WORKBENCH";
  CROP_TRAMPLE: "CROP_TRAMPLE";
  DOOR: "DOOR";
  ENCHANTING: "ENCHANTING";
  ENDER_PEARL: "ENDER_PEARL";
  FURANCE: "FURANCE";
  GATE: "GATE";
  HORSE_INVENTORY: "HORSE_INVENTORY";
  HORSE_RIDING: "HORSE_RIDING";
  ANIMAL_DAMAGE: "ANIMAL_DAMAGE";
  LEASH: "LEASH";
  LEAVER: "LEAVER";
  JUKEBOX: "JUKEBOX";
  PORTAL: "PORTAL";
  PRESSURE_PLATE: "PRESSURE_PLATE";
  BUTTON_PRESS: "BUTTON_PRESS";
  REDSTONE: "REDSTONE";
  SHEARS: "SHEARS";
  CHORUS_FUIT: "CHORUS_FUIT";
  MOB_SPAWNING: "MOB_SPAWNING";
  PVP: "PVP";
  ITEM_FRAME: "ITEM_FRAME";
  TRAPDOOR: "TRAPDOOR";
  EGG: "EGG";
  VISITOR_NOTIFICATIONS: "VISITOR_NOTIFICATIONS";
  FLY: "FLY";
  RIDE_PET: "RIDE_PET";
  DISGUISES: "DISGUISES";
  ORE_GENERATION: "ORE_GENERATION";
  VEHICLE: "VEHICLE";
  MAP: "MAP";
  CAULDRON: "CAULDRON";
  COMPOSTER: "COMPOSTER";
  BELL: "BELL";
  TARGET: "TARGET";
};
type Setting = keyof typeof Settings;
type Weather = 'CLEAR' | 'DOWNFALL';
type Expansion = 'RADIUS_100' | 'RADIUS_150' | 'RADIUS_200';
type Time = 'NOON' | (string & {});
type CustomBiome = 'blossom' | 'dream' | 'white_void' | 'toxic_wasteland' | 'pastel' | 'winter_wonderland' | 'lavender' | 'alpha' | 'alpha_4' | 'white' | 'space_gray';
interface FullIslandResponse {
  /**
   * @description Dashed UUID
   */
  owner: string;
  locked: boolean;
  expansionSize: Expansion;
  location: {
    x: number;
    z: number;
  };
  settings: { [K in Setting]: boolean };
  environment: {
    time: Time;
    weather: Weather;
    customBiomeId: CustomBiome;
  };
}
//#endregion
//#region src/types/remote/player.d.ts
interface FullPlayerResponse {
  mojangUsername: string;
  mojangUsernamePretty: string;
  discordId: string;
  forumsId: number;
  favouriteGamemode: GameMode;
  nextGamemode: '' | GameMode;
  state: 'UNLOCKED' | (string & {});
  /**
   * @description In seconds. Multiply by 1000 to feed into `new Date()`
   */
  updatedTs: number;
  status: {
    /**
     * @description In seconds. Multiply by 1000 to feed into `new Date()`
     */
    connectTs: number;
    /**
     * @description In seconds. Multiply by 1000 to feed into `new Date()`
     */
    connectFirstTs: number;
    /**
     * @description Host before SRV record, including port - e.g. skyblock.net:25565
     */
    connectHost: string;
    /**
     * @description Protocol version - list located at https://minecraft.wiki/w/Protocol_version#Java_Edition_2
     */
    connectVersion: string;
    connectGamemode: GameMode;
    /**
     * @description Host before SRV record, including port - e.g. skyblock.net:25565
     */
    disconnectTs: number;
    disconnectGamemode: number;
  };
}
//#endregion
//#region src/types/remote/relationships.d.ts
interface FullRelationshipsResponse {
  /**
   * @description dashed UUID
   */
  marriage: string;
  /**
   * @description dashed UUIDs
   */
  friends: string[];
}
//#endregion
//#region src/types/remote/trader.d.ts
interface TraderOffer {
  item: string;
  maximumAmount: number;
  maximumAmountPerPlayer: number;
  value: number;
}
interface FullTraderResponse {
  entityId: number;
  active: boolean;
  sellable: TraderOffer[];
  buyable: TraderOffer[];
}
//#endregion
//#region src/types/remote/index.d.ts
type GameMode = 'skyblock' | 'economy';
//#endregion
//#region src/api/meta.d.ts
declare const getApiHealth: () => Promise<unknown>;
declare const listGameModes: () => Promise<GameMode[]>;
//#endregion
//#region src/util/info.d.ts
declare const VERSION: string;
//#endregion
export { CustomBiome, Expansion, FullGamemodeInfoResponse, FullIslandCoopResponse, FullIslandResponse, FullPlayerResponse, FullRelationshipsResponse, FullTraderResponse, GameMode, Setting, Settings, Time, TraderOffer, VERSION, Weather, getApiHealth, listGameModes };