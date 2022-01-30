import PropTypes from "prop-types";

function ImageGalleryItem ({image, onClick}) {
        return (
            <li key={image.id} onClick={() => onClick(image.largeImageURL)} className="ImageGalleryItem">
                <img className="ImageGalleryItem-image" src={image.webformatURL} alt="" />
            </li>
        );
};

ImageGalleryItem.propTypes = {
    image: PropTypes.object,
    onClick: PropTypes.func,
};

export default ImageGalleryItem;