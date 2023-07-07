export function ProductGridItem(props){
    return (
        <article className="product-wrapper">
            <img className="product__img" src={props.product.img} alt={props.product.name}/>
            <div className="product__text">
                <p className="product-title strong">
                    {props.product.name}
                </p>
                <p className="product-price">
                    {props.product.price} руб. 
                </p>
            </div>
        </article>
    )
}