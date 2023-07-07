export function SortHeader(props){

    return (
        // change class name to sort header
        <div className="sort-options">
        <p className="strong">
            Сортировка:
        </p>
        <div className="sort-options__sort-options">
            {       
                props.sortOptions.map(sortOption => 
                    <button className={`sort-option fade-in-btn ${sortOption.name == props.activeSortOption? "sort-option--active": ""}`} 
                        onClick={props.onChangeSortOption(sortOption.name)}>
                        {sortOption.displayName}
                    </button>
                )     
                
            }
        </div>
        {/* change up down button icons */}
        <div className="sort-options__btns">
            <button onClick={props.onChangeSortDirection("ASC")}>
                <img src="../../../assets/icon_arrow_nav.svg"  
                    className={`arrow-up ${props.activeSortDirection == "ASC"? "icon--inactive": ""}`}/>
            </button>
            <button onClick={props.onChangeSortDirection("DESC")}>
                <img src="../../../assets/icon_arrow_nav.svg"  
                    className={`arrow-up ${props.activeSortDirection == "DESC"? "icon--inactive": ""}`}/>
            </button>
        </div>
        </div>
    )
}