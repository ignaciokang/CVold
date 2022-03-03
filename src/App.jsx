import Datos from "./components/Datos";
import Cuadro from "./components/Cuadro";
import {useSpring,a } from "react-spring";

function App() {

const animation = useSpring({
    from: {opacity: 0},
    to: {opacity: 1},
    config: {duration: 1000},


})

return (
  
  <div className='grid grid-cols-12 gap-6 px-5 lg:mb-0 sm:px-8 md:px-16 lg:px-36 xl:px-48 bg-gradient-to-r from-[#6fccDC] to-VerdeCatuchi lg:h-screen md:h-[200vh] sm:h-[200vh]'>
    <a.div style= {animation} className="my-auto col-span-12 p-4 text-base text-center bg-white lg:col-span-3 xl:col-span-3 rounded-2xl shadow-gray-800 shadow-lg h-[85vh] md:h-[90vh] md:my-12 sm:mt-12 lg:mt-auto xl:mt-auto">
      <Datos/>
    </a.div>

    <a.div style= {animation} className="flex flex-col col-span-12 overflow-hidden bg-white shadow-gray-800 shadow-lg rounded-2xl lg:col-span-9 xl:col-span-9 h-[85vh] sm:h-[90vh] md:h-[90vh] md:mb-4 lg:my-auto xl:my-auto">
      <Cuadro/>
    </a.div>
  </div>

)
}



export default App;
