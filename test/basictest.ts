import sb from '../dist'

const health = await sb.getApiHealth()
console.log(health)
// console.log({ props: { server: { ...(await sb.getGamemode(sb.Gamemodes.skyblock)), name: 'skyblock' } } })


// console.log(await sb.getDownloadStats())

console.log('is online 1', (await sb.getPlayer((await sb.util.mojang.getUUIDFromName('cPillow'))!)))
// console.log('is online 2', (await sb.getPlayer((await sb.util.mojang.getUUIDFromName('bowolitten'))!)).status.isOnline) // should be offline
// console.log('is online 3', (await sb.getPlayer((await sb.util.mojang.getUUIDFromName('mlgeo'))!)).status.isOnline) 
// console.log('is online 4', (await sb.getPlayer((await sb.util.mojang.getUUIDFromName('nufon'))!)).status.isOnline)
// console.log('is online 5', (await sb.getPlayer((await sb.util.mojang.getUUIDFromName('juztandy'))!)).status.isOnline) // should be offline