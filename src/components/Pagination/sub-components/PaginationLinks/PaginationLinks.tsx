function PaginationLinks(props:any) {
    const { currentPage, totalPages, setSearchParams } = props
    // TODO: Extract logic into custom hook, it can be reused with other pagination layouts
    // TODO: Show three dots and implement pageNumberSize

    function handlePrevPage() {
        if(currentPage === 1) return
        setSearchParams({ 
            page: String(currentPage - 1)
        })
    }

    function handleNextPage() {
        if(currentPage === totalPages) return
         setSearchParams({ 
            page: String(currentPage + 1)
        })
    }

    function handlePageNumberClick(index:number) {
         setSearchParams({ 
            page: String(index)
        })
    }

    function renderPageLinks() {
        return Array.from({ length: totalPages }, (_, index) => (
            <>
            {
                index + 1 === currentPage ? 
                <button type="button" aria-current="page" onClick={() => handlePageNumberClick(index + 1)} key={index} className={`bg-[#151515] w-14 h-14  ${index + 1 === currentPage ? "border-2 border-green-700" : ""}`}>
                    {index + 1}
                </button> :
                <button type="button" onClick={() => handlePageNumberClick(index + 1)} key={index} className={`bg-[#151515] w-14 h-14  ${index + 1 === currentPage ? "border-2 border-green-700" : ""}`}>
                    {index + 1}
                </button> 
            }
            </>
            )
        );
    }

    return (
        <nav className="flex text-white space-x-2" aria-label="Pagination">

            {currentPage !== 1 &&
                <button type="button" aria-label="Pagination: Previous page" onClick={() => handlePrevPage()} className="bg-green-700 px-6">
                    Prev
                </button>
            }

                <div className="flex">
                    {renderPageLinks()}
                    {/* <span>...</span> */}
                    {/* <Link to="search">{totalPages}</Link> */}
                </div>
            
            {currentPage !== totalPages &&
                <button type="button" aria-label="Pagination: Next Page" onClick={() => handleNextPage()} className="bg-green-700 px-6">
                    Next
                </button>
            }
            
        </nav>
    )
}

export default PaginationLinks;