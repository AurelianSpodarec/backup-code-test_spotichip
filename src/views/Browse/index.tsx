import { Card, Pagination } from "components";
import { useEffect, useState } from "react";

import { getBrowseCategories } from "services/spotify/api/categories/categories";


const CATEGORIES_LIST_STATES = {
    fetching: 'fetching',
    success: 'success',
    failure: 'failure',
}


// Need two pages, browse that displays all the categories/genre, and then genre that contains the list and then single
// Browse Categories

// Genre Index
// Genre Show

function Browse() {

    const [categories, setCategories] = useState([]);
    const [categoriesFetchStatus, setCategoriesFetchStatus] = useState(CATEGORIES_LIST_STATES.fetching)

    async function fetchCategories() {
        const res = await getBrowseCategories();

        // toplists
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

            <div className="grid grid-cols-6 gap-6">
                <RenderCategoriesListing />
            </div>

            <Pagination />

        </div>
    )
}

export default Browse