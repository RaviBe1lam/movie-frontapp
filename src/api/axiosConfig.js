import axios from 'axios';

/*export default axios.create({
    baseURL:'https://9c96-103-106-239-104.ap.ngrok.io',
    headers: {"ngrok-skip-browser-warning": "true"}
}); */


//const axiosInstance = axios.create
export default axios.create({
    baseURL: 'http://localhost:8080/api/v1/movies',  // Ensure the base URL is correct
    timeout: 5000,
  });
  