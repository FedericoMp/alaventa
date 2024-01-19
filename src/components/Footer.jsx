const Footer = () => {

    const getYear = () => {
        return new Date().getFullYear();
    }

    return (
        <footer className="mx-auto flex justify-center items-center p-6 lg:px-8 font-sans italic text-sm text-gray-400" aria-label={"A la venta" + getYear()}>A la venta - { getYear() }</footer>
    )
}

export default Footer