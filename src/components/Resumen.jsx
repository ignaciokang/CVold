import {
  SiCss3,
  SiJavascript,
  SiMongodb,
  SiHtml5,
  SiAngular,
  SiReact,
} from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";
import { useSpring, a } from "react-spring";

const Resumen = () => {
  const animation1 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });



  return (
    <div className="h-full bg-gray-200">
        <a.div style={animation1} className="h-1/4 table relative md:mx-12 lg:mx-6 xl:mx-6">

          <p className="align-middle table-cell bg-white rounded-xl px-12 py-8 mt-8 top-6 relative md:text-md sm:text-tiny lg:text-md xl:text-md">
          Soy un desarrollador Front End en constante crecimiento. Apasionado
          por crear y descubrir, veo la programación como vía de expresión.
          Aprendo rápido y puedo integrarme cómodamente a cualquier equipo. Me
          caraterizo por ser práctico, prolijo, comprometido, creativo e
          innovador.
          </p>

        </a.div>

      <a.div
        style={animation1}
        className="grid grid-cols-4 text-black justify-items-center content-evenly h-3/4 "
      >
        <div className="bg-white h-32 w-32 text-center rounded-xl grid grid-cols-1 items-center">
          <SiReact className="text-7xl mx-auto bg-cyan-400 p-2 rounded-xl text-white" />
          <h2 className="text-lg">React</h2>
        </div>
        <div className="bg-white h-32 w-32 text-center rounded-xl grid grid-cols-1 items-center">
          <SiHtml5 className="text-7xl mx-auto bg-orange-600 p-2 rounded-xl text-white" />
          <h2 className="text-lg">HTML</h2>
        </div>
        <div className="bg-white h-32 w-32 text-center rounded-xl grid grid-cols-1 items-center">
          <SiCss3 className="text-7xl mx-auto bg-blue-600 p-2 rounded-xl text-white" />
          <h2 className="text-lg">CSS</h2>
        </div>
        <div className="bg-white h-32 w-32 text-center rounded-xl grid grid-cols-1 items-center">
          <SiJavascript className="text-7xl mx-auto bg-yellow-400 p-2 rounded-xl text-white" />
          <h2 className="text-lg">Javascript</h2>
        </div>
        <div className="bg-white h-32 w-32 text-center rounded-xl grid grid-cols-1 items-center">
          <SiMongodb className="text-7xl mx-auto bg-green-600 p-2 rounded-xl text-white" />
          <h2 className="text-lg">MongoDB</h2>
        </div>
        <div className="bg-white h-32 w-32 text-center rounded-xl grid grid-cols-1 items-center">
          <AiOutlineConsoleSql className="text-7xl mx-auto bg-black p-2 rounded-xl text-white" />
          <h2 className="text-lg">SQL</h2>
        </div>
        <div className="bg-white h-32 w-32 text-center rounded-xl grid grid-cols-1 items-center">
          <SiAngular className="text-7xl mx-auto bg-red-600 p-2 rounded-xl text-white" />
          <h2 className="text-lg">Angular</h2>
        </div>
        <div className="bg-white h-32 w-32 text-center rounded-xl grid grid-cols-1 items-center">
          <FaNodeJs className="text-7xl mx-auto bg-lime-600 p-2 rounded-xl text-white" />
          <h2 className="text-lg">Node.Js</h2>
        </div>
      </a.div>  
    </div>
  );
};

export default Resumen;
