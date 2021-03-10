function Annonce(props){
    return(
        <div className="annonce">
            <div>
                <img src={props.image}></img>
                <p>{props.desc}</p>
            </div>
        </div>
    );
}

export default Annonce;