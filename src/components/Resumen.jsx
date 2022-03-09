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
        <a.div style={animation1} className="h-1/4 table relative sm:mx-4 lg:mx-6 sm:text-tiny md:text-[1rem]">

          <p className="align-middle table-cell bg-white rounded-xl sm:px-6 sm:py-4 lg:px-12 lg:py-8 lg:top-6 sm:top-4 relative">
          Soy un desarrollador Front End en constante crecimiento. Apasionado
          por crear y descubrir, veo la programación como vía de expresión.
          Aprendo rápido y puedo integrarme cómodamente a cualquier equipo. Me
          caraterizo por ser práctico, prolijo, comprometido, creativo e
          innovador.
          </p>

        </a.div>

      <a.div
        style={animation1}
        className="grid lg:grid-cols-4 sm:grid-cols-2 text-black justify-items-center content-evenly h-3/4 "
      >
        <div className="bg-white md:h-32 md:w-32 text-center rounded-xl grid grid-cols-1 items-center sm:h-16 sm:w-16">
          <SiReact className="md:text-7xl sm:text-4xl mx-auto bg-cyan-400 p-2 rounded-xl text-white" />
          <h2 className="md:text-lg sm:text-sm">React</h2>
        </div>
        <div className="bg-white md:h-32 md:w-32 text-center rounded-xl grid grid-cols-1 items-center sm:h-16 sm:w-16">
          <SiHtml5 className="md:text-7xl sm:text-4xl mx-auto bg-orange-600 p-2 rounded-xl text-white" />
          <h2 className="md:text-lg sm:text-sm">HTML</h2>
        </div>
        <div className="bg-white md:h-32 md:w-32 text-center rounded-xl grid grid-cols-1 items-center sm:h-16 sm:w-16">
          <SiCss3 className="md:text-7xl sm:text-4xl mx-auto bg-blue-600 p-2 rounded-xl text-white" />
          <h2 className="md:text-lg sm:text-sm">CSS</h2>
        </div>
        <div className="bg-white md:h-32 md:w-32 text-center rounded-xl grid grid-cols-1 items-center sm:h-16 sm:w-16">
          <SiJavascript className="md:text-7xl sm:text-4xl mx-auto bg-yellow-400 p-2 rounded-xl text-white" />
          <h2 className="md:text-lg sm:text-sm">Javascript</h2>
        </div>
        <div className="bg-white md:h-32 md:w-32 text-center rounded-xl grid grid-cols-1 items-center sm:h-16 sm:w-16">
          <SiMongodb className="md:text-7xl sm:text-4xl mx-auto bg-green-600 p-2 rounded-xl text-white" />
          <h2 className="md:text-lg sm:text-sm">MongoDB</h2>
        </div>
        <div className="bg-white md:h-32 md:w-32 text-center rounded-xl grid grid-cols-1 items-center sm:h-16 sm:w-16">
          <AiOutlineConsoleSql className="md:text-7xl sm:text-4xl mx-auto bg-black p-2 rounded-xl text-white" />
          <h2 className="md:text-lg sm:text-sm">SQL</h2>
        </div>
        <div className="bg-white md:h-32 md:w-32 text-center rounded-xl grid grid-cols-1 items-center sm:h-16 sm:w-16">
          <SiAngular className="md:text-7xl sm:text-4xl mx-auto bg-red-600 p-2 rounded-xl text-white" />
          <h2 className="md:text-lg sm:text-sm">Angular</h2>
        </div>
        <div className="bg-white md:h-32 md:w-32 text-center rounded-xl grid grid-cols-1 items-center sm:h-16 sm:w-16">
          <FaNodeJs className="md:text-7xl sm:text-4xl mx-auto bg-lime-600 p-2 rounded-xl text-white" />
          <h2 className="md:text-lg sm:text-sm">Node.Js</h2>
        </div>
      </a.div>  
    </div>
  );
};

export default Resumen;
