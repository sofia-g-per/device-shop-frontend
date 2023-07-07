export function TextCard(props){
    return (
        <div className="text-card">
            <h2 className="text-card__title">{props.title}</h2>
            {
                props.text.map(paragraph => 
                    <p className="text-card__text">{paragraph}</p>
                )
            }
        </div>
    )
}