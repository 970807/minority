<template>
  <div class="swiper-wrap">
    <Swipe ref="swiper"
           :autoplay="3000"
           indicator-color="white"
           :touchable="false">
      <SwipeItem v-for="item in swiperList"
                 :key="item.id">
        <img class="img"
             :src="item.imgUrl"
             alt="swiper_image" />
      </SwipeItem>
    </Swipe>
    <div class="arrow-left-box"
         @click="onPrev">
      <Icon name="arrow-left" />
    </div>
    <div class="arrow-right-box"
         @click="onNext">
      <Icon name="arrow" />
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Icon } from 'vant'
import { getSwiperList } from '@/api'
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperList: []
    }
  },
  components: {
    Swipe,
    SwipeItem,
    Icon
  },
  created () {
    getSwiperList().then(res => {
      this.swiperList = res
    }).catch(err => {
      console.error(err);
    })
  },
  methods: {
    onPrev () {
      this.$refs.swiper.prev()
    },
    onNext () {
      this.$refs.swiper.next()
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-wrap {
  position: relative;
  .img {
    width: 100%;
  }

  .arrow-left-box,
  .arrow-right-box {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: #f1f2f6;
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }

  .arrow-left-box {
    left: 16px;
  }

  .arrow-right-box {
    left: calc(100vw - 16px - 35px);
  }
}
</style>