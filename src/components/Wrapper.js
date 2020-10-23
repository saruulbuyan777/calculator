import React,{useState} from 'react'
import css from "./wrapper.module.css";
import Buttons from "./Button";



const Wrapper =() => {

     const[state, setState] = useState({result: ""})
     const clickHandler = (type) => {
          if(type === "="){
              calculate();


          }
          else if(type === "c"){
              reset();
             
          }
          else if (type === "clear"){
              backspace();
          }
          else {
              setState({result : state.result + type});
          }

          
        }

        const calculate = () => {
            try{
                setState({result : (eval(state.result) || "") + ""})
                console.log("calculate");
            }
            catch(aldaa){
                setState({result: aldaa});
                
            }
            

        }
        const reset = () => {
           setState({result : ""})
           console.log(state.result);
        }
        const backspace = () => {
          setState({result : state.result.slice(0, -1)});
        }

    return(
        
              <div className = {css.wrapper}>
              <label className ={css.label}>{state.result}</label>
              <Buttons clickHandler = {clickHandler}  type = "7"/>
              <Buttons clickHandler = {clickHandler}  type = "8"/>
              <Buttons clickHandler = {clickHandler}  type = "9"/>
              <Buttons clickHandler = {clickHandler}  type = "/"/>
              <Buttons clickHandler = {clickHandler}  type = "4"/>
              <Buttons clickHandler = {clickHandler}  type = "5"/>
              <Buttons clickHandler = {clickHandler} type = "6"/>
              <Buttons clickHandler = {clickHandler} type = "*"/>
              <Buttons clickHandler = {clickHandler} type = "1" />
              <Buttons clickHandler = {clickHandler} type = "2"/>
              <Buttons clickHandler = {clickHandler} type = "3"/>                                    
              <Buttons clickHandler = {clickHandler} type = "-"/>
              <Buttons clickHandler = {clickHandler} type = "c"/>
              <Buttons clickHandler = {clickHandler} type = "."/>             
              <Buttons clickHandler = {clickHandler} type = "clear"/>
              <Buttons clickHandler = {clickHandler} type = "+"/>
              <Buttons clickHandler = {clickHandler} type = "="/>
              
        </div>
    );
}

export default Wrapper
