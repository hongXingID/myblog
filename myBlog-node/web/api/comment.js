const express = require("express")
const router = express.Router()
const CommentServices = require("../../services/CommentServices")
const BlogArticleServices = require('../../services/BlogArticleServices')
const { asyncHandler } = require("../getSendResult")

//查找最新的博客评论
router.get("/newComment", asyncHandler(async (req, res, next) => {
  const page = req.query.page;
  const limit = req.query.limit;
  const result = await CommentServices.findNewBlogComment(page, limit)
  return result
}))

//查找留言板评论
router.get('/message', asyncHandler(async (req, res, next) => {

  const page = req.query.page;
  const limit = req.query.limit;
  const result = await CommentServices.findAllBlogComment(page, limit)
  return result
}))


//查找指定博客的评论,
router.get("/blogComment", asyncHandler(async (req, res, next) => {
  const blogId = req.query.id;

  const result = await CommentServices.findBlogComment(blogId)
  return result
}))

// 增加评论
router.post("/", asyncHandler(async (req, res, next) => {
  const blogId = req.body.blogId;
  const username = req.body.username;
  const content = req.body.content;
  let result;
  if (blogId === -1) {
    result = await CommentServices.addComment(blogId, username, content)
  } else {
    result = await CommentServices.addComment(blogId, username, content)

    setTimeout(async() => {
      const res = await BlogArticleServices.findOneBlogArticle(blogId)
      const newCommentNum = res.commentNum + 1;
      await BlogArticleServices.updataCommentNum(newCommentNum, blogId)
    }, 0)


  }

  return result;
}))

router.delete("/:id", asyncHandler(async (req, res, next) => {
  return await CommentServices.deleteComment(req.params.id)
}))
module.exports = router