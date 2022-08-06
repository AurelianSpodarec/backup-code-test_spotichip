function PaginationLinks(props:any) {
    const { currentPage, totalPages, setSearchParams } = props
    
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
            <button type="button" onClick={() => handlePageNumberClick(index + 1)}   key={index} className={`bg-[#151515] w-14 h-14  ${index + 1 === currentPage ? "border-2 border-green-700" : ""}`}>
                {index + 1}
            </button>
            )
        );
    }

    return (
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
    )
}

export default PaginationLinks;