<template>
    <div id="payment-info">
        <h1 id="total">宿泊者情報入力</h1>
        <form>
            <p>
                <label for="lastname"> 氏：</label>
                <input type="text" id="lastname" v-model.lazy="lastName"/>
                <label for="firstname"> 名：</label>
                <input type="text" id="firstname" v-model.lazy="firstName"/>            
            </p>
            <p>
                <label for="lastname"> (カナ)：</label>
                <input type="text" id="lastname" v-model.lazy="lastNameKana"/>
                <label for="firstname"> (カナ)：</label>
                <input type="text" id="firstname" v-model.lazy="firstNameKana"/>            
            </p>
            <p>
                <label for="phonePart1">電話番号：</label>    
                <input type="text" id="phonePart1" size="4" v-model.lazy="phonePart1">
                <label for="phonePart2"> - </label>    
                <input type="text" id="phonePart2" size="4" v-model.lazy="phonePart2">
                <label for="phonePart3"> - </label>    
                <input type="text" id="phonenPart3" size="4" v-model.lazy="phonePart3">
            </p>            
        </form>
        <p>test:{{lastName}} {{firstName}}</p>
        <p>testKana:{{lastNameKana}} {{firstNameKana}}</p>
        <p>phone:{{phonePart1}} - {{phonePart2}} - {{phonePart3}}</p>
    </div> 
</template>

<script>

export default {
    name:`payment-info`,
    data(){
        return {
            lastName:'',
            firstName:'',
            lastNameKana:'',
            firstNameKana:'',
            phonePart1:'',
            phonePart2:'',
            phonePart3:'',
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