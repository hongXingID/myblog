const { getErr } = require("./getSendResult");
const { pathToRegexp } = require("path-to-regexp");
const cryptor = require("../util/crypt")


//需要认证的接口
const needTokenApi = [
  //管理员验证
  { method: "GET", path: "/api/blogLogin/whoami" },
  { method: "DELETE", path: "/api/blogLogin/:id" },

];

// 用于解析token
module.exports = (req, res, next) => {

  const apis = needTokenApi.filter(api => {

    //把地址转换成正则表达式再去匹配
    const reg = pathToRegexp(api.path);
    //匹配请求的地址和请求方式是不是在名单里
    return api.method === req.method && reg.test(req.path);
  });
  if (apis.length === 0) {
    next();
    return;
  }
 
  let token = req.cookies.token;
  if(!token){
    //从header的authorization中获取
    token = req.headers.authorization;
  }
  if(!token){
    handleNonToken(req,res,next);
    return;
  }
  
  const userId = cryptor.decrypt(token)
  req.userId = userId;
  next();
  
};

//处理没有认证的情况
function handleNonToken(req, res, next) {
  res
    .status(403)
    .send(getErr("you don't have any token to access the api", 403));
}
