import React, { useState } from "react"
import "../index.css"
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth"
import auth from "../firebase.js"
const SignUp = () => {
  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Pass, setPass] = useState("")
  const resetData = () =>{
    setName("")
    setEmail("")
    setPass("")
  }
  const onSubmit = async e => {
    e.preventDefault()

    await createUserWithEmailAndPassword(
      auth,
      Email,
      Pass
    )
      .then(userCrential => {
        console.log(userCrential.user);
        window.location.assign("/todo")
      })
      .catch(error => {
        alert(error.message)
      })

    await updateProfile(auth.currentUser, {
      displayName: Name,
    })
      .then(() => {
        console.log("we did it")
      })
      .catch(error => {
        alert(error.message)
      })
  }
  return (
    <div className="signUp">
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
        <div class="buttons">
        <button
          type="submit"
          className="save"
          onClick={onSubmit}
        >
          Create Account
        </button>
        <button type="reset" className="dlt" onClick={resetData}>Reset</button></div>
      </form>
    </div>
  )
}
export default SignUp
