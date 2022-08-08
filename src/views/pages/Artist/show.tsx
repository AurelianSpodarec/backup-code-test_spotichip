import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getArtist } from "services/spotify/api/artist/artist";

import { IArtist } from "types/IArtist";

import { ArtistHeader } from "./sub-components/show";


const ARTIST_PLAYLISTS_STATES = {
    fetching: 'fetching',
    success: 'success',
    failure: 'failure',
}

function ShowArtist() {

    const { id }:any = useParams();

    const [artist, setArtist] = useState<IArtist|undefined>(undefined)
    const [artistFetchStatus, setArtistsFetchStatus] = useState(ARTIST_PLAYLISTS_STATES.fetching)

     async function fetchAritst() {
        const res = await getArtist(id)
        
         if(res && res.length === 0) {
            setArtistsFetchStatus(ARTIST_PLAYLISTS_STATES.failure)
        } else {
            setArtistsFetchStatus(ARTIST_PLAYLISTS_STATES.success)
            setArtist(res)
            console.log(res)
        }
    }

    useEffect(() => {
        fetchAritst()
    }, [])
    return (
        <div>
            <ArtistHeader artistFetchStatus={artistFetchStatus} artist={artist} />
        </div>
    )
}

export default ShowArtist