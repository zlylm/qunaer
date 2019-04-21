<template>
    <div class="hot-recom">
        <div class="top">
            <img class="icon" src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png">
            <span class="dec">本周热门榜单</span>
            <div class="right">
                <span class="dec">全部榜单</span>
                <span class="iconfont">&#xe735;</span>
            </div>
        </div>
        <!--轮播部分-->
        <div class="diy-scroll">
            <ul class="content" :style="{overflowX: isScreen}" @touchstart="showScreen" @touchend="hideScreen">
                <li class="item" v-for="(item,index) of hotList" :key="index">
                    <div class="img-wap">
                        <img class="img" :src="item.imgUrl">
                        <p class="name">{{item.name}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      isScreen: 'hidden',
      hotList: [
        {imgUrl: 'http://img1.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_250x250_d22ecf6b.jpg', name: '鼓浪屿'},
        {imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/97/ea51af995c4d4de85c53855302b2f5af.water.jpg_250x250_a567aa64.jpg', name: '鼓浪屿往返轮渡'},
        {imgUrl: 'http://img1.qunarzz.com/sight/p0/1902/91/919987896bca93ba3.img.jpg_250x250_45800fe4.jpg', name: '厦门园林植物园'},
        {imgUrl: 'http://img1.qunarzz.com/sight/p0/1902/5b/5b034b5e437f01dda3.img.jpg_250x250_81537e4b.jpg', name: '胡里山炮台'},
        {imgUrl: 'http://img1.qunarzz.com/sight/p0/1801/eb/eb3c7437b3f39e10a3.img.jpg_250x250_3a11d904.jpg', name: '钟鼓索道'},
        {imgUrl: 'http://img1.qunarzz.com/sight/p0/1706/e5/e563e6454d1771c2a3.img.jpg_250x250_e487af8b.jpg', name: '厦门方特梦幻王国'}
      ]
    }
  },
  methods: {
    // 展示滚动条
    showScreen () {
      this.isScreen = 'scroll'
    },
    // 隐藏滚动条
    hideScreen () {
      this.isScreen = 'hidden'
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~mycss/mixins.scss';
.hot-recom{
    background:#fff;
    margin-top:.2rem;
    overflow: hidden;
    .top{
        box-sizing: border-box;
        padding:0.24rem;
        .icon{
            width: .3rem;
            height: .3rem;
        }
        .right{
            float: right;
            font-size: .24rem;
            color: #616161;
            .dec{
                position: relative;
                top: -.06rem;
            }
            .iconfont{
                font-size: .4rem;
            }
        }
    }
    .diy-scroll{
        width: 100%;
        height: 2.6rem;
        box-sizing: border-box;
        overflow: hidden;
        .content{
            padding:.06rem .24rem 0.1rem 0.3rem;
            overflow-x: scroll;
            white-space: nowrap;
            .item{
                display: inline-block;
                margin-right:0.16rem;
                width: 2rem;
                .img-wap{
                    width: 2rem;
                    height: 0;
                    padding-bottom: 100%;
                    .img{
                        width: 100%;
                    }
                    .name{
                        text-align: center;
                        color: #212121;
                        font-size: .24rem;
                        margin-top:.1rem;
                        @include ellipsis
                    }
                }
            }
        }
    }
}
</style>
