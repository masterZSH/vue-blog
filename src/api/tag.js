import request from '../tools/request'

// 获取标签
export const getTags = function(){
    return request.get.call(this,`/tags`);
}