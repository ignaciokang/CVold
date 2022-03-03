import {BsCalendar2Week, BsDownload, BsBarChartLine} from 'react-icons/bs'

const EducacionTarjeta = ({data}) => {
    return ( 
    
    <div className=" h-48 w-80 rounded-xl shadow-lg p-4 grid grid-rows-2 bg-white">
    <div className="items-center grid grid-cols-4 border-b border-gray-200">
    <img src= {data.img} alt="Institucion" className="h-12 mx-auto col-span-1"/>
    <div className=" col-span-3 px-3">
    <p className="text-sm font-bold">
        {data.carrera}
    </p>
    <p className="text-xs">
        {data.institucion}
    </p>
    </div>    
    </div>
    <div className='grid gird-rows-3 py-2 px-4'>
        <div className="flex space-x-2 items-center">
        <BsCalendar2Week/>
        <p>{data.fecha}</p>
        </div>
        <div className="flex space-x-2 items-center">
        <BsBarChartLine/>
        <p>{data.estado}</p>
        </div>
        {data.descargar === '' ? '' : (        <div className="flex space-x-2 items-center text-VerdeCatuchi italic hover:underline">
        <BsDownload/>

        <a
        href={data.href}
        download={data.download}
        >{data.descargar}</a>
        </div>) }

    </div>
    </div>
     );
}

export default EducacionTarjeta;