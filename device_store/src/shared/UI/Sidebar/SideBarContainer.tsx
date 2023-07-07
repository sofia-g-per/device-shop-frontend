export function SideBarContainer(props){
    return (
        <div className="side-bar-container">   
            <div className="side-bar-container__side-bar">
                {props.sidebarContent}
            </div>
            <div className="side-bar-container__main-content">
                {props.mainContent}
            </div>
        </div>
    )
}