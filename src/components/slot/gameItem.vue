<template>
	<div class="game-item" v-on:click="openGame">
		<div class="image" v-bind:style="{backgroundImage: imgUrl}"></div>
		<div class="name">{{cnname}}</div>
	</div>
</template>

<script>
	import Config from '../../config/config.js';
	import Service from '../../service/service.js';

	export default {
		name: 'game-item',

		props: [
			'gameId',        //游戏Id
			'identify',      //游戏Identity
			'isTry',         //是否可以试玩
			'gameType',      //游戏类型
			'platform',      //游戏平台
			'collectid',     //收藏Id
			'collected',     //是否已经被收藏
			'cnname',        //游戏中文名称
			'showJackpots',  //是否显示奖金池
			'jackpotUrl',    //jackpot奖金池url
			'imageUrl'       //游戏图片url
		],

		data: function () {
			return {
				imgUrl:  'url(' + Config.imageServer + this.imageUrl + ')',
				collectFlag: this.collected
			}
		},

		watch: {
			imageUrl: function () {
				this.imgUrl = 'url(' + Config.imageServer + this.imageUrl + ')';
			}
		},

		methods: {
			openGame: function (cb) {
				var that = this;

		        var opt =  {
		            url: Config.urls.getGameLoginUrl,
		            data: {
		                gamePlatform: this.platform,
		                gameType: 'slot',
		                gameId: this.identify
		            }
		        };

		        var callback = function (data) {
		            if (typeof cb === 'function') {
		                cb(data);
		            } else {
		            	if (that.platform == 'PT') {
		            		window.open(data, '_blank', 'location=yes');
		            	} else {
		            		window.open(data, '_blank', 'location=yes');
		            	}
		                
		            }
		        };

		        Service.get(opt, callback);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.game-item {
		width: 1.05rem;
		height: 1.3rem;

		.image {
			border: 1px solid #ddd;
			width: 100%;
			height: 1.05rem;
		    background-position: 0 0;
		    background-size: 1.05rem 1.05rem;
		    background-repeat: no-repeat;
		    position: relative;
		}

		.name {
			color: #333;
			width: 100%;
			height: .25rem;
			line-height: .25rem;
			text-align: center;
		    overflow: hidden;
		    white-space: nowrap;
		    text-overflow: ellipsis;
		}
	}
</style>