import { Card, Pagination } from "components";
import { useEffect, useState } from "react";

import { getBrowseCategories } from "services/spotify/api/categories/categories";
import { getCategoriesPlaylists } from "services/spotify/api/playlist/playlist";


// 
// Genre
// index - show genres domain.com/genre
// show - list genre, domain.com/genre/top-hits
 
// domain.com/genre
// domain.com/genre/top-hits
// domain.com/genre/top-hits/name

// Structure
// / Genre
// domain.com/genre - index
// domain.com/genre/top-hits - show

// /Playlist
// domain.com/playlists - index (show all playlists)
// domain.com/playlist/love - show(show single playlist)


const CATEGORIES_LIST_STATES = {
    fetching: 'fetching',
    success: 'success',
    failure: 'failure',
}

function ListGenre() {

    const [categories, setCategories] = useState([]);
    const [categoriesFetchStatus, setCategoriesFetchStatus] = useState(CATEGORIES_LIST_STATES.fetching)

    async function fetchCategories() {
        const res = await getBrowseCategories();

        console.log(res)
        if(res.items && res.items.length === 0) {
            setCategoriesFetchStatus(CATEGORIES_LIST_STATES.failure)
        } else {
            setCategoriesFetchStatus(CATEGORIES_LIST_STATES.success)
            setCategories(res) 
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    // TODO: Extract into component later
    function RenderCategoriesListing() {
        if(categoriesFetchStatus === "fetching") {
            return [...Array(9)].map((_, index) => {
                return ( // @ts-ignore
                    <Card
                        key={index}
                        fetchStatus={categoriesFetchStatus}
                    />
                )
            })
        } else if (categoriesFetchStatus === "success") {//@ts-ignore
            return categories && categories.items.map((category:{}, index:number) => {
                return (// @ts-ignore
                <Card
                    key={index}
                    item={category} 
                    fetchStatus={categoriesFetchStatus}
                />
                )
            })
        } else if(categoriesFetchStatus === "failure") {
            return <h1>No categories found ;-(</h1>
        } 
    }

    return (
        <div>

            <div className="max-w-7xl mx-auto grid grid-cols-6 gap-6 genre-list p-8">
                <RenderCategoriesListing />
            </div>

        </div>
    )
}

export default ListGenre