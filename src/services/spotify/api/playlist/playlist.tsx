// @API Docs: https://developer.spotify.com/documentation/web-api/reference/#/operations/get-playlists-tracks
//=============================================================
import SpotifyRequest from "services/spotify/requests/request";


async function getPlaylist(id:string) {
    const res = await SpotifyRequest(`playlists/${id}`, "GET")
    return res
}

async function changePlaylistDetails(id:string, data:{}) {
    const res = await SpotifyRequest(`playlist/${id}`, "PUT", data)
    return res
}

async function getPlaylistItems(id:string) {
    const data = await SpotifyRequest(`playlist/${id}/tracks`, "GET")
    return data
}

async function addItemsToPlaylist(id:string, data:{}) {
    const res = await SpotifyRequest(`playlist/${id}/tracks`, "POST", data)
    return res
}

async function updatePlaylistItems(id:string, data:{}) {
    const res = await SpotifyRequest(`playlist/${id}/tracks`, "PUT", data)
    return res
}
 
async function removePlaylistItems(id:string, data:{}) {
    const res = await SpotifyRequest(`playlist/${id}/tracks`, "DELETE", data)
    return res
}

async function getCurrentUserPlaylists() {
    const res = await SpotifyRequest(`me/playlists`, "GET")
    return res
}

async function getUsersPlaylists(id:string) {
    const res = await SpotifyRequest(`users/${id}/playlists`, "GET")
    return res
}

async function createPlaylists(id:string, data:{}) {
    const res = await SpotifyRequest(`users/${id}/playlist`, "POST", data)
    return res
}

async function getFeaturedPlaylists() {
    const res = await SpotifyRequest('browse/featured-playlists', "GET")
    return res
}

async function getCategoriesPlaylists(id:string) {
    const res = await SpotifyRequest(`browse/categories/${id}/playlists`, "GET")
    return res
}

async function getPlaylistCoverImage(id:string) {
    const res = await SpotifyRequest(`playlist/${id}/images`, "GET")
    return res
}

async function getCategoryPlaylist(id:string) {
    const res = await SpotifyRequest(`browse/categories/${id}/playlists`, "GET")
    return res
}

async function addCustomPlaylistCoverImage(id:string, data:{}) {
    const res = await SpotifyRequest(`playlist/${id}/images`, "POST", data)
    return res
}

export {
    getPlaylist,
    changePlaylistDetails,
    getPlaylistItems,
    addItemsToPlaylist,
    updatePlaylistItems,
    removePlaylistItems,
    getCurrentUserPlaylists,
    getUsersPlaylists,
    createPlaylists,
    getFeaturedPlaylists,
    getCategoriesPlaylists,
    getPlaylistCoverImage,
    getCategoryPlaylist,
    addCustomPlaylistCoverImage
}