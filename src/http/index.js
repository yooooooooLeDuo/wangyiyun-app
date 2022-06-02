import axios from "axios";

//全局配置
axios.defaults.baseURL='http://localhost:3333';
axios.defaults.timeout=3000;

export default axios;
