function PaginationHeader(props:any) {
    const { currentPage, totalPages, fetchStatus } = props

    if(fetchStatus === "fetching") {
        return <>loading</>
    } else if (fetchStatus === "success") {
        return (
            <div className="">
                <span className="text-white text-xl">Showing page {currentPage} of {totalPages} total</span>
            </div>
        )
    } else {
        return <></>
    }
   
}

export default PaginationHeader;