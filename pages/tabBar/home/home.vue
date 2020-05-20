<template>
	<view class="container">
		<homeHeader v-if="showHeader"></homeHeader>
		<!-- 分类导航 -->
		<scroll-view scroll-x class="tab-bar" scroll-with-animation="true">
			<view class="uni-tab" v-for="(tab,index) in tabList" :id="tab.id" :key="tab.id">
				<text class="uni-tab-item">{{tab.name}}</text>
			</view>
		</scroll-view>
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
					console.log(res.data);
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

<style lang="scss">
	.tab-bar{
		background-color: #f4f5f6;
		white-space: nowrap;
		position: fixed;
		z-index: 99;
		top: 100upx;  
		.uni-tab{
			display: inline-block;
			white-space: nowrap;
			padding: 20upx 0 20upx 20upx;
			.uni-tab-item{
				padding: 0 20upx;
				height: 52upx;
				line-height: 52upx;
				color: #505050;
			}
		}
	}
	
	.tab-bar ::-webkit-scrollbar {
		width: 0 !important;
		display: none;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}
</style>
