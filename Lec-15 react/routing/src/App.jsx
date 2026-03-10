import React from 'react'
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'

// if we need to use react-router-dom it should be inside BrowserRouter, otherwise it give error
// so, add App component inside BrowserRouter in the main.jsx file to avoid errors
const App = () => {
  return (
    <div>
      {/* <BrowserRouter> */}
      <header>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/profile/:name" element={<Profile></Profile>}></Route>

        {/* if user enters a route that is not defined, so define this * route */}
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  )
}

function Home() {
  return (
    <div>
      <h1>this is home page</h1>
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h1>this is contact page</h1>
    </div>
  )
}

function About() {
  return (
    <div>
      <h1>this is about page</h1>
    </div>
  )
}

function Profile() {
  let { name } = useParams();
  return (
    <div>
      <h1>profile page of {name}</h1>
    </div>
  )
}

function PageNotFound() {
  return (
    <div>
      <h1>Page not found</h1>
    </div>
  )
}

export default App