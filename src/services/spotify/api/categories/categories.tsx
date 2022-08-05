// @API Docs: https://developer.spotify.com/documentation/web-api/reference/#/operations/get-categories
//=============================================================
import SpotifyRequest from "services/spotify/requests/request";


async function getBrowseCategories() {

    // const { param } = props;

    // `browse/categories?limit-12`
    const res = await SpotifyRequest("browse/categories", "GET")
    return res.categories
}

async function getBrowseCategoryByID(id:string) {
    const res = await SpotifyRequest(`browse/categories/${id}`, "GET")
    return res
}

export {
    getBrowseCategories,
    getBrowseCategoryByID
}