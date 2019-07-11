import { BRow, BCol } from 'bootstrap-vue';
import { TbSkeleton, Skeleton } from 'tb-skeleton';

var script = {
  components: {
    BRow,
    BCol,
    TbSkeleton,
    Skeleton
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  }
  var options = typeof script === 'function' ? script.options : script;
  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true;
    if (isFunctionalTemplate) {
      options.functional = true;
    }
  }
  if (scopeId) {
    options._scopeId = scopeId;
  }
  var hook;
  if (moduleIdentifier) {
    hook = function hook(context) {
      context = context ||
      this.$vnode && this.$vnode.ssrContext ||
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      }
      if (style) {
        style.call(this, createInjectorSSR(context));
      }
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }
  if (hook) {
    if (options.functional) {
      var originalRender = options.render;
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return script;
}
var normalizeComponent_1 = normalizeComponent;

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "skeleton",
    {
      attrs: {
        "bg-color": "#eee",
        duration: "2",
        theme: "opacity",
        shape: "radius",
        width: "100%"
      }
    },
    [
      _c(
        "b-row",
        {
          staticStyle: { "padding-top": "8px", "margin-bottom": "20px" },
          attrs: { "align-h": "start" }
        },
        [
          _c(
            "b-col",
            { attrs: { sm: "4" } },
            [
              _c("tb-skeleton", {
                staticClass: "mx-auto",
                attrs: { height: "37px" }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        {
          staticStyle: { "margin-bottom": "20px" },
          attrs: { "align-h": "start" }
        },
        [
          _c(
            "b-col",
            { attrs: { sm: "4" } },
            [
              _c("tb-skeleton", {
                staticClass: "mx-auto",
                attrs: { height: "20px" }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("tb-skeleton", { attrs: { height: "500px" } }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "my-4 py-4" },
        [
          _c("tb-skeleton", {
            staticStyle: { "margin-bottom": "10px" },
            attrs: { height: "13px" }
          }),
          _vm._v(" "),
          _c("tb-skeleton", {
            staticStyle: { "margin-bottom": "10px" },
            attrs: { height: "13px" }
          }),
          _vm._v(" "),
          _c("tb-skeleton", {
            staticStyle: { "margin-bottom": "10px" },
            attrs: { height: "13px" }
          }),
          _vm._v(" "),
          _c("tb-skeleton", {
            staticStyle: { "margin-bottom": "10px" },
            attrs: { height: "13px" }
          }),
          _vm._v(" "),
          _c("tb-skeleton", {
            staticStyle: { "margin-bottom": "35px" },
            attrs: { width: "60%", height: "13px" }
          }),
          _vm._v(" "),
          _c("tb-skeleton", {
            staticStyle: { "margin-bottom": "10px" },
            attrs: { height: "13px" }
          }),
          _vm._v(" "),
          _c("tb-skeleton", {
            staticStyle: { "margin-bottom": "10px" },
            attrs: { height: "13px" }
          }),
          _vm._v(" "),
          _c("tb-skeleton", {
            staticStyle: { "margin-bottom": "10px" },
            attrs: { height: "13px" }
          }),
          _vm._v(" "),
          _c("tb-skeleton", {
            staticStyle: { "margin-bottom": "10px" },
            attrs: { height: "13px" }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("vf-loader-reviews")
    ],
    1
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var post = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

export default post;