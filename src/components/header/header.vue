<template>
	<div class="header">
		<span class="back" v-show="showBack" v-on:click="goBack">返回</span>
		<span class="title">Ace</span>
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
			goBack: function () {
				this.$router.back();
			}
		},

	  	computed: mapState({
	  		showBack: function (state) {
	  			return state.showBack;
	  		}
	  	})
	}
</script>

<style lang="scss" scoped>
	.header {
		background-color: #914fce;
		font-size: .14rem;
		height: 0.44rem;
		line-height: 0.44rem;
		text-align: left;
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;

		.back {
		    display: inline-block;
		    height: 100%;
		    width: 60px;
		    padding-left: 10px;
		}

		.title {
			width: 1rem;
			text-align: center;
			position: absolute;
			left: 50%;
			margin-left: -.5rem;
		}
	}
</style>