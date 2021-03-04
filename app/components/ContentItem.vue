<template>
  <div class="content-item">
    <div class="content-item-title">{{ content.title }}</div>
    <div class="content-item-tag">
      <span class="tag" v-for="tag of content.tag" :key="tag">{{ tag }}</span>
    </div>
    <div class="content-item-date">{{ content.date }}</div>
  </div>
</template>

<script>
export default {
  name: 'ContentItem',
  props: {
    content: {
      type: Object,
      default: function () {
        return {
          title: '---',
          tag: ['---'],
          date: '----/--/--'
        }
      }
    }
  }
}
</script>

<style lang="scss">
  .content-item {
    background-color: #ffffff;
    border: 0.1rem solid #eeeeee;
    border-radius: 0.25rem;
    margin: 1rem auto;
    padding: 1rem;
    position: relative;
    &-title {
      font-size: 1rem;
      font-weight: bold;
      color: #404040;
      cursor: pointer;
      &:hover {
        color: #333333;
      }
    }
    &-tag {
      margin: 0.3rem auto;
      .tag {
        font-size: 0.6rem;
        color: #ffffff;
        background-color: #333333;
        padding: 0.1rem 0.8rem 0.22rem 0.8rem;
        border-right: 0.2rem;
      }
      .tag + .tag {
        margin-left: 0.5rem;
      }
    }
    &-date {
      font-size: 0.6rem;
      color: #505050;
    }
  }
</style>
