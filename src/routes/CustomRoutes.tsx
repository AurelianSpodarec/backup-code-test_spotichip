import { useRoutes } from "react-router-dom";

import NotFound from "views/pages/NotFound/NotFound";
 
import Home from "views/pages/Home/Home";

import routesSearch  from "./routes/search"
import routesArtist from "./routes/artist";
import routesGenre from "./routes/genre";
import routesPlaylist from "./routes/playlist"

// TODO: Create auto loader with webpack
// TODO: Create automatic indexing - https://www.npmjs.com/package/dot-index-webpack-plugin?activeTab=readme
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
        ...routesSearch,
        ...routesGenre,
        ...routesPlaylist,
        ...routesArtist
    ]);

    return routes;
}

export default CustomRoutes;