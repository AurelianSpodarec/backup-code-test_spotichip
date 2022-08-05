import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { getCategoriesPlaylists } from "services/spotify/api/playlist/playlist";

import { Card, Pagination } from "components";

const CATEGORIES_LIST_STATES = {
    fetching: 'fetching',
    success: 'success',
    failure: 'failure',
}

function ShowGenre() {
    
    const { id }:any = useParams();
    
    const [categories, setCategories] = useState([]);
    const [categoriesFetchStatus, setCategoriesFetchStatus] = useState(CATEGORIES_LIST_STATES.fetching)
    
    
    async function fetchCategoriesPlaylists() {
        // TODO: paginate
        const res = await getCategoriesPlaylists(id)
        console.log(res.playlists)

        if(res.items && res.playlists.items.length === 0) {
            setCategoriesFetchStatus(CATEGORIES_LIST_STATES.failure)
        } else {
            setCategoriesFetchStatus(CATEGORIES_LIST_STATES.success)
            setCategories(res.playlists) 
        }
    }

    useEffect(() => {
        fetchCategoriesPlaylists()
    }, [])

    function RenderGenreListing() {
        if(categoriesFetchStatus === "fetching") {
            return [...Array(9)].map((_, index) => {
                return ( // @ts-ignore
                     <div key={index}>loading</div>
                )
            })
        } else if (categoriesFetchStatus === "success") {//@ts-ignore
            return categories && categories.items.map((category:{}, index:number) => {
                return (// @ts-ignore
                <Link  key={index} to={`/playlist/${category.id}`}><div className="text-white">{category.name}</div>
                </Link>
                    
                )
            })
        } else if(categoriesFetchStatus === "failure") {
            return <h1>No categories found ;-(</h1>
        } 
    }
    
    return (
        <div>

            <RenderGenreListing />
            
           

        </div>
    )
}

export default ShowGenre