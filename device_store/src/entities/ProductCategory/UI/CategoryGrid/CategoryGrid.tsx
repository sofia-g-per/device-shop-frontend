import { Link } from "react-router-dom";
import { productCategories } from "../../api/getCategories";
import { CategoryCard } from "../CategoryCard/CategoryCard";

export function CategoryGrid(props){
    const categories = productCategories;
    return(
        <section className="section-popular main-section container">
            {
                categories.map((category) =>
                    <CategoryCard category={category}></CategoryCard>
                )
            }
        </section>
    )
}