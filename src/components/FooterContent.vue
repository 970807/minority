<template>
  <footer>
    <img class="logo"
         src="@/assets/images/home/logo.png" />
    <div class="icons">
      <a href="https://weibo.com/sspaime?is_hot=1"
         target="_blank">
        <i class="iconfont icon-weibo"></i>
      </a>
      <a href="javascript:void(0)">
        <i class="iconfont icon-weixin"></i>
      </a>
      <a href="https://twitter.com/sspai_com"
         target="_blank">
        <i class="iconfont icon-twitter"></i>
      </a>
      <a href="https://sspai.com/feed"
         target="_blank">
        <i class="iconfont icon-rss"></i>
      </a>
    </div>
    <div class="link">
      <a href="https://sspai.com/page/client"
         target="_blank">下载App</a>
      <a href="mailto:contact@sspai.com">联系我们</a>
      <a href="https://sspai.com/page/bussiness"
         target="_blank">商务合作</a>
      <a href="https://sspai.com/apply/writing"
         target="_blank">成为作者</a>
      <a href="https://sspai.com/page/support"
         target="_blank">关于我们</a>
      <a href="https://sspai.com/post/37739"
         target="_blank">用户协议</a>
      <a href="https://sspai.com/post/37793"
         target="_blank">常见问题</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterContent'
}
</script>

<style lang="scss" scoped>
footer {
  background: #232222;
  padding-top: 20px;
  text-align: center;
  .logo {
    width: 110px;
    transform: translateX(-5px);
  }
  .icons {
    padding: 22px 105px;
    display: flex;
    justify-content: space-between;
    i {
      color: #fff;
      font-size: 20px;
    }
  }
  .link {
    display: flex;
    flex-wrap: wrap;
    width: 200px;
    padding-bottom: 16px;
    margin: auto;
    a {
      flex-basis: 50%;
      color: #fff;
      font-size: 14px;
      padding: 13px 0;
    }
  }
}
</style>