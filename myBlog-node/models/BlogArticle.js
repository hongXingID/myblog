const sequelize = require("./db");
const { DataTypes } = require("sequelize")

//定义BlogArticle表
const BlogArticle = sequelize.define("BlogArticle", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    views:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    commentNum:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    tags:{
        type:DataTypes.STRING,
        allowNull:false,
    }
}, {
    createdAt: true,
    updatedAt: true,
    paranoid: true
})

module.exports = BlogArticle