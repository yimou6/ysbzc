<template>
  <div class="layout">
    <Aside/>
    <div class="layout-content">
      <Header/>
      <router-view class="container" v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import Header from './header.vue'
import Aside from './aside.vue'
export default {
  name: 'Layout',
  components: { Header, Aside }
}
</script>

<style scoped lang="scss">
.layout {
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  .layout-content {
    width: 100%;
  }
  .container {
    padding: 10px;
  }
}
.fade-enter-active {
  transition: all .3s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter-from {
  transform: translateX(20px);
  opacity: 0;
}
</style>
