### skyblock.js
A library for the skyblock.net api

### Features
- List online players on Economy, Survival and Skywars.
- Get friends of a player from their forums ID.
- Search for forum accounts by query.
- Get information about a player by their IGN.
- Get friends of a player by their IGN.

### Usage

Economy
```js
const sb = require("skyblock.js")
sb.economy().then(data => {
    console.log(data);
})
```
Survival
```js
const sb = require("skyblock.js")
sb.survival().then(data => {
    console.log(data);
})
```
Skywars
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