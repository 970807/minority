<template>
  <div class="home-wrap">
    <HeaderBar />
    <HomeSwiper />
    <BannerColumns />
    <MainContent />
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import HomeSwiper from '@/components/HomeSwiper'
import BannerColumns from '@/components/BannerColumns'
import MainContent from '@/components/MainContent'
export default {
  name: 'Home',
  components: {
    HeaderBar,
    HomeSwiper,
    BannerColumns,
    MainContent
  }
}
</script>