<template>
	<div class="side-bar" v-touch:left="swipeLeft">
		<div class="side-bar-header">
			<div class="section1" v-show="!loginStatus">
			</div>

			<div class="section2" v-show="loginStatus">
			</div>
		</div>

		<div class="side-bar-body">
		</div>

		<div class="side-bar-footer">
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex';
	import { mapState } from 'vuex';

	export default {
		name: 'side-bar',

		methods: {
			swipeLeft: function () {
				this.$store.dispatch('setSideBarStatus', {data: false});
			}
		},

	  	computed: mapState({
	  		loginStatus: function (state) {
	  			return state.loginStatus;
	  		}
	  	})
	}
</script>

<style lang="scss" scoped>
	.side-bar {
		display: inline-block;

		.side-bar-header {
			background-color: #1b1c46;
			height: 1.45rem;
			width: 100%;
		}

		.side-bar-body {
			background-color: #1d1e4c;
			position: absolute;
			top: 1.45rem;
			bottom: .5rem;
			left: 0;
			width: 100%;
		}

		.side-bar-footer {
			background-color: #1d1e4c;
			height: .5rem;
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
		}
	}
</style>