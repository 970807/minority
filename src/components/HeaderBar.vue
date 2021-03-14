<template>
  <header>
    <a class="left"
       href="https://sspai.com"
       target="_blank">
      <img class="logo"
           src="@/assets/images/home/logo.png"
           alt="">
    </a>
    <div class="right">
      <i class="search-icon iconfont icon-sousuo"></i>
      <i class="menu-icon iconfont icon-caidan"></i>
      <button class="login-btn">登录</button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderBar'
}
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 50px;
  background: #292525;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  .left {
    height: 58%;
    .logo {
      height: 100%;
    }
  }
  .right {
    display: flex;
    align-items: center;
    .search-icon,
    .menu-icon {
      color: #e5e5e5;
      font-size: 20px;
      margin-left: 20px;
    }
    .login-btn {
      padding: 8px 14px;
      border-radius: 25px;
      background: #f5f5f5;
      color: #655e5e;
      border: none;
      margin-left: 20px;
      font-size: 14px;
    }
  }
}
</style>