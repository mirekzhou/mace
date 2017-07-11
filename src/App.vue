<template>
	<div id="app" v-bind:class="{'showSideBar': showSideBar}">
		<side-bar></side-bar>

		<div class="container">
			<my-header></my-header>

			<transition name="fade">
			    <keep-alive>
			      	<router-view></router-view>
			    </keep-alive>
			</transition>

			<my-footer></my-footer>
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex';
	import { mapState } from 'vuex';
	import header from './components/header/header';
	import footer from './components/footer';
	import login from './components/login';
	import sideBar from './components/sider/sideBar';

	export default {
		name: 'app',
		
		data: function () {
			return {
			}
		},

		mounted: function () {
			this.$store.dispatch('getLoginStatus');
			this.$store.dispatch('getRegisterConfig');
			//this.$store.dispatch('switchLoginDialog', {status: true});
		},

		components: {
			'my-header' : header,
			'my-footer' : footer,
			'login'     : login,
			'side-bar'  : sideBar
		},

	  	computed: mapState({
	  		showSideBar: function (state) {
	  			return state.showSideBar;
	  		},

	  		showLogin: function (state) {
	  			return state.showLogin;
	  		}
	  	})
	}
</script>

<style lang="scss">
	html {
		height: 100%;
		width: 100%;
		margin: 0;
		padding: 0;
		overflow-y: scroll;
	}

	body {
		background-color: #FFF;
		color: #FFF;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	#app {
		width: 172%;
		height: 100%;
		transition: left .3s;
		left: -72%;
		position: fixed;

		.side-bar {
			display: inline-block;
			height: 100%;
			vertical-align: top;
			width: 41.86%;
			position: relative;
		}

		.container {
			display: inline-block;
			height: 100%;
			vertical-align: top;
			width: 58.14%;
			position: relative;
			margin-left: -.036rem;
		}
	}

	.showSideBar {
		left: 0 !important;
	}
</style>