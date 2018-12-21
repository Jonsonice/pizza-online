<template>
	<div class="row">
		<div id="home" class="col-sm-12 text-center">
			<div class="background">
				<h1>欢迎大家品尝pizza</h1>
				<h2>这里有你非常喜欢的pizza！</h2>
				<button @click="goToMenu" class="btn btn-success">Let't order!</button>
			</div>
		</div>
<!-- 		<button @click="goToUp" class="btn btn-success">返回上一页</button>
		<button @click="goToAbout" class="btn btn-success">About</button>
		<button @click="goToLogin" class="btn btn-success">Login</button> -->
	</div>
</template>
<script>
	export default{
		methods:{
			goToUp(){
				//跳转到上一次浏览的页面
				this.$router.go(-1)
			},
			goToMenu(){
				//跳转到指定地址
				this.$router.replace('/menu')
			},
			goToAbout(){
				//指定跳转路由的名字下
				this.$router.replace({name:'aboutlink'})
			},
			goToLogin(){
				// 通过push进行跳转
				// this.$router.push({name:'loginlink'})
				this.$router.push('/login')
			}
		}
	}
</script>
<style>
	#home{
		background: url('../../src/assets/pizza.jpg') no-repeat;
		background-size: 100% 100%;
		height: 85vh;
		padding: 10%;
	}
	h1,h2{
		margin: 6%;
	}
	.background{
		background: #eee;
		opacity: 0.8;
		max-width: 70vw;
		margin: 0 auto;
		padding: 20px 0;
	}
</style>