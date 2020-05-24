<template>
</template>

<script>
	import interfaces from '../../../utils/interfaces.js';
	export default{
		data(){
			return {
				videoList: [],
				page: 1,
				size: 5
			}
		},
		onLoad(){
			this.initVideoData();
		},
		methods:{
			initVideoData(){
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

<style>
</style>
