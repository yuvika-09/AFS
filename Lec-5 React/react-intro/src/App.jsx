import React from 'react'

function App () {
  let a = Math.random();
  let num1 = 10;
  let num2 = 5;

  return (
    <div>
      <Header></Header>
      <h1>Hello World</h1>
      <h3>{a}</h3>
      <h3>{num1 + num2}</h3>
      <Footer></Footer>
    </div>
  )
}

// component name should start with a capital letter, then return jsx code
function Header() {
  return (
    <div>
      <div className="logo">Logo</div>
      <ul className="navLinks">
        <li className="navList">Home</li>
        <li className="navList">About</li>
        <li className="navList">Contact</li>
      </ul>
    </div>
  )
}

function Footer() {
  return (
    <div>
      <p>email : xyz.gmail.com</p>
      <p>ph no. : 999999999</p>
    </div>
  )
}

export default App
