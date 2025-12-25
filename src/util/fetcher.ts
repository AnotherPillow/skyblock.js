import { VERSION } from './info'

export default function fetcher(url: string, body: any = undefined, headers: Record<string, any> = {}, method: string = 'GET'): ReturnType<typeof fetch> {

    const init = {
        headers: { ...headers, 'User-Agent': `skyblock.js/${VERSION}`},
        method,
    } as any

    if (method != 'GET' && method != 'HEAD') init.body = body

    return fetch(url, init)
}