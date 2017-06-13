<template>
	<div class="login" v-on:keyup.enter="goLogin">
		<my-dialog :styleObject="dialogStyleObject" :showDialog="showDialog" :showSpinner="showSpinner">
			<div slot="header" class="login-header">
				<div class="title">伟易博</div>
				<div class="register">
					<span>还没有账号？</span>
					<span class="register-now" v-on:click="goRegister">立即注册</span>
				</div>
				<span class="close" v-on:click="closeDialog">×</span>
			</div>

			<div slot="body" class="login-body">
				<span class="input-title">用户名</span>
				<normal-input 
					myPlaceholder="请输入您的用户名" 
					:myStyleObject="inputStyleObject" 
					v-model="username">	
				</normal-input>

				<span class="input-title">密码</span>
				<normal-input 
					myType="password"
					myPlaceholder="请输入您的密码" 
					:myStyleObject="inputStyleObject"
					v-model="userpass">
				</normal-input>
				<div class="forget-password">忘记密码？</div>
			</div>

			<div slot="footer" class="login-footer">
				<div class="button" v-on:click="goLogin">立即登录</div>
			</div>
		</my-dialog>
	</div>
</template>

<script>
	import { mapActions } from 'vuex';
	import { mapState } from 'vuex';
	import dialog from '../plugins/dialog';
	import input from '../plugins/input';
	import Config from '../config/config.js';
	import Service from '../service/service.js';

	export default {
		name: 'login',
		
		data: function () {
			return {
				username: '',
				userpass: '',
				verifyCode: '',
				showSpinner: false,

				dialogStyleObject: {
					width: '380px',
					height: '450px',
					background: 'linear-gradient(to top, #242655 40%, #333676)'
				},

				inputStyleObject: {
					width: '320px',
					height: '32px',
					border: '1px solid #5d5780',
				}
			}
		},

		components: {
			'my-dialog': dialog,
			'normal-input': input
		},

		methods: {
			goLogin: function () {
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
		        	that.closeDialog();
				};

				this.showSpinner = true;
				Service.post(opt, callback);
			},

			goRegister: function () {
				this.closeDialog();
				this.$store.dispatch('switchRegisterDialog', {status: true});
			},

			resetDialog: function () {
				this.username   = '';
				this.userpass   = '';
				this.verifyCode = '';
			},

			closeDialog: function () {
				this.resetDialog();
				this.$store.dispatch('switchLoginDialog', {status: false});
			}
		},

	  	computed: mapState({
	  		showDialog: function (state) {
	  			return state.showLoginDialog;
	  		}
	  	})
	}
</script>

<style lang="scss" scoped>
	.login {
		width: 380px;
		height: auto;
		position: relative;

		.login-header {
			position: relative;
			height: 180px;

			.title {
				color: #e9e8ec;
			    font-size: 40px;
			    font-weight: bold;
				text-align: center;
				padding-top: 62px;
			}

			.register {
				font-size: 13px;
				text-align: center;
				margin-top: 12px;

				.register-now {
					color: #e9e8ec;
					cursor: pointer;
				}
			}

			.close {
				cursor: pointer;
				position: absolute;
				top: 5px;
				right: 15px;
				font-size: 35px;

				&:hover {
					color: #e9e8ec;
				}
			}
		}

		.login-body {
			padding: 0 30px;
			font-size: 14px;
			position: relative;

			.input-title {
				display: inline-block;
				margin-bottom: 10px;
			}

			.input {
				margin-bottom: 20px;
			}

			.forget-password {
				width: 100%;
				text-align: right;
				cursor: pointer;

				&:hover {
					color: #e9e8ec;
				}
			}

			.v-spinner {
				position: absolute;
				left: 40%;
				bottom: 0;
			}
		}

		.login-footer {
			padding: 0 30px;

			.button {
				background-color: #518743;
				color: #FFF;
				cursor: pointer;
				font-size: 14px;
				width: 320px;
				height: 38px;
				line-height: 38px;
				text-align: center;
				margin-top: 15px;
			}
		}
	}
</style>