import { Link } from "react-router-dom"
import { SiteNav, UserNav } from "../../shared/UI/Nav"
import { CategoryNavExpandable } from "../../entities/ProductCategory/UI/CategoryNav/categoryNavExpandable"
export function Header(){

return(
    <header className="header container">
        <img  className="logo fade-out-btn" src="assets/images/icons/logo.svg" alt="Логотип Device"/>
        <form className="header__search-bar search-bar" action="get">
            <input className="search-bar__input active-underline" type="text" placeholder="Поиск по сайту" id="search-bar"/> 
            <button className="search-bar__btn">найти</button>
        </form>
        <button className="btn-mobile-nav fade-out-btn">
            <ion-icon className="icon-mobile-nav" name="menu-outline"></ion-icon>
            <ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon>
        </button>
        <UserNav containerClass="header__user-nav" linkClass="fade-out-btn" />

        <SiteNav containerClass="header__site-nav" linkClass="fade-out-btn" />

        <CategoryNavExpandable/>
            
    </header>
    )
}