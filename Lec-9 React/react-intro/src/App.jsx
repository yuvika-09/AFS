import React, { useRef, useState } from 'react'

const App = () => {
  // let name = "";
  // function getName(inpName) {
  //   name = inpName;
  //   console.log(name);
  // }

  console.log("Re-renderingg")
  // let [name, setName] = useState("");
  let inputRef = useRef();
  let [showName, setShowName] = useState("");
  // function getName(inpName) {
  //   setName(inpName);
  //   console.log(name);
  // }
  function changeName() {
    console.log(inputRef.current.value);
    setShowName(inputRef.current.value)
  }


  // useRef : when you want to store any value that should not cause any re-rendering
  // USECASES:
  // 1. you can store reference of any DOM element 
  return (
    <div>
      {/* <input onChange={(e)=>getName(e.target.value)} type="text" placeholder='Enter your name'></input> */}
      <input type="text" ref={inputRef}></input>
      <button onClick={changeName}>Click</button>
      <h1>name is {showName}</h1>
    </div>
  )
}

export default App
