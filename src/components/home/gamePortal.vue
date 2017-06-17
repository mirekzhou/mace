<template>
	<v-touch class="game-portal" tag="div" v-on:swiperight="swipeRight" v-on:swipeleft="swipeLeft" v-bind:swipe-options="{direction: 'horizontal'}">
		<ul>
			<router-link to="/home" tag="li" v-for="item in items" v-on:click="jump(item)" v-bind:class="item.className">
				<div class="names">
					<p class="cn-name">{{item.cnName}}</p>
					<p class="en-name">{{item.enName}}</p>
				</div>
			</router-link>
		</ul>
	</v-touch>
</template>

<script>
	import { mapActions } from 'vuex';
	import { mapState } from 'vuex';

	export default {
		name: 'game-portal',
		
		data: function () {
			return {
				items: [
					{className: 'port-slot',    cnName: '电子游艺',  enName: 'SLOT MACHINE',        route: 'slot'},
					{className: 'port-live',    cnName: '真人游戏',  enName: 'LIVE CASINO',         route: 'live'},
					{className: 'port-sport',   cnName: '体育竞技',  enName: 'SPORTS COMPETITION',  route: 'sport'},
					{className: 'port-lottery', cnName: '捕鱼王',    enName: 'LOTTERY GAME',        route: 'lottery'}
				]
			}
		},

		methods: {
			jump: function (item) {
				if (!item.route) {
					window.open('http://www.baidu.com', '_blank', 'location=yes');
				}
			},

			swipeLeft: function () {
				this.$store.dispatch('setSideBarStatus', {data: false});
			},

			swipeRight: function () {
				this.$store.dispatch('setSideBarStatus', {data: true});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.game-portal {
		color: red;

		ul {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			flex-wrap: wrap;

			li {
				background-size: 100%;
				color: #FFF;
			    display: flex;
			    flex-direction: row;
			    align-items: center;
				margin-top: .2rem;
				width:  1.69rem;
				height: 1.53rem;

				.names {
					text-align: center;

					.cn-name {
						display: inline-block;
						font-size: .18rem;
						width: 100%;
					}

					.en-name {
						display: inline-block;
						font-size: .14rem;
						width: 100%;
					}
				}
			}

			.port-slot {
				background-image: url("../../assets/img/slot.svg");
				background-size: 100%;
			}

			.port-live {
				background-image: url("../../assets/img/live.svg");
				background-size: 100%;
			}

			.port-sport {
				background-image: url("../../assets/img/sport.svg");
				background-size: 100%;
			}

			.port-lottery {
				background-image: url("../../assets/img/lottery.svg");
				background-size: 100%;
			}
		}
	}
</style>