webpackJsonp([1],{

/***/ "01t/":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "0ipa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"contents"}},[_c('nav',{staticClass:"navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse"},[_vm._m(0),_vm._v(" "),_c('a',{staticClass:"navbar-brand",attrs:{"href":"#"}},[_vm._v("Rideshare Dashboard")]),_vm._v(" "),_c('div',{staticClass:"collapse navbar-collapse",attrs:{"id":"navbarsExampleDefault"}},[_c('ul',{staticClass:"navbar-nav mr-auto"},[_c('li',{staticClass:"nav-item"},[_c('router-link',{staticClass:"nav-link",attrs:{"to":"/"}},[_vm._v("Fleet Status")])],1),_vm._v(" "),_c('li',{staticClass:"nav-item active"},[_c('router-link',{staticClass:"nav-link",attrs:{"to":"/ranking"}},[_vm._v("Ranking "),_c('span',{staticClass:"sr-only"},[_vm._v("(current)")])])],1)])])]),_vm._v(" "),_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row"},[_c('nav',{staticClass:"col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar"},[_c('ul',{staticClass:"nav nav-pills flex-column"},[_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",class:{ active: _vm.type === 'A' },attrs:{"href":"#"},on:{"click":_vm.TopDrivers}},[_vm._v("Top Drivers "),_c('span',{staticClass:"sr-only"},[_vm._v("(current)")])])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",class:{ active: _vm.type === 'B' },attrs:{"href":"#"},on:{"click":_vm.TopPassengers}},[_vm._v("Top Passengers")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",class:{ active: _vm.type === 'C' },attrs:{"href":"#"},on:{"click":_vm.TopRoutes}},[_vm._v("Top Routes")])])])])])]),_vm._v(" "),_c('main',{staticClass:"col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3"},[_c('h1',[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),(_vm.type=='A')?_c('div',{staticClass:"table-responsive"},[_vm._v(" \n\t          From: "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.startDate),expression:"startDate"}],attrs:{"type":"date","placeholder":"YYYY-MM-DD"},domProps:{"value":(_vm.startDate)},on:{"input":function($event){if($event.target.composing){ return; }_vm.startDate=$event.target.value}}}),_vm._v(" "),_c('span',[_vm._v("   ")]),_vm._v("\n\t\t\t\t\t\tTo: "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.endDate),expression:"endDate"}],attrs:{"type":"date","placeholder":"YYYY-MM-DD"},domProps:{"value":(_vm.endDate)},on:{"input":function($event){if($event.target.composing){ return; }_vm.endDate=$event.target.value}}}),_vm._v(" "),_c('span',[_vm._v("   ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-primary",attrs:{"type":"button"},on:{"click":function($event){_vm.filterByDate()}}},[_vm._v("Update")]),_vm._v(" "),_c('table',{staticClass:"table table-striped"},[_vm._m(1),_vm._v(" "),_c('tbody',_vm._l((_vm.drivers),function(driver){return _c('tr',[_c('td',[_vm._v(_vm._s(driver.count))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(driver.firstname)+" "+_vm._s(driver.lastname))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(driver.email))])])}))])]):_vm._e(),_vm._v(" "),(_vm.type=='B')?_c('div',{staticClass:"table-responsive"},[_vm._v(" \n\t          From: "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.startDate),expression:"startDate"}],attrs:{"type":"date","placeholder":"YYYY-MM-DD"},domProps:{"value":(_vm.startDate)},on:{"input":function($event){if($event.target.composing){ return; }_vm.startDate=$event.target.value}}}),_vm._v(" "),_c('span',[_vm._v("   ")]),_vm._v("\n\t\t\t\t\t\tTo: "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.endDate),expression:"endDate"}],attrs:{"type":"date","placeholder":"YYYY-MM-DD"},domProps:{"value":(_vm.endDate)},on:{"input":function($event){if($event.target.composing){ return; }_vm.endDate=$event.target.value}}}),_vm._v(" "),_c('span',[_vm._v("   ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-primary",attrs:{"type":"button"},on:{"click":function($event){_vm.filterByDate()}}},[_vm._v("Update")]),_vm._v(" "),_c('table',{staticClass:"table table-striped"},[_vm._m(2),_vm._v(" "),_c('tbody',_vm._l((_vm.passengers),function(passenger){return _c('tr',[_c('td',[_vm._v(_vm._s(passenger.count))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(passenger.firstname)+" "+_vm._s(passenger.lastname))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(passenger.email))])])}))])]):_vm._e(),_vm._v(" "),(_vm.type=='C')?_c('div',{staticClass:"table-responsive"},[_vm._v(" \n\t          From: "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.startDate),expression:"startDate"}],attrs:{"type":"date","placeholder":"YYYY-MM-DD"},domProps:{"value":(_vm.startDate)},on:{"input":function($event){if($event.target.composing){ return; }_vm.startDate=$event.target.value}}}),_vm._v(" "),_c('span',[_vm._v("   ")]),_vm._v("\n\t\t\t\t\t\tTo: "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.endDate),expression:"endDate"}],attrs:{"type":"date","placeholder":"YYYY-MM-DD"},domProps:{"value":(_vm.endDate)},on:{"input":function($event){if($event.target.composing){ return; }_vm.endDate=$event.target.value}}}),_vm._v(" "),_c('span',[_vm._v("   ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-primary",attrs:{"type":"button"},on:{"click":function($event){_vm.filterByDate()}}},[_vm._v("Update")]),_vm._v(" "),_c('table',{staticClass:"table table-striped"},[_vm._m(3),_vm._v(" "),_c('tbody',_vm._l((_vm.trips),function(trip){return _c('tr',[_c('td',[_vm._v(_vm._s(trip.count))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(trip.departure_location))]),_vm._v(" "),_c('td',_vm._l((trip.destinations),function(destination){return _c('span',[_vm._v(_vm._s(destination))])}))])}))])]):_vm._e(),_vm._v(" "),(_vm.loading)?_c('div',{staticClass:"loader"}):_vm._e()])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"navbar-toggler navbar-toggler-right hidden-lg-up",attrs:{"type":"button","data-toggle":"collapse","data-target":"#navbarsExampleDefault","aria-controls":"navbarsExampleDefault","aria-expanded":"false","aria-label":"Toggle navigation"}},[_c('span',{staticClass:"navbar-toggler-icon"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_vm._v("# of Trips")]),_vm._v(" "),_c('th',[_vm._v("Driver Name")]),_vm._v(" "),_c('th',[_vm._v("Email")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_vm._v("# of Trips")]),_vm._v(" "),_c('th',[_vm._v("Passenger Name")]),_vm._v(" "),_c('th',[_vm._v("Email")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_vm._v("Frequency")]),_vm._v(" "),_c('th',[_vm._v("Departure Location")]),_vm._v(" "),_c('th',[_vm._v("Destination(s)")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "1/oy":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "4hlo":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/checkmark.d5a017f.png";

/***/ }),

