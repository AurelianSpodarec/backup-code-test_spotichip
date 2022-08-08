import react, { useEffect, useState, useRef } from 'react';
import * as ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux'; 
import { setClickedPlay, setClickedPlayClose } from 'store/slices/global/globalSlice';


function PlayModal(props:any) {

    const { item, isOpen, canDelete, handleClose, handleRemove} = props;
    console.log(item.item)
    return (
        <div onClick={() => handleClose()} className="flex justify-center items-center align-center fixed z-50 top-0 right-0 bottom-0 left-0" style={{ "backgroundColor": "rgba(0,0,0,.9)" }}>

            <div onClick={(e) => e.preventDefault()} className="flex align-center rounded-lg justify-between max-w-[814px] max-h-[540px]" style={{ "backgroundColor": "rgb(33 155 62)" }}>

            <div className="flex p-16">
                <div>

                {canDelete && 
                    <button className="absolute top-2 right-2 cursor-default rounded-full bg-black/30 p-1.5 z-10 hover:scale-110" onClick={(e) => handleRemove(e)} aria-label="Remove">
                        <svg className="text-white fill-white" role="img" height="16" width="16" viewBox="0 0 16 16">
                            <path d="M1.47 1.47a.75.75 0 011.06 0L8 6.94l5.47-5.47a.75.75 0 111.06 1.06L9.06 8l5.47 5.47a.75.75 0 11-1.06 1.06L8 9.06l-5.47 5.47a.75.75 0 01-1.06-1.06L6.94 8 1.47 2.53a.75.75 0 010-1.06z"></path>
                        </svg>
                    </button>
                }

                
 
                    {item && item.item.images[0] ?
                        <img className="object-cover w-[470px] rounded-lg h-full" src={item.item && item.item.images && item.item.images[0].url} alt={`Picture of ${item.item && item.name}`}/>
                        :
                        <div className="rounded-full h-[151px] w-full bg-black"></div>
                    }

                  
                </div>
                <div className="ml-20">
                    <div className="text-center w-full">
                        <h2 className="text-3xl font-bold text-white">Start listening with a free Shopify account</h2>
                        <button>Sign Up Free</button>
                        <button>Download App</button>
                    </div>

                    <div>
                        <span>Already have an account?</span>
                        <span>Log In</span>
                    </div>
                </div>
            </div>

            </div>

        </div>
    )
}

function PortalPlay() {
    const doc = document.getElementById('root');
    const dispatch = useDispatch();
    const global = useSelector((state:any ) => state.global);

    function handleClose() {
        dispatch(setClickedPlayClose())
    }
    

    // console.log(global)
    if(!doc) return <></>
    if(!global.clickedPlay.isOpen) return <></>

    console.log("portal", global)
    return ReactDOM.createPortal( 
        <PlayModal 
            item={global.clickedPlay} 
            handleClose={handleClose}
        /> 
    , doc)
}

export default PortalPlay;