import { Fragment, useState } from "react";

export function ExpansionPanel(props){
    const [isOpen, setIsOpen] = useState(false);

    function toggleExpansion(){
        setIsOpen(!isOpen);
    }
    
    return (
        <Fragment>
            <button className={props.buttonClass} onClick={toggleExpansion}>
                {props.buttonLabel}
            </button>
            <div className={`expansion-panel ${props.contentClass} ${isOpen? 'expansion-panel--open' : ''}`}>
                {props.children}
            </div>
        </Fragment>
    )
}