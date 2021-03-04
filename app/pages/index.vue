<template>
  <div class="container">
    <ContentItem v-for="item of arr" :key="item.id" :content="item"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          title: '让 promise 在发生异常时 中断代码执行的三种方式',
          id: 1,
          date: '2021/03/04',
          tag: ['Promise']
        },
        {
          title: '『前端优化』—— Vue中避免滥用this去读取data中数据',
          id: 2,
          date: '2021/03/04',
          tag: ['vue', '优化']
        },
        {
          title: '【阮一峰推荐】学习 vue3 源码的利器',
          id: 3,
          date: '2021/03/04',
          tag: ['vue', '源码学习']
        },
        {
          title: '手把手带你入门前端工程化——超详细教程',
          id: 4,
          date: '2021/03/04',
          tag: ['工程化']
        },
        {
          title: '一文带你彻底搞懂JavaScript原型链',
          id: 5,
          date: '2021/03/04',
          tag: ['Javascript']
        },
        {
          title: '教你使用CSS3实现新拟态UI',
          id: 6,
          date: '2021/03/04',
          tag: ['CSS']
        },
        {
          title: '十大惊人的文字动画特效',
          id: 7,
          date: '2021/03/04',
          tag: ['CSS']
        }
      ]
    }
  }
}
</script>

<style lang="scss">

</style>
