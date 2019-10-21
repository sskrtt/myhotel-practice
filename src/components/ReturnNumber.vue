<template>
    <div id="returnNumber">
        <!-- <p> urlから読み取った数字は{{$route.params.urlnumber}}です</p> -->
        <p> urlから読み取った数字は{{urlnumber}}です</p>
    </div> 
</template>

<script>

export default {
    name:`returnNumber`,
    props:{
        urlnumber :Number
        // urlnumber :Number
    },
    data(){
        return {
        }
    },
}
</script>

<style >

</style>