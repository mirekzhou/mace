<template>
	<div class="breaking-news">
		<div class="breaking-news-wrapper">
			<div class="news-icon">
				<span class="iconfont icon-voice"></span>
			</div>
			<div class="news-info">
				<ul>
					<li v-for="item in items">
						<div class="news">{{item.news}}</div>
						<!-- <div class="time">{{item.time}}</div> -->
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'breaking-news',
		
		data: function () {
			return {
				items: [
					{
						news: 'OG平台维护完成',
						time: '2017-04-21 05:25:38'
					},
					{
						news: 'BB彩票提出新游戏(经典梯子)',
						time: '2017-04-21 05:25:38'
					}
				]
			}
		},

		methods: {
			
		},

		mounted: function () {
			var a;
			var that = this;

			var st = setInterval(function () {
				a = that.items.shift();
				that.items.push(a);
			}, 3000);
		}
	}
</script>

<style lang="scss" scoped>
	.breaking-news {
		$news-height: 36px;

		background-color: #f0f0f0;
		color: #333;
		box-sizing: border-box;
		height: $news-height;
		width: 100%;

		.breaking-news-wrapper {
			display: flex;
			width: 1140px;
			height: $news-height;
			margin: 0 auto;

			.news-icon {
				display: inline-block;
				height: $news-height;
				line-height: $news-height;
				width: 30px;
				text-align: right;

				.icon-voice {
					font-size: 20px;
				}
			}

			.news-info {
				display: inline-block;
				flex-grow: 1;
				height: $news-height;
				overflow: hidden;
				font-size: 13px;
				position: relative;

				ul {
					position: absolute;
					transition: all .4s;

					li {
						cursor: pointer;
						height: $news-height;
						line-height: $news-height;
						width: 100%;
						display: flex;

						.news {
							display: inline-block;
							flex-grow: 1;
							padding: 0 10px;
						}

						.time {
							display: inline-block;
							width: 180px;
							padding: 0 10px;
						}
					}
				}
			}
		}
	}
</style>