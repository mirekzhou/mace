<template>
	<div class="page home-page">
		<div class="swiper-zone">
		    <swiper :options="swiperOption">
		        <swiper-slide v-for="banner in banners" key="banner">
		        	<img :src="banner" style="width: 100%; height:1.6rem !important">
		        </swiper-slide>
		    </swiper>
		</div>

		<breaking-news></breaking-news>
		<game-portal></game-portal>
		<div class="clear-cache">
			<mu-raised-button label="清除缓存" class="demo-raised-button" @click="clearCache" primary/></mu-raised-button>
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex';
	import { mapState } from 'vuex';
	import { swiper, swiperSlide } from 'vue-awesome-swiper';
	import breakingNews from './breakingNews';
	import gamePortal from './gamePortal';
	import raisedButton from 'muse-ui/src/raisedButton/raisedButton.vue';

	export default {
		name: 'home',
		
		data: function () {
			return {
		        swiperOption: {
		          	pagination: '.swiper-pagination',
		          	paginationClickable: true,
			        spaceBetween: 0
		        },

		        banners: [
		        	'https://ojrcjvo0a.qnssl.com/upload/ad/201705/857/b0bdd1a887924aeebfd4d7311e73d2d9.jpg',
		        	'https://ojrcjvo0a.qnssl.com/upload/ad/201705/457/aafd31c1d56d46f090f77c3585e9e03a.jpg',
		        	'https://ojrcjvo0a.qnssl.com/upload/ad/201705/857/b0bdd1a887924aeebfd4d7311e73d2d9.jpg'
		        ]
			}
		},

		beforeRouteEnter (to, from, next) {
			next(vm => {
		        vm.type     = vm.$route.params.type;
		        vm.platform = vm.$route.params.platform;
		        vm.$store.dispatch('setHeaderBackStatus', {status: false});
			})
		},

		components: {
			'swiper': swiper,
			'swiper-slide': swiperSlide,
			'breaking-news': breakingNews,
			'game-portal': gamePortal,
			'mu-raised-button': raisedButton
		},

	  	computed: mapState({
	  		showBack: function (state) {
	  			return state.showBack;
	  		}
	  	}),

	  	methods: {
	  		clearCache: function () {
	  			console.log('1..');
	  			localStorage.clear();
	  		}
	  	}
	}
</script>

<style lang="scss" scoped>
	.home-page {
		overflow: hidden;
		overflow-y: scroll;
		padding-bottom: .2rem;

		.swiper-zone {
			font-size: 0;
		}

		&::-webkit-scrollbar {
		    display: none;
		}

		.clear-cache {
			margin-top: .2rem;
			text-align: center;
		}
	}
</style>