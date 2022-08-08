import { IPlaylist } from "types";
import { Card2 } from "views/molecules";

function ListPlaylist({data, fetchStatus}:any) {
 
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
        return data && data.playlists && data.playlists.items.map((category:IPlaylist, index:number) => {
            return (
            <Card2
                key={index} // @ts-ignore
                data={category} 
                fetchStatus={fetchStatus}
            />
            )
        })
    } else if(fetchStatus === "failure") {
        return <h1>No playlist found ;-(</h1>
    } 
}

export default ListPlaylist;