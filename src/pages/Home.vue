<template>
  <div class="home">
    <my-header></my-header>
    <my-swiper></my-swiper>
    <my-nav></my-nav>
    <hot-recommend></hot-recommend>
  </div>
</template>
<script>
import myHeader from '@/commonPages/myHeader.vue'
import mySwiper from '@/commonPages/mySwiper.vue'
import myNav from '@/commonPages/myNav.vue'
import hotRecommend from '@/commonPages/hotRecommend.vue'
export default {
  components: {
    myHeader,
    mySwiper,
    myNav,
    hotRecommend
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="scss">
.home{
  font-size: 0.3rem;
}
</style>
