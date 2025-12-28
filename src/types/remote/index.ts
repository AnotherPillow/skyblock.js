export const Gamemodes = {
    skyblock: 'skyblock' as 'skyblock',
    economy: 'economy' as 'economy',
    "sb-hub-1": 'sb-hub-1' as 'sb-hub-1',
    "sb-bungee-1": 'sb-bungee-1' as 'sb-bungee-1',
    "sb-bungee-2": 'sb-bungee-2' as 'sb-bungee-2',
}

export type GameMode = keyof typeof Gamemodes | '' | (string & {})

export * from './coop'
export * from './gamemode'
export * from './island'
export * from './player'
export * from './relationships'
export * from './trader'
export * from './playercount'
export * from './downloads'