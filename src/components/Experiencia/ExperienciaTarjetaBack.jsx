import {HiOutlineOfficeBuilding} from 'react-icons/hi';
import {IoMdTime} from 'react-icons/io';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import { useSpring, a } from 'react-spring';

const ExperienciaTarjetaBack = ({ trabajo }) => {

  const animation1 = useSpring({
    from: {x: 0, opacity:0},
    to: {x: 0, opacity:1},
    config: {duration: 200},

})

  return (
    <a.div style={animation1} className="bg-gray-100 w-full h-full  absolute top-0 left-0 md:px-12 md:pt-12 sm:px-4 sm:py-4">
      <div className='flex items-center'>
      <img src={trabajo.logo} alt="Logo empresa" className="h-24 bg-white rounded-xl md:mr-12 sm:mr-4 p-2" />
      <div className='text-left w-full'>
      <p className='text-xl'>{trabajo.puesto}</p>
      <div className='flex items-center space-x-2 text-md'>
      <HiOutlineOfficeBuilding/>
      <p> {trabajo.empresa} ({trabajo.rubro}) </p>
      <IoMdTime/>
      <p>{trabajo.desde} / {trabajo.hasta} </p>
      </div>
      </div>
      <AiOutlineCloseCircle className='text-4xl hover:text-VerdeCatuchi'/>
      </div>
      <ul className='text-left grid grid-cols-2 mt-12 bg-white rounded-xl'>
      {trabajo.tareas.map((data, index) => {
        return (
          <li className='text-sm align-middle mx-4 px-4 my-4'>- {data}</li>
        )
      })}

      </ul>
    </a.div>
  );
};

export default ExperienciaTarjetaBack;


{/* const Globant = {
            puesto: 'Consultor Sr',
            empresa: 'Globant',
            rubro: 'Tecnología',
            desde: 'Julio 2018',
            hasta: 'Enero 2022',
            tareas: 'Supervisar al equipo',
            logo: '../src/images/Trabajos/globant.png', */}