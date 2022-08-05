import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { getPlaylist } from "services/spotify/api/playlist/playlist";


const PLAYLIST_LIST_STATES = {
    fetching: 'fetching',
    success: 'success',
    failure: 'failure',
}

function ShowPlaylist() {

    const { id }:any = useParams();

    const [playlist, setPlaylist] = useState([]);
    const [playlistFetchStatus, setPlaylistFetchStatus] = useState(PLAYLIST_LIST_STATES.fetching)
    
    async function fetchPlaylist() {
        const res = await getPlaylist(id); 

        if(res.items && res.playlists.items.length === 0) {
            setPlaylistFetchStatus(PLAYLIST_LIST_STATES.failure)
        } else {
            setPlaylistFetchStatus(PLAYLIST_LIST_STATES.success)
            setPlaylist(res) 
        }
    }

    // Into its own component
    function RenderGenreListing() {
        if(playlistFetchStatus === "fetching") {
            return (
                <div>loading...</div>
            )
        } else if (playlistFetchStatus === "success") {
            return (// @ts-ignore
                <div className="text-white">{playlist.name}</div>     
            )
        } else if(playlistFetchStatus === "failure") {
            return <h1>No categories found ;-(</h1>
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