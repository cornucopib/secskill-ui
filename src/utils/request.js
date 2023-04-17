import axios from 'axios';

let instance = axios.create({baseURL: import.meta.env.ENV_BASE_URL, timeout: 3000})
// 设置请求拦截器
// instance.interceptors.request.use(
//     config=>{

//     },
//     error=>{

//     }
// )
// 设置响应拦截器
// instance.interceptors.response.use(
//     response=>{

//     },
//     error=>{

//     }
// )

/**
 * 发起请求
 * 
 * @param {object} config 请求配置
 * @returns promise
 */
export function request(config) {
    return new Promise((resolve, reject) => {
        instance.request(config).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data)
        })
    });
}


/**
 * 发起get请求
 * @param {string} url url地址
 * @param {object} params get入参
 * @returns promise
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        let config = {};
        config.url = url;
        if (params) {
            config.params = params;
        }
        instance.request(config).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data)
        })
    });
}

/**
 * post请求
 * @param {string} url url地址
 * @param {object} data post请求体
 * @returns promise
 */
export function post(url, data) {
    return new Promise((resolve, reject) => {
        instance.post(url, data).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data)
        })
    });
}

export default {request, get, post}
