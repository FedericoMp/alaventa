import Footer from "../components/Footer"
import Header from "../components/Header"

const Product = ({id}) => {
    return (
        <section id="Product" className="flex flex-col h-full">
            <Header/>
            <div className="flex-1 flex flex-col justify-center items-center">
                <div>Product individual page, id: {id}</div>
            </div>
            <Footer/>
        </section>
    )
}

export default Product