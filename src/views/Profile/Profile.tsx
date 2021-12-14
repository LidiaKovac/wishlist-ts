import { useEffect, useState } from "react";
import { Product, User } from "../../classes";
import { SingleProduct } from "../../components/SingleProduct/Single";
import { checkFavs, fetchLoggedIn, getFavs } from "../../util";
import "./Profile.scss";
export const Profile = () => {
    const [favs, setFavs] = useState<Array<Product>>()
    const [user, setUser] = useState<User>()
    useEffect(()=> {
      let cookie = document.cookie.split("USER_id=")[1]
        if(cookie && cookie.length > 0) {
          fetchLoggedIn(cookie).then(res => setUser(res))
        }
        getFavs(cookie).then((res)=> setFavs(res))
    }, [])
  return <>
  {/* <SingleProduct
                  product={p}
                  key={i}
                  isFavAlready={checkFavs(user!, Number(p.prod_id))}
                  createToast={(title: string, action: string) => setToastList((old) => [...old, action])}
                /> */}
    <div className="profile__wrap">
        {favs?.map((fav,i) => <SingleProduct product={fav} key={i} isFavAlready={checkFavs(user!, Number(fav.prod_id)) } createToast={(title: string, action: string) => {}}  />)}
    </div>
  </>;
};
