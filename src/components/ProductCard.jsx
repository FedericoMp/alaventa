import { ChatBubbleLeftRightIcon } from "@heroicons/react/20/solid"

const ProductCard = ({product}) => {

    const wpLink = (prodName) => {
        const uri = `https://api.whatsapp.com/send?phone=+541139333972&text=Hola,%20ví%20un%20producto%20en%20A%20la%20Venta%20y%20quiero%20más%20info%20sobre:%20${prodName.replaceAll(' ',"%20")}`
        return uri
    }

    return (
        <details className="w-full p-3 border border-slate-300 rounded-md my-1">
            <summary>{product.name}</summary>
            <div className="group relative mt-5">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-blue-100 lg:aspect-none group-hover:opacity-90 lg:h-80">
                    <img src={product.imageSrc} alt={product.name} className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                </div>
                <div id="ProductData" className="py-0 px-5 my-5 lg:ps-20">
                    <div className="header-product-data">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
                        <p className="text-3xl tracking-tight text-gray-900 mt-3">{product.price}</p>
                    </div>
                    <div className="cta-wrapper flex mt-3 md:flex-row flex-col">
                        <a href={wpLink(product.name)} target="_blank" rel="noopener noreferrer" type="button" className="rounded-md bg-teal-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-teal-600 flex justify-center align-middle md:max-w-fit w-full md:mr-3 md:mb-0 mb-3">
                            <ChatBubbleLeftRightIcon className="mr-1.5 h-5 w-5 flex-shrink-0" aria-hidden="true"/>
                            Contactar
                        </a>
                    </div>
                    <div className="details-product-date mt-5">
                        <h2 className="text-sm font-medium text-gray-900">Detalles</h2>
                        <div className="mt-4 space-y-6">
                            <p className="text-sm text-gray-600">{product.details}</p>
                        </div>
                    </div>
                </div>
            </div>
        </details>
    )
}

export default ProductCard