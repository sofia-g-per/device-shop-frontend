import { Link } from "react-router-dom";
import { productCategories } from "../../api/getCategories";

export function CategoryNav(){
    return(
        <nav className="categories-nav">
           {productCategories.map(category => <Link className="categories-nav__btn fade-out-btn" to="#">{category.displayName}</Link>) }
        </nav>
    )
}