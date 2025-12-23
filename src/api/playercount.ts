import fetcher from "../util/fetcher";

export async function getPlayerCount(): Promise<number> {

    const res = await fetcher('https://api.skyblock.net/playercount')
    return Number(await res.text()) // ???? maybe?
}