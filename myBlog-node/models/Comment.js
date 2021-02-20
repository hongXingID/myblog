const sequelize = require("./db");
const { DataTypes } = require("sequelize")

//定义Comment表
const Comment = sequelize.define("Comment", {
    blogId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    createdAt: true,
    updatedAt: true,
    paranoid: true
})

module.exports = Comment