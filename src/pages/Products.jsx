import Footer from "../components/Footer"
import Header from "../components/Header"
import InfoBanner from "../components/InfoBanner"
import ProductsGrid from "../components/ProductsGrid"

// Mock data
const products = [
  {
    id: 1,
    name: 'Basic Tee 1',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in dark grey.",
    price: '$35',
    color: 'Dark grey',
  },
  {
    id: 2,
    name: 'Basic Tee 2',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$45',
    color: 'Black',
  },
  {
    id: 3,
    name: 'Basic Tee 3',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in grey.",
    price: '$25',
    color: 'Grey',
  },
  {
    id: 4,
    name: 'Basic Tee 4',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in light black.",
    price: '$15',
    color: 'Light black',
  }
]

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