const BlogArticle = require("../models/BlogArticle");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


//添加博客文章
exports.addBlogArticle = async function (title, description, content, tags) {
      console.log(description)
      const result = await BlogArticle.create({
            title,
            description,
            content,
            commentNum: '0',
            views: '0',
            tags,
      })
      return result;
}

//删除博客文章，传入id
exports.deleteBlogArticle = async function (blogPostId) {
      const result = await BlogArticle.destroy({
            where: {
                  id: blogPostId
            }
      })
      return result

}

//增加浏览数
exports.updataView = async function (views, blogPostId) {
      BlogArticle.update({
            views
      }, {
            where: {
                  id: blogPostId
            }
      })
}

//增加评论数
exports.updataCommentNum = async function (commentNum, blogPostId) {
      BlogArticle.update({
            commentNum
      }, {
            where: {
                  id: blogPostId
            }
      })
}

//查找所有博客文章(不包括具体文章内容)
exports.findBlogArticle = async function () {
      const result = await BlogArticle.findAndCountAll({
            attributes: ["id", "title", "description", "views", "commentNum", "tags", "createdAt",],
            order: [["id", "DESC"]]
      })
      return {
            total: result.count,
            datas: JSON.parse(JSON.stringify(result.rows))
      }
}

//查找文章，按照浏览量排名
exports.findHotBlogArticle = async function (limit = 10, page = 1) {
      const result = await BlogArticle.findAndCountAll({
            attributes: ["id","title", "views","commentNum"],
            limit: +limit,
            offset: (page - 1) * limit,
            order: [["views", "DESC"]]
      })
      return JSON.parse(JSON.stringify(result))
}


//模糊查询
exports.fuzzyQueryBlogArticle = async function (word) {
      const result = await BlogArticle.findAll({
            raw: true,
            order: [
                  ['views', 'DESC']
            ],
            where: {
                  title: {
                        [Op.like]: '%' + word + '%'
                  }
            },
            attributes: ['id', 'title', 'views', 'description','commentNum', 'createdAt']
      })
      if (!result) {
            return null;
      } else {
            return result
      }
}

//查找指定博客文章，传入博客Id
exports.findOneBlogArticle = async function (blogId) {
      const result = await BlogArticle.findByPk(blogId)
      if (!result) {
            return null
      } else {
            return result.dataValues
      }
}