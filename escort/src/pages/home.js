import {Annonce} from '../componets';
import '../css/annoncediv.css';

function Home() {
    return (
        <div className="home">
            <Annonce image="/images/meme.jpg" name="Dejlige Birgitte" desc="Silence wench"/>
            <Annonce image="/images/meme.jpg" name="Ha gay" desc="I do not wish to be horny anymore"/>
            <Annonce image="/images/meme.jpg" name="Dejlige" desc="I just want to be happy"/>
            <Annonce image="/images/meme.jpg" name="Dadler" desc="Aaaaaaaaaaaaaaaaaaaahhhhh"/>
        </div>
    );
}

export default Home;