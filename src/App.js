import "./App.css"
import { useState ,useEffect} from "react"
import { Routes, Route } from "react-router-dom"
import TaskManager from "./modules/TaskManager"
import { BrowserRouter as Router } from "react-router-dom"
import SignUp from "./modules/signUp"
import SignIn from "./modules/signIn"
import Header from "./modules/header"
import UserContext from "./userContext.js"
import auth from "./firebase"
function App() {
  // const history = useNavigate()
  const [Name, setName] = useState("")
const [isLoggedIn,setIsLoggedIn]=useState(false)
  const [Id, setId] = useState("")
  const [UserActive,setUserActive]=useState(false)
function userStatus(data){
    // setName(data.displayName)
    console.log(data)
    setIsLoggedIn(data)
  }
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(
        current => {
          setName(current)
          console.log(current)
        }
      )
      return unsubscribe
      // console.log(Name)
    }, [isLoggedIn])
  return (
<UserContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
    <Router>
      <div className="app">
        <Header user={Name} />
        <Routes>
          <Route path="/" element={<SignUp handleUser={userStatus}/>} />
          <Route
            exact
            path="/todo"
            element={<TaskManager />}
          />
          <Route
            exact
            path="/login"
            element={<SignIn handleUser={userStatus}/>} />}
          />
        </Routes>
      </div>
    </Router>
</UserContext.Provider>
  )
}

export default App
