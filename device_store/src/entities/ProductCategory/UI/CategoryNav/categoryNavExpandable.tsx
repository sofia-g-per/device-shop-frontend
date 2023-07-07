import { ExpansionPanel } from "../../../../shared/UI/ExpansionPanel/ExpansionPanel";
import { CategoryNav } from "./categoryNav";

export function CategoryNavExpandable(){
    return (
        <ExpansionPanel buttonLabel="категории товаров" buttonClass="categories-btn site-nav__link fade-out-btn">
            <CategoryNav></CategoryNav>
        </ExpansionPanel>
    )
}