import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TitleCards from '../components/TitleCards'
import { useNavigate } from 'react-router-dom'
const MainLayout = () => {
  const navigate=useNavigate();
  return (
    <div className='bg-black'>
      <Navbar title="home"/>
      <div className="
    h-[70vh] sm:h-[80vh] md:h-screen
    bg-no-repeat bg-center
    bg-cover" style={{ backgroundImage: "url(./hero_banner.jpg)" }}>
        <div className="image w-[90%] sm:w-[70%] md:w-[40%] lg:w-[30%] text-white pl-4 flex flex-col justify-end flex-start h-[80%] pd-0">
          <img src="./src/assets/hero_title.png" alt="hero logo" className=''/>
          <p>Discovering his ties to a secreat ancient order,a young man living in modern instanbul embarks on a request to save the city from an immortal enemy.</p>
          <div className="TopButtons flex gap-2 h-[15%] w-full">
            <div className="play border h-[50%] w-[25%] flex justify-center items-center font-sans bg-white text-black rounded-sm cursor-pointer " onClick={()=>{navigate("/player")}}>
              <img src='./src/assets/play_icon.png' alt="play" className='w-[25%] h-[80%]' />
              <p>Play</p>
            </div>
            <div className="more border h-[50%] w-[35%] flex justify-center items-center font-sans bg-gray-500 text-black rounded-sm cursor-pointer ">
              <img src='./src/assets/info_icon.png' alt="play" className='w-[25%] h-[80%] invert' />
              <p>More info</p>
            </div>
          </div>
        </div>
        <div className="title buttom-0">
          <TitleCards title="now_playing"/>
        </div>
      </div>
      <div className="moreTitle mt-20 bg-black">
        <TitleCards title="popular"/>
        <TitleCards title="top_rated"/>
        <TitleCards title="upcoming"/>
      </div>
      <Footer title="home"/>
    </div>
  )
}
export default MainLayout
