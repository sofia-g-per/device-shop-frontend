import { Link } from "react-router-dom"

export function Nav(props){

    return (
        <nav className={props.containerClass}>
            { props.links.map((link) => 
                <Link  to={link.routeName} className={`${props.linkClass} ${link.class}`}> 
                    <span>{link.label}</span> 
                </Link>)
            }
        </nav>

    )
}
