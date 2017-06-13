<template>
	<div id="app">
		<my-header></my-header>

		<transition name="fade">
		    <keep-alive>
		      	<router-view></router-view>
		    </keep-alive>
		</transition>

		<my-footer></my-footer>
		<login></login>
	</div>
</template>

<script>
	import { mapActions } from 'vuex';
	import header from './components/header/header';
	import footer from './components/footer';
	import login from './components/login';

	export default {
		name: 'app',
		
		data: function () {
			return {
			}
		},

		mounted: function () {
			this.$store.dispatch('getLoginStatus');
			this.$store.dispatch('getRegisterConfig');
			this.$store.dispatch('switchLoginDialog', {status: true});
		},

		methods: {
		},

		components: {
			'my-header' : header,
			'my-footer' : footer,
			'login'     : login
		}
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
	}

	#app {
	}
</style>