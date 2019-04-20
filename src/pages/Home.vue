<template>
  <div class="home">
    <my-header></my-header>
    <my-swiper></my-swiper>
    <my-nav></my-nav>
  </div>
</template>
<script>
import myHeader from '@/commonPages/myHeader.vue'
import mySwiper from '@/commonPages/mySwiper.vue'
import myNav from '@/commonPages/myNav.vue'
export default {
  components: {
    myHeader,
    mySwiper,
    myNav
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
