import React from 'react'
import { Navigate } from 'react-router-dom'
const ProtectedRoute = (props) => {
  if(!props.signed){
    return <Navigate to='/' replace/>
  }
  return props.children
}
export default ProtectedRoute
