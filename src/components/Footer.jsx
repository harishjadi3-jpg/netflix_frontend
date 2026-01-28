import React from 'react'
const Footer = (props) => {
  return (
    <div className='flex border-white items-center justify-center'>
      {props.title === "home" && (
        <div className="homeFooter mt-5 h-[30%] w-[60%] md:block hidden ">
          <ul className="flex items-center gap-4 ">
            <li>
              <a href='https://www.facebook.com/netflix'>
              <img
                src="./src/assets/facebook_icon.png"
                alt="facebook"
                className="h-6 w-6 cursor-pointer hover:scale-110 transition"
              />
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/netflix/'>
              <img
                src="./src/assets/instagram_icon.png"
                alt="instagram"
                className="h-6 w-6 cursor-pointer hover:scale-110 transition"
              />
              </a>
            </li>
            <li>
              <a href='https://www.youtube.com/@Netflix'>
              <img
                src="./src/assets/youtube_icon.png"
                alt="youtube"
                className="h-6 w-6 cursor-pointer hover:scale-110 transition"
              />
              </a>
            </li>
            <li>
              <a href='https://twitter.com/netflix'>
              <img
                src="./src/assets/twitter_icon.png"
                alt="twitter"
                className="h-6 w-6 cursor-pointer hover:scale-110 transition"
              />
              </a>
            </li>
          </ul>
          <ul className='text-white grid grid-cols-3 grid-rows-4'>
            <li className='cursor-pointer hover:underline'>Audio Description</li>
            <li className='cursor-pointer hover:underline'>Inverstor Relationships</li>
            <li className='cursor-pointer hover:underline'>Leagal Notices</li>
            <li className='cursor-pointer hover:underline'>Help Center</li>
            <li className='cursor-pointer hover:underline'>Jobs</li>
            <li className='cursor-pointer hover:underline'>Cookie Preferences</li>
            <li className='cursor-pointer hover:underline'>Gift Cards</li>
            <li className='cursor-pointer hover:underline'>Terms of Use</li>
            <li className='cursor-pointer hover:underline'>Corporate Information</li>
            <li className='cursor-pointer hover:underline'>Media Center</li>
            <li className='cursor-pointer hover:underline'>Privacy</li>
            <li className='cursor-pointer hover:underline'>Contact Us</li>
          </ul>
          <p className="text-sm text-gray-500">@1997-2003 Netflix,inc</p>
        </div>
      )}
      {props.title === "player" && (
        "this is foote for player"
      )}
    </div>
  )
}

export default Footer
