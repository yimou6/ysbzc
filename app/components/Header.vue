<template>
  <div class="header">
    <div class="container">
      <nuxt-link to="/" class="header-icon">
        <i class="iconfont icon-yunduan"></i>
      </nuxt-link>

      <div class="header-nav">
        <nuxt-link to="/">首页</nuxt-link>
        <nuxt-link to="/archives">归档</nuxt-link>
        <nuxt-link to="/links">友链</nuxt-link>
        <nuxt-link to="/about">关于</nuxt-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .header {
    width: 100%;
    height: 3.3rem;
    background-color: #ffffff;
    box-shadow: 0 0.1rem 0.3rem #DDD;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    .container {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .header-icon {
        padding-top: 0.3rem;
        text-decoration: none;
        color: #505050;
        .iconfont {
          font-size: 2rem;
        }
      }
      .header-nav {
        a {
          text-decoration: none;
          color: #505050;
          margin: 0 1rem;
          font-size: 0.95rem;
          position: relative;
          &::after {
            content: "";
            position: absolute;
            top: 0.3rem;
            left: 50%;
            width: 0;
            height: 100%;
            border-bottom: 0.2rem solid #505050;
            transition: all 0.3s;
          }
          &:hover::after {
            left: 0;
            width: 100%;
          }
        }
      }
    }
  }
</style>
