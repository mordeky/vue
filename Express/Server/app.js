const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');

const router = require('./routes');

const port = 3000;
const app = express();

app
    .use(cors())
    .use(express.json()) // 启用 JSON 解析中间件
    // .use(bodyParser.json())
    // .use(bodyParser.urlencoded({ extended: true }))
    .use('/', router) // 设置路由。注意，在设置路由前，须在前面先设置好JSON解析器、cors()等
    .listen(port, () => { // 启动服务器
        console.log(`Example app listening at http://localhost:${port}`);
    });

/**
 * express.json() 是一个中间件函数，用于解析 application/json 类型的请求体。
 * 这个中间件会将解析后的 JSON 数据放入 req.body 属性中，以便后续的请求处理器可以访问。
 */

