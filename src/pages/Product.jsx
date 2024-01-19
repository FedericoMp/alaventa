import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Loader from "../components/Loader"
import products from "../utils/data"
import { useLocation } from "wouter"

const Product = ({id}) => {

    const [location, setLocation] = useLocation()
    const [load, setLoad] = useState(true)
    const [prod, setProd] = useState({})

    if (!id || !location.includes('producto')) {
        setLocation('/error')
    }

    const filterProduct = () => {
        const currProd = products.filter(p => p.id === Number(id))[0]
        setProd(currProd);
    }

    useEffect(() => {
        setTimeout(() => {
            filterProduct()
            setLoad(false)
        }, 2000)
    }, [])

    return (
        <section id="Product" className="flex flex-col h-full">
            <Header/>
            <div className="flex-1 flex flex-col justify-center items-center">
                { !load && (prod && prod.imageSrc) ?
                    <>      
                        <img src={prod.imageSrc} alt={prod.imageAlt} className="mx-auto md:h-6/12 md:w-6/12 h-full w-full object-cover object-center"/>
                        <div className="py-0 px-8 mt-5">
                            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Basic Tee 6-Pack</h1>
                                <p className="text-3xl tracking-tight text-gray-900">$192</p>
                            </div>
                            <div className="mt-10">
                                <h2 className="text-sm font-medium text-gray-900">Details</h2>
                                <div className="mt-4 space-y-6">
                                    <p className="text-sm text-gray-600">The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.</p>
                                </div>
                            </div>
                            <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
                                <div className="mt-4">
                                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                        <li className="text-gray-400"><span className="text-gray-600">Hand cut and sewn locally</span></li>
                                        <li className="text-gray-400"><span className="text-gray-600">Dyed with our proprietary colors</span></li>
                                        <li className="text-gray-400"><span className="text-gray-600">Pre-washed &amp; pre-shrunk</span></li>
                                        <li className="text-gray-400"><span className="text-gray-600">Ultra-soft 100% cotton</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </> : <Loader/>
                }
            </div>
            <Footer/>
        </section>
    )
}

export default Product