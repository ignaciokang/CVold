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
      <div className="h-1/6">
        <BarraCuadro
          pagina = {pagina}
          setPagina = {setPagina}
        />
      </div>
      <div className="h-5/6 bg-[#F1F2F2]">
        
       {pagina === 'Resumen' ? (<Resumen/>) : ''}
       {pagina === 'Educacion' ? (<Educacion/>) : ''}
       {pagina === 'Proyectos' ? (<Proyectos/>) : ''}
       {pagina === 'Laboral' ? (<Experiencia/>) : ''}


      </div>
    </div>
  );
};

export default Cuadro;
