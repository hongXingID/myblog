<template>
     <div class="aboutBox">
        <header>
            <h1>
                    关于我
            </h1>
        </header>
        <hr>
        <section>
            <p>
                <img :src="this.$store.state.aboutObj.image" class="messageImg">
            </p>
            <p>
                Hi，欢迎来到阿星的博客！
            </p>
            <p>
                我是一只前端切图仔，喜欢看看技术文章，喜欢牛逼的特效，喜欢学习新技术，当然，有问题欢迎提问讨论。
            </p>
            <p>
                除了敲代码，我也喜欢摄影，美食和做饭。呜呜呜。越来越胖...
            </p>
            
        </section>
        <hr>
        <footer>
            <h2>联系方式：</h2>
            <div class="callme">
                <p>
                    <i class="iconfont icon-qq"></i>
                    <span>1218424440</span>
                </p>
                 <p>
                    <i class="iconfont icon-youxiang"></i>
                    <span>1218424440@qq.com</span>
                </p>
            </div>
            <div>
                
            </div>
        </footer>
    </div>
</template>

<style lang='scss' scoped>
  @import '@/assets/css/about/about.scss';
</style>