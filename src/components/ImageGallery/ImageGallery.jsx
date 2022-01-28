import PropTypes from "prop-types";

function ImageGallery ({children}) {
    return (
        <ul className="ImageGallery">
            {children}
        </ul>
    );
};

ImageGallery.propTypes = {
    children: PropTypes.element
};

export default ImageGallery;