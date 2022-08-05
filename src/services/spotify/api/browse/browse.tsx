// @API Docs: https://developer.spotify.com/console/browse/
//=============================================================
import SpotifyRequest from "services/spotify/requests/request";


async function getNewReleases() {
    const res = await SpotifyRequest('browse/new-releases', "GET")
    return res
}

async function getRecommendations() {
    const res = await SpotifyRequest('recommendations', "GET")
    return res
}

export {
    getNewReleases,
    getRecommendations
}