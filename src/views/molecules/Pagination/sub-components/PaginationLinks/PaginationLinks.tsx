import { Link } from "react-router-dom";

function PagLink({currentPage,onLink, pathName, href, children}:any) {

    return (
        <li>
        <Link onClick={(e) => onLink} to={`${pathName}?page=${href}`} className={`bg-[#151515] flex align-center justify-center items-center rounded cursor-default w-14 h-14  ${currentPage === children ? "border-2 border-green-700" : ""}`}>
            {children}
        </Link> 
        </li>
    )
}

function PaginationLinks(props:any) {
    const { currentPage, totalPages, onNext, onPrev, onLink, pathName  } = props
    
 
    function renderPageLinks() {
        return (
            <ul className="flex">

            {/* For loop 3 items */}
            {/* 
                // TODO: Refactor
                Page Number Size: 3 (displays 3 links)
                // Before 


                // Siblings -2 0 +2 on each side
            */}

  
                {/* Right + 2 */}
                {currentPage === totalPages && totalPages > 2 && (
                    <PagLink onLink={currentPage - 2} currentPage={currentPage} pathName={pathName} href={currentPage - 2}>
                        {currentPage - 2}
                    </PagLink>
                )}

                {/* Right */}
                {currentPage > 1 && (
                    <PagLink onLink={currentPage - 1} currentPage={currentPage} pathName={pathName} href={currentPage - 1}>
                        {currentPage - 1}
                    </PagLink>
                )}

                
                {/* Middle */}
                {currentPage > 0 && (
                    <PagLink onLink={currentPage} currentPage={currentPage} pathName={pathName} href={currentPage}>
                        {currentPage}
                    </PagLink>
                )}

                {/* Left */}
                {currentPage > 0 && currentPage < totalPages && (
                    <PagLink onLink={currentPage + 1} currentPage={currentPage} pathName={pathName} href={currentPage + 1}>
                        {currentPage + 1}
                    </PagLink>
                )}

                {/* Left + 2*/}
                {currentPage === 1 && totalPages > 2 && (
                    <PagLink onLink={currentPage + 2} currentPage={currentPage} pathName={pathName} href={currentPage + 2}>
                        {currentPage + 2}
                    </PagLink>
                )}
          
            </ul>
        );
    }
 

    return (
        <nav className="flex text-white space-x-2" aria-label="Pagination">

            {currentPage !== 1 &&
                <button type="button" aria-label="Pagination: Previous page" onClick={() => onPrev()} className={`rounded px-6 ${currentPage === 1 ? "cursor-not-allowed bg-green-900" : "bg-green-700"} `}>
                    Prev
                </button>
            }
 
            {renderPageLinks()}
              
            <button type="button" aria-label="Pagination: Next Page" onClick={() => onNext()} className={`rounded px-6 ${currentPage === totalPages ? "cursor-not-allowed bg-green-900" : "bg-green-700"} `}>
                Next
            </button>
            
        </nav>
    )
}

export default PaginationLinks;