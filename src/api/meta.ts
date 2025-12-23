import { GameMode } from "../types/remote";
import fetcher from "../util/fetcher";

// Rate limited at 5req/1s.
export const getApiHealth = async (): Promise<unknown> => {
    const res = await fetcher('https://api.skyblock.net/health')
    return await res.json() as unknown;
}

export const listGameModes = async (): Promise<GameMode[]> => {
    const res = await fetcher('https://api.skyblock.net/gamemode/list')
    return await res.json();
}