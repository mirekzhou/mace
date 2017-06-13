import ENV from '../env.js';

var domain;
var cometDomain;
var imageServer;
var env                  = ENV.VEB_ENV;
var liveCsUrl            = 'https://server.iad.liveperson.net/hc/63269832/?cmd=file&amp;file=preChatSurveyContent&amp;site=63269832&amp;sessionkey=H2423850037524059158-b3de96a250df4028b9d87d2aded38e6dK13065169&amp;survey=Pre-Chat';
var localStorageDuration = 1;

//配置API域名和comet服务器域名
if (env == 'debug') {
	domain      = 'http://localhost:8088/tpgame-test/public/index.php/';
	cometDomain = '//comet.evebets.com/';
} else if (env == 'test') {
	domain      = 'http://api.evebets.com/';
	cometDomain = '//comet.evebets.com/';
} else if (env == 'production') {
	domain      = 'https://api.vebets.com/';
	cometDomain = '//comet.vebets.com/';
}

//配置图片服务器域名
if (location.href.substring(0,5) === 'https') {
	imageServer   = 'https://ojrcjvo0a.qnssl.com/';
} else {
	imageServer   = 'http://ojnau7hqi.bkt.clouddn.com/';
}

export default {
	timeout: 6000,
	domain: domain,
	cometDomain: cometDomain,
	imageServer: imageServer,
	liveCsUrl: liveCsUrl,
	localStorageDuration: localStorageDuration,
	urls: {
		signUp: domain + 'api/Account/Regist',
		agentSignUp: domain + 'api/Account/RegistAgent',
		signIn: domain + 'api/Account/Login',
		signOut: domain + 'api/Account/Logout',
		verifyImage: domain + 'api/AuthCode/CreateImageCode',
		checkVerifyImage: domain + 'api/AuthCode/CheckImageCode?',
		loginStatus: domain + 'api/Account/GetLoginStatus',
		luckyDrawWinRecords: domain + 'api/Lucky/GetPrizes?',
		
		getFavoriteGames: domain + 'api/Game/GetFavoriteGames?', //获取所有收藏的游戏
		addFavoriteGameById: domain + 'api/Game/AddFavorite',       //添加收藏游戏
		deleteFavoriteGameById: domain + 'api/Game/DeleteFavorite',  //删除收藏游戏
		getFavoriteGameIds: domain + 'api/Game/GetFavoriteGameIds?',

		getAds: domain + 'api/News/GetAds?',

		getJackpotsGames: domain + 'api/Game/GetJackpotsGames',   //获取PT奖金池游戏
		getGameCategories: domain + 'api/Game/GetCategories?',   //获取电子游艺游戏类型
		getGameList: domain + 'api/Game/GetList?',              //获取电子游艺游戏列表
		getGameLaunchUrl: domain + 'api/Game/GetGameLaunchUrl',  //游戏试玩地址
		getGameLoginUrl: domain + 'api/Game/GetGameLoginUrl',   //登录后玩游戏的地址
		getJackpotsByUrl: domain + 'api/Game/GetJackpotsByUrl',  //获取PT单个游戏jackpot基础值
		getPtSumJackpotBaseValue: 'http://tickers.playtech.com/jackpots/new_jackpotxml.php?info=4&currency=cny&casino=greatfortune88',  //获取pt jackpot总奖池基础值
		getJackpots: domain + 'api/Game/GetJackpots',  //获取MG单个游戏和总游戏jackpot基础值

		getGameUrlForLogin: domain + 'api/Game/GetGameUrlForLogin?',

		queryPromoTypes: domain + 'api/Promo/GetAllType?',
		queryPromoListByType: domain + 'api/Promo/GetList?',
		queryPromoContentById: domain + 'api/Promo/GetInfo',

		topupRecords: domain + 'api/Deposit/GetDepositList?',   //获取充值列表
		transferRecords: domain + 'api/Transfer/GetTransferList?',
		withdrawRecords: domain + 'api/Withdrawal/GetWithdrawalList?',
		bettingRecords: domain + 'api/Bet/GetBetList?',
		dividentRecords: domain + 'api/Promo/GetBonusList?',
		getStationLetters: domain + 'api/User/GetMessageList?',
		getAnnouncements: domain + 'api/News/GetNotices?',
		getStationLetterCount: domain + 'api/User/GetUnreadMessageCount?',

		getTopUpTotal: domain + 'api/Deposit/GetTotalDeposit?',
		getTransferTotal: domain + 'api/Transfer/GetTotalTransfer?',
		getWithdrawTotal: domain + 'api/Withdrawal/GetTotalWithdrawal?',
		getBettingTotal: domain + 'api/Bet/GetTotalBet?',
		getDividentTotal: domain + '',

		validateEmail: domain + 'api/User/ValidateEmail',     //验证邮箱
		validatePhone: domain + 'api/User/ValidatePhone',     //验证手机
		sendEmailValidateCode: domain + 'api/User/SendEmailValidateCode',  //发送邮箱验证码
		sendPhoneValidateCode: domain + 'api/User/SendMobileValidateCode', //发送手机验证码
		getForgetPwdValidateCode: domain + 'api/User/GetForgetPwdValidateCode?', //发送手机和邮箱验证码
		changePasswordByForget: domain + 'api/User/ChangePasswordByForget', //更改用户密码

		addUserBank: domain + 'api/Withdrawal/AddUserBank',
		getBankList: domain + 'api/Config/GetBankList',
		getProvinceList: domain + 'api/Config/GetProvinceList',
		getCityList: domain + 'api/Config/GetCityList?',

		getThirdPay: domain + 'api/Pay/GetThirdPay?',

		getWalletList: domain + 'api/Promo/GetWalletList?',
		getWalletCash: domain + 'api/User/GetWalletCash?',

		fastPay: domain + '',
		superFastTransfer: '',
		bankTransfer: '',

		getAllAPI: domain + 'api/Game/GetAllApi',
		getPlatformBalance: domain + 'api/Game/GetCash?',
		getCenterWalletCash: domain + 'api/User/GetUserCash',

		getUserPays: domain + 'api/Deposit/GetUserPays',
		payForm: domain + 'api/Pay/PayForm',
		addDeposit: domain + 'api/Deposit/AddDeposit',
		getUserAdminBank: domain + 'api/Deposit/GetUserAdminBank?',

		transferToPlatform: domain + 'api/Transfer/DoTransferToGame',
		transferToAccount: domain + 'api/Transfer/DoTransferFromGame',

		withdraw: domain + 'api/Withdrawal/DoWithdrawal',
		getUserBankList: domain + 'api/User/GetUserBankList',

		getUserBankCount: domain + 'api/User/GetUserBankCount',

		changeLoginPassword: domain + 'api/User/ChangePasswordByUser',
		changeWithdrawPassword: domain + 'api/User/UpdateWithdrawalPwd',
		checkWithdrawPwd: domain + 'api/User/CheckWithdrawPwd',

		getLoginInUserInfo: domain + 'api/Account/GetLoginUser',
		getInfoByUserName: domain + 'api/User/GetByUserName?',
		updateUserInfo: domain + 'api/User/UpdateUserInfo',
		getRouteCheckList: domain + 'api/Config/GetSpareDomain',
		getWebPageByKey: domain + 'api/News/GetNewsByKey?',
		getApi: domain + 'api/Game/GetApi?',
		getUserAccount: domain + 'api/Game/GetUserAccount?',

		getWebPageByKeyUrl: domain + 'api/News/GetNewsByKey?',
		readMessage: domain + 'api/User/ReadMessage',
		deleteMessage: domain + 'api/User/DeleteMessage',

		getRegistSetting: domain + 'api/Account/GetRegistSetting',
		getConfigItems: domain + 'api/config/items',

		getBroadcast: domain + 'api/News/GetBroadcast?'
	}
};