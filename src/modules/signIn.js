import React, { useState } from "react"
import "../index.css"
import { signInWithEmailAndPassword } from "firebase/auth"
import auth from "../firebase.js"
import { useNavigate } from "react-router-dom"
const SignIn = () => {
  const [Email, setEmail] = useState("")
  const [Pass, setPass] = useState("")
  const resetData = () => {
    setEmail("")
    setPass("")
  }
  const history = useNavigate()
  const onSubmit = async e => {
    e.preventDefault()

    await signInWithEmailAndPassword(
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
  }
  return (
    <div className="signUp">
      <h1>Create an Account</h1>
      <form class="form">
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
            Login
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
export default SignIn