/***/ "9M+g":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "BEAU":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "FBLH":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "FhoZ":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {// see http://vuejs-templates.github.io/webpack for documentation.
var path = __webpack_require__("o/zv")

module.exports = {
  build: {
    env: __webpack_require__("rBKV"),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: __webpack_require__.i({"NODE_ENV":"production"}).npm_config_report
  },
  dev: {
    env: __webpack_require__("dhIU"),
    host:  'localhost',
    port: 8087,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
    backendHost: 'ecse321-group7.herokuapp.com',
    backendPort: 80
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),

/***/ "GfHa":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Id91":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_vue__ = __webpack_require__("e6fC");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__("YaEn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bootstrap_dist_css_bootstrap_min_css__ = __webpack_require__("qb6w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bootstrap_dist_css_bootstrap_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_bootstrap_dist_css_bootstrap_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bootstrap_vue_dist_bootstrap_vue_css__ = __webpack_require__("9M+g");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bootstrap_vue_dist_bootstrap_vue_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_bootstrap_vue_dist_bootstrap_vue_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Fleet__ = __webpack_require__("TnOh");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Ranking__ = __webpack_require__("sFgU");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dist_css_bootstrap_min_css__ = __webpack_require__("FBLH");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dist_css_bootstrap_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__dist_css_bootstrap_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_css__ = __webpack_require__("BEAU");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__dashboard_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__assets_js_ie10_viewport_bug_workaround_js__ = __webpack_require__("vpI8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__assets_js_ie10_viewport_bug_workaround_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__assets_js_ie10_viewport_bug_workaround_js__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


//import App from './App'







/* custom design imports */




__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_bootstrap_vue__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<router-view></router-view>'
});

/***/ }),

