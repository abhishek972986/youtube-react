
import { FaHome,FaRegUser, FaHistory } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { VscThreeBars } from "react-icons/vsc";
const Sidebar = () => {
  return (
    <div>
      <div className="fixed w-30 h-screen bg-gray-800 flex flex-col justify-between align-items-center ">


        <div className="flex flex-col justify-between  gap-20 items-center mt-25 ">
        <FaHome className="text-4xl text-teal-50 self-center hover:cursor-pointer hover:text-amber-100"/>
        <FaRegUser className="text-4xl text-teal-50 hover:cursor-pointer hover:text-amber-100"/>
        <FaHistory className="text-4xl text-teal-50 hover:cursor-pointer hover:text-amber-100" />
        </div>



        <div className="flex flex-col justify-around  mb-10 gap-10 items-center">
        <CiSettings className="text-4xl text-teal-50 hover:cursor-pointer hover:text-blue-400"/>
        <VscThreeBars className="text-4xl text-teal-50 hover:cursor-pointer hover:text-blue-400"/>
        </div>


      </div>
    </div>
  )
}

export default Sidebar
