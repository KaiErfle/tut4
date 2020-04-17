import React, { useState } from 'react';
import './input.css'
import CustomButton from '../CustomButton';

const Input = ({placeholder, onClick}) =>{
    const [val, setVal] = useState("");

return <div className="input_cont">
    <input onChange={(e) => {
        setVal(e.target.value)
    }} type='text' placeholder={placeholder}></input> 
    <CustomButton 
    onClick={()=>{
        // alert(val);
        onClick(val);}}
    text="Send"
    color="#58F"/>
</div>;
}

Input.defaultProps = {
    placeholder:"type your chat here!",
    onClick:()=>{}

}

export default Input 