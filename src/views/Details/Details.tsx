import "./Details.scss"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { fetchSingle } from "../../util"
export const Details = () =>{
    const [searchParams, setSearchParams] = useSearchParams()
    const [product, setProduct] = useState<Product>()
    useEffect(()=> {
        fetchSingle(searchParams.get("prod")!)
            .then(({data}) => setProduct(data as Product)         )
    }, [])
    
    return(<>
    {product && <> <h1>{product.name}</h1> <img src={product.images[0]}/> </>}
 </>)}