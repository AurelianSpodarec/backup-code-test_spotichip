import { useRoutes } from "react-router-dom";

import NotFound from "views/NotFound/NotFound";
import Home from "views/Home/Home";
import ListSearch from "views/Search";

import { 
    routesArtist, 
    routesGenre, 
    routesPlaylist 
} from "./routes";
 
// TODO: Add lazy loading so we don't load every single route at once
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