import axios from 'axios';

const key = 'AIzaSyCHaOPraK8_S9K0rBBpdYhYHTyCs27eQF8';


export default axios.create({

    baseURL : 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'sinppet',
        maxResults: 5,
        key : key
    }
});