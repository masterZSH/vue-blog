import request from '../tools/request'

// 获取标签
export const getTags = () =>{
    return request.get(`/tags`);
}