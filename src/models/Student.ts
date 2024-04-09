export interface BaseStudent {
    name: string,
    rank: number,
    state: string
}

export interface Student extends BaseStudent {
    id: number
}
