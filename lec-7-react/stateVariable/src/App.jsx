//import React, { useState } from 'react'

// // const App = () => {
// //   let count=0;    //regular variable
// //   function increase(){
// //     count=count+1;
// //     console.log(count)
// //   }
// //   return (
// //     <div>
// //       <h1>State variable</h1>
// //       <h4>count:{count}</h4>
// //       <button onClick={increase}>Click</button>
// //     </div>
// //   )
// // }

// //state variable
// const App = () => {
//   let [count,setCount]=useState(0) 
//   function increase(){
//     //count=0
//     //count=1;
//     count=count+1;
//     setCount(count)
//   }
//   return (
//     <div>
//       <h1>State variable</h1>
//       <h4>count:{count}</h4>
//       <button onClick={increase}>Click</button>
//     </div>
//   )
// }

//export default App



// Random Number Generator
import React, { useState } from 'react'

const App = () => {
  const [number, setNumber] = useState(0);
  const random = () => {
    const number = Math.floor(Math.random() * 10); 
    setNumber(number);
  };
  return (
    <div>
      <h1>Random Number</h1>
      <h4>Number: {number}</h4>
      <button onClick={random}>Generate</button>
    </div>
  );
};
export default App;