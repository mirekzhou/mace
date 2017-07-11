<template>
	<div class="input">
		<input ref="input"
			   v-bind:value="value"
			   v-on:input="updateValue($event.target.value)"
			   v-bind:placeholder="myPlaceholder" 
			   v-bind:type="myType"
			   v-bind:style="styleObject" />
	</div>
</template>

<script>
	export default {
		name: 'my-input',

		props: [
			'myStyleObject',
			'myPlaceholder',
			'myType',
			'value'
		],
		
		data: function () {
			return {
				placeholder: this.myPlaceholder,
				styleObject: this.myStyleObject,
				type: this.myType
			}
		},

		methods: {
			updateValue: function (value) {
				//this.$refs.input.value = value;  //通过this.$refs.input可以访问input元素
				this.$emit('input', value);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.input {
		background: 0;
		border: 0;
		border-bottom: 1px solid #7d7aa7;
		display: inline-block;
		height: 45px;
		line-height: 45px;

		input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {
		    background-color: transparent !important;
		    background-image: none;
		    color: rgb(0, 0, 0);
		}

		input::-webkit-input-placeholder, textarea::-webkit-input-placeholder { 
		    color: #7c79a8;
		}

		input {
			background: none;
			border: 0;
			color: #9992ae;
			outline: none;
			text-indent: 8px;
		    height: 100%;
		    display: inline-block;
		    vertical-align: top;
		}
	}
</style>