import "./App.css"
import { Routes, Route } from "react-router-dom"
import TaskManager from "./modules/TaskManager"
import { BrowserRouter as Router } from "react-router-dom"
import SignUp from "./modules/signUp"
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route
            exact
            path="/todo"
            element={<TaskManager />}
          />
        </Routes>
        {/*  */}
      </Router>
    </div>
  )
}

export default App
