import ListGenre from "views/pages/Genre";
import ShowGenre from "views/pages/Genre/show";

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