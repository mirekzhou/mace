<template>
	<div class="footer">
<!-- 		<ul>
			<li>
				<router-link to="/home" tag="div">
					<i class="iconfont icon-home"></i>
					<p>首页</p>
				</router-link>
			</li>
			<li>
				<router-link to="/wallet" tag="div">
					<i class="iconfont icon-wallet"></i>
					<p>钱包</p>
				</router-link>
			</li>
			<li>
				<router-link to="/promotion" tag="div">
					<i class="iconfont icon-discount"></i>
					<p>优惠</p>
				</router-link>
			</li>
			<li>
				<router-link to="/userCenter" tag="div">
					<i class="iconfont icon-my"></i>
					<p>我的</p>
				</router-link>
			</li>
		</ul> -->

	    <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
			<mu-bottom-nav-item value="home" title="首页" icon="home" to="/home" />
			<mu-bottom-nav-item value="wallet" title="钱包" icon="local_atm" to="/wallet" />
			<mu-bottom-nav-item value="promotion" title="优惠" icon="card_giftcard" to="/promotion" />
			<mu-bottom-nav-item value="userCenter" title="我的" icon="account_circle" to="/userCenter"/>
	    </mu-bottom-nav>
	</div>
</template>

<script>
	import '../scss/common.scss';
	import '../assets/font/iconfont.css';
	import muBottomNav from 'muse-ui/src/bottomNav/bottomNav.vue';
	import muBottomNavItem from 'muse-ui/src/bottomNav/bottomNavItem.vue';

	export default {
		name: 'footer',
		
		data: function () {
			return {
				bottomNav: 'home',
				bottomNavColor: 'home'
			}
		},

		components: {
			'mu-bottom-nav': muBottomNav,
			'mu-bottom-nav-item': muBottomNavItem
		},

		methods: {
			handleChange (val) {
				this.bottomNav = val
			}
		}
	}
</script>

<style lang="scss" scoped>
	.footer {
		background-color: #914fce;
		position: fixed;
		left: 0;
		bottom: 0;
		height: .5rem;
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

		    	i {
		    		color: #c8a7e7;
					display: inline-block;
					vertical-align: top;
					font-size: .20rem;
		    	}

		    	p {
		    		color: #c8a7e7;
		    		font-size: .12rem;
		    		text-align: center;
		    		width: 100%;
		    	}

				.router-link-active {
					i {
						color: #FFF;
					}

					p {
						color: #FFF;
					}
			    }
		    }
	    }
	}
</style>