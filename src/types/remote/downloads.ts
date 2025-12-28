export interface DownloadCountElement {
    key: string,
    /**
     * @description originally `n` on the api but modified by skyblock.js
     */
    downloads: number,
    id: string,
}

export type FullDownloadCountResponse = DownloadCountElement[]