const fetch = require("node-fetch");

/*
  Hello! Welcome to the Skyblock API!
  Thanks to GreenJuzzy on Github for finding how to use some of the endpoints
*/

exports.classic = async function() {
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
  const json = await res.json()
  return json;
}

exports.economy = async function() {
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
  const json = await res.json()
  return json;
}

exports.survival = async function() {
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
  const json = await res.json()
  return json;
}

exports.friends = async function(forums_id) {
  const res = await fetch(`https://skyblock.net/friends-api/friends/get/${forums_id} `, {
    method: "GET",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9,no;q=0.8",
    },
  })
  const json = await res.json()
  return json;
  
}