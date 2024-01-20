const InfoBanner = ({productPage}) => {
    return (
        <section className={"py-0 mb-2 self-start w-full" + (!productPage ? " px-8" : " mt-8")}>
            <h3 className="text-sm font-medium text-gray-900">Pasos a seguir para consultar:</h3>
            <div className="mt-2">
                <ul role="list" className="list-decimal  pl-4 text-sm">
                    <li className="text-gray-400"><span className="text-gray-600">Ver el catálogo</span></li>
                    <li className="text-gray-400"><span className="text-gray-600">Acceder a un producto</span></li>
                    <li className="text-gray-400"><span className="text-gray-600">Leer la descripción detallada</span></li>
                    <li className="text-gray-400"><span className="text-gray-600">Consultar haciendo click en "contactar"</span></li>
                </ul>
            </div>
        </section>
    )
}

export default InfoBanner