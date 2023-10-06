const fetch = require("node-fetch");

let jsdom = {}
try {
    jsdom = require("jsdom");
} catch (e) {
    jsdom = {JSDOM: null}
}


const { JSDOM } = jsdom;
const _networkConnectorServers = [
    'skyblock-bungee-1',      'skyblock-bungee-2',
    'skyblock-bungee-3',      'skyblock-hub-1',
    'skyblock-hub-2',         'skyblock-skyblock',
    'skyblock-economy',       'skyblock-classic',
    'skyblock',               'skyblock-events',
    'skywars',                'mineverse',
]

/*
  Hello! Welcome to the Skyblock API!
  Thanks to GreenJuzzy on Github and creationism for finding most of the endpoints!
*/

async function skywars() {
    const res = await fetch("https://skyblock.net/index.php?server-status/7/query", {
        method: "POST",
        headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9,no;q=0.8",
        },
        body: "_xfRequestUri=%2F&_xfNoRedirect=1&_xfResponseType=json"
    })
    const { serverStatus } = await res.json()

    return {
        online: serverStatus.online,
        players_online: serverStatus.players_online,
        max_players: serverStatus.max_players,
        player_list: serverStatus.player_list
    }
}

async function economy() {
    const res = await fetch("https://skyblock.net/index.php?server-status/6/query", {
        method: "POST",
        headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9,no;q=0.8",
        },
        body: "_xfRequestUri=%2F&_xfNoRedirect=1&_xfResponseType=json"
    })
    const { serverStatus } = await res.json()

    return {
        online: serverStatus.online,
        players_online: serverStatus.players_online,
        max_players: serverStatus.max_players,
        player_list: serverStatus.player_list
    }
}

async function survival() {
    const res = await fetch("https://skyblock.net/index.php?server-status/4/query", {
        method: "POST",
        headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9,no;q=0.8",
        },
        body: "_xfRequestUri=%2F&_xfNoRedirect=1&_xfResponseType=json"
    })
    const { serverStatus } = await res.json()

    return {
        online: serverStatus.online,
        players_online: serverStatus.players_online,
        max_players: serverStatus.max_players,
        player_list: serverStatus.player_list
    }
}

async function friendsByForumsID(forums_id) {
    const res = await fetch(`https://skyblock.net/friends-api/friends/get/${forums_id}`, {
        method: "GET",
        headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9,no;q=0.8",
        },
    })
    const json = await res.json()

    return {
        success: json.success,
        player: json.player,
        married: json.married,
        friends: json.friends
    }
}

async function forumsSearch(query) {
    if (!JSDOM) return {}
    const session = await fetch("https://skyblock.net/")
    var sessionID = session.headers.raw()['set-cookie'][0].split(";")[0].split("=")[1]
    
    const res = await fetch("https://skyblock.net/search/search", {
        "credentials": "include",
        "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:106.0) Gecko/20100101 Firefox/106.0",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.5",
            "Content-Type": "application/x-www-form-urlencoded",
            "Upgrade-Insecure-Requests": "1",
            "Sec-Fetch-Dest": "document",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-User": "?1",
            "Sec-GPC": "1",
            "coookie": `xf_session=${sessionID}`
        },
        "referrer": "https://skyblock.net/",
        "body": `keywords=${query}&users=&date=&_xfToken=`,
        "method": "POST",
        "mode": "cors"
    });
    const searchRes = await fetch(res.url, {
        headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:106.0) Gecko/20100101 Firefox/106.0",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "coookie": `xf_session=${sessionID}`
        }
    })
    const searchHTML = await searchRes.text()

    const document = new JSDOM(searchHTML).window.document;

    var userResults = []

    document.querySelectorAll("aside>.sidebar>div>.secondaryContent>ul>li").forEach((element) => {
        userResults.push({
        username: element.children[1].textContent,
        id: element.children[1].href.split(".")[2].replace("/", ""),
        title: element.children[2].textContent
        })
    })

    return {
        users: userResults
    }
}

async function player(name) {
  
    const uuid = await getUUID(name)

    return await playerByUUID(uuid)

}

async function playerByUUID(uuid) {
    const res = await fetch(`https://friends.skyblock.net/api/friends/data/${uuid}`, {method: "GET",})
    const text = await res.text()
    const ratelimited = t === 'limit exceeded'
    if (ratelimited) console.log('sb.playerByUUID has encountered a ratelimit. Please slow down immediately.')
    const json = JSON.parse(ratelimited ? JSON.stringify({
        online: false,
        forums_user_id: 0,
        data: {
            uuid: '+RATELIMITED',
            last_username: '+RATELIMITED',
            last_username_pretty: '+RATELIMITED',
            info: {
                last_joined: 0,
                first_joined: 0,
                last_seen: 0,
            },
        }
    }) : text)
    return json
}

async function getUUID(name) {
    const UUID = await fetch(`https://api.mojang.com/users/profiles/minecraft/${name}`, {
        method: "GET",
        headers: {
        "Accept": "application/json, text/javascript, */*; q=0.01",
        },
    })

    let UUIDdashesregex = /([a-z0-9]{8})([a-z0-9]{4})([a-z0-9]{4})([a-z0-9]{4})([a-z0-9]{12})/g
    const { id } = await UUID.json()
    let uuid = id.replace(UUIDdashesregex, "$1-$2-$3-$4-$5")

    return uuid
}

async function friendsByIGN(name) {
    const uuid = await getUUID(name)
    const friends = await friendsByUUID(uuid)

    return friends
}
async function playerCount(server) {
    if (!_networkConnectorServers.includes(server)) return 'Invalid server'
    const res = await fetch(`https://nc.skyblock.net/playercount/server/${server}`, {
        method: "GET",
        headers: {
            "Accept": "application/json, text/javascript, */*; q=0.01",
        },
    })
    const {result} = await res.json()
    return result
}

