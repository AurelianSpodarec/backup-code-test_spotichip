import react, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRecentSearchItem, setSearchCategory, setSearchInput } from "store/slices/search/search";

import { configCategories } from "config";
import { getBrowseCategories } from "services/spotify/api/categories/categories";

import { Card, Card2, Shelf } from "views/molecules";
import ArtistList from "../Artist/sub-components/index/ArtistList";
import ListPlaylist from "../Playlist/sub-components/index/ListPlaylist";


const SEARCHES_LIST_STATES = {
    fetching: 'fetching',
    success: 'success',
    failure: 'failure',
}

function ListSearch() {
    const dispatch = useDispatch()
    const search = useSelector((state:any) => state.search)

    const [searches, setSearches] = useState([])
    const [searchesFetchStatus, setSearchesFetchStatus] = useState(SEARCHES_LIST_STATES.fetching)


    async function fetchCategories() { 
        const res = await getBrowseCategories();

        if(res.items && res.items.length === 0) {
            setSearchesFetchStatus(SEARCHES_LIST_STATES.failure)
        } else {
            setSearchesFetchStatus(SEARCHES_LIST_STATES.success)
            setSearches(res) 
        }
    }

    function setCategory(category:any) {
        dispatch(setSearchCategory(category.slug))

        const nextURL = `http://localhost:3000/search/${search.input}/${category.slug}`;
        window.history.replaceState(null, "", nextURL)
    }

    function RenderCategoriesOptions() {
        if(!configCategories) return <></>
        return (
            <div className="sticky z-30 top-[58px] bg-[#121212]">
                <div className="px-8 pt-1 pb-3 space-x-3">

                    {configCategories && configCategories.map((category, index) => {
                        return (
                            <button onClick={() => setCategory(category)} key={index} className={`${search.category === category.slug ? "text-black bg-white" : "text-white bg-[#232323]"} ${index === 0 && "mr-4"} inline-block py-1 px-3 rounded-2xl `}>
                                <span className="font-semibold text-sm">{category.name}</span>
                            </button>
                        )
                    })}
                    
                </div>
            </div>
        )
    }

    function RenderCategoriesListing() {
        if(searchesFetchStatus === "fetching") {
            return [...Array(9)].map((_, index) => {
                return (//@ts-ignore
                    <Card 
                        key={index} 
                        fetchStatus={searchesFetchStatus} 
                    />
                )
            })
        } else if (searchesFetchStatus === "success") {//@ts-ignore
            return searches && searches.items.map((category:{}, index:number) => {
                return (
                    <Card 
                        key={index}//@ts-ignore
                        item={category} 
                        fetchStatus={searchesFetchStatus}
                    />
                )
            })
        } else if(searchesFetchStatus === "failure") {
            return <h1>No search found ;-(</h1>
        } 
    }

  
    function RenderRecentSearch() {
        return (
            <Shelf title="Recent Searches" linkText="See all" link="/recent-searches">
                {search.recentSearches.slice(0, 6).map((item:any) => {
                        return (
                            <Card2 
                                key={item.id}
                                data={item}
                                canDelete={true}
                                fetchStatus="success"
                            />
                        )
                    })
                }
            </Shelf>
        )
    }


    useEffect(() => {
        fetchCategories()

        if(search.input === "") {
            dispatch(setSearchCategory(""))

            const nextURL = `http://localhost:3000/search`;
            window.history.replaceState(null, "", nextURL)
        }
    }, [searchesFetchStatus])

    return (
        <div>

            {search.input !== "" &&
                <RenderCategoriesOptions />
            }
            
       
            {search.category === "artist" && 
                <Shelf>
                    <ArtistList data={search.data} fetchStatus="success"/>
                </Shelf>
            }

            {search.category === "playlist" && 
                <Shelf>
                    <ListPlaylist data={search.data} fetchStatus="success"/>
                </Shelf>
            }


          

            {search.category === "" &&
            <>

                {search && search.recentSearches.length !== 0 && 
                        <RenderRecentSearch  />
                }

                <Shelf title="Browse all" className="genre-list">
                    <RenderCategoriesListing />
                </Shelf>
                
            </>
            }
        </div>
    )
}

export default ListSearch;