import FilterButton from "./FilterButton";

const ButtonList = () => {

    const buttonList = ['All', 'live', 'Gaming','News'];

    return (
        <div className="flex gap-x-2 justify-center  h-10 px-10 overflow-x-auto whitespace-nowrap">
            {
                buttonList.map(item => <FilterButton key={item} name={item} />)
            }
        </div>
    )
}

export default ButtonList;