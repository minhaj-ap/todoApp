import { useNavigate } from "react-router-dom"
import "../index.css"
import {userLogOut} from "../userAuth.js"
import React,{useContext} from 'react'
import UserContext from "../userContext.js"
function Header({user}) {
const {isLoggedIn,setIsLoggedIn}= useContext(UserContext);
  const history = useNavigate()
console.log(isLoggedIn)
   console.log(user)
  const signUpPage = () => {
    history("/")
  }
  const signInPage = () => {
    history("/login")
  }
  const LogOut = e =>(
e.preventDefault(),
    userLogOut().then(()=>{
      setIsLoggedIn(false)
history("/login")
    })
  )
  return (
    <div className="header">
      <h1>TODO APP</h1>
      <div className="main_links">
        {isLoggedIn ? (
          <div className="user_links">
            {user.displayName} 
            <button onClick={LogOut}>
              Log Out
            </button>
          </div>
        ) : (
          <div className="auth_links">
             <button onClick={signUpPage}>
               Sign Up
             </button>
             <button onClick={signInPage}>
               Sign In
             </button>
           </div>
         )}
      </div>
      {}
    </div>
  )
}
export default Header
