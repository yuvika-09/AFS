import React, { useState } from 'react'

const App = () => {
  let [data, setData] = useState("getting data from child 1");
  function getData(data) {
    console.log(data);
    setData(data);
  }
  return (
    <div>
      <Child1 getData={getData}></Child1>
      <Child2 value={data}></Child2>
    </div>
  )
}

function Child1(props) {
  let data = 10;
  // props.getData(data);
  return (
    <div>
      <h1>Child 1</h1>
      <button onClick={() => props.getData(data)}>Click</button>
    </div>
  )
}

function Child2(props) {
  return (
    <div>
      <h1>Child 2</h1>
      <h2>{props.value}</h2>
    </div>
  )
}

export default App
 