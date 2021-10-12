import React from "react";

interface ButtonTypes {
    handleClick : (event : React.MouseEvent<HTMLButtonElement>, id : number)=> void;
}


export const Button = (props : ButtonTypes) =>(
    <button onClick = {(event)=>props.handleClick(event, 1)} >Click</button>
)