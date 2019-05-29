<template>
  <div class="main">
    <div class="main-con">
      <router-view></router-view>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>
<script>
import TabBar from '../components/TabBar'

export default {
  name: "",
  components: {
    TabBar
  },
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .main-con {
    flex: 1;
    overflow-y: scroll;
  }
}
</style>
