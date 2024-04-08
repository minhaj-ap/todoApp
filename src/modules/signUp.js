import React, { useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { userSignUp } from "../userAuth.js";
const SignUp = ({ handleUser }) => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");
  const resetData = () => {
    setName("");
    setEmail("");
    setPass("");
  };

  const history = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    userSignUp(Email, Pass, Name)
      .then(() => {
        handleUser(true);
        history("/todo");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="signUp">
      <h1>Create an Account</h1>
      <form className="form">
        <div>
          <label>Username</label>
          <input
            type="text"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            label="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={Pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <div className="buttons">
          <button type="submit" className="save" onClick={onSubmit}>
            Create Account
          </button>
          <button type="reset" className="dlt" onClick={resetData}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};
export default SignUp;
