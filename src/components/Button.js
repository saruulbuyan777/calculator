import React from "react";
import css from "./style.module.css";


const Buttons = (props) =>{



  return (
    <div>
          <button onClick = {() => props.clickHandler(props.type)} value ={props.value}  className = {css.Button}>{props.type}</button>
    </div>
  );



}







export default Buttons






