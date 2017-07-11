<template>
	<div class="button">
	</div>
</template>

<script>
	export default {
		name: 'my-button',

		props: [
			'myStyleObject',
			'myPlaceholder',
			'myType',
			'value'
		],
		
		data: function () {
			return {
				styleObject: this.myStyleObject
			}
		},

		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	.button {
	}
</style>