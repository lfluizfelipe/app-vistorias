import axios from "axios";

const http = axios.create({
  baseURL: "https://dev-1s6qn3x642oxnn4.api.raw-labs.com"
})

export default http;
