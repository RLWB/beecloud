<template>
  <div class="nav-bar">
      <img v-if="!back" :src="src" :class="[{'dark': dark()}]" alt="">
      {{title}}
  </div>
</template>

<script>
export default {
    data() {
        return {
            src: require('../assets/img/ic_back.png')
        }
    },
    props: [
       'title',
       'back'
    ],
    methods: {
        dark() {
            return 'dark'
        }
    }

}

</script>
<style scoped lang="scss">
.nav-bar {
    position: sticky;
    top: 0;
    z-index: 9;
    background: #fff;
    height: 0.435rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.18rem;
    color: #030303;
    img {
        width: 0.18rem;
        height: 0.18rem;
        position: absolute;
        left: 0.14rem;
        top: 50%;
        margin-top: -0.09rem;
    }
    &::after {
        position: absolute;
        content: "";
        bottom: 0;
        left: 0;
        height: 1px;
        width: 100%;
        background: #e4e4e4;
        transform: scale(1, 0.5);
    }
}
</style>
