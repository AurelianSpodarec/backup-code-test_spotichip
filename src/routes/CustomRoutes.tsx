import { useRoutes } from "react-router-dom";

import NotFound from "views/NotFound/NotFound";
import Home from "views/Home/Home";
import ListSearch from "views/Search";

import routesArtist from "./routes/artist";
import routesGenre from "./routes/genre";
import routesPlaylist from "./routes/playlist"

// TODO: Create auto loader with glob package - https://www.npmjs.com/package/glob
// TODO: Add lazy loading so we don't load every single route at once, as that makes the performance worse
function CustomRoutes() {
    let routes = useRoutes([
        {
            path: "*",
            element: <NotFound />
        },
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/search",
            element: <ListSearch />
        },
        ...routesGenre,
        ...routesPlaylist,
        ...routesArtist
    ]);

    return routes;
}

export default CustomRoutes;