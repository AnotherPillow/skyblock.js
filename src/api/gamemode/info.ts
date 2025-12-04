import { GameMode } from "../../types/remote";
import { FullGamemodeInfoResponse } from "../../types/remote/gamemode";

export async function getGamemode(gamemode: GameMode): Promise<FullGamemodeInfoResponse> {
    const res = await fetch(`https://api.skyblock.net/gamemode/${gamemode}`)

    return await res.json()
}