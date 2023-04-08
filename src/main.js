import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import http from '@/common/axios/http';

const app = createApp(App);
app.config.globalProperties.$http = http;
app.use(Antd);
app.mount('#app')

console.log(import.meta.env)
