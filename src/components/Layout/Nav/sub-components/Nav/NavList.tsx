import NavItem from "./NavItem";

function RenderNavList() {
    return (
        <ul>
            <NavItem 
                name="Home" 
                url="/" 
            />
            <NavItem 
                name="Genre" 
                url="/genre" 
            />
            <NavItem 
                name="Playlists" 
                url="/playlists" 
            />
        </ul>
    )
}

export default RenderNavList;