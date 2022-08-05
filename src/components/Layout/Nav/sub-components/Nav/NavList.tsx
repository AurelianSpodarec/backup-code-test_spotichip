import NavItem from "./NavItem";

function RenderNavList() {
    return (
        <ul>
            <NavItem 
                name="Home" 
                url="/" 
            />
            <NavItem 
                name="Search" 
                url="/search" 
            />
        </ul>
    )
}

export default RenderNavList;