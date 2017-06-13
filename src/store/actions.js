import Config from '../config/config.js';
import Service from '../service/service.js';

export default {
	getLoginStatus: function ({state, dispatch, commit}) {
		var status;
    	var opt = {
    		url: Config.urls.loginStatus
    	};

		Service.get(opt, function (data) {
			status = (data == 0)?true : false;
			commit('SET_LOGIN_STATUS', {status: status});

			if (status) {
				dispatch('getLoginUserInfo');

				if (!state.sportUrl) {
					dispatch('getSportUrl');
				}

				if (!state.phoneBettingUrl) {
					dispatch('getPhoneBettingUrl');
				}
			} else { 
				if (!state.sportTryUrl) {
					dispatch('getSportTryUrl');
				}

				if (!state.phoneBettingTryUrl) {
					dispatch('getPhoneBettingTryUrl');
				}
			}
		});
	},

	getLoginUserInfo: function ({commit}) {
		var opt = {
			url: Config.urls.getLoginInUserInfo
		};

		Service.get(opt, function (data) {
			commit('SET_LOGIN_USER_INFO', {data: data});
		});
	},

	getSportUrl: function ({commit}) {
    	var opt = {
			url: Config.urls.getGameLoginUrl,
			data: {
				gamePlatform: 'T188',
				gameType: 'sport'
			}
		};
		
		Service.get(opt, function (data) {
			commit('SET_SPORT_URL', {url: data});
		});
	},

	getSportTryUrl: function ({commit}) {
		var opt = {
			url: Config.urls.getGameLaunchUrl,
			data: {
				gamePlatform: 'T188',
				gameType: 'sport'
			}
		};

		Service.get(opt, function (data) {
			commit('SET_SPORT_TRY_URL', {url: data});
		});
	},

	getPhoneBettingUrl: function ({commit}) {
    	var opt = {
			url: Config.urls.getGameLoginUrl,
			data: {
				gamePlatform: 'SCM',
				gameType: 'casino'
			}
		};
		
		Service.get(opt, function (data) {
			commit('SET_PHONE_BETTING_URL', {url: data});
		});
	},

	getPhoneBettingTryUrl: function ({commit}) {
		var opt = {
			url: Config.urls.getGameLaunchUrl,
			data: {
				gamePlatform: 'SCM',
				gameType: 'casino'
			}
		};

		Service.get(opt, function (data) {
			commit('SET_PHONE_BETTING_TRY_URL', {url: data});
		});
	},

	getRegisterConfig: function ({commit}) {
		var callback;
		var opt  =  {
			url: Config.urls.getRegistSetting,
	        data: {}
		};

		callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				alert(json.Message);
				return;
			}

			commit('SET_REGISTER_CONFIG', {data: json});
		};

		Service.get(opt, callback);
	},

	getCollectedGames: function ({commit}) {
		var opt;
		var callback;

		opt = {
			url: Config.urls.getFavoriteGames,
			data: {
				platform: '',
				pageSize: 10,
				pageIndex: 0
			}
		};
		
		callback = function (json) {
			if (json.StatusCode && json.StatusCode != 0) {
				alert(json.Message);
				return;
			}

			commit('SET_COLLECTED_GAMES', {data: json.Data.list});
		};

		Service.get(opt, callback);
	},

	switchLoginDialog: function ({commit}, opt) {
		commit('SET_LOGIN_DIALOG_STATUS', {status: opt.status});
	},

	switchRegisterDialog: function ({commit}, opt) {
		commit('SET_REGISTER_DIALOG_STATUS', {status: opt.status});
	},

	setLoginStatus: function ({commit}, opt) {
		commit('SET_LOGIN_STATUS', {status: opt.status});
	},

	setAlertStatus: function ({commit}, opt) {
		commit('SET_ALERT_STATUS', {status: opt.status});
	},

	setHeaderBackStatus: function ({commit}, opt) {
		commit('SET_HEADER_BACK_STATUS', {status: opt.status});
	},

	setSlotCategoryIndex: function ({commit}, opt) {
		commit('SET_SLOT_CATEGORY_INDEX', {data: opt.data});
	},

	setSlotCategoryList: function ({state, commit}, opt) {
		commit('SET_SLOT_CATEGORY_INDEX', {data: 0});
		commit('SET_SLOT_CATEGORY_LIST', {data: opt.data});
	},

	setSlotPlatform: function ({commit}, opt) {
		commit('SET_SLOT_PLATFORM', {data: opt.data});
	}
};