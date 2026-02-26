import React, { useState,useEffect } from 'react'
import axios from 'axios'
const App = () => {
  let [users,setUsers]=useState([{id:1,name:"Samiya",email:"sam@gmail.com"},{id:2,name:"Samiya",email:"sam@gmail.com"}])
  let [count,setCount]=useState(0);

  //logic to change the state
  //send request to server address,get data and change the state value

  async function getUsers(){
    //url--->https://jsonplaceholder.typicode.com/users
    //request ---->axios
    let response=await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(response.data)
    setUsers(response.data)
  }
  //getUsers();
  useEffect(()=>{
    getUsers();
  },[])

  useEffect(()=>{
    const id=setInterval(()=>{
      setCount((prev)=>prev+1);   //use callback to get changed previous state and callback guarantee that you will get updated value
    },1000)
    //clean up function 
    return ()=>clearInterval(id);
  },[])

  return (
    <div>
      <h1>Axios</h1>
      <h1>User list</h1>
      <ul>
        {/* <li>user 1</li>
        <li>user 2</li>
        <li>user 3</li>
        <li>user 4</li>
        <li>user 5</li>
        <li>user 6</li> */}
        {
          users.map((users)=>{
            return <li>{users.name}</li>
          })
        }
      </ul>
      <h1>count:{count}</h1>
    </div>
  )
}

export default App
