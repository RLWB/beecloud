<template>
  <ul class="tabbar">
    <li class="tabbar-item" v-for="(item,index) in tabBarIcon" :key="index">
      <img :src="item.url" alt="">
      <p>{{item.val}}</p>
    </li>
  </ul>
</template>
<script>
export default {
  name: "",
  data: () => ({
    tabBarIcon: [
      {
        url: require('../img/home.png'),
        checked: require('../img/homeSelected.png'),
        val: '首页'
      },{
        url: require('../img/classify.png'),
        checked: require('../img/classifySelected.png'),
        val: '分类'
      },{
        url: require('../img/shoppings.png'),
        checked: require('../img/shoppingsSelected.png'),
        val: '购物车'
      },{
        url: require('../img/my.png'),
        checked: require('../img/mySelected.png'),
        val: '我的'
      },
    ]
  })
}
</script>
<style lang="scss" scoped>
.tabbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 0.49rem;
  padding: 0 0.23rem;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: #e1e1e1;
    transform: scale(1, 0.5)
  }
  .tabbar-item {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 0.2rem;
      height: 0.2rem;
      margin-bottom: 0.04rem;
    }
    p {
      font-size: 0.11rem;
      color: #666;
      width: 0.48rem;
      text-align: center;
    }
  }
}
</style>
