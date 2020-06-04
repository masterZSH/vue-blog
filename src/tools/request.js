import axios from 'axios'
import apiConfig from '../config/api'

const instance = axios.create({
    baseURL: apiConfig.baseURL + `/${apiConfig.version}`,
    timeout: apiConfig.timeout,
    transformResponse: [function (data) {
        // 需要转换的话
        return data;
    }],
    // browser only
    onUploadProgress: function (progressEvent) {
        console.log(progressEvent);
    },

    // browser only
    onDownloadProgress: function (progressEvent) {
        console.log(progressEvent);
    },

    // withCredentials: true, // default

    headers: {

    },

    // proxy: {
    //     host: '127.0.0.1',
    //     port: 9000,
    //     auth: {
    //       username: 'mikeymike',
    //       password: 'rapunz3l'
    //     }
    //   },

    responseType: 'json', // default
    crossDomain: true, // 跨域
});

/**
 * delete请求 用于删除资源操作
 * 
 * @param {string} url 
 */
function del(url) {
    return instance.delete(url);
}

/**
 * post请求 用于新增资源操作
 * 
 * @param {string} url 
 */
function post(url, data) {
    return instance.post(url, {
        data: data
    });
}

/**
 * put请求 用于更新资源操作
 * 
 * @param {string} url 
 * @param {object} data 
 */
function put(url, data) {
    return instance.put(url, {
        data: data
    });
}

/**
 * get请求 用于获取资源操作
 * 
 * @param {string} url 
 */
function get(url) {
    return new Promise((resolve, reject) => {
        instance.get(url).then((res) => {
            if (res.data.code === 200 && res.data.msg === "success") {
                resolve(res.data.data)
            }
            reject(res.data)
        }).catch(e => {
            reject(e)
        });
    })
}


export default {
    post,
    put,
    del,
    get
}