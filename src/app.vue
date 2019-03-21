<template>
	<div id="app">
		<div id="cover"></div>
		<todoheader></todoheader>
		<todo></todo>
		<todofooter></todofooter>
	</div>
</template>

<script>
import Todoheader from "./todo/header.vue"
import Todofooter from "./todo/footer.jsx"
import Todo from "./todo/todo.vue"
	export default {
		data() {
			return {
				text:"abcd蒋婷婷杨春"
			}
		},
		components:{
			Todoheader,
			Todofooter,
			Todo
		}
	}
</script>

<style lang="stylus" >
	#app {
		position:absolute
		left 0
		right 0 
		top 0
		bottom 0
	}
	#cover {
		position absolute
		left 0
		top 0
		right 0
		bottom 0
		background-color #999
		opacity .9
		z-index -1
	}
</style>