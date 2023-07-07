export function RadioButton(props){
    return (
        <label>
            <input className="radio-btn" type="radio"/>
            <span>{props.displayName}</span>
        </label>
    )
}