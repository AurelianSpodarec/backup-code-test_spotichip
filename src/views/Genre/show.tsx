import { useEffect, useState } from "react";
import { useParams, Link, useSearchParams, useLocation } from "react-router-dom";

import { getCategoriesPlaylists } from "services/spotify/api/playlist/playlist";

import { Card, PageFooter, PageHeading, Pagination, Shelf } from "components";
import Card2 from "components/Card2/Card2";
import { IResCategories } from "types";


const SHOW_GENRE_STATES = {
    fetching: 'fetching',
    success: 'success',
    failure: 'failure',
}

interface IGenre {
    id: number;
    name: string;
    type: string;
    images: [{
        url: string;
    }];
}

// TODO: Extract into its own component
function RenderGenreListing(props:any) {
    const { data, fetchStatus } = props;
    
    if(fetchStatus === "fetching") {
        return [...Array(12)].map((_, index) => {
            return (
                 <div key={index}>loading</div>
            )
        })
    } else if (fetchStatus === "success") {
        return data && data.items.map((item:IGenre, index:number) => {
            return (
                <Card2 
                    key={index}
                    data={item}
                /> 
            )
        })
    } else if(fetchStatus === "failure") {
        return (
            <div className="text-white">
                <h1>It looks like we couldn't find any playlist</h1>
                <Link to={"/"}>Go back to genre</Link>
            </div>
        )
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
        console.log(res)
        if(res.items || res.playlists.items.length === 0) {
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

            <PageHeading title={pageName} />

            <div className="bg-[#0b0b0b]">

                <Pagination data={genre} fetchStatus={genreFetchStatus}/>
                    
                <Shelf>
                    <RenderGenreListing 
                        data={genre}
                        fetchStatus={genreFetchStatus} 
                    />
                </Shelf>

                <Pagination data={genre} fetchStatus={genreFetchStatus}/>
             
            </div>

            <PageFooter className="bg-[#0b0b0b]" />
            
           
        </div>
    )
}

export default ShowGenre