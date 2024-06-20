const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');

const router = require('./routes');

const port = 3000;
const app = express();

const allowedOrigins = [
    // 'http://localhost:63342/', // 注意，不要加`/`后缀，源域不包括此后缀
    'http://localhost:63342',
    'http://localhost:5173',
];

const corsOptions = {
    // origin: 'http://localhost:63342',
    /*origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
            return
        }
        callback(new Error('Not allowed by CORS!'));
    },*/
    origin: allowedOrigins,
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type',
    optionsSuccessStatus: 200
};

app
    .use(cors())
    // .use(cors(corsOptions))
    .use(express.json()) // 启用 JSON 解析中间件，将解析后的JSON数据放入req.body属性中
    // .use(bodyParser.json())
    // .use(bodyParser.urlencoded({ extended: true }))
    .use('/', router) // 设置路由。注意，在设置路由前，须在前面先设置好JSON解析器、cors()等
    .listen(port, () => { // 启动服务器
        console.log(`Example app listening at http://localhost:${port}`);
    });
