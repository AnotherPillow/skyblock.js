import { FullIslandResponse, GameMode } from "../../types";
import fetcher from "../../util/fetcher";

// not available in initial release
// export async function getIsland(gamemode: GameMode, uuid: string): Promise<FullIslandResponse> {
//     const res = await fetcher(`https://api.skyblock.net/gamemode/${gamemode}/island/${uuid}`)

//     return await res.json();
// }