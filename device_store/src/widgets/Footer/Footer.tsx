import { SiteNav, UserNav } from "../../shared/UI/Nav";

export function Footer() {
    return (
        <footer className="footer">
        <img className="logo  fade-out-btn" src="assets/images/icons/logo--yellow.svg" alt="Логотип device"/>
        <UserNav containerClass="footer__user-nav" linkClass=""></UserNav>
        <p className="footer__address">г. Москва, ул. Строителей, 15</p>
        <SiteNav containerClass="footer__site-nav"></SiteNav>
        <a href="tel:+74954959595" className="footer__phone">
            Тел: +7(495) 495-95-95
        </a>
        <hr className="line line--yellow"/>
        <div className="socials-list footer__socials-list">
            <a className="socials__item fade-in-btn" href="#">
                <img src="assets/images/icons/facebook.svg" alt="Фейсбук"/>
            </a>
            <a className="socials__item fade-in-btn" href="#">
                <img src="assets/images/icons/instagram.svg" alt="Инстаграм"/>
            </a>
            <a className="socials__item fade-in-btn" href="#">
                <img src="assets/images/icons/twitter.svg" alt="Твиттер"/>
            </a>
        </div>
        <img className="footer__html-logo fade-out-btn" src="assets/images/icons/logo-html.svg" alt="Логотип HTML Academy"/>
    </footer>
    )
}