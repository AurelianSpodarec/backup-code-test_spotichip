import ListGenre from "views/Genre";
import ShowGenre from "views/Genre/show";

export default [
    {
        path: "/genre",
        element:<ListGenre />
    },
    {
        path: "/genre/:id",
        element: <ShowGenre />
    },
]