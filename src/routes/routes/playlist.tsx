import ListPlaylist from "views/Playlist";
import ShowPlaylist from "views/Playlist/show";

export default [
    {
        path: "/playlists",
        element: <ListPlaylist />
    },
    {
        path: "/playlist/:id",
        element: <ShowPlaylist />
    },
]