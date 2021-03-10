import {Annonce} from '../componets';

function Home() {
    return (
        <div className="home">
            <h1>Hello there</h1>
            <h2>General Kenobi</h2>
            <Annonce image="../images/nice.png" desc="hello"/>
        </div>
    );
}

export default Home;