import axios from "axios";

const api = axios.create({
  baseURL: 'https://backtpfinalutn.onrender.com/api'
})

export default api;