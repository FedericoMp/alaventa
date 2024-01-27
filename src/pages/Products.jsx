import Footer from "../components/Footer"
import Header from "../components/Header"
import InfoBanner from "../components/InfoBanner"
import ProductsGrid from "../components/ProductsGrid"
import products from "../utils/data"
import { Helmet } from "react-helmet-async"

const Products = () => {
    return (
        <>
            <Helmet>
                <title>A la Venta - Productos</title>
                <link rel="canonical" href="https://federicomp.github.io/alaventa/productos" />
                <meta name="description" content="Catálogo de diversos productos, que se encuentran a la venta." />
            </Helmet>
            <section id="Products" className="flex flex-col h-full">
                <Header/>
                <div className="bg-gradient-to-b from-indigo-200 flex-1 flex flex-col justify-start items-center max-w-screen-lg lg:mx-auto">
                    <InfoBanner/>
                    <ProductsGrid products={products}/>
                </div>
                <Footer/>
            </section>
        </>
    )
}

export default Products