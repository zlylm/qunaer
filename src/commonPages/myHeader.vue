<template>
    <div class="my-header">
        <div class="left">
            <span class="icon iconfont">&#xe606;</span>
        </div>
        <div class="input">
            <span class="icon iconfont">&#xe607;</span>
            输入城市/景点/游玩主题
        </div>
        <div class="right">
            厦门
            <span class="icon iconfont">&#xe64a;</span>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~mycss/theme.scss";
.my-header{
    background-color:$bgColor;
    width:100%;
    box-sizing: border-box;
    height: 0.88rem;
    display: flex;
    align-items: center;
    color: #fff;
    .left{
        box-sizing: border-box;
        padding:0.2rem;
        .icon{
            font-size: .4rem;
        }
    }
    .input{
        box-sizing: border-box;
        flex: 1;
        background:#fff;
        padding:0.16rem 0.2rem;
        border-radius: 0.06rem;
        color: #e4e7ea;
        font-size: 0.28rem;
    }
    .right{
        padding:0.2rem;
        font-size: 0.28rem;
        .icon{
            font-size: .26rem;
        }
    }
}
</style>
