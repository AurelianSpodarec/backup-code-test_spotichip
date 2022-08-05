import { useEffect } from "react";
import { getBrowseCategories } from "services/spotify/api/categories/categories";

function Browse() {

    async function fetchTest() {
        const res = await getBrowseCategories();

        console.log(res)
    }

    useEffect(() => {
        fetchTest()
    }, [])

    return (
        <></>
    )
}

export default Browse