import sb from '../dist'

const health = await sb.getApiHealth()
console.log(health)
console.log({ props: { server: { ...(await sb.getGamemode(sb.Gamemodes.skyblock)), name: 'skyblock' } } })


console.log(await sb.getDownloadStats())