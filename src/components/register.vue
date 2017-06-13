<template>
	<div class="register" v-on:keyup.enter="goRegister">
		<my-dialog :styleObject="dialogStyleObject" :showDialog="showDialog" :showSpinner="showSpinner">
			<div slot="header" class="register-header">
				<div class="title">伟易博</div>
				<div class="login">
					<span>已有账号？</span>
					<span class="login-now" v-on:click="goLogin">立即登录</span>
				</div>
				<span class="close" v-on:click="closeDialog">×</span>
			</div>

			<div slot="body" class="register-body">
				<ul v-bind:class="{'multi-line': len > lenDivided}">
					<li>
						<span class="input-title">用户名</span>
						<normal-input 
							myPlaceholder="请输入您的用户名" 
							:myStyleObject="inputStyleObject" 
							v-model="username">	
						</normal-input>
					</li>

					<li>
						<span class="input-title">密码</span>
						<normal-input 
							myType="password"
							myPlaceholder="请输入您的密码" 
							:myStyleObject="inputStyleObject"
							v-model="userpass">
						</normal-input>
					</li>

					<li>
						<span class="input-title">确认密码</span>
						<normal-input 
							myType="password"
							myPlaceholder="请再次输入您的密码" 
							:myStyleObject="inputStyleObject"
							v-model="comfirmPassword">
						</normal-input>
					</li>

					<li v-bind:class="{'empty': !config.EmailIsRequire}">
						<span class="input-title" v-if="config.EmailIsRequire">电子邮箱</span>
						<normal-input 
							 v-if="config.EmailIsRequire"
							myPlaceholder="请输入您的电子邮箱账号" 
							:myStyleObject="inputStyleObject"
							v-model="email">
						</normal-input>
					</li>

					<li v-bind:class="{'empty': !config.PhoneIsRequire}">
						<span class="input-title" v-if="config.PhoneIsRequire">手机号码</span>
						<normal-input 
							 v-if="config.PhoneIsRequire"
							myPlaceholder="请输入您的手机号码" 
							:myStyleObject="inputStyleObject"
							v-model="phone">
						</normal-input>
					</li>

					<li v-bind:class="{'empty': !config.TrueNameIsRequire}">
						<span class="input-title" v-if="config.TrueNameIsRequire">真实姓名</span>
						<normal-input 
							 v-if="config.TrueNameIsRequire"
							myPlaceholder="请输入您的真实姓名" 
							:myStyleObject="inputStyleObject"
							v-model="truename">
						</normal-input>
					</li>

					<li>
						<span class="input-title">推广码</span>
						<normal-input 
							myPlaceholder="请输入您的推广码" 
							:myStyleObject="inputStyleObject"
							v-model="popularCode">
						</normal-input>
					</li>

					<li>
						<span class="input-title">验证码</span>
						<normal-input 
							myPlaceholder="请输入您的验证码" 
							:myStyleObject="inputStyleObject"
							v-model="verifyCode">
						</normal-input>
					</li>
				</ul>
			</div>

			<div slot="footer" class="register-footer">
				<div class="button" v-on:click="goRegister">立即注册</div>
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
		name: 'register',
		
		data: function () {
			return {
				username: '',
				userpass: '',
				comfirmPassword: '',
				popularCode: '',
				email: '',
				phone: '',
				truename: '',
				verifyCode: '',
				showSpinner: false,

				dialogStyleObject: {
					width: '380px',
					height: 'auto',
					paddingBottom: '20px',
					background: 'linear-gradient(to top, #242655 40%, #333676)'
				},

				inputStyleObject: {
					width: '320px',
					height: '32px',
					border: '1px solid #5d5780',
				},

				len: 8,
				lenDivided: 5
			}
		},

		components: {
			'my-dialog': dialog,
			'normal-input': input
		},

		methods: {
			goRegister: function () {
				var opt;
				var callback;
				var data = this.config;
				var that = this;

				callback = function (json) {
					that.showSpinner = true;

					if (json.StatusCode && json.StatusCode != 0) {
						app.alert(json.Message);
						return;
					}
					
		        	that.$store.dispatch('setLoginStatus', {status: true});
		        	that.$store.dispatch('getLoginUserInfo');
		        	that.closeDialog();
				};

				opt = {
					url: Config.urls.signUp,
					data: {
						UserName: this.username,
						Password: this.userpass,
						ExtendCode: this.popularCode,
						RegWebSite: window.location.host
					}
				};

				if (data.EmailIsRequire) {
					opt.data.Email = this.email;
				}

				if (data.PhoneIsRequire) {
					opt.data.Phone = this.phone;
				}

				if (data.TrueNameIsRequire) {
					opt.data.TrueName = this.truename;
				}

				this.showSpinner = true;
				Service.post(opt, callback);
			},

			goLogin: function () {
				this.closeDialog();
				this.$store.dispatch('switchLoginDialog', {status: true});
			},

			resetDialog: function () {
				this.username        = '';
				this.userpass        = '';
				this.comfirmPassword = '';
				this.popularCode     = '';
				this.email           = '';
				this.phone           = '';
				this.truename        = '';
				this.verifyCode      = '';
			},

			closeDialog: function () {
				this.resetDialog();
				this.$store.dispatch('switchRegisterDialog', {status: false});
			}
		},

	  	computed: mapState({
			//$refs 只在组件渲染完成后才填充，并且它是非响应式的。
			//它仅仅作为一个直接访问子组件的应急方案——应当避免在模版或计算属性中使用 $refs 

	  		showDialog: function (state) {
	  			return state.showRegisterDialog;
	  		},

	  		config: function (state) {
	  			return state.registerConfig;
	  		}
	  	}),

	  	watch: {
	  		config: function () {
	  			if (!this.config.EmailIsRequire) {
	  				this.len--;
	  			}

	  			if (!this.config.PhoneIsRequire) {
	  				this.len--;
	  			}

	  			if (!this.config.TrueNameIsRequire) {
	  				this.len--;
	  			}

	  			if (this.len > this.lenDivided) {
	  				this.dialogStyleObject.width = '760px';
	  			} else {
	  				this.dialogStyleObject.width = '380px';
	  			}
	  		}
	  	}
	}
</script>

<style lang="scss" scoped>
	.register {
		width: 380px;
		height: auto;
		position: relative;

		.register-header {
			position: relative;
			height: 180px;

			.title {
				color: #e9e8ec;
			    font-size: 40px;
			    font-weight: bold;
				text-align: center;
				padding-top: 62px;
			}

			.login {
				font-size: 13px;
				text-align: center;
				margin-top: 12px;

				.login-now {
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

		.register-body {
			padding: 0 30px;
			font-size: 14px;
			position: relative;

			ul {
				list-style: none;
				width: 380px;
			}

			.multi-line {
				width: 100%;
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;

				li {
					display: inline-block;
					margin-left: 20px;
				}

				.empty {
					margin-left: 0;	
				}
			}

			.input-title {
				display: block;
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

		.register-footer {
			padding: 0 30px;
			text-align: center;

			.button {
				background-color: #518743;
				color: #FFF;
				cursor: pointer;
				display: inline-block;
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