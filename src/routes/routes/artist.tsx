import ListArtist from "views/pages/Artist"
import ShowArtist from "views/pages/Artist/show"

export default [
    {
        path: "/artists",
        element: <ListArtist />
    },
    {
        path: "/artist/:id",
        element: <ShowArtist />
    }
]