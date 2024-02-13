const InfoBanner = ({productPage}) => {
    return (
        <section className={"py-0 mb-2 self-start w-full" + (!productPage ? " px-8 mt-3" : " mt-8")}>
            <h3 className="text-sm font-medium text-gray-900">Pasos a seguir para consultar:</h3>
            <div className="mt-2">
                <ul role="list" className="list-decimal  pl-4 text-sm">
                    <li className="text-gray-400"><span className="text-gray-600">Elegir un producto</span></li>
                    <li className="text-gray-400"><span className="text-gray-600">Leer la descripción detallada</span></li>
                    <li className="text-gray-400"><span className="text-gray-600">Consultar haciendo click en "contactar"</span></li>
                </ul>
            </div>
            <p className="mt-3">Todos los precios son negociables 😁</p><br />
        </section>
    )
}

export default InfoBanner