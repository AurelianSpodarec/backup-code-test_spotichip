function PaginationHeader(props:any) {
    const { currentPage, totalPages, fetchStatus } = props
    // console.log("data", currentPage)

    if(fetchStatus === "fetching") {
        return <>loading</>
    } else if (fetchStatus === "success") {
        return (
            <div className="">
                {/* Showing {data && data.limit} of {data && data.total} results */}
                <span className="text-white text-xl">Showing page {currentPage} of {totalPages} total</span>
            </div>
        )
    } else {
        return <></>
    }
   
}

export default PaginationHeader;