import { FullPlayercountResponse } from "../types/remote/playercount";
import fetcher from "../util/fetcher";

export async function getPlayerCount(): Promise<FullPlayercountResponse> {

    const res = await fetcher('https://api.skyblock.net/playercount')
    return await res.json()
}