import {AiOutlineDown} from 'react-icons/ai'

const ExperienciaTarjeta = ({ trabajo }) => {
  return (
    <div className="bg-white rounded-xl md:px-12 sm:px-4 py-4 h-32 items-center hover:border-2 flex justify-between">
      <img src={trabajo.logo} alt="Logo empresa" className="md:h-20 sm:h-10" />
        <p className='sm:text-tiny md:text-[1rem]'> <span className="uppercase md:pl-4 sm:pl-2">{trabajo.empresa}</span> - {trabajo.puesto}</p>
      <AiOutlineDown/>

    </div>
  );
};

export default ExperienciaTarjeta;
