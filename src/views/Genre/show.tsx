import { useEffect, useState } from "react";
import { useParams, Link, useSearchParams, useLocation } from "react-router-dom";

import { getCategoriesPlaylists } from "services/spotify/api/playlist/playlist";

import { Card, Pagination, Shelf } from "components";
import Card2 from "components/Card2/Card2";


const SHOW_GENRE_STATES = {
    fetching: 'fetching',
    success: 'success',
    failure: 'failure',
}

function RenderGenreListing(props:any) {
    const { data, fetchStatus } = props;
    
    if(fetchStatus === "fetching") {
        return [...Array(9)].map((_, index) => {
            return ( // @ts-ignore
                 <div key={index}>loading</div>
            )
        })
    } else if (fetchStatus === "success") {//@ts-ignore
        return data && data.items.map((item:{}, index:number) => {
            return (// @ts-ignore
            // <Link  key={index} to={`/playlist/${item.id}`}><div className="text-white">{item.name}</div>
            // </Link>
            <Card2 
                key={index}// @ts-ignore
                data={item}
            />
                
            )
        })
    } else if(fetchStatus === "failure") {
        return <h1>No genre found ;-(</h1>
    } 
}


function Pag({currentPage, totalPages}:any) {
    let [searchParams, setSearchParams] = useSearchParams(); 
    function handleNext() {
        // fetchCategoriesPlaylists()
        if(Number(searchParams.get("page")) === totalPages) return
        //  setParams({
        //     "limit": 12,
        //     "offset": params.offset + 12
        // })
         setSearchParams({ 
            page: String(Number(searchParams.get("page")) + 1)
        })
    }

    function handleBack() {
        // fetchCategoriesPlaylists()
        //  setParams({
        //     "limit": 12,
        //     "offset": params.offset - 12
        // })
         setSearchParams({ 
            page: String(Number(searchParams.get("page")) - 1)
        })
    }

    function handlePageNumberClick(index:number) {
        console.log("click page", index)

        // setParams({
        //     "limit": 12,
        //     "offset": index * 12 
        // })

         setSearchParams({ 
            page: String(index + 1)
        })
    }

    function renderPageLinks() {
        // build a url
        return Array.from({ length: totalPages }, (_, index) => (
            <button type="button" onClick={() => handlePageNumberClick(index)}   key={index} className={`bg-[#151515] w-14 h-14  ${index + 1 === Number(searchParams.get("page")) ? "border-2 border-green-700" : ""}`}>
                {index + 1}
            </button>
            )
        );
    }

    return (
        <div className="flex justify-between items-center align-center p-8">
        <div>
            <p className="text-white">Showing page {currentPage} of {totalPages} total</p>    
        </div>
        <div className="flex text-white space-x-2">

            {currentPage !== 1 &&
                <button type="button" onClick={() => handleBack()} className="bg-green-700 px-6">
                    Prev
                </button>
            }

                <div className="flex">
                    {renderPageLinks()}
                    
                </div>
            
            {currentPage !== totalPages &&
                <button type="button" onClick={() => handleNext()} className="bg-green-700 px-6">
                    Next
                </button>
            }
        </div>
    </div>
    )
}
// TODO: Add pagination
function ShowGenre() {
    
    const { id }:any = useParams();

    const pageName = id;
    const location = useLocation();

    const [genre, setGenre] = useState([]);
    const [genreFetchStatus, setGenreFetchStatus] = useState(SHOW_GENRE_STATES.fetching)
 
    let [searchParams, setSearchParams] = useSearchParams();
    let currentPage = Number(searchParams.get("page"));
    // @ts-ignore
    let totalPages = Math.floor(genre.total / 12) 
    // console.log(totalPages)
    let [offset, setoffset] = useState(0)
    
    let params = {
        "limit": 12, //@ts-ignore
        "offset": (Number(searchParams.get("page")) * 12) - 12
    }
    
    async function fetchCategoriesPlaylists() {
        const res = await getCategoriesPlaylists({id, params})
        console.log("categories show", res.playlists)

        if(res.items && res.playlists.items.length === 0) {
            setGenreFetchStatus(SHOW_GENRE_STATES.failure)
        } else {
            setGenreFetchStatus(SHOW_GENRE_STATES.success)
            setGenre(res.playlists) 
        }
    }

    // check page and update the page if page=6, and does not match with offset update it
    
    // function handleNext() {
    //     // fetchCategoriesPlaylists()
    //     if(Number(searchParams.get("page")) === totalPages) return
    //      setParams({
    //         "limit": 12,
    //         "offset": params.offset + 12
    //     })
    //      setSearchParams({ 
    //         page: String(Number(searchParams.get("page")) + 1)
    //     })
    // }

    // function handleBack() {
    //     // fetchCategoriesPlaylists()
    //      setParams({
    //         "limit": 12,
    //         "offset": params.offset - 12
    //     })
    //      setSearchParams({ 
    //         page: String(Number(searchParams.get("page")) - 1)
    //     })
    // }

    // function handlePageNumberClick(index:number) {
    //     console.log("click page", index)

    //     setParams({
    //         "limit": 12,
    //         "offset": index * 12 
    //     })

    //      setSearchParams({ 
    //         page: String(index + 1)
    //     })
    // }

    useEffect(() => {
        fetchCategoriesPlaylists()
    }, [location])

    useEffect(() => {
        fetchCategoriesPlaylists()
    }, [])

   
    // function renderPageLinks() {
    //     // build a url
    //     return Array.from({ length: totalPages }, (_, index) => (
    //         <button type="button" onClick={() => handlePageNumberClick(index)}   key={index} className={`bg-[#151515] w-14 h-14  ${index + 1 === Number(searchParams.get("page")) ? "border-2 border-green-700" : ""}`}>
    //             {index + 1}
    //         </button>
    //         )
    //     );
    // }

    return (
        <div>
            <div className="px-8 py-10">
                <h1 className="text-7xl font-bold uppercase text-white">{pageName}</h1>
            </div>

          

            <div className="bg-[#0b0b0b]">
 

                <Pag currentPage={currentPage} totalPages={totalPages} />

                {/* <div className="flex justify-between items-center align-center p-8">
                    <div>
                        <p className="text-white">Showing page {currentPage} of {totalPages} total</p>    
                    </div>
                    <div className="flex text-white space-x-2">

                        {currentPage !== 1 &&
                            <button type="button" onClick={() => handleBack()} className="bg-green-700 px-6">
                                Prev
                            </button>
                        }

                            <div className="flex">
                                {renderPageLinks()}
                                
                            </div>
                        
                        {currentPage !== totalPages &&
                            <button type="button" onClick={() => handleNext()} className="bg-green-700 px-6">
                                Next
                            </button>
                        }
                    </div>
                </div> */}
               



                {/* <Shelf title="Popular" className="bg-[#0b0b0b]"> */}
                   
                    <Pagination data={genre} fetchStatus={genreFetchStatus}/>
                     

                    <div className="grid gap-6 p-8 grid-cols-6">
                        <RenderGenreListing 
                            data={genre}
                            fetchStatus={genreFetchStatus} 
                        />
                    </div>

                    {/* <Pagination data={genre} fetchStatus={genreFetchStatus}/> */}
                {/* </Shelf> */}

              
            </div>
            
           
        </div>
    )
}

export default ShowGenre