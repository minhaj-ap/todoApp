import React, { useState } from "react"
import "../index.css"
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth"
import auth from "../firebase.js"
import { useNavigate } from "react-router-dom"
const SignUp = () => {
  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Pass, setPass] = useState("")
  const resetData = () => {
    setName("")
    setEmail("")
    setPass("")
  }
  
  const history = useNavigate()
  const onSubmit = async e => {
    e.preventDefault()

    await createUserWithEmailAndPassword(
      auth,
      Email,
      Pass
    )
      .then(userCrential => {
        console.log(userCrential.user)
        history("/todo")
      })
      .catch(error => {
        alert(error.message)
      })
    await updateProfile(auth.currentUser, {
      displayName: Name,
    })
      .catch(error => {
        alert(error.message)
      })
  }
  return (
    <div className="signUp">
      <h1>Create an Account</h1>
      <form class="form">
        <div>
          <label>Username</label>
          <input
            type="text"
            value={Name}
            onChange={e =>
              setName(e.target.value)
            }
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            label="Email"
            value={Email}
            onChange={e =>
              setEmail(e.target.value)
            }
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={Pass}
            onChange={e =>
              setPass(e.target.value)
            }
          />
        </div>
        <div className="buttons">
          <button
            type="submit"
            className="save"
            onClick={onSubmit}
          >
            Create Account
          </button>
          <button
            type="reset"
            className="dlt"
            onClick={resetData}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  )
}
export default SignUp