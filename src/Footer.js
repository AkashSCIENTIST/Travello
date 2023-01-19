import { BsTwitter, BsFacebook } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import "./Footer.css"

function Footer(){
    return(
        <div className="footer">
            <div>
                <h1>Contact</h1>
                <p>
                    PSG College of Technology,<br></br>
                    Peelamedu, <br></br>
                    Coimbatore. <br></br>
                    Ph : 1234567890
                </p>
            </div>
            <BsFacebook className="logo" />
            <BsTwitter className="logo" />
            <SiGmail className="logo" />
        </div>
    );
}

export default Footer;