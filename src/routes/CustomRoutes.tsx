import { useRoutes } from "react-router-dom";

import NotFound from "views/NotFound/NotFound";
import Home from "views/Home/Home";
import ListSearch from "views/Search";

import { 
    routesArtist, 
    routesGenre, 
    routesPlaylist 
} from "./routes";


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
            path: "/search",
            element: <ListSearch />
        },
        ...routesGenre,
        ...routesPlaylist,
        ...routesArtist
    ]);

    return element;
}

export default CustomRoutes;