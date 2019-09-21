<template>

		<van-popup v-model="show" :style="{ height: '40%',width: '60%' }" class="pop-box">
			<div class="pop-title">
				生产线
			</div>
			<div class="pop-content">
				<van-cell v-for="index in 10" :key="index">
						<van-radio :name='index'  class="popup-radio" >单选框 {{index}}</van-radio>
				</van-cell>
			</div>
			<div class="confirm-box">
				<van-button type="default">取消</van-button>
				<van-button type="default">确认</van-button>
			</div>	
		</van-popup>

		
	
</template>

<script>
	export default{
		name:"",
		props:[
			'show'
		],

		data(){
			return{
				show : false
			}
		},

		components:{

		},

		computed:{

		},

		methods:{

		}
}
</script>

<style scoped lang='scss'>
.pop-box {
	
	.pop-title {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1000;
	}
	.pop-content {

	}
	.confirm-box {
		position: fixed;
		right: 0;
		bottom: 0;
		z-index: 1000;
	}
}
</style>