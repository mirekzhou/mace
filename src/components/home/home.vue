<template>
	<div class="page home-page">
		<div class="swiper-zone">
		    <swiper :options="swiperOption">
		        <swiper-slide v-for="banner in banners" key="banner">
		        	<img :src="banner" style="width: 100%">
		        </swiper-slide>
		    </swiper>
		</div>

		<breaking-news></breaking-news>
		<game-portal></game-portal>
<!-- 		<div class="clear-cache">
			<mu-raised-button label="清除缓存" class="demo-raised-button" @click="clearCache" primary/></mu-raised-button>
		</div> -->
	</div>
</template>

<script>
	import { mapActions } from 'vuex';
	import { mapState } from 'vuex';
	import { swiper, swiperSlide } from 'vue-awesome-swiper';
	import breakingNews from './breakingNews';
	import gamePortal from './gamePortal';
	import raisedButton from 'muse-ui/src/raisedButton/raisedButton.vue';
	import homeBanner from '../../assets/img/home-banner.png';

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
		        	homeBanner, homeBanner, homeBanner, homeBanner
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
	  			localStorage.clear();
	  		}
	  	}
	}
</script>

<style lang="scss" scoped>
	.home-page {
		background-color: #0c1135;
		overflow-x: hidden;
		overflow-y: scroll;
		-webkit-overflow-scrolling: touch;
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