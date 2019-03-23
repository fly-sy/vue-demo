<template>
  <div class="app">
    <van-nav-bar
      title="长沙黑马-14期"
      left-text="返回"
      left-arrow
      fixed
      :z-index=999
    />

    <!-- <transition>
      <router-view />
    </transition> -->

    <transition enter-active-class="fadeInRight" leave-active-class="fadeOutLeft">
      <router-view class="animated"/>
    </transition>

    <van-tabbar v-model="active">
      <van-tabbar-item
        icon="wap-home"
        to="/home"
      >首页</van-tabbar-item>
      <van-tabbar-item
        icon="contact"
        to="/meber"
      >会员</van-tabbar-item>
      <van-tabbar-item
        icon="shopping-cart-o"
        info="20"
        to="/cart"
      >购物车</van-tabbar-item>
      <van-tabbar-item
        icon="search"
        to="/search"
      >搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: 0
  })
};
</script>

<style lang="less">
.app {
  padding-bottom: 50px;
  padding-top: 46px;
  overflow-x: hidden;
  .v-leave-to {
    position: absolute;
  }
  
  // .v-enter {
  //   opacity: 0;
  //   transform: translateX(100%);
  // }
  // .v-leave-to {
  //   transform: translateX(-100%);
  //   position: absolute;
  //   // left: -200%;
  // }

  // .v-enter-active,
  // .v-leave-active {
  //   transition: all 0.4s ease;
  // }
}
</style>
