
//#region src/util/info.ts
const VERSION = "2.0.0";

//#endregion
//#region src/util/fetcher.ts
function fetcher(url, body = "", headers = {}, method = "GET") {
	return fetch(url, {
		body,
		headers: {
			...headers,
			"User-Agent": `skyblock.js/${VERSION}`
		},
		method
	});
}

//#endregion
//#region src/api/meta.ts
const getApiHealth = async () => {
	const res = await fetcher("https://api.skyblock.net/health");
	return await res.json();
};
const listGameModes = async () => {
	const res = await fetcher("https://api.skyblock.net/gamemode/list");
	return await res.json();
};

//#endregion
//#region src/types/remote/island.ts
const Settings = {
	ANVIL: "ANVIL",
	ARMOUR_STAND: "ARMOUR_STAND",
	BED: "BED",
	BLOCK_BREAK: "BLOCK_BREAK",
	BLOCK_PLACE: "BLOCK_PLACE",
	BREADING: "BREADING",
	BREWING: "BREWING",
	BUCKET: "BUCKET",
	CHEST: "CHEST",
	WORKBENCH: "WORKBENCH",
	CROP_TRAMPLE: "CROP_TRAMPLE",
	DOOR: "DOOR",
	ENCHANTING: "ENCHANTING",
	ENDER_PEARL: "ENDER_PEARL",
	FURANCE: "FURANCE",
	GATE: "GATE",
	HORSE_INVENTORY: "HORSE_INVENTORY",
	HORSE_RIDING: "HORSE_RIDING",
	ANIMAL_DAMAGE: "ANIMAL_DAMAGE",
	LEASH: "LEASH",
	LEAVER: "LEAVER",
	JUKEBOX: "JUKEBOX",
	PORTAL: "PORTAL",
	PRESSURE_PLATE: "PRESSURE_PLATE",
	BUTTON_PRESS: "BUTTON_PRESS",
	REDSTONE: "REDSTONE",
	SHEARS: "SHEARS",
	CHORUS_FUIT: "CHORUS_FUIT",
	MOB_SPAWNING: "MOB_SPAWNING",
	PVP: "PVP",
	ITEM_FRAME: "ITEM_FRAME",
	TRAPDOOR: "TRAPDOOR",
	EGG: "EGG",
	VISITOR_NOTIFICATIONS: "VISITOR_NOTIFICATIONS",
	FLY: "FLY",
	RIDE_PET: "RIDE_PET",
	DISGUISES: "DISGUISES",
	ORE_GENERATION: "ORE_GENERATION",
	VEHICLE: "VEHICLE",
	MAP: "MAP",
	CAULDRON: "CAULDRON",
	COMPOSTER: "COMPOSTER",
	BELL: "BELL",
	TARGET: "TARGET"
};

//#endregion
exports.Settings = Settings;
exports.VERSION = VERSION;
exports.getApiHealth = getApiHealth;
exports.listGameModes = listGameModes;