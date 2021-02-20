const express = require("express")
const router = express.Router()
const BlogArticleServices = require("../../services/BlogArticleServices")
const { asyncHandler } = require("../getSendResult")

router.get("/", asyncHandler(async (req, res, next) => {
    const result = await BlogArticleServices.findBlogArticle()
    return JSON.stringify(result)
}))
router.get("/hotViews", asyncHandler(async (req, res, next) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const result = await BlogArticleServices.findHotBlogArticle(limit, page)
    return JSON.stringify(result)
}))



router.get("/:id", asyncHandler(async (req, res, next) => {


    const result = await BlogArticleServices.findOneBlogArticle(req.params.id)
    const newViews = result.views+ 1
     BlogArticleServices.updataView(newViews, req.params.id)
    //  BlogArticleServices.updataCommentNum(newCommentNum,req.params.id)
    return result;
}))



router.post("/", asyncHandler(async (req, res, next) => {
    const title = req.body.title;
    const description = req.body.description;
    const content = req.body.content;
    const tags = req.body.tags;
    const result = await BlogArticleServices.addBlogArticle(title, description,content,tags)
   return JSON.stringify(result)
}))

router.delete("/:id", asyncHandler(async (req, res, next) => {
    return await BlogArticleServices.deleteBlogArticle(req.params.id);
}))




module.exports = router