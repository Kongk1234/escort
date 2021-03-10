import {Annonce} from '../componets';

function Home() {
    return (
        <div className="home">
            <Annonce image="/images/meme.jpg" name="Dejlige Birgitte" desc="hello kom knep mig"/>
            <Annonce image="/images/meme.jpg" name="Gay Arvad" desc="hello kom knep mig hårdt i røven"/>
            <Annonce image="/images/meme.jpg" name="Dejlige Birgitte" desc="hello kom knep mig"/>
            <Annonce image="/images/meme.jpg" name="Dadler" desc="Kom og køb, kom og køb"/>
        </div>
    );
}

export default Home;