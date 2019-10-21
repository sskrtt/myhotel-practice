<template>
    <div id="ReserveHome">
        <Hooper style="height: 400px">
            <Slide><PeopleNumber/> </Slide>
            <Slide><StayNights/> </Slide>
            <Slide><ChoseRoom/> </Slide>
            <Slide><PaymentInfo/> </Slide>
            <!-- 今更だが、ここまでの入力はあくまで一時的に持っておいて、この次の確定ページを経てdataを書き換えた方が良い？ -->
            <Slide><DisplayPrice/> </Slide>
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
            <hooper-pagination slot="hooper-addons"></hooper-pagination>
            <hooper-progress slot="hooper-addons"></hooper-progress>
        </Hooper>
        <DisplayPrice/>
    </div>
</template>
<script>
import {Hooper,
        Slide,
        Progress as HooperProgress,
        Pagination as HooperPagination,
        Navigation as HooperNavigation}from 'hooper'        
import 'hooper/dist/hooper.css'
import PeopleNumber from '../components/PeopleNumber.vue'
import DisplayPrice from '../components/DisplayPrice.vue'
import StayNights from '../components/StayNights.vue'
import ChoseRoom from '../components/ChoseRoom.vue'
import PaymentInfo from '../components/PaymentInfo.vue'

export default {
    name:`ReserveHome`,
    components: {
        PeopleNumber,
        DisplayPrice,
        StayNights,
        ChoseRoom,
        PaymentInfo,
        Hooper,
        Slide,
        HooperProgress,
        HooperPagination,
        HooperNavigation        
    },
    data(){
        return {
        }
    },
    computed: {        
    }
}
</script>

<style lang="scss">
.hooper-slide {
    background-color: #eee;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    // color: #fff;
    border: 2px solid #fff;
    font-size: 20px;
    border-radius: 10px;
  }
</style>