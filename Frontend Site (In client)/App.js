import React, { useState, useEffect } from 'react';
import { ethers } from "ethers";

function App() {
  const[depo, depoInput] = useState("")
  const[withd, withdinput] = useState("")
  const[text, textInput] = useState("")

  const handleDepositChange = (userInput) => {
    depoInput(userInput.target.value);
  }
  const handleDepositSubmit = (userInput) => {
    userInput.preventDefault();
    console.log(depo);
  }

  const handleWithdrawChange = (userInput) => {
    withdinput(userInput.target.value)
  }
  const handleWithdrawSubmit = (userInput) => {
    userInput.preventDefault();
    console.log(withd);
  }

  const handleGreetingChange = (userInput) => {
    textInput(userInput.target.value)
  }
  const handleGreetingSubmit = (userInput) => {
    userInput.preventDefault();
    console.log(text);
  }

  return (
    <div className="container">
      <center><h1>BoxxerBank</h1></center>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Greetings Family!</h3>
            <h3>Contract Balance: 0</h3>
          </div>

          <div className="col">
          <form onSubmit={handleDepositSubmit}>
            <div className="mb-1">
              <input type="number" className="form-control" placeholder="0" onChange={handleDepositChange} value={depo}/>
              </div>
            <button type="submit" className="btn btn-success">Deposit</button>
          </form>
          <br></br>
          <form onSubmit={handleWithdrawSubmit}>
            <div className="mb-1">
              <input type="number" className="form-control" placeholder="0" onChange={handleWithdrawChange} value={withd}/>
              </div>
            <button type="submit" className="btn btn-primary">Withdraw</button>
          </form>

          <form className="mt-5" onSubmit={handleGreetingSubmit}>
            <div className="mb-3">
              <input type="text" className="form-control" onChange={handleGreetingChange} value={text}/>
              </div>
            <button type="submit" className="btn btn-dark">Change Greeting Message</button>
          </form>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
