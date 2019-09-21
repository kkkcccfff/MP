<template>
	<div class="container">
		<Header :title="title"/>
	</div>
</template>

<script>
import Header from '@/components/Header'
	export default{
		name:"",
		props:[
			
		],

		data(){
			return{
				title:'外发QC'
			}
		},

		components:{
			Header
		},

		computed:{

		},

		methods:{

		}
}
</script>

<style scoped>

</style>