<template>
	<div class="page slot-page">
		<category></category>
		<game-list></game-list>
	</div>
</template>

<script>
	import { mapActions } from 'vuex';
	import { mapState } from 'vuex';
	import category from './category';
	import gameList from './gameList';

	export default {
		name: 'slot',

		components: {
			'category': category,
			'game-list': gameList
		},

		beforeRouteEnter (to, from, next) {
			next(vm => {
		        vm.$store.dispatch('setHeaderBackStatus', {status: true});
		        vm.$store.dispatch('setSlotPlatform', {data: vm.$route.params.platform});
			})
		},

	  	computed: mapState({
	  		showBack: function (state) {
	  			return state.showBack;
	  		}
	  	})
	}
</script>

<style lang="scss" scoped>
	.slot-page {
	}
</style>