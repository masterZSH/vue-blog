import request from '../tools/request'

import apiConfig from '../config/api'

// 登录
export const login = function (username, secret){
    return request.get.call(this,`/login?username=${username}&secret=${secret}`, {
        baseURL: apiConfig.baseURL
    });
}