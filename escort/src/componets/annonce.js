import '../css/annoncediv.css';

function Annonce(props){
    return(
        <div className="annonce">
            <div className="annoncediv">
                {/* Make it os image is in a div and give the div a width and height */}
                <div id="imagediv">
                    {/* Make image 100% max-width and height */}
                    <img src={props.image} alt="profile_image" id="annoncedivimg"></img>
                </div>
                <div id="profileinfo">
                    <h3 id="profilename">{props.name}</h3>
                    <p id="profiledesc">{props.desc}</p>
                </div>
            </div>
        </div>
    );
}

export default Annonce;