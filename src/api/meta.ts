import { GameMode } from "../types/remote";
import fetcher from "../util/fetcher";

// Rate limited at 5req/1s.
/**
 * 
 * @returns true if healthy, based on http status
 */
export const getApiHealth = async (): Promise<boolean> => {
    const res = await fetcher('https://api.skyblock.net/health') // does not return content !!
    return res.status == 200
}

export const listGameModes = async (): Promise<GameMode[]> => {
    const res = await fetcher('https://api.skyblock.net/gamemode/list')
    return await res.json();
}