import axios from "axios";

const customInstance = axios.create({
    baseURL: 'https://devcamper-api-v2.onrender.com'
});

export default customInstance;
