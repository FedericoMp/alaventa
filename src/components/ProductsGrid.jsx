import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import Loader from "../components/Loader"

const ProductsGrid = ({products}) => {

    const [load, setLoad] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoad(false)
        }, 300)
    }, [])

    return (
        <div id="ProductsGrid" className="w-full mb-5 flex-1">
            { !load
                ? <div className="mx-auto px-8 flex flex-col justify-start items-start w-full h-full minw-1024">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
                  </div>
                : <div className="flex flex-col justify-center items-center w-full h-full minw-1024">
                    <Loader/>
                  </div> 
            }
        </div>
    ) 
}

export default ProductsGrid