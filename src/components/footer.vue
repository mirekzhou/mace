<template>
	<div class="footer">
		<ul>
			<li>
				<router-link to="/home" tag="div">
					<i class="icon iconfont icon-home-default icon-default"></i>
					<i class="icon iconfont icon-home-active icon-active"></i>
					<p>首页</p>
				</router-link>
			</li>
			<li>
				<router-link to="/wallet" tag="div">
					<i class="icon iconfont icon-wallet-default icon-default"></i>
					<i class="icon iconfont icon-wallet-active icon-active"></i>
					<p>钱包</p>
				</router-link>
			</li>
			<li>
				<router-link to="/promotion" tag="div">
					<i class="icon iconfont icon-promo-default icon-default"></i>
					<i class="icon iconfont icon-promo-active icon-active"></i>
					<p>优惠</p>
				</router-link>
			</li>
			<li>
				<router-link to="/userCenter" tag="div">
					<i class="icon iconfont icon-user-default icon-default"></i>
					<i class="icon iconfont icon-user-acive icon-active"></i>
					<p>我的</p>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import '../assets/fonts/iconfont.css';

	export default {
		name: 'footer',
		
		data: function () {
			return {
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

		    	.icon {
		    		font-size: 20px;
		    	}

		    	.icon-default {
		    		color: #727394;
		    		display: block;
		    	}

		    	.icon-active {
		    		color: #FFF;
		    		display: none;
		    	}

		    	p {
		    		color: #727394;
		    		font-size: 12px;
		    		text-align: center;
		    		width: 100%;
		    		transition: all .3s;
		    	}
		    	
				.router-link-active {
			    	.icon-default {
			    		display: none;
			    	}

			    	.icon-active {
			    		display: block;
			    	}

			    	p {
			    		color: #FFF;
			    	}
			    }
		    }
	    }
	}
</style>