<template>
  <div class="home">
    <my-header></my-header>
    <my-swiper></my-swiper>
  </div>
</template>
<script>
import myHeader from '@/commonPages/myHeader.vue'
import mySwiper from '@/commonPages/mySwiper.vue'
export default {
  components: {
    myHeader,
    mySwiper
  },
  data () {
    return {
    }
  }
}
</script>
<style>
.home{
  font-size: 0.3rem;
}
</style>