/***/ "R+2z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_Fleet_js__ = __webpack_require__("TnOh");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7486aa0e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Fleet_vue__ = __webpack_require__("ceNo");
function injectStyle (ssrContext) {
  __webpack_require__("pzHL")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_Fleet_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7486aa0e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Fleet_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "TnOh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_css_loading_css__ = __webpack_require__("01t/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_css_loading_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_css_loading_css__);



var config = __webpack_require__("FhoZ");

var frontendUrl = 'https://' + config.dev.host + ':' + config.dev.port;
var backendUrl = 'https://' + config.dev.backendHost;

var AXIOS = __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
	baseURL: backendUrl,
	headers: { 'Access-Control-Allow-Origin': frontendUrl }
});

function tripdetails(name, date, time, dep, dest) {
	this.name = name;
	this.date = date;
	this.time = time;
	this.dep = dep;
	this.dest = dest;
}

/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'Fleet',
	data() {
		return {
			trips: [], // for trip-record-based list (ALL)
			drivers: [], // user-based list (Driver)
			passengers: [], // also user-based list (Passenger)
			type: 'A', // this enables 'active' style for tab
			title: 'Overview', // page title h1
			keyword: '',
			enroute: '',
			picked: 'registered'
		};
	},

	created: function () {

		this.type = 'A';
		this.Overview();
	},
	methods: {
		filterByKeyword: function () {
			if (this.type == 'A') {
				this.Overview();
			} else if (this.type == 'B') {
				this.ActiveRoutes();
			} else if (this.type == 'C') {
				this.ActiveDrivers();
			} else if (this.type == 'D') {
				this.ActivePassengers();
			}
		},
		Overview: function () {
			this.title = 'All Trips';
			this.loading = true;
			this.type = 'A';
			AXIOS.get(`/trips`).then(response => {
				// JSON responses are automatically parsed.
				this.trips = response.data;
				for (var i = 0; i < this.trips.length; i++) {
					this.trips[i].departure_location = this.trips[i].departure_location.charAt(0).toUpperCase() + this.trips[i].departure_location.slice(1);
					this.trips[i].firstname = this.trips[i].firstname.charAt(0).toUpperCase() + this.trips[i].firstname.slice(1);
					this.trips[i].lastname = this.trips[i].lastname.charAt(0).toUpperCase() + this.trips[i].lastname.slice(1);

					for (var j = 0; j < this.trips[i].destinations.length; j++) {
						this.trips[i].destinations[j] = this.trips[i].destinations[j].charAt(0).toUpperCase() + this.trips[i].destinations[j].slice(1);

						if (j != this.trips[i].destinations.length - 1) {
							this.trips[i].destinations[j] += ", ";
						}
					}
				}
				this.loading = false;
			}).catch(e => {
				this.errorParticipant = e;
			});
		},
		ActiveRoutes: function () {
			this.title = 'Route Overview';
			this.loading = true;
			this.type = 'B';

			var myenroute = "all";

			if (this.enroute) {
				myenroute = "enroute";
			}

			AXIOS.post("/trips/search/partial?keyword=" + this.keyword + "&status=" + myenroute).then(response => {
				// JSON responses are automatically parsed.
				this.trips = response.data;
				for (var i = 0; i < this.trips.length; i++) {
					this.trips[i].departure_location = this.trips[i].departure_location.charAt(0).toUpperCase() + this.trips[i].departure_location.slice(1);
					this.trips[i].firstname = this.trips[i].firstname.charAt(0).toUpperCase() + this.trips[i].firstname.slice(1);
					this.trips[i].lastname = this.trips[i].lastname.charAt(0).toUpperCase() + this.trips[i].lastname.slice(1);

					for (var j = 0; j < this.trips[i].destinations.length; j++) {
						this.trips[i].destinations[j] = this.trips[i].destinations[j].charAt(0).toUpperCase() + this.trips[i].destinations[j].slice(1);

						if (j != this.trips[i].destinations.length - 1) {
							this.trips[i].destinations[j] += ", ";
						}
					}
				}
				this.loading = false;
			}).catch(e => {
				this.errorParticipant = e;
			});
		},
		ActiveDrivers: function () {
			this.title = 'Driver Overview';
			this.type = 'C';
			this.loading = true;

			var myenroute = "all";
			if (this.enroute) {
				myenroute = "enroute";
			}

			AXIOS.post("/users/search/partialDriver?keyword=" + this.keyword + "&status=" + myenroute).then(response => {
				// JSON responses are automatically parsed.
				this.drivers = response.data;
				for (var i = 0; i < this.drivers.length; i++) {
					this.drivers[i].firstname = this.drivers[i].firstname.charAt(0).toUpperCase() + this.drivers[i].firstname.slice(1);
					this.drivers[i].lastname = this.drivers[i].lastname.charAt(0).toUpperCase() + this.drivers[i].lastname.slice(1);
				}
				this.loading = false;
			}).catch(e => {
				this.errorParticipant = e;
			});
		},
		ActivePassengers: function () {
			this.title = 'Passenger Overview';
			this.type = 'D';
			this.loading = true;

			var myenroute = this.picked;

			AXIOS.post("/users/search/partialPassenger?keyword=" + this.keyword + "&status=" + myenroute).then(response => {
				// JSON responses are automatically parsed.
				this.passengers = response.data;
				for (var i = 0; i < this.passengers.length; i++) {
					this.passengers[i].firstname = this.passengers[i].firstname.charAt(0).toUpperCase() + this.passengers[i].firstname.slice(1);
					this.passengers[i].lastname = this.passengers[i].lastname.charAt(0).toUpperCase() + this.passengers[i].lastname.slice(1);
				}
				this.loading = false;
			}).catch(e => {
				this.errorParticipant = e;
			});
		}
	}
});

