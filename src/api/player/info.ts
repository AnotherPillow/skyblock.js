import { FullPlayerResponse } from "../../types/remote/player";
import fetcher from "../../util/fetcher";

export async function getPlayer(uuid: string): Promise<FullPlayerResponse> {
    const res = await fetcher(`https://api.skyblock.net/player/${uuid}`)

    return await res.json()
}