(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-core.js', './kobweb-frontend-silk-foundation.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-internal-html-core-runtime.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js', './kobweb-frontend-silk-widgets.js', './kobweb-frontend-silk-widgets-kobweb.js', './kobweb-frontend-kobweb-silk.js', './html-html-core.js', './kobweb-frontend-kobweb-compose.js', './kobweb-frontend-compose-html-ext.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-core.js'), require('./kobweb-frontend-silk-foundation.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-internal-html-core-runtime.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'), require('./kobweb-frontend-silk-widgets.js'), require('./kobweb-frontend-silk-widgets-kobweb.js'), require('./kobweb-frontend-kobweb-silk.js'), require('./html-html-core.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./kobweb-frontend-compose-html-ext.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplatform:site'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'com.example.blogmultiplatform:site'.");
    }
    if (typeof this['kobweb-frontend-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplatform:site'. Its dependency 'kobweb-frontend-kobweb-core' was not found. Please, check whether 'kobweb-frontend-kobweb-core' is loaded prior to 'com.example.blogmultiplatform:site'.");
    }
    if (typeof this['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplatform:site'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'com.example.blogmultiplatform:site'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplatform:site'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'com.example.blogmultiplatform:site'.");
    }
    if (typeof this['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplatform:site'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'com.example.blogmultiplatform:site'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplatform:site'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'com.example.blogmultiplatform:site'.");
    }
    if (typeof this['kobweb-frontend-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplatform:site'. Its dependency 'kobweb-frontend-silk-widgets' was not found. Please, check whether 'kobweb-frontend-silk-widgets' is loaded prior to 'com.example.blogmultiplatform:site'.");
    }
    if (typeof this['kobweb-frontend-silk-widgets-kobweb'] === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplatform:site'. Its dependency 'kobweb-frontend-silk-widgets-kobweb' was not found. Please, check whether 'kobweb-frontend-silk-widgets-kobweb' is loaded prior to 'com.example.blogmultiplatform:site'.");
    }
    if (typeof this['kobweb-frontend-kobweb-silk'] === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplatform:site'. Its dependency 'kobweb-frontend-kobweb-silk' was not found. Please, check whether 'kobweb-frontend-kobweb-silk' is loaded prior to 'com.example.blogmultiplatform:site'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplatform:site'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'com.example.blogmultiplatform:site'.");
    }
    if (typeof this['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplatform:site'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'com.example.blogmultiplatform:site'.");
    }
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'com.example.blogmultiplatform:site'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'com.example.blogmultiplatform:site'.");
    }
    root['com.example.blogmultiplatform:site'] = factory(typeof this['com.example.blogmultiplatform:site'] === 'undefined' ? {} : this['com.example.blogmultiplatform:site'], this['kotlin-kotlin-stdlib'], this['kobweb-frontend-kobweb-core'], this['kobweb-frontend-silk-foundation'], this['compose-multiplatform-core-compose-runtime-runtime'], this['html-internal-html-core-runtime'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, this['kobweb-frontend-silk-widgets'], this['kobweb-frontend-silk-widgets-kobweb'], this['kobweb-frontend-kobweb-silk'], this['html-html-core'], this['kobweb-frontend-kobweb-compose'], this['kobweb-frontend-compose-html-ext']);
  }
}(this, function (_, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_core, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, kotlin_com_varabyte_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_silk_widgets_kobweb, kotlin_com_varabyte_kobweb_kobweb_silk, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_com_varabyte_kobweb_compose_html_ext) {
  'use strict';
  //region block: imports
  var ensureNotNull = kotlin_kotlin.$_$.kf;
  var get_api = kotlin_com_varabyte_kobweb_kobweb_core.$_$.a;
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.i;
  var Router = kotlin_com_varabyte_kobweb_kobweb_core.$_$.d;
  var initKobweb = kotlin_com_varabyte_kobweb_kobweb_core.$_$.b;
  var LegacyRouteRedirectStrategy_DISALLOW_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.f;
  var set_additionalSilkInitialization = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c;
  var removePrefix = kotlin_kotlin.$_$.dd;
  var UpdateHistoryMode_REPLACE_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.g;
  var AppGlobals_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.h;
  var to = kotlin_kotlin.$_$.vf;
  var mapOf = kotlin_kotlin.$_$.p7;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var renderComposable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.e;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var Unit_getInstance = kotlin_kotlin.$_$.l4;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var THROW_CCE = kotlin_kotlin.$_$.re;
  var renderWithDeferred = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b;
  var protoOf = kotlin_kotlin.$_$.ob;
  var objectMeta = kotlin_kotlin.$_$.nb;
  var setMetadataFor = kotlin_kotlin.$_$.pb;
  var removeClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.d;
  var hasClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.c;
  var toString = kotlin_kotlin.$_$.uf;
  var toInt = kotlin_kotlin.$_$.sd;
  var charSequenceLength = kotlin_kotlin.$_$.da;
  var toBoolean = kotlin_kotlin.$_$.qd;
  var isBlank = kotlin_kotlin.$_$.xc;
  var VOID = kotlin_kotlin.$_$.e;
  var removeSuffix = kotlin_kotlin.$_$.ed;
  var initSilkWidgets = kotlin_com_varabyte_kobweb_silk_widgets.$_$.d;
  var initSilkWidgetsKobweb = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.b;
  var SilkApp = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.a;
  var get_SmoothColorStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.f;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a1;
  var get_vh = kotlin_org_jetbrains_compose_html_html_core.$_$.c5;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m1;
  var Surface = kotlin_com_varabyte_kobweb_silk_widgets.$_$.b;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var THROW_IAE = kotlin_kotlin.$_$.se;
  var enumEntries = kotlin_kotlin.$_$.u9;
  var rgb = kotlin_org_jetbrains_compose_html_html_core.$_$.x4;
  var Enum = kotlin_kotlin.$_$.ge;
  var classMeta = kotlin_kotlin.$_$.ea;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y2;
  var fillMaxSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x;
  var Center_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w2;
  var Box = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.l5;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var SpanText = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a;
  var KMutableProperty0 = kotlin_kotlin.$_$.cc;
  var THROW_ISE = kotlin_kotlin.$_$.te;
  var getLocalDelegateReference = kotlin_kotlin.$_$.ka;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.w4;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m2;
  var Image = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.a;
  var Text_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.d;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f1;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w1;
  var Colors_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t2;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j;
  var fontFamily = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a1;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o;
  var outline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q1;
  var Input = kotlin_com_varabyte_kobweb_silk_widgets.$_$.a;
  var Password_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.c;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m;
  var Companion_getInstance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j2;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o2;
  var Button = kotlin_org_jetbrains_compose_html_html_core.$_$.f5;
  var Companion_getInstance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.p2;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d2;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v1;
  var Center_getInstance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var CenterHorizontally_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u2;
  var Column = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt', objectMeta);
  setMetadataFor(Theme, 'Theme', classMeta, Enum);
  setMetadataFor(ComposableSingletons$IndexKt, 'ComposableSingletons$IndexKt', objectMeta);
  setMetadataFor(ComposableSingletons$LoginKt, 'ComposableSingletons$LoginKt', objectMeta);
  setMetadataFor(Constants, 'Constants', objectMeta);
  setMetadataFor(Image_0, 'Image', objectMeta);
  setMetadataFor(Res, 'Res', objectMeta);
  //endregion
  function forceReloadNow() {
    window.stop();
    window.location.reload();
  }
  function handleServerStatusEvents() {
    var status = ensureNotNull(document.getElementById('status'));
    var lastVersion = {_v: null};
    var shouldReload = {_v: false};
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = status.children[0];
    var warningIcon = ensureNotNull(tmp$ret$1);
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = status.children[1];
    var spinnerIcon = ensureNotNull(tmp$ret$3);
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = status.children[2];
    var statusText = ensureNotNull(tmp$ret$5);
    status.addEventListener('transitionend', handleServerStatusEvents$lambda(status, shouldReload));
    // Inline function 'org.w3c.dom.EventSourceInit' call
    var o = {};
    o['withCredentials'] = true;
    var eventSource = new EventSource('/api/kobweb-status', o);
    eventSource.addEventListener('version', handleServerStatusEvents$lambda_0(lastVersion, status, shouldReload));
    eventSource.addEventListener('status', handleServerStatusEvents$lambda_1(warningIcon, spinnerIcon, statusText, status));
    eventSource.onerror = handleServerStatusEvents$lambda_2(eventSource);
  }
  function main() {
    handleServerStatusEvents();
    get_api(window).set_logOnError_wi584t_k$(true);
    Companion_getInstance().set_wjk6wo_k$('');
    var router = new Router();
    initKobweb(router, main$lambda);
    router.setLegacyRouteRedirectStrategy_dj372z_k$(LegacyRouteRedirectStrategy_DISALLOW_getInstance());
    router.addRouteInterceptor_kgq7h7_k$(main$lambda_0);
    set_additionalSilkInitialization(main$lambda_1);
    router.navigateTo$default_onbd51_k$(removePrefix(window.location.href, window.location.origin), UpdateHistoryMode_REPLACE_getInstance());
    var root = ensureNotNull(document.getElementById('root'));
    while (!(root.firstChild == null)) {
      root.removeChild(ensureNotNull(root.firstChild));
    }
    AppGlobals_getInstance().initialize_8ufbf0_k$(mapOf(to('title', 'BlogMultiplatform')));
    renderComposable('root', ComposableLambda$invoke$ref_3(composableLambdaInstance(1108811911, true, main$lambda_2(router))));
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-994802423, $changed, -1, 'ComposableSingletons$MainKt.lambda-1.<anonymous> (main.kt:85)');
      }
      HomePage($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_2$lambda_dts8wk($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1296252800, $changed, -1, 'ComposableSingletons$MainKt.lambda-2.<anonymous> (main.kt:87)');
      }
      LoginScreen($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_3$lambda_ezu85n(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(it) ? 4 : 2);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1940211355, $dirty, -1, 'ComposableSingletons$MainKt.lambda-3.<anonymous> (main.kt:113)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ComposableSingletons$MainKt.lambda-3.<anonymous>.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 2103839155, true, ComposableSingletons$MainKt$lambda_3$lambda$lambda_g9fe80(it));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'ComposableSingletons$MainKt.lambda-3.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_2(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it_0;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      renderWithDeferred(tmp0, $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt$lambda_3$lambda$lambda_g9fe80($it) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(2103839155, $changed, -1, 'ComposableSingletons$MainKt.lambda-3.<anonymous>.<anonymous> (main.kt:113)');
        }
        $it($composer_0, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-994802423, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-1296252800, false, ComposableSingletons$MainKt$lambda_2$lambda_dts8wk));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(1940211355, false, ComposableSingletons$MainKt$lambda_3$lambda_ezu85n));
  }
  protoOf(ComposableSingletons$MainKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_3_bzdzzq_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function handleServerStatusEvents$lambda($status, $shouldReload) {
    return function (it) {
      var tmp;
      if (hasClass($status, 'fade-out')) {
        removeClass($status, ['fade-out']);
        var tmp_0;
        if ($shouldReload._v) {
          forceReloadNow();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_0($lastVersion, $status, $shouldReload) {
    return function (evt) {
      var version = toInt(toString((evt instanceof MessageEvent ? evt : THROW_CCE()).data));
      var tmp;
      if ($lastVersion._v == null) {
        $lastVersion._v = version;
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!($lastVersion._v === version)) {
        $lastVersion._v = version;
        var tmp_1;
        // Inline function 'kotlin.text.isNotEmpty' call
        var this_0 = $status.className;
        if (charSequenceLength(this_0) > 0) {
          $shouldReload._v = true;
          tmp_1 = Unit_getInstance();
        } else {
          forceReloadNow();
          tmp_1 = Unit_getInstance();
        }
        tmp_0 = tmp_1;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_1($warningIcon, $spinnerIcon, $statusText, $status) {
    return function (evt) {
      var tmp = JSON;
      var values = tmp.parse(toString((evt instanceof MessageEvent ? evt : THROW_CCE()).data));
      var tmp_0 = values.text;
      var text = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : THROW_CCE();
      var tmp_1 = values.isError;
      var isError = toBoolean((!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE());
      var tmp_2;
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(text)) {
        $warningIcon.className = isError ? 'visible' : 'hidden';
        $spinnerIcon.className = isError ? 'hidden' : 'visible';
        $statusText.innerHTML = '<i>' + text + '<\/i>';
        $status.className = 'fade-in';
        tmp_2 = Unit_getInstance();
      } else {
        var tmp_3;
        if ($status.className === 'fade-in') {
          $status.className = 'fade-out';
          tmp_3 = Unit_getInstance();
        }
        tmp_2 = tmp_3;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_2($eventSource) {
    return function (it) {
      $eventSource.close();
      return Unit_getInstance();
    };
  }
  function main$lambda(ctx) {
    ctx.get_router_j3zccy_k$().register$default_rn243d_k$('/', VOID, ComposableSingletons$MainKt_getInstance().lambda_1_r8sbbp_1);
    ctx.get_router_j3zccy_k$().register$default_rn243d_k$('/admin/login', VOID, ComposableSingletons$MainKt_getInstance().lambda_2_r8sbbo_1);
    return Unit_getInstance();
  }
  function main$lambda_0($this$addRouteInterceptor) {
    $this$addRouteInterceptor.set_path_tgrnnc_k$(removeSuffix(removeSuffix($this$addRouteInterceptor.get_path_wos8ry_k$(), '.html'), '.htm'));
    return Unit_getInstance();
  }
  function main$lambda_1(ctx) {
    initSilkWidgets(ctx);
    initSilkWidgetsKobweb(ctx);
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function main$lambda$lambda($router) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(-1190994075, $changed, -1, 'main.<anonymous>.<anonymous> (main.kt:113)');
        }
        $router.renderActivePage_fc13h0_k$(ComposableSingletons$MainKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 70, 0);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function main$lambda_2($router) {
    return function ($this$renderComposable, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1108811911, $changed, -1, 'main.<anonymous> (main.kt:112)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'main.<anonymous>.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, -1190994075, true, main$lambda$lambda($router));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_4(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      AppEntry(tmp0, $composer_0, 6);
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function AppEntry(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-1812862627);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1812862627, $dirty, -1, 'com.example.blogmultiplatform.AppEntry (AppEntry.kt:13)');
      }
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.AppEntry.<anonymous>' call
      var tmp = $composer_0;
      var dispatchReceiver = composableLambda(tmp, 1738055388, true, AppEntry$lambda(content));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.AppEntry.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_6(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      SilkApp(tmp0, $composer_0, 6);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(AppEntry$lambda_0(content, $changed));
    }
  }
  function AppEntry$lambda$lambda($content) {
    return function ($this$Surface, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(1121761922, $changed, -1, 'com.example.blogmultiplatform.AppEntry.<anonymous>.<anonymous> (AppEntry.kt:16)');
      }
      $content($composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function AppEntry$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
        if (isTraceInProgress()) {
          traceEventStart(1738055388, $changed, -1, 'com.example.blogmultiplatform.AppEntry.<anonymous> (AppEntry.kt:15)');
        }
        var tmp_0 = minHeight(toModifier(get_SmoothColorStyle(), $composer_0, 0), get_vh(100));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.example.blogmultiplatform.AppEntry.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 1121761922, true, AppEntry$lambda$lambda($content));
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
        sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_2;
        if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.example.blogmultiplatform.AppEntry.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_5(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.endReplaceableGroup_ern0ak_k$();
        Surface(tmp_0, null, null, null, null, tmp0, $composer_0, 196616, 30);
        var tmp_4;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_4 = Unit_getInstance();
        }
        tmp = tmp_4;
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function AppEntry$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      AppEntry($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var Theme_Primary_instance;
  var Theme_LightGray_instance;
  function values() {
    return [Theme_Primary_getInstance(), Theme_LightGray_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Primary':
        return Theme_Primary_getInstance();
      case 'LightGray':
        return Theme_LightGray_getInstance();
      default:
        Theme_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Theme_entriesInitialized;
  function Theme_initEntries() {
    if (Theme_entriesInitialized)
      return Unit_getInstance();
    Theme_entriesInitialized = true;
    Theme_Primary_instance = new Theme('Primary', 0, '#00A2FF', rgb(0, 162, 255));
    Theme_LightGray_instance = new Theme('LightGray', 1, '#FAFAFA', rgb(250, 250, 250));
  }
  var $ENTRIES;
  function Theme(name, ordinal, hex, rgb) {
    Enum.call(this, name, ordinal);
    this.hex_1 = hex;
    this.rgb_1 = rgb;
  }
  protoOf(Theme).get_hex_18j4ge_k$ = function () {
    return this.hex_1;
  };
  protoOf(Theme).get_rgb_18ix0c_k$ = function () {
    return this.rgb_1;
  };
  function Theme_Primary_getInstance() {
    Theme_initEntries();
    return Theme_Primary_instance;
  }
  function Theme_LightGray_getInstance() {
    Theme_initEntries();
    return Theme_LightGray_instance;
  }
  function HomePage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(389254151);
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(389254151, $changed, -1, 'com.example.blogmultiplatform.pages.HomePage (Index.kt:12)');
      }
      var tmp = fillMaxSize(Companion_getInstance_1());
      var tmp_0 = Center_getInstance();
      Box(tmp, tmp_0, null, ComposableSingletons$IndexKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 3080, 4);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(HomePage$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_1$lambda_5yb608($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1234302399, $changed, -1, 'com.example.blogmultiplatform.pages.ComposableSingletons$IndexKt.lambda-1.<anonymous> (Index.kt:15)');
    }
    Text('THIS PAGE INTENTIONALLY LEFT BLANK dofvhkdjhfd djkfnkldhfkldh', $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$IndexKt() {
    ComposableSingletons$IndexKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(-1234302399, false, ComposableSingletons$IndexKt$lambda_1$lambda_5yb608));
  }
  protoOf(ComposableSingletons$IndexKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$IndexKt_instance;
  function ComposableSingletons$IndexKt_getInstance() {
    if (ComposableSingletons$IndexKt_instance == null)
      new ComposableSingletons$IndexKt();
    return ComposableSingletons$IndexKt_instance;
  }
  function HomePage$lambda($$changed) {
    return function ($composer, $force) {
      HomePage($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function LoginScreen($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(-926139780);
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-926139780, $changed, -1, 'com.example.blogmultiplatform.pages.admin.LoginScreen (Login.kt:45)');
      }
      $composer_0.startReplaceableGroup_ip860b_k$(-822937963);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.LoginScreen.<anonymous>' call
        var value = mutableStateOf('');
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var userNameValue$delegate = tmp0_group;
      $composer_0.startReplaceableGroup_ip860b_k$(-822937906);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.LoginScreen.<anonymous>' call
        var value_0 = mutableStateOf('');
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var passwordValue$delegate = tmp1_group;
      $composer_0.startReplaceableGroup_ip860b_k$(-822937853);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_2 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_2.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false ? true : it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.LoginScreen.<anonymous>' call
        var value_1 = mutableStateOf('');
        this_2.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp2_group = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      var errorText$delegate = tmp2_group;
      var tmp_5 = fillMaxSize(Companion_getInstance_1());
      var tmp_6 = Center_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.pages.admin.LoginScreen.<anonymous>' call
      var tmp_7 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_7, 690167170, true, LoginScreen$lambda_5(userNameValue$delegate, passwordValue$delegate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_8;
      if (invalid ? true : it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.LoginScreen.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_10(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value_2);
        tmp_8 = value_2;
      } else {
        tmp_8 = it_2;
      }
      var tmp_9 = tmp_8;
      var tmp0 = (tmp_9 == null ? true : !(tmp_9 == null)) ? tmp_9 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Box(tmp_5, tmp_6, null, tmp0, $composer_0, 3080, 4);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp3_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.updateScope_t8jcf_k$(LoginScreen$lambda_6($changed));
    }
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$LoginKt$lambda_1$lambda_f1msqn($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-1841479681, $changed, -1, 'com.example.blogmultiplatform.pages.admin.ComposableSingletons$LoginKt.lambda-1.<anonymous> (Login.kt:142)');
    }
    SpanText('Sign In', null, null, null, $composer_0, 6, 14);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$LoginKt() {
    ComposableSingletons$LoginKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(-1841479681, false, ComposableSingletons$LoginKt$lambda_1$lambda_f1msqn));
  }
  protoOf(ComposableSingletons$LoginKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$LoginKt_instance;
  function ComposableSingletons$LoginKt_getInstance() {
    if (ComposableSingletons$LoginKt_instance == null)
      new ComposableSingletons$LoginKt();
    return ComposableSingletons$LoginKt_instance;
  }
  function LoginScreen$lambda($userNameValue$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('userNameValue', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $userNameValue$delegate.get_value_j01efc_k$();
  }
  function LoginScreen$lambda_0($userNameValue$delegate, value) {
    getLocalDelegateReference('userNameValue', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $userNameValue$delegate.set_value_v1vabv_k$(value);
    return Unit_getInstance();
  }
  function LoginScreen$lambda_1($passwordValue$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('passwordValue', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $passwordValue$delegate.get_value_j01efc_k$();
  }
  function LoginScreen$lambda_2($passwordValue$delegate, value) {
    getLocalDelegateReference('passwordValue', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $passwordValue$delegate.set_value_v1vabv_k$(value);
    return Unit_getInstance();
  }
  function LoginScreen$lambda_3($errorText$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('errorText', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $errorText$delegate.get_value_j01efc_k$();
  }
  function LoginScreen$lambda_4($errorText$delegate, value) {
    getLocalDelegateReference('errorText', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $errorText$delegate.set_value_v1vabv_k$(value);
    return Unit_getInstance();
  }
  function LoginScreen$lambda$lambda$lambda($userNameValue$delegate) {
    return function (it) {
      LoginScreen$lambda_0($userNameValue$delegate, it);
      return Unit_getInstance();
    };
  }
  function LoginScreen$lambda$lambda$lambda_0($passwordValue$delegate) {
    return function (it) {
      LoginScreen$lambda_2($passwordValue$delegate, it);
      return Unit_getInstance();
    };
  }
  function LoginScreen$lambda$lambda($userNameValue$delegate, $passwordValue$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-59910919, $changed, -1, 'com.example.blogmultiplatform.pages.admin.LoginScreen.<anonymous>.<anonymous> (Login.kt:60)');
      }
      var tmp0_modifier = width(margin(Companion_getInstance_1(), VOID, VOID, get_px(50)), get_px(110));
      var tmp1_src = Image_getInstance().get_logo_wopywk_k$();
      Image(tmp1_src, 'Logo Image', tmp0_modifier, null, null, null, false, null, $composer_0, 566, 248);
      var tmp10_type = Text_getInstance();
      var tmp11_value = LoginScreen$lambda($userNameValue$delegate);
      var tmp2_$receiver = fontFamily(backgroundColor(padding(height(width(margin(Companion_getInstance_1(), VOID, VOID, get_px(12)), get_px(350)), get_px(54)), VOID, get_px(20)), Colors_getInstance().get_White_ij46ow_k$()), [Constants_getInstance().get_FONT_FAMILY_nousyd_k$()]);
      var tmp3_width = get_px(0);
      var tmp4_color = Colors_getInstance().get_Transparent_cxh4g9_k$();
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance_2();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp6_$receiver = border(tmp2_$receiver, tmp3_width, 'none', tmp4_color);
      var tmp7_width = get_px(0);
      var tmp8_color = Colors_getInstance().get_Transparent_cxh4g9_k$();
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance_2();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp12_modifier = outline(tmp6_$receiver, tmp7_width, 'none', tmp8_color);
      $composer_0.startReplaceableGroup_ip860b_k$(479259815);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.LoginScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = LoginScreen$lambda$lambda$lambda($userNameValue$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      Input(tmp10_type, tmp11_value, tmp0_group, tmp12_modifier, null, 'userName', null, false, false, false, false, false, null, null, null, null, null, null, $composer_0, 201096, 0, 262096);
      var tmp21_type = Password_getInstance();
      var tmp22_value = LoginScreen$lambda_1($passwordValue$delegate);
      var tmp13_$receiver = fontFamily(backgroundColor(padding(height(width(margin(Companion_getInstance_1(), VOID, VOID, get_px(12)), get_px(350)), get_px(54)), VOID, get_px(20)), Colors_getInstance().get_White_ij46ow_k$()), [Constants_getInstance().get_FONT_FAMILY_nousyd_k$()]);
      var tmp14_width = get_px(0);
      var tmp15_color = Colors_getInstance().get_Transparent_cxh4g9_k$();
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance_2();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp17_$receiver = border(tmp13_$receiver, tmp14_width, 'none', tmp15_color);
      var tmp18_width = get_px(0);
      var tmp19_color = Colors_getInstance().get_Transparent_cxh4g9_k$();
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance_2();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp23_modifier = outline(tmp17_$receiver, tmp18_width, 'none', tmp19_color);
      $composer_0.startReplaceableGroup_ip860b_k$(479260737);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false ? true : it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.LoginScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value_0 = LoginScreen$lambda$lambda$lambda_0($passwordValue$delegate);
        $composer_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceableGroup_ern0ak_k$();
      Input(tmp21_type, tmp22_value, tmp1_group, tmp23_modifier, null, 'Password', null, false, false, false, false, false, null, null, null, null, null, null, $composer_0, 201096, 0, 262096);
      var tmp24_$receiver = fontSize(fontWeight(fontFamily(borderRadius(color(backgroundColor(height(width(margin_0(Companion_getInstance_1(), get_px(24)), get_px(350)), get_px(54)), Theme_Primary_getInstance().get_rgb_18ix0c_k$()), Colors_getInstance().get_White_ij46ow_k$()), get_px(4)), [Constants_getInstance().get_FONT_FAMILY_nousyd_k$()]), Companion_getInstance_3().get_Medium_1fiba6_k$()), get_px(16));
      var tmp25_width = get_px(0);
      var tmp26_color = Colors_getInstance().get_Transparent_cxh4g9_k$();
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance_2();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp28_$receiver = border(tmp24_$receiver, tmp25_width, 'none', tmp26_color);
      var tmp29_width = get_px(0);
      var tmp30_color = Colors_getInstance().get_Transparent_cxh4g9_k$();
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      Companion_getInstance_2();
      // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      Button(toAttrs(outline(tmp28_$receiver, tmp29_width, 'none', tmp30_color)), ComposableSingletons$LoginKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 48, 0);
      var tmp32_modifier = textAlign(color(width(Companion_getInstance_1(), get_px(350)), Colors_getInstance().get_Red_18jks8_k$()), Companion_getInstance_4().get_Center_3arb0i_k$());
      SpanText('', tmp32_modifier, null, null, $composer_0, 70, 12);
      var tmp_3;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_3 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function LoginScreen$lambda_5($userNameValue$delegate, $passwordValue$delegate) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(690167170, $changed, -1, 'com.example.blogmultiplatform.pages.admin.LoginScreen.<anonymous> (Login.kt:53)');
      }
      var tmp0_$receiver = Companion_getInstance_1();
      var tmp1_leftRight = get_px(50);
      var tmp2_top = get_px(80);
      var tmp3_bottom = get_px(24);
      var tmp = backgroundColor(padding_0(tmp0_$receiver, tmp2_top, tmp1_leftRight, tmp3_bottom), Theme_LightGray_getInstance().get_rgb_18ix0c_k$());
      var tmp_0 = Center_getInstance_0();
      var tmp_1 = CenterHorizontally_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.example.blogmultiplatform.pages.admin.LoginScreen.<anonymous>.<anonymous>.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, -59910919, true, LoginScreen$lambda$lambda($userNameValue$delegate, $passwordValue$delegate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_ip860b_k$(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (invalid ? true : it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.example.blogmultiplatform.pages.admin.LoginScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_9(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp_3 = value;
      } else {
        tmp_3 = it;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_1.endReplaceableGroup_ern0ak_k$();
      Column(tmp, tmp_0, tmp_1, null, tmp0, $composer_0, 24584, 8);
      var tmp_5;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_5 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function LoginScreen$lambda_6($$changed) {
    return function ($composer, $force) {
      LoginScreen($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Constants() {
    Constants_instance = this;
    this.FONT_FAMILY_1 = 'Roboto';
  }
  protoOf(Constants).get_FONT_FAMILY_nousyd_k$ = function () {
    return this.FONT_FAMILY_1;
  };
  var Constants_instance;
  function Constants_getInstance() {
    if (Constants_instance == null)
      new Constants();
    return Constants_instance;
  }
  function Image_0() {
    Image_instance = this;
    this.logo_1 = '/logo.svg';
  }
  protoOf(Image_0).get_logo_wopywk_k$ = function () {
    return this.logo_1;
  };
  var Image_instance;
  function Image_getInstance() {
    if (Image_instance == null)
      new Image_0();
    return Image_instance;
  }
  function Res() {
    Res_instance = this;
  }
  var Res_instance;
  function Res_getInstance() {
    if (Res_instance == null)
      new Res();
    return Res_instance;
  }
  var com_example_blogmultiplatform_utils_Constants$stable;
  var com_example_blogmultiplatform_utils_Res_Image$stable;
  var com_example_blogmultiplatform_utils_Res$stable;
  //region block: init
  com_example_blogmultiplatform_utils_Constants$stable = 0;
  com_example_blogmultiplatform_utils_Res_Image$stable = 0;
  com_example_blogmultiplatform_utils_Res$stable = 0;
  //endregion
  main();
  return _;
}));

//# sourceMappingURL=blogmultiplatform.js.map
