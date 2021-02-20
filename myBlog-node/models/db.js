//连接数据库
const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('my_blog','root','hx19990125_',{
    host:'rm-bp108460yk7006s3p6o.mysql.rds.aliyuncs.com',
    dialect: "mysql",
    logging:null,
})
module.exports = sequelize;

