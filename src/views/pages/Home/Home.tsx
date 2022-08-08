import { Shelf } from "views/molecules"


function Home() {
    return (
        // <Shelf title="Home">
        <div className="p-8">
            <h1 className="text-5xl text-gray-100 font-bold">Welcome to Spotichip! 👋</h1>

            <ul className="text-gray-100 mt-8">
                <li>This is WIP</li>
                <li>Avaiable pages are: genre, genre sub-categories, playlists as well as single playlist</li>
            </ul>
        </div>
        // </Shelf>
    )
}

export default Home