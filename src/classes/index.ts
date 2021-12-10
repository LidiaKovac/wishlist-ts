export interface Product {
    name: string,
    images: Array<string>,
    url: string,
    prod_id: number
}

export interface User {
    _id: string,
    name: string,
    googleID: string,
    propic: string,
    __v: number,
    favs: Array<number>
}