async function friendsByUUID(uuid) {
    if (uuid instanceof Promise) uuid = await uuid
    const res = await fetch(`https://friends.skyblock.net/api/friends/get/uuid/${uuid}`, {method: "GET",})

    return await res.json()
}

async function getDownloadStats() {
    const res = await fetch(`https://nc.skyblock.net/download/stats`, {
        method: "GET",
        headers: {
            "Accept": "application/json, text/javascript, */*; q=0.01",
        },
    })
    const result = await res.json()
    //each element in map has the following:
    /**
     * {
    "key": "skyblock-2.1.zip",
    "n": 2,
    "id": ""
}
     */
    //convert n to be downloads
    result.forEach((element) => {
        element.downloads = element.n
        delete element.n
    })
    return result
}

async function getForumStats() {
    if (!JSDOM) return {}
    const res = await fetch(`https://skyblock.net/forums/`, {
        method: "GET",
        headers: {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        },
    })
    const html = await res.text()
    const document = new JSDOM(html).window.document;
    let pairsJustified = document.querySelector(".pairsJustified")
    let latestMember = pairsJustified.children[3].lastElementChild.lastElementChild

    let result = {
        discussions: parseInt(document.querySelector(".discussionCount").lastElementChild.textContent.replace(/,/g, "")) || 0,
        messages: parseInt(document.querySelector(".messageCount").lastElementChild.textContent.replace(/,/g, "")) || 0,
        members: parseInt(document.querySelector(".memberCount").lastElementChild.textContent.replace(/,/g, "")) || 0,
        //there is a fourth child with no class
        latestMember: {
            username: latestMember.textContent,
            id: parseInt(latestMember.href.split("/")[4].replace("/", "").split(".")[1])
        },
        mostOnlineUsers: parseInt(pairsJustified.lastElementChild.lastElementChild.textContent.replace(/,/g,""))
    }

    return result


}

async function getStaff() {
    const res = await fetch(`https://friends.skyblock.net/api/friends/staff`, {
        method: "GET",
        headers: {
            "Accept": "application/json, text/javascript, */*; q=0.01",
        },
    })
    const result = await res.json()
    return await Promise.all( 
        result.map(async (element) => {
            const username = await playerByUUID(element.uuid).then((res) => res.data.last_username_pretty)
            return {
                ...element, username
            }
        })
    )
}

async function forumsUserInfo(userID) {
    if (!JSDOM) return {}

    const res = await fetch(`https://skyblock.net/members/${userID}`, {
        method: "GET",
        headers: {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        },
    })

    const html = await res.text()
    const document = new JSDOM(html).window.document;

    if (document.querySelectorAll(".titleBar").length > 0) 
        return {
            error: document.querySelector('[for="ctrl_0"]').textContent
        }
    const username = document.querySelector('[itemprop="name"').children[0].textContent
    const title = document.querySelector('.userTitle').textContent
    const infoBoxes = document.querySelectorAll('[class="secondaryContent pairsJustified"]');
    const lastActivity = infoBoxes[0].children[0].children[1].textContent
    const joined = infoBoxes[0].children[1].children[1].textContent
    const messageCount = parseInt(infoBoxes[0].children[2].children[1].textContent.replace(/,/g, ""))
    const trophyPoints = parseInt(document.querySelector(`[href="members/${username.toLocaleLowerCase()}.${userID}/trophies"]`).textContent.replace(/,/g, ""))
    const positiveReactions = parseInt(document.querySelector(".dark_postrating_positive").textContent.replace(/,/g, ""))
    const negativeReactions = parseInt(document.querySelector(".dark_postrating_negative").textContent.replace(/,/g, ""))
    const neutralReactions = parseInt(document.querySelector(".dark_postrating_neutral").textContent.replace(/,/g, ""))
    let homePage = null
    let location = null
    let occupation = null
    let gender = null;

    for (const el of infoBoxes[1].children) {
        switch (el.children[0].textContent) {
            case "Home Page:":
                homePage = el.children[1].textContent
                break;
            case "Location:":
                location = el.children[1].textContent
                break;
            case "Occupation:":
                occupation = el.children[1].textContent
                break;
            case "Gender:":
                gender = el.children[1].textContent
                break;
            default:
                break;
        }
    }

    const previousNames = Array.from(document.querySelectorAll("#unc .dataRow"))
        .filter(x=> x.children[0].textContent !== "From Name")
        .map(function (el) {
            const fromName = el.children[0].textContent
            const toName = el.children[1].textContent
            const date = el.children[2].children[0].textContent
            return { fromName, toName, date }
        })
        

    return {
        username,
        title,
        lastActivity,
        joined,
        messageCount,
        trophyPoints,
        positiveReactions,
        negativeReactions,
        neutralReactions,
        homePage,
        location,
        occupation,
        gender,
        previousNames,
    }    
}

async function getTraders(server) {
    if (!["skyblock","economy"].includes(server)) return null;
    const res = await fetch(`https://api.skyblock.net/traders?server=${server}`, {
        method: "GET",
        headers: {
            "Accept": "application/json, text/javascript, */*; q=0.01",
        },
    })
    
    const result = await res.json()

    return result;
}

module.exports = {
    skywars,
    economy,
    survival,
    player,
    friendsByForumsID,
    friendsByIGN,
    forumsSearch,
    playerCount,
    friendsByUUID,
    getUUID,
    getDownloadStats,
    getForumStats,
    getStaff,
    playerByUUID,
    forumsUserInfo,
    getTraders,
    _networkConnectorServers,
}
