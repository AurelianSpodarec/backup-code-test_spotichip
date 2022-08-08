import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { getPlaylist } from "services/spotify/api/playlist/playlist";

import { IArtists, ITrack, IPlaylist } from "types";



interface IFetchStatus {
    // playlistFetchingStatus: "fetching" | "success" | "failure"
    fetching: string;
    success: string;
    failure: string;
    // fetching: 
}

const PLAYLIST_LIST_STATES:IFetchStatus = {
    fetching: 'fetching',
    success: 'success',
    failure: 'failure',
}

function ShowPlaylist() {

    const { id }:any = useParams();

    // @ts-ignore
    const [playlist, setPlaylist] = useState<IPlaylist>({});
    const [playlistFetchStatus, setPlaylistFetchStatus] = useState(PLAYLIST_LIST_STATES.fetching)
    
    async function fetchPlaylist() {
        const res = await getPlaylist(id); 
        console.log(res)
        if(res.items && res.playlists.items.length === 0) {
            setPlaylistFetchStatus(PLAYLIST_LIST_STATES.failure)
        } else {
            setPlaylistFetchStatus(PLAYLIST_LIST_STATES.success)
            setPlaylist(res) 
        }
    }

    // TODO: Extract Into its own component
    function RenderGenreListing() {
        if(playlistFetchStatus === "fetching") {
            return (
                <div className="flex w-full h-full justify-center items-center align-center">
                    <svg role="status" className="inline mr-2 w-16 h-16 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path className="fill-green-700" d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"/>
                    </svg>
                </div>
            )
        } else if (playlistFetchStatus === "success") {
            return (
                <div>
                    <header className="text-white p-8" style={{ "backgroundColor": `${playlist.primary_color !== "#ffffff" ? playlist.primary_color : "#05a03c"}` }}>
                    <div className="flex">

                        <div className="h-[232px] w-[232px]">
                            <img className="h-full w-full" src={playlist.images[0].url} alt={`Picture of playlist called ${playlist.name}`} />
                        </div>

                        <div className="flex flex-col">
                            <div>
                                <span className="uppercase">{playlist.type}</span>
                                <h1 className="font-bold text-7xl">{playlist.name}</h1>
                            </div>

                            <div className="flex flex-col">
                                <span>{playlist.description}</span>
                                <span>{playlist.owner.display_name}</span>
                                -
                                <span>{playlist.tracks.total} songs,</span>
                                {/* TODO: Get time of total songs in playlist */}
                                <span>time</span>
                            </div>
                        </div>

                    </div>
                    </header>    
                    <section>

                        <div className="p-8">
                        {playlist && playlist.tracks.items.map((item:ITrack, index:number) => {
                                return (
                                    <div className="flex text-white" key={index}>

                                        <div>{index + 1}</div>

                                        <div>
                                        <img className="h-10 w-10" src={item.track.album.images[0].url} />
                                        </div>
                                        
                                        <div>
                                            <h3>{item.track.album.name}</h3>

                                            <div>
                                            {item.track.explicit && 
                                                <div title="Explicit">
                                                    E
                                                </div>
                                            }
                                            {item.track.episode &&
                                                <div title="Episode">
                                                    Episode
                                                </div>
                                            }

                                            {item.track.album.artists.map((artist:IArtists) => {
                                                return (
                                                    <Link key={artist.id} to={`/artist/${artist.id}`}>
                                                        <span>{artist.name}, </span>
                                                    </Link>
                                                )
                                            })}
                                            </div>
                                        </div>

                                        <div>
                                            {/* TODO: Make it like: 4 days ago */}
                                            {item.track.album.release_date}
                                        </div>

                                        <div>
                                            {item.track.duration_ms}
                                        </div>
                                        
                                    </div>
                                )
                            })
                        }
                        </div>

                    </section> 
                </div>
            )
        } else if(playlistFetchStatus === "failure") {
            return <h1>Whhoops! Something went wrong ;-(</h1>
        } 
    }

    useEffect(() => {
        fetchPlaylist();
    }, [])

    return (// @ts-ignore
        <div className="relative w-full h-full"><RenderGenreListing />
        </div>
    )
}

export default ShowPlaylist