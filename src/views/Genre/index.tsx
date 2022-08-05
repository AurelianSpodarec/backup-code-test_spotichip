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

function ListGenre() {

    // const [categories, setCategories] = useState([]);
    // const [categoriesFetchStatus, setCategoriesFetchStatus] = useState(CATEGORIES_LIST_STATES.fetching)

    // async function fetchCategories() {
    //     const res = await getBrowseCategories();
    //     console.log(res)
    //     if(res.items && res.items.length === 0) {
    //         setCategoriesFetchStatus(CATEGORIES_LIST_STATES.failure)
    //     } else {
    //         setCategoriesFetchStatus(CATEGORIES_LIST_STATES.success)
    //         setCategories(res) 
    //     }
    // }

    // useEffect(() => {
    //     fetchCategories()
    // }, [])

    // TODO: Extract into component later
    

    return (
        <div>

            {/* List */}

        </div>
    )
}

export default ListGenre