import ProductCard from "./ProductCard"

const ProductsGrid = ({products}) => {
    return (
        <div id="ProductsGrid" className="w-full">
            <div className="mx-auto px-8">
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductsGrid