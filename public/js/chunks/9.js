(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/academic/Academic.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/academic/Academic.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_dist_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/dist/css/swiper.min.css */ "./node_modules/swiper/dist/css/swiper.min.css");
/* harmony import */ var swiper_dist_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_dist_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-awesome-swiper */ "./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js");
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_2__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Academic",
  components: {
    swiper: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_2__["swiper"],
    swiperSlide: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_2__["swiperSlide"]
  },
  data: function data() {
    return {
      swiperOptionNews: {
        slidesPerView: 4,
        slidesPerColumn: 3,
        spaceBetween: 30,
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          }
        }
      },
      academic: 'Faculty of Arts, Humanities, and Language',
      academicOnly: [],
      newsOnly: [],
      major_index: 0,
      filteredAcademic: [{
        "id": 1,
        "name": "Faculty of Arts, Humanities , and Language",
        "content": "អត្ថបទ",
        "created_at": "2019-12-06 07:40:58",
        "updated_at": "2019-12-06 07:40:58",
        "majors": []
      }],
      is_home: true,
      is_major: false,
      is_activity: false
    };
  },
  computed: {
    all_aoc: function all_aoc() {
      return this.$store.getters.all_aoc;
    },
    all_news: function all_news() {
      return this.$store.getters.all_news;
    },
    academic_only: function academic_only() {
      var self = this;
      return self.all_aoc.filter(function (x) {
        return x.majors.length;
      });
    }
  },
  created: function () {
    var _created = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.fetchNews();

            case 2:
              _context.next = 4;
              return this.fetchAoc();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }(),
  methods: {
    fetchNews: function fetchNews() {
      var self = this;
      self.$store.dispatch('fetchNews').then(function () {
        self.filterNews(self.academic);
      });
    },
    fetchAoc: function fetchAoc() {
      var self = this;
      self.$store.dispatch('fetchAoc').then(function () {
        self.filterAcademic(self.academic);
      });
    },
    filterAcademic: function filterAcademic(name) {
      var self = this;
      self.academicOnly = self.all_aoc.filter(function (x) {
        return x.majors.length;
      });
      self.filteredAcademic = self.academicOnly.filter(function (x) {
        return x.name === name;
      });
    },
    filterNews: function filterNews(name) {
      var self = this;
      self.newsOnly = self.all_news.filter(function (x) {
        return x.category === name;
      });
    },
    majorIndex: function majorIndex(index) {
      this.major_index = index;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/academic/Academic.vue?vue&type=template&id=0897f7d6&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/academic/Academic.vue?vue&type=template&id=0897f7d6&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("vx-card", { attrs: { "no-radius": "", "no-shadow": "" } }, [
    _c("div", { staticClass: "vx-row" }, [
      _c(
        "div",
        { staticClass: "vx-col w-full mb-3" },
        [
          _c(
            "vs-select",
            {
              staticClass: "w-full",
              attrs: { autocomplete: "", label: "Select Faculty" },
              on: {
                input: function($event) {
                  _vm.filterAcademic(_vm.academic)
                  _vm.filterNews(_vm.academic)
                }
              },
              model: {
                value: _vm.academic,
                callback: function($$v) {
                  _vm.academic = $$v
                },
                expression: "academic"
              }
            },
            _vm._l(_vm.academic_only, function(item, index) {
              return _c("vs-select-item", {
                key: index,
                attrs: { value: item.name, text: item.name }
              })
            }),
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full lg:w-1/4 rounded-lg" },
        [
          _c("vx-card", [
            _c(
              "ul",
              { staticClass: "faq-topics mt-4" },
              [
                _c(
                  "li",
                  {
                    staticClass: "p-2 font-medium flex items-center",
                    on: {
                      click: function($event) {
                        _vm.is_home = true
                        _vm.is_major = false
                        _vm.is_activity = false
                      }
                    }
                  },
                  [
                    _c("div", {
                      staticClass:
                        "h-3 w-3 rounded-full mr-2 bg-danger-gradient"
                    }),
                    _c("span", { staticClass: "cursor-pointer" }, [
                      _vm._v("Home")
                    ])
                  ]
                ),
                _vm._v(" "),
                _vm._l(_vm.filteredAcademic[0].majors, function(item, index) {
                  return _c(
                    "li",
                    {
                      key: index,
                      staticClass: "p-2 font-medium flex items-center",
                      on: {
                        click: function($event) {
                          _vm.majorIndex(index)
                          _vm.is_home = false
                          _vm.is_major = true
                          _vm.is_activity = false
                        }
                      }
                    },
                    [
                      _c("div", {
                        staticClass: "h-3 w-3 rounded-full mr-2 bg-success"
                      }),
                      _c("span", { staticClass: "cursor-pointer" }, [
                        _vm._v(_vm._s(item.major))
                      ])
                    ]
                  )
                }),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "p-2 font-medium flex items-center",
                    on: {
                      click: function($event) {
                        _vm.is_home = false
                        _vm.is_major = false
                        _vm.is_activity = true
                      }
                    }
                  },
                  [
                    _c("div", {
                      staticClass: "h-3 w-3 rounded-full mr-2 bg-success"
                    }),
                    _c("span", { staticClass: "cursor-pointer" }, [
                      _vm._v("Activities")
                    ])
                  ]
                )
              ],
              2
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-col w-full lg:w-3/4 mt-12 md:mt-0" },
        [
          _vm.is_home
            ? _c("vx-card", [
                _c("h4", { staticClass: "mb-2" }, [
                  _vm._v(_vm._s(_vm.filteredAcademic[0].name))
                ]),
                _vm._v(" "),
                _c("div", {
                  domProps: {
                    innerHTML: _vm._s(_vm.filteredAcademic[0].content)
                  }
                })
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.is_major
            ? _c(
                "vx-card",
                [
                  _c(
                    "vs-tabs",
                    [
                      _c("vs-tab", { attrs: { label: "Home" } }, [
                        _c("div", {
                          domProps: {
                            innerHTML: _vm._s(
                              _vm.filteredAcademic[0].majors[_vm.major_index]
                                .content
                            )
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("vs-tab", { attrs: { label: "Curriculum" } }, [
                        _c("div", {
                          domProps: {
                            innerHTML: _vm._s(
                              _vm.filteredAcademic[0].majors[_vm.major_index]
                                .curriculum
                            )
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("vs-tab", { attrs: { label: "Schedule" } }, [
                        _c("div", {
                          domProps: {
                            innerHTML: _vm._s(
                              _vm.filteredAcademic[0].majors[_vm.major_index]
                                .schedule
                            )
                          }
                        })
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.is_activity
            ? _c(
                "vx-card",
                { attrs: { title: "Activities" } },
                [
                  _c(
                    "swiper",
                    { attrs: { options: _vm.swiperOptionNews } },
                    _vm._l(_vm.newsOnly, function(item, index) {
                      return _c(
                        "swiper-slide",
                        { key: index },
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to:
                                  "news/" +
                                  item.id +
                                  "/" +
                                  _vm.slugable(item.title)
                              }
                            },
                            [
                              _c("img", {
                                staticClass: "responsive mb-3",
                                attrs: { src: +item.thumb, alt: "news" }
                              }),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "mb-3 text-xl",
                                  attrs: { href: "#" }
                                },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(item.title) +
                                      "\n                        "
                                  )
                                ]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    }),
                    1
                  )
                ],
                1
              )
            : _vm._e()
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/academic/Academic.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/academic/Academic.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Academic_vue_vue_type_template_id_0897f7d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Academic.vue?vue&type=template&id=0897f7d6&scoped=true& */ "./resources/js/src/views/academic/Academic.vue?vue&type=template&id=0897f7d6&scoped=true&");
/* harmony import */ var _Academic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Academic.vue?vue&type=script&lang=js& */ "./resources/js/src/views/academic/Academic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Academic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Academic_vue_vue_type_template_id_0897f7d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Academic_vue_vue_type_template_id_0897f7d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0897f7d6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/academic/Academic.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/academic/Academic.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/academic/Academic.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Academic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Academic.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/academic/Academic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Academic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/academic/Academic.vue?vue&type=template&id=0897f7d6&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/academic/Academic.vue?vue&type=template&id=0897f7d6&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Academic_vue_vue_type_template_id_0897f7d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Academic.vue?vue&type=template&id=0897f7d6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/academic/Academic.vue?vue&type=template&id=0897f7d6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Academic_vue_vue_type_template_id_0897f7d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Academic_vue_vue_type_template_id_0897f7d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);