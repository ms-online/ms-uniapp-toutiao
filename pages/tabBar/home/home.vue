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
				<scroll-view @scrolltolower="loadMoreData" scroll-y class="panel-scroll-box">
					<view class="news-page" v-for="(newsItem,index) in newsList" :key="index">
						<!-- 调用组件 -->
						<newsCell :newsItem="newsItem"></newsCell>
					</view>
					<!-- 上拉加载组件 -->
					<loadMore :status="page.loadMoreStatus"></loadMore>
				</scroll-view>
			</swiper-item>
		</swiper>

		<!-- 底部占位 -->
		<view :style="{height: footerbottom}"></view>
	</view>
</template>

<script>
	import homeHeader from '../../../components/home/homeHeader.vue';
	import interfaces from '../../../utils/interfaces.js';
	import newsCell from '../../../components/home/newsCell.vue';
	import loadMore from '../../../components/loadMore/loadMore.vue';
	
	export default {
		data() {
			return {
				showHeader: true, // 是否显示自定义表头
				tabList: [],
				tabIndex: 0,
				toview: "", // scroll-view滚动到的视图id
				page: 1,
				size: 10,
				newsid: '',
				newsList: [],
				footerbottom: "0",
			}
		},
		onLoad() {
			// #ifdef APP-PLUS
			this.showHeader = false;
			// #endif

			// #ifdef H5
			this.footerbottom = document.getElementsByTagName("uni-tabbar")[0].offsetHeight + "px";
			// console.log(this.footerbottom);
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
						res.data.forEach(item => {
							item.loadMoreStatus = 0;
						})
						this.tabList = res.data;
					})
				})
			},
			onTabTap(index) {
				// console.log(index);
				this.tabIndex = index;
			},
			onSwiperChange(e) {
				// console.log(e);
				this.tabIndex = e.target.current || e.detail.current;
				this.toview = this.tabList[this.tabIndex].id;

				// 加载内容数据
			},
			loadTabData() {
				this.page = 1;
				// 切换选项卡 初始化状态
				if(this.tabList.length > 0){
					this.tabList[this.tabIndex].loadMoreStatus = 0;
				}
				
				this.newsid = this.tabList.length > 0 ? this.tabList[this.tabIndex].newsid : "all";
				// console.log(this.newsid);
				// 数据请求
				this.request({
					url: interfaces.getNewsList + `${this.newsid}/${this.page}/${this.size}`,
					success: (res => {
						console.log(res.data);
						this.newsList = res.data;
					})
				})
			},
			loadMoreData(){
				// 更改状态
				this.tabList[this.tabIndex].loadMoreStatus = 1;
				// 更改加载页数
				this.page++;
				// 数据请求
				this.request({
					url: interfaces.getNewsList + `${this.newsid}/${this.page}/${this.size}`,
					success: (res => {
						if(res.data.length > 0){
							res.data.forEach(news => {
								this.newsList.push(news);
							})
							this.tabList[this.tabIndex].loadMoreStatus = 0;
						}else {
							// 返回数据为空 更改状态 没有更多数据
							this.tabList[this.tabIndex].loadMoreStatus = 2;
							return false;
						}
					})
				})
				
				
			}
		},
		components: {
			homeHeader,
			newsCell,
			loadMore
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

			.tab-cur {
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
	.tab-box {
		flex: 1;

		.swiper-item {
			display: flex;
			flex: 1;
			flex-direction: column;
			overflow: hidden;
			
			.panel-scroll-box{
				height: 100%;
			}
		}
	}

	// 占位
	.place {
		height: 100upx;
	}

	
</style>
