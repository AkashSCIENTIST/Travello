import { Link } from "react-router-dom";
import "./NavBar.css";
import ButterText from "./ButterText";

function NavBar(){
    return <div className="navbar">
        <Link to="/">
            <ButterText>Travello</ButterText>
        </Link>
        <div className="links">
            <Link to="/" className="link">Home</Link>
            <Link to="/packages" className="link">Packages</Link>
            <Link to="/book" className="link">Book Ticket</Link>
        </div>
    </div>
}

export default NavBar;