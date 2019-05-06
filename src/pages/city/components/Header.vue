<template>
    <div class="header">
        <router-link to="/">
            <div class="prev">
                <span class="icon iconfont">&#xe606;</span>
            </div>
        </router-link>
        城市选择
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
@import '~mycss/theme.scss';
.header{
    height: .68rem;
    line-height: .68rem;
    font-size: .32rem;
    background-color: $bgColor;
    color: $whiteColor;
    text-align: center;
    position: relative;
    .prev{
        position: absolute;
        width: .68rem;
        height: 100%;
        cursor: pointer;
        .icon{
            font-size: 0.4rem;
            color:$whiteColor;
        }
    }
}
</style>
