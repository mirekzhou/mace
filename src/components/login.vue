<template>
	<div class="login">
		<div class="login-header">
			<div>伟易博</div>
		</div>

		<div class="login-body">
			<div class="login-body-inner">
				<my-input myPlaceholder="用户名" myType="text" :styleObject="inputStyleObject" v-model="username"></my-input>
				<my-input myPlaceholder="密码" myType="password" :styleObject="inputStyleObject" v-model="userpass"></my-input>
				<div class="button do-login" v-on:click="doLogin">登录</div>
				<div class="additional-info">
					<div class="left-info">登录遇到问题？</div>
					<router-link class="right-info" to="/register" tag="div">账号注册</router-link>
				</div>
			</div>
		</div>

		<div class="login-footer">
			<div class="login-footer-inner">
				<div class="or">
					<span class="or-left"></span>
					<span class="or-text">or</span>
					<span class="or-right"></span>
				</div>

				<ul>
					<li>
						<div class="footer-icon"><i class="iconfont icon-weibo"></i></div>
						<div class="name">微博</div>
					</li>
					<li>
						<div class="footer-icon"><i class="iconfont icon-wechat"></i></div>
						<div class="name">微信</div>
					</li>
					<li>
						<div class="footer-icon"><i class="iconfont icon-qq"></i></div>
						<div class="name">QQ</div>
					</li>
					<li>
						<div class="footer-icon"><i class="iconfont icon-facebook"></i></div>
						<div class="name">Facebook</div>
					</li>
				</ul>
			</div>
		</div>

		<div class="spinner-overlay" v-show="showSpinner">
			<scale-loader></scale-loader>
		</div>
	</div>
</template>

<script>
	import myInput from '../plugins/input';
	import myButton from '../plugins/button';
	import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue';
	import { mapActions } from 'vuex';
	import { mapState } from 'vuex';
	import Config from '../config/config.js';
	import Service from '../service/service.js';

	export default {
		name: 'login',
		
		data: function () {
			return {
				inputStyleObject: {},
				username: '',
				userpass: '',
				showSpinner: false
			}
		},

		components: {
			'my-input' : myInput,
			'scale-loader': ScaleLoader
		},

		mounted: function () {
			this.getLocalStorage();
		},

		methods: {
			getLocalStorage: function () {
				this.username = localStorage.getItem('username') || '';
				this.userpass = localStorage.getItem('userpass') || '';
			},

			doLogin: function () {
				var callback;
				var that       =  this;
				var opt        =  {
					url: Config.urls.signIn,
					data: {
						UserName: this.username,
						Password: this.userpass,
						LoginWebSet: window.location.host
					}
				};

				callback = function (data) {
					that.showSpinner = false;

					if (data.StatusCode && data.StatusCode != 0) {
						alert(data.Message);
						return;
					}

		        	that.$store.dispatch('setLoginStatus', {status: true});
		        	that.$store.dispatch('getLoginUserInfo');
					that.$router.push('home');
					that.$store.dispatch('setShowHeaderStatus', {data: true});
					that.$store.dispatch('setShowFooterStatus', {data: true});
				};

				this.showSpinner = true;
				Service.post(opt, callback);
			}
		},

	  	computed: mapState({
	  		showLogin: function (state) {
	  			return state.showLogin;
	  		}
	  	})
	}
</script>

<style lang="scss" scoped>
	.login {
		background-image: url("../assets/img/sign-bg.png");
		background-color: #fffbd4;
		color: #FFF;
		width: 100%;
		height: 100%;
		padding-top: .4rem;
		position: relative;

		.login-header {
			width: 100%;
			height: 1.2rem;
			line-height: 1.2rem;
			text-align: center;
			font-size: .36rem;
			font-weight: bold;
		}

		.login-body {
			.login-body-inner {
				width: 2.5rem;
				margin: 0 auto;

				.input {
					display: block;
					width: 100%;
				}

				.do-login {
					border-radius: .2rem;
					background-color: #09c469;
					color: #FFF;
					font-size: 16px;
					width: 100%;
					height: .36rem;
					line-height: .36rem;
					text-align: center;
					margin-top: .5rem;
				}

				.additional-info {
					display: flex;
					flex-direction: row;
					font-size: 10px;
					align-items: center;
					justify-content: space-between;
					margin-top: .18rem;

					.left-info {
						text-decoration: underline;
					}

					.right-info {
						background-color: #272648;
						border-radius: .2rem;
						color: #7c79a8;
						width: .65rem;
						height: .24rem;
						line-height: .24rem;
						text-align: center;
					}
				}
			}
		}

		.login-footer {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			padding-bottom: .25rem;

			.login-footer-inner {
				width: 2.5rem;
				margin: 0 auto;

				.or {
					font-size: 14px;
					height: .2rem;
					line-height: .2rem;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;

					.or-left {
						border: 0;
						height: .02rem;
						width: 1rem;
						background-image:-webkit-linear-gradient(to left, #7c79a8, #37355c);
						background-image:linear-gradient(to left, #7c79a8, #37355c);
					}

					.or-right {
						border: 0;
						height: .02rem;
						width: 1rem;
						background-image:-webkit-linear-gradient(to right, #7c79a8, #37355c);
						background-image:linear-gradient(to right, #7c79a8, #37355c);
					}
				}

				ul {
					list-style: none;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					margin-top: .25rem;

					li {
						width: 20%;
						display: flex;
						flex-direction: column;
						align-items: center;

						.footer-icon {
							height: .36rem;
							line-height: .36rem;
							border: 1px solid #7c79a8;
							border-radius: 50%;
							width: .36rem;
						}

						.name {
							margin-top: .1rem;
						}
					}
				}
			}
		}
	}
</style>