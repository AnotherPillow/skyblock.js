import fetcher from "../fetcher"

/**
 * @param uuid Dashed OR undashed
 */
export async function getNameFromUUID(uuid: string): Promise<string | null> {
    const res = await fetcher(`https://sessionserver.mojang.com/session/minecraft/profile/${uuid}`)

    const result = await res.json()

    return result.name ?? null
}

/**
 * 
 * @returns Dashed UUID
 */
export async function getUUIDFromName(name: string): Promise<string | null> {
    const UUID = await fetcher(`https://api.mojang.com/users/profiles/minecraft/${name}`)

    let UUIDdashesregex = /([a-z0-9]{8})([a-z0-9]{4})([a-z0-9]{4})([a-z0-9]{4})([a-z0-9]{12})/g
    
    const { id } = await UUID.json()
    
    if (!id) return null;
    
    return id.replace(UUIDdashesregex, "$1-$2-$3-$4-$5")
}