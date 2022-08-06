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


function ShowGenre() {
    
    const { id }:any = useParams();
    const pageName = id;

    const location = useLocation();

    const [genre, setGenre] = useState([]);
    const [genreFetchStatus, setGenreFetchStatus] = useState(SHOW_GENRE_STATES.fetching)
 
    let [searchParams, setSearchParams] = useSearchParams();
    let currentPage = Number(searchParams.get("page"));
  
    
    async function fetchCategoriesPlaylists() {

        let params = {
            "limit": 12,
            "offset": currentPage === 0 ? 0 : (currentPage * 12) - 12 
        }

        const res = await getCategoriesPlaylists({id, params})

        if(res.items && res.playlists.items.length === 0) {
            setGenreFetchStatus(SHOW_GENRE_STATES.failure)
        } else {
            setGenreFetchStatus(SHOW_GENRE_STATES.success)
            setGenre(res.playlists) 
        }
    }
  
    useEffect(() => {
        fetchCategoriesPlaylists()
    }, [location])

    useEffect(() => {
        fetchCategoriesPlaylists()
    }, [])

    return (
        <div>
            <div className="px-8 py-10">
                <h1 className="text-7xl font-bold uppercase text-white">{pageName}</h1>
            </div>
          

            <div className="bg-[#0b0b0b]">


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