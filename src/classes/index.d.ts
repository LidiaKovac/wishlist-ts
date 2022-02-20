interface Product {
    name: string,
    images: Array<string>,
    url: string,
    prod_id: number
}

interface User {
    _id: string,
    name: string,
    googleID: string,
    propic: string,
    favs: Array<number>
}