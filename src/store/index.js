import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';      //不能是 'actions', 而是'./actions'
import mutations from './mutations';
/*import getters from 'getters';
import modules from 'modules';*/

/*
** 【1】 store存在的意义：管理组件的【共享状态】。
** 【2】 改变store中的状态的唯一途径就是现实的提交(commit) mutations， 不要直接改变store中的状态!!!!
**     eg: store.commit('inrement');
**
*/
Vue.use(Vuex);

const state = {
	loginStatus            :   '',      //登录状态
	loginUserInfo          :   '',      //已登录用户信息
	balance                :   '',      //用户余额
	proxy                  :   '',      //代理号
	gameWins               :   {},      //各平台游戏打开的窗口
	jackpotGames           :   [],      //彩金游戏
	registerConfig         :   '',      //注册配置
	collectedGames         :   [],      //收藏的游戏
	platformsInfo          :   '',      //平台配置信息

	trueNameStatus         :   '',      //是否绑定真实姓名
	userPhoneStatus        :   '',      //是否绑定手机号码
	userEmailStatus        :   '',      //是否绑定邮箱
	userBankCards          :   '',      //用户银行卡数量

	sportUrl               :   '',      //登录状态体育url
	sportTryUrl            :   '',      //非登录状态体育url
	phoneBettingUrl        :   '',      //登录状态电投url
	phoneBettingTryUrl     :   '',      //非登录状态电投url

	proxyLoginUrl          :   '',      //代理登录url
	onlineServiceUrl       :   '',      //客服url
	gameCollections        :   [],      //游戏收藏列表

	showLoginDialog        :   false,
	showRegisterDialog     :   false,
	showAlert              :   false,

	showBack               :   false,

	slotPlatform           :   '',     //电子游戏平台
	slotCategoryId         :   '',     //电子游戏categoryId
	slotCategoryIndex      :   0,      //电子游戏category索引
	slotCategoryList       :   []      //电子游戏cateGory列表
};

export default new Vuex.Store({
	state      :  state,
	actions    :  actions,
	mutations  :  mutations
});

