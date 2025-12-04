import { GameMode } from "../../types/remote";
import { FullIslandCoopResponse } from "../../types/remote/coop";
import fetcher from "../../util/fetcher";

export default async function getCoop(gamemode: GameMode, uuid: string): Promise<FullIslandCoopResponse> {
    const res = await fetcher(`https://api.skyblock.net/gamemode/${gamemode}/coop/${uuid}`)

    return await res.json();
}