import { useEffect, useState } from "react";
import { SingleProduct } from "../../components/SingleProduct/Single";
import { getFavs } from "../../util";
import "./Profile.scss";
export const Profile = () => {
    const [favs, setFavs] = useState<Array<number>>()
    useEffect(()=> {
        let cookie = document.cookie.split("USER_id=")[1]
        getFavs(cookie).then((res)=> setFavs(res))
    }, [])
  return <>
    <div className="profile__wrap">
        {/* {favs.map(fav => <SingleProduct/>)} */}
    </div>
  </>;
};
