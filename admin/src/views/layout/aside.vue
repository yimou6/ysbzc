<template>
  <div class="aside">
    <el-menu
        background-color="#333333"
        text-color="#f5f5f5"
        active-text-color="#ffffff"
        :default-active="activeIndex"
        router>
      <el-menu-item index="/home">首页</el-menu-item>
      <el-menu-item index="/write">新增</el-menu-item>
      <el-menu-item index="/article">管理</el-menu-item>
      <el-menu-item index="/tag">标签</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Aside',
  setup() {
    const activeIndex = ref('/home')

    return {
      activeIndex
    }
  }
}
</script>

<style scoped lang="scss">
.aside {
  background-color: #333333;
  height: 100%;
  width: 220px;
}
</style>
