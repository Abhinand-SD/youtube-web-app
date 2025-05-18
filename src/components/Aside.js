
const Aside = () => {
    return (
        <div className="fixed w-52 h-screen font-roboto text-xs">
            <ul className=" px-7 pb-5 space-y-3 ">
                <li>Home</li>
                <li>Shorts</li>
                <li>Subscription</li>
            </ul>

            <div className="border mx-auto w-44" ></div>

            <p className="px-7 pt-5 text-sm font-medium">You</p>

            <ul className=" px-7 py-3 space-y-3">
                <li>History</li>
                <li>Playlist</li>
                <li>Your courses</li>
                <li>Watch later</li>
                <li>Liked videos</li>
            </ul>

            <div className="border mx-auto w-44" ></div>

            <p className="px-7 pt-5 text-sm font-medium">Subscription</p>

            <ul className="px-7 py-3 space-y-3">
                <li>Brototype Malayalam</li>
                <li>Code Makes Cleaver</li>
            </ul>


        </div>
    )
}

export default Aside;