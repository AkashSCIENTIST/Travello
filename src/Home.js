import "./Home.css";
import SlideShow from "./SlideShow";
import ButterText from "./ButterText";
import TravelPartners from "./TravelPartners";
import { Link } from "react-router-dom";

function Home() {
    return (<div>
        <ButterText>Wanna Tour Around the world ?</ButterText>
        <SlideShow/>
        <ButterText>Why waiting more ?</ButterText>
        <div className="buttons">
            <Link to="/packages"><button>See Packages</button></Link>
            <Link to="/book"><button>Book Package</button></Link>
        </div>
        <br/>
        <TravelPartners/>
    </div>);
}

export default Home;