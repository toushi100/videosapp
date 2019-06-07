import axios from 'axios';




export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults:5,
        key:'AIzaSyCHaOPraK8_S9K0rBBpdYhYHTyCs27eQF8',
        
    }
});