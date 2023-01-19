import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ImageUnderText from "./ImageUnderText";
import "./SlideShow.css";

function SlideShow(props){
    return <Carousel 
            autoPlay={true} 
            infiniteLoop={true} 
            showArrows={false} 
            showStatus={false}
            showThumbs={false}
            interval={2000}
            width="100%"
            dynamicHeight={true}
            stopOnHover={true}
            className="carousel"
            >
        <ImageUnderText url="usa.jpg">USA</ImageUnderText>
        <ImageUnderText url="india.jpg">INDIA</ImageUnderText>
        <ImageUnderText url="europe.jpg">EUROPE</ImageUnderText>
    </Carousel>
}

export default SlideShow;