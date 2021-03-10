function Annonce(image, desc){
    return(
        <div className="annonce">
            <div>
            <img src={image}></img>
            <p>{desc}</p>
            </div>
        </div>
    );
}

export default Annonce;