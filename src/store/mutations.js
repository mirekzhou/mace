/*
**  【1】 mutation必须同步执行, 所以异步请求不能写在mutation里面
**  【2】 mutation的参数是state
*/

export default {
	SET_LOGIN_STATUS: function (state, opt) {
		state.loginStatus = opt.status;
	},

	SET_LOGIN_USER_INFO: function (state, opt) {
		state.loginUserInfo = opt.data;
	},

	SET_SPORT_URL: function (state, opt) {
		state.sportUrl = opt.url;
	},

	SET_SPORT_TRY_URL: function (state, opt) {
		state.sportTryUrl = opt.url;
	},

	SET_PHONE_BETTING_URL: function (state, opt) {
		state.phoneBettingUrl = opt.url;
	},

	SET_PHONE_BETTING_TRY_URL: function (state, opt) {
		state.phoneBettingTryUrl = opt.url;
	},

	SET_LOGIN_DIALOG_STATUS: function (state, opt) {
		state.showLoginDialog = opt.status;
	},

	SET_REGISTER_DIALOG_STATUS: function (state, opt) {
		state.showRegisterDialog = opt.status;
	},

	SET_LOGIN_STATUS: function (state, opt) {
		state.loginStatus = opt.status;
	},

	SET_ALERT_STATUS: function (state, opt) {
		state.showAlert = opt.status;
	},

	SET_REGISTER_CONFIG: function (state, opt) {
		state.registerConfig = opt.data;
	},

	SET_COLLECTED_GAMES: function (state, opt) {
		state.collectedGames = opt.data;
	},

	SET_HEADER_BACK_STATUS: function (state, opt) {
		state.showBack = opt.status;
	},

	SET_SLOT_CATEGORY_INDEX: function (state, opt) {
		state.slotCategoryIndex = opt.data;

		if (state.slotCategoryList.length < 1) {
			return;
		}

		state.slotCategoryId    = state.slotCategoryList[state.slotCategoryIndex].Id;
	},

	SET_SLOT_CATEGORY_LIST: function (state, opt) {
		state.slotCategoryList = opt.data;
	},

	SET_SLOT_PLATFORM: function (state, opt) {
		state.slotPlatform = opt.data;
	}
};