const Job = (props) => {
    return (
        <div className={props.className}>
        <div><h2>{props.title}</h2></div>
        <div><p><span>{props.contractType}</span> - <span>{props.country}</span> - <span>{props.city}</span></p></div>
        </div>

    )
        


}
export default Job;