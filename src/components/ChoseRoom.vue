<template>
<body>
    <div id="ChoseRoom">
        <div id="cursor">
            <p>部屋のタイプを選択してください</p>
            <div class="flex">
                <img src="../assets/room_A.jpeg" @click="onClickA" />
                <img src="../assets/room_B.jpeg" @click="onClickB" />
            </div>
            <!-- storeから取ってきて表示しても同じだがやり取り減らすために別変数を使う -->
            <p>選択しているプランは:{{nowRoom}}</p>
            <p>大人一人：¥{{adultUnitPrice}}</p>
            <p>小人一人：¥{{childUnitPrice}}</p>
        </div>
    </div> 
</body>
</template>

<script>
export default {
    name:`ChoseRoom`,
    components: {
    },
    data(){
        return {
            nowRoom:'',
            adultUnitPrice:0,
            childUnitPrice:0            
        }
    },
    computed: {//get用
    },
    methods:{
        onClickA(){
            this.nowRoom='A'
            this.$store.commit('roomIsA')
            this.adultUnitPrice = this.$store.getters.adultUnitPrice
            this.childUnitPrice = this.$store.getters.childtUnitPrice            
        },
        onClickB(){
            this.nowRoom='B'
            this.$store.commit('roomIsB')
            this.adultUnitPrice = this.$store.getters.adultUnitPrice
            this.childUnitPrice = this.$store.getters.childtUnitPrice            
        },                
    }
}
</script>

<style lang="scss" scoped>
.flex{
  padding: 2.5% 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.flex > *{
  width: 30%;
  background: #eee;
  font-size: 20px;
  text-align: center; 
}
.flex > *{
  border: 10px solid #eee;
}

// html,body,a{
//     cursor: none;
// }

</style>