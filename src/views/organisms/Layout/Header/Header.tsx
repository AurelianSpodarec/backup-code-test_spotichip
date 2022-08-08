import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector  } from "react-redux";

import { clearSearchInput, setSearchData, setSearchInput } from "store/slices/search/search";

import { HistoryButtons, Nav, SearchBar } from "./sub-components"
import { searchRequest } from "services/spotify/api/search/search";


function Header() {
    const dispatch = useDispatch();
    const global = useSelector((state:any ) => state.global);
    const search = useSelector((state:any) => state.search)

    const location = useLocation();

    async function fetchSearch() {
        const res = await searchRequest(search.input, search.category);
        console.log("header", res)
        dispatch(setSearchData(res))
    }

    function handleClearSearch() {
        dispatch(clearSearchInput())
    }

    function onValueChange(e:any) {
        // TODO: Debounce every 300ms with loaddash
        dispatch(setSearchInput(e.target.value)) 
        const nextURL = `${window.location.origin}/search/${e.target.value}/${search.category}`;
        window.history.replaceState(null, "", nextURL)
    }

    useEffect(() => {
        fetchSearch()
    }, [search.input])

    useEffect(() => {
        fetchSearch()
    }, [location, search.category])

    return (
        <header className="hidden lg:block sticky justify-centerz-30 z-30 top-0 right-0 left-0 h-[58px] bg-[#070707]">
        <div className="flex justify-between w-full px-8 h-full items-center">

            <div className="flex items-center">
                <HistoryButtons />

                {location.pathname === "/search" &&
                    <SearchBar 
                        search={search} 
                        onValueChange={onValueChange} 
                        handleClearSearch={handleClearSearch} 
                    />
                }

            </div>

            <Nav />

        </div>
        </header>
    )
}

export default Header