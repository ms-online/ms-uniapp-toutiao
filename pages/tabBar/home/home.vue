<template>
	<view class="container">
		<homeHeader v-if="showHeader"></homeHeader>
	</view>
</template>

<script>
	import homeHeader from '../../../components/home/homeHeader.vue';
	import interfaces from '../../../utils/interfaces.js';
	export default {
		data() {
			return {
				showHeader: true, // 是否显示自定义表头
				tabList: []
			}
		},
		onLoad() {
			// #ifdef APP-PLUS
			this.showHeader = false;
			// #endif
			
			this.getTabsData();
		},
		methods:{
		getTabsData(){
			this.request({
				url: interfaces.getTabList,
				success: (res => {
					// console.log(res.data);
					this.tabList = res.data;
				})
			})
		}	
		},
		components: {
			homeHeader
		}
	}
</script>

<style>
</style>
