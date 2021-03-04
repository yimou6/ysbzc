<template>
  <div>
    <Header/>
    <div class="default-body">
      <Nuxt />
      <Footer/>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.default-body {
  padding-top: 3.3rem;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
