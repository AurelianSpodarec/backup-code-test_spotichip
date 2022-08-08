import { IPlaylist } from "types";
import { Card2 } from "views/molecules";

function RenderPlaylist({data, fetchStatus}:any) {
    
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
        return data && data && data.items.map((playlist:IPlaylist, index:number) => {
            return (
                <Card2
                    key={index} // @ts-ignore
                    data={playlist} 
                    fetchStatus={fetchStatus}
                />
            )
        })
    } else if(fetchStatus === "failure") {
        return <h1>No playlist found ;-(</h1>
    } 
}

export default RenderPlaylist;