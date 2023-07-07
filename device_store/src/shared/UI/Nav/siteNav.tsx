import { Link } from "react-router-dom"
import { Nav } from "./nav";
export function SiteNav(props){
    const siteLinks = [
        {label: 'доставка', routeName: '#', class: ""},
        {label: 'гарантия', routeName: '#', class: ""},
        {label: 'контакты', routeName: '#', class: ""},
    ]
    return (
        <Nav links={siteLinks} containerClass={`site-nav ${props.containerClass}`} linkClass={`site-nav__link ${props.linkClass}`}/>
    )
}

SiteNav.defaultProps = {
    containerClass: "",
    linkClass: ""
  };