import React from "react";
import { useState } from "react";
function App() {
  // const[lenth  ,setLenth] =useState(8)
  // const[numberAllowed, setNumberAllowed] =useState
  // (false);
  // const[charAllowed ,setCharAllowed] =useState(false);
  // const[Password,setPassword] =useState('')

  // const PasswordGenerater = () => {}
  let [Counter, SetCounter] = useState(15);
  // let Counter = 15;
  const addValue = () => {
    console.log("clicked", Counter); // console.log("value added", Math.random());
    // Counter = Counter + 1;
    SetCounter(Counter + 1);
  };
  const removeValue = () => {
    SetCounter(Counter - 1);
  };
  return (
    // <h1 className=" p-4 text-3xl font-bold text-red-600 justify-center flex">
    // Password Generater
    // </h1>
    <>
      <div className="text-white">
        <h1 className="">React hooks</h1>
        <h2>Counter value :{Counter}</h2>
        <button onClick={addValue}>Add value</button>
        <br />
        <button onClick={removeValue}>Remove value{Counter}</button>
      </div>
    </>
  );
}
export default App;
