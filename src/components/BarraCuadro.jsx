const BarraCuadro = ({pagina, setPagina}) => {

    const activaResumen = () => {
        setPagina('Resumen')
    }
    const activaEducacion = () => {
        setPagina('Educacion');
    }
    const activaLaboral = () => {
        setPagina('Laboral');
    }
    const activaProyectos = () => {
        setPagina('Proyectos');
    }

    return (

        <nav className="grid grid-cols-4 text-center h-full content-center  sm:w-full lg:w-2/3 sm:text-[8px] md:text-lg lg:text-lg">


            <button
                className= {pagina === 'Resumen' ? ('font-bold text-VerdeCatuchi uppercase') : ('hover:text-VerdeCatuchi uppercase')}
                onClick = {activaResumen}
            >
            Resumen
            </button>
            <button
                className={pagina === 'Educacion' ? ('font-bold text-VerdeCatuchi uppercase') : ('hover:text-VerdeCatuchi uppercase')}
                onClick = {activaEducacion}
            >
            Educacion
            </button>
            <button
                className={pagina === 'Laboral' ? ('font-bold text-VerdeCatuchi uppercase') : ('hover:text-VerdeCatuchi uppercase')}
                onClick = {activaLaboral}
            >
            Laboral
            </button>
            <button
                className={pagina === 'Proyectos' ? ('font-bold text-VerdeCatuchi uppercase') : ('hover:text-VerdeCatuchi uppercase')}
                onClick = {activaProyectos}
            >
            Proyectos
            </button>

            </nav>
     );
}
 
export default BarraCuadro;