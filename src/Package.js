import "./Package.css";

function Package(props) {
    return (
    
    props.isAlternateColor ? (
        <div className="alt-package-container">
            <center><h1>{props.heading}</h1></center>
            <p>{props.content + " "}<u>Package Cost : ₹{props.cost}/- per head</u></p>
            <br></br>
            <center><img src={props.src} alt="profile_image" className="profile-image"/></center>
        </div>
        ) : (
        <div className="package-container">
            <center><h1>{props.heading}</h1></center>
            <p>{props.content + " "}<u>Package Cost : ₹{props.cost}/- per head</u></p>
            <br></br>
            <center><img src={props.src} alt="profile_image" className="profile-image"/></center>
        </div>
        )
    );
}

export default Package;