import { useState } from 'react'
import './App.css'
//TMDB
import Home from './pages/Home'
import Login from './pages/Login'
import Player from './pages/Player'
import Navbar from './components/Navbar'
import MainLayout from './layouts/MainLayout'
import PlayerLayout from './layouts/PlayerLayout'
import AuthLoayout from './layouts/AuthLoayout'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
function App() {
  const [signed,setSigned]=useState(true)
  let r=createBrowserRouter([
      {
        path:"/",
        element:<><Login/></>
      },
      {
        path:"/home",
        element:(
          <ProtectedRoute signed={signed}><Home/></ProtectedRoute>
        )
      },
      {
        path:"/player",
        element:(
          <ProtectedRoute signed={signed}><Player/></ProtectedRoute>
        )
      }
    ])
  
  return (
    <>
    <RouterProvider router={r}/>
    </>
  )
}

export default App
