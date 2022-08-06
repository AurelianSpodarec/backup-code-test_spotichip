import ListGenre from "views/Genre";
import ShowGenre from "views/Genre/show";

const routesGenre = [
    {
        path: "/genre",
        element:<ListGenre />
    },
    {
        path: "/genre/:id",
        element: <ShowGenre />
    },
]

export default routesGenre;