import { useState } from 'react'
import{FaCamera} from 'react-icons/fa'
import Tabs from './Tabs'

const Profile = () => {
const [bannerurl, setbannerurl] =useState('')
const [userprofile, setprofile] = useState('')

const handleprofileupload =(e:any)=>{
  const file= e.target.files[0]
  if(file){
    setprofile(URL.createObjectURL(file))
  }
}

const handlebannerUpload=(e:any)=>{
    const file= e.target.files[0]

    if(file){
        setbannerurl(URL.createObjectURL(file))
    }

}

  return (
    <div className="relative ml-30  h-full ">

        <div className="relative">
<img src={bannerurl} alt="banner-image" className="w-full h-60 text-2xl object-cover "/>
<button className="absolute top-25 right-10 bg-red-500 px-2 py-1 text-white rounded-full">

<label htmlFor="banner-upload" className="cursor-pointer rounded-full p-1 ">
            <FaCamera size={24}className=' mx-1.5'/>
          </label>
          <input
            id="banner-upload"
            type="file"
            accept="image/*"
            className="hidden"
          onChange={handlebannerUpload}
          />

</button>




        </div>
        <div className='relative 
        p-2 '>
          <img src={userprofile} alt="channel user" className=' w-50 h-50 border-2  object-cover rounded-full ml-8'/>
          <button className="absolute top-20 right-10 bg-red-500   text-white rounded-full z-10">

<label htmlFor="profile-upload" className="cursor-pointer rounded-full mx-1.5 p-1 ">
            <FaCamera size={24}className=' mx-3'/>
          </label>
          <input
            id="profile-upload"
            type="file"
            accept="image/*"
            className="hidden z-10"
          onChange={handleprofileupload}
          />

</button>
<div className='absolute left-70 top-10 overflow-hidden'>
<h1 className="text-3xl font-extrabold text-gray-900 mb-6">Abhishek</h1>
  <p className='mr-20'>A YouTube channel is a personalized space on YouTube where users can upload, organize, and share videos with an audience. Channels can be created by </p>  
  <button className='bg-red-500 m-1.5 p-2.5 rounded-2xl hover:bg-red-400 hover:cursor-pointer'> Subscribe</button>
</div>
        </div>
      <Tabs/>
    </div>
    
  )
}

export default Profile
