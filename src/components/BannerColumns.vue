<template>
  <!-- 待完成 -->
  <div class="banner-wrap" v-if="false">
    <Swipe :show-indicators="false">
      <SwipeItem v-for="(item, index) in bannerImgs" :key="index">
        <img class="img" :src="item" alt="banner_image">
      </SwipeItem>
    </Swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant'
export default {
  name: 'BannerColumns',
  data() {
    return {
      bannerImgs: [
        'https://source.acexy.cn/view/Xgkm+rS',
        'https://source.acexy.cn/view/XgknBD7',
        'https://source.acexy.cn/view/XgknDE+',
        'https://source.acexy.cn/view/XgknFHN'
      ]
    }
  },
  components: {
    Swipe,
    SwipeItem
  }
}
</script>

<style scoped>
  .img {
    width: 100%;
  }
</style>