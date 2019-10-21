<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> | 
      <router-link to="/reserve">予約フォーム</router-link> | 
      <router-link to="/100">100へのリンク</router-link>
    </div>
    <router-view/>
    <AboutUs/>
  </div>
</template>

<script>
import AboutUs from './components/AboutUs.vue'

export default {
  name: 'app',
  components:{
    AboutUs
  }
}
</script>

<style lang="scss">
#app {
    text-align: center;
    font-size: 12px;
  }
</style>
