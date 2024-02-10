import { Link } from 'wouter'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ArrowLongLeftIcon } from '@heroicons/react/20/solid'

const NotFound = () => {
    return (
        <section id="NotFound" className="flex flex-col h-full">
            <Header/>
            <div className="flex-1 flex flex-col justify-center items-center bg-gradient-to-b from-blue-100 max-w-screen-lg mx-auto w-full">
                <h1 className="text-2xl font-sans text-gray-900 sm:text-3xl mb-3 max-w-fit">Ups, ocurrió un error!</h1>
                <p className="mb-3 max-w-fit text-center">Podés volver al catálogo de productos haciendo click en el botón.</p>
                <Link href="/productos" type="button" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 flex justify-between align-middle max-w-fit">
                    <ArrowLongLeftIcon className="mr-1.5 h-5 w-5 flex-shrink-0" aria-hidden="true"/>
                    Ir al catálogo
                </Link>
            </div>
            <Footer/>
        </section>
    )
}

export default NotFound