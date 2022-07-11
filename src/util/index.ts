
//API
const id = document.cookie.split("USER_id=")[1]
// Fetch data
export const fetchData = async (query: string, page:number): Promise<ApiResponse> => {
    let prods = []
    try {
        
        let res = await fetch(process.env.REACT_APP_BE_URL + "/api/store/?query=" + query + "&page=" + page)
        if (res.ok) {
            let {products} = await res.json()
            console.log(products);
            prods = products
            return {data: products, status: 200}
        } else return {status: res.status, data: []}
    } catch (error) {
     console.error(error)   
    }
    return prods
}

export const fetchSingle = async (id:string): Promise<ApiResponse> => {
    let prods = []
    try {
        let res = await fetch(process.env.REACT_APP_BE_URL + "/api/store/" + id)
        if (res.ok) {
            let products = await res.json()
            console.log(products);
            products.store = products.url.includes("asos") ? "Asos" 
                           : products.url.includes("aboutyou") ? "About You"
                           : products.url.includes("hm") ? "HM"
                           : products.url.includes("ovs") ? "OVS"
                           : products.url.includes("shein") ? "Shein"
                           : "Subdued"
            prods = products
            
            return {data: products, status: 200}
        } else return {status: res.status, data: []}
    } catch (error) {
     console.error(error)   
    }
    return prods
}

//add-delete favs
export const handleFavsApi = async(action:string, pid:string) => {
    try {
        
        let result = await fetch(`${process.env.REACT_APP_BE_URL}/api/user/favs?action=${action}&id=${id}`, {
            method: "PUT",
            body: JSON.stringify({prod_id: pid}),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        })
        let user = await result.json()
        // console.log(user)
    } catch (error) {
        console.error(error)
    }
}

//returns true is the user has added the product to favs
export const checkFavs = (user:User, id:string):boolean => {
        let {favs} = user
        if (favs.includes(id)) {
            return true
        } else return false
}

//gives back the array of favs
export const getFavs = async(userId:string) => {
    let raw = await fetch(`${process.env.REACT_APP_BE_URL}/api/user/favs?id=${userId}`)
    let {favs} = await raw.json()
    return favs
}

// HOOKS 

export const fetchLoggedIn = async (cookieId:string) => {
    if (cookieId && cookieId !== null) {
        let raw = await fetch(`${process.env.REACT_APP_BE_URL}/api/user/me?id=${cookieId}`)
        
        let userData = await raw.json()

        return userData

    } else return false
}

