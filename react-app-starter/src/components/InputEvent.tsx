import React from "react"


interface InputTypes {
    value : string;
    handleChange : (event : React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props : InputTypes ) => {
    const handleInputchange = (event : React.ChangeEvent<HTMLInputElement>) =>{
        console.log(event)
    }
    return(
        // <input type = 'text' onChange = {props.handleChange} value = {props.value} />
        <input type = 'text' onChange = {handleInputchange} value = {props.value} />
    ) 
}