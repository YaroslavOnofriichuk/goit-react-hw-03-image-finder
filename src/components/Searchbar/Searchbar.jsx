import React, { Component } from "react";
import PropTypes from "prop-types";

class Searchbar extends Component {
    state = {
        searchImage: ""
    };

    handlChange = (e) => {
        this.setState({searchImage: e.target.value.toLowerCase()});
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.searchImage.trim() === "") {
            window.alert("Enter a search word");
        } else {
            this.props.onSubmit(this.state.searchImage);
        }

        this.setState({ searchImage: "" });
        e.target.reset();
    };

    render() {
        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.handleSubmit}>
                    <button type="Submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handlChange}
                    />
                </form>
            </header>
        );
    }
};

Searchbar.propTypes = {
    onSubmit: PropTypes.func,
};

export default Searchbar;
