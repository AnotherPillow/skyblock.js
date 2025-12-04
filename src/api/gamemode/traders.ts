import { GameMode } from "../../types/remote";
import { FullTraderResponse } from "../../types/remote/trader";
import fetcher from "../../util/fetcher";

export default async function getTraders(gamemode: GameMode): Promise<FullTraderResponse> {
    const res = await fetcher(`https://api.skyblock.net/gamemode/${gamemode}/traders`)

    return await res.json();
}