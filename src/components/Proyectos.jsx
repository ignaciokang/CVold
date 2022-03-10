import { useSpring, a } from "react-spring";
import imagenes from "../constants/images";


const Proyectos = () => {

    const paginas = [
        {
        nombre: 'LOL Trainer',
        web: 'http://ww',
        miniatura : imagenes.lolazo,
        descripcion: 'Proyecto personal dedicado al análisis de datos de League of Legends.',
        tecnologias: ['react', 'tailwindcss', 'axios', 'react-router', 'react-spring'],
    },
    {
        nombre: 'Inti Valley',
        web: 'http://ww',
        miniatura : imagenes.inti,
        descripcion: 'Página web para la marca de vinos Inti Valley.',
        tecnologias: ['react', 'tailwindcss', 'axios', 'react-router', 'react-spring'],  
    },
    
    
]

    const animation1 = useSpring({
        from: {y: 100, opacity:0},
        to: {y: 0, opacity:1},
        config: {duration: 1000},
    
    })

    return ( 
        <a.div style={animation1} className="grid md:grid-cols-2 sm:grid-cols-1">

        {paginas.map( (data, index) => {
            return (
                <div className="bg-white
                 mx-8 my-8 text-center rounded-xl">
                    <img src={data.miniatura} className="px-2 pt-2" alt= "Web"/>
                    <h2 className="p-2">{data.nombre}</h2>
                </div>

            )

        })}

        </a.div>
     );
}
 
export default Proyectos;