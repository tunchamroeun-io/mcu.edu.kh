(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"88M5":function(e,t,a){"use strict";var s=a("Gkws");a.n(s).a},Gkws:function(e,t,a){var s=a("qix2");"string"==typeof s&&(s=[[e.i,s,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(s,l);s.locals&&(e.exports=s.locals)},VDZ6:function(e,t,a){"use strict";a.r(t);var s=a("o0o1"),l=a.n(s),r=a("vDqi"),i=a.n(r);function n(e,t,a,s,l,r,i){try{var n=e[r](i),o=n.value}catch(e){return void a(e)}n.done?t(o):Promise.resolve(o).then(s,l)}var o,c,u={props:["imageSrc","uploadUrl"],name:"ImageUpload",computed:{placeholder:function(){return this.$store.getters.getAppUrl+"images/placeholder/placeholder.png"}},methods:{onFileChange:(o=l.a.mark((function e(t){var a,s,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new FormData,s=t.target.files[0],a.append("file",s),e.next=5,i.a.post(route(this.uploadUrl),a);case 5:r=e.sent,this.$emit("get-image-path",r.data);case 7:case"end":return e.stop()}}),e,this)})),c=function(){var e=this,t=arguments;return new Promise((function(a,s){var l=o.apply(e,t);function r(e){n(l,a,s,r,i,"next",e)}function i(e){n(l,a,s,r,i,"throw",e)}r(void 0)}))},function(e){return c.apply(this,arguments)})}},m=a("KHd+"),d={name:"SubTab",components:{ImageUpload:Object(m.a)(u,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("vs-images",[t("vs-image",{attrs:{src:this.imageSrc}})],1),this._v(" "),t("div",{staticClass:"vs-con-input"},[t("input",{attrs:{type:"file",name:"file"},on:{change:this.onFileChange}})])],1)}),[],!1,null,"3195c7c6",null).exports},data:function(){return{user:{profile:null,category:"ICT",role:"user",type:"employee",name:"",email:"",telephone:"",password:"",content:"Content"},categories:[{id:1,category:"ICT"},{id:2,category:"Administrator"},{id:3,category:"Faculty of Science and Technology"}],data:"Working on the mix",options:{height:300,plugins:"link image imagetools table contextmenu"}}},computed:{placeholder:function(){return this.$store.getters.getAppUrl+"images/placeholder/placeholder.png"}},methods:{setThumb:function(e){this.user.profile=e}}},v={components:{SubTab:Object(m.a)(d,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vx-card",{attrs:{"no-shadow":""}},[a("form",[a("div",{staticClass:"vx-row mb-2"},[a("div",{staticClass:"vx-col w-full"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"title","label-placeholder":"ចំណងជើង"},model:{value:e.user.title,callback:function(t){e.$set(e.user,"title",t)},expression:"user.title"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("title"),expression:"errors.has('title')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("title")))])],1),e._v(" "),a("div",{staticClass:"vx-col w-full"},[a("vs-select",{staticClass:"w-full",attrs:{autocomplete:"",label:"ប្រភេទ"},on:{"input-change":function(e){}},model:{value:e.user.category,callback:function(t){e.$set(e.user,"category",t)},expression:"user.category"}},e._l(e.categories,(function(e,t){return a("vs-select-item",{key:t,attrs:{value:e.category,text:e.category}})})),1)],1),e._v(" "),a("div",{staticClass:"vx-col w-full my-2"},[a("tinymce",{attrs:{id:"sub-tab",other_options:e.options},model:{value:e.data,callback:function(t){e.data=t},expression:"data"}})],1)]),e._v(" "),a("div",{staticClass:"vx-row mb-2"},[a("div",{staticClass:"vx-col sm:w-1/2 w-full"},[a("vs-select",{staticClass:"w-full",attrs:{autocomplete:"",label:"សិទ្ធ"},on:{"input-change":function(e){}},model:{value:e.user.role,callback:function(t){e.$set(e.user,"role",t)},expression:"user.role"}},[a("vs-select-item",{attrs:{value:"user",text:"User"}}),e._v(" "),a("vs-select-item",{attrs:{value:"admin",text:"Admin"}}),e._v(" "),a("vs-select-item",{attrs:{value:"super_admin",text:"Super Admin"}})],1)],1),e._v(" "),a("div",{staticClass:"vx-col sm:w-1/2 w-full"},[a("image-upload",{staticClass:"mb-2",attrs:{"upload-url":"file.upload","image-src":e.user.profile?e.user.profile:e.placeholder},on:{"get-image-path":e.setThumb}})],1)]),e._v(" "),a("div",{staticClass:"vx-row mb-2"},[a("div",{staticClass:"vx-col sm:w-1/2 w-full"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"w-full",attrs:{type:"email",name:"email","icon-pack":"feather",icon:"icon-mail","icon-no-border":"","label-placeholder":"អ៊ីម៉ែល"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("email")))])],1),e._v(" "),a("div",{staticClass:"vx-col sm:w-1/2 w-full"},[a("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full",attrs:{name:"telephone","icon-pack":"feather",icon:"icon-smartphone","icon-no-border":"","label-placeholder":"លេខទុរស័ព្ទ"},model:{value:e.user.telephone,callback:function(t){e.$set(e.user,"telephone",t)},expression:"user.telephone"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("telephone"),expression:"errors.has('telephone')"}],staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("telephone")))])],1)]),e._v(" "),a("vs-divider"),e._v(" "),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full"},[a("vs-button",{staticClass:"mr-3 mb-2",attrs:{type:"relief"},on:{click:function(t){return t.preventDefault(),e.submitForm(t)}}},[e._v("\n                បង្កើត\n            ")]),e._v(" "),a("vs-button",{staticClass:"mb-2",attrs:{color:"warning",type:"relief"},on:{click:[function(t){return t.preventDefault(),e.resetField(t)},function(e){}]}},[e._v("\n                ចាកចេញ\n            ")])],1)])],1)])}),[],!1,null,"c013de8a",null).exports},data:function(){return{old_password:"",new_password:"",confirm_new_password:""}},computed:{isSmallerScreen:function(){return this.$store.state.windowWidth<768}}},p=(a("88M5"),Object(m.a)(v,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vs-tabs",{key:e.isSmallerScreen,staticClass:"tabs-shadow-none",attrs:{position:e.isSmallerScreen?"top":"left",id:"profile-tabs"}},[a("vs-tab",{attrs:{"icon-pack":"feather",icon:"icon-user",label:e.isSmallerScreen?"":"General"}},[a("div",{staticClass:"tab-general md:ml-4 md:mt-0 mt-4 ml-0"},[a("vx-card",{attrs:{"no-shadow":""}},[a("vs-input",{staticClass:"w-full mb-base",attrs:{"label-placeholder":"Old Password"},model:{value:e.old_password,callback:function(t){e.old_password=t},expression:"old_password"}}),e._v(" "),a("vs-input",{staticClass:"w-full mb-base",attrs:{"label-placeholder":"New Password"},model:{value:e.new_password,callback:function(t){e.new_password=t},expression:"new_password"}}),e._v(" "),a("vs-input",{staticClass:"w-full mb-base",attrs:{"label-placeholder":"Confirm Password"},model:{value:e.confirm_new_password,callback:function(t){e.confirm_new_password=t},expression:"confirm_new_password"}}),e._v(" "),a("div",{staticClass:"flex justify-end btn-group"},[a("vs-button",{attrs:{"icon-pack":"feather",type:"relief",icon:"icon-save"}},[e._v("រក្សាទុក")]),e._v(" "),a("vs-button",{attrs:{"icon-pack":"feather",icon:"icon-delete",type:"relief",color:"warning"}},[e._v("សម្អាត")])],1)],1)],1)]),e._v(" "),a("vs-tab",{attrs:{"icon-pack":"feather",icon:"icon-lock",label:e.isSmallerScreen?"":"Change Password"}},[a("div",{staticClass:"tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0"},[a("sub-tab")],1)]),e._v(" "),a("vs-tab",{attrs:{"icon-pack":"feather",icon:"icon-info",label:e.isSmallerScreen?"":"Info"}},[a("div",{staticClass:"tab-info md:ml-4 md:mt-0 mt-4 ml-0"})]),e._v(" "),a("vs-tab",{attrs:{"icon-pack":"feather",icon:"icon-github",label:e.isSmallerScreen?"":"Social Links"}},[a("div",{staticClass:"tab-social-links md:ml-4 md:mt-0 mt-4 ml-0"})]),e._v(" "),a("vs-tab",{attrs:{"icon-pack":"feather",icon:"icon-link-2",label:e.isSmallerScreen?"":"Connections"}},[a("div",{staticClass:"tab-text md:ml-4 md:mt-0 mt-4 ml-0"})]),e._v(" "),a("vs-tab",{attrs:{"icon-pack":"feather",icon:"icon-bell",label:e.isSmallerScreen?"":"Notifications"}},[a("div",{staticClass:"tab-text md:ml-4 md:mt-0 mt-4 ml-0"})])],1)}),[],!1,null,null,null));t.default=p.exports},qix2:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,"[dir] #profile-tabs .vs-tabs--content {\n  padding: 0;\n}",""])}}]);