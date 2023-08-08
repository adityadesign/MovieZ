import React from "react"

interface SwitchTab {
    tab: string[],
    isActive: boolean,
    handleClick: (e:any) => void
}

const SwitchTab: React.FC<SwitchTab> = ({tab, isActive, handleClick}) => {

    return (
        <div className="bg-gray-700 font-semibold flex rounded-3xl mr-2">
            <button
                style={{fontSize:'0.77rem'}}
                onClick={(e)=>handleClick(e)}
                value='Movie'
                className={`py-1 px-2 ${!isActive ? 'bg-[#F7BE38] text-black' : ''} hover:bg-[#F7BE38] rounded-3xl m-0.5 transition duration-300 ease-in-out`}
            >{tab[0]}</button>
            <button
                style={{fontSize:'0.77rem'}}
                onClick={(e)=>handleClick(e)}
                value='TVshow'
                className={`py-1 px-2 ${isActive ? 'bg-[#F7BE38] text-black' : ''} hover:bg-[#F7BE38] rounded-3xl m-0.5 transition duration-300 ease-in-out`}
            >{tab[1]}</button>
        </div>
    )
}

export default SwitchTab