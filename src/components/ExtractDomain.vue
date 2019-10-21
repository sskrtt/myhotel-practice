<template>
  <div class="extract">
    <p>{{localEmail()}}</p>
      <h1></h1>
  </div>
</template>

<script>
export default {
  name: 'extract',
  data:function(){
    return{
      email:`Y-shuzuki@example.com`
    }
  },
  // computed: {
  //   localEmail:function(){
  //     return this.email.split(`@`)[0].toLowerCase();
  //   }
  // }
  methods: {
    localEmail:function(){
      return this.email.split(`@`)[0].toLowerCase();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
