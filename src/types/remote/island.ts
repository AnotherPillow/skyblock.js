export const Settings = {
    ANVIL: 'ANVIL' as 'ANVIL',
    ARMOUR_STAND: 'ARMOUR_STAND' as 'ARMOUR_STAND',
    BED: 'BED' as 'BED',
    BLOCK_BREAK: 'BLOCK_BREAK' as 'BLOCK_BREAK',
    BLOCK_PLACE: 'BLOCK_PLACE' as 'BLOCK_PLACE',
    BREADING: 'BREADING' as 'BREADING',
    BREWING: 'BREWING' as 'BREWING',
    BUCKET: 'BUCKET' as 'BUCKET',
    CHEST: 'CHEST' as 'CHEST',
    WORKBENCH: 'WORKBENCH' as 'WORKBENCH',
    CROP_TRAMPLE: 'CROP_TRAMPLE' as 'CROP_TRAMPLE',
    DOOR: 'DOOR' as 'DOOR',
    ENCHANTING: 'ENCHANTING' as 'ENCHANTING',
    ENDER_PEARL: 'ENDER_PEARL' as 'ENDER_PEARL',
    FURANCE: 'FURANCE' as 'FURANCE',
    GATE: 'GATE' as 'GATE',
    HORSE_INVENTORY: 'HORSE_INVENTORY' as 'HORSE_INVENTORY',
    HORSE_RIDING: 'HORSE_RIDING' as 'HORSE_RIDING',
    ANIMAL_DAMAGE: 'ANIMAL_DAMAGE' as 'ANIMAL_DAMAGE',
    LEASH: 'LEASH' as 'LEASH',
    LEAVER: 'LEAVER' as 'LEAVER', // yes that is how it is spelled
    JUKEBOX: 'JUKEBOX' as 'JUKEBOX',
    PORTAL: 'PORTAL' as 'PORTAL',
    PRESSURE_PLATE: 'PRESSURE_PLATE' as 'PRESSURE_PLATE',
    BUTTON_PRESS: 'BUTTON_PRESS' as 'BUTTON_PRESS',
    REDSTONE: 'REDSTONE' as 'REDSTONE',
    SHEARS: 'SHEARS' as 'SHEARS',
    CHORUS_FUIT: 'CHORUS_FUIT' as 'CHORUS_FUIT',
    MOB_SPAWNING: 'MOB_SPAWNING' as 'MOB_SPAWNING',
    PVP: 'PVP' as 'PVP',
    ITEM_FRAME: 'ITEM_FRAME' as 'ITEM_FRAME',
    TRAPDOOR: 'TRAPDOOR' as 'TRAPDOOR',
    EGG: 'EGG' as 'EGG',
    VISITOR_NOTIFICATIONS: 'VISITOR_NOTIFICATIONS' as 'VISITOR_NOTIFICATIONS',
    FLY: 'FLY' as 'FLY',
    RIDE_PET: 'RIDE_PET' as 'RIDE_PET',
    DISGUISES: 'DISGUISES' as 'DISGUISES',
    ORE_GENERATION: 'ORE_GENERATION' as 'ORE_GENERATION',
    VEHICLE: 'VEHICLE' as 'VEHICLE',
    MAP: 'MAP' as 'MAP',
    CAULDRON: 'CAULDRON' as 'CAULDRON',
    COMPOSTER: 'COMPOSTER' as 'COMPOSTER',
    BELL: 'BELL' as 'BELL',
    TARGET: 'TARGET' as 'TARGET',
}

export type Setting = keyof typeof Settings

export type Weather = 'CLEAR' | 'DOWNFALL' // org.bukkit.WeatherType
export type Expansion = 'RADIUS_100' | 'RADIUS_150' | 'RADIUS_200'
export type Time = 'NOON' | (string & {})
export type CustomBiome = 'blossom' | 'dream' | 'white_void' | 'toxic_wasteland' | 'pastel' | 'winter_wonderland' | 'lavender' | 'alpha' | 'alpha_4' | 'white' | 'space_gray'

export interface FullIslandResponse {
    /**
     * @description Dashed UUID
     */
    owner: string,
    locked: boolean,
    expansionSize: Expansion,
    location: {
        x: number,
        z: number,
    },
    settings: {
        [K in Setting]: boolean
    },
    environment: {
        time: Time,
        weather: Weather,
        customBiomeId: CustomBiome
    }
}