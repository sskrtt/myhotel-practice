<template>
  <div id="imageDisplay">
    <img class="myimage" v-bind:src= "path" width=200px height=200px>
    <p>
      <input type="button" v-on:click="backimage" value="back" />
      <input type="button" v-on:click="nextimage" value="next" />
    </p>
  </div>
</template>

<script>
export default {
  name: 'imageDisplay',
  data:function(){
    return{
      displayNumber:0,
      path:require('../assets/number_1.jpeg')
    }
  },
  methods: {
    backimage:function(){ 
      this.displayNumber= (this.displayNumber +2 ) % 3;
      this.path=require(`../assets/number_${this.displayNumber+1}.jpeg`)
    },
    nextimage:function(){ 
     this.displayNumber= (this.displayNumber + 1 ) % 3;
     this.path=require(`../assets/number_${this.displayNumber+1}.jpeg`)
    },
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myimage {
  border: 2px #333 solid;
}

</style>
