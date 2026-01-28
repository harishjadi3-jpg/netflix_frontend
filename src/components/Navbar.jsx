import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Netflix_logo from '../assets/logo.png'
import searchIcon from '../assets/search_icon.svg'
import bellIcon from '../assets/bell_icon.svg'
import profileImg from '../assets/profile_img.png'
import caretIcon from '../assets/caret_icon.svg'

const Navbar = (props) => {
  const [showLogout, setShowLogout] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const navigate = useNavigate();
  return (
    <div>
      {props.title == "login" && (
        <nav className="fixed top-0 w-full h-16 flex items-center justify-between px-6 md:px-12  ">
          <img
            src={Netflix_logo}
            alt="Netflix Logo"
            className="h-8 md:h-10 cursor-pointer"
          />
          <div className="flex items-center gap-4">
            <select className="bg-black text-white border border-white px-2 py-1 text-sm">
              <option>English</option>
              <option>Hindi</option>
            </select>
            <button className="bg-red-600 text-white px-4 py-1 rounded font-semibold cursor-pointer" onClick={() => {
              navigate("/")
              props.setSigned(true);
            }}>
              Sign in
            </button>
          </div>
        </nav>
      )}

      {props.title === "home" && (
        <>
          <nav className="fixed top-0 z-50 w-full h-16 bg-gray-900 text-white flex items-center px-4 md:px-12">
            <div className="flex items-center gap-4 ">
              <span
                className="material-symbols-outlined md:hidden cursor-pointer"
                onClick={() => setShowMenu(!showMenu)}
              >
                dehaze
              </span>
              <img
                src={Netflix_logo}
                alt="Netflix Logo"
                className="h-7 md:h-9 cursor-pointer"
              />
              <ul className="hidden md:flex gap-5 text-sm font-medium">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">TV Shows</li>
                <li className="cursor-pointer">Movies</li>
                <li className="cursor-pointer">New & Popular</li>
                <li className="cursor-pointer">My List</li>
                <li className="cursor-pointer">Browse by Language</li>
              </ul>
            </div>
            <div className="ml-auto flex items-center gap-4">
              <img
                src={searchIcon}
                alt="search"
                className="h-5 cursor-pointer"
              />
              <span className="hidden md:block cursor-pointer text-sm">
                Children
              </span>
              <img
                src={bellIcon}
                alt="bell"
                className="hidden md:block h-5 cursor-pointer"
              />
              <div className="relative cursor-pointer">
                <div
                  className="flex items-center gap-1"
                  onClick={() => setShowLogout(!showLogout)}
                >
                  <img
                    src={profileImg}
                    alt="profile"
                    className="h-7"
                  />
                  <img
                    src={caretIcon}
                    alt="caret"
                    className="hidden md:block"
                  />
                </div>
                {showLogout && (
                  <div
                    className="absolute right-0 mt-2 bg-black text-white px-4 py-2 text-sm rounded"
                    onClick={() => navigate("/")}
                  >
                    Sign Out
                  </div>
                )}
              </div>
            </div>
          </nav>
          {showMenu && (
            <div className="fixed top-16 left-0 w-full bg-black text-white md:hidden z-40">
              <ul className="flex flex-col gap-4 px-6 py-4 text-sm">
                <li onClick={() => setShowMenu(false)} className="cursor-pointer">Home</li>
                <li onClick={() => setShowMenu(false)} className="cursor-pointer">TV Shows</li>
                <li onClick={() => setShowMenu(false)} className="cursor-pointer">Movies</li>
                <li onClick={() => setShowMenu(false)} className="cursor-pointer">New & Popular</li>
                <li onClick={() => setShowMenu(false)} className="cursor-pointer">My List</li>
                <li onClick={() => setShowMenu(false)} className="cursor-pointer">Browse by Language</li>
              </ul>
            </div>
          )}
        </>

      )}

    </div>
  )
}
export default Navbar
