(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/tabBar/home/home"],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/*!*********************************************************************************************************!*\
  !*** /Users/wuhaiyang/Desktop/projects/uni-app-toutiao/main.js?{"page":"pages%2FtabBar%2Fhome%2Fhome"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _home = _interopRequireDefault(__webpack_require__(/*! ./pages/tabBar/home/home.vue */ 13));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_home.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-baidu/dist/index.js */ 1)["createPage"]))

/***/ }),
/* 13 */
/*!************************************************************************************!*\
  !*** /Users/wuhaiyang/Desktop/projects/uni-app-toutiao/pages/tabBar/home/home.vue ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_vue_vue_type_template_id_9ceeee36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.vue?vue&type=template&id=9ceeee36& */ 14);
/* harmony import */ var _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.vue?vue&type=script&lang=js& */ 16);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.vue?vue&type=style&index=0&lang=scss& */ 19);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _home_vue_vue_type_template_id_9ceeee36___WEBPACK_IMPORTED_MODULE_0__["render"],
  _home_vue_vue_type_template_id_9ceeee36___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _home_vue_vue_type_template_id_9ceeee36___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "Users/wuhaiyang/Desktop/projects/uni-app-toutiao/pages/tabBar/home/home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 14 */
/*!*******************************************************************************************************************!*\
  !*** /Users/wuhaiyang/Desktop/projects/uni-app-toutiao/pages/tabBar/home/home.vue?vue&type=template&id=9ceeee36& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_vue_vue_type_template_id_9ceeee36___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./home.vue?vue&type=template&id=9ceeee36& */ 15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_vue_vue_type_template_id_9ceeee36___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_vue_vue_type_template_id_9ceeee36___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_vue_vue_type_template_id_9ceeee36___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_vue_vue_type_template_id_9ceeee36___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 15 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/wuhaiyang/Desktop/projects/uni-app-toutiao/pages/tabBar/home/home.vue?vue&type=template&id=9ceeee36& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  pulldown: function() {
    return __webpack_require__.e(/*! import() | components/pulldown/pulldown */ "components/pulldown/pulldown").then(__webpack_require__.bind(null, /*! @/components/pulldown/pulldown.vue */ 43))
  },
  loadMore: function() {
    return __webpack_require__.e(/*! import() | components/loadMore/loadMore */ "components/loadMore/loadMore").then(__webpack_require__.bind(null, /*! @/components/loadMore/loadMore.vue */ 50))
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 16 */
/*!*************************************************************************************************************!*\
  !*** /Users/wuhaiyang/Desktop/projects/uni-app-toutiao/pages/tabBar/home/home.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./home.vue?vue&type=script&lang=js& */ 17);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 17 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/wuhaiyang/Desktop/projects/uni-app-toutiao/pages/tabBar/home/home.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;



































