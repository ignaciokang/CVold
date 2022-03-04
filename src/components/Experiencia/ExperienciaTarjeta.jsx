import {AiOutlineDown} from 'react-icons/ai'

const ExperienciaTarjeta = ({ trabajo }) => {
  return (
    <div className="bg-white rounded-xl px-12 py-4 h-32 items-center hover:border-2 flex justify-between">
      <img src={trabajo.logo} alt="Logo empresa" className="h-20" />
        <p> <span className="uppercase pl-4">{trabajo.empresa}</span> - {trabajo.puesto}</p>
      <AiOutlineDown/>

    </div>
  );
};

export default ExperienciaTarjeta;
