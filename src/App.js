import React, { Component } from "react";
import getImages from "./services/imageAPI";
import checkEmptyObject from "./services/checkEmptyObject";
import isButtonCheck from "./services/checkHits";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageGalleryItem from "./components/ImageGalleryItem/ImageGalleryItem";
import Button from "./components/Button/Button";
import Loader from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";

class App extends Component {
  state = {
    searchImage: "",
    page: 1,
    images: null,
    isLoading: false,
    isButton: true,
    largeImage: null
  };

  handleSubmit = (searchImage) => {
    this.setState({isLoading: true});

    getImages(searchImage, 1)
      .then(data => {
        this.setState({ 
          searchImage: searchImage,
          page: 1,
          images: data.hits,
        });})
      .catch(error => console.log(error))
      .finally(() => this.setState({isLoading: false}));
  };


  onLoadMoreClick = () => {
    this.setState({isLoading: true});

    getImages(this.state.searchImage, this.state.page + 1)
    .then(data => {
      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        page: prevState.page += 1,
      }))
      return data;
    })
    .then(data => this.setState({isButton: isButtonCheck(data, this.state.page)}))
    .catch(error => console.log(error))
    .finally(() => this.setState({isLoading: false}));
  };


  openModal = (largeImageSrc) => {
    this.setState({largeImage: largeImageSrc});
  };

  closeModal = () => {
    this.setState({largeImage: null});
  };

  render() {  
    const {images, isLoading, largeImage, isButton} = this.state;
    const isImages = !images || !checkEmptyObject(images) ? false : true;
    const renderButton = isImages && isButton ? true : false;

    return (
      <>
        <Searchbar onSubmit={this.handleSubmit}/>
        {isImages && 
        <ImageGallery >
          <ImageGalleryItem images={images} onClick={this.openModal}/> 
        </ImageGallery>
         }
        {isLoading && <Loader />}
        {renderButton && <Button onClick={this.onLoadMoreClick}/>}
        {largeImage && <Modal largeImageSrc={largeImage} closeModal={this.closeModal}/>}
      </>
    );
  }
}

export default App;
