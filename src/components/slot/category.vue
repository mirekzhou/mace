<template>
	<div class="game-category">
		<ul>
			<li v-for="(item, index) in slotCategoryList" 
				v-bind:class="[index == slotCategoryIndex?'selected': '']"
				v-on:click="itemClicked(index)">

				<span>{{item.Name}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	import { mapActions } from 'vuex';
	import { mapState } from 'vuex';
	import Config from '../../config/config.js';
	import Service from '../../service/service.js';

	export default {
		name: 'game-category',

		mounted: function () {
			this.getCategoryList();
		},

	  	computed: mapState({
	  		slotCategoryIndex: function (state) {
	  			return state.slotCategoryIndex;
	  		},

	  		slotCategoryList: function (state) {
	  			return state.slotCategoryList;
	  		},
	  	}),

		methods: {
			getCategoryList: function () {
				var i;
				var opt;
				var callback;
				var that = this;
				var eGameCategoryData = localStorage.getItem('e-game-category');

				if (eGameCategoryData) {
		        	this.$store.dispatch('setSlotCategoryList', {data:JSON.parse(eGameCategoryData)});
		        	return;
				}

				opt = {
					url: Config.urls.getGameCategories,
					data: {
						code: 'electron'
					}
				};

				callback = function (json) {
					if (json.StatusCode && json.StatusCode != 0) {
						alert(json.Message);
						return;
					}

					for (i = 0; i < json.length; i++) {
						if (json[i].Code == 'slot999') {
							json[i].Id = '';
						}
					}

					that.$store.dispatch('setSlotCategoryList', {data: json});
					localStorage.setItem('e-game-category', JSON.stringify(json));
				};

				Service.get(opt, callback);
			},

			itemClicked: function (index) {
				this.$store.dispatch('setSlotCategoryIndex', {data: index});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.game-category {
		$height  : .36rem;

		height: $height;
		width: 100%;
		overflow: scroll;
		-webkit-overflow-scrolling: touch;

		ul {
			background-color: #f0f0f0;
			list-style: none;
			min-width: 250%;

			li {
				color: #333;
				display: inline-block;
				font-size: .16rem;
				height: $height;
				line-height: $height;
				width: 1.25rem;
				text-align: center;

				span {

				}
			}

			.selected {
				color: #914fce;
				border-bottom: 2px solid #914fce;
			}
		}

		&::-webkit-scrollbar {
		    display: none;
		}
	}
</style>