<template>
    <div class="search">
        <input class="keyword" type="text" placeholder="输入文字或拼音">
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
@import '~mycss/theme.scss';
.search{
    background: $bgColor;
    padding:0 0.4rem 0.2rem 0.4rem;
    .keyword{
        display: block;
        width: 100%;
        height: 0.6rem;
        text-align: center;
        font-size: 0.28rem;
        outline: none;
        border-radius: 0.06rem;
    }
}
</style>
