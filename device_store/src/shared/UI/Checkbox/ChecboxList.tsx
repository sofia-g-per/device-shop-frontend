import { useState } from "react";
import { Checkbox } from "./Checkbox";

export function CheckboxList(props){
    const [checkboxes, setCheckboxes] = useState(new Map(props.options.map(option => [option.name, false])));
    function handleValueChange(optionName:string, newValue){
        setCheckboxes(new Map([...checkboxes, [optionName, newValue]]));
        props.onValueChange(checkboxes);
    }
    return(
        <div className="filter-checkbox">
            <h4 className="strong">{props.categoryName}</h4>
            {
                props.options.map(option => 
                    <Checkbox
                        displayName = {option.displayName}
                        name = {option.name}
                        value = {checkboxes.get(option.name)}
                        onValueChange={value => handleValueChange(option.name, value)}
                    />    
                )    
            }
        </div>
    )
}