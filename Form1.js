import React, { useState } from "react";
import "./Form1.css";

function Form1(props) {
  const [name, Setname] = useState("");
  const [title, Settitle] = useState("");
  const [amount, Setamount] = useState("");
  const [date, Setdate] = useState("");
  function submit(e) {
    e.preventDefault();
  }
  function nameHandler(eve) {
    Setname(eve.target.value);
  }
  function titleHandler(eve) {
    Settitle(eve.target.value);
  }
  function amountHandler(eve) {
    Setamount(eve.target.value);
  }
  function dateHandler(eve) {
    Setdate(eve.target.value);
  }
  function add() {
    const data = {
      Name: name,
      Title: title,
      Amount: amount,
      Date: date,
    };
    props.take_data(data);
    console.log(data)
    Setname("");
    Setamount("");
    Settitle("");
    Setdate("");
  }
  return (
    <div className="main">
         <h1>Expense Tracker</h1>
      <div className="main2">
        <form onSubmit={submit}>
          <div className="namediv div1">
            <label className="lbl">Name:</label>
            <input
              type="text"
              placeholder="Enter your name "
              value={name}
              onChange={nameHandler}
            />
          </div>
          <div className="titlediv div1">
            <label className="lbl">Title:</label>
            <input
              type="text"
              placeholder="Enter Title "
              value={title}
              onChange={titleHandler}
            />
          </div>
          <div className="amountdiv div1">
            <label className="lbl">Amount($):</label>
            <input
              type="number"
              placeholder="Enter Amount "
              value={amount}
              onChange={amountHandler}
            />
          </div>
          <div className="datediv div1">
            <label className="lbl">Date:</label>
            <input type="date" value={date} onChange={dateHandler} />
          </div>
          <button onClick={add}>Add Expense</button>
        </form>
      </div>
    </div>
  );
}

export default Form1;
