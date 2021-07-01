import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-app-12ffc.cloudfunctions.net/api'
});

export default instance;