require("./BlogArticle")
require("./Comment")
const Admin = require("./Admin")
const md5 = require('md5')

const sequelize = require("./db");
sequelize.sync({ alter: true }).then(() => {
    // 初始化一个账号root
    Admin.create({
        loginId: "root",
        loginPwd: md5("123456")
    })
    console.log("所有模型同步完成")
})