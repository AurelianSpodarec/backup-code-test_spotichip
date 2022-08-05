import { useRoutes } from "react-router-dom";

import NotFound from "views/NotFound/NotFound";
import Home from "views/Home/Home";

import ListGenre from "views/Genre";
import ShowGenre from "views/Genre/show";

import ListPlaylist from "views/Playlist";
import ShowPlaylist from "views/Playlist/show";

function CustomRoutes() {
    let element = useRoutes([
        {
            path: "*",
            element: <NotFound />
        },
        {
            path: "/",
            element: <Home />
        },

        {
            path: "/genre",
            element:<ListGenre />
        },
        {
            path: "/genre/:id",
            element: <ShowGenre />
        },
        {
            path: "/playlists",
            element: <ListPlaylist />
        },
        {
            path: "/playlist/:id",
            element: <ShowPlaylist />
        },
    ]);

    return element;
}

export default CustomRoutes;