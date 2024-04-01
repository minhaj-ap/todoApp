import "./App.css"
import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import TaskManager from "./modules/TaskManager"
import { BrowserRouter as Router } from "react-router-dom"
import SignUp from "./modules/signUp"
import SignIn from "./modules/signIn"
import Header from "./modules/header"
import auth from "../src/firebase.js"
function App() {
  const authUser = auth.currentUser
const [user,setUser] = useState(null)
if (authUser) {
  setUser(authUser);
  console.log(user)
}
  return (
    <div className="app">
      <Router>
      <Header user={user} />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route
            exact
            path="/todo"
            element={<TaskManager />}
          />
          <Route
            exact
            path="/login"
            element={<SignIn />}
          />
        </Routes>
        {/*  */}
      </Router>
    </div>
  )
}

export default App
