var express = require('express');
var app = express();
var fs = require("fs");
var path = require('path');
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


//添加用户
app.post('/add', function (req, res) {
  fs.readFile(path.resolve(__dirname, './users.json'), 'utf8', function (err, data) {
    console.log(data)
    data = JSON.parse(data);
    data["userlist"].push({
      "id": 4,
      "username": "lucy",
      "password": "123456"
    });
    res.json(data);
  });
})

//TODO：请补全获取用户列表代码


app.listen(9999, function () {
  console.log("访问地址:http://localhost:9999")
})

module.exports = app;