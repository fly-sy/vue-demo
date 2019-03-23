<template>
  <div class="newslist">
    <!-- <router-link :to="'/home/newsinfo?id='+item.id"   v-for="item in newslist" :key="item.id"> -->
    <router-link :to="'/home/newsinfo/'+item.id" v-for="item in newslist" :key="item.id">
        <van-card 
        title="商品标题"
        :thumb="item.img_url"
      >
        <!-- 插槽作用域 -->
          <div slot="price">
            <span>发表时间:{{item.add_time | datefmt}}</span>
          </div>
          <div slot="num">
            <span>点击{{item.click}}次</span>
          </div>
      </van-card>
    </router-link>
  </div>
</template>

<script>
import {Toast} from 'vant'
export default {
  data: () => ({
    newslist: []
  }),
  created(){
    this.getnewslist();
  },
  methods: {
    async getnewslist(){
      const {data:{status,message}} = await this.$http.get('api/getnewslist')
      if(status === 0){
        this.newslist = message
      }else {
        Toast('请求新闻列表数据失败')
      }
    }
  }
};
</script>

<style lang="less">
.newslist {
  .van-card {
    height: 55px;
    overflow: hidden;
    .van-card__content {
      height: 50px;
      bottom: 2px;
    }
  }
}
</style>