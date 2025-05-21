import Aside from "./Aside";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
    return (
        <div className="w-full h-screen">
            <ButtonList />
            <VideoContainer />
        </div>
    )
}

export default MainContainer;