import React, { useState, useCallback } from "react";

function App() {
  const [Length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  const setPasswordGenerater = useCallback(() => {
    let pass = "";
    let str = "qwertyuioplkjhgfdsazxcvbnmMNBNVCXZASDFGHJKLPOIUYTREWQ";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*_+={}[]~`'";

    for (let i = 1; i <= Length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [Length, numberAllowed, charAllowed]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(Password);
    alert("Password copied to clipboard!");
  };

  return (
    <div className="bg-gray-800 h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-6">Password Generator</h1>
      <div className="flex items-center bg-gray-700 p-3 rounded-md shadow-md">
        <input
          type="text"
          value={Password}
          className="outline-none w-full py-1 px-3 bg-gray-800 text-white"
          placeholder="Password"
          readOnly
        />
        <button
          onClick={copyToClipboard}
          className="bg-blue-500 text-white p-3 rounded-md ml-2"
        >
          Copy
        </button>
      </div>
      <div className="flex gap-6">
        <div className="flex  items-center mt-4">
          <input
            type="range"
            min={8}
            max={30}
            value={Length}
            className="cursor-pointer"
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label className="mt-2">Length: {Length}</label>
        </div>
        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label className="mt-2">Numbers</label>
        </div>{" "}
        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charAllowed"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label className="mt-2">char</label>
        </div>
      </div>
      <button
        onClick={setPasswordGenerater}
        className="mt-4 bg-green-500 px-4 py-2 rounded-md shadow-md text-white font-bold"
      >
        Generate Password
      </button>
    </div>
  );
}

export default App;
