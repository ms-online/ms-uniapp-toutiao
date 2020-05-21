<template>
	<view class="container">
		<homeHeader v-if="showHeader"></homeHeader>
		<!-- 分类导航 -->
		<scroll-view :scroll-into-view="toview" scroll-x class="tab-bar" scroll-with-animation="true">
			<view @tap="onTabTap(index)" class="uni-tab" v-for="(tab,index) in tabList" :id="tab.id" :key="tab.id">
				<text :class="{'tab-cur': tabIndex == index}" class="uni-tab-item">{{tab.name}}</text>
			</view>
		</scroll-view>
		
		<!-- 占位 -->
		<view class="place"></view>
		
		<!-- 内容 -->
		<swiper @change="onSwiperChange" :current="tabIndex" class="tab-box" :duration="300">
			<swiper-item class="swiper-item" v-for="(page,i) in tabList" :key="i">
				<view class="news-page" v-for="(newsItem,index) in newsList" :key="index">
					<!-- 调用组件 -->
					<newsCell :newsItem="newsItem"></newsCell>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import homeHeader from '../../../components/home/homeHeader.vue';
	import interfaces from '../../../utils/interfaces.js';
	import newsCell from '../../../components/home/newsCell.vue';
	export default {
		data() {
			return {
				showHeader: true, // 是否显示自定义表头
				tabList: [],
				tabIndex: 2,
				toview:"", // scroll-view滚动到的视图id
				page: 1,
				size: 6,
				newsid: '',
				newsList: []
			}
		},
		onLoad() {
			// #ifdef APP-PLUS
			this.showHeader = false;
			// #endif

			this.getTabsData();
			
			this.loadTabData();
			
		},
		methods: {
			getTabsData() {
				this.request({
					url: interfaces.getTabList,
					success: (res => {
						// console.log(res.data);
						this.tabList = res.data;
					})
				})
			},
			onTabTap(index){
				// console.log(index);
				this.tabIndex = index;
			},
			onSwiperChange(e){
				// console.log(e);
				this.tabIndex = e.target.current || e.detail.current;
				this.toview = this.tabList[this.tabIndex].id;
				
				// 加载内容数据
			},
			loadTabData(){
				this.page = 1;
				this.newsid = this.tabList.length > 0 ? this.tabList[this.tabIndex].newsid : "all";
				console.log(this.newsid);
				// 数据请求
				this.request({
					url: interfaces.getNewsList + `${this.newsid}/${this.page}/${this.size}`,
					success: (res => {
						console.log(res.data);
						this.newsList = res.data;
					})
				})
			}
		},
		components: {
			homeHeader,
			newsCell
		}
	}
</script>

<style lang="scss">
	// 分类样式
	.tab-bar {
		background-color: #f4f5f6;
		white-space: nowrap;
		position: fixed;
		z-index: 99;
		top: 100upx;

		.uni-tab {
			display: inline-block;
			white-space: nowrap;
			padding: 20upx 0 20upx 20upx;

			.uni-tab-item {
				padding: 0 20upx;
				height: 52upx;
				line-height: 52upx;
				color: #505050;
			}
			.tab-cur{
				color: #f85959;
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


	// 内容样式
	.tab-box{
		flex: 1;
		.swiper-item {
			display: flex;
			flex: 1;
			flex-direction: column;
			overflow: hidden;
		}
	}

	// 占位
	.place{
		height: 100upx;
	}
</style>
