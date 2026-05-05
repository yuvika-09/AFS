import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

function App() {
  let [user, SetUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      SetUser(currentUser);
    });

    return () => unsubscribe(); //when function unmounts(clean up function)
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>} />
    </Routes>
  );
}

/* ---------------- HOME ---------------- */
function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.currentUser) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <div>
      <header>
        <ul>
          <li><Link to="/login">Login</Link> </li>
          <li><Link to="/register">Register</Link> </li>
          <li><Link to="/dashboard">Dashboard</Link> </li>
        </ul>
      </header>
      <h1> Firebase Project</h1>
    </div>
  );
}

/* ---------------- REGISTER ---------------- */
function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      alert("Registered successfully!");
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <input type="email" placeholder="Email" ref={emailRef} required />
      <input type="password" placeholder="Password" ref={passwordRef} required />
      <button type="submit">Register</button>
      <p>Account exists? Please <Link to="/login"> SignIn </Link></p>
    </form>
  );
}

/* ---------------- LOGIN ---------------- */
function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      alert("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input type="email" placeholder="Email" ref={emailRef} required />
      <input type="password" placeholder="Password" ref={passwordRef} required />
      <button type="submit">Login</button>
      <p>Account doesnot exist? Please <Link to="/register"> SignUp </Link></p>

    </form>
  );
}

/* ---------------- DASHBOARD ---------------- */
function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome! You are logged in.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

/* ---------------- PROTECTED ROUTE ---------------- */
function ProtectedRoute({ children }) {
  return auth.currentUser ? children : <Navigate to="/login" />;
}

export default App;