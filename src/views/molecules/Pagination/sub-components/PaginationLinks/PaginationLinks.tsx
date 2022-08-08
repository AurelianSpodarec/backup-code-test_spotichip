function PaginationLinks(props:any) {
    const { currentPage, totalPages, onNext, onPrev, onLink  } = props
    
    
    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / 7) * 7;
        return Array.from([1,2,3,4,5,6,7]).map((_, index) => (
            start + index + 1
        ));
      };


    function renderPageLinks() {
        let b = getPaginationGroup()
        return getPaginationGroup().map((item, index) => (
            // {console.log(index  <= totalPages)}
            <div className="flex">
            {   
           
              
                index === currentPage ? 
                    index  <= totalPages + 7 ? "" :
                    <button type="button" key={index} aria-current="page" onClick={() => onLink(item)} className={`bg-[#151515] rounded cursor-default w-14 h-14  ${item  === currentPage ? "border-2 border-green-700" : ""}`}>
                        {/* {index + currentPage - 1} */}
                        {item}
                    </button> :
                    <button type="button" key={index} onClick={() => onLink(item)} className={`bg-[#151515] rounded hover:bg-[#2f2f2f] w-14 h-14  ${item === currentPage ? "border-2 border-green-700" : ""}`}>
                        {/* {index + currentPage - 1} */}
                        {item}
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