/***/ }),

/***/ "YaEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Fleet__ = __webpack_require__("TnOh");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Ranking__ = __webpack_require__("sFgU");





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    component: __webpack_require__("R+2z").default
  }, {
    path: '/ranking',
    component: __webpack_require__("wc4s").default
  }]
}));

/***/ }),

/***/ "av6f":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ceNo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"contents"}},[_c('nav',{staticClass:"navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse"},[_vm._m(0),_vm._v(" "),_c('a',{staticClass:"navbar-brand",attrs:{"href":"#"}},[_vm._v("Rideshare Dashboard")]),_vm._v(" "),_c('div',{staticClass:"collapse navbar-collapse",attrs:{"id":"navbarsExampleDefault"}},[_c('ul',{staticClass:"navbar-nav mr-auto"},[_c('li',{staticClass:"nav-item active"},[_c('router-link',{staticClass:"nav-link",attrs:{"to":"/"}},[_vm._v("Fleet Status "),_c('span',{staticClass:"sr-only"},[_vm._v("(current)")])])],1),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('router-link',{staticClass:"nav-link",attrs:{"to":"/ranking"}},[_vm._v("Ranking")])],1)])])]),_vm._v(" "),_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row"},[_c('nav',{staticClass:"col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar"},[_c('ul',{staticClass:"nav nav-pills flex-column"},[_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",class:{ active: _vm.type === 'A' },attrs:{"href":"#"},on:{"click":_vm.Overview}},[_vm._v("All Trips")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",class:{ active: _vm.type === 'B' },attrs:{"href":"#"},on:{"click":_vm.ActiveRoutes}},[_vm._v("Route Overview")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",class:{ active: _vm.type === 'C' },attrs:{"href":"#"},on:{"click":_vm.ActiveDrivers}},[_vm._v("Driver Overview")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",class:{ active: _vm.type === 'D' },attrs:{"href":"#"},on:{"click":_vm.ActivePassengers}},[_vm._v("Passenger Overview")])])])])])]),_vm._v(" "),_c('main',{staticClass:"col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3"},[_c('h1',[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),(_vm.type=='A')?_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"table table-striped"},[_vm._m(1),_vm._v(" "),_c('tbody',_vm._l((_vm.trips),function(trip){return _c('tr',[_c('td',[(trip.isCompleted==false)?_c('img',{attrs:{"src":__webpack_require__("4hlo")}}):_vm._e(),_vm._v(" "),(trip.isCompleted)?_c('img',{attrs:{"src":__webpack_require__("ipr1")}}):_vm._e()]),_vm._v(" "),_c('td',[_vm._v(_vm._s(trip.firstname)+" "+_vm._s(trip.lastname))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(trip.departure_date))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(trip.departure_time))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(trip.departure_location))]),_vm._v(" "),_c('td',_vm._l((trip.destinations),function(destination){return _c('span',[_vm._v(_vm._s(destination))])}))])}))])]):(_vm.type=='B')?_c('div',{staticClass:"table-responsive"},[_vm._v("\n\t          Search By City:  "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.keyword),expression:"keyword"}],attrs:{"type":"text","placeholder":""},domProps:{"value":(_vm.keyword)},on:{"input":function($event){if($event.target.composing){ return; }_vm.keyword=$event.target.value}}}),_vm._v(" "),_c('span',[_vm._v("   ")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.enroute),expression:"enroute"}],attrs:{"type":"checkbox","value":"enroute","checked":""},domProps:{"checked":Array.isArray(_vm.enroute)?_vm._i(_vm.enroute,"enroute")>-1:(_vm.enroute)},on:{"change":function($event){var $$a=_vm.enroute,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v="enroute",$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.enroute=$$a.concat([$$v]))}else{$$i>-1&&(_vm.enroute=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.enroute=$$c}}}}),_vm._v("  Show en route trips only\n\t          "),_c('span',[_vm._v("   ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-primary",attrs:{"type":"button"},on:{"click":function($event){_vm.filterByKeyword()}}},[_vm._v("Update")]),_vm._v(" "),_c('table',{staticClass:"table table-striped"},[_vm._m(2),_vm._v(" "),_c('tbody',_vm._l((_vm.trips),function(trip){return _c('tr',[_c('td',[(trip.isCompleted==false)?_c('img',{attrs:{"src":__webpack_require__("4hlo")}}):_vm._e(),_vm._v(" "),(trip.isCompleted)?_c('img',{attrs:{"src":__webpack_require__("ipr1")}}):_vm._e()]),_vm._v(" "),_c('td',[_vm._v(_vm._s(trip.firstname)+" "+_vm._s(trip.lastname))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(trip.departure_date))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(trip.departure_time))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(trip.departure_location))]),_vm._v(" "),_c('td',_vm._l((trip.destinations),function(destination){return _c('span',[_vm._v(_vm._s(destination))])}))])}))])]):_vm._e(),_vm._v(" "),(_vm.type=='C')?_c('div',{staticClass:"table-responsive"},[_vm._v("\n\t          Search By Name:  "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.keyword),expression:"keyword"}],attrs:{"type":"text","placeholder":""},domProps:{"value":(_vm.keyword)},on:{"input":function($event){if($event.target.composing){ return; }_vm.keyword=$event.target.value}}}),_vm._v(" "),_c('span',[_vm._v("   ")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.enroute),expression:"enroute"}],attrs:{"type":"checkbox","value":"enroute","checked":""},domProps:{"checked":Array.isArray(_vm.enroute)?_vm._i(_vm.enroute,"enroute")>-1:(_vm.enroute)},on:{"change":function($event){var $$a=_vm.enroute,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v="enroute",$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.enroute=$$a.concat([$$v]))}else{$$i>-1&&(_vm.enroute=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.enroute=$$c}}}}),_vm._v("  Show en route drivers only\n\t          "),_c('span',[_vm._v("   ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-primary",attrs:{"type":"button"},on:{"click":function($event){_vm.filterByKeyword()}}},[_vm._v("Update")]),_vm._v(" "),_c('table',{staticClass:"table table-striped"},[_vm._m(3),_vm._v(" "),_c('tbody',_vm._l((_vm.drivers),function(driver){return _c('tr',[_c('td',[_vm._v(_vm._s(driver.firstname)+" "+_vm._s(driver.lastname))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(driver.email))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(driver.phone))])])}))])]):_vm._e(),_vm._v(" "),(_vm.type=='D')?_c('div',{staticClass:"table-responsive"},[_vm._v("\n\t          Search By Name:   "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.keyword),expression:"keyword"}],staticClass:"form-group col-lg-2.9",attrs:{"type":"text","placeholder":""},domProps:{"value":(_vm.keyword)},on:{"input":function($event){if($event.target.composing){ return; }_vm.keyword=$event.target.value}}}),_c('br'),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.picked),expression:"picked"}],attrs:{"type":"radio","id":"registered","value":"registered"},domProps:{"checked":_vm._q(_vm.picked,"registered")},on:{"change":function($event){_vm.picked="registered"}}}),_vm._v(" "),_c('label',{attrs:{"for":"registered"}},[_vm._v("All  ")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.picked),expression:"picked"}],attrs:{"type":"radio","id":"active","value":"active"},domProps:{"checked":_vm._q(_vm.picked,"active")},on:{"change":function($event){_vm.picked="active"}}}),_vm._v(" "),_c('label',{attrs:{"for":"active"}},[_vm._v(" Active   ")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.picked),expression:"picked"}],attrs:{"type":"radio","id":"enroute","value":"enroute"},domProps:{"checked":_vm._q(_vm.picked,"enroute")},on:{"change":function($event){_vm.picked="enroute"}}}),_vm._v(" "),_c('label',{attrs:{"for":"enroute"}},[_vm._v("En Route  ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-primary",attrs:{"type":"button"},on:{"click":function($event){_vm.filterByKeyword()}}},[_vm._v("Update")]),_vm._v(" "),_c('table',{staticClass:"table table-striped"},[_vm._m(4),_vm._v(" "),_c('tbody',_vm._l((_vm.passengers),function(passenger){return _c('tr',[_c('td',[_vm._v(_vm._s(passenger.firstname)+" "+_vm._s(passenger.lastname))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(passenger.email))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(passenger.phone))])])}))])]):_vm._e(),_vm._v(" "),(_vm.loading)?_c('div',{staticClass:"loader"}):_vm._e()])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"navbar-toggler navbar-toggler-right hidden-lg-up",attrs:{"type":"button","data-toggle":"collapse","data-target":"#navbarsExampleDefault","aria-controls":"navbarsExampleDefault","aria-expanded":"false","aria-label":"Toggle navigation"}},[_c('span',{staticClass:"navbar-toggler-icon"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',{attrs:{"width":"11%"}},[_vm._v("En Route")]),_vm._v(" "),_c('th',{attrs:{"width":"15%"}},[_vm._v("Driver")]),_vm._v(" "),_c('th',{attrs:{"width":"11%"}},[_vm._v("Date")]),_vm._v(" "),_c('th',{attrs:{"width":"11%"}},[_vm._v("Time")]),_vm._v(" "),_c('th',[_vm._v("Departure")]),_vm._v(" "),_c('th',[_vm._v("Destination(s)")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',{attrs:{"width":"11%"}},[_vm._v("En Route")]),_vm._v(" "),_c('th',{attrs:{"width":"15%"}},[_vm._v("Driver")]),_vm._v(" "),_c('th',{attrs:{"width":"11%"}},[_vm._v("Date")]),_vm._v(" "),_c('th',{attrs:{"width":"11%"}},[_vm._v("Time")]),_vm._v(" "),_c('th',[_vm._v("Departure")]),_vm._v(" "),_c('th',[_vm._v("Destination(s)")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_vm._v("Driver Name")]),_vm._v(" "),_c('th',[_vm._v("Email")]),_vm._v(" "),_c('th',[_vm._v("Phone")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_vm._v("Passenger Name")]),_vm._v(" "),_c('th',[_vm._v("Email")]),_vm._v(" "),_c('th',[_vm._v("Phone")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "dhIU":
/***/ (function(module, exports, __webpack_require__) {

var merge = __webpack_require__("2cg0")
var prodEnv = __webpack_require__("rBKV")

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})


/***/ }),

