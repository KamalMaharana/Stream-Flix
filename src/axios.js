import axios from 'axios';
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance


// 1File can have only 1 default export and many export 
// default export allow you to rename but normal export doesnt allow for renaming while importing
