import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.config.debug = true;
Vue.use(VueRouter);

export default new VueRouter({
	mode: 'hash',
	base: __dirname,
	routes: [
		{
			path: '/',
			name: '/',
			component: function (resolve) {
				require(['../components/home/home.vue'], resolve);
			}
		},
		{
			path: '/home',
			name: 'home',
			component: function (resolve) {
				require(['../components/home/home.vue'], resolve);
			}
		},
		{
			path: '/slot',
			name: 'slot',
			component: function (resolve) {
				require(['../components/slot/slot.vue'], resolve);
			}
		},
		{
			path: '/promotion',
			name: 'promotion',
			component: function (resolve) {
				require(['../components/promotion/promotion.vue'], resolve);
			}
		},
		{
			path: '/wallet',
			name: 'wallet',
			component: function (resolve) {
				require(['../components/wallet/wallet.vue'], resolve);
			}
		},
		{
			path: '/userCenter',
			name: 'userCenter',
			component: function (resolve) {
				require(['../components/userCenter/userCenter.vue'], resolve);
			}
		}
	]
});