
const Header = () => {
    return (
        <div className="grid grid-flow-col w-full h-16 justify-between ">

            <div className="flex items-center cursor-pointer" >
                <div className="py-3 pl-5"><svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 0 24 24" width="35" focusable="false" aria-hidden="true" className="p-1 rounded-full hover:bg-slate-100" ><path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path></svg></div>
                <div className="px-1" ><img src="https://t3.ftcdn.net/jpg/03/00/38/90/240_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg" alt="logo" className="w-24" /></div>
            </div>

            <div className="flex items-center justify-center col-span-10" >
                <input type="text" placeholder="search" className="w-1/2 font-normal border rounded-l-full px-5 py-1 "/>
                <button className="border rounded-r-full px-3 bg-slate-200"><svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M779.38-153.85 528.92-404.31q-30 25.54-69 39.54t-78.38 14q-96.1 0-162.67-66.53-66.56-66.53-66.56-162.57 0-96.05 66.53-162.71 66.53-66.65 162.57-66.65 96.05 0 162.71 66.56Q610.77-676.1 610.77-580q0 41.69-14.77 80.69t-38.77 66.69l250.46 250.47-28.31 28.3ZM381.54-390.77q79.61 0 134.42-54.81 54.81-54.8 54.81-134.42 0-79.62-54.81-134.42-54.81-54.81-134.42-54.81-79.62 0-134.42 54.81-54.81 54.8-54.81 134.42 0 79.62 54.81 134.42 54.8 54.81 134.42 54.81Z"/></svg>
</button>
            </div>

            <div className="flex px-5 py-2 items-center">
                <img src="https://cdn0.iconfinder.com/data/icons/mobile-basic-vol-1/32/Profile-512.png" alt="user" className="w-8" />
            </div>
        </div>
    )
}

export default Header;