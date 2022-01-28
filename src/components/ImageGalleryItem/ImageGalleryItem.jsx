import PropTypes from "prop-types";

function ImageGalleryItem ({images, onClick}) {
    return images.map(image => {
        return (
            <li key={image.id} onClick={() => onClick(image.largeImageURL)} className="ImageGalleryItem">
                <img className="ImageGalleryItem-image" src={image.webformatURL} alt="" />
            </li>
        );
    });
};

ImageGalleryItem.propTypes = {
    images: PropTypes.array,
    onClick: PropTypes.func,
};

export default ImageGalleryItem;