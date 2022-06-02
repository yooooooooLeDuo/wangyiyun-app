import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入所有api
import http from '@/http/api'
import registerVant from "@/plugins";

const app = createApp(App);

//往vue原型上挂载接口
app.config.globalProperties.$http = http;
registerVant(app);
app.use(store);
app.use(router);
app.mount('#app');
