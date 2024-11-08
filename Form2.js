import React, { useState } from "react";
import "./Form2.css";

function Form2(props){
    return(
        <div className="main-wala">
            <div className="date-wala box" >{props.date} </div>
            <div className="name-wala box" > {props.name} </div>
            <div className="title-wala box"> {props.title} </div>
            <div className="amount-wala box">{props.amount}  </div>
        </div>
    )
}

export default Form2;