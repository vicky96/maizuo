<template>
       <div class="hello">
          <div class='head-left' @click='changeShow'>
            <span class='left-icon iconfont icon-sanhenghover'></span>
            <p class='left-font'>卖座电影</p>
          </div>
          <div class='head-right'>
            <div class='place'>
              <p class='right-font'>成都</p>
              <span class='right-icon1 iconfont icon-xiangxia'></span>
            </div>
            <span class='right-icon2 iconfont icon-user'></span>
          </div>
        </div> 
</template>

<script>
    import {mapState,mapGetters,mapMutations} from 'vuex';
    export default {
        name: 'hello',
        data () {
            return {
              
            }
        },
        methods:{
          changeShow(){
            this.$store.commit('change')
          }
        },
        computed:{

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .hello{
      height: 50px;
      width: 100%;
      background: #282828;
      line-height: 50px;
      z-index: 500;
      position: fixed;
      top: 0;
      left: 0;
   }
   .head-left{
      float: left;
      width: 145px;
   }
   .left-icon{
      width: 47px;
      height: 50px;
      display: inline-block;
      border-right: 1px solid #222;
      color: #999;
      float: left;
      text-align: center;
      font-size: 16px;
   }
   .left-font{
      color: #fff;
      font-size: 14px;
      display: inline-block;
      padding: 0 14px;
      width: 56px;
      float: left;
   }
   .head-right{
      float: right;
      width: 105px;
      color: #999;
   }
   .place{
      height: 51px;
      padding: 0 6px;
      font-size: 14px;
      float: left;
      display: inline-block;
      width: 45px;
   }
   .right-font{
    display: inline-block;
   }
   .right-icon1{
      display: inline-block;
      font-size: 12px;
   }
   .right-icon2{
      float:right;
      display: inline-block;
      width: 48px;
      text-align: center;
   }
</style>
