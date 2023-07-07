import { Link } from "react-router-dom";

export function CategoryCard(props){
    const category = props.category;
    return(
        <Link to={category.name} className="category-card">
            <div className="category-card__icon-wrapper">
                <img className="category-card__icon" src={category.img} alt={category.displayName}/>
            </div>
            <h4 className="category-card__title strong">{category.displayName}</h4>
        </Link>
    )
}