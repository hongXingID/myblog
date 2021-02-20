const express = require("express")
const app =express()
const cors = require('cors')


//映射静态资源
const path = require("path")
const staticRoot = path.resolve(__dirname,"../public")
app.use(express.static(staticRoot))


//处理跨域
// app.all('*', function(req, res, next) {  
//   res.header("Access-Control-Allow-Origin", "*");  
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");  
//   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
//   // res.header('Access-Control-Allow-Credentials',true)
//   res.header("X-Powered-By",' 3.2.1')   
//   next();  
// });
app.use(cors({
  origin: 'http://8.136.1.191',
  credentials:true,
}));


// 加入cookie-parser 中间件
// 加入之后，会在req对象中注入cookies属性，用于获取所有请求传递过来的cookie
// 加入之后，会在res对象中注入cookie方法，用于设置cookie
const cookieParser = require("cookie-parser");
//这个库可以给cookie加密，可以传入秘钥
app.use(cookieParser());

// 应用token中间件
app.use(require("./tokenMiddleware"));


// 解析 application/x-www-form-urlencoded 格式的请求体
app.use(express.urlencoded({ extended: true }));

// 解析 application/json 格式的请求体
app.use(express.json());



//处理api请求
app.use("/api/blogLogin",require("./api/admin"))
app.use("/api/blogArticle",require("./api/blogArticle"))
app.use("/api/comment",require("./api/comment"))
app.use("/api/searchBlog",require("./api/searchBlog"))


const port = 6060;
app.listen(port, () => {
  console.log(`server listen on ${port}`);
});

