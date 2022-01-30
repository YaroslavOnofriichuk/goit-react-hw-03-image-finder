import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";

function ImageGallery ({images, onClick}) {
    return (
        <ul className="ImageGallery">
            {images.map(image => <ImageGalleryItem image={image} onClick={onClick} key={image.id}/>)}
        </ul>
    );
};

ImageGallery.propTypes = {
    images: PropTypes.array,
    onClick: PropTypes.func
};

export default ImageGallery;