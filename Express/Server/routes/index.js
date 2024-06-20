const express = require('express');
const router = express.Router();

// 定义根路径的路由
router
    .get('/', (req, res) => {
        res.send('Hello, World!');
    })
    .get('/user/:userId', (req, res) => {
        const userId = req.params.userId
        const data = {
            ID: userId,
            name: 'John Doe',
            age: 30,
            city: 'New York'
        };
        res.json(data)  // 注意发送JSON格式数据与发送普通字符串的不同
    })
    // 定义一个路由来处理 POST 请求
    .post('/user', (req, res) => {
        res.status(404).send({ error: 'Not found' })
        // const {name, age} = req.body;
        // console.log(`User name is ${name} and age is ${age}`)
        // // res.send(`User name is ${name} and age is ${age}`);
        // res.json({year: 2024, date: '06/08'})
        // res.send({year: 2024, date: '06/08'})
    })

module.exports = router;
