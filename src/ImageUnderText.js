import "./ImageUnderText.css";

function ImageUnderText(props){
    return (
        <div style={{
            // eslint-disable-next-line no-useless-concat
            backgroundImage : 'url(' + props.url + ')',
        }} className="clip-text clip-text--no-textzone">
            {props.children}
        </div>
    );
}

export default ImageUnderText;