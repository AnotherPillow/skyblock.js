### skyblock.js
A library for the skyblock.net api

### Features
- List online players on Economy, Survival and Classic.
- Get friends of a player from their forums ID.
- Search for forum accounts by query.

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

Friends
```js
const sb = require("skyblock.js")
sb.friends("<FORUMS ID>").then(data => {
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