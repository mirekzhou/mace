<template>
	<div class="game-portal">
		<ul>
			<li v-for="item in items" v-on:click="jump(item)">
				<router-link :to="{name: item.route, params:{platform:item.platform}}" tag="div">
					<img :src="item.src" />
					<p>{{item.name}}</p>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import agImg from "../../assets/img/ag.svg";
	import bbinImg from "../../assets/img/bbin.svg";
	import byImg from "../../assets/img/by.svg";
	import kgImg from "../../assets/img/kg.svg";
	import mgImg from "../../assets/img/mg.svg";
	import ppImg from "../../assets/img/pp.svg";
	import ptImg from "../../assets/img/pt.svg";
	import sportImg from "../../assets/img/sport.svg";

	export default {
		name: 'game-portal',
		
		data: function () {
			return {
				items: [
					{src: sportImg, className: 'icon-sport', name: '体育赛事',  type: 'sport',    platform: 'T188',  route: ''},
					{src: agImg,    className: 'icon-AG',    name: 'AG视讯',    type: 'casino',   platform: 'AG',    route: ''},
					{src: bbinImg,  className: 'icon-BBIN',  name: 'BBIN视讯',  type: 'casino',   platform: 'BBIN',  route: ''},
					{src: byImg,    className: 'icon-BY',    name: '捕鱼王',    type: 'slot',     platform: 'AG',    route: ''},
					{src: ppImg,    className: 'icon-PP',    name: 'PP电子',    type: 'slot',     platform: 'PP',    route: 'slot'},
					{src: ptImg,    className: 'icon-PT',    name: 'PT电子',    type: 'slot',     platform: 'PT',    route: 'slot'},
					{src: ptImg,    className: 'icon-MG',    name: 'MG电子',    type: 'slot',     platform: 'MG',    route: 'slot'},
					{src: kgImg,    className: 'icon-KG',    name: 'KG彩票',    type: 'lottery',  platform: 'KG',    route: ''}
				]
			}
		},

		methods: {
			jump: function (item) {
				if (!item.route) {
					window.open('http://www.baidu.com', '_blank', 'location=yes');
				}
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
			flex-wrap: wrap;

			li {
				display: inline-block;
				width: 25%;
				text-align: center;
				margin-top: .3rem;

				.iconfont {
					color: #914fce;
    				font-size: .48rem;
				}

				p {
					font-size: .14rem;
					color: #333;
					margin-top: .05rem;
				}
			}
		}
	}
</style>