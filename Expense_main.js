import React, { useState } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";

function Expense_main() {
  const obj = [
    {
      Date: "Date",
      Name: "Name",
      Title: "Title",
      Amount: "Amount($)",
    },
  ];
  let [userdata, Setuserdata] = useState(obj);
  function takedata(user_data) {
    const maindata = [...userdata,user_data ];
    Setuserdata(maindata);
  }
  return (
    <div>
      <Form1 take_data={takedata} />
      {userdata.map((val) => (
        <Form2
          key={val.id}   //key is used to improve performance . value in key is not displayed as output but it helps to maintain database.. ultimately its work is to improve databases and improve overall performances
          date={val.Date}
          name={val.Name}
          title={val.Title}
          amount={val.Amount}
        />
      ))}
    </div>
  );
}

export default Expense_main;
