import { useDispatch, useSelector } from "react-redux";
import { Card2, Shelf } from "views/molecules";

function ListRecentSearch() {
    const search = useSelector((state:any) => state.search)

    return (
        <Shelf title="Recent searches" linkText="Clear recent searches">

            {search.recentSearches.map((item:any) => {
                    return (
                        <Card2 
                            key={item.id}
                            data={item}
                            canDelete={true}
                            fetchStatus="success"
                        />
                    )
                })
            }

        </Shelf>
    )
}

export default ListRecentSearch;