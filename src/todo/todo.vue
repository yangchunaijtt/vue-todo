<template>
	<section class="real-app">
		<input 
			type="text"
			class="add-input"
			autofocus="autofocus"
			placeholder="接下去要做什么"
			@keyup.enter = "addTodo"
		/>
	</section>
</template>
<script>
	export default {
		methods:{
			addTodo(){
				
			}
		}
	}
</script>

<style lang="stylus" scoped>
.real-app{
	width 600px 
	margin 0 auto
	box-shadow 0 0 5px #666
}
.add-input{
	position:relative
	width 100%
	font-size 24px
	font-family inherit
	font-weight 1.4em
	border 0
	outline none
	color inherit
	padding 6px
	border 1px solid #999
	box-shadow inset 0 -1px 5px 0 reba(0,0,0,0.5)
	box-sizeing border-box 
	font-smoothing antialiased
	padding 16px 16px 16px 60px 
	border none
	box-shadow inset 0 -2px 1px  reba(0,0,0,0.5)
}
</style>