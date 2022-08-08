// @API Docs: https://developer.spotify.com/documentation/web-api/reference/#/operations/search
//=============================================================
import SpotifyRequest from "services/spotify/requests/request";

async function searchRequest(input:string, category:string) {

    let params = {
        "q": input,
        "type": category
    }
    const qs = new URLSearchParams(params);

    if(input === "" && category === "") {
        return await SpotifyRequest(`search`)
    }
    return  await SpotifyRequest(`search?${qs}`)
}

async function getArtists() {
    const res = await SpotifyRequest('search?q=e&type=artist', "GET")
    return res;
}

export {
    searchRequest,
    getArtists
}