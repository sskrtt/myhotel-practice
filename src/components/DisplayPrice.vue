<template>
    <div id="display-price">
        <h1 id="total">Total Price : ¥ {{totalPrice}}</h1>
        <p>選択内容は以下の通りです</p>
        <p>大人：{{adultsNumber}} 人</p>
        <p>小人：{{childsNumber}} 人</p>
        <p>滞在：{{displayNights}} 泊 </p>
        <p>選択したお部屋：{{roomType}}</p>
    </div> 
</template>

<script>

export default {
    name:`display-price`,
    data(){
        return {
        }
    },
    computed: {//get用
        totalPrice(){
            return this.$store.getters.calcPrice
        },
        adultsNumber(){
            return this.$store.getters.adultsNumber
        },
        childsNumber(){
            return this.$store.getters.childsNumber
        },
        displayNights(){
            return this.$store.getters.displayNights
        },
        roomType(){
            return this.$store.getters.roomType
        }
    },
    methods:{
    }
}
</script>

<style scoped>
.display-price{
    background-color:#050
}

h1{
    font-size: 20px;
}

</style>