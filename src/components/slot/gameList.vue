<template>
	<div class="game-list" @scroll="onScroll" v-touch:left="swipeLeft" v-touch:right="swipeRight">
		<div class="ul" :style="">
			<game-item  v-for          =  "item in gameList"
						:gameId        =  "item.Id"
						:identify      =  "item.GameIdentify"
						:isTry         =  "item.IsTry"
						:gameType      =  "item.GameTypeText_EN"
						:platform      =  "item.Api.GamePlatform"
						:cnname        =  "item.Title"
						:showJackpots  =  "item.ShowJackpots"
						:imageUrl      =  "item.ImageUrl"
						:collected     =  "false"
						key            =  "item">
			</game-item>

			<div class="load-more-gif">{{loadingText}}</div>
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex';
	import { mapState } from 'vuex';
	import Config from '../../config/config.js';
	import Service from '../../service/service.js';
	import gameItem from './gameItem';

	export default {
		name: 'game-list',
		
		data: function () {
			return {
				canSwipe       : true,
				gameList       :  [],
				pageIndex      :  0,        //当前页
				pageSize       :  12,       //每页游戏数量
				loadingText    :  'loading...',
				gameTotalCount :  0
			}
		},

		components: {
			'game-item': gameItem
		},

		watch: {
			slotPlatform: function () {
				this.canSwipe       = true;
				this.pageIndex      = 0;
				this.canLoadMore    = true;
				this.gameTotalCount = 0;
				this.loadingText    = 'loading...';
				this.$store.dispatch('setSlotCategoryIndex', {data: 0});
				this.getGameList();
			},

			slotCategoryId: function () {
				this.canSwipe       = true;
				this.pageIndex      = 0;
				this.canLoadMore    = true;
				this.gameTotalCount = 0;
				this.loadingText    = 'loading...';
				this.getGameList();
			}
		},

	  	computed: mapState({
	  		slotPlatform: function(state) {
	  			return state.slotPlatform;
	  		},

	  		slotCategoryId: function (state) {
	  			return state.slotCategoryId;
	  		},

	  		slotCategoryIndex: function (state) {
	  			return state.slotCategoryIndex;
	  		},

	  		slotCategoryList: function (state) {
	  			return state.slotCategoryList;
	  		}
	  	}),

		methods: {
			/*
			**  获取游戏数据
			*/
			getGameList: function (cb) {
				var opt;
				var callback;
				var storageId;
				var that = this;

				if (!this.slotPlatform || this.slotCategoryId == '--') {
					return;
				}

				if (this.getDataFromLocalStorage()) {
					return;
				}

				this.canSwipe = false;

				callback = function (data) {
					if (data.StatusCode && data.StatusCode != 0) {
						alert(data.Message);
						return;
					}

					that.gameTotalCount = data.count;
					that.setDataToLocalStorage(data);
					that.setGameList(data.list);
					that.canSwipe = true;
				};

				opt  =  {
					url: Config.urls.getGameList,
					data: {
						platform   : this.slotPlatform,
						categoryId : this.slotCategoryId,
						pageIndex  : this.pageIndex,
						pageSize   : this.pageSize,
						isMobile   : true
					}
				};

				Service.get(opt, callback);
			},

			/*
			**  从localStorage获取游戏数据
			*/
			getDataFromLocalStorage: function () {
				var count;
				var data;
				var categoryId;
				var storageId;
				var gameTotalCountId;

				if (this.slotCategoryId == '') {
					categoryId = 'all';
				} else {
					categoryId = this.slotCategoryId;
				}

				storageId           = 'slot|' + this.slotPlatform + '|' + categoryId + '|' + this.pageIndex;
				gameTotalCountId    = 'slot|' + this.slotPlatform + '|' + categoryId + '|count';
				data                = localStorage.getItem(storageId);
				count               = localStorage.getItem(gameTotalCountId);

				if (data && count) {
					data = JSON.parse(data);
					this.gameTotalCount = count;
					this.setGameList(data);
					return true;
				}

				return false;
			},

			/*
			**  设置游戏数据到localstorage
			*/
			setDataToLocalStorage: function (data) {
				var categoryId;
				var storageId;
				var gameTotalCountId;

				if (data.count <= 0) {
					return;
				}

				if (this.slotCategoryId == '') {
					categoryId = 'all';
				} else {
					categoryId = this.slotCategoryId;
				}

				//存储游戏data
				storageId = 'slot|' + this.slotPlatform + '|' + categoryId + '|' + this.pageIndex;
				localStorage.setItem(storageId, JSON.stringify(data.list));

				//存储游戏count
				gameTotalCountId = 'slot|' + this.slotPlatform + '|' + categoryId + '|count';
				localStorage.setItem(gameTotalCountId, JSON.stringify(data.count));
			},

			setGameList: function (data) {
				if (this.pageIndex == 0) {
					this.gameList = data;
				} else {
					this.gameList = this.gameList.concat(data);
				}

				if (this.gameList.length >= this.gameTotalCount) {
					this.loadingText = 'No more data';
					this.canLoadMore = false;
				} else {
					this.canLoadMore = true;
				}
			},

			onScroll: function () {
				var scrollTop     = this.$el.scrollTop;
				var ulHeight      = this.$el.querySelectorAll('.ul')[0].offsetHeight;
				var contentHeight = this.$el.offsetHeight;

				if (ulHeight - scrollTop - contentHeight < 40 && this.canLoadMore) {
					this.canLoadMore = false;
					this.pageIndex++;
					this.getGameList();
				}
			},

			swipeLeft: function () {
				var index = this.slotCategoryIndex;
				var len = this.slotCategoryList.length;

				if (!this.canSwipe) {
					return;
				}

				if (index == len) {
					return;
				}

				index++;
				this.$store.dispatch('setSlotCategoryIndex', {data: index});
			},

			swipeRight: function () {
				var index = this.slotCategoryIndex;

				if (!this.canSwipe) {
					return;
				}

				if (index == 0) {
					this.$router.back();
					return;
				}

				index--;

				this.$store.dispatch('setSlotCategoryIndex', {data: index});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.game-list {
		padding: .2rem .1rem;
		width: 100%;
		height: 100%;
		overflow-y: scroll;
		-webkit-overflow-scrolling: touch;

		.ul {
			box-sizing: border-box;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;
			text-align: left;
			padding-bottom: 30px;
		}

		.load-more-gif {
		    width: 100%;
		    height: 44px;
		    text-align: center;
		    line-height: 44px;
		    background: #fff;
		    border-top: none;
		    color: #48B884;
		}

		&::-webkit-scrollbar {
		    display: none;
		}
	}
</style>