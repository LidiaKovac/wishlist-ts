export const createTemplateHTML = (HTMLString: string) => {
    let tem = document.createElement("template");
    tem.innerHTML = HTMLString;
    return tem
}

export const fetchData = async (url: string): Promise<{image: string, store: string} | undefined> => {
    let trimmed = url.includes("shein") ? "shein." + url.split(".shein.")[1] : url.split("https://www.")[1] || url.split("https://")[1]
    console.log(trimmed);
    let res = await fetch("http://localhost:3001/api/store?=" + trimmed)
    let json = await res.json()

    return json
}

// HOOKS 

export const useLoggedIn = async () => {
    const id = document.cookie.split("USER_id=")[1]
    if (id) {
        let userData = {}
        let raw = await fetch(`${process.env.REACT_APP_BE_URL}/api/user/me?=${id}`)
        userData = await raw.json()
        console.log(userData);

        return userData

    } else return false
}