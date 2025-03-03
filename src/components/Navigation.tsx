import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";

const Navigation = () => {



  return (

    <div className=" bg-blue-950 flex justify-between items-center h-25 gap-3.5 p-5 shadow-2xl">
     <div className="text-3xl text-amber-50 font-extrabold">Blogging website </div>
<div className="flex items-center gap-2">
<CiSearch className=" text-white text-3xl"/>
<input type="text" placeholder="Search blogs" className="text-lg p-1 rounded-4xl border-2 text-center border-white text-white" />
</div>
<div>
<FaUserCircle className="text-white text-3xl"/>
</div>
    </div>
    
  )
}

export default Navigation
