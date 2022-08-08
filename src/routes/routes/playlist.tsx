import ListPlaylist from "views/pages/Playlist";
import ShowPlaylist from "views/pages/Playlist/show";

export default [
    {
        path: "/playlists",
        element: <ListPlaylist />
    },
    {
        path: "/playlist/:id",
        element: <ShowPlaylist />
    }
]