import request from '../tools/request'

import articleConfig from "../config/article";

// 获取文章列表接口
export const getArticles = (page, size, tag) => {
    let url = `/articles?page=${page}&size=${size}`;
    if (url) {
        url = `${url}&tag=${tag}`
    }
    return request.get(url);
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
export const getArticle = function(id){
    return request.get.call(this,`/articles/${id}`);
}