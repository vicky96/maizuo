<template>
    <div id="app">
        <transition name='fade'>
          <div class='shadow' v-show='show'></div>
        </transition>
        <hello></hello>
        <div id='scroll_box' style='height:100%;overflow:auto'>
          <div id='scroll1'>
            <nav1></nav1>
            <content1></content1>
            <upcoming></upcoming>
          </div>
        </div>
        <side></side>
        
        <top></top>
           
    </div>
</template>

<script>
    import Hello from '@/components/Hello';
    import Nav from '@/components/Nav';
    import Content from '@/components/Content';
    import Upcoming from '@/components/Upcoming';
    import Side from '@/components/Side';
    import Top from '@/components/Top';
    import {mapGetters} from 'vuex'
    
   
    
    export default {
        name: 'app',
        components:{
            hello:Hello,
            nav1:Nav,
            content1:Content,
            upcoming:Upcoming,
            side:Side,
            top:Top
        },
        computed:{
          ...mapGetters({
            show:'changeShow',
            scrolltop:'scrolltop'
          })
        },
        mounted(){
          var scroll_box = document.getElementById('scroll_box')
          console.log(scroll_box)
          var self = this
           scroll_box.onscroll=function(){
            console.log(scroll_box.scrollTop)
            if(scroll_box.scrollTop>=700){
              self.$store.commit('top')
            }else{
              self.$store.commit('top2')
            }
          }
          this.$store.dispatch("fetchComingSoonLists",this)
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;
        color: #2c3e50;
        margin-top: 60px;*/
        height: 100%;
        overflow: hidden;
    }
    .shadow{
      width: 100%;
      position: fixed;
      top: 50px;
      bottom: 0;
      background: rgba(0,0,0,0.5);
      z-index: 3;
    }
    .fade-enter,.fade-leave-to{
      opacity: 0;
    }
    .fade-enter-active,.fade-leave-active{
      transition:opacity 1s;
    }
    #scroll1{
      background: #ebebeb;
    }
    
</style>

