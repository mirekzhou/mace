<template>
	<v-touch class="side-bar" tag="div" v-on:swipeleft="closeSideBar">
		<div class="side-bar-header">
			<div class="section1" v-show="!loginStatus">
				<div class="icon-zone">
					<img src="../../assets/img/head.svg" />
				</div>

				<div class="button-zone">
					<router-link to="/login" tag="div"  @click.native="hideHeaderFooter">
						<div class="button login">登录</div>
					</router-link>
				</div>
			</div>

			<div class="section2" v-show="loginStatus">
				<radial-progress-bar :diameter="80"
									 :strokeWidth="8"
				                     :completed-steps="completedSteps"
				                     :total-steps="totalSteps"
				                     :startColor="startColor"
				                     :stopColor="stopColor"
				                     :innerStrokeColor="innerStrokeColor">
					<p>A</p>
				</radial-progress-bar>

				<div class="user-info">
					<div class="name">{{userName}}</div>
					<div class="level">用户等级:{{userLevel}}|安全等级:{{secureLevel}}</div>
					<div class="balance">Ұ{{balance}}</div>
				</div>
			</div>

			<img class="close" src="../../assets/img/close.svg" v-on:click="closeSideBar" />
		</div>

		<div class="side-bar-body">
			<ul>
				<li>
					<i class="icon iconfont icon-transfer"></i>
					<span>平台转账</span>
				</li>
				<li>
					<i class="icon iconfont icon-deposit"></i>
					<span>闪电充值</span>
				</li>
				<li>
					<i class="icon iconfont icon-withdrawal"></i>
					<span>快速提现</span>
				</li>
				<li>
					<i class="icon iconfont icon-message"></i>
					<span>我的消息</span>
				</li>
				<li>
					<i class="icon iconfont icon-history"></i>
					<span>游戏历史</span>
				</li>
				<li>
					<i class="icon iconfont icon-language"></i>
					<span>语言选择</span>
				</li>
				<li>
					<i class="icon iconfont icon-fontsize"></i>
					<span>字号选择</span>
				</li>
				<li>
					<i class="icon iconfont icon-help"></i>
					<span>帮助中心</span>
				</li>
			</ul>
		</div>

		<div class="side-bar-footer">
			<div v-show="!loginStatus">
				<span>还没有账号？</span>

				<router-link to="/register" tag="span"  @click.native="hideHeaderFooter">
					<div class="button signup">快速注册</div>
				</router-link>
			</div>

			<div class="logout-zone" v-show="loginStatus">
				<div class="logout" v-on:click="logout">退出登录</div>
			</div>
		</div>
	</v-touch>
</template>

<script>
	import '../../assets/fonts/iconfont.css';
	import { mapActions } from 'vuex';
	import { mapState } from 'vuex';
	import Config from '../../config/config.js';
	import Service from '../../service/service.js';
	import RadialProgressBar from 'vue-radial-progress';
	import VueProgress from 'vue-progress';

	export default {
		name: 'side-bar',

		data: function () {
			return {
				completedSteps: 8,
				totalSteps: 10,
				startColor: '#00F',
				stopColor: '#F00',
				innerStrokeColor: '#18182f',
				userName: 'Mirek',
				userLevel: 'VIP5',
				secureLevel: '中',
				balance: '18112456.00'
			}
		},

		methods: {
			closeSideBar: function () {
				this.$store.dispatch('setSideBarStatus', {data: false});
			},

			hideHeaderFooter: function () {
				this.$store.dispatch('setSideBarStatus', {data: false});
				this.$store.dispatch('setShowHeaderStatus', {data: false});
				this.$store.dispatch('setShowFooterStatus', {data: false});
			},

			logout: function () {
				var opt;
				var callback;
				var that = this;

		    	opt = {
					url: Config.urls.signOut,
					data: {}
				};

				callback = function (json) {
		            if(json === true) {
		            	that.$store.dispatch('setLoginStatus', {status: false});
		            }
				};

				Service.get(opt, callback);
			}
		},

		components: {
			'radial-progress-bar': RadialProgressBar,
			'v-progress': VueProgress
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
			position: relative;

			.section1 {
				height: 100%;

				.icon-zone {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					height: 1rem;
					line-height: 1rem;
					text-align: center;

					img {
						width: .63rem;
					}
				}

				.button-zone {
					width: 100%;
					height: .45rem;
					text-align: center;

					.login {
						background-color: #06a11b;
						border: 0;
						border-radius: 3px;
						display: inline-block;
						width: .78rem;
						height: .27rem;
						line-height: .27rem;
						text-align: center;
					}
				}
			}

			.section2 {
				height: 100%;
				width: 100%;
				display: flex;
				align-items: center;
				padding-left: .2rem;

				.radial-progress-inner {
					p {
						font-size: 30px;
					}
				}

				.user-info {
					margin-left: .05rem;

					.name {
						color: #FFF;
						font-size: 18px;
					}

					.level {
						color: #06c669;
						font-size: 10px;
						margin-top: .1rem;
					}

					.balance {
						background-color: #121237;
						padding-left: .05rem;
						width: 1.4rem;
						height: .25rem;
						line-height: .25rem;
						font-size: 15px;
						color: #ffba13;
						margin-top: .1rem;
					}
				}
			}

			.close {
				display: inline-block;
				position: absolute;
				right: .14rem;
				top: .1rem;
				width: .2rem;
			}
		}

		.side-bar-body {
			background-color: #1d1e4c;
			position: absolute;
			top: 1.45rem;
			bottom: .5rem;
			left: 0;
			width: 100%;
			padding-left: .22rem;

			ul {
				padding-top: .15rem;

				li {
					font-size: 16px;
					height: .45rem;
					line-height: .45rem;
					display: flex;
					align-items: center;
					
					.icon {
						width: .2rem;
						margin-right: .15rem;
					}

					span {
						display: inline-block;
						margin-bottom: 2px;
					}
				}
			}
		}

		.side-bar-footer {
			background-color: #1d1e4c;
			height: .5rem;
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			padding-left: .22rem;

			.signup {
				background: none;
				border: 1px solid #06a11b;
				border-radius: 3px;
				color: #06a11b;
				display: inline-block;
				width: 1rem;
				height: .25rem;
				line-height: .25rem;
				margin-left: .1rem;
				text-align: center;
			}

			.logout-zone {
				width: 100%;
				text-align: center;
				margin-left: -.22rem;

				.logout {
					border: 1px solid #e03638;
					color: #e03638;
					display: inline-block;
					width: 1.85rem;
					height: .3rem;
					line-height: .3rem;
					text-align: center;
				}
			}
		}
	}
</style>