import { Card } from "components";
import { useEffect, useState } from "react";
import { getFeaturedPlaylists } from "services/spotify/api/playlist/playlist";

const CATEGORIES_LIST_STATES = {
    fetching: 'fetching',
    success: 'success',
    failure: 'failure',
}

function ListPlaylist() {

    const [categories, setCategories] = useState([]);
    const [categoriesFetchStatus, setCategoriesFetchStatus] = useState(CATEGORIES_LIST_STATES.fetching)

    async function fetchCategories() {
        const res = await getFeaturedPlaylists()

        console.log("wwwwwwwwwwww", res)
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

    function RenderCategoriesListing() {
        if(categoriesFetchStatus === "fetching") {
            return [...Array(9)].map((_, index) => {
                return ( // @ts-ignore
                    // <Card
                    //     key={index}
                    //     fetchStatus={categoriesFetchStatus}
                    // />
                    <div></div>
                )
            })
        } else if (categoriesFetchStatus === "success") {//@ts-ignore
            return categories && categories.playlists.items.map((category:{}, index:number) => {
                return (// @ts-ignore
                // <Card
                //     key={index}
                //     item={category} 
                //     fetchStatus={categoriesFetchStatus}
                // />
                <div>{category.name}</div>
                )
            })
        } else if(categoriesFetchStatus === "failure") {
            return <h1>No categories found ;-(</h1>
        } 
    }

    return (
        <div>

            <div className="max-w-7xl mx-auto grid grid-cols-6 gap-6 p-8">
                <RenderCategoriesListing />
            </div>

        </div>
    )
}

export default ListPlaylist;