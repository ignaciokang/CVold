import FotoPerfil from "../images/4.png";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import {IoLogoWhatsapp} from "react-icons/io"
import { GoLocation } from "react-icons/go";
import { useState } from "react";

const Datos = () => {

  const [tema, setTema] = useState('light');

  const cambiarTema = () => {
    setTema(tema === "light" ? "dark" : "light");
  };

  return (

    <div className="grid grid-cols-1 h-full justify-around items-center">
      <img
        src={FotoPerfil}
        alt="avatar"
        className=" mx-auto rounded-full lg:w-2/3 sm:w-2/5 shadow-md shadow-gray-400 "
      />
      <div>
      <h3 className=" sm:text-2xl md:text-5xl lg:text-2xl xl:text-3xl">
       Ignacio Kang
      </h3>
      <p className=" mt-2 sm:text-md md:text-3xl lg:text-sm xl:text-lg">
        Front End Developer
      </p>
      </div>

      <div className="flex justify-around w-9/12 mx-auto text-black">
        <a href="https://wa.me/541136976191">
          <IoLogoWhatsapp className="w-8 h-8 md:w-12 md:h-12 lg:w-8 lg:h-8 cursor-pointer hover:scale-110 hover:text-green-500" />
        </a>
        <a href="https://www.linkedin.com/in/ignaciokang/">
          <AiFillLinkedin className="w-8 h-8 md:w-12 md:h-12 lg:w-8 lg:h-8 cursor-pointer hover:scale-110 hover:text-blue-500" />
        </a>
        <a href="https://github.com/ignaciokang/CV">
          <AiFillGithub className="w-8 h-8 md:w-12 md:h-12 lg:w-8 lg:h-8 cursor-pointer hover:scale-110 hover:text-purple-500" />{" "}
        </a>
      </div>

      <div className="py-4 bg-gray-200 sm:py-2 xl:py-6 sm:text-md md:text-2xl lg:text-sm xl:text-lg"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}>
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Buenos Aires, Argentina </span>
        </div>
        <p className="my-2 "> ignaciokang10@gmail.com </p>
        <p className="my-2"> 1136976191 </p>
      </div>
      <div className="xl:text-xl md:text-2xl sm:text-md justify-between">
      <button
        className="w-8/12 px-4 py-2 mb-6 text-white rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:ignaciokang10@gmail.com")}
        >
        Contacto
      </button>
      <br></br>
      <a
        className="w-8/12 px-4 py-2 cursor-pointer underline underline-offset-4 decoration-2 hover:text-green-600  "
        href="https://github.com/ignaciokang/CV/raw/main/src/documents/CV%20-%20Ignacio%20Kang.pdf"
        download="CV-Ignacio-Kang-SPA.pdf"
        >
       Descargar CV
      </a>
      </div>
    </div>
  );
};

export default Datos;
