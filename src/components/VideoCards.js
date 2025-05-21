import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
    console.log("video information", info)
    const isToggleMenu = useSelector(store => store.app.isToggleMenu)

    if (!info) return null
    const { snippet, statistics } = info
    const { thumbnails, title } = snippet || {}
    if (!thumbnails?.standard?.url) return null
    return (
        <div className={`my-1 rounded-lg ${isToggleMenu ? 'w-60 ' : 'w-72'}`}>
            <div>
                <img className="object-cover  rounded-lg " src={thumbnails?.standard?.url} alt="thumbnail" />
            </div>
            <div className="">
                <p className="text-base font-semibold">{title}</p>
                <p className="text-xs font-normal">{snippet?.channelTitle}</p>
                <p className="text-xs font-semibold">{statistics?.likeCount} Views</p>
            </div>
        </div>
    )
}

export default VideoCard;