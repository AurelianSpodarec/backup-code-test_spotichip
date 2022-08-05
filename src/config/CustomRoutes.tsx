import { useRoutes } from "react-router-dom";

import NotFound from "views/NotFound/NotFound";
import Home from "views/Home/Home";

import Browse from "views/Browse";

import ListGenre from "views/Genre";
import ShowGenre from "views/Genre/show";

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
            path: "/browse",
            element: <Browse />
        },

        {
            path: "/genre",
            element: <ListGenre />
        },
        {
            path: "/genre/:id",
            element: <ShowGenre />
        }
    ]);

    return element;
}

export default CustomRoutes;