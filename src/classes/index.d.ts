interface Product {
    name: string,
    images: Array<string>,
    url: string,
    prod_id: string,
    internal_id: string
}

interface User {
    _id: string,
    name: string,
    googleID: string,
    propic: string,
    favs: Array<string>
}


interface ApiResponse {
    status: number | undefined
    data: Array<Product> | Product | undefined
}