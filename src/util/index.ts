import { Product, User } from "../classes"
//API
const id = document.cookie.split("USER_id=")[1]
// Fetch data
export const fetchData = async (query: string): Promise<any> => {
    try {
        
        let res = await fetch(process.env.REACT_APP_BE_URL + "/api/store/" + query)
        if (res.ok) {
            let json = await res.json()
            let manipulatedJson = json.map((j:{name: string, images: string, query: string}) => {
                let images = j.images?.split(",").map(im =>  im.replace("wid=40", "wid=600")) //from string, creates array of images
                return {...j, images}
            })
            return {data: manipulatedJson, status: 200}
        } else return {status: res.status}
    } catch (error) {
     console.error(error)   
    }
}

//add-delete favs
export const handleFavsApi = async(action:string, pid:number) => {
    try {
        console.log(pid);
        
        
        let result = await fetch(`${process.env.REACT_APP_BE_URL}/api/user/favs?action=${action}&id=${id}`, {
            method: "PUT",
            body: JSON.stringify({prod_id: pid}),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        })
        let user = await result.json()
        console.log(user)
    } catch (error) {
        console.error(error)
    }
}

//returns true is the user has added the product to favs
export const checkFavs = (user:User, id:number):boolean => {
        let {favs} = user
        if (favs.includes(id)) {
            return true
        } else return false
}

//gives back the array of favs

// HOOKS 

export const fetchLoggedIn = async (cookieId:string) => {
    if (cookieId) {
        
        let raw = await fetch(`${process.env.REACT_APP_BE_URL}/api/user/me?id=${cookieId}`)
        let userData = await raw.json()
        console.log(userData);

        return userData

    } else return false
}

