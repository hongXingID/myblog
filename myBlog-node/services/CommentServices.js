const Comment = require("../models/Comment")
const BlogArticle = require('../models/BlogArticle')
const Sequelize = require("sequelize")
const Op = Sequelize.Op;

//增加评论
exports.addComment = async function(blogId,username,content){
 const ins =  await Comment.create({
    blogId,
    username,
    content,
  })
  return ins.toJSON()
}


//删除评论
exports.deleteComment = async function(id){
    await Comment.destroy({
       where:{
           id,
       }
   })
}


//查找指定博客的所有评论
exports.findBlogComment = async function(blogId){
    const result = await Comment.findAndCountAll({
        where:{
            blogId,
        },
        attributes:['id','content','createdAt','username'],
        order:[['createdAt','DESC']]
   })
   return {
       total: result.count,
       datas: JSON.parse(JSON.stringify(result.rows))
   }
}

//查找最新的所有评论
exports.findNewBlogComment = async function(page = 1,limit=10){
    const result = await Comment.findAndCountAll({
        where:{
            blogId:{
                [Op.not]:-1
            }
        },
        attributes:['id','username','content','createdAt','blogId'],
        limit:+limit,
        offset: (page - 1) * limit,
        order:[['createdAt','DESC']]
   })

   return JSON.parse(JSON.stringify(result))
}

//查找留言板所有评论
exports.findAllBlogComment = async function(page = 1,limit=10){
    const result = await Comment.findAndCountAll({
        where:{
            blogId:-1
        },
        attributes:['username','content','createdAt','id'],
        limit:+limit,
        offset: (page - 1) * limit,
        order:[['createdAt','DESC']]
   })

   return JSON.parse(JSON.stringify(result))
}