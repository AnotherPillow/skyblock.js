const fetch = require("node-fetch");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
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

  document.querySelectorAll("aside>.sidebar>div>.secondaryContent>ul>li>a.username").forEach((element) => {
    userResults.push({
      username: element.textContent,
      id: element.href.split(".")[2].replace("/", "")
    })
  })
  return {
    users: userResults
  }
}

async function player(name) {
  const UUID = await fetch(`https://api.mojang.com/users/profiles/minecraft/${name}`, {
    method: "GET",
    headers: {
      "Accept": "application/json, text/javascript, */*; q=0.01",
    },
  })

  let UUIDdashesregex = /([a-z0-9]{8})([a-z0-9]{4})([a-z0-9]{4})([a-z0-9]{4})([a-z0-9]{12})/g
  const { id } = await UUID.json()
  let uuid = id.replace(UUIDdashesregex, "$1-$2-$3-$4-$5")

  const res = await fetch(`https://friends.skyblock.net/api/friends/data/${uuid}`, {method: "GET",})

  return await res.json()

}

async function friendsByIGN(name) {
  const {forums_user_id}= await player(name)
  console.log(forums_user_id)
  const friends = await friendsByForumsID(forums_user_id)
  console.log(friends)

  return friends
}
async function playerCount(server) {
  //check if server is mineverse,skyblock or skywars
  if (!["mineverse", "skyblock", "skywars"].includes(server)) return { error: "Invalid server" }

  const res = await fetch(`https://nc.skyblock.net/playercount/group/${server}`, {
    method: "GET",
    headers: {
      "Accept": "application/json, text/javascript, */*; q=0.01",
    },
  })
  const {result} = await res.json()
  return result
}

module.exports = {
  skywars,
  economy,
  survival,
  player,
  friendsByForumsID,
  friendsByIGN,
  forumsSearch,
  playerCount
}
