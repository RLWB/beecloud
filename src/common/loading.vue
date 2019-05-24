<template>
  <div class="loading" v-if="loading">
      <img src="../assets/img/loading.gif" alt="loading">
  </div>
</template>

<script>
export default {
  props: [
    'loading'
  ]
}

</script>
<style scoped lang="scss">
.loading {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 0.4rem;
      height: 0.4rem;
    }
}
</style>