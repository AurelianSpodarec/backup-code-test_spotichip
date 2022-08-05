import { useParams, Link } from "react-router-dom";

function PaginationHeader(props:any) {
    const { data, fetchStatus } = props
    console.log("data", data)

    if(fetchStatus === "fetching") {
        return <>loading</>
    } else if (fetchStatus === "success") {
        return (
            <div className="text-white">
                {/* Showing {data && data.limit} of {data && data.total} results */}
                Showing page 2 of 6 total
            </div>
        )
    } else {
        return <></>
    }
   
}

function Pagination(props:any) {
    const { data, fetchStatus } = props

    if(!data) <></>

    let currentPage = 1;
    let totalPages = Math.ceil(data.total / data.limit)
    
    let showNumberOfPages = 3;
    

    function lastPage() {

    }

    function prevPage() {

    }

    function nextPage() {

    }

    function pageLinks() {
        let a = Array.from({ length: totalPages }, (_, index) => <div key={index}>{index + 1}</div>);
        console.log("aaa", a)
        return a;
    }
  
    return (
        <div className="flex justify-between p-8 w-full">
           
            <PaginationHeader 
                data={data} 
                fetchStatus={fetchStatus}
            />
          

            <div className="flex text-white space-x-2">

                <button>
                    Prev
                </button>

                    <div className="flex">
                        {pageLinks()}
                        <span>...</span>
                        <span>{totalPages - 1}</span>
                        <Link to="search">{totalPages}</Link>
                    </div>

                <button>
                    Next
                </button>
            </div>
        </div>
    )
}

export default Pagination;