import { GameMode } from "../../types/remote";
import { FullGamemodeInfoResponse } from "../../types/remote/gamemode";
import fetcher from "../../util/fetcher";

export async function getGamemode(gamemode: GameMode): Promise<FullGamemodeInfoResponse> {
    const res = await fetcher(`https://api.skyblock.net/gamemode/${gamemode}`)

    const data = await res.json()

    if (data.Type) {
        data.type = data.type
        delete data.Type
    }

    if (data.metrics && data.metrics.mstp) {
        data.metrics.mspt = data.metrics.mstp
        delete data.metrics.mstp
    }

    return data
}