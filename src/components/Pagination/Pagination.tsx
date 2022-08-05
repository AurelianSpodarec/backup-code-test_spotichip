import { useState } from "react";
import { useParams, Link, useSearchParams  } from "react-router-dom";
import { PaginationHeader } from "./sub-components";


function Pagination(props:any) {
    const { data, fetchStatus, link } = props

    let [searchParams, setSearchParams] = useSearchParams();
    let [currentPage, setCurrentPage] = useState(1);

    let searchPage = Number(searchParams.get("page"))
    let searchLimit = 12
    let offset = searchPage * searchLimit
    let showNumberOfPageLinks = 3; 
    let totalPages = Math.ceil(data.total / data.limit) 
     
     
    function handleLastPage() {
        setCurrentPage(totalPages)
    }

    function handlePrevPage() {
        if(currentPage === 1) return
        setCurrentPage(currentPage - 1)
    }

    function handleNextPage() {
        if(currentPage === totalPages) return
        setCurrentPage(currentPage + 1)
    }

    function renderPageLinks() {
        // build a url
        return Array.from({ length: totalPages }, (_, index) => (
            <Link to={`?page=${index + 1}`} key={index} className={`bg-[#151515] w-14 h-14  ${index + 1 === currentPage ? "border-2 border-green-700" : ""}`}>
                {index + 1}
            </Link>
            )
        );
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
                        {renderPageLinks()}
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