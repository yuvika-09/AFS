import React, { useState } from "react";

// or u can use && operator to check the condition and return the jsx element accordingly..
/* or u can directly use ternary operator in jsx to check the condition and return the jsx element accordingly.. */
//u cannot use if else statement in jsx but u can use ternary operator or u can use function to check the condition and return the jsx element accordingly..

function App() {
  // let age = 19;
  // first way to check the condition and return the jsx element accordingly is to use function and call that function in jsx..

  // function checkVotingEligibility(age){
  //   if(age>=18){
  //     return <h1>Allowed to vote</h1>
  //   } else{
  //     return <h1>Not Allowed to vote</h1> 
  //   }
  // }

  // return (
  //   // second way to check the condition and return the jsx element accordingly is to use ternary operator in jsx..
  //   <div>

  //  {/* {
  //   checkVotingEligibility(age)
  //  } */}


  //  {/* {
  //   age >= 18 
  //       ? <h1>Allowed to vote</h1> 
  //       : <h1>Not Allowed to vote</h1>
  //  } */}

  //  {/* {
  //   age >= 18 && <h1>Allowed to vote</h1>
  //  }
  //  {
  //   age < 18 && <h1>Not Allowed to vote</h1>
  //  } */}

  //   </div>
  //   // u can also use && operator to check the condition and return the jsx element accordingly.. if the condition is true then it will return the jsx element otherwise it will return false and nothing will be rendered in the UI..
  // )

  const [number, setNumber] = useState(null);

  const handleClick = () => {
    const randomNum = Math.floor(Math.random() * 10);
    setNumber(randomNum);
  };

  return (
    <div>
      <h1>7 wins</h1>
      <h2>Number: {number}</h2>
      <button onClick={handleClick}>Click</button>

      {number !== null && (number === 7 ? 
        <div>
          <h3>You Win!</h3>
          <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="win" />
        </div> : 
        <div>
          <h3>You Lose</h3>
          <img src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png" alt="lost" />
        </div>
      )}
    </div>
  );

}

export default App