const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    // console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;
    if(username === 'wgj' && password === '123') {
        res.send({
            code: 200,
            msg: '登录成功',
            user: username,
            token: 'test122222'
        })
    } else {
        res.send({
            code: 401,
            msg: '登录失败',
        })
    }

});

module.exports = router;