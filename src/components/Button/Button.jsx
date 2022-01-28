import PropTypes from "prop-types";

function Button ({onClick}) {
    return (
        <div className="Wrapper">
            <button 
                className="Button"
                type="button"
                onClick={onClick}
                >Load more
            </button>
        </div>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
};

export default Button;