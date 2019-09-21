<template>
	<div class="header">
		<div class="left"></div>
		<div class="content">{{title}}</div>
		<div class="right"></div>
	</div>
</template>

<script>
	export default{
		name:"",
		props:{
			title:{
				type:String
			}
		},
		data(){
			return{

			}
		},
		computed:{

		},
		methods:{

		}
}
</script>

<style scoped lang="scss">
.header {
	display: flex;
	background: pink;
	height: 3rem;
	.left ,.right{
		flex: 1;
	}
	.content {
		flex: 2;
		// background: ;
		height: 1.75rem;
		text-align: center;
		line-height: 3rem;
		font-size: 14px;
	}
}

</style>