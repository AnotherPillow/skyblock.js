import { VERSION } from './info'

export default function fetcher(url: string, body: any = '', headers: Record<string, any> = {}, method: string = 'GET'): ReturnType<typeof fetch> {

    return fetch(url, {
        body,
        headers: { ...headers, 'User-Agent': `skyblock.js/${VERSION}`},
        method
    })
}