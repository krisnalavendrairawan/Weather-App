
export default function Paragraf(props) {
    const { text, className } = props
    return (
        <p className={className}>{text}</p>
    )
}