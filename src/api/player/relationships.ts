import { FullRelationshipsResponse } from "../../types/remote/relationships";
import fetcher from "../../util/fetcher";

export default async function getRelationships(uuid: string): Promise<FullRelationshipsResponse> {
    const res = await fetcher(`https://api.skyblock.net/player/${uuid}/relationships`)

    return await res.json()
}