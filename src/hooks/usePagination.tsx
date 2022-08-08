import { useEffect } from "react";
import { useParams, Link, useSearchParams, useLocation } from "react-router-dom";

// TODO: Show three dots and implement pageNumberSize
function usePagination(data:any) {
    let [searchParams, setSearchParams] = useSearchParams();
    let currentPage = Number(searchParams.get("page")) ? Number(searchParams.get("page")) : 1;
    let totalPages = Math.ceil(data.total / data.limit);

    const location = useLocation();
    let pathName = location.pathname;

    // TODO: If page number in URL is higher than the page exist, set it to 1
    // function checkPage() { 
    //     if(totalPages < currentPage) {
    //         setSearchParams({
    //             page: String(1)
    //         })
    //     }
    // }

    function onPrev() {
        if(currentPage === 1) return
        setSearchParams({ 
            page: String(currentPage - 1)
        })
    }

    function onNext() {
        if(currentPage === totalPages) return
         setSearchParams({ 
            page: String(currentPage + 1)
        })
    }

    function onLink(e:any, index:number) {
        e && e.preventDefault();
        setSearchParams({ 
            page: String(index)
        })
    }

    return { 
        searchParams, 
        setSearchParams, 
        currentPage, 
        totalPages, 
        onNext,
        onPrev, 
        onLink,
        location,
        pathName
    }
}

export default usePagination;