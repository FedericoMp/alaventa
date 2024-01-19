import { Link } from 'wouter'

const ProductCard = ({product}) => {
    return (
        <Link href={`/producto/${product.id}`}>
            <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img src={product.imageSrc} alt={product.imageAlt} className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                </div>
                <h3 className="text-sm text-gray-700 mt-2">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
            </div>
        </Link>
    )
}

export default ProductCard