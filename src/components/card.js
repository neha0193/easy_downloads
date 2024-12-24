
const Card = (props) => {
return(
    <div className="tab">
        <a href={props.url} target="_blank"><h3>{props.Children}{props.text}</h3></a>
    </div>
   
)

}
export default Card