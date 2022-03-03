import {AiOutlineDown} from 'react-icons/ai'

const ExperienciaTarjetaBack = ({ trabajo }) => {
  return (
    <div className="bg-gray-100 w-full h-full  absolute top-0 left-0 px-12 pt-12">
      <div className='flex items-center'>
      <img src={trabajo.logo} alt="Logo empresa" className="h-24 bg-white rounded-xl px-4 py-4 mr-24" />
      <p className='text-xl'>{trabajo.puesto}</p>
      <div className='text-right'>
      <p className='text-lg'>{trabajo.empresa} </p>
      <p className='text-lg'>{trabajo.rubro} </p>
      <p className='text-lg'>{trabajo.desde} - {trabajo.hasta} </p>
      </div>
      </div>
      <ul className=' text-left grid grid-cols-2 gap-y-2 gap-x-8 mt-12'>
      {trabajo.tareas.map((data, index) => {
        return (
          <li className='bg-white rounded-xl px-3 py-2 text-sm align-baseline'>{data}</li>
        )
      })}

      </ul>
    </div>
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