import ExperienciaTarjeta from "./ExperienciaTarjeta";
import ExperienciaTarjetaBack from "./ExperienciaTarjetaBack";
import { useSpring, a } from "react-spring";
import { useState } from "react";

const Experiencia = () => {

        const Globant = {
            puesto: 'Referente de equipo Industrial (Consultor Sr)',
            empresa: 'Globant',
            rubro: 'Tecnología',
            desde: 'Julio 2018',
            hasta: 'Enero 2022',
            tareas: ['Liderar un equipo de trabajo con 5 personas a cargo. Fijar los objetivos, dar seguimiento (feedback) y realizar la evaluación anual de cada integrante del equipo. Capacitar y transfir el know how al equipo con los temas del frente industrial.', 'Asegurar el cumplimiento y calidad de servicio al cliente. brindando un servicio de soporte a la empresa ARCOR del sistema JDE en temas referidos a: Gestión de Compras, Inventarios, Mantenimiento de Equipos, Costos, Manufactura, Grower y Ventas.', 'Asegurar el cumplimiento y calidad de servicio al cliente.', ' Controlar métricas e indicadores de servicio.', 'Documentar procedimientos.', 'Ayudar y gestionar la resolución de incidentes además de contribuir con la documentación correspondiente a la solución de los problemas (troubleshootings) y posibles mejoras.',],
            logo: '../src/images/Trabajos/globant.png',
        }

        const Nicona =
        {
            puesto: 'Analista Administrativo',
            empresa: 'Nicona SRL',
            rubro: 'Industria Textil',
            desde: 'Enero 2014',
            hasta: 'Mayo 2018',
            tareas: ['Control de producción'],
            logo: '../src/images/Trabajos/Nicona.png',
        }

        const Kurzza =
        {
            puesto: 'Encargado',
            empresa: 'Kurzza',
            rubro: 'Local de indumentaria',
            desde: 'Mayo 2012',
            hasta: 'Mayo 2018',
            tareas: 'Local',
            logo: '../src/images/Trabajos/Kurzza.png',
        }


        const [glob, setGlob] = useState(true);
        const [nicon, setNicon] = useState(true);
        const [kurz, setKurz] = useState(true);

        const globs = () => {
            glob ? setGlob(false) : setGlob(true)
        }
        const nicons = () => {
            nicon ? setNicon(false) : setNicon(true)
        }
    

    const animation1 = useSpring({
        from: {x: 100, opacity:0},
        to: {x: 0, opacity:1},
        config: {duration: 1000},
    
    })

    return ( 
       <div className=" h-full grid grid-rows-3 py-12 px-12 relative "> 

                <a.div style={animation1}>
                 <button onClick={globs} className="w-full">
                     { glob ? (
                         <ExperienciaTarjeta
                         trabajo= {Globant}
                         />
                         ):(
                            <ExperienciaTarjetaBack
                            trabajo= {Globant}
                            />)
                            }
                   </button>
                </a.div>
                <a.div style={animation1}>
                 <button onClick={nicons} className="w-full">
                     { nicon ? (
                         <ExperienciaTarjeta
                         trabajo= {Nicona}
                         />
                         ):(
                            <ExperienciaTarjetaBack
                            trabajo= {Nicona}
                            />)
                            }
                   </button>
                </a.div>
                <a.div style={animation1}>
                 <button onClick={globs} className="w-full">
                     { glob ? (
                         <ExperienciaTarjeta
                         trabajo= {Globant}
                         />
                         ):(
                            <ExperienciaTarjetaBack
                            trabajo= {Globant}
                            />)
                            }
                   </button>
                </a.div>
      
           </div>
    
     );
}
 
export default Experiencia;