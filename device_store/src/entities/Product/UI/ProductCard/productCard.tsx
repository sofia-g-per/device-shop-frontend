import { Link } from "react-router-dom";

export function ProductCard(props){
    const product = props.product;
    return (
        <div className="product-slide">
            {/* тут должен быть хедер из компонента с каруселью */}
        <img className="product-slide__img" src={product.img} alt={`Изображение ${product.name}`}/>
        <div className="product-slide__text-card text-card">
            <h2 className="text-card__title">{product.headline? product.headline : product.name}</h2>
            <p className="text-card__text">
                {product.description}
            </p>
        </div>
        <Link to={product.id} className="product-slide__btn line-through-btn">подробнее</Link>
        <ul className="product-slide__features features">
            {product.features.map(feature => 
                <li className="features__feature">
                    <p className="features__feature__number">{feature.value} {feature.unit}</p>
                    <p className="features__features__text">{feature.type}</p>
                </li>
            )}
        </ul>
    </div>
    )
}