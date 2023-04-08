import axios from 'axios';

// 设置baseURL
axios.defaults.baseURL = import.meta.env.ENV_BASE_URL
// 设置超时时间
axios.defaults.timeout = 3000
// 设置请求拦截器
// axios.interceptors.request.use(
//     config=>{

//     },
//     error=>{

//     }
// )
// 设置响应拦截器
// axios.interceptors.response.use(
//     response=>{

//     },
//     error=>{

//     }
// )
/** 
 * get方法，对应get请求 
 * 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {params: params}).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data)
        })
    });
}
/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data)
        })
    });
}

export default {get: get, post: post}
