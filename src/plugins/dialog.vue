<template>
 	<transition name="dialog">
	    <div class="dialog-mask" v-show="showDialog">
		    <div class="dialog-wrapper">
		        <div class="dialog-container" v-bind:style="styleObject">
		          	<div class="dialog-header">
		            	<slot name="header"></slot>
		         	</div>

		          	<div class="dialog-body">
		            	<slot name="body"></slot>
		          	</div>

		          	<div class="dialog-footer">
		            	<slot name="footer">
			              	default footer
			              	<button class="dialog-default-button" @click="$emit('close')">
			                	OK
			              	</button>
		            	</slot>
		          	</div>

					<div class="spinner-overlay" v-show="showSpinner">
						<scale-loader></scale-loader>
					</div>
		        </div>
		    </div>
	    </div>
  	</transition>
</template>


<script>
/*  【注意】：如果出现了vue-spinner的动画失效的问题，请注意设置webpack的OptimizeCSSPlugin为安全模式，
    设置方法如下：
    new OptimizeCSSPlugin({     //注意：一定要加上cssProcessorOptions的安全选项，
                                //否则：会出现vue-spinner的动画不能加载的情况，
                                //它会直接把vue-spinner的keysframes去掉了
      cssProcessorOptions: {
        safe: true
      }
    })
*/
	import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue';

	export default {
		name: 'dialog',

		props: [
			'zIndex',
			'showSpinner',
			'showDialog',
			'styleObject'
		],

		components: {
			'scale-loader': ScaleLoader
		}
	}
</script>

<style lang="scss" scoped>
	.dialog-mask {
		position: fixed;
		z-index: 9998;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .5);
		display: table;
		transition: opacity .3s ease;

		.dialog-wrapper {
			display: table-cell;
			vertical-align: middle;

			.dialog-container {
				color: #9992ae;
				margin: 0px auto;
				background-color: #fff;
				border-radius: 2px;
				box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
				transition: all .3s ease;
				font-family: Helvetica, Arial, sans-serif;
				position: relative;

				.spinner-overlay {
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					background-color: rgba(19, 16, 30, .85);

					.v-spinner {
						display: inline-block;
						position: absolute;
						top: 50%;
						left: 50%;
						margin-left: -25px;
					}

					svg {
						display: inline-block;
						position: absolute;
						top: 50%;
						left: 50%;
						margin-left: -25px;
					}

					.spinner {
						display: inline-block;
						position: absolute;
						top: 50%;
						left: 50%;
						margin-left: -20px;
					}
				}
			}
		}
	}

	.dialog-enter {
		opacity: 0;

		.dialog-container {
		  	-webkit-transform: scale(1.1);
		  	transform: scale(1.1);
		}
	}

	.dialog-leave-active {
		opacity: 0;

		.dialog-container {
		  	-webkit-transform: scale(1.1);
		  	transform: scale(1.1);
		}
	}
</style>