import { Card, Pagination, Shelf } from "components";
import { useEffect, useState } from "react";

import { getBrowseCategories } from "services/spotify/api/categories/categories";
import { IResCategories } from "types";



const CATEGORIES_LIST_STATES = {
    fetching: 'fetching',
    success: 'success',
    failure: 'failure',
}

function ListGenre() {
    const [categories, setCategories] = useState<IResCategories>({});
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
            return [...Array(18)].map((_, index) => {
                return ( 
                    <Card
                        key={index}
                        fetchStatus={categoriesFetchStatus}
                    />
                )
            })
        } else if (categoriesFetchStatus === "success") { // @ts-ignore
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
            return <h1>No Genre found ;-(</h1>
        } 
    }

    return (
        <Shelf className="genre-list">
            { 
            //@ts-ignore
            } <RenderCategoriesListing />
        </Shelf>
    )
}

export default ListGenre