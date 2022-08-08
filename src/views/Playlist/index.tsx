import { Card, Shelf } from "components";
import Card2 from "components/Card2/Card2";
import { useEffect, useState } from "react";
import { getFeaturedPlaylists } from "services/spotify/api/playlist/playlist";
import { IPlaylist } from "types";

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
    const [playlists, setCategories] = useState<IRes>(undefined);
    const [playlistsFetchStatus, setPlaylistsFetchStatus] = useState(PLAYLISTS_LIST_STATES.fetching)
    async function fetchCategories() {
        const res = await getFeaturedPlaylists()
        
        if(res.items && res.playlists.items.length === 0) {
            setPlaylistsFetchStatus(PLAYLISTS_LIST_STATES.failure)
        } else {
            setPlaylistsFetchStatus(PLAYLISTS_LIST_STATES.success)
            console.log("eeeeeeeee",res)
            setCategories(res.playlists) 
        }
    }
    
    useEffect(() => {
        fetchCategories()
    }, [])
    
    // TODO: Extract into its own component
    function RenderCategoriesListing() {
        if(playlistsFetchStatus === "fetching") {
            return [...Array(9)].map((_, index) => {
                return (
                <Card2
                    key={index}
                    fetchStatus={playlistsFetchStatus}
                />
                )
            })
        } else if (playlistsFetchStatus === "success") {
            return playlists && playlists.items && playlists.items.map((category:IPlaylist, index:number) => {
                return (
                <Card2
                    key={index} // @ts-ignore
                    data={category} 
                    fetchStatus={playlistsFetchStatus}
                />
                )
            })
        } else if(playlistsFetchStatus === "failure") {
            return <h1>No playlists found ;-(</h1>
        } 
    }

    return (
        <Shelf title="Top 10 Playlists">
            {
                // @ts-ignore
            } <RenderCategoriesListing />
        </Shelf>
    )
}

export default ListPlaylist;