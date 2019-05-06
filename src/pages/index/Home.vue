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
import myHeader from './components/Header.vue'
import mySwiper from './components/Swiper.vue'
import myNav from './components/Nav.vue'
import hotRecommend from './components/hotRecommend.vue'
import weekend from './components/Weekend.vue'
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
