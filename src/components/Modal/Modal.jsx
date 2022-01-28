import React, { Component } from "react";
import PropTypes from "prop-types";

class Modal extends Component {

    componentDidMount() {
        window.addEventListener("keydown", this.onEsc);
      }
    
      componentWillUnmount() {
        window.removeEventListener("keydown", this.onEsc);
      }
    
    onClose = (e) => {
        if (e.target === e.currentTarget) {
            this.props.closeModal();
        }
    };

    onEsc = (e) => {
        if (e.code === "Escape") {
            this.props.closeModal();
          }
    };
    
    render () {
        return (
            <div className="Overlay" onClick={this.onClose}>
                <div className="Modal">
                    <img src={this.props.largeImageSrc} alt="" />
                </div>
            </div>
        );
    };
};

Modal.propTypes = {
    largeImageSrc: PropTypes.string,
    closeModal: PropTypes.func,
};

export default Modal;