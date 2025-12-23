import { GameMode } from "../../types/remote";
import { FullGamemodeInfoResponse } from "../../types/remote/gamemode";
import fetcher from "../../util/fetcher";

export async function getGamemode(gamemode: GameMode): Promise<FullGamemodeInfoResponse> {
    const res = await fetcher(`https://api.skyblock.net/gamemode/${gamemode}`)

    return await res.json()
}