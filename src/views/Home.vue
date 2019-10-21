<template>
  <div id="introduce">
    <!-- introduceではホテル雲井の画像を切り替え表示＋説明の開閉
    機能的にここまで１セットにしてコンポーネント化しても良いかも -->
      <!--画像を切り替え表示する-->
      <ImageDisplay/> 
      <h1>
        {{hotelName}}
      </h1>
      <p>
        {{introMessage}}
        <AccordionText title="続きを読む" closetitle="元に戻す">
          <div class="AccordionText">
            {{introAddMessage}}
          </div>
        </AccordionText>
      </p>
  </div>
</template>

<script>
import ImageDisplay from '../components/ImageDisplay.vue'
import AccordionText from '../components/AccordionText.vue'

export default {
  name: 'introduce',
  components: {
    ImageDisplay,
    AccordionText
  },
   computed: {//get用
        hotelName(){
            return this.$store.getters.hotelName
        },
        introMessage(){
            return this.$store.getters.introMessage
        },
        introAddMessage(){
            return this.$store.getters.introAddMessage
        },
    },
}
</script>

<style lang="scss">
.introduce{
  background-color: greenyellow
}

</style>