/***/ "ipr1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/crossmark1-hi.392abcc.png";

/***/ }),

/***/ "pzHL":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "qb6w":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "rBKV":
/***/ (function(module, exports) {

module.exports = {
  NODE_ENV: '"production"'
}


/***/ }),

/***/ "sFgU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);

var config = __webpack_require__("FhoZ");

var frontendUrl = 'https://' + config.dev.host + ':' + config.dev.port;
var backendUrl = 'https://' + config.dev.backendHost;

var AXIOS = __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
	baseURL: backendUrl,
	headers: { 'Access-Control-Allow-Origin': frontendUrl }
});

/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'Ranking',
	data() {
		return {
			drivers: [], // each list for each ranking
			passengers: [],
			trips: [],
			type: 'A', // this enables 'active' style for tab
			title: 'Top Performing Drivers', // page title h1
			startDate: '2018-10-01',
			endDate: ''
		};
	},
	created: function () {
		var date = new Date();
		var today = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
		this.endDate = today;
		this.TopDrivers();
	},
	methods: {
		filterByDate: function () {
			if (this.type == 'A') {
				this.TopDrivers();
			} else if (this.type == 'B') {
				this.TopPassengers();
			} else if (this.type == 'C') {
				this.TopRoutes();
			}
		},
		TopDrivers: function () {
			this.title = 'Top Performing Drivers';
			this.type = 'A';
			this.loading = true;

			AXIOS.post("/drivers/ranking?startDate=" + this.startDate + "&endDate=" + this.endDate).then(response => {
				// JSON responses are automatically parsed.
				this.drivers = response.data;
				for (var i = 0; i < this.drivers.length; i++) {
					this.drivers[i].firstname = this.drivers[i].firstname.charAt(0).toUpperCase() + this.drivers[i].firstname.slice(1);
					this.drivers[i].lastname = this.drivers[i].lastname.charAt(0).toUpperCase() + this.drivers[i].lastname.slice(1);
				}
				this.loading = false;
			}).catch(e => {
				this.errorParticipant = e;
			});
		},
		TopPassengers: function () {
			this.title = 'Top Performing Passengers';
			this.type = 'B';
			this.loading = true;
			AXIOS.post("/passengers/ranking?startDate=" + this.startDate + "&endDate=" + this.endDate).then(response => {
				// JSON responses are automatically parsed.
				this.passengers = response.data;
				for (var i = 0; i < this.passengers.length; i++) {
					this.passengers[i].firstname = this.passengers[i].firstname.charAt(0).toUpperCase() + this.passengers[i].firstname.slice(1);
					this.passengers[i].lastname = this.passengers[i].lastname.charAt(0).toUpperCase() + this.passengers[i].lastname.slice(1);
				}
				this.loading = false;
			}).catch(e => {
				this.errorParticipant = e;
			});
		},
		TopRoutes: function () {
			this.title = 'Most Frequent Routes';
			this.type = 'C';
			this.loading = true;
			AXIOS.post("/trips/ranking?startDate=" + this.startDate + "&endDate=" + this.endDate).then(response => {
				// JSON responses are automatically parsed.
				this.trips = response.data;
				for (var i = 0; i < this.trips.length; i++) {
					this.trips[i].departure_location = this.trips[i].departure_location.charAt(0).toUpperCase() + this.trips[i].departure_location.slice(1);

					for (var j = 0; j < this.trips[i].destinations.length; j++) {
						this.trips[i].destinations[j] = this.trips[i].destinations[j].charAt(0).toUpperCase() + this.trips[i].destinations[j].slice(1);

						if (j != this.trips[i].destinations.length - 1) {
							this.trips[i].destinations[j] += ", ";
						}
					}
				}
				this.loading = false;
			}).catch(e => {
				this.errorParticipant = e;
			});
		}
	}
});

/***/ }),

/***/ "vpI8":
/***/ (function(module, exports) {

/*!
 * IE10 viewport hack for Surface/desktop Windows 8 bug
 * Copyright 2014-2017 The Bootstrap Authors
 * Copyright 2014-2017 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

// See the Getting Started docs for more information:
// https://getbootstrap.com/getting-started/#support-ie10-width

(function () {
  'use strict';

  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style');
    msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
    document.head.appendChild(msViewportStyle);
  }
})();

/***/ }),

/***/ "wc4s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_Ranking_js__ = __webpack_require__("sFgU");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0b83f844_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Ranking_vue__ = __webpack_require__("0ipa");
function injectStyle (ssrContext) {
  __webpack_require__("av6f")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_Ranking_js__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0b83f844_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Ranking_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "zj2Q":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.bcbeca3291f3baa6c2e7.js.map