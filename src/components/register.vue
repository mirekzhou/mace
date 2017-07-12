<template>
	<div class="register">
		<div class="register-header">
			<div>伟易博</div>
		</div>

		<div class="register-body">
			<div class="register-body-inner">
				<my-input myPlaceholder="用户名" myType="text" :styleObject="inputStyleObject" v-model="username"></my-input>
				<my-input myPlaceholder="密码" myType="password" :styleObject="inputStyleObject" v-model="userpass"></my-input>
				<my-input myPlaceholder="确认密码" myType="password" :styleObject="inputStyleObject" v-model="cuserpass"></my-input>
				<div class="button do-register" v-on:click="doRegister">注册</div>
				<router-link class="additional-info" to="/login" tag="div">已有账号？马上登陆</router-link>
			</div>
		</div>

		<div class="register-footer">
			<div class="register-footer-inner">
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
	</div>
</template>

<script>
	import myInput from '../plugins/input';
	import myButton from '../plugins/button';
	import { mapActions } from 'vuex';
	import { mapState } from 'vuex';

	export default {
		name: 'register',
		
		data: function () {
			return {
				inputStyleObject: {},
				username: '',
				userpass: '',
				cuserpass: ''
			}
		},

		components: {
			'my-input' : myInput
		},

		mounted: function () {
			this.getLocalStorage();
		},

		methods: {
			getLocalStorage: function () {
				this.username = localStorage.getItem('username') || '';
				this.userpass = localStorage.getItem('userpass') || '';
			},

			doRegister: function () {
				this.$router.push('home');
				this.$store.dispatch('setShowHeaderStatus', {data: true});
				this.$store.dispatch('setShowFooterStatus', {data: true});
			}
		},

	  	computed: mapState({
	  		showRegister: function (state) {
	  			return state.showRegister;
	  		}
	  	})
	}
</script>

<style lang="scss" scoped>
	.register {
		background-image: url("../assets/img/sign-bg.png");
		background-color: #fffbd4;
		color: #FFF;
		width: 100%;
		height: 100%;
		padding-top: .4rem;
		position: relative;

		.register-header {
			width: 100%;
			height: 1.2rem;
			line-height: 1.2rem;
			text-align: center;
			font-size: .36rem;
			font-weight: bold;
		}

		.register-body {
			.register-body-inner {
				width: 2.5rem;
				margin: 0 auto;

				.input {
					display: block;
					width: 100%;
				}

				.do-register {
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
					font-size: 10px;
					margin-top: .18rem;
					text-align: center;
				}
			}
		}

		.register-footer {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			padding-bottom: .25rem;

			.register-footer-inner {
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