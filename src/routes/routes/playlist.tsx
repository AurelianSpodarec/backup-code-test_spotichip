import ListPlaylist from "views/Playlist";
import ShowPlaylist from "views/Playlist/show";

const routesPlaylist = [
    {
        path: "/playlists",
        element: <ListPlaylist />
    },
    {
        path: "/playlist/:id",
        element: <ShowPlaylist />
    },
]

export default routesPlaylist;