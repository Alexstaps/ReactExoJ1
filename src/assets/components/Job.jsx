const Job = (props) => {
    return (
        <article className={props.className}>
        <div><h2>{props.title}</h2></div>
        <div><p><span>{props.contractType}</span> - <span>{props.country}</span> - <span>{props.city}</span></p></div>
        </article>
    )
        


}
export default Job;