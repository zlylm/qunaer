<template>
  <div class="home">
    <my-header></my-header>
    <my-swiper></my-swiper>
    <my-nav></my-nav>
    <hot-recommend></hot-recommend>
    <weekend></weekend>
  </div>
</template>
<script>
import myHeader from '@/commonPages/myHeader.vue'
import mySwiper from '@/commonPages/mySwiper.vue'
import myNav from '@/commonPages/myNav.vue'
import hotRecommend from '@/commonPages/hotRecommend.vue'
import weekend from '@/commonPages/weekend.vue'
export default {
  components: {
    myHeader,
    mySwiper,
    myNav,
    hotRecommend,
    weekend
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
