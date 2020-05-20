import marked from "marked";

export default {
    methods: {
        /**
         * 
         * @param {string} markdown -markdown文本字符串
         * @returns string  -构建完成的html 
         */
        marked(markdown) {
            return marked(markdown);
        }
    }
}