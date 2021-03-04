<template>
  <div class="header">
    <div class="container">
      <nuxt-link to="/" class="header-icon">
        <i class="iconfont icon-yunduan"></i>
      </nuxt-link>

      <div class="header-nav">
        <nuxt-link></nuxt-link>
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
      .header-icon {
        padding-top: 0.3rem;
        text-decoration: none;
        .iconfont {
          font-size: 2rem;
        }
      }
    }
  }
</style>
