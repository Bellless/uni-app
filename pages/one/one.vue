<template>
	<view>
		<view class="">
			<!-- uni-app中的三元运算符使用[] -->
			<text :class="[ab?'red':'green']">动态字体</text>
			<text :style="{fontSize:fontSize+'px'}">动态字体</text>
		</view>
		<view v-for="(item,index) in navs" class="base" :class="[navindex==index?'base':'active']" :key="index" @click="fnChange(index)"
		 :id="'nav_'+index">
			{{item}}
		</view>
	</view>
</template>

<script>
	var _self;
	export default {
		data() {
			return {
				navindex: 0,
				navs: [
					"新闻", "游戏", "娱乐"
				],
				fontSize: 20,
				ab: false,
			}
		},
		// 页面加载的时候执行的方法
		onLoad(){
			_self = this;
			console.log("aa")
			setTimeout(function() {
				_self.fontSize = 50;
			}, 3000)
		},
		methods: {
			// e 整个Vue对象
			// fnChange(e){
			// 	// currentTarget 获取标签的某个元素
				// var aid=e.currentTarget.id;
			// 	console.log(aid)
			// 	console.log(e.target)
			// }
			fnChange(id) {
				_self.navindex = id;
				console.log(id)
			}
		}
	}
</script>

<style>
	.red {
		color: red;
	}

	.green {
		color: green;
	}

	.uni {
		display: flex;
		justify-content: space-between;

	}

	.base {
		color: black;
	}

	,
	.active {
		color: red;
	}
</style>
