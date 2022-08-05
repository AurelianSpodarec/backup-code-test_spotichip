import { Pagination } from "components";
import { useEffect, useState } from "react";

import { getBrowseCategories } from "services/spotify/api/categories/categories";

import { Link } from "react-router-dom";

const CATEGORIES_LIST_STATES = {
    fetching: 'fetching',
    success: 'success',
    failure: 'failure',
}

function Browse() {

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
    function Card(props:any) {
        const { item, fetchStatus } = props;
        // console.log(item)
        if(fetchStatus === "fetching") {
            return (
                <div className="w-full h-24 border-2 rounded-md mx-auto mt-20">
                <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
    
                    <div className="w-12 bg-gray-300 h-12 rounded-full "></div>
    
                    <div className="flex flex-col space-y-3">
                        <div className="w-36 bg-gray-300 h-6 rounded-md "></div>
                        <div className="w-24 bg-gray-300 h-6 rounded-md "></div>
                    </div>

                </div>
                </div>
            )
        } else {
            return (
                <div className="relative rounded-lg overflow-hidden">
                <Link to={`/genre/${item.id}`} className="block h-[180px]">

                    <h3 className="p-4 text-white text-2xl font-bold">{item.name}</h3>
                    <img className="absolute bottom-0 right-0 h-24 w-24" style={{ transform: "rotate(25deg) translate(18%,-2%)" }} src={item.icons[0].url} alt={item.name} />
                 
                </Link>
                </div>
            )    
        }
        
    }
    
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