<template>
	<div class="footer">
		<ul>
			<li v-on:click="setActiveItem(0)">
				<router-link to="/home" tag="div">
					<img :src="homeIconSrc">
					<p>首页</p>
				</router-link>
			</li>
			<li v-on:click="setActiveItem(1)">
				<router-link to="/wallet" tag="div">
					<img :src="walletIconSrc">
					<p>钱包</p>
				</router-link>
			</li>
			<li v-on:click="setActiveItem(2)">
				<router-link to="/promotion" tag="div">
					<img :src="promoIconSrc">
					<p>优惠</p>
				</router-link>
			</li>
			<li v-on:click="setActiveItem(3)">
				<router-link to="/userCenter" tag="div">
					<img :src="myIconSrc">
					<p>我的</p>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import iconHome from '../assets/img/icon-home.svg';
	import iconHomeActive from '../assets/img/icon-home-active.svg';
	import iconPromo from '../assets/img/icon-promo.svg';
	import iconPromoActive from '../assets/img/icon-promo-active.svg';
	import iconWallet from '../assets/img/icon-wallet.svg';
	import iconWalletActive from '../assets/img/icon-wallet-active.svg';
	import iconCollect from '../assets/img/icon-collect.svg';
	import iconCollectActive from '../assets/img/icon-collect-active.svg';
	import iconMy from '../assets/img/icon-my.svg';
	import iconMyActive from '../assets/img/icon-my-active.svg';

	import muBottomNav from 'muse-ui/src/bottomNav/bottomNav.vue';
	import muBottomNavItem from 'muse-ui/src/bottomNav/bottomNavItem.vue';

	export default {
		name: 'footer',
		
		data: function () {
			return {
				bottomNav: 'home',
				bottomNavColor: 'home',
				homeIconSrc: iconHomeActive,
				walletIconSrc: iconWallet,
				promoIconSrc: iconPromo,
				myIconSrc: iconMy
			}
		},

		components: {
			'mu-bottom-nav': muBottomNav,
			'mu-bottom-nav-item': muBottomNavItem
		},

		methods: {
			setActiveItem: function (index) {
				if (index == 0) {
					this.homeIconSrc   = iconHomeActive;
					this.walletIconSrc = iconWallet;
					this.promoIconSrc  = iconPromo;
					this.myIconSrc     = iconMy;
				} else if (index == 1) {
					this.homeIconSrc   = iconHome;
					this.walletIconSrc = iconWalletActive;
					this.promoIconSrc  = iconPromo;
					this.myIconSrc     = iconMy;
				} else if (index == 2) {
					this.homeIconSrc   = iconHome;
					this.walletIconSrc = iconWallet;
					this.promoIconSrc  = iconPromoActive;
					this.myIconSrc     = iconMy;
				} else  if (index == 3) {
					this.homeIconSrc   = iconHome;
					this.walletIconSrc = iconWallet;
					this.promoIconSrc  = iconPromo;
					this.myIconSrc     = iconMyActive;
				}
			}
		}
	}
</script>

<style lang="scss">
	$footerHeight  :  .5rem;

	.footer {
		background-color: #232457;
		position: absolute;
		left: 0;
		bottom: 0;
		height: $footerHeight;
		width: 100%;

	    ul {
			height: .48rem;
		    list-style: none;
		    width: 100%;
		    display: flex;
		    flex-direction: row;

		    li {
		    	flex: 1;
		    	height: 100%;
		    	text-align: center;
		    	overflow: hidden;
		    	position: relative;
		    	padding-top: 5px;

		    	img {
		    		width: 22px;
					transition: all 1s;
		    	}

		    	p {
		    		color: #727394;
		    		font-size: 12px;
		    		text-align: center;
		    		width: 100%;
		    		transition: all 1s;
		    	}

				.router-link-active {
					p {
						color: #FFF;
					}
			    }

			    &:active {
			    	& > div {
				    	img {
				    		transform: scale(2);
				    	}

				    	p {
				    		font-size: 18px;
				    		transform: scale(2);
				    	}
			    	}
			    }
		    }
	    }
	}
</style>