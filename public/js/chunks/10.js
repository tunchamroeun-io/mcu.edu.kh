(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/contact/Contact.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/contact/Contact.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
      center: {
        lat: 13.5798293,
        lng: 102.9284086
      },
      markers: [{
        position: {
          lat: 13.5798293,
          lng: 102.9284086
        }
      }, {
        position: {
          lat: 13.578997,
          lng: 102.930324
        }
      }, {
        position: {
          lat: 13.582285,
          lng: 102.925807
        }
      }, {
        position: {
          lat: 13.581685,
          lng: 102.925627
        }
      }, {
        position: {
          lat: 13.584853,
          lng: 102.923607
        }
      }, {
        position: {
          lat: 13.580105,
          lng: 102.930313
        }
      }],
      pov: {
        "heading": 162.80544045496987,
        "pitch": 4.942718248062718,
        "zoom": 0
      },
      pano: null
    };
  },
  methods: {
    updatePov: function updatePov(pov) {
      this.pov = pov;
    },
    updatePano: function updatePano(pano) {
      this.pano = pano;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/contact/Contact.vue?vue&type=template&id=6c0e5e77&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/contact/Contact.vue?vue&type=template&id=6c0e5e77& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "container" },
    [
      _c(
        "vx-card",
        { attrs: { "no-shadow": "" } },
        [
          _c(
            "vx-card",
            { staticClass: "mb-2", attrs: { title: "Get in touch with us" } },
            [
              _c("div", { staticClass: "vx-row" }, [
                _c("div", { staticClass: "vx-col lg:w-1/4 w-full" }, [
                  _c("div", { staticClass: "mt-5" }, [
                    _c("h6", [_vm._v("Address:")]),
                    _vm._v("\n                    Banoy Village "),
                    _c("br"),
                    _vm._v("\n                    Tuek Thla Commune "),
                    _c("br"),
                    _vm._v("\n                    Serei Saophoan City "),
                    _c("br"),
                    _vm._v("\n                    Banteay Meanchey Province "),
                    _c("br"),
                    _vm._v("\n                    Postal Code: 01252 "),
                    _c("br"),
                    _vm._v("\n                    Cambodia\n                ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "vx-col lg:w-1/4 w-full" }, [
                  _c("div", { staticClass: "mt-5" }, [
                    _c("h6", [_vm._v("Email:")]),
                    _vm._v(" "),
                    _c("p", [_vm._v("contact@mcu.edu.kh")])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "mt-5" }, [
                    _c("h6", [_vm._v("Tell:")]),
                    _vm._v(" "),
                    _c("p", [_vm._v("Rector: 012 921 976")]),
                    _vm._v(" "),
                    _c("p", [_vm._v("Administration: 017 868 626")]),
                    _vm._v(" "),
                    _c("p", [_vm._v("Academic Office: 012 240 954")]),
                    _vm._v(" "),
                    _c("p", [_vm._v("International Affair: 012 696 037")])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "mt-5" }, [
                    _c("h6", [_vm._v("Website:")]),
                    _vm._v(" "),
                    _c("p", [_vm._v("www.mcu.edu.kh")])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "social-links flex mt-4" },
                    [
                      _c("feather-icon", {
                        staticClass: "mr-2",
                        attrs: {
                          svgClasses:
                            "h-7 w-7 cursor-pointer bg-primary p-1 text-white rounded",
                          icon: "FacebookIcon"
                        }
                      }),
                      _vm._v(" "),
                      _c("feather-icon", {
                        staticClass: "mr-2",
                        attrs: {
                          svgClasses:
                            "h-7 w-7 cursor-pointer bg-primary p-1 text-white rounded",
                          icon: "YoutubeIcon"
                        }
                      })
                    ],
                    1
                  )
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "vx-card",
            { attrs: { title: "Terrain View" } },
            [
              _c(
                "GmapMap",
                {
                  staticStyle: { width: "100%", height: "600px" },
                  attrs: {
                    center: _vm.center,
                    zoom: 16,
                    "map-type-id": "terrain"
                  }
                },
                _vm._l(_vm.markers, function(m, index) {
                  return _c("GmapMarker", {
                    key: index,
                    attrs: {
                      position: m.position,
                      clickable: true,
                      draggable: true
                    },
                    on: {
                      click: function($event) {
                        _vm.center = m.position
                      }
                    }
                  })
                }),
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vx-card",
            { staticClass: "mt-3", attrs: { title: "Panorama View" } },
            [
              _c("h6", { staticClass: "mb-2" }, [
                _vm._v("Big thanks to "),
                _c(
                  "a",
                  {
                    attrs: {
                      href:
                        "https://maps.google.com/maps/contrib/102744503247890278791/photos"
                    }
                  },
                  [_vm._v("©Sophat CHY")]
                )
              ]),
              _vm._v(" "),
              _c("gmap-street-view-panorama", {
                staticClass: "pano",
                staticStyle: { height: "600px", width: "100%" },
                attrs: {
                  position: { lat: 13.58001715617746, lng: 102.9280132295946 },
                  pov: _vm.pov,
                  zoom: 0
                },
                on: { pano_changed: _vm.updatePano, pov_changed: _vm.updatePov }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/contact/Contact.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/views/contact/Contact.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Contact_vue_vue_type_template_id_6c0e5e77___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.vue?vue&type=template&id=6c0e5e77& */ "./resources/js/src/views/contact/Contact.vue?vue&type=template&id=6c0e5e77&");
/* harmony import */ var _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact.vue?vue&type=script&lang=js& */ "./resources/js/src/views/contact/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Contact_vue_vue_type_template_id_6c0e5e77___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Contact_vue_vue_type_template_id_6c0e5e77___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/contact/Contact.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/contact/Contact.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/contact/Contact.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/contact/Contact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/contact/Contact.vue?vue&type=template&id=6c0e5e77&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/contact/Contact.vue?vue&type=template&id=6c0e5e77& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_6c0e5e77___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Contact.vue?vue&type=template&id=6c0e5e77& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/contact/Contact.vue?vue&type=template&id=6c0e5e77&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_6c0e5e77___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_6c0e5e77___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);