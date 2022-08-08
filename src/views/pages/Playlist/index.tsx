import { useEffect, useState } from "react";

import { getFeaturedPlaylists } from "services/spotify/api/playlist/playlist";
import { IPlaylist } from "types";

import {  Shelf } from "views/molecules";
import RenderPlaylist from "./sub-components/index/RenderPlaylist";


const PLAYLISTS_LIST_STATES = {
    fetching: 'fetching',
    success: 'success',
    failure: 'failure',
}

interface IRes {
    href: string;
    items?: [IPlaylist];
    limit: number;
    next?: string;
    offset: number;
    previous?: string;
    total: number;
}

function ListPlaylist() {
    // @ts-ignore
    const [playlists, setCategories] = useState<IRes>({});
    const [playlistsFetchStatus, setPlaylistsFetchStatus] = useState(PLAYLISTS_LIST_STATES.fetching)

    async function fetchCategories() {
        const res = await getFeaturedPlaylists()
        if(res.items && res.playlists.items.length === 0) {
            setPlaylistsFetchStatus(PLAYLISTS_LIST_STATES.failure)
        } else {
            setPlaylistsFetchStatus(PLAYLISTS_LIST_STATES.success)
            setCategories(res.playlists) 
        }
    }
    
    useEffect(() => {
        fetchCategories()
    }, [])
    
    return (
        <Shelf title="Top 10 Playlists">
            {
                // @ts-ignore
            } 
            <RenderPlaylist //@ts-ignore
                fetchStatus={playlistsFetchStatus}
                data={playlists}
            />

            
        </Shelf>
    )
}

export default ListPlaylist;