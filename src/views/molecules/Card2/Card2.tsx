import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setClickedPlay, setClickedPlayOpen } from "store/slices/global/globalSlice";
import { capitalizeFirstLetter } from "utils/common";

interface Card2Props {
    canDelete?: boolean;
    data?: {
        id: number;
        name: string;
        type: string;
        images: [
            {
                url: string;
            }
        ];
    };
    fetchStatus?: string;
}

function Card2(props:Card2Props) {
    const { data, fetchStatus, canDelete } = props;

    const dispatch = useDispatch()

    function handlePlayClick(e:any) {
        e.preventDefault()
        dispatch(setClickedPlayOpen())
        dispatch(setClickedPlay(data))
    }
    
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
            <div className="group transition-all duration-200 ease-in  relative rounded-lg overflow-hidden bg-[#181818] hover:bg-[#282828]">
            <Link to={`/${data && data.type}/${data && data.id}`} state={data && data} className="block p-4">

                {canDelete && 
                    <button className="absolute top-2 right-2 cursor-default rounded-full bg-black/30 p-1.5 z-10 hover:scale-110" aria-label="Remove">
                        <svg className="text-white fill-white" role="img" height="16" width="16" viewBox="0 0 16 16">
                            <path d="M1.47 1.47a.75.75 0 011.06 0L8 6.94l5.47-5.47a.75.75 0 111.06 1.06L9.06 8l5.47 5.47a.75.75 0 11-1.06 1.06L8 9.06l-5.47 5.47a.75.75 0 01-1.06-1.06L6.94 8 1.47 2.53a.75.75 0 010-1.06z"></path>
                        </svg>
                    </button>
                }

                <div className="relative h-[151px]">

                    {data && data.images[0] ?
                        <img className={`object-cover ${data.type === "playlist" ? "rounded-sm" : "rounded-full"} h-[151px] w-full`} src={data && data.images && data.images[0].url} alt={`Picture of ${data && data.name}`}/>
                        :
                        <div className="rounded-full h-[151px] w-full bg-black"></div>
                    }

                    <div className="transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 absolute bottom-2 right-2 translate-y-[8px] group-hover:translate-y-0">    
                        <button onClick={(e) => handlePlayClick(e)} className="transition-all duration-300 ease-in rounded-full bg-[#1cc759] hover:bg-[#1ed560] cursor-default h-12 w-12">
                            <div className="flex items-center align-center justify-center">
                            <svg className="w-[24px] h-[24px]" role="img" height="24" width="24" viewBox="0 0 24 24">
                                <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
                            </svg>
                            </div>
                        </button>
                    </div>
                </div>

                <div className="py-2">
                    <h3 className="text-white font-semibold">{data && data.name}</h3>
                    {data && data.type && 
                        <span className="text-gray-300">{capitalizeFirstLetter(data && data.type)}</span>
                    }
                </div>
            
            </Link>
            </div>
        )    
    }
    
}

export default Card2;