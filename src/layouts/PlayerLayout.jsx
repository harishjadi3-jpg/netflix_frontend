import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TitleCards from '../components/TitleCards'
import { useNavigate } from 'react-router-dom'
import backArrow from '../assets/back_arrow_icon.png'
const PlayerLayout = () => {
  const navigate=useNavigate();
  return (
    <div className="relative main flex flex-col justify-center items-center h-screen w-screen text-white bg-black">
    <div className='flex h-[98%] w-full'>
      <div className="image w-10 h-10 sm:w-12 sm:h-12 cursor-pointer" onClick={()=>{navigate("/home")}}>
        <img src={backArrow} alt='back' className='h-full w-full '/>
      </div>
       <iframe className="h-[95%] w-[90%] sm:w-[95%] sm:h-[95%] md:h-[90%] md:w-[90%]" src="https://www.youtube.com/embed/gh3FyLT7WVg
" title='trailer' allowFullScreen ></iframe>
    </div>
    </div>
  )
}
export default PlayerLayout
