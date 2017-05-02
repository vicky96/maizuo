<template>
    <div class='upcoming'>
    	<div class='title'>
    		<div class='title-font'>即将上映</div>
    	</div>
    	<div class='upcoming-content'>
    		<ul class='upcoming-list'>
	            <li class='upcoming-li'>
	                <img src="../assets/upcoming/1.jpg" alt="">  
	                <div class='upcoming-detail'>
	                    <h3 class='detail-left'>速度与激情</h3>
	                    <p class='detail-right'>4月20日上映</p>
	                </div> 
	            </li>
	            <li class='upcoming-li'>
	                <img src="../assets/upcoming/1.jpg" alt="">  
	                <div class='upcoming-detail'>
	                    <h3 class='detail-left'>速度与激情</h3>
	                    <p class='detail-right'>4月20日上映</p>
	                </div> 
	            </li>
	            <li class='upcoming-li'>
	                <img src="../assets/upcoming/1.jpg" alt="">  
	                <div class='upcoming-detail'>
	                    <h3 class='detail-left'>速度与激情</h3>
	                    <p class='detail-right'>4月20日上映</p>
	                </div> 
	            </li>
	        </ul>
	        <div class='upcoming-more'>更多即将上映电影</div>
    	</div>
    	
    </div>
</template>

<script>
    export default {
        name: 'upcoming',
        data () {
            return {

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.title{
		position: relative;
		margin:30px 0;
		border-bottom: 1px solid #a8a8a8;
	}
	.title-font{
		width: 65px;
		height: 20px;
		margin: 0 auto;
		margin-bottom: -10px;
		border-radius: 5px;
		font-size: 10px;
		line-height: 20px;
		text-align: center;
		color: #eee;
		background: #a7a7a7;
	}
	.upcoming-content{
		padding-bottom: 30px;
	}
	.upcoming-list{
		padding-top:18px;
		margin-bottom: 10px;
		width: 100%; 
	}
	.upcoming-li{
		margin: 0 17px 17px 17px;
		box-shadow: 0.5px 0.5px 1px #a8a8a8;
		cursor: pointer;
		background: #fff;
	}
	.upcoming-li img{
		width: 341px;
		display: block;
	}
	.upcoming-detail{
		height: 35px;
	}
	.detail-left{
		display: inline-block;
		width: 58%;
		float: left;
		padding: 10px 0 0 11px;
		font-size: 12px;
		font-weight: normal;
		line-height: 15px;
	}
	.detail-right{
		display: inline-block;
		width: 32%;
		float: right;
		line-height:35px;
		height: 35px;
		font-size: 10px;
		color: rgb(245, 162, 125);
	}
	.upcoming-more{
		width: 160px;
		height: 30px;
		border: 1px solid #aaa;
		border-radius: 15px;
		margin: 10px auto 0;
		text-align: center;
		line-height: 30px;
		font-size: 12px;
		color: #616161;
		cursor: pointer;
	}
</style>
