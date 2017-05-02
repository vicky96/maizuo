<template>
    <transition name='scroll'>
       <div class='top' v-show='top' @click='backTop'>
           <span class='iconfont icon-fanhuidingbu'></span>
       </div>
    </transition>
</template>

<script>
    import {mapState,mapGetters,mapMutations} from 'vuex';
    export default {
        name: 'top',
        methods:{
          backTop(){
            var scroll_box = document.getElementById('scroll_box')
            scroll_box.scrollTop=0
          }
        },
        computed:{
          ...mapGetters({
            top:'top'
          })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .top{
        background: rgba(0,0,0,0.7);
        width: 48px;
        height: 48px;
        line-height: 48px;
        color: #fff;
        text-align: center;
        border-radius: 50%;
        overflow: hidden;
        cursor: pointer;
        position: absolute;
        right: 20px;
        bottom: 20px;
    }
    /*.scroll-enter,.scroll-leave-to{
      bottom: -48px;
    }
    .scroll-enter-active,.scroll-leave-active{
      transition:bottom 1s; 
    }*/
    .scroll-enter-active,.scroll-leave-active{
      transition:all 0.5s ;
    }
    .scroll-enter,.scroll-leave-to{
        bottom: -48px;
    }
       .scroll-enter-to,.scroll-leave{
          bottom: 20px;
       }
</style>
