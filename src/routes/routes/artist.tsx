import ListArtist from "views/Artist";
import ShowArtist from "views/Artist/show";

const routesArtist = [
    {
        path: "/artists",
        element: <ListArtist />
    },
    {
        path: "/artists/:id",
        element: <ShowArtist />
    }
]

export default routesArtist;