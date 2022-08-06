import { useState } from "react";
import { useParams, Link, useSearchParams, useNavigate,createSearchParams  } from "react-router-dom";
import { PaginationHeader } from "./sub-components";


function Pagination(props:any) {
    const { data, fetchStatus, link } = props

    let [searchParams, setSearchParams] = useSearchParams();
    let currentPage = Number(searchParams.get("page"))

    
    const navigate = useNavigate();
    let searchLimit = 12

    let totalPages = Math.floor(data.total / data.limit) 
    // let offset = currentPage * searchLimit
    let offset = data.offset

    function handleLastPage() {
        // setCurrentPage(totalPages)
    }

    function handlePrevPage() {
        // if(currentPage === 1) return
        // setSearchParams({ 
        //     page: String(currentPage - 1)
        // })
    }

    function handleNextPage() {
        // if(currentPage === totalPages) return
        // setSearchParams({ 
        //     page: String(currentPage + 1)
        // })

        // setParams({
        //     "limit": 12,
        //     "offset": params.offset + 12
        // })
         setSearchParams({ 
            page: String(Number(searchParams.get("page")) + 1)
        })
    }

    

    function handlePageNumberClick(index:number) {
        // console.log("click page",)
        // offset = 5 * 12 = 60
        // setParams({
        //     "limit": 12,
        //     "offset": index * 12
        // })

         setSearchParams({ 
            page: String(index)
        })
    }


    function renderPageLinks() {
        // build a url
        return Array.from({ length: totalPages }, (_, index) => (
            <button type="button" onClick={() => handlePageNumberClick(index + 1)}   key={index} className={`bg-[#151515] w-14 h-14  ${index + 1 === currentPage ? "border-2 border-green-700" : ""}`}>
                {index + 1}
            </button>
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
                    <button type="button" onClick={() => handlePrevPage()} className="bg-green-700 px-6">
                        Prev
                    </button>
                }

                    <div className="flex">
                        {renderPageLinks()}
                        {/* <span>...</span> */}
                        {/* <Link to="search">{totalPages}</Link> */}
                    </div>
                
                {currentPage !== totalPages &&
                    <button type="button" onClick={() => handleNextPage()} className="bg-green-700 px-6">
                        Next
                    </button>
                }
            </div>
        </div>
    )
}

export default Pagination;