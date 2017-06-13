<template>
 	<transition name="alert">
	    <div class="alert-mask" v-show="showAlert">
		    <div class="alert-wrapper">
		        <div class="alert-container" v-bind:style="styleObject">
		          	<div class="alert-header">
		            	{{title}}
		         	</div>

		          	<div class="alert-body">
		            	{{message}}
		          	</div>

		          	<div class="alert-footer">
		            	<button>确定</button>
		          	</div>
		        </div>
		    </div>
	    </div>
  	</transition>
</template>

<script>
	export default {
		name: 'alert',

		props: [
			'zIndex',
			'showSpinner',
			'showAlert',
			'styleObject'
		],

		components: {
		}
	}
</script>

<style lang="scss" scoped>
	.alert-mask {
		position: fixed;
		z-index: 9998;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .5);
		display: table;
		transition: opacity .3s ease;

		.alert-wrapper {
			display: table-cell;
			vertical-align: middle;

			.alert-container {
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
					background-color: rgba(0, 0, 0, .2);

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

	.alert-enter {
		opacity: 0;

		.alert-container {
		  	-webkit-transform: scale(1.1);
		  	transform: scale(1.1);
		}
	}

	.alert-leave-active {
		opacity: 0;

		.alert-container {
		  	-webkit-transform: scale(1.1);
		  	transform: scale(1.1);
		}
	}
</style>