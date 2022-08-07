function PaginationLinks(props:any) {
    const { currentPage, totalPages, onNext, onPrev, onLink  } = props
    

    function renderPageLinks() {
        return Array.from({ length: totalPages }, (_, index) => (
            <div className="flex">
            {
                index + 1 === currentPage ? 
                <button type="button" key={index} aria-current="page" onClick={() => onLink(index + 1)} className={`bg-[#151515] rounded cursor-default w-14 h-14  ${index + 1 === currentPage ? "border-2 border-green-700" : ""}`}>
                    {index + 1}
                </button> :
                <button type="button" key={index} onClick={() => onLink(index + 1)} className={`bg-[#151515] rounded hover:bg-[#2f2f2f] w-14 h-14  ${index + 1 === currentPage ? "border-2 border-green-700" : ""}`}>
                    {index + 1}
                </button> 
            }
            </div>
            )
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