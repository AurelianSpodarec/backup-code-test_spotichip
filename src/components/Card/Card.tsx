import { Link } from "react-router-dom";

function Card(props:any) {
    const { item, fetchStatus } = props;

    if(fetchStatus === "fetching") {
        return (
            <div className="w-full h-24 border-2 rounded-md mx-auto mt-20">
            <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">

                <div className="w-12 bg-gray-300 h-12 rounded-full "></div>

                <div className="flex flex-col space-y-3">
                    <div className="w-36 bg-gray-300 h-6 rounded-md "></div>
                    <div className="w-24 bg-gray-300 h-6 rounded-md "></div>
                </div>

            </div>
            </div>
        )
    } else {
        return (
            <div className="relative rounded-lg overflow-hidden">
            <Link to={`/genre/${item.id}`} className="block h-[180px]">

                <h3 className="p-4 text-white text-2xl font-bold">{item.name}</h3>
                <img className="absolute bottom-0 right-0 h-24 w-24" style={{ transform: "rotate(25deg) translate(18%,-2%)" }} src={item.icons ? item.icons[0].url : item.images[0].url} alt={item.name} />
             
            </Link>
            </div>
        )    
    }
    
}

export default Card;