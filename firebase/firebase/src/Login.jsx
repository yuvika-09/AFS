import React, { useRef } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Logged in user:", userCredential.user);
        alert("Login successful ✅");
      })
      .catch((error) => {
        console.log(error.code, error.message);

        if (error.code === "auth/user-not-found") {
          alert("User not found ❌");
        } else if (error.code === "auth/wrong-password") {
          alert("Wrong password ❌");
        } else {
          alert(error.message);
        }
      });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          ref={emailRef}
          required
        />
        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          ref={passwordRef}
          required
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;