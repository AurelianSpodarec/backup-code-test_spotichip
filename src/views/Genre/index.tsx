import { Card, Pagination } from "components";
import { useEffect, useState } from "react";

import { getBrowseCategories } from "services/spotify/api/categories/categories";


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
                return ( 
                    <Card
                        key={index}
                        fetchStatus={categoriesFetchStatus}
                    />
                )
            })
        } else if (categoriesFetchStatus === "success") {
            return categories && categories.items.map((category:{}, index:number) => {
                return (
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