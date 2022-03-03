import EducacionTarjeta from './EducacionTarjeta'
import { useSpring,a } from 'react-spring'


const Educacion = () => {

    const animation1 = useSpring({
        from: {y: 100, opacity:0},
        to: {y: 0, opacity:1},
        config: {duration: 1000},
    
    })

    const Edu = [
        {
            img: '../src/images/Educacion/UTN.png',
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
            img: '../src/images/Educacion/Udemy.png',
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
            img: '../src/images/Educacion/UTN.png',
            carrera: 'Ingeniería Industrial',
            institucion: 'UTN - FRBA',
            progreso: 60,
            estado: 'Suspendido',
            fecha: 'Feb 2014 - Julio 2018',
            descargar: '',
        },
        {
            img: '../src/images/Educacion/Acosta.png',
            carrera: 'Bachiller (Orientación Físico-Matemática)',
            institucion: 'ENS Nº2 Mariano Acosta',
            progreso: 100,
            estado: 'Completado',
            fecha: 'Feb 2008 - Dic 2011',
            descargar: '',
        }

    ]
    return ( 

    <div className='grid grid-cols-2 gap-x-3 gap-y-3 h-full justify-items-center place-items-center'>
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