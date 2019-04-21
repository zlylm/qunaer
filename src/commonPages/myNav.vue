<template>
  <div class="my-nav">
    <swiper :options="swiperOption" style="padding-bottom:0.6rem">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="nav-home">
          <div class="nav-item" v-for="(item,index) in page" :key="index">
            <img class="icon" :src="item.iconUrl"/>
            <p class="dec">{{item.name}}</p>
          </div>
        </div>
      </swiper-slide>
      <div v-if="pages.length>1" class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      navList: [
        {name: '景点门票', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'},
        {name: '一日游', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png'},
        {name: '厦门必游', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png'},
        {name: '鼓浪屿', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png'},
        {name: '武夷山', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png'},
        {name: '主题乐园', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png'},
        {name: '动植物园', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png'},
        {name: '展馆展览', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png'},
        {name: '游船观光', iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/89/55083b0f1951f302.png'}
      ]
    }
  },
  computed: {
    pages () {
      let arr = []
      this.navList.forEach((item, index) => {
        let cnt = Math.floor(index / 8)
        if (!arr[cnt]) {
          arr[cnt] = []
        }
        arr[cnt].push(item)
      })
      return arr
    }
  }
}
</script>

<style lang="scss">
@import '~mycss/mixins.scss';
.my-nav{
  background:#fff;
    .nav-home{
        box-sizing: border-box;
        padding-top:0.1rem;
        .nav-item{
            display: inline-block;
            box-sizing: border-box;
            width: 25%;
            padding:0.1rem 0 0;
            float: left;
            text-align: center;
            font-size: 0.28rem;
            .icon{
                width: 1.1rem;
                height: 1.1rem;
            }
            .dec{
                width: 100%;
                margin:0.06rem 0;
                @include ellipsis;
            }
        }
    }
    .swiper-pagination-bullet-active{
        background:#00bcd4!important;
    }
    .swiper-pagination-bullet{
        width:6px;
        height: 6px;
    }
}
</style>
