import "./TravelPartners.css"

function TravelPartners(props){
    const handleDragStart = (e) => e.preventDefault();

    return (<center>
        <h1>Our Travel Partners</h1>
        <center>
            <div className="partners">
                <img src="indigo.png" onDragStart={handleDragStart} role="presentation" alt="Indigo" className="partner-img"/>
                <img src="lankan.png" onDragStart={handleDragStart} role="presentation" alt="Lankan Airlines" className="partner-img white-bg"/>
                <img src="singapore.png" onDragStart={handleDragStart} role="presentation" alt="Singapore Airlines" className="partner-img"/>
                <img src="lufthansa.jpg" onDragStart={handleDragStart} role="presentation" alt="Lufthansa" className="partner-img"/>
                <img src="emirates.png" onDragStart={handleDragStart} role="presentation" alt="Air Emirates" className="partner-img"/>
            </div>
        </center>
        <br></br>
        <h1>Our Hotel Parters</h1>
        <center>
            <div className="partners">
                <img src="historic_hotel.png" onDragStart={handleDragStart} role="presentation" alt="Indigo" className="partner-img"/>
                <img src="hotel_moskova.png" onDragStart={handleDragStart} role="presentation" alt="Lankan Airlines" className="partner-img white-bg"/>
                <img src="stars_hotel.png" onDragStart={handleDragStart} role="presentation" alt="Singapore Airlines" className="partner-img"/>
                <img src="taj.png" onDragStart={handleDragStart} role="presentation" alt="Lufthansa" className="partner-img"/>
            </div>
        </center>
        <br></br>
    </center>)
}

export default TravelPartners;