import request from '../tools/request'

import articleConfig from "../config/article";
// 获取文章列表接口
export const getArticles = (page, size) => {
    return request.get(`/articles?page=${page}&size=${size}`);
}

// 添加
export const addArticle = (title, content, tags) => {
    let token = sessionStorage.getItem("GOBLOGTOKEN", )
    return request.post(`/articles`, {
        title: title,
        content: content,
        tags: tags,
        author: articleConfig.defaultAuthor || ""
    }, {
        headers: {
            "Authorization": token
        }
    });
}

// 获取单条文章
export const getArticle = (id) => {
    return request.get(`/articles/${id}`);
}



