import EducacionTarjeta from './EducacionTarjeta'
import { useSpring,a } from 'react-spring'
import imagenes from "../../constants/images"


const Educacion = () => {

    const animation1 = useSpring({
        from: {y: 100, opacity:0},
        to: {y: 0, opacity:1},
        config: {duration: 1000},
    
    })

    const Edu = [
        {
            img: imagenes.utn,
            carrera: 'FullStack Developer',
            institucion: 'UTN - Centro e-Learning',
            progreso: 100,
            estado: 'Completado',
            fecha: 'Mar 2021 - Sep 2021',
            descargar: 'Descargar certificado',
            href: "/src/documents/FullStackDeveloper.pdf",
            download: "FullStackDeveloper.pdf",
        },
        {
            img: imagenes.udemy,
            carrera: 'React: Hooks, Redux, Context,  MERN',
            institucion: 'Udemy',
            progreso: 50,
            estado: 'Completado',
            fecha: 'Ene 2022 - Feb 2022',
            descargar: 'Descargar certificado',
            href: "/src/documents/React-GuiaCompleta.pdf",
            download: "React-GuiaCompleta.pdf",
        },
        {
            img: imagenes.utn,
            carrera: 'Ingeniería Industrial',
            institucion: 'UTN - FRBA',
            progreso: 60,
            estado: 'Suspendido',
            fecha: 'Feb 2014 - Julio 2018',
            descargar: '',
        },
        {
            img: imagenes.acosta,
            carrera: 'Bachiller (Orientación Físico-Matemática)',
            institucion: 'ENS Nº2 Mariano Acosta',
            progreso: 100,
            estado: 'Completado',
            fecha: 'Feb 2008 - Dic 2011',
            descargar: '',
        }

    ]
    return ( 

    <div className='grid lg:grid-cols-2 md:gap-x-3 md:gap-y-3 sm:grid-cols-1 h-full justify-items-center place-items-center overflow-y-auto lg:overflow-hidden'>
        {Edu.map( (data, index) => {

            return(
                <a.div style={animation1}>
                   <EducacionTarjeta    
                        data={data}
                        key={index}
               />
               </a.div>
               )

        } )}
 
    </div>
     );
}
 
export default Educacion;