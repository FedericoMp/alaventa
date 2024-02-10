import { Link } from 'wouter'
import { CursorArrowRaysIcon, ShoppingCartIcon } from '@heroicons/react/20/solid'

const Header = () => {
    return (
        <header className="bg-sky-950 flex items-center p-6 max-w-screen-lg mx-auto w-full">
            <Link href="/productos" className="flex-1 flex items-center">
                <CursorArrowRaysIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-white" aria-hidden="true" />
                <h1 className="text-2xl font-bold tracking-tight font-sans text-white sm:text-3xl" aria-label="A la venta">
                    A la Venta
                </h1>
            </Link>
            <ShoppingCartIcon className="shop-icon mr-1.5 h-5 w-5 flex-shrink-0 text-indigo-50" aria-hidden="true" />
        </header>
    )
}

export default Header