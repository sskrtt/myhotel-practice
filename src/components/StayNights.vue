<template>
    <div id="StayNights">
        <p>滞在期間を選択してください</p>
        <vue-daterange-picker
            dates-format="YYYY/MM/DD" 
            format="YYYY/MM/DD" 
            titleFormat="YYYY年 M月" 
            :start-date="tomorrow" 
            :end-date="oneYearLater" 
            start-place-holder="" 
            end-place-holder="" 
            @get-dates="datesObject"
        />
        <!-- ここから拝借 https://qiita.com/maunamoana/items/5444166b11e6daaffd08 -->

        <p>滞在は {{displayNights}} 泊 {{displayNights+1}}日です。</p>
    </div> 
</template>

<script>
import moment from 'moment'
import VueDaterangePicker from 'vue-daterange-picker'

export default {
    name:`StayNights`,
    components: {
        VueDaterangePicker
    },
    data(){
        return {
            oneYearLater: moment().add(365, 'days').format('YYYY/MM/DD'),
            tomorrow: moment().add(1, 'days').format('YYYY/MM/DD'),
            nithts:0
        }
    },
    computed: {//get用
        displayNights(){
            return this.$store.getters.displayNights
        },

    },
    methods:{
            datesObject: function(receiveDate) {
                // console.log(typeof receiveDate.startDate)
                this.nights = Number(receiveDate.endDate.substr(8,2))
                    -Number(receiveDate.startDate.substr(8,2));                    
                this.$store.commit('setNights',this.nights)
        }
    }
}
</script>

<style >

</style>