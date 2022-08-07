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
                <div>loading...</div>
            )
        } else if (playlistFetchStatus === "success") {
            return (
                <div>
                    <header className="text-white p-8" style={{ "backgroundColor": `${playlist.primary_color !== "#ffffff" ? playlist.primary_color : "#d98135"}` }}>
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
        <div><RenderGenreListing />
        </div>
    )
}

export default ShowPlaylist