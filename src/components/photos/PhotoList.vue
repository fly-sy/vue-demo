<template>
  <div class="photolist">
    <van-tabs @click="getimages">
      <van-tab
        v-for="item in cates"
        :title="item.title"
        :key="item.id"
      >
      <router-link v-for="img in images"  :key="img.id" :to="'/home/photoinfo/'+img.id" tag="div">
         <img  v-lazy="img.img_url"  />
      </router-link>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data: () => ({
    cates: [],
    images: []
  }),
  created(){
    this.getimgcategory()
    // 默认调用获取全部的图片
    this.getimages(0)
  },
  methods: {
    /**
     * 获取图片分类
     */
    async getimgcategory(){
      const {data:{status,message}} = await this.$http.get('api/getimgcategory')
      if(status === 0){
         message.unshift({id:0,title:'全部'}) 
         this.cates = message
      }else {
        Toast('请求图片分类数据失败')
      }
    },
    /**
     * 根据id获取指定的图片信息
     */
    async getimages(index){
      const {data:{status,message}} = await this.$http.get('api/getimages/'+index)
      if(status === 0){
         this.images = message
      }else {
        Toast('请求图片数据失败')
      }
    }
  }
};
</script>

<style lang="less">
.photolist {
  img {
    width: 100%;
    height: 100%;
  }
}
</style>