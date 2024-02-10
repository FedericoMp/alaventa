import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Loader from "../components/Loader"
import InfoBanner from "../components/InfoBanner"
import products from "../utils/data"
import { useLocation, Link } from "wouter"
import { ArrowLongLeftIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/20/solid"
import { Helmet } from "react-helmet-async"

const Product = ({id}) => {

    const [location, setLocation] = useLocation()
    const [load, setLoad] = useState(true)
    const [prod, setProd] = useState({})

    if (!id || !location.includes('producto')) {
        setLocation('/error')
    }

    const filterProduct = () => {
        const currProd = products.filter(p => p.id === Number(id))[0]
        if (currProd) {
            setProd(currProd);
        } else {
            setLocation('/error')
        }
    }

    const wpLink = (prodName) => {
        const uri = `https://api.whatsapp.com/send?phone=+541139333972&text=Hola,%20ví%20un%20producto%20en%20A%20la%20Venta%20y%20quiero%20más%20info%20sobre:%20${prodName.replaceAll(' ',"%20")}`
        return uri
    }

    useEffect(() => {
        setTimeout(() => {
            filterProduct()
            setLoad(false)
        }, 300)
    }, [])

    return (
        <>
            <Helmet>
                <title>A la Venta {`${prod ? ('- ' + prod.name) : ''}`}</title>
                <link rel="canonical" href={`https://federicomp.github.io/alaventa/producto/${id}`} />
                <meta name="description" content="Descripción detallada junto a imágen del producto que se encuentra a la venta." />
            </Helmet>
            <section id="Product" className="flex flex-col h-full">
                <Header/>
                <div className="flex-1 flex sm:flex-row flex-col justify-center items-center max-w-screen-lg mx-auto">
                    { !load && (prod && prod.imageSrc) ?
                        <>      
                            <img src={prod.imageSrc} alt={prod.name} className="mx-auto md:h-6/12 md:w-6/12 h-full w-full object-cover object-center"/>
                            <div id="ProductData" className="py-0 px-8 mt-5 lg:ps-20">
                                <div className="header-product-data">
                                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{prod.name}</h1>
                                    <p className="text-3xl tracking-tight text-gray-900 mt-3">{prod.price}</p>
                                </div>
                                <div className="cta-wrapper flex mt-3 md:flex-row flex-col">
                                    <a href={wpLink(prod.name)} target="_blank" rel="noopener noreferrer" type="button" className="rounded-md bg-teal-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-teal-600 flex justify-center align-middle md:max-w-fit w-full md:mr-3 md:mb-0 mb-3">
                                        <ChatBubbleLeftRightIcon className="mr-1.5 h-5 w-5 flex-shrink-0" aria-hidden="true"/>
                                        Contactar
                                    </a>
                                    <Link href="/productos" type="button" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 flex justify-center align-middle md:max-w-fit w-full">
                                        <ArrowLongLeftIcon className="mr-1.5 h-5 w-5 flex-shrink-0" aria-hidden="true"/>
                                        Ir al catálogo
                                    </Link>
                                </div>
                                <div className="details-product-date mt-10">
                                    <h2 className="text-sm font-medium text-gray-900">Detalles</h2>
                                    <div className="mt-4 space-y-6">
                                        <p className="text-sm text-gray-600">{prod.details}</p>
                                    </div>
                                    <InfoBanner productPage={true}/>
                                </div>
                            </div>
                        </> : <Loader/>
                    }
                </div>
                <Footer/>
            </section>
        </>
    )
}

export default Product