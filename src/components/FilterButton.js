
const FilterButton = ({name}) => {
    return (
        <div>
            <button className="inline-block font-sm text-sm text-black bg-slate-200 rounded-lg px-3 hover:bg-slate-300">{name}</button>
        </div>
    )
}

export default FilterButton;