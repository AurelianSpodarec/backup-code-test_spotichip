import { useSearchParams } from "react-router-dom";
import { PaginationHeader, PaginationLinks } from "./sub-components";
import { usePagination } from "hooks";

function Pagination(props:any) {
    const { data, fetchStatus } = props

    const pagination = usePagination(data)

    return (
        <div className="flex items-center justify-between p-8 w-full">
            
            <PaginationHeader 
                currentPage={pagination.currentPage}
                totalPages={pagination.totalPages}
                fetchStatus={fetchStatus}
            />
            <PaginationLinks
                onNext={pagination.onNext}
                onPrev={pagination.onPrev}
                onLink={pagination.onLink}
                currentPage={pagination.currentPage}
                totalPages={pagination.totalPages}
                fetchStatus={fetchStatus}
                setSearchParams={pagination.setSearchParams}
            />

        </div>
    )
}

export default Pagination;