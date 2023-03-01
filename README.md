## skyblock.js

A library for the skyblock.net api

### Features

- List online players on Economy, Survival and Skywars.
- Get friends of a player from their forums ID.
- Search for forum accounts by query.
- Get information about a player by their IGN.
- Get friends of a player by their IGN.

### Usage

Current Economy info

```js
const sb = require("skyblock.js")
sb.economy().then(data => {
    console.log(data);
})
```

Current Survival info

```js
const sb = require("skyblock.js")
sb.survival().then(data => {
    console.log(data);
})
```

Current Skywars info

```js
const sb = require("skyblock.js")
sb.skywars().then(data => {
    console.log(data);
})
```

Forums username search

```js
const sb = require("skyblock.js")
sb.forumsSearch("<QUERY>").then(data => {
    console.log(data);
})
```

Player info

```js
const sb = require("skyblock.js")
sb.player("<IGN>").then(data => {
    console.log(data);
})
```

Friends by IGN

```js
const sb = require("skyblock.js")
sb.friendsByIGN("<IGN>").then(data => {
    console.log(data);
})
```

Friends by forums ID

```js
const sb = require("skyblock.js")
sb.friendsByForumsID("<FORUMS ID>").then(data => {
    console.log(data);
})
```

Get current amount of players on a Noobcrew server

A list of possible values can be found [here](./Skyblock%20NetworkConnector%20Server%20Names.md)

```js
const sb = require("skyblock.js")
sb.playerCount("<SERVER NAME>").then(data => {
    console.log(data);
})
```

Friends by UUID

```js
const sb = require("skyblock.js")
sb.friendsByUUID("<UUID>").then(data => {
    console.log(data);
})
```