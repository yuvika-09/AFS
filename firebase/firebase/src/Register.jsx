import React, { useRef } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleRegister = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User:", userCredential.user);
        alert("Registered successfully ✅");
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Register</h2>

      <form onSubmit={handleRegister}>
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

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;