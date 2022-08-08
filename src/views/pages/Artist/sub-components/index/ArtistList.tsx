
import { Card2 } from "views/molecules";

function ArtistList(props:any) {
    const { data, fetchStatus } = props

    // console.log("Arists list", data.artists.items)
    if(fetchStatus === "fetching") {
    return [...Array(9)].map((_, index) => {
        return (
            <Card2 
                key={index} 
                fetchStatus={fetchStatus} 
            />
            )
        })
    } else if (fetchStatus === "success") {

        return data.artists && data.artists.items.map((data:{}, index:number) => {
            return (
                <Card2
                    key={index} //@ts-ignore
                    data={data} 
                    fetchStatus={fetchStatus} 
                />
            )
        })
    } else if(fetchStatus === "failure") {
        return (
            <h1 className="text-red-500">No categories found ;-(</h1>
        )
    } 
        

}

export default ArtistList;