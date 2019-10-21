<template>
    <div id="PeopleNumber">
        <p>{{message}}</p>
        <p>
            <input type="button" @click="minusAdult" value = -1 />
            大人:{{adultsNumber}}
            <input type="button" @click="plusAdult" value = +1 />
        </p>
        <p>
            <input type="button" @click="minusChild" value = -1 />
            小人:{{childsNumber}}
            <input type="button" @click="plusChild" value = +1 />
        </p>
    </div> 
</template>

<script>

export default {
    name:`PeopleNumber`,
    data(){
        return {
        }
    },
    computed: {//get用
        message(){
            return this.$store.getters.message
        },
        adultsNumber(){
            return this.$store.getters.adultsNumber
        },
        childsNumber(){
            return this.$store.getters.childsNumber
        }
    },
    methods:{
        plusAdult(){
            this.$store.commit('plusAdult')
        },
        minusAdult(){
            this.$store.commit('minusAdult')
        },
        plusChild(){
            this.$store.commit('plusChild')
        },
        minusChild(){
            this.$store.commit('minusChild')
        }       
    }
}
</script>

<style >

</style>