import { Link } from "react-router-dom";

export function LinkFramed(props){
    return (
        <Link className="line-through-btn" to={props.link}>{props.label}</Link>
    )
}