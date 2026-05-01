import React from 'react'
import Register from './Register'
import Login from './Login'
import { auth } from "./firebase";
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'

const App = () => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    const displayName = user.displayName;
    console.log(uid);
    console.log(displayName);
    // ...
  } else {
    // User is signed out
    // ...
    console.log("user logout from all sessions");
  }
});

  function logotHandler() {
    signOut(auth)
    .then(()=> {
      console.log("user logged out")
    })
  }
  return (
    <div>
      <h1>Firebase registeration</h1>
      {/* <Register></Register> */}
      {/* <Login></Login> */}
      <LoginWithGoogle></LoginWithGoogle>
      <button onClick={logotHandler}>Logout</button>
    </div>
  )
}

function LoginWithGoogle() {
  async function LoginWithGoogleHandler() {
    try
    {
      let provider = new GoogleAuthProvider();
      let userCredential = await signInWithPopup(auth, provider);
      console.log(userCredential.user)
    }
    catch (error){
      console.log(error)
    }
  }
  return (
    <div>
      <button onClick={LoginWithGoogleHandler}>Login with Google</button>
    </div>
  )
}

export default App
