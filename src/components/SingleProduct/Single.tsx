import { FC, useEffect, useState } from "react";
import { Product } from "../../classes";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./Single.scss";
import { checkFavs, handleFavsApi } from "../../util";
interface SingleProps {
  product: Product;
  isFavAlready: boolean
  createToast: Function
}
export const SingleProduct: FC<SingleProps> = ({ product, createToast, isFavAlready }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFav, setIsFav] = useState(false)
  useEffect(()=> {
    isFavAlready ? setIsFav(true) : setIsFav(false)
    // checkFavs(product.prod_id).then(res => res ? setIsFav(true) : setIsFav(false)) 
  }, [])

  const handleFavs = (action:string) => {
    setIsFav(favStatus => !favStatus)
    handleFavsApi(isFav ? "remove" : "add", Number(product.prod_id))
    createToast(product.name, action)
  }
  return (
    <>
      <div
        className="single_product"
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)  }
      >
        {/* <h2>{product.name}</h2> */}
        <img src={product.images[0]} alt={product.name} />
        {isHovered && <div > {!isFav ? <AiOutlineHeart onClick={() => handleFavs("added to")} /> : <AiFillHeart onClick={() => handleFavs("removed from")}/>} </div>}
      </div>
    </>
  );
};
