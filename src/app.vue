<template>
	<div id="app">
		<div id="cover"></div>
		<todoheader></todoheader>
		<todo></todo>
		<tabs></tabs>
		<todofooter></todofooter>
	</div>
</template>

<script>
import Todoheader from "./todo/header.vue"
import Todofooter from "./todo/footer.jsx"
import Todo from "./todo/todo.vue"
import Tabs from "./todo/tabs.vue"
	export default {
		data() {
			return {
				text:"abcdefg",   // 标题text
				todoArr:[]		// 存储todo数据的，用于遍历用的数组
			}
		},
		components:{
			Todoheader,
			Todofooter,
			Todo,
			Tabs
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