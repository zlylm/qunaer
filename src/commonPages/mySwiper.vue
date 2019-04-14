<template>
    <div class="swiper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of imgList" :key="item.id">
                <img class="img" :src="item.imgUrl"/>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
  name: 'mySwiper',
  data () {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      imgList: [
        {
          id: '001',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/81743f7e8589990dd413cccadf315f8b.jpg_750x200_6f3f5164.jpg'
        },
        {
          id: '002',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg'
        },
        {
          id: '003',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/ed5f4115226306e48e6fad106a038afe.jpg_750x200_64df48d6.jpg'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.swiper{
    overflow: hidden;
    width: 100%;
    height:0;
    padding-bottom: 27%;
    .img{
        width: 100%;
    }
}
</style>
