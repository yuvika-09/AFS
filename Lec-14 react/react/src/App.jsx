// PROP DRILLING
// import React from 'react'

// function App() {
//   return (
//     <div>
//       <Child1></Child1>
//     </div>
//   )
// }

// function Child1(props) {
//   let price = 500;
//   return (
//     <div>
//       <h1>Child 1</h1>
//       <Child2 price={price}></Child2>
//     </div>
//   )
// }

// function Child2(props) {
//   let price = props.price;
//   return (
//     <div>
//       <h1>Child 2</h1>   
//       <Child3 price={price}></Child3>
//       <Child4></Child4>
//     </div>
//   )
// }

// function Child3(props) {
//   let price = props.price;
//   return (
//     <div>
//       <h1>Child 3</h1>
//       <Child5 price={price}></Child5>
//     </div>
//   )
// }

// function Child4(props) {
//   return (
//     <div>
//       <h1>Child 4</h1>
//     </div>
//   )
// }

// function Child5(props) {
//   let price = props.price;
//   return (
//     <div>
//       <h1>Child 5</h1>
//       <h3>price of product is {price}</h3>
//     </div>
//   )
// }

// export default App







// SOLUTION TO PROP DRILLING
import React, { createContext, useContext, useState } from 'react'
let priceContext = createContext(0);

function App() {
  return (
    <div>
      <Child1></Child1>
    </div>
  )
}

// provider 
function Child1(props) {
  // let price = 500;
  console.log("Child 1");
  let [price, setPrice] = useState(null);
  return (
    <div>
      <h1>Child 1</h1>

      <priceContext.Provider value={price}>
        {/* consumers */}
        <Child2></Child2>  
        <button onClick={()=>setPrice(500)}>price</button>
      </priceContext.Provider>

      {/* other components */}
    </div>
  )
}

function Child2(props) {
  console.log("Child 2");
  return (
    <div>
      <h1>Child 2</h1>   
      <Child3></Child3>
      <Child4></Child4>
    </div>
  )
}

function Child3(props) {
  console.log("Child 3");
  return (
    <div>
      <h1>Child 3</h1>
      <Child5></Child5>
    </div>
  )
}

function Child4(props) {
  console.log("Child 4");
  return (
    <div>
      <h1>Child 4</h1>
    </div>
  )
}

function Child5(props) {
  console.log("Child 5");
  let price = useContext(priceContext);
  return (
    <div>
      <h1>Child 5</h1>
      {price && <h3>price of product is {price}</h3>}
    </div>
  )
}

export default App
