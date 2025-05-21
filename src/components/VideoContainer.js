import { useEffect, useState } from "react";
import VideoCard from "./VideoCards";
import { YOUTUBE_VIDEO_API } from "../utils/contants";

const VideoContainer = () =>{
    
    const [videos, setVideos] = useState([])

    const getVideo = async () => {
        const data = await fetch(YOUTUBE_VIDEO_API);
        const json = await data.json();

        console.log(json)
        setVideos(json.items)
    }

    useEffect(() => { 
        getVideo()
    },[])

    return (
        <div className="flex flex-wrap justify-evenly gap-y-8 gap-x-1">
            {videos.map(item => <VideoCard key={item.id} info ={item}/>)}
        </div>
    )
}

export default VideoContainer;