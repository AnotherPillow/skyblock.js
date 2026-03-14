import { IFullPlayerResponse, PlayerReponse } from "../../types/remote/player";
import fetcher from "../../util/fetcher";

export async function getPlayer(uuid: string): Promise<PlayerReponse> {
    const res = await fetcher(`https://api.skyblock.net/player/${uuid}`)
    const data = await res.json()

    return new PlayerReponse(data as IFullPlayerResponse)
}