<template>
	<view class="container">
		<scroll-view class="panel-scroll-box" scroll-y>
			<view v-for="(videoItem,index) in videoList" :key="index">
				<videoCell :videoItem="videoItem"></videoCell>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import interfaces from '../../../utils/interfaces.js';
	import videoCell from '../../../components/video/videoCell.vue';
	import pulldownRefresh from '../../../components/pulldown/pulldown.vue';
	export default {
		components: {
			videoCell,
			pulldownRefresh
		},
		data() {
			return {
				videoList: [],
				page: 1,
				size: 10
			}
		},
		onLoad() {
			this.initVideoData();
		},
		methods: {
			initVideoData() {
				this.page = 1;
				this.request({
					url: interfaces.getVideoList + `${this.page}/${this.size}`,
					success: (res => {
						this.videoList = res.data;
					})
				})
			}
		}
	}
</script>

<style lang="scss">
	.panel-scroll-box {
		height: 100%;
	}
</style>
