skyblock.js
A library for the skyblock.net api

Currently only feature is to list online players.

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

Classic
```js
const sb = require("skyblock.js")
sb.classic().then(data => {
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