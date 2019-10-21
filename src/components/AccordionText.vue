綺麗に設計をするのであれば、ここでは引数として文章や画像のリストをもらい、
それを一般的な変数としてアコーディオン表示するのが望ましいが、
練習のため本文をベタがきして表示する。

<template>
 <div class="accordionText" v-cloak>
    <button class="js-accordion--trigger" type="button" :class="{ '_state-open': isOpened }" @click="accordionToggle()" v-if="!isOpened">
      {{this.title}}
    </button>
    <div class="js-accordion--target" :class="{ '_state-open': isOpened }" v-if="isOpened">
      <slot></slot>
    </div>
    <button class="js-accordion--closer" type="button" :class="{ '_state-close': isOpened }" @click="accordionToggle()" v-if="isOpened">
        {{this.closetitle}}
    </button>
  </div>
</template>

<script>
export default {
    name: 'accordionText',
    props:{
        title: { required: true },
        closetitle: { required: true },
    },
    data() {
        return {
        isOpened: false
        };
    },
    methods: {
        accordionToggle: function(){
        this.isOpened = !this.isOpened;
        },
    }  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
