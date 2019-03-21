<template>
  <div class="home">
    <!-- 轮播图 -->
    <div style="width: 375px; overflow: hidden">
      <van-swipe
        :autoplay="3000"
        indicator-color="white"
        class="my-swiper"
      >
        <van-swipe-item
          class="item"
          v-for="item in lunbotulist"
          :key="item.img"
        >
          <img
            :src="item.img"
            alt=""
          >
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 九宫格 -->
    <gird></gird>
  </div>
</template>

<script>
import { Toast } from "vant";
import Gird from "../subcomponents/Gird";
export default {
  data: () => ({
    lunbotulist: []
  }),
  created() {
    this.getlunbo();
  },
  methods: {
    getlunbo() {
      this.$http.get("api/getlunbo").then(result => {
        const {
          data: { status, message }
        } = result;
        if (status === 0) {
          this.lunbotulist = message;
        } else {
          Toast("获取轮播图数据失败");
        }
      });
    }
  },
  components: {
    Gird
  }
};
</script>

<style lang="less">
.home {
  .my-swiper {
    height: 200px;
    .item {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>