import '../css/annoncediv.css';

function Annonce(props){
    return(
        <div className="annonce">
            <div className="annoncediv">
                <img src={props.image} alt="profile_image"></img>
                <h3>{props.name}</h3>
                <p>{props.desc}</p>
            </div>
        </div>
    );
}

export default Annonce;