import { Link } from "react-router-dom"
import { Nav } from "./nav";
export function UserNav(props){
    const siteLinks = [
        {label: 'Войти', routeName: '#', class: 'login-btn'},
        {label: 'Сравнить', routeName: '#', class: 'compare-btn'},
        {label: 'Корзина', routeName: '#', class: 'cart-btn'},
    ]
    return (
        <Nav links={siteLinks} containerClass={`user-nav ${props.containerClass}`} linkClass={`user-nav__link ${props.linkClass}`}/>
    )
}

UserNav.defaultProps = {
    containerClass: "",
    linkClass: ""
  };