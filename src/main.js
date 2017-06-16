// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App'
import router from './router';
import store from './store';
import fastClick from 'fastclick';

var isMobile = {
    android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    blackberry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    ios: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    ios7up: function() {
        return navigator.userAgent.match(/(iPad|iPhone|iPod touch);.*CPU.*OS [7|8|9]_\d/i);
    },
    opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    ipad: function () {
        var ios = this.ios();
        return !!(ios && ios[0] === 'iPad');
    },
    any: function() {
        return (this.android() || this.blackberry() || this.ios() || this.opera() || this.windows());
    }
};

if (isMobile.android()) {
	require('../cordova/platforms/android/assets/www/cordova.js');
} else if (isMobile.ios()) {
	require('../cordova/platforms/ios/CordovaLib/cordova.js');
}

Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,               //es6的语法, 等同于： router:router
	store,                //es6的语法, 等同于： store:store
	template: '<App/>',
	components: { App }
});

if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		fastClick.attach(document.body);
	}, false);

	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
    window.open = cordova.InAppBrowser.open;
}

import touch from 'vue-directive-touch';
Vue.use(touch);