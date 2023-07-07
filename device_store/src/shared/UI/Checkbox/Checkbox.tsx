import { useState } from "react"

export function Checkbox(props){
    function handleOnChange(){
        props.changeChecked();
    }
    return(
        <label className="checkbox-wrapper">
            <input className="checkbox" 
            type="checkbox" 
            name={props.categoryName} 
            value={props.option.name}
            checked={props.value}
            onChange={handleOnChange}
            />
            <span>{props.option.displayName}</span>
        </label>
    )
}