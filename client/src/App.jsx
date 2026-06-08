import "./App.css";
import { useState, useEffect } from "react";

function App(){
  const [message, setMessage]=useState(" ");

  useEffect(()=>{
    fetch('http://localhost:4004/api/message')
    .then(res=>res.json())
    .then(data=>{
      setMessage(data.message);
    })
    .catch(err=>{
      console.error("error fetchign message from server", err);
    })
  },[]);
  
  return(
    <>
    <h1>Welcome to chaicode frontend</h1>
    <h2>data {message}</h2>
    </>
  );
}

export default App;