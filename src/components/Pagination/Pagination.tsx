import { useSearchParams } from "react-router-dom";
import { PaginationHeader, PaginationLinks } from "./sub-components";

function Pagination(props:any) {
    const { data, fetchStatus } = props

    let [searchParams, setSearchParams] = useSearchParams();
    let currentPage = Number(searchParams.get("page"))
    let totalPages = Math.floor(data.total / data.limit) 

  
    return (
        <div className="flex items-center justify-between p-8 w-full">
            
            <PaginationHeader 
                currentPage={currentPage}
                totalPages={totalPages}
                fetchStatus={fetchStatus}
            />
            <PaginationLinks 
                currentPage={currentPage}
                totalPages={totalPages}
                fetchStatus={fetchStatus}
                setSearchParams={setSearchParams}
            />

        </div>
    )
}

export default Pagination;