import React from 'react'
import Header from './component/headerComponent/Header'
import Footer from './component/footerComponent/Footer'
import { sum } from './component/headerComponent/Header'
import { mul } from './component/headerComponent/Header'

const App = () => {
  let ans = sum(5,3);
  return (
    <div>
      <Header ans={ans} name="Yuvika"></Header>
      <p>
        this is a paragraph and ans is {ans}
      </p>
      <Footer email="xyz@gmail.com" contact="9999999999"></Footer>
    </div>
  )
}

export default App
