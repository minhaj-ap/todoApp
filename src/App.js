import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import TaskManager from "./modules/TaskManager";
import { BrowserRouter as Router } from "react-router-dom";
import SignUp from "./modules/signUp";
import SignIn from "./modules/signIn";
import ErrorPage from './modules/ErrorPage';
import Header from "./modules/header";
import UserContext from "./userContext.js";
import auth from "./firebase";
function App() {
  const [Name, setName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [Id, setId] = useState("");
  function userStatus(data) {
    setName(data.displayName);
    setIsLoggedIn(data);
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (current) => {
      await setName(current);
      await setId(current);
    });
    return unsubscribe;
  }, [isLoggedIn]);
  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Router>
        <div className="app">
          <Header user={Name} />
          <Routes>
            <Route path="/" element={<SignUp handleUser={userStatus} />} />
            {Name ? (
              <Route exact path="/todo" element={<TaskManager user={Id} />} />
            ) : (
              <Route path="/" element={<SignUp handleUser={userStatus} />} />
            )}
            <Route
              exact
              path="/login"
              element={<SignIn handleUser={userStatus} />}
            />
            <Route path="*" element={<ErrorPage />} errorElement={<ErrorPage />} />
         
          </Routes>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
