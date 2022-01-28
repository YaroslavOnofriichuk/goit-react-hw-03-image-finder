import axios from 'axios';

const getImages = async (searchImage, page) => {
    axios.defaults.baseURL = 'https://pixabay.com/api/';
    const url = `?q=${searchImage}&page=${page}&key=25424459-1c42e06c2b654542622411942&image_type=photo&orientation=horizontal&per_page=12`;

    try {
        const response = await axios(url);
        return response.data;
    } catch (error) {
        console.log(error);;
    }
};

export default getImages;