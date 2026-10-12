const HeadSection = ({head , disc}:{head:string , disc:string}) => {
    return (
        <div className="mb-5">
            <h2 className="font-bold text-lg text-dark">{head}</h2>
            <p className="text-sm text-dark/50">{disc}</p>
        </div>
    )
}

export default HeadSection