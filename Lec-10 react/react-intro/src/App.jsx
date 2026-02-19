import React, { useEffect, useState } from 'react'

function App() {
  let [count, setCount] = useState(0);
  let [random, setRandom] = useState(0);

  function fetchTodo() {
    // code to fetch data
    console.log("data fetched...")
  }

  function changeCount() {
    setCount(count + 1);
  }

  function changeRandom() {
    setRandom(Math.random())
  }

  function runOnCountChange() {
    // some work related to count variable
    console.log("count change function run")
  }

  // fetchTodo(); // should not call directly or it will reload everytime the page re-renders

  // useEffect(() => {
  //   fetchTodo();
  // }) // if empty array not passed, then it behaves like it is called globally

  // MOUNTING PHASE WORK
  useEffect(() => {
    fetchTodo();
    let id = setInterval(()=>{
      console.log("running setInterval")
    },1000)

    // cleanup function  -> runs only on UNMOUNTING PHASE
    return ()=>{
      clearInterval(id)
    }
  }, [])

  // UPDATING PHASE WORK
  useEffect(() => {
    runOnCountChange()
  }, [count, random]) // will run if anyone of these change

  return (
    <div>
      <h1>useEffect</h1>
      <button onClick={changeCount}>click</button>
      <button onClick={changeRandom}>random</button>
      <h4>count is {count}</h4>
      <h4>random value is {random}</h4>
    </div>
  )
}

export default App
