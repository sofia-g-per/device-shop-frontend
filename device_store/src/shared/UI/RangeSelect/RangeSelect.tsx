import { useState } from "react"

export function RangeSelect(props){
    const [range, setRange] = useState(new Map([["min", props.minAmount], ["max", props.maxAmount]]));
    function handleChange(e, changedKey: string){
        setRange(new Map([...range, [changedKey, e.target.value]]));
        props.onValueChange(range);
    }

    return (
        <div className="range-select-wrapper"> 
            <h4 className="strong">{props.displayName}</h4>
            <input className="range-select-min" type="number" 
                min={props.minAmount} max={props.maxAmount}
                defaultValue={props.minAmount}
                value={range.get("min")}
                onChange={e => handleChange(e, "min")}
            />
            <input className="range-select-max" type="number" 
                min={props.minAmount} max={props.maxAmount}
                defaultValue={props.maxAmount}
                value={range.get("max")}
                onChange={e => handleChange(e, "max")}
            />
        </div>
    )
}