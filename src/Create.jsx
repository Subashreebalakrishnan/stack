function Create (props) {

    return <div className="flex--item"  style={{"margin-left": "123px"}}>
    <h5>
        <a>{props.CardData.name} </a>
   </h5>
        <h6>Location - {props.CardData.location}</h6>
        <span className="badge rounded-pill bg-secondary">{props.CardData.skill1}</span>  
    <span className="badge rounded-pill bg-secondary">{props.CardData.skill2}</span>    
</div>


}

export default Create