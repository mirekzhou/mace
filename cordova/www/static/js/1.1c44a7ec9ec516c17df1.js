webpackJsonp([1],{154:function(e,t,o){o(194);var a=o(0)(o(168),o(224),"data-v-9b8b4348",null);e.exports=a.exports},165:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(35),i=o.n(a),n=o(2),s=o(7),r=o(12);t.default={name:"game-category",mounted:function(){this.getCategoryList()},computed:o.i(n.a)({slotCategoryIndex:function(e){return e.slotCategoryIndex},slotCategoryList:function(e){return e.slotCategoryList}}),methods:{getCategoryList:function(){var e,t,o,a=this,n=localStorage.getItem("e-game-category");if(n)return void this.$store.dispatch("setSlotCategoryList",{data:JSON.parse(n)});t={url:s.a.urls.getGameCategories,data:{code:"electron"}},o=function(t){if(t.StatusCode&&0!=t.StatusCode)return void alert(t.Message);for(e=0;e<t.length;e++)"slot999"==t[e].Code&&(t[e].Id="");a.$store.dispatch("setSlotCategoryList",{data:t}),localStorage.setItem("e-game-category",i()(t))},r.a.get(t,o)},itemClicked:function(e){this.$store.dispatch("setSlotCategoryIndex",{data:e})}}}},166:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(7),i=o(12);t.default={name:"game-item",props:["gameId","identify","isTry","gameType","platform","collectid","collected","cnname","showJackpots","jackpotUrl","imageUrl"],data:function(){return{imgUrl:"url("+a.a.imageServer+this.imageUrl+")",collectFlag:this.collected}},watch:{imageUrl:function(){this.imgUrl="url("+a.a.imageServer+this.imageUrl+")"}},methods:{openGame:function(e){var t=this,o={url:a.a.urls.getGameLoginUrl,data:{gamePlatform:this.platform,gameType:"slot",gameId:this.identify}},n=function(o){"function"==typeof e?e(o):(t.platform,window.open(o,"_blank","location=yes"))};i.a.get(o,n)}}}},167:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(35),i=o.n(a),n=o(2),s=o(7),r=o(12),l=o(210),c=o.n(l);t.default={name:"game-list",data:function(){return{canSwipe:!0,gameList:[],pageIndex:0,pageSize:12,loadingText:"loading...",gameTotalCount:0}},components:{"game-item":c.a},watch:{slotPlatform:function(){this.canSwipe=!0,this.pageIndex=0,this.canLoadMore=!0,this.gameTotalCount=0,this.loadingText="loading...",this.$store.dispatch("setSlotCategoryIndex",{data:0}),this.getGameList()},slotCategoryId:function(){this.canSwipe=!0,this.pageIndex=0,this.canLoadMore=!0,this.gameTotalCount=0,this.loadingText="loading...",this.getGameList()}},computed:o.i(n.a)({slotPlatform:function(e){return e.slotPlatform},slotCategoryId:function(e){return e.slotCategoryId},slotCategoryIndex:function(e){return e.slotCategoryIndex},slotCategoryList:function(e){return e.slotCategoryList}}),methods:{getGameList:function(e){var t,o,a=this;this.slotPlatform&&"--"!=this.slotCategoryId&&(this.getDataFromLocalStorage()||(this.canSwipe=!1,o=function(e){if(e.StatusCode&&0!=e.StatusCode)return void alert(e.Message);a.gameTotalCount=e.count,a.setDataToLocalStorage(e),a.setGameList(e.list),a.canSwipe=!0},t={url:s.a.urls.getGameList,data:{platform:this.slotPlatform,categoryId:this.slotCategoryId,pageIndex:this.pageIndex,pageSize:this.pageSize,isMobile:!0}},r.a.get(t,o)))},getDataFromLocalStorage:function(){var e,t,o,a,i;return o=""==this.slotCategoryId?"all":this.slotCategoryId,a="slot|"+this.slotPlatform+"|"+o+"|"+this.pageIndex,i="slot|"+this.slotPlatform+"|"+o+"|count",t=localStorage.getItem(a),e=localStorage.getItem(i),!(!t||!e)&&(t=JSON.parse(t),this.gameTotalCount=e,this.setGameList(t),!0)},setDataToLocalStorage:function(e){var t,o,a;e.count<=0||(t=""==this.slotCategoryId?"all":this.slotCategoryId,o="slot|"+this.slotPlatform+"|"+t+"|"+this.pageIndex,localStorage.setItem(o,i()(e.list)),a="slot|"+this.slotPlatform+"|"+t+"|count",localStorage.setItem(a,i()(e.count)))},setGameList:function(e){0==this.pageIndex?this.gameList=e:this.gameList=this.gameList.concat(e),this.gameList.length>=this.gameTotalCount?(this.loadingText="No more data",this.canLoadMore=!1):this.canLoadMore=!0},onScroll:function(){var e=this.$el.scrollTop;this.$el.querySelectorAll(".ul")[0].offsetHeight-e-this.$el.offsetHeight<40&&this.canLoadMore&&(this.canLoadMore=!1,this.pageIndex++,this.getGameList())},swipeLeft:function(){var e=this.slotCategoryIndex,t=this.slotCategoryList.length;this.canSwipe&&e!=t&&(e++,this.$store.dispatch("setSlotCategoryIndex",{data:e}))},swipeRight:function(){var e=this.slotCategoryIndex;if(this.canSwipe){if(0==e)return void this.$router.back();e--,this.$store.dispatch("setSlotCategoryIndex",{data:e})}}}}},168:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(2),i=o(209),n=o.n(i),s=o(211),r=o.n(s);t.default={name:"slot",components:{category:n.a,"game-list":r.a},beforeRouteEnter:function(e,t,o){o(function(e){e.$store.dispatch("setHeaderBackStatus",{status:!0}),e.$store.dispatch("setSlotPlatform",{data:e.$route.params.platform})})},computed:o.i(a.a)({showBack:function(e){return e.showBack}})}},174:function(e,t,o){t=e.exports=o(151)(),t.push([e.i,".game-category[data-v-1653de5c]{height:.36rem;width:100%;overflow:scroll;-webkit-overflow-scrolling:touch}.game-category ul[data-v-1653de5c]{background-color:#f0f0f0;list-style:none;min-width:250%}.game-category ul li[data-v-1653de5c]{color:#333;display:inline-block;font-size:.16rem;height:.36rem;line-height:.36rem;width:1.25rem;text-align:center}.game-category ul .selected[data-v-1653de5c]{color:#914fce;border-bottom:2px solid #914fce}.game-category[data-v-1653de5c]::-webkit-scrollbar{display:none}","",{version:3,sources:["C:/Users/mirek/Desktop/project/mace/src/components/slot/category.vue"],names:[],mappings:"AACA,gCACE,cAAgB,AAChB,WAAY,AACZ,gBAAiB,AACjB,gCAAkC,CACnC,AACD,mCACI,yBAA0B,AAC1B,gBAAiB,AACjB,cAAgB,CACnB,AACD,sCACM,WAAY,AACZ,qBAAsB,AACtB,iBAAkB,AAClB,cAAgB,AAChB,mBAAqB,AACrB,cAAe,AACf,iBAAmB,CACxB,AACD,6CACM,cAAe,AACf,+BAAiC,CACtC,AACD,mDACI,YAAc,CACjB",file:"category.vue",sourcesContent:["\n.game-category[data-v-1653de5c] {\n  height: 0.36rem;\n  width: 100%;\n  overflow: scroll;\n  -webkit-overflow-scrolling: touch;\n}\n.game-category ul[data-v-1653de5c] {\n    background-color: #f0f0f0;\n    list-style: none;\n    min-width: 250%;\n}\n.game-category ul li[data-v-1653de5c] {\n      color: #333;\n      display: inline-block;\n      font-size: .16rem;\n      height: 0.36rem;\n      line-height: 0.36rem;\n      width: 1.25rem;\n      text-align: center;\n}\n.game-category ul .selected[data-v-1653de5c] {\n      color: #914fce;\n      border-bottom: 2px solid #914fce;\n}\n.game-category[data-v-1653de5c]::-webkit-scrollbar {\n    display: none;\n}\n"],sourceRoot:""}])},180:function(e,t,o){t=e.exports=o(151)(),t.push([e.i,".game-item[data-v-4c5c2803]{width:1.05rem;height:1.3rem}.game-item .image[data-v-4c5c2803]{border:1px solid #ddd;width:100%;height:1.05rem;background-position:0 0;background-size:1.05rem 1.05rem;background-repeat:no-repeat;position:relative}.game-item .name[data-v-4c5c2803]{color:#333;width:100%;height:.25rem;line-height:.25rem;text-align:center;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}","",{version:3,sources:["C:/Users/mirek/Desktop/project/mace/src/components/slot/gameItem.vue"],names:[],mappings:"AACA,4BACE,cAAe,AACf,aAAe,CAChB,AACD,mCACI,sBAAuB,AACvB,WAAY,AACZ,eAAgB,AAChB,wBAAyB,AACzB,gCAAiC,AACjC,4BAA6B,AAC7B,iBAAmB,CACtB,AACD,kCACI,WAAY,AACZ,WAAY,AACZ,cAAe,AACf,mBAAoB,AACpB,kBAAmB,AACnB,gBAAiB,AACjB,mBAAoB,AACpB,sBAAwB,CAC3B",file:"gameItem.vue",sourcesContent:["\n.game-item[data-v-4c5c2803] {\n  width: 1.05rem;\n  height: 1.3rem;\n}\n.game-item .image[data-v-4c5c2803] {\n    border: 1px solid #ddd;\n    width: 100%;\n    height: 1.05rem;\n    background-position: 0 0;\n    background-size: 1.05rem 1.05rem;\n    background-repeat: no-repeat;\n    position: relative;\n}\n.game-item .name[data-v-4c5c2803] {\n    color: #333;\n    width: 100%;\n    height: .25rem;\n    line-height: .25rem;\n    text-align: center;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n"],sourceRoot:""}])},181:function(e,t,o){t=e.exports=o(151)(),t.push([e.i,".game-list[data-v-5661a00e]{padding:.2rem .1rem;width:100%;height:100%;overflow-y:scroll;-webkit-overflow-scrolling:touch}.game-list .ul[data-v-5661a00e]{box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;text-align:left;padding-bottom:30px}.game-list .load-more-gif[data-v-5661a00e]{width:100%;height:44px;text-align:center;line-height:44px;background:#fff;border-top:none;color:#48b884}.game-list[data-v-5661a00e]::-webkit-scrollbar{display:none}","",{version:3,sources:["C:/Users/mirek/Desktop/project/mace/src/components/slot/gameList.vue"],names:[],mappings:"AACA,4BACE,oBAAqB,AACrB,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,gCAAkC,CACnC,AACD,gCACI,sBAAuB,AACvB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,8BAA+B,AAC/B,6BAA8B,AAC1B,uBAAwB,AACpB,mBAAoB,AAC5B,mBAAoB,AAChB,eAAgB,AACpB,yBAA0B,AACtB,sBAAuB,AACnB,8BAA+B,AACvC,gBAAiB,AACjB,mBAAqB,CACxB,AACD,2CACI,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,iBAAkB,AAClB,gBAAiB,AACjB,gBAAiB,AACjB,aAAe,CAClB,AACD,+CACI,YAAc,CACjB",file:"gameList.vue",sourcesContent:["\n.game-list[data-v-5661a00e] {\n  padding: .2rem .1rem;\n  width: 100%;\n  height: 100%;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n}\n.game-list .ul[data-v-5661a00e] {\n    box-sizing: border-box;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    text-align: left;\n    padding-bottom: 30px;\n}\n.game-list .load-more-gif[data-v-5661a00e] {\n    width: 100%;\n    height: 44px;\n    text-align: center;\n    line-height: 44px;\n    background: #fff;\n    border-top: none;\n    color: #48B884;\n}\n.game-list[data-v-5661a00e]::-webkit-scrollbar {\n    display: none;\n}\n"],sourceRoot:""}])},182:function(e,t,o){t=e.exports=o(151)(),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"slot.vue",sourceRoot:""}])},186:function(e,t,o){var a=o(174);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);o(152)("5b101c67",a,!0)},192:function(e,t,o){var a=o(180);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);o(152)("436d382c",a,!0)},193:function(e,t,o){var a=o(181);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);o(152)("5e9af0c7",a,!0)},194:function(e,t,o){var a=o(182);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);o(152)("010a3783",a,!0)},209:function(e,t,o){o(186);var a=o(0)(o(165),o(214),"data-v-1653de5c",null);e.exports=a.exports},210:function(e,t,o){o(192);var a=o(0)(o(166),o(220),"data-v-4c5c2803",null);e.exports=a.exports},211:function(e,t,o){o(193);var a=o(0)(o(167),o(221),"data-v-5661a00e",null);e.exports=a.exports},214:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"game-category"},[o("ul",e._l(e.slotCategoryList,function(t,a){return o("li",{class:[a==e.slotCategoryIndex?"selected":""],on:{click:function(t){e.itemClicked(a)}}},[o("span",[e._v(e._s(t.Name))])])}))])},staticRenderFns:[]}},220:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"game-item",on:{click:e.openGame}},[o("div",{staticClass:"image",style:{backgroundImage:e.imgUrl}}),e._v(" "),o("div",{staticClass:"name"},[e._v(e._s(e.cnname))])])},staticRenderFns:[]}},221:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{directives:[{name:"touch",rawName:"v-touch:left",value:e.swipeLeft,expression:"swipeLeft",arg:"left"},{name:"touch",rawName:"v-touch:right",value:e.swipeRight,expression:"swipeRight",arg:"right"}],staticClass:"game-list",on:{scroll:e.onScroll}},[o("div",{staticClass:"ul"},[e._l(e.gameList,function(e){return o("game-item",{key:"item",attrs:{gameId:e.Id,identify:e.GameIdentify,isTry:e.IsTry,gameType:e.GameTypeText_EN,platform:e.Api.GamePlatform,cnname:e.Title,showJackpots:e.ShowJackpots,imageUrl:e.ImageUrl,collected:!1}})}),e._v(" "),o("div",{staticClass:"load-more-gif"},[e._v(e._s(e.loadingText))])],2)])},staticRenderFns:[]}},224:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"page slot-page"},[o("category"),e._v(" "),o("game-list")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=1.1c44a7ec9ec516c17df1.js.map