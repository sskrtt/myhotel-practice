<template>
  <div id="onceDisplay">
    <form>
      <label for="name">氏名：</label>
      <input type="text" id="name" v-model="name"/>
    </form>
    <div v-once> v-once表示:{{name}}</div>
    <div> 普通にv-model:{{name}}</div>
    <div v-cloak> v-cloakでちらつきを防ぐ:{{name}}</div>
  </div>
</template>

<script>
export default {
  name: 'onceDisplay',
  data:function(){
    return{
      name:`first`
    }
  }  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  [v-cloak]{
    display:none;
  }
</style>
