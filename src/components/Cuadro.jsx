import BarraCuadro from "./BarraCuadro";
import Resumen from "./Resumen";
import Experiencia from "./Experiencia/Experiencia";
import Proyectos from "./Proyectos";
import Educacion from "./Educacion/Educacion";
import { useState } from "react";


const Cuadro = () => {

  const [pagina, setPagina] = useState('Resumen');


  return (
    <div className="h-full">
      <div className="lg:h-1/6 sm:h-[10%]">
        <BarraCuadro
          pagina = {pagina}
          setPagina = {setPagina}
        />
      </div>
      <div className="lg:h-5/6 sm:h-[90%] bg-[#F1F2F2]">
        
       {pagina === 'Resumen' ? (<Resumen/>) : ''}
       {pagina === 'Educacion' ? (<Educacion/>) : ''}
       {pagina === 'Proyectos' ? (<Proyectos/>) : ''}
       {pagina === 'Laboral' ? (<Experiencia/>) : ''}


      </div>
    </div>
  );
};

export default Cuadro;
