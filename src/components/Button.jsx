export default function Button(props){
    const {handleButton} = props
    return(
        <button type="submit" onClick={handleButton} className="mx-3 bg-indigo-600 text-white h-[40px] mt-2 w-[40px] rounded-md ">
            <i className="fa-solid fa-magnifying-glass "></i>
        </button>
        
    )
}