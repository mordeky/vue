const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');

const port = 3000;
const app = express();

app
    .use(cors()) // 设置CORS，允许跨域请求
    /*
    如果不设置cors()，
    当用户正在尝试从一个源（域名、协议或端口）向另一个源发起网络请求时，
    会报错：“fetch blocked by CORS policy”，
    这意味着目标服务器没有正确地配置CORS（跨源资源共享）策略来允许这种跨域请求。

    但是，如果用户直接用JS脚本发起请求，则无此限制。
     */
    .use(express.json()) // 启用 JSON 解析中间件
    /**
     * express.json() 是一个中间件函数，用于解析 application/json 类型的请求体。
     * 这个中间件会将解析后的 JSON 数据放入 req.body 属性中，以便后续的请求处理器可以访问。
     */
    // .use(bodyParser.json())
    // .use(bodyParser.urlencoded({ extended: true }))
    // .use('/', router) // 设置路由。注意，在设置路由前，须在前面先设置好JSON解析器、cors()等
    .get('/', (req, res) => {
        res.status(200).send('Hello, World!');
    })
app.post('/user', (req, res) => {
    const {name, age} = req.body;
    console.log(`User name is ${name} and age is ${age}`)

    const data = {
            name: 'John Doe',
            age: 30,
            city: 'New York'
        };

        // res.json(data); // 发送JSON响应
        // 也可以先设置状态码，再发送JSON响应
        res.status(200).json(data);
    })
    .listen(port, () => { // 启动服务器
        console.log(`Example app listening at http://localhost:${port}`);
    });
