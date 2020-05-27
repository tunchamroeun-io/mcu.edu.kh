(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
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
  data: function data() {
    return {
      welcome_message: [{
        excerpt: '',
        title: ''
      }],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      },
      swiperOptionGallery: {
        slidesPerView: 3,
        slidesPerColumn: 1,
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
            slidesPerView: 1,
            spaceBetween: 20
          }
        }
      },
      swiperOptionNews: {
        slidesPerView: 3,
        slidesPerColumn: 1,
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
            slidesPerView: 1,
            spaceBetween: 20
          }
        }
      },
      swiperOptionCorporation: {
        slidesPerView: 8,
        slidesPerColumn: 1,
        spaceBetween: 30,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        breakpoints: {
          1024: {
            slidesPerView: 6,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 20
          }
        }
      }
    };
  },
  computed: {
    all_corporation: function all_corporation() {
      return this.$store.getters.all_corporation;
    },
    all_news: function all_news() {
      return this.$store.getters.all_news;
    },
    all_videos: function all_videos() {
      return this.$store.getters.all_videos;
    },
    all_galleries: function all_galleries() {
      return this.$store.getters.all_galleries;
    },
    all_abouts: function all_abouts() {
      return this.$store.getters.all_abouts;
    },
    all_projects: function all_projects() {
      return this.$store.getters.all_project;
    },
    all_collaborations: function all_collaborations() {
      return this.$store.getters.all_collaboration;
    },
    all_banner: function all_banner() {
      return this.$store.getters.all_banner;
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
              return this.fetchCorporation();

            case 2:
              _context.next = 4;
              return this.fetchNews();

            case 4:
              _context.next = 6;
              return this.fetchVideos();

            case 6:
              _context.next = 8;
              return this.fetchGalleries();

            case 8:
              _context.next = 10;
              return this.fetchAbout();

            case 10:
              _context.next = 12;
              return this.fetchProject();

            case 12:
              _context.next = 14;
              return this.fetchCollaboration();

            case 14:
              _context.next = 16;
              return this.fetchBanner();

            case 16:
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
    fetchBanner: function () {
      var _fetchBanner = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var self;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                self = this;
                _context2.next = 3;
                return self.$store.dispatch('fetchBanner');

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function fetchBanner() {
        return _fetchBanner.apply(this, arguments);
      }

      return fetchBanner;
    }(),
    fetchCollaboration: function () {
      var _fetchCollaboration = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var self;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                self = this;
                _context3.next = 3;
                return self.$store.dispatch('fetchCollaboration');

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function fetchCollaboration() {
        return _fetchCollaboration.apply(this, arguments);
      }

      return fetchCollaboration;
    }(),
    fetchProject: function () {
      var _fetchProject = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var self;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                self = this;
                _context4.next = 3;
                return self.$store.dispatch('fetchProject');

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function fetchProject() {
        return _fetchProject.apply(this, arguments);
      }

      return fetchProject;
    }(),
    fetchAbout: function () {
      var _fetchAbout = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var self;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                self = this;
                _context5.next = 3;
                return self.$store.dispatch('fetchAbout');

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function fetchAbout() {
        return _fetchAbout.apply(this, arguments);
      }

      return fetchAbout;
    }(),
    fetchGalleries: function () {
      var _fetchGalleries = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.$store.dispatch('fetchGalleries');

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function fetchGalleries() {
        return _fetchGalleries.apply(this, arguments);
      }

      return fetchGalleries;
    }(),
    fetchCorporation: function () {
      var _fetchCorporation = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.$store.dispatch('fetchCorporation');

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function fetchCorporation() {
        return _fetchCorporation.apply(this, arguments);
      }

      return fetchCorporation;
    }(),
    fetchNews: function () {
      var _fetchNews = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.$store.dispatch('fetchNews');

              case 2:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function fetchNews() {
        return _fetchNews.apply(this, arguments);
      }

      return fetchNews;
    }(),
    fetchVideos: function () {
      var _fetchVideos = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.$store.dispatch('fetchVideos');

              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function fetchVideos() {
        return _fetchVideos.apply(this, arguments);
      }

      return fetchVideos;
    }()
  },
  components: {
    swiper: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_2__["swiper"],
    swiperSlide: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_2__["swiperSlide"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee& ***!
  \******************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "div",
      { staticClass: "container" },
      [
        _c("vx-card", { attrs: { "no-shadow": "" } }, [
          _c("div", { staticClass: "vx-row" }, [
            _c(
              "div",
              { staticClass: "vx-col lg:w-2/3 w-full mb-3 hidden md:block" },
              [
                _c(
                  "swiper",
                  { attrs: { options: _vm.swiperOption } },
                  [
                    _c("swiper-slide", [
                      _c("img", {
                        staticClass: "responsive",
                        attrs: {
                          src: __webpack_require__(/*! ../../../assets/slideshow/slide-1.gif */ "./resources/assets/slideshow/slide-1.gif"),
                          alt: "banner"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("swiper-slide", [
                      _c("img", {
                        staticClass: "responsive",
                        attrs: {
                          src: __webpack_require__(/*! ../../../assets/slideshow/slide-2.gif */ "./resources/assets/slideshow/slide-2.gif"),
                          alt: "banner"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", {
                      staticClass: "swiper-pagination",
                      attrs: { slot: "pagination" },
                      slot: "pagination"
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "vx-col lg:w-1/3 w-full mb-3" },
              [
                _c(
                  "vx-card",
                  { staticClass: "overlay-card overflow-hidden w-full" },
                  [
                    _c("template", { slot: "no-body" }, [
                      _c("a", { attrs: { href: "http://tactic.muni.cz/" } }, [
                        _c("img", {
                          staticClass: "responsive",
                          attrs: {
                            src:
                              "http://tactic.muni.cz/thumbs/1180tactic-logo.png",
                            alt: "tactic"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "card-overlay text-white flex flex-col justify-between"
                          },
                          [
                            _c("h4", { staticClass: "text-white mb-4" }, [
                              _vm._v("TACTIC")
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "Through Academic Cooperation Towards Innovative Capacity"
                              )
                            ])
                          ]
                        )
                      ])
                    ])
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "vx-card",
                  { staticClass: "overlay-card overflow-hidden w-full mt-2" },
                  [
                    _c("template", { slot: "no-body" }, [
                      _c(
                        "a",
                        {
                          attrs: {
                            href: "http://www.unicamedu.com/index.php?lang=en"
                          }
                        },
                        [
                          _c("img", {
                            staticClass: "responsive",
                            attrs: {
                              src: "http://www.ajaes.org/img/logo.png",
                              alt: "unicam"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "card-overlay text-white flex flex-col justify-between"
                            },
                            [
                              _c("h4", { staticClass: "text-white mb-4" }, [
                                _vm._v("UNICAM")
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "Implementing quality of education & training of the Young\n                                        Universities in rural area of CAMbodia - Unicam"
                                )
                              ])
                            ]
                          )
                        ]
                      )
                    ])
                  ],
                  2
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "vx-row" }, [
            _c("div", { staticClass: "vx-col lg:w-2/3 w-full" }, [
              _c("a", { staticClass: "text-2xl", attrs: { href: "#" } }, [
                _vm._v(_vm._s(_vm.all_banner.title))
              ]),
              _vm._v(" "),
              _c("img", {
                staticClass: "responsive rounded shadow-md",
                attrs: { src: _vm.all_banner.banner, alt: "" }
              })
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "vx-col lg:w-1/3 w-full mt-2" },
              [
                _c("iframe", {
                  staticClass: "responsive",
                  attrs: {
                    src: "https://www.youtube.com/embed/CVe3ABsiOU8",
                    frameborder: "0",
                    allowfullscreen: ""
                  }
                }),
                _vm._v(" "),
                _c(
                  "vs-list",
                  [
                    _c("vs-list-header", { attrs: { title: "Projects" } }),
                    _vm._v(" "),
                    _vm._l(_vm.all_projects, function(item, index) {
                      return index <= 5
                        ? _c("vs-list-item", {
                            key: index + 5,
                            attrs: {
                              title: item.project_name,
                              subtitle:
                                "Funded from: " +
                                item.project_from +
                                " Project Status: " +
                                item.project_status
                            }
                          })
                        : _vm._e()
                    }),
                    _vm._v(" "),
                    _c("vs-list-header", {
                      attrs: {
                        title: "Collaboration Agreement",
                        color: "success"
                      }
                    }),
                    _vm._v(" "),
                    _vm._l(_vm.all_collaborations, function(item, index) {
                      return index <= 5
                        ? _c("vs-list-item", {
                            key: index,
                            attrs: {
                              title: item.org_name,
                              subtitle: "" + item.description.substring(0, 50)
                            }
                          })
                        : _vm._e()
                    })
                  ],
                  2
                )
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "vx-card",
          {
            staticClass: "mt-3",
            attrs: { title: "Latest News", "no-shadow": "" }
          },
          [
            _c(
              "swiper",
              { attrs: { options: _vm.swiperOptionNews } },
              [
                _vm._l(_vm.all_news, function(item, index) {
                  return index <= 5
                    ? _c(
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
                                attrs: { src: item.thumb, alt: "news" }
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
                    : _vm._e()
                }),
                _vm._v(" "),
                _c("div", {
                  staticClass: "swiper-pagination",
                  attrs: { slot: "pagination" },
                  slot: "pagination"
                })
              ],
              2
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "vx-card",
          {
            staticClass: "my-3",
            attrs: { title: "Latest Gallery", "no-shadow": "" }
          },
          [
            _c(
              "swiper",
              { attrs: { options: _vm.swiperOptionGallery } },
              [
                _vm._l(_vm.all_galleries, function(item, index) {
                  return index <= 5
                    ? _c(
                        "swiper-slide",
                        { key: index },
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to:
                                  "gallery/" +
                                  item.id +
                                  "/" +
                                  _vm.slugable(item.title)
                              }
                            },
                            [
                              _c("img", {
                                staticClass: "responsive",
                                attrs: { src: item.thumb, alt: "gallery" }
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
                    : _vm._e()
                }),
                _vm._v(" "),
                _c("div", {
                  staticClass: "swiper-pagination",
                  attrs: { slot: "pagination" },
                  slot: "pagination"
                })
              ],
              2
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("h3", [_vm._v("Corporations")]),
        _vm._v(" "),
        _c(
          "swiper",
          {
            staticClass: "mt-3",
            attrs: { options: _vm.swiperOptionCorporation }
          },
          [
            _vm._l(_vm.all_corporation.gallery_album, function(
              corporation,
              index
            ) {
              return _c("swiper-slide", { key: index }, [
                _c("img", {
                  staticClass: "responsive",
                  attrs: { src: corporation.path, alt: "corporation" }
                })
              ])
            }),
            _vm._v(" "),
            _c("div", {
              staticClass: "swiper-pagination",
              attrs: { slot: "pagination" },
              slot: "pagination"
            })
          ],
          2
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/slideshow/slide-1.gif":
/*!************************************************!*\
  !*** ./resources/assets/slideshow/slide-1.gif ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/slide-1.gif?31234270c2d4a095f403885419462617";

/***/ }),

/***/ "./resources/assets/slideshow/slide-2.gif":
/*!************************************************!*\
  !*** ./resources/assets/slideshow/slide-2.gif ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/slide-2.gif?43f6306b037787f14480c5d7a0393324";

/***/ }),

/***/ "./resources/js/src/views/Home.vue":
/*!*****************************************!*\
  !*** ./resources/js/src/views/Home.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=e85b2cee& */ "./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Home.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/src/views/Home.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=e85b2cee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);