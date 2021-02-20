# 初始化模块
npm i

# 连接数据库，建表
需要建表，在modles执行sync文件创建表，创建前确认数据库账号密码等。

# 执行index文件
文件目录下执行node index

# 数据说明
## 管理员
{
    loginId:"登录账户",
    loginPwd:"登录密码",
}
### 账号密码初始化创建一个账户root，密码123456

## 博文数据
{
    title:"标题",
    description:"描述",
    content:"内容",
    views:"浏览量",
    commentNum:"评论数",
    tags:"类型标签",
    createdAt:"创建时间",
}

## 留言数据
{
    blogId:"博客id，当id=-1时代表此条数据为留言板的"
    username:"评论用户名",
    content:"内容",
    createdAt:"创建时间",
}