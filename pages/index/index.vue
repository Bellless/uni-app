<template>
	<view class="container">
		<view class="intro">
			<view class="intro-a">
				姓名:<input type="text" v-model="form.name" />
				性别:<input type="text" v-model="form.sex" />
			</view>
			<button type="default" @click="fnSubmit">注册</button>
		</view>
		<view class="" v-for="(item,index) in list" :key="index">
			<text class="name" v-text="item.name"></text>
			<text class="name" v-text="item.sex"></text>
			<text @click="fnDelete(item._id)" class="del">删除</text>
			<text @click="fnUpdata(item._id)" class="del">更新</text>
		</view>
		<navigator url="../one/one" open-type="navigate">
			    <!-- selectable 文本是否可以复制 -->
				<!-- <text selectable="false">跳转到Vue动态点击跳转案例</text> -->
				<button type="default" open-type="feedback">跳转到另一个页面</button>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: "",
					sex: "",
				},
				list: []
			}
		},
		methods: {
			// 注册账号
			fnSubmit() {
				uniCloud.callFunction({
					name: "addUser",
					data: this.form,
					success: (e) => {
						this.fnGetUser();
					}
				})
			},
			// 获取账号
			fnGetUser() {
				uniCloud.callFunction({
					name: "getUser",
					success: (e) => {
						console.log(e.result);
						this.list = e.result.data;
					}
				})
			},
			// 删除某条数据
			fnDelete(_id) {
				uniCloud.callFunction({
					name: "deleteUser",
					data: {
						"id": _id,
					},
					success: (e) => {
						this.fnGetUser();
					}
				})
			},
			// 更新数据
			fnUpdata(_id) {
				uniCloud.callFunction({
					name: "updataUser",
					data: {
						"id": _id,
					},
					success: (e) => {
						console.log(e)
						this.fnGetUser();
					}
				})
			},
			// 指定条件获取数据
			fnGetWhere() {
				// 按条件获取
				uni.callFunction({
					name: "getUserWhere",
					success: (e) => {
						console.log(e.result);
						this.list = e.result.data;
					}
				})
			}
		},
		created() {
			// this.fnGetUser();
			this.fnGetWhere();
		}
	}
</script>

<style>
		
	.intro-a{
		width: 100%;
		background-color: red;
		display: flex;
		justify-content: space-around;
	}
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}

	.del {
		margin-left: 50px;
	}

	.name {
		margin-left: 10px;
	}
</style>
