export function TabsWithSideBar(props){
    const {tabs} = [props];
    return (
        <div className="side-slideshow container">
        <div className="side-slideshow__menu side-menu">
            { tabs.map(tab => 
                <button className="side-menu__btn side-menu__btn--active">
                    <p>{tab.name}</p>
                </button>
            )}
        </div>
        <div className="side-slideshow__slideshow slideshow">

            { tabs.map(tab => 
                <div className="slideshow__slide slide--active service--delivery">
                    <h2 className="text-card__title">{tab.name}</h2>
                    <p className="text-card__text text-card__text--left">
                        {tab.description}
                    </p>
                </div>
            )}
        </div>
    </div>
    )
}