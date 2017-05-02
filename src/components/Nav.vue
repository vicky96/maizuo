<template>
    <swiper :option="swiperOption" ref="mySwiper">
        <swiper-slide class='nav'><img src="../assets/nav/1.jpg" alt=""></swiper-slide>
        <swiper-slide class='nav'><img src="../assets/nav/1.jpg" alt=""></swiper-slide>
         <swiper-slide class='nav'><img src="../assets/nav/1.jpg" alt=""></swiper-slide>
    </swiper>
</template>

<script>
    import Vue from 'vue'
    import VueAwesomeSwiper from 'vue-awesome-swiper'
    Vue.use(VueAwesomeSwiper)
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: 'nav',
        components: {
            swiper,
            swiperSlide
        },
        data () {
            return {
                swiperOption: {
                      // swiper configs 所有的配置同swiper官方api配置
                      autoplay: 2000,
                      loop:true
                }
            }
        },
        computed: {
          swiper() {
            return this.$refs.mySwiper.swiper
          }
        }
    }
   
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.nav{
		width: 100%;
		height: 211px;
		padding-top:50px; 
	}
	.nav img{
		height: 211px;
	}
</style>
