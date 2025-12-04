export interface TraderOffer {
    item: string,
    maximumAmount: number,
    maximumAmountPerPlayer: number,
    value: number,
}

export interface FullTraderResponse {
    entityId: number,
    active: boolean,
    sellable: TraderOffer[],
    buyable: TraderOffer[],
}