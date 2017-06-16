<template>
	<div class="header">
		<span class="show-side-bar" v-on:click="showSider">设置</span>
		<span class="back" v-show="showBack" v-on:click="goBack">返回</span>
		<span class="title">伟易博</span>
	</div>
</template>

<script>
	import '../../scss/common.scss';
	import { mapActions } from 'vuex';
	import { mapState } from 'vuex';

	export default {
		name: 'header',

		data: function () {
			return {
			}
		},

		methods: {
			showSider: function () {
				if (this.showSideBar) {
					this.$store.dispatch('setSideBarStatus', {data: false});
				} else {
					this.$store.dispatch('setSideBarStatus', {data: true});
				}
			},

			goBack: function () {
				this.$router.back();
			}
		},

	  	computed: mapState({
	  		showSideBar: function (state) {
	  			return state.showSideBar;
	  		},

	  		showBack: function (state) {
	  			return state.showBack;
	  		}
	  	})
	}
</script>

<style lang="scss">
	$headerHeight  :  .46rem;

	.header {
		background-color: #232457;
		font-size: .2rem;
		font-weight: bold;
		height: $headerHeight;
		line-height: $headerHeight;
		text-align: left;
		width: 100%;
		position: relative;

		.show-side-bar {
			display: inline-block;
			font-size: 14px;
			font-weight: normal;
			padding-left: 10px;
		}

		.back {
		    display: inline-block;
		    height: 100%;
		    width: 60px;
		    padding-left: 10px;
		}

		.title {
			display: inline-block;
			width: 1rem;
			height: $headerHeight;
			line-height: $headerHeight;
			text-align: center;
			position: absolute;
			left: 50%;
			margin-left: -.5rem;
		}
	}
</style>