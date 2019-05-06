<template>
  <div class="weekend">
    <div class="title">
        <img class="icon" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
        周末去哪儿
    </div>
    <!--列表-->
    <div class="list-home" v-for="(item,index) in dataList" :key="index">
        <div class="img-home">
            <img :src="item.imgUrl" alt="">
        </div>
        <div class="bottom-home">
            <div class="list-title">{{item.title}}</div>
            <p class="list-dec">{{item.dec}}</p>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dataList: [
        {title: '泉心泉意', dec: '这个冬天不干燥，养生养颜休闲一举两得，这里有厦门独特的温泉渡假旅游区', imgUrl: 'http://img1.qunarzz.com/sight/source/1511/8f/bf3a40e4afcf29.jpg_r_640x214_90225212.jpg'},
        {title: '厦门必打卡', dec: '来厦门感受一把小资情调', imgUrl: 'http://img1.qunarzz.com/sight/source/1711/15/1cdd5ee885686b.jpg_r_640x214_46768064.jpg'},
        {title: '厦门娱乐万岁', dec: '谁说来厦门就要去鼓浪屿？其实不登鼓浪屿也有新玩法，去探寻你不知道的海底世界', imgUrl: 'http://img1.qunarzz.com/sight/source/1505/81/b178edc1197700.jpg_r_640x214_9acee897.jpg'}
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~mycss/mixins.scss';
.weekend{
    margin-bottom: 2rem;
    .title{
        padding:0.24rem;
        .icon{
            width: .3rem;
            height: .3rem;
        }
    }
    .list-home{
        background-color: #fff;
        margin-bottom: .1rem;
        .img-home{
            overflow: hidden;
            height: 0;
            padding-bottom: 37.4375%;
            img{
                width: 100%;
            }
        }
        .bottom-home{
            padding:.14rem .2rem .2rem .2rem;
            .list-title{
                font-size: .28rem;
                line-height: .48rem;
                @include ellipsis;
            }
            .list-dec{
                color: #616161;
                font-size: .24rem;
                line-height: .42rem;
                @include ellipsis;
            }
        }
    }
}
</style>
