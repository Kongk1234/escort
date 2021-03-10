import '../css/annoncediv.css';
function Annonce(props) {
    return (
        <div className="annonce">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className="annoncediv">
                {/* Make it os image is in a div and give the div a width and height */}
                <div id="imagediv">
                    {/* Make image 100% max-width and height */}
                    <img src={props.image} alt="profile_image" id="annoncedivimg"></img>
                </div>
                <div id="profileinfo">
                    <h3 id="profilename">{props.name}</h3>
                    <textarea id="profiledesc" rows="4" cols="40" disabled>{props.desc}</textarea> <br></br>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                </div>
            </div>
        </div>
    );
}

export default Annonce;