function PaginationHeader(props:any) {
    const { currentPage, totalPages, fetchStatus } = props
    // console.log("data", currentPage)

    if(fetchStatus === "fetching") {
        return <>loading</>
    } else if (fetchStatus === "success") {
        return (
            <div className="text-white">
                {/* Showing {data && data.limit} of {data && data.total} results */}
                Showing page {currentPage} of {totalPages} total
            </div>
        )
    } else {
        return <></>
    }
   
}

export default PaginationHeader;