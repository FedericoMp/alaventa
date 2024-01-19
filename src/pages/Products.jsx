import Footer from "../components/Footer"
import Header from "../components/Header"
import InfoBanner from "../components/InfoBanner"
import ProductsGrid from "../components/ProductsGrid"
import products from "../utils/data"

const Products = () => {
    return (
        <section id="Products" className="flex flex-col h-full">
            <Header/>
            <InfoBanner/>
            <div className="flex-1 flex flex-col justify-center items-center">
                 <ProductsGrid products={products}/>
            </div>
            <Footer/>
        </section>
    )
}

export default Products