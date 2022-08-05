import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PaginationHeader } from "./sub-components";



// TODO: Use url params to get the url
function Pagination(props:any) {
    const { data, fetchStatus, link } = props

    if(!data) <></>

    // get URL param

    let [currentPage, setCurrentPage] = useState(1);
    
    let showNumberOfPages = 3;
    let totalPages = Math.ceil(data.total / data.limit)
    
    console.log(currentPage)
    function lastPage() {

    }

    function handlePrevPage() {
        if(currentPage === 1) return
        setCurrentPage(currentPage - 1)
    }

    function handleNextPage() {
        if(currentPage === totalPages) return
        setCurrentPage(currentPage + 1)
    }

    function pageLinks() {
        // build a url
        let a = Array.from({ length: totalPages }, (_, index) => <Link to={`?page=${index + 1}`} key={index} className="bg-[#151515] p-4">{index + 1}</Link>);
        console.log("aaa", a)
        return a;
    }
  
    return (
        <div className="flex justify-between p-8 w-full">
            
            <PaginationHeader 
                currentPage={currentPage}
                totalPages={totalPages}
                fetchStatus={fetchStatus}
            />
          

            <div className="flex text-white space-x-2">

                {currentPage !== 1 &&
                    <button onClick={() => handlePrevPage()} className="bg-green-700 pt-4 px-6">
                        Prev
                    </button>
                }

                    <div className="flex">
                        {pageLinks()}
                        {/* <span>...</span> */}
                        {/* <Link to="search">{totalPages}</Link> */}
                    </div>
                
                {currentPage !== totalPages &&
                    <button onClick={() => handleNextPage()} className="bg-green-700 pt-4 px-6">
                        Next
                    </button>
                }
            </div>
        </div>
    )
}

export default Pagination;