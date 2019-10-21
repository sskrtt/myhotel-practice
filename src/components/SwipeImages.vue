予約用のコンポーネントを並べる用のコンポーネント
/reserve でこれを渡すようにする

<template>
    <div id="ReserveHome">
        <swiper id="SwiperOption">
            <swiper-slide><img src="../assets/number_1.jpeg"/> </swiper-slide>
            <swiper-slide><img src="../assets/number_2.jpeg"/></swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div> 
</template>

<script>


export default {
    name:`ReserveHome`,
    data(){
        return {
            swiperOption: {
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },
        }
    },
}
</script>

<style lang="scss">
.swiper-container {
  height: 300px;
  width: 400px;
}
.swiper-slide {
  text-align: center;
  font-size: 38px;
  font-weight: 700;
  background-color: #eee;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-left:1px solid #fff;
}
</style>