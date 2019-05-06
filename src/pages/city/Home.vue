<template>
    <div class="city">
        <Header></Header>
        <Search></Search>
        <List></List>
    </div>
</template>
<script>
import Header from './components/Header.vue'
import Search from './components/Search.vue'
import List from './components/List.vue'
export default {
  components: {
    Header,
    Search,
    List
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>

</style>
