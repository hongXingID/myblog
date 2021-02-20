const express = require("express")
const router = express.Router();
const BlogArticleServices = require("../../services/BlogArticleServices")
const { asyncHandler } = require("../getSendResult")

router.get("/", asyncHandler(async (req, res, next) => {
    const title = req.query.title;

    const result = await BlogArticleServices.fuzzyQueryBlogArticle(title)
    return result
}))

module.exports = router;