<template>
	<div class="container">
		<Header :title="title"/>
		<div class="qc-box">
			<div class="search-box">
				<van-search placeholder="查询PO" v-model="value" show-action
				@search="onSearch"
				>
				<div slot="action" @click="onSearch">搜索</div>
				</van-search>
			</div>
			<div class="select-info-box">
				<van-cell
				title="生产线"
				is-link
				arrow-direction="down"
				:border="borderShow"
				value="请选择"
				@click="showPopup"
				/>
				<Popupbox :show='show'/>
				<van-cell
				title="PO列表"
				is-link
				arrow-direction="down"
				:border="borderShow"
				value="请选择"
				class="cell-padding-common"
				/>
				<van-cell-group>
					<van-field v-model="valuePo" label="PO" placeholder="请输入PO" class="cell-padding-common" />
					<van-field v-model="valuePo" label="贴纸号" placeholder="请输入贴纸号" class="cell-padding-common" />
					
				</van-cell-group>
			</div>
		</div>
	</div>
</template>

<script>
import Header from '@/components/Header'
import Popupbox from '@/components/popupbox/popupbox'
	export default{
		name:"",
		components:{
			Header,
			Popupbox
		},
		data(){
			return{
				title : '尾查QC',
				value :'',
				show : false,
				radio : '1',
				borderShow: true,
				valuePo: "",

			}
		},
		computed:{

		},
		methods:{
			onSearch(){

			},
			showPopup(){
				this.show = true
			}
		}
}
</script>

<style scoped lang="scss">
.qc-box {
  min-height: 100vh;
  width: 94vw;
  background: #f8f8f8;
  //   background: gray;
  padding: 0 3vw;
  
  margin-top: 1.5rem;
  .search-box {
    margin-left: 2rem;
    margin-right: 2rem;
    padding-top: 3rem;
    border-bottom: 0.1rem solid #eee;
  }
  .select-info-box {
	  margin-top: 3rem;
	  padding: 2rem 0;
	  border-radius: 0.5rem;
	  box-shadow: 0 0.3rem 1rem 0.1rem rgba(0, 0, 0, 0.1);
	  
	
    .cell-padding-common {
      padding-bottom: 1rem;
    }
	
	
	
  }
	
  }


</style>