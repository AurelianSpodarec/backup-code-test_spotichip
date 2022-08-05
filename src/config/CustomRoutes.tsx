import * as React from "react";
import { useRoutes } from "react-router-dom";

import Home from "views/Home/Home";
import Browse from "views/Browse/Browse";
import NotFound from "views/NotFound/NotFound";

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
        }
    ]);

    return element;
}

export default CustomRoutes;