import { FullDownloadCountResponse } from "../../types"
import fetcher from "../../util/fetcher"

export async function getDownloadStats(): Promise<FullDownloadCountResponse> {
    const res = await fetcher(`https://api.skyblock.net/download/stats`)
    
    const data = await res.json()
    const modifiedData = data.map((el: any) => {
        el.downloads = el.n ?? 0
        if (el.n) delete el.n

        return el;
    })

    return modifiedData
}