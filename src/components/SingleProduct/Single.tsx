import React, { FC, useEffect, useState } from "react";
// import { Product } from "../../classes";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./Single.scss";
import { checkFavs, handleFavsApi } from "../../util";
import { useNavigate } from "react-router-dom";
import e from "express";
interface SingleProps {
  product: Product;
  isFavAlready?: boolean
  createToast?: Function
}
export const SingleProduct: FC<SingleProps> = ({ product, createToast, isFavAlready }) => {
  const navigation = useNavigate()
  const [isHovered, setIsHovered] = useState(false);
  const [isFav, setIsFav] = useState(false)
  useEffect(()=> {
    isFavAlready ? setIsFav(true) : setIsFav(false)
    // checkFavs(product.prod_id).then(res => res ? setIsFav(true) : setIsFav(false)) 
  }, [])

  const handleFavs = (action:string, e:React.MouseEvent) => {
    e.stopPropagation()
    setIsFav(favStatus => !favStatus)
    handleFavsApi(isFav ? "remove" : "add", product.prod_id)
    createToast!(product.name, action)
  }
  return (
    <>
      <div
        className={window.location?.pathname === '/manage' ? " single_product single_product--manage" : "single_product"}
        onClick={(e)=> {  e.stopPropagation();    navigation(`/details?prod=${product.prod_id}`)    }}
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)  }
      >
        {/* <h2>{product.name}</h2> */}
        <img src={product.images[0]} alt={product.name} />
        {window.location?.pathname === '/manage' || isHovered && <div > {!isFav ? <AiOutlineHeart onClick={(e) => {handleFavs("added to", e)}} /> : <AiFillHeart onClick={(e) => handleFavs("removed from", e)}/>} </div>}
      </div>
    </>
  );
};
