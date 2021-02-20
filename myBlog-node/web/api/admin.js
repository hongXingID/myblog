const express = require("express");
const router = express.Router();
const adminServ = require("../../services/AdminServices");
const { asyncHandler } = require("../getSendResult");

//自己写的加密算法
const cryptor = require("../../util/crypt")

router.get("/",asyncHandler(async(req,res)=>{
  return await adminServ.getAdmins()
}))

router.get("/whoami", asyncHandler(async (req, res) => {
  return await adminServ.getAdminById(req.userId)
}))

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const result = await adminServ.login(req.body.loginId, req.body.loginPwd);
    if (result) {
      let value = result.id;
      value = cryptor.encrypt(value.toString())
      // res的cookie方法是因为前面的cookie中间件注入
      res.cookie("token",value,{
        path:"/",
        // domain:"8.136.1.191",
        domain:"localhost",
        maxAge:7*24*3600*30*12,
        // signed:true   //配合前面的秘钥
      })
      //适配其他终端
      res.header("authorization",value)
      // res.header("set-cookie",`token=${result.id};path=/;domain=localhost;max-age=${3600*24*7}`)
    }
    return result;
  })
);



router.post("/addAdmin", asyncHandler(async (req, res) => {
  const result = await adminServ.addAdmin({
    loginId:req.body.loginId, 
    loginPwd:req.body.loginPwd});
  return result;
}))

router.delete("/:id",asyncHandler(async(req,res)=>{
  return await adminServ.deleteAdmin(req.params.id)
}))
module.exports = router;
