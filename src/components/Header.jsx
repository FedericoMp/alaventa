import { Link } from 'wouter'
import { CursorArrowRaysIcon } from '@heroicons/react/20/solid'

const Header = () => {
    return (
        <header className="flex items-center p-6 lg:px-8">
            <Link href="/productos" className="flex items-center">
                <CursorArrowRaysIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-900" aria-hidden="true" />
                <h1 className="text-2xl font-bold tracking-tight font-sans text-gray-900 sm:text-3xl" aria-label="A la venta">
                    A la venta
                </h1>
            </Link>
        </header>
    )
}

export default Header