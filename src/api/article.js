import request from '../tools/request'

// 获取文章列表接口
export const getArticles = (page, size) => {
    return request.get(`/articles?page=${page}&size=${size}`);
}