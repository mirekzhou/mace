<template>
	<div class="suspension">
		<ul>
			<li>
				<div class="cuboid qq-cuboid">客服QQ 87611136</div>
				<div class="icon">
					<span class="suspension-icon-qq"></span>
				</div>
			</li>

			<li>
				<div class="cuboid phone-cuboid">客服电话 +639158888877</div>
				<div class="icon">
					<span class="suspension-icon-phone"></span>
				</div>
			</li>

			<li>
				<div class="cuboid cs-cuboid">24小时在线客服</div>
				<div class="icon">
					<span class="suspension-icon-cs"></span>
				</div>
			</li>

			<li>
				<div class="cuboid qr-cuboid">QR Code</div>
				<div class="icon">
					<span class="suspension-icon-qrcode"></span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'suspension',
		
		data: function () {
			return {

			}
		},

		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.suspension {
	    position: fixed;
	    top: 29%;
	    right: 0;
	    z-index: 10;

	    ul {
	    	list-style: none;
	    	padding-right: 2px;

	    	li {
	    		height: 40px;
	    		width: 35px;
	    		text-align: center;
	    		margin-bottom: 3px;
	    		position: relative;

	    		.icon {
		    		background-color: #0c1135;
		    		border: 0;
		    		border-radius: 4px;
		    		cursor: pointer;
		    		height: 40px;
		    		line-height: 40px;
		    		width: 35px;
		    		z-index: 100;
		    		position: relative;
		    		transition: all 0.3s ease-in-out 0.1s;
	    		}

	    		.cuboid {
	    			background-color: #a40000;
		    		border: 0;
		    		border-radius: 8px;
	    			color: #FFF;
	    			cursor: pointer;
	    			display: inline-block;
		    		height: 40px;
		    		line-height: 40px;
		    		opacity: 0;
		    		width: 0;
		    		position: absolute;
		    		top: 0;
		    		right: 0;
		    		transition: all 0.3s ease-in-out 0.1s;
		    		overflow: hidden;
		    		text-align: left;
	    		}

	    		&:hover {
	    			.icon {
	    				background-color: #a40000;
	    			}

	    			.cuboid {
	    				opacity: 1;
	    				padding-left: 10px;
	    			}

	    			.qq-cuboid {
	    				width: 190px;
	    			}

	    			.phone-cuboid {
	    				width: 240px;
	    			}

	    			.cs-cuboid {
	    				width: 170px;
	    			}

	    			.qr-cuboid {
	    				width: 120px;
	    			}

	    		}
	    	}
	    }

	    .suspension-icon-qq {
			background-image: url(../assets/common.png);
			background-position: -55px -283px;
			display: inline-block;
			width: 22px;
			height: 22px;
			vertical-align: middle;
			cursor: pointer;
	    }

	    .suspension-icon-phone {
			background-image: url(../assets/common.png);
			background-position: -106px -283px;
			display: inline-block;
			width: 22px;
			height: 22px;
			vertical-align: middle;
			cursor: pointer;
	    }

	    .suspension-icon-cs {
			background-image: url(../assets/common.png);
			background-position: -6px -285px;
			display: inline-block;
			width: 22px;
			height: 22px;
			vertical-align: middle;
			cursor: pointer;
	    }

	    .suspension-icon-qrcode {
			background-image: url(../assets/common.png);
			background-position: -79px -285px;
			display: inline-block;
			width: 22px;
			height: 22px;
			vertical-align: middle;
			cursor: pointer;
	    }
	}
</style>