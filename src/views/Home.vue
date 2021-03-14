<template>
  <div class="home-wrap">
    <HeaderBar />
    <HomeSwiper />
    <BannerColumns />
    <MainContent />
    <FooterContent />
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import HomeSwiper from '@/components/HomeSwiper'
import BannerColumns from '@/components/BannerColumns'
import MainContent from '@/components/MainContent'
import FooterContent from '@/components/FooterContent'
export default {
  name: 'Home',
  components: {
    HeaderBar,
    HomeSwiper,
    BannerColumns,
    MainContent,
    FooterContent
  }
}
</script>