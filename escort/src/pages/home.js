import {Annonce} from '../componets';

function Home() {
    return (
        <div className="home">
            <h1>Hello there</h1>
            <h2>General Kenobi</h2>
            <Annonce image="/images/Capture.png" name="Dejlige Birgitte" desc="hello kom knep mig"/>
            <Annonce image="/images/Capture.png" name="Gay Arvad" desc="hello kom knep mig hårdt i røven"/>
        </div>
    );
}

export default Home;