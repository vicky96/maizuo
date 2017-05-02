<template>
    <div>
        <transition name='tran'>
          <div class='side' v-show='change'>
            <ul>
              <li>首页<span class='iconfont icon-you'></span></li>
              <li>影片<span class='iconfont icon-you'></span></li>
              <li>影院<span class='iconfont icon-you'></span></li>
              <li>商场<span class='iconfont icon-you'></span></li>
              <li>我的<span class='iconfont icon-you'></span></li>
              <li>卖座卡<span class='iconfont icon-you'></span></li>
            </ul>
          </div>
        </transition> 
    </div>
   
</template>

<script>
    import {mapState,mapGetters,mapMutations} from 'vuex';
    export default {
        name: 'hello',
        methods:{
          
        },
        computed:{
          ...mapGetters({
            change:'changeShow'
          })
          
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .side{
      width: 265px;
      background: #282828;
      position: fixed;
      display: block;
      top: 50px;
      bottom: 0;
      z-index: 4;
   }
    .side ul{
      width: 265px;
    }
   .side li{
      float: left;
      height: 50px;
      width: 265px;
      padding: 0 16px 1px;
      box-sizing:border-box;
      border-bottom: 1px dotted #333;
      color: #9a9a9a;
      font-size: 14px;
      line-height: 50px;
   }
   .side li .iconfont{
      display: inline-block;
      float: right;
      color: #666;
      font-size: 14px;
   }
   .tran-enter-active,.tran-leave-active{
      transition:all 0.5s ;
   }
   .tran-enter,.tran-leave-to{
      left: -265px;
   }
   .tran-enter-to,.tran-leave{
      left: 0;
   }
</style>
