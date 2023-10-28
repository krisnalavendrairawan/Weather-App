import Paragraf from './Paragraf.jsx'
export default function Temp(props){
    const {temp} = props
    return (
        <>
            <Paragraf text={temp + "°C"} className=" temp font-semibold text-4xl mx-[20px] my-[20px] text-slate-700 " />
        </>
    )
}