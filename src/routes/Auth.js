import React, { useState } from "react";
import { authService, firebaseInstance } from "../fbase";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    let data;
    try {
      if (newAccount) {
        // create account
        data = await authService.createUserWithEmailAndPassword(email, password);
      } else {
        // log in
        data = await authService.signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;

    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }

    const data = await authService.signInWithPopup(provider);
    console.log(data);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Email" value={email} onChange={changeEmail} required />
        <input type="password" placeholder="Password" value={password} onChange={changePassword} required />
        <input type="submit" value={newAccount ? "Create Account" : "Sign In"} />
        {error}
      </form>
      <span onClick={toggleAccount}>{newAccount ? "Sign In" : "Create Account"}</span>
      <div>
        <button name="google" onClick={onSocialClick}>
          Continue with Google
        </button>
        <button name="github" onClick={onSocialClick}>
          Continue with Github
        </button>
      </div>
    </>
  );
};

export default Auth;
