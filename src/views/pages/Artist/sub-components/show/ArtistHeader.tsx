import { numberWithCommas } from "utils/common";

function ArtistHeader(props:any) {
    const { artistFetchStatus, artist } = props;

    if(artistFetchStatus === "fetching") {
        return <div>fetcing</div>
    } else {
        return (
            <header className="relative h-[340px]">

                <div className="absolute h-full w-full bg-cover" style={{ 'backgroundImage': `url(${artist && artist.images[0].url})` }}></div>
                <div className="relative z-10 p-8 h-full flex items-end">   

                    <div>
                        
                        <div className="flex items-center space-x-2">    
                            <svg className="w-6 h-6 text-white fill-[#3d91f4]" role="img" height="24" width="24" viewBox="0 0 24 24">
                                <path d="M10.814.5a1.658 1.658 0 012.372 0l2.512 2.572 3.595-.043a1.658 1.658 0 011.678 1.678l-.043 3.595 2.572 2.512c.667.65.667 1.722 0 2.372l-2.572 2.512.043 3.595a1.658 1.658 0 01-1.678 1.678l-3.595-.043-2.512 2.572a1.658 1.658 0 01-2.372 0l-2.512-2.572-3.595.043a1.658 1.658 0 01-1.678-1.678l.043-3.595L.5 13.186a1.658 1.658 0 010-2.372l2.572-2.512-.043-3.595a1.658 1.658 0 011.678-1.678l3.595.043L10.814.5zm6.584 9.12a1 1 0 00-1.414-1.413l-6.011 6.01-1.894-1.893a1 1 0 00-1.414 1.414l3.308 3.308 7.425-7.425z"></path>
                            </svg>
                            <span className="font-semibold text-gray-200 text-sm">Verified Artist</span>
                        </div>
                    
                        <h1 className="text-8xl font-bold text-white mb-8">{artist && artist.name}</h1>
                        <span className="font-semibold">{ numberWithCommas(artist && artist.followers.total)} followers</span>
                     
                    </div>

                </div>
            </header>
        )
    }
}

export default ArtistHeader;