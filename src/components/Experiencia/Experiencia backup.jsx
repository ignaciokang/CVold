import ExperienciaTarjeta from "./ExperienciaTarjeta";
import { useSpring, a } from "react-spring";

const Experiencia = () => {

    const Trabajos = [
        {
            puesto: 'Consultor Sr',
            empresa: 'Globant',
            rubro: 'Tecnología',
            desde: 'Julio 2018',
            hasta: 'Enero 2022',
            tareas: 'Supervisar al equipo',
            logo: '../src/images/Trabajos/globant.png',
        },
        {
            puesto: 'Analista Administrativo',
            empresa: 'Nicona SRL',
            rubro: 'Industria Textil',
            desde: 'Enero 2014',
            hasta: 'Mayo 2018',
            tareas: 'Control de producción',
            logo: '../src/images/Trabajos/Nicona.png',
        },
        {
            puesto: 'Encargado',
            empresa: 'Kurzza',
            rubro: 'Local de indumentaria',
            desde: 'Mayo 2012',
            hasta: 'Mayo 2018',
            tareas: 'Local',
            logo: '../src/images/Trabajos/Kurzza.png',
        },
               
    ]

    const animation1 = useSpring({
        from: {x: 100, opacity:0},
        to: {x: 0, opacity:1},
        config: {duration: 1000},
    
    })

    return ( 
       <div className=" h-full grid grid-rows-3 items-center py-12 px-12"> 
           {Trabajos.map( (trabajo, index) => {

               return(
                   <a.div style={animation1}>
                   <ExperienciaTarjeta
                   trabajo= {trabajo}
                   key= {index}
                   />
                   </a.div>
               )
           })}
      
           </div>
    
     );
}
 
export default Experiencia;