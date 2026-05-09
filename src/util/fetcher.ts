import { VERSION } from './info'

export default function fetcher(url: string, body: any = undefined, headers: Record<string, any> = {}, method: string = 'GET'): ReturnType<typeof fetch> {

    const init = {
        headers: { ...headers, 'User-Agent': `skyblock.js/${VERSION}`},
        method,
    } as any

    if (method != 'GET' && method != 'HEAD') {
        // if it's an array or a dictionary, stringify it
        if (typeof body == 'object' && (body.constructor == Object || body.constructor == Array)) {
            body = JSON.stringify(body)

            // set the content type in that case too
            if (!('Content-Type' in init.headers)) {
                init.headers['Content-Type'] = 'application/json'
            }
        }
        init.body = body
    }

    return fetch(url, init)
}