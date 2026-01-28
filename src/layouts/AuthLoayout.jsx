import React, { use, useState } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';
// rememver password checking method should be POST
const AuthLoayout = () => {
  const API_URL=import.meta.env.VITE_API_URL;
  const [signed, setSigned] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [users, setUsers] = useState([]);
  const navigate=useNavigate();
  const handleSumbit =async () => {
    const newUser={mail,userName,password}
    setUsers(newUser);
    console.log(newUser);
    if(!signed){
    await fetch(`${API_URL}/details`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(newUser)})
    navigate("/home")
    }else{
      let pastUserData={mail,password}
      let r=await fetch(`${API_URL}/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(pastUserData)})
      let res=await r.json()
      if(res===false){
        console.log("Not exist");
        return ;
      }
      if(res===true){
        console.log("Password breaked");
        navigate("/home");
      }
    }
  }
  return (
    <div>
      <Navbar title="login" setSigned={setSigned}/>
      <div
        className="h-screen bg-cover"
        style={{ backgroundImage: "url(./src/assets/background_banner.jpg)" }}
      >
        <div className='w-full h-full flex justify-center items-center'>
          <div className="bg-black/70 md:w-[30%] w-[70%]  flex flex-col border rounded-md gap-3 pb-3">
            <h1 className='font-medium text-4xl align-baseline pl-7 text-white'>{signed ? "sign in" : "sign up"}</h1>
            <ul className='flex flex-col gap-2 items-center'>
              {!signed && <li className='border h-10 w-[85%] bg-gray-500 rounded-sm '> <input type="text" placeholder='Your name' className='h-full w-full p-2 focus:outline-none' value={userName} onChange={(e) => { setUserName(e.target.value) }} /></li>}
              <li className='border h-10 w-[85%] bg-gray-500 rounded-sm '><input type="email" placeholder='Email' className='h-full w-full p-2 focus:outline-none' value={mail} onChange={(e) => { setMail(e.target.value) }} /></li>
              <li className='border h-10 w-[85%] bg-gray-500 rounded-sm '><input type="password" placeholder='Password' className='h-full w-full p-2 focus:outline-none'value={password} onChange={(e) => { setPassword(e.target.value) }} /></li>
              <li className='w-[85%]'><button className='w-full flex justify-center items-center border bg-red-600 h-10  cursor-pointer rounded-sm font-serif' onClick={()=>{handleSumbit() }}>{signed ? "sign in" : "sign up"}</button></li>
              <li className='w-[85%] flex justify-between text-white'><label><input type="checkbox" className="accent-red-600" />Remember me</label><a onClick={()=>{navigate("/")}} className='hover:underline'>need help?</a></li>
            </ul>
            <p className='text-center text-white cursor-pointer'>{!signed ? "Already have account?" : "Don'e have account?"}<a  className='text-blue-600' onClick={() => { setSigned(!signed) ;navigate("/")}}>{!signed ? " sign in" : " sign up"}</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AuthLoayout
