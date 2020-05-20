import request from '../tools/request'

export const getArticles = (page = 1) => {
    return request.get(`/articles?page=${page}`);
}