import ListArtist from "views/Artist";
import ShowArtist from "views/Artist/show";

export default [
    {
        path: "/artists",
        element: <ListArtist />
    },
    {
        path: "/artists/:id",
        element: <ShowArtist />
    }
]