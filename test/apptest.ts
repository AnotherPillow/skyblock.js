import sb from '../dist'

import { appId, secret } from './secrets.json' with { type: 'json' }

const app = new sb.Application({appId, secret})

console.log(await app.auth())
const cpillow =await sb.util.mojang.getUUIDFromName('cPillow') as any

// console.log(await app.info())
console.log(await app.messagePlayer(cpillow, '&e&6skyblock.js thing&e#abcabc :3'))
// console.log(await app.playerMetaKeys(cpillow))
// console.log(await app.playerMetaItem(cpillow, 'skyblock', 'nickname'))
// console.log(await app.playerVoteHistory(cpillow))
console.log(await app.playerExecute(cpillow, 'skyblock', '/home'))