import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.use(Vuex)
const store = new Vuex.Store({
	state:{
		show:false,
		show2:false,
		scrolltop:0,
		url:"http://m.maizuo.com/v4/api/film/now-playing?__t=1492430089535&page=1&count=5"
	},
	mutations:{
		change(state){
			console.log(11)
			// if(state.show){
			// 	state.show=false
			// }else{
			// 	state.show=true
			// }
			state.show = !state.show
		},
		top(state){
			state.show2 = true
		},
		top2(state){
			state.show2 = false
		},
		back(state){
			state.scrolltop = 0
		}
	},
	getters:{
		changeShow:(state)=>{
			return state.show
		},
		top:(state)=>{
			return state.show2
		},
		scrolltop:(state)=>{
			return state.scrolltop
		},
		getContent:(state)=>{
			return state.url
		}
	},
	actions:{
		// getContent({commit}){
		// 	return vue.http.get(url)
		// 		.then((data)=>{
		// 			commit('getContent',data)
		// 		})
		// }
	
		fetchComingSoonLists:function({commit},_this){
			console.log(12342);
			// _this.$http.get('/api/get',_this).then(function(data){
			// 	console.log(data);
			// },function(error){
			// 	console.log(error)
			// })
		  	_this.$http.get('http://m.maizuo.com/v4/api/film/now-playing?__t=1492390652014&page=1&count=5').then(function(data){
		  		console.log(data);
		  	},function(error){
		  		console.log(error);
		  	})
		}
	}
})
export default store