import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { getPlaylist } from "services/spotify/api/playlist/playlist";



interface IPlayer {

}



interface IExternalURLS {

}

interface IArtist {
    key: number;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
    external_urls: {
        spotify: string;
    },
}

interface IArtists {
    artists: IArtist;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}



interface IImage {
    height: number;
    width: number;
    url: string;
}


interface IAlbum {
    album_type: string;
    artists: [IArtists];
    available_markets: [string];
    external_urls: {
        spotify: string;
    }
    href: string;
    id: string;
    images: [IImage]
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
}

interface ITrack {
    added_at: string;
    album: IAlbum;
    added_by: {
        external_urls: {
            spotify: string;
        },
        href: string;
        id: string, 
        type: string; 
        uri: string;
    };
    is_local: boolean;
    primary_color: string;
    track: ITrack;
    video_thumbnail: {
        url: string;
    };
    explicit?: boolean;
    episode?: boolean;
    duration_ms: number;
}

interface ITracks {
    href: string;
    album?: IAlbum;
    items: [ITrack],
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
}




interface IPlaylistExternalImages {
    
}

interface IOwner {
    display_name: string;
    external_urls: { 
        spotify: string
    }, 
    href: string;
    id: string; 
    type: string;
    url: string;
}

interface IPlaylist {
    collaborative: boolean;
    description: string;
    external_urls: {
        spotify: string;
    }
    followers: {
        href: string;
        total: number;
    }
    href: string;
    id: string;
    images: [IImage];
    name: string;
    owner: IOwner;
    primary_color: string
    public: boolean;
    snapshot_id: string;
    tracks: ITracks
    type: string;
    uri: string;
}








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
    const [playlist, setPlaylist] = useState<IPlaylist>(undefined);
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