var _interfaces = _interopRequireDefault(__webpack_require__(/*! ../../../utils/interfaces.js */ 18));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var homeHeader = function homeHeader() {__webpack_require__.e(/*! require.ensure | components/home/homeHeader */ "components/home/homeHeader").then((function () {return resolve(__webpack_require__(/*! ../../../components/home/homeHeader.vue */ 57));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var newsCell = function newsCell() {__webpack_require__.e(/*! require.ensure | components/home/newsCell */ "components/home/newsCell").then((function () {return resolve(__webpack_require__(/*! ../../../components/home/newsCell.vue */ 64));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var loadMore = function loadMore() {__webpack_require__.e(/*! require.ensure | components/loadMore/loadMore */ "components/loadMore/loadMore").then((function () {return resolve(__webpack_require__(/*! ../../../components/loadMore/loadMore.vue */ 50));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var pulldown = function pulldown() {__webpack_require__.e(/*! require.ensure | components/pulldown/pulldown */ "components/pulldown/pulldown").then((function () {return resolve(__webpack_require__(/*! ../../../components/pulldown/pulldown.vue */ 43));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =




{
  data: function data() {
    return {
      showHeader: true, // 是否显示自定义表头
      tabList: [],
      tabIndex: 0,
      toview: "", // scroll-view滚动到的视图id
      page: 1,
      size: 10,
      newsid: '',
      newsList: [],
      footerbottom: "0",
      top: 192, // 与顶部距离 单位upx
      navigateFlag: false };

  },
  onLoad: function onLoad() {










    this.getTabsData();

    this.loadTabData();

  },
  methods: {
    getTabsData: function getTabsData() {var _this = this;
      this.request({
        url: _interfaces.default.getTabList,
        success: function success(res) {
          // console.log(res.data);
          res.data.forEach(function (item) {
            item.loadMoreStatus = 0;
          });
          _this.tabList = res.data;
        } });

    },
    onTabTap: function onTabTap(index) {
      // console.log(index);
      this.tabIndex = index;
    },
    onSwiperChange: function onSwiperChange(e) {
      // console.log(e);
      this.tabIndex = e.target.current || e.detail.current;
      this.toview = this.tabList[this.tabIndex].id;

      // 加载内容数据
    },
    loadTabData: function loadTabData() {var _this2 = this;
      this.page = 1;
      // 切换选项卡 初始化状态
      if (this.tabList.length > 0) {
        this.tabList[this.tabIndex].loadMoreStatus = 0;
      }

      this.newsid = this.tabList.length > 0 ? this.tabList[this.tabIndex].newsid : "all";
      // console.log(this.newsid);
      // 数据请求
      this.request({
        url: _interfaces.default.getNewsList + "".concat(this.newsid, "/").concat(this.page, "/").concat(this.size),
        success: function success(res) {
          // console.log(res.data);
          _this2.newsList = res.data;
          _this2.$refs.pdr && _this2.$refs.pdr.endPulldownRefresh();
        } });

    },
    loadMoreData: function loadMoreData() {var _this3 = this;
      // 更改状态
      this.tabList[this.tabIndex].loadMoreStatus = 1;
      // 更改加载页数
      this.page++;
      // 数据请求
      this.request({
        url: _interfaces.default.getNewsList + "".concat(this.newsid, "/").concat(this.page, "/").concat(this.size),
        success: function success(res) {
          if (res.data.length > 0) {
            res.data.forEach(function (news) {
              _this3.newsList.push(news);
            });
            _this3.tabList[_this3.tabIndex].loadMoreStatus = 0;
          } else {
            // 返回数据为空 更改状态 没有更多数据
            _this3.tabList[_this3.tabIndex].loadMoreStatus = 2;
            return false;
          }
        } });

    },
    handleCellTap: function handleCellTap(article_url) {var _this4 = this;
      if (this.navigateFlag) {
        return;
      }

      this.navigateFlag = true;

      uni.navigateTo({
        url: "./article?url=".concat(article_url) });


      setTimeout(function () {
        _this4.navigateFlag = false;
      }, 200);
    } },

  components: {
    homeHeader: homeHeader,
    newsCell: newsCell,
    loadMore: loadMore,
    pulldown: pulldown } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-baidu/dist/index.js */ 1)["default"]))

/***/ }),
/* 18 */,
/* 19 */
/*!**********************************************************************************************************************!*\
  !*** /Users/wuhaiyang/Desktop/projects/uni-app-toutiao/pages/tabBar/home/home.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./home.vue?vue&type=style&index=0&lang=scss& */ 20);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_home_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 20 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/wuhaiyang/Desktop/projects/uni-app-toutiao/pages/tabBar/home/home.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })
],[[12,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL3d1aGFpeWFuZy9EZXNrdG9wL3Byb2plY3RzL3VuaS1hcHAtdG91dGlhby9tYWluLmpzIiwid2VicGFjazovLy8vVXNlcnMvd3VoYWl5YW5nL0Rlc2t0b3AvcHJvamVjdHMvdW5pLWFwcC10b3V0aWFvL3BhZ2VzL3RhYkJhci9ob21lL2hvbWUudnVlP2EwYzkiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93dWhhaXlhbmcvRGVza3RvcC9wcm9qZWN0cy91bmktYXBwLXRvdXRpYW8vcGFnZXMvdGFiQmFyL2hvbWUvaG9tZS52dWU/MjBlYSIsIndlYnBhY2s6Ly8vL1VzZXJzL3d1aGFpeWFuZy9EZXNrdG9wL3Byb2plY3RzL3VuaS1hcHAtdG91dGlhby9wYWdlcy90YWJCYXIvaG9tZS9ob21lLnZ1ZT9jNDk5Iiwid2VicGFjazovLy8vVXNlcnMvd3VoYWl5YW5nL0Rlc2t0b3AvcHJvamVjdHMvdW5pLWFwcC10b3V0aWFvL3BhZ2VzL3RhYkJhci9ob21lL2hvbWUudnVlPzZkMGQiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93dWhhaXlhbmcvRGVza3RvcC9wcm9qZWN0cy91bmktYXBwLXRvdXRpYW8vcGFnZXMvdGFiQmFyL2hvbWUvaG9tZS52dWUiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy93dWhhaXlhbmcvRGVza3RvcC9wcm9qZWN0cy91bmktYXBwLXRvdXRpYW8vcGFnZXMvdGFiQmFyL2hvbWUvaG9tZS52dWU/MmM1NCIsIndlYnBhY2s6Ly8vL1VzZXJzL3d1aGFpeWFuZy9EZXNrdG9wL3Byb2plY3RzL3VuaS1hcHAtdG91dGlhby9wYWdlcy90YWJCYXIvaG9tZS9ob21lLnZ1ZT81MWY0Il0sIm5hbWVzIjpbImNyZWF0ZVBhZ2UiLCJQYWdlIiwiZGF0YSIsInNob3dIZWFkZXIiLCJ0YWJMaXN0IiwidGFiSW5kZXgiLCJ0b3ZpZXciLCJwYWdlIiwic2l6ZSIsIm5ld3NpZCIsIm5ld3NMaXN0IiwiZm9vdGVyYm90dG9tIiwidG9wIiwibmF2aWdhdGVGbGFnIiwib25Mb2FkIiwiZ2V0VGFic0RhdGEiLCJsb2FkVGFiRGF0YSIsIm1ldGhvZHMiLCJyZXF1ZXN0IiwidXJsIiwiaW50ZXJmYWNlcyIsImdldFRhYkxpc3QiLCJzdWNjZXNzIiwicmVzIiwiZm9yRWFjaCIsIml0ZW0iLCJsb2FkTW9yZVN0YXR1cyIsIm9uVGFiVGFwIiwiaW5kZXgiLCJvblN3aXBlckNoYW5nZSIsImUiLCJ0YXJnZXQiLCJjdXJyZW50IiwiZGV0YWlsIiwiaWQiLCJsZW5ndGgiLCJnZXROZXdzTGlzdCIsIiRyZWZzIiwicGRyIiwiZW5kUHVsbGRvd25SZWZyZXNoIiwibG9hZE1vcmVEYXRhIiwibmV3cyIsInB1c2giLCJoYW5kbGVDZWxsVGFwIiwiYXJ0aWNsZV91cmwiLCJ1bmkiLCJuYXZpZ2F0ZVRvIiwic2V0VGltZW91dCIsImNvbXBvbmVudHMiLCJob21lSGVhZGVyIiwibmV3c0NlbGwiLCJsb2FkTW9yZSIsInB1bGxkb3duIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBQUE7QUFDQTtBQUNBLGdHO0FBQ0FBLFVBQVUsQ0FBQ0MsYUFBRCxDQUFWLEM7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFpSDtBQUNqSDtBQUN3RDtBQUNMO0FBQ2M7OztBQUdqRTtBQUNtTjtBQUNuTixnQkFBZ0IsaU5BQVU7QUFDMUIsRUFBRSwwRUFBTTtBQUNSLEVBQUUsK0VBQU07QUFDUixFQUFFLHdGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG1GQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSxXQUFXLHVMQUVOO0FBQ0wsR0FBRztBQUNIO0FBQ0EsV0FBVyx1TEFFTjtBQUNMO0FBQ0E7QUFDQTtBQUNBO0FB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LEVBQVJBLFFBSFc7QUFJWEMsWUFBUSxFQUFSQSxRQUpXLEVBakhFLEU7Ozs7Ozs7Ozs7Ozs7QUN6Q2Y7QUFBQTtBQUFBO0FBQUE7QUFBc2hELENBQWdCLDQzQ0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7QUNBMWlEO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoicGFnZXMvdGFiQmFyL2hvbWUvaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlcy90YWJCYXIvaG9tZS9ob21lLnZ1ZSdcbmNyZWF0ZVBhZ2UoUGFnZSkiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTljZWVlZTM2JlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2hvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2hvbWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIlVzZXJzL3d1aGFpeWFuZy9EZXNrdG9wL3Byb2plY3RzL3VuaS1hcHAtdG91dGlhby9wYWdlcy90YWJCYXIvaG9tZS9ob21lLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xNi0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci9wYWdlLW1ldGEuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vaG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWNlZWVlMzYmXCIiLCJ2YXIgY29tcG9uZW50cyA9IHtcbiAgcHVsbGRvd246IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBpbXBvcnQoXG4gICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNvbXBvbmVudHMvcHVsbGRvd24vcHVsbGRvd25cIiAqLyBcIkAvY29tcG9uZW50cy9wdWxsZG93bi9wdWxsZG93bi52dWVcIlxuICAgIClcbiAgfSxcbiAgbG9hZE1vcmU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBpbXBvcnQoXG4gICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNvbXBvbmVudHMvbG9hZE1vcmUvbG9hZE1vcmVcIiAqLyBcIkAvY29tcG9uZW50cy9sb2FkTW9yZS9sb2FkTW9yZS52dWVcIlxuICAgIClcbiAgfVxufVxudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9ob21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9ob21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbmltcG9ydCBob21lSGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvaG9tZS9ob21lSGVhZGVyLnZ1ZSc7XG5pbXBvcnQgaW50ZXJmYWNlcyBmcm9tICcuLi8uLi8uLi91dGlscy9pbnRlcmZhY2VzLmpzJztcbmltcG9ydCBuZXdzQ2VsbCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2hvbWUvbmV3c0NlbGwudnVlJztcbmltcG9ydCBsb2FkTW9yZSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2xvYWRNb3JlL2xvYWRNb3JlLnZ1ZSc7XG5pbXBvcnQgcHVsbGRvd24gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9wdWxsZG93bi9wdWxsZG93bi52dWUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNob3dIZWFkZXI6IHRydWUsIC8vIOaYr+WQpuaYvuekuuiHquWumuS5ieihqOWktFxuXHRcdFx0dGFiTGlzdDogW10sXG5cdFx0XHR0YWJJbmRleDogMCxcblx0XHRcdHRvdmlldzogXCJcIiwgLy8gc2Nyb2xsLXZpZXfmu5rliqjliLDnmoTop4blm75pZFxuXHRcdFx0cGFnZTogMSxcblx0XHRcdHNpemU6IDEwLFxuXHRcdFx0bmV3c2lkOiAnJyxcblx0XHRcdG5ld3NMaXN0OiBbXSxcblx0XHRcdGZvb3RlcmJvdHRvbTogXCIwXCIsXG5cdFx0XHR0b3A6IDE5MiwgLy8g5LiO6aG26YOo6Led56a7IOWNleS9jXVweFxuXHRcdFx0bmF2aWdhdGVGbGFnOiBmYWxzZSxcblx0XHR9XG5cdH0sXG5cdG9uTG9hZCgpIHtcblxuXG5cblxuXG5cblxuXG5cblxuXHRcdHRoaXMuZ2V0VGFic0RhdGEoKTtcblxuXHRcdHRoaXMubG9hZFRhYkRhdGEoKTtcblxuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0Z2V0VGFic0RhdGEoKSB7XG5cdFx0XHR0aGlzLnJlcXVlc3Qoe1xuXHRcdFx0XHR1cmw6IGludGVyZmFjZXMuZ2V0VGFiTGlzdCxcblx0XHRcdFx0c3VjY2VzczogKHJlcyA9PiB7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2cocmVzLmRhdGEpO1xuXHRcdFx0XHRcdHJlcy5kYXRhLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRcdFx0XHRpdGVtLmxvYWRNb3JlU3RhdHVzID0gMDtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdHRoaXMudGFiTGlzdCA9IHJlcy5kYXRhO1xuXHRcdFx0XHR9KVxuXHRcdFx0fSlcblx0XHR9LFxuXHRcdG9uVGFiVGFwKGluZGV4KSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhpbmRleCk7XG5cdFx0XHR0aGlzLnRhYkluZGV4ID0gaW5kZXg7XG5cdFx0fSxcblx0XHRvblN3aXBlckNoYW5nZShlKSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhlKTtcblx0XHRcdHRoaXMudGFiSW5kZXggPSBlLnRhcmdldC5jdXJyZW50IHx8IGUuZGV0YWlsLmN1cnJlbnQ7XG5cdFx0XHR0aGlzLnRvdmlldyA9IHRoaXMudGFiTGlzdFt0aGlzLnRhYkluZGV4XS5pZDtcblxuXHRcdFx0Ly8g5Yqg6L295YaF5a655pWw5o2uXG5cdFx0fSxcblx0XHRsb2FkVGFiRGF0YSgpIHtcblx0XHRcdHRoaXMucGFnZSA9IDE7XG5cdFx0XHQvLyDliIfmjaLpgInpobnljaEg5Yid5aeL5YyW54q25oCBXG5cdFx0XHRpZiAodGhpcy50YWJMaXN0Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dGhpcy50YWJMaXN0W3RoaXMudGFiSW5kZXhdLmxvYWRNb3JlU3RhdHVzID0gMDtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5uZXdzaWQgPSB0aGlzLnRhYkxpc3QubGVuZ3RoID4gMCA/IHRoaXMudGFiTGlzdFt0aGlzLnRhYkluZGV4XS5uZXdzaWQgOiBcImFsbFwiO1xuXHRcdFx0Ly8gY29uc29sZS5sb2codGhpcy5uZXdzaWQpO1xuXHRcdFx0Ly8g5pWw5o2u6K+35rGCXG5cdFx0XHR0aGlzLnJlcXVlc3Qoe1xuXHRcdFx0XHR1cmw6IGludGVyZmFjZXMuZ2V0TmV3c0xpc3QgKyBgJHt0aGlzLm5ld3NpZH0vJHt0aGlzLnBhZ2V9LyR7dGhpcy5zaXplfWAsXG5cdFx0XHRcdHN1Y2Nlc3M6IChyZXMgPT4ge1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcblx0XHRcdFx0XHR0aGlzLm5ld3NMaXN0ID0gcmVzLmRhdGE7XG5cdFx0XHRcdFx0dGhpcy4kcmVmcy5wZHIgJiYgdGhpcy4kcmVmcy5wZHIuZW5kUHVsbGRvd25SZWZyZXNoKCk7XG5cdFx0XHRcdH0pXG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0bG9hZE1vcmVEYXRhKCkge1xuXHRcdFx0Ly8g5pu05pS554q25oCBXG5cdFx0XHR0aGlzLnRhYkxpc3RbdGhpcy50YWJJbmRleF0ubG9hZE1vcmVTdGF0dXMgPSAxO1xuXHRcdFx0Ly8g5pu05pS55Yqg6L296aG15pWwXG5cdFx0XHR0aGlzLnBhZ2UrKztcblx0XHRcdC8vIOaVsOaNruivt+axglxuXHRcdFx0dGhpcy5yZXF1ZXN0KHtcblx0XHRcdFx0dXJsOiBpbnRlcmZhY2VzLmdldE5ld3NMaXN0ICsgYCR7dGhpcy5uZXdzaWR9LyR7dGhpcy5wYWdlfS8ke3RoaXMuc2l6ZX1gLFxuXHRcdFx0XHRzdWNjZXNzOiAocmVzID0+IHtcblx0XHRcdFx0XHRpZiAocmVzLmRhdGEubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0cmVzLmRhdGEuZm9yRWFjaChuZXdzID0+IHtcblx0XHRcdFx0XHRcdFx0dGhpcy5uZXdzTGlzdC5wdXNoKG5ld3MpO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdHRoaXMudGFiTGlzdFt0aGlzLnRhYkluZGV4XS5sb2FkTW9yZVN0YXR1cyA9IDA7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIOi/lOWbnuaVsOaNruS4uuepuiDmm7TmlLnnirbmgIEg5rKh5pyJ5pu05aSa5pWw5o2uXG5cdFx0XHRcdFx0XHR0aGlzLnRhYkxpc3RbdGhpcy50YWJJbmRleF0ubG9hZE1vcmVTdGF0dXMgPSAyO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdH0pXG5cdFx0fSxcblx0XHRoYW5kbGVDZWxsVGFwKGFydGljbGVfdXJsKXtcblx0XHRcdGlmKHRoaXMubmF2aWdhdGVGbGFnKXtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHR0aGlzLm5hdmlnYXRlRmxhZyA9IHRydWU7XG5cdFx0XHRcblx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0dXJsOmAuL2FydGljbGU/dXJsPSR7YXJ0aWNsZV91cmx9YFxuXHRcdFx0fSlcblx0XHRcdFxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMubmF2aWdhdGVGbGFnID0gZmFsc2U7XG5cdFx0XHR9LDIwMClcblx0XHR9XG5cdH0sXG5cdGNvbXBvbmVudHM6IHtcblx0XHRob21lSGVhZGVyLFxuXHRcdG5ld3NDZWxsLFxuXHRcdGxvYWRNb3JlLFxuXHRcdHB1bGxkb3duXG5cdH1cbn1cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTQhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS01IS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2hvbWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9ob21lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1OTA0ODU1MTk5ODdcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==