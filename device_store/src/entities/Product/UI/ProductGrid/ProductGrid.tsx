import { ProductGridItem } from "./ProductGridItem";

export function ProductGrid(props){
    return (
        // change classname to product-grid !!fix!!
        <div className="catalogue-products">
            {
                props.products.map( product =>
                    <ProductGridItem product={product}/>
                )
            }
        </div>

    )
}