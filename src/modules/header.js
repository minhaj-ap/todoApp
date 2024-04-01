import { useNavigate } from "react-router-dom"
import "../index.css"
import { signOut } from "firebase/auth"
import auth from "../firebase"
function Header(props) {
  const history = useNavigate()
  console.log(props.user)
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        alert("Successfully Loged Out")
      })
      .catch(err => {
        alert(err.message)
      })
  }
  const signUpPage = () => {
    history("/")
  }
  const signInPage = () => {
    history("/login")
  }
  return (
    <div className="header">
      <h1>TODO APP</h1>
      <div className="main_links">
        {props.user ? (
          <div className="user_links">
            {props.user.displayName}
            <button onClick={() => userSignOut()}>
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
