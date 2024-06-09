export interface IVotes {
    esittim: [number, boolean]
    esitip_atirman: [number, boolean]
    esitejaqpan: [number, boolean]
    usinis_etemen: [number, boolean]
}
export interface IVotesRemove {
    slug: string | undefined,
    vote_id: number
}

export interface IVotesData {
    vote_id: number,
    slug: string
}