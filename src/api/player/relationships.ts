import { FullRelationshipsResponse } from "../../types/remote/relationships";
import fetcher from "../../util/fetcher";

export async function getRelationships(uuid: string): Promise<FullRelationshipsResponse> {
    const res = await fetcher(`https://api.skyblock.net/player/${uuid}/relationships`)

    return await res.json()
}

export function findRelationshipPartner(self: string, pair: [string, string]): string | null {
    return pair.find(x => x != self) ?? null
}