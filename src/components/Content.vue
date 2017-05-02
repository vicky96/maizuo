<template>
    <div>
        <ul class='content'>
            <li class='content-li' v-for='i in data'>
                <img src="../assets/content/1.jpg" alt="">  
                <div class='detail'>
                    <div class='detail-left'>
                        <h3>{{i.data.films.name}}</h3>
                        <p>62家影院上映666666</p>
                    </div>
                    <p class='detail-right'>9.6</p>
                </div> 
            </li>
           <!--  <li class='content-li'>
                <img src="../assets/content/1.jpg" alt="">  
                <div class='detail'>
                    <div class='detail-left'>
                        <h3>速度与激情</h3>
                        <p>62家影院上映666666</p>
                    </div>
                    <p class='detail-right'>9.6</p>
                </div> 
            </li>
            <li class='content-li'>
                <img src="../assets/content/1.jpg" alt="">  
                <div class='detail'>
                    <div class='detail-left'>
                        <h3>速度与激情</h3>
                        <p>62家影院上映666666</p>
                    </div>
                    <p class='detail-right'>9.6</p>
                </div> 
            </li>
            <li class='content-li'>
                <img src="../assets/content/1.jpg" alt="">  
                <div class='detail'>
                    <div class='detail-left'>
                        <h3>速度与激情</h3>
                        <p>62家影院上映666666</p>
                    </div>
                    <p class='detail-right'>9.6</p>
                </div> 
            </li>
            <li class='content-li'>
                <img src="../assets/content/1.jpg" alt="">  
                <div class='detail'>
                    <div class='detail-left'>
                        <h3>速度与激情</h3>
                        <p>62家影院上映666666</p>
                    </div>
                    <p class='detail-right'>9.6</p>
                </div> 
            </li> -->
        </ul>
        <div class='content-more'>更多热映电影</div>
    </div>
    
</template>

<script>
    export default {
        name: 'content',
        beforeCreate(){
            this.$store.dispatch('getContent',data)
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .content{
        width: 100%;
        margin: 18px 0 10px;
   }
   .content-li{
        height: 242px;
        width: 341px;
        margin: 0 17px 17px 17px;
        box-shadow: 0.5px 0.5px 1px #a8a8a8;
   }
   .content-li img{
        width: 341px;
        height: 191.813px;
        display: block;
   }
   .detail{
        height: 50px;
        background: #fff;
   }
   .detail-left h3{
        font-size: 12px;
        line-height: 15px;
        font-weight: normal;
   }
   .detail-left p{
        font-size: 8px;
        color: #9a9a9a;
        line-height: 15px;
   }
   .detail-left{
        width: 84%;
        display: inline-block;
        float: left;
        height: 50px;
        padding: 13px 0 0 15px;
        box-sizing:border-box;
   }
   .detail-right{ 
        display:inline-block;
        float: right;
        color: #f78360;
        line-height: 50px;
        font-size: 18px;
        height: 50px;
        margin-right: 15px;
        font-family: 'Microsoft YaHei', Tahoma, Helvetica, Arial, sans-serif;
   }
   .content-more{
        width: 160px;
        height: 30px;
        border:1px solid #aaa;
        border-radius: 15px;
        margin: 10px auto 30px;
        text-align: center;
        line-height: 30px;
        font-size: 12px;
        color: #616161;
        cursor: pointer;
   }
</style>
