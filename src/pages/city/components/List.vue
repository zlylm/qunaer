<template>
    <div class="city-list">
      <div class="city-title">{{this.city}}</div>
      <ul class="hotCity">
        <li
          class="list"
          v-for="(item,index) in listCity"
          :key="index"
          @click="cityChange(item)"
          >{{item}}</li>
      </ul>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      listCity: ['北京', '上海', '厦门', '深圳', '香格里拉']
    }
  },
  methods: {
    cityChange (city) {
      this.$store.commit('upCity', city)
      this.$router.push('/')
    }
  },
  computed: {
    ...mapState(['city'])
  }
}
</script>
<style lang="scss" scoped>
@import '~mycss/theme.scss';
.city-list{
    position: absolute;
    top: 1.48rem;
    left: 0;
    right: 0;
    bottom: 0;
    background:#f5f5f5;
    .city-title{
      padding:0.24rem 0.3rem;
      font-size: 0.24rem;
    }
    .hotCity{
      display: flex;
      flex-wrap: wrap;
      padding-right:0.2rem;
      .list{
        width: 30%;
        font-size: 0.28rem;
        text-align: center;
        padding:0.2rem 0;
        border:solid 1px $bgColor;
        border-radius: 0.04rem;
        margin-left: 0.2rem;
        margin-bottom: 0.2rem;
      }
    }
}
</style>
