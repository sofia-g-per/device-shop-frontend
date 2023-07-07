export function List(children){
    return (
        <ul className="list">
            {
                children.map(child => 
                    <li className="list__item">
                        {/* make a before lement !!fix!! */}
                        <img src="assets/images/icons/list-icon.svg"/>
                        {child}
                    </li>
                )
            }
        </ul>
    )
}