(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kobweb-frontend-compose-html-ext.js', './html-html-core.js', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-compose.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kobweb-frontend-silk-foundation.js', './kotlinx-coroutines-core.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kobweb-frontend-compose-html-ext.js'), require('./html-html-core.js'), require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kobweb-frontend-silk-foundation.js'), require('./kotlinx-coroutines-core.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'));
  else {
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'kobweb-frontend-silk-widgets'.");
    }
    root['kobweb-frontend-silk-widgets'] = factory(typeof this['kobweb-frontend-silk-widgets'] === 'undefined' ? {} : this['kobweb-frontend-silk-widgets'], this['kobweb-frontend-compose-html-ext'], this['html-html-core'], this['kotlin-kotlin-stdlib'], this['kobweb-frontend-kobweb-compose'], this['compose-multiplatform-core-compose-runtime-runtime'], this['kobweb-frontend-silk-foundation'], this['kotlinx-coroutines-core'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat);
  }
}(this, function (_, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_compose_html_html_core, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat) {
  'use strict';
  //region block: imports
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f;
  var StyleVariable_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.r2;
  var StyleVariable_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e;
  var protoOf = kotlin_kotlin.$_$.k6;
  var objectMeta = kotlin_kotlin.$_$.j6;
  var setMetadataFor = kotlin_kotlin.$_$.l6;
  var Unit_instance = kotlin_kotlin.$_$.e2;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y2;
  var fillMaxWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var borderBottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var tabIndex = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c2;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var get_ariaDisabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l;
  var not = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n;
  var get_active = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a2;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v;
  var Companion_instance_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z1;
  var listOf = kotlin_kotlin.$_$.u3;
  var transition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g2;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var Companion_instance_3 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.j2;
  var userSelect = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j2;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.r1;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u1;
  var calc = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.a;
  var VOID = kotlin_kotlin.$_$.d;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l1;
  var flexGrow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var overflow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r1;
  var Companion_instance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g2;
  var KProperty1 = kotlin_kotlin.$_$.w6;
  var getPropertyCallableRef = kotlin_kotlin.$_$.v5;
  var CssStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s;
  var Companion_instance_5 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m1;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.y;
  var CssStyle_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t;
  var Base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a2;
  var Base_init_$Init$ = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k1;
  var classMeta = kotlin_kotlin.$_$.o5;
  var get_focusVisible = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k;
  var lineHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h1;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f1;
  var minWidth = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n1;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b1;
  var Companion_instance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b2;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var Companion_instance_7 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l2;
  var whiteSpace = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l2;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w1;
  var Companion_instance_8 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k2;
  var verticalAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k2;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p;
  var CSSTransition_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.w1;
  var Colors_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t2;
  var outline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q1;
  var boxShadow = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var gap = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var Companion_instance_9 = kotlin_org_jetbrains_compose_html_html_core.$_$.m;
  var position = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x1;
  var opacity = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p1;
  var size = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b2;
  var border_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o;
  var transition_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h2;
  var CenterVertically_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v2;
  var rowClasses = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c;
  var Keyframes = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u;
  var addVariant = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v;
  var StyleVariable_2 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d;
  var paddingInline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var THROW_CCE = kotlin_kotlin.$_$.p8;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z;
  var Companion_instance_10 = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o2;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.b3;
  var toModifier_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a1;
  var ariaInvalid = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h;
  var ariaDisabled = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f;
  var ariaRequired = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i;
  var Input = kotlin_org_jetbrains_compose_html_html_core.$_$.d3;
  var setVariable_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z1;
  var get_placeholder = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o;
  var Companion_instance_11 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.x1;
  var appearance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e;
  var get_ariaInvalid = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h;
  var get_disabled = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var registerRefScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t1;
  var ensureNotNull = kotlin_kotlin.$_$.x8;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var toString = kotlin_kotlin.$_$.n6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var Unit = kotlin_kotlin.$_$.r8;
  var isNumber = kotlin_kotlin.$_$.d6;
  var placeholder = kotlin_org_jetbrains_compose_html_html_core.$_$.t;
  var disabled = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v;
  var readOnly = kotlin_org_jetbrains_compose_html_html_core.$_$.u;
  var required = kotlin_org_jetbrains_compose_html_html_core.$_$.v;
  var autoComplete = kotlin_org_jetbrains_compose_html_html_core.$_$.s;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var RectF_init_$Create$ = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l1;
  var clip = kotlin_com_varabyte_kobweb_silk_foundation.$_$.g1;
  var overflow_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s1;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m2;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m1;
  var Companion_instance_12 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.y1;
  var boxSizing = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s;
  var translateX = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i2;
  var ariaHidden = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.p2;
  var borderTop = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n;
  var borderLeft = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var get_fr = kotlin_org_jetbrains_compose_html_html_core.$_$.x1;
  var gridTemplateColumns = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e1;
  var get_entries = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.v2;
  var mapCapacity = kotlin_kotlin.$_$.v3;
  var coerceAtLeast = kotlin_kotlin.$_$.o6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.o;
  var NumberValue = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c;
  var TopStart_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x2;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var refScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.s1;
  var Box = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var KMutableProperty0 = kotlin_kotlin.$_$.t6;
  var THROW_ISE = kotlin_kotlin.$_$.q8;
  var getLocalDelegateReference = kotlin_kotlin.$_$.t5;
  var CoroutineImpl = kotlin_kotlin.$_$.e5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var isInterface = kotlin_kotlin.$_$.c6;
  var Companion_instance_13 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n1;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  var unaryMinus = kotlin_org_jetbrains_compose_html_html_core.$_$.w2;
  var margin_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j1;
  var top = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f2;
  var left = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  var right = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y1;
  var bottom = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q;
  var Blue_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o1;
  var Gray_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p1;
  var Red_getInstance = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q1;
  var lightened = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d;
  var get_SilkTheme = kotlin_com_varabyte_kobweb_silk_foundation.$_$.h1;
  var suffixedWith = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f1;
  var removeClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.c;
  var addClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.a;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e1;
  var base_0 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x;
  var KProperty0 = kotlin_kotlin.$_$.v6;
  var base_1 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.m2;
  var ColorGroup = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c1;
  var MutablePalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d1;
  var KMutableProperty1 = kotlin_kotlin.$_$.u6;
  //endregion
  //region block: pre-declaration
  setMetadataFor(TabVars, 'TabVars', objectMeta);
  setMetadataFor(ButtonVars, 'ButtonVars', objectMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(ButtonSize, 'ButtonSize', classMeta, Base);
  setMetadataFor(CheckboxVars, 'CheckboxVars', objectMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(CheckboxSize, 'CheckboxSize', classMeta, Base);
  setMetadataFor(InputVars, 'InputVars', objectMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(InputSize, 'InputSize', classMeta, Base);
  setMetadataFor(InputDefaults, 'InputDefaults', objectMeta);
  setMetadataFor(SwitchVars, 'SwitchVars', objectMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(SwitchSize, 'SwitchSize', classMeta, Base);
  setMetadataFor(DividerVars, 'DividerVars', objectMeta);
  setMetadataFor(SurfaceVars, 'SurfaceVars', objectMeta);
  setMetadataFor(Surface$lambda$lambda$slambda, 'Surface$lambda$lambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, VOID, [1]);
  setMetadataFor(OverlayVars, 'OverlayVars', objectMeta);
  setMetadataFor(PopupVars, 'PopupVars', objectMeta);
  setMetadataFor(TooltipVars, 'TooltipVars', objectMeta);
  setMetadataFor(TransitionDurationVars, 'TransitionDurationVars', objectMeta);
  setMetadataFor(FontSizeVars, 'FontSizeVars', objectMeta);
  setMetadataFor(BorderRadiusVars, 'BorderRadiusVars', objectMeta);
  setMetadataFor(MutableButton, 'MutableButton', classMeta, ColorGroup);
  setMetadataFor(MutableCheckbox, 'MutableCheckbox', classMeta, ColorGroup);
  setMetadataFor(MutableInput, 'MutableInput', classMeta, ColorGroup);
  setMetadataFor(MutableSwitch, 'MutableSwitch', classMeta, ColorGroup);
  setMetadataFor(MutableTab, 'MutableTab', classMeta, ColorGroup);
  setMetadataFor(MutableTooltip, 'MutableTooltip', classMeta, ColorGroup);
  //endregion
  function get_TabsStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsStyle;
  }
  var TabsStyle;
  function get_TabsTabRowStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsTabRowStyle;
  }
  var TabsTabRowStyle;
  function get_TabsTabStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsTabStyle;
  }
  var TabsTabStyle;
  function get_TabsPanelStyle() {
    _init_properties_Tabs_kt__myintq();
    return TabsPanelStyle;
  }
  var TabsPanelStyle;
  function TabVars() {
    TabVars_instance = this;
    this.q2z_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().c2k();
    tmp.r2z_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.s2z_1 = StyleVariable('silk');
    this.t2z_1 = StyleVariable('silk');
    this.u2z_1 = StyleVariable('silk');
    this.v2z_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_px(2);
    tmp_0.w2z_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().g30().c2k();
    tmp_1.x2z_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
  }
  protoOf(TabVars).h30 = function () {
    return this.q2z_1.i2k(this, Color$factory());
  };
  protoOf(TabVars).i30 = function () {
    return this.r2z_1.i2k(this, BorderColor$factory());
  };
  protoOf(TabVars).j30 = function () {
    return this.s2z_1.i2k(this, BackgroundColor$factory());
  };
  protoOf(TabVars).k30 = function () {
    return this.t2z_1.i2k(this, DisabledBackgroundColor$factory());
  };
  protoOf(TabVars).l30 = function () {
    return this.u2z_1.i2k(this, HoverBackgroundColor$factory());
  };
  protoOf(TabVars).m30 = function () {
    return this.v2z_1.i2k(this, PressedBackgroundColor$factory());
  };
  protoOf(TabVars).n30 = function () {
    return this.w2z_1.i2k(this, BorderThickness$factory());
  };
  protoOf(TabVars).o30 = function () {
    return this.x2z_1.i2k(this, ColorTransitionDuration$factory());
  };
  var TabVars_instance;
  function TabVars_getInstance() {
    if (TabVars_instance == null)
      new TabVars();
    return TabVars_instance;
  }
  function TabsStyle$lambda($this$CssStyle) {
    _init_properties_Tabs_kt__myintq();
    return Unit_instance;
  }
  function TabsTabRowStyle$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    var tmp = fillMaxWidth(Companion_instance);
    var tmp_0 = TabVars_getInstance().n30().c2k();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp, tmp_0, 'solid', TabVars_getInstance().i30().c2k());
  }
  function TabsTabStyle$lambda($composer, $changed) {
    _init_properties_Tabs_kt__myintq();
    var $composer_0 = $composer;
    $composer_0.r17(2044107546);
    if (isTraceInProgress()) {
      traceEventStart(2044107546, $changed, -1, 'com.varabyte.kobweb.silk.components.disclosure.TabsTabStyle.<anonymous> (Tabs.kt:61)');
    }
    var tmp0 = tabIndex(Companion_instance, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.s17();
    return tmp0;
  }
  function TabsTabStyle$lambda_0($this$CssStyle) {
    _init_properties_Tabs_kt__myintq();
    $this$CssStyle.y2u(TabsTabStyle$lambda$lambda);
    var tmp = get_ariaDisabled($this$CssStyle);
    tmp.a2u(TabsTabStyle$lambda$lambda_0);
    var tmp_0 = get_hover($this$CssStyle).j2u(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp_0.a2u(TabsTabStyle$lambda$lambda_1);
    var tmp_1 = get_active($this$CssStyle).j2u(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp_1.a2u(TabsTabStyle$lambda$lambda_2);
    return Unit_instance;
  }
  function TabsTabStyle$lambda$lambda() {
    _init_properties_Tabs_kt__myintq();
    var tmp = padding(userSelect(color(backgroundColor(transition(cursor(Companion_instance, Companion_instance_1.b2i()), Companion_instance_2.t2k(listOf(['background-color', 'color', 'border-color']), TabVars_getInstance().o30().c2k()).slice()), TabVars_getInstance().j30().c2k()), TabVars_getInstance().h30().c2k()), Companion_instance_3.e2i()), get_cssRem(0.5));
    var tmp_0 = margin(tmp, VOID, VOID, calc(TabsTabStyle$lambda$lambda$lambda));
    var tmp_1 = TabVars_getInstance().n30().c2k();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp_0, tmp_1, 'solid', TabVars_getInstance().i30().c2k());
  }
  function TabsTabStyle$lambda$lambda$lambda($this$calc) {
    _init_properties_Tabs_kt__myintq();
    return $this$calc.a2l(TabVars_getInstance().n30().c2k());
  }
  function TabsTabStyle$lambda$lambda_0() {
    _init_properties_Tabs_kt__myintq();
    return cursor(backgroundColor(Companion_instance, TabVars_getInstance().k30().c2k()), Companion_instance_1.c2i());
  }
  function TabsTabStyle$lambda$lambda_1() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_instance, TabVars_getInstance().l30().c2k());
  }
  function TabsTabStyle$lambda$lambda_2() {
    _init_properties_Tabs_kt__myintq();
    return backgroundColor(Companion_instance, TabVars_getInstance().m30().c2k());
  }
  function TabsPanelStyle$lambda($this$base) {
    _init_properties_Tabs_kt__myintq();
    var tmp = flexGrow(fillMaxWidth(padding(Companion_instance, get_cssRem(1))), 1);
    return overflow(tmp, TabsPanelStyle$lambda$lambda);
  }
  function TabsPanelStyle$lambda$lambda($this$overflow) {
    _init_properties_Tabs_kt__myintq();
    $this$overflow.b2r(Companion_instance_4.t2j());
    return Unit_instance;
  }
  function Color$factory() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.h30();
    }, null);
  }
  function BorderColor$factory() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.i30();
    }, null);
  }
  function BackgroundColor$factory() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.j30();
    }, null);
  }
  function DisabledBackgroundColor$factory() {
    return getPropertyCallableRef('DisabledBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.k30();
    }, null);
  }
  function HoverBackgroundColor$factory() {
    return getPropertyCallableRef('HoverBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.l30();
    }, null);
  }
  function PressedBackgroundColor$factory() {
    return getPropertyCallableRef('PressedBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.m30();
    }, null);
  }
  function BorderThickness$factory() {
    return getPropertyCallableRef('BorderThickness', 1, KProperty1, function (receiver) {
      return receiver.n30();
    }, null);
  }
  function ColorTransitionDuration$factory() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.o30();
    }, null);
  }
  var properties_initialized_Tabs_kt_moodfk;
  function _init_properties_Tabs_kt__myintq() {
    if (!properties_initialized_Tabs_kt_moodfk) {
      properties_initialized_Tabs_kt_moodfk = true;
      TabsStyle = CssStyle(VOID, TabsStyle$lambda);
      var tmp = Companion_instance_5;
      TabsTabRowStyle = base(tmp, VOID, TabsTabRowStyle$lambda);
      var tmp_0 = TabsTabStyle$lambda;
      TabsTabStyle = CssStyle_0(tmp_0, TabsTabStyle$lambda_0);
      var tmp_1 = Companion_instance_5;
      TabsPanelStyle = base(tmp_1, VOID, TabsPanelStyle$lambda);
    }
  }
  function get_ButtonStyle() {
    _init_properties_Button_kt__2845m6();
    return ButtonStyle;
  }
  var ButtonStyle;
  function ButtonVars() {
    ButtonVars_instance = this;
    this.p30_1 = StyleVariable('silk');
    var tmp = this;
    var tmp0_defaultFallback = get_FocusOutlineColorVar().c2k();
    tmp.q30_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.r30_1 = StyleVariable('silk');
    this.s30_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ColorVar().c2k();
    tmp_0.t30_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().g30().c2k();
    tmp_1.u30_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    this.v30_1 = StyleVariable('silk');
    this.w30_1 = StyleVariable('silk');
    this.x30_1 = StyleVariable('silk');
  }
  protoOf(ButtonVars).y30 = function () {
    return this.p30_1.i2k(this, BackgroundDefaultColor$factory());
  };
  protoOf(ButtonVars).z30 = function () {
    return this.q30_1.i2k(this, BackgroundFocusColor$factory());
  };
  protoOf(ButtonVars).a31 = function () {
    return this.r30_1.i2k(this, BackgroundHoverColor$factory());
  };
  protoOf(ButtonVars).b31 = function () {
    return this.s30_1.i2k(this, BackgroundPressedColor$factory());
  };
  protoOf(ButtonVars).h30 = function () {
    return this.t30_1.i2k(this, Color$factory_0());
  };
  protoOf(ButtonVars).o30 = function () {
    return this.u30_1.i2k(this, ColorTransitionDuration$factory_0());
  };
  protoOf(ButtonVars).c31 = function () {
    return this.v30_1.i2k(this, FontSize$factory());
  };
  protoOf(ButtonVars).d31 = function () {
    return this.w30_1.i2k(this, Height$factory());
  };
  protoOf(ButtonVars).e31 = function () {
    return this.x30_1.i2k(this, PaddingHorizontal$factory());
  };
  var ButtonVars_instance;
  function ButtonVars_getInstance() {
    if (ButtonVars_instance == null)
      new ButtonVars();
    return ButtonVars_instance;
  }
  function Companion() {
    Companion_instance_14 = this;
    this.f31_1 = new ButtonSize(FontSizeVars_getInstance().n31().c2k(), get_cssRem(1.5), get_cssRem(0.5));
    this.g31_1 = new ButtonSize(FontSizeVars_getInstance().o31().c2k(), get_cssRem(2), get_cssRem(0.75));
    this.h31_1 = new ButtonSize(FontSizeVars_getInstance().p31().c2k(), get_cssRem(2.5), get_cssRem(1));
    this.i31_1 = new ButtonSize(FontSizeVars_getInstance().q31().c2k(), get_cssRem(3), get_cssRem(1.5));
  }
  var Companion_instance_14;
  function Companion_getInstance_0() {
    if (Companion_instance_14 == null)
      new Companion();
    return Companion_instance_14;
  }
  function ButtonSize(fontSize, height, horizontalPadding) {
    Companion_getInstance_0();
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_instance, ButtonVars_getInstance().c31(), fontSize), ButtonVars_getInstance().d31(), height), ButtonVars_getInstance().e31(), horizontalPadding), VOID, this);
  }
  function ButtonStyle$lambda($this$CssStyle) {
    _init_properties_Button_kt__2845m6();
    $this$CssStyle.y2u(ButtonStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle).j2u(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp.a2u(ButtonStyle$lambda$lambda_0);
    var tmp_0 = get_focusVisible($this$CssStyle).j2u(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp_0.a2u(ButtonStyle$lambda$lambda_1);
    var tmp_1 = get_active($this$CssStyle).j2u(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp_1.a2u(ButtonStyle$lambda$lambda_2);
    return Unit_instance;
  }
  function ButtonStyle$lambda$lambda() {
    _init_properties_Button_kt__2845m6();
    var tmp = borderRadius(verticalAlign(padding_0(whiteSpace(fontWeight(fontSize(minWidth(height(lineHeight(backgroundColor(color(Companion_instance, ButtonVars_getInstance().h30().c2k()), ButtonVars_getInstance().y30().c2k()), 1.2), ButtonVars_getInstance().d31().c2k()), ButtonVars_getInstance().d31().c2k()), ButtonVars_getInstance().c31().c2k()), Companion_instance_6.h2i()), Companion_instance_7.m2k()), VOID, ButtonVars_getInstance().e31().c2k()), Companion_instance_8.k2j()), get_cssRem(0.375));
    return transition(userSelect(border(tmp, ButtonStyle$lambda$lambda$lambda), Companion_instance_3.e2i()), [CSSTransition_init_$Create$('background-color', ButtonVars_getInstance().o30().c2k())]);
  }
  function ButtonStyle$lambda$lambda$lambda($this$border) {
    _init_properties_Button_kt__2845m6();
    $this$border.z2q(get_px(0));
    return Unit_instance;
  }
  function ButtonStyle$lambda$lambda_0() {
    _init_properties_Button_kt__2845m6();
    return cursor(backgroundColor(Companion_instance, ButtonVars_getInstance().a31().c2k()), Companion_instance_1.b2i());
  }
  function ButtonStyle$lambda$lambda_1() {
    _init_properties_Button_kt__2845m6();
    var tmp = Companion_instance;
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow(outline(tmp, tmp_0, 'solid', Colors_instance.h2q()), VOID, VOID, VOID, get_cssRem(0.1875), ButtonVars_getInstance().z30().c2k());
  }
  function ButtonStyle$lambda$lambda_2() {
    _init_properties_Button_kt__2845m6();
    return backgroundColor(Companion_instance, ButtonVars_getInstance().b31().c2k());
  }
  function BackgroundDefaultColor$factory() {
    return getPropertyCallableRef('BackgroundDefaultColor', 1, KProperty1, function (receiver) {
      return receiver.y30();
    }, null);
  }
  function BackgroundFocusColor$factory() {
    return getPropertyCallableRef('BackgroundFocusColor', 1, KProperty1, function (receiver) {
      return receiver.z30();
    }, null);
  }
  function BackgroundHoverColor$factory() {
    return getPropertyCallableRef('BackgroundHoverColor', 1, KProperty1, function (receiver) {
      return receiver.a31();
    }, null);
  }
  function BackgroundPressedColor$factory() {
    return getPropertyCallableRef('BackgroundPressedColor', 1, KProperty1, function (receiver) {
      return receiver.b31();
    }, null);
  }
  function Color$factory_0() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.h30();
    }, null);
  }
  function ColorTransitionDuration$factory_0() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.o30();
    }, null);
  }
  function FontSize$factory() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.c31();
    }, null);
  }
  function Height$factory() {
    return getPropertyCallableRef('Height', 1, KProperty1, function (receiver) {
      return receiver.d31();
    }, null);
  }
  function PaddingHorizontal$factory() {
    return getPropertyCallableRef('PaddingHorizontal', 1, KProperty1, function (receiver) {
      return receiver.e31();
    }, null);
  }
  var properties_initialized_Button_kt_yov184;
  function _init_properties_Button_kt__2845m6() {
    if (!properties_initialized_Button_kt_yov184) {
      properties_initialized_Button_kt_yov184 = true;
      ButtonStyle = CssStyle(VOID, ButtonStyle$lambda);
    }
  }
  function get_CheckboxStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxStyle;
  }
  var CheckboxStyle;
  function get_CheckboxEnabledAnim() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxEnabledAnim;
  }
  var CheckboxEnabledAnim;
  function get_CheckboxIconContainerStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxIconContainerStyle;
  }
  var CheckboxIconContainerStyle;
  function get_UncheckedCheckboxIconContainerVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return UncheckedCheckboxIconContainerVariant;
  }
  var UncheckedCheckboxIconContainerVariant;
  function get_CheckedCheckboxIconContainerVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckedCheckboxIconContainerVariant;
  }
  var CheckedCheckboxIconContainerVariant;
  function get_CheckboxIconStyle() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxIconStyle;
  }
  var CheckboxIconStyle;
  function get_CheckboxInputVariant() {
    _init_properties_Checkbox_kt__x46qhp();
    return CheckboxInputVariant;
  }
  var CheckboxInputVariant;
  function CheckboxVars() {
    CheckboxVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().c2k();
    tmp.r31_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.125);
    tmp_0.s31_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(0.125);
    tmp_1.t31_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    this.u31_1 = StyleVariable('silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(0.5);
    tmp_2.v31_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
    this.w31_1 = StyleVariable('silk');
    this.x31_1 = StyleVariable('silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_FocusOutlineColorVar().c2k();
    tmp_3.y31_1 = StyleVariable_0(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_cssRem(0.1875);
    tmp_4.z31_1 = StyleVariable_0(tmp0_defaultFallback_4, 'silk');
    this.a32_1 = StyleVariable('silk');
    this.b32_1 = StyleVariable('silk');
    this.c32_1 = StyleVariable('silk');
    this.d32_1 = StyleVariable('silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = TransitionDurationVars_getInstance().f32().c2k();
    tmp_5.e32_1 = StyleVariable_1(tmp0_defaultFallback_5, 'silk');
  }
  protoOf(CheckboxVars).i30 = function () {
    return this.r31_1.i2k(this, BorderColor$factory_0());
  };
  protoOf(CheckboxVars).g32 = function () {
    return this.s31_1.i2k(this, BorderRadius$factory());
  };
  protoOf(CheckboxVars).h32 = function () {
    return this.t31_1.i2k(this, BorderWidth$factory());
  };
  protoOf(CheckboxVars).i32 = function () {
    return this.u31_1.i2k(this, Size$factory());
  };
  protoOf(CheckboxVars).j32 = function () {
    return this.v31_1.i2k(this, Spacing$factory());
  };
  protoOf(CheckboxVars).c31 = function () {
    return this.w31_1.i2k(this, FontSize$factory_0());
  };
  protoOf(CheckboxVars).k32 = function () {
    return this.x31_1.i2k(this, IconSize$factory());
  };
  protoOf(CheckboxVars).l32 = function () {
    return this.y31_1.i2k(this, FocusOutlineColor$factory());
  };
  protoOf(CheckboxVars).m32 = function () {
    return this.z31_1.i2k(this, FocusOutlineSpread$factory());
  };
  protoOf(CheckboxVars).n32 = function () {
    return this.a32_1.i2k(this, UncheckedBackgroundColor$factory());
  };
  protoOf(CheckboxVars).o32 = function () {
    return this.b32_1.i2k(this, IconColor$factory());
  };
  protoOf(CheckboxVars).p32 = function () {
    return this.c32_1.i2k(this, IconBackgroundColor$factory());
  };
  protoOf(CheckboxVars).q32 = function () {
    return this.d32_1.i2k(this, IconBackgroundHoverColor$factory());
  };
  protoOf(CheckboxVars).r32 = function () {
    return this.e32_1.i2k(this, TransitionDuration$factory());
  };
  var CheckboxVars_instance;
  function CheckboxVars_getInstance() {
    if (CheckboxVars_instance == null)
      new CheckboxVars();
    return CheckboxVars_instance;
  }
  function Companion_0() {
    Companion_instance_15 = this;
    this.s32_1 = new CheckboxSize(get_cssRem(0.875), get_cssRem(0.45), FontSizeVars_getInstance().o31().c2k());
    this.t32_1 = new CheckboxSize(get_cssRem(1), get_cssRem(0.625), FontSizeVars_getInstance().p31().c2k());
    this.u32_1 = new CheckboxSize(get_cssRem(1.25), get_cssRem(0.8), FontSizeVars_getInstance().q31().c2k());
  }
  var Companion_instance_15;
  function Companion_getInstance_1() {
    if (Companion_instance_15 == null)
      new Companion_0();
    return Companion_instance_15;
  }
  function CheckboxSize(boxSize, iconSize, fontSize) {
    Companion_getInstance_1();
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_instance, CheckboxVars_getInstance().i32(), boxSize), CheckboxVars_getInstance().k32(), iconSize), CheckboxVars_getInstance().c31(), fontSize), VOID, this);
  }
  function CheckboxStyle$lambda($this$CssStyle) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$CssStyle.y2u(CheckboxStyle$lambda$lambda);
    return Unit_instance;
  }
  function CheckboxStyle$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = cursor(fontSize(userSelect(gap(Companion_instance, CheckboxVars_getInstance().j32().c2k()), Companion_instance_3.e2i()), CheckboxVars_getInstance().c31().c2k()), Companion_instance_1.b2i());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return position(tmp, tmp$ret$3);
  }
  function CheckboxEnabledAnim$lambda($this$$receiver) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$$receiver.g2w(CheckboxEnabledAnim$lambda$lambda);
    $this$$receiver.h2w(CheckboxEnabledAnim$lambda$lambda_0);
    return Unit_instance;
  }
  function CheckboxEnabledAnim$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return opacity(Companion_instance, 0);
  }
  function CheckboxEnabledAnim$lambda$lambda_0() {
    _init_properties_Checkbox_kt__x46qhp();
    return opacity(Companion_instance, 1);
  }
  function CheckboxIconContainerStyle$lambda($this$CssStyle) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$CssStyle.y2u(CheckboxIconContainerStyle$lambda$lambda);
    return Unit_instance;
  }
  function CheckboxIconContainerStyle$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = size(fontSize(Companion_instance, CheckboxVars_getInstance().k32().c2k()), CheckboxVars_getInstance().i32().c2k());
    var tmp_0 = CheckboxVars_getInstance().h32().c2k();
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition_0(borderRadius(border_0(tmp, tmp_0, 'solid', CheckboxVars_getInstance().i30().c2k()), CheckboxVars_getInstance().g32().c2k()), Companion_instance_2.t2k(listOf(['background-color', 'border-color']), CheckboxVars_getInstance().r32().c2k()));
  }
  function UncheckedCheckboxIconContainerVariant$lambda($this$addVariantBase) {
    _init_properties_Checkbox_kt__x46qhp();
    return backgroundColor(Companion_instance, CheckboxVars_getInstance().n32().c2k());
  }
  function CheckedCheckboxIconContainerVariant$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.y2u(CheckedCheckboxIconContainerVariant$lambda$lambda);
    return Unit_instance;
  }
  function CheckedCheckboxIconContainerVariant$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    var tmp = backgroundColor(Companion_instance, CheckboxVars_getInstance().p32().c2k());
    return border(tmp, CheckedCheckboxIconContainerVariant$lambda$lambda$lambda);
  }
  function CheckedCheckboxIconContainerVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$border.x2q(CheckboxVars_getInstance().p32().c2k());
    return Unit_instance;
  }
  function CheckboxIconStyle$lambda($this$base) {
    _init_properties_Checkbox_kt__x46qhp();
    return color(size(Companion_instance, CheckboxVars_getInstance().i32().c2k()), CheckboxVars_getInstance().o32().c2k());
  }
  function CheckboxInputVariant$lambda($this$addVariant) {
    _init_properties_Checkbox_kt__x46qhp();
    $this$addVariant.y2u(CheckboxInputVariant$lambda$lambda);
    $this$addVariant.q2v(':focus-visible + *', CheckboxInputVariant$lambda$lambda_0);
    $this$addVariant.q2v(':not([aria-disabled]):hover + *', CheckboxInputVariant$lambda$lambda_1);
    return Unit_instance;
  }
  function CheckboxInputVariant$lambda$lambda() {
    _init_properties_Checkbox_kt__x46qhp();
    return get_HiddenInputModifier();
  }
  function CheckboxInputVariant$lambda$lambda_0() {
    _init_properties_Checkbox_kt__x46qhp();
    return boxShadow(Companion_instance, VOID, VOID, VOID, CheckboxVars_getInstance().m32().c2k(), CheckboxVars_getInstance().l32().c2k());
  }
  function CheckboxInputVariant$lambda$lambda_1() {
    _init_properties_Checkbox_kt__x46qhp();
    return setVariable(Companion_instance, CheckboxVars_getInstance().p32(), CheckboxVars_getInstance().q32().c2k());
  }
  function BorderColor$factory_0() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.i30();
    }, null);
  }
  function BorderRadius$factory() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.g32();
    }, null);
  }
  function BorderWidth$factory() {
    return getPropertyCallableRef('BorderWidth', 1, KProperty1, function (receiver) {
      return receiver.h32();
    }, null);
  }
  function Size$factory() {
    return getPropertyCallableRef('Size', 1, KProperty1, function (receiver) {
      return receiver.i32();
    }, null);
  }
  function Spacing$factory() {
    return getPropertyCallableRef('Spacing', 1, KProperty1, function (receiver) {
      return receiver.j32();
    }, null);
  }
  function FontSize$factory_0() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.c31();
    }, null);
  }
  function IconSize$factory() {
    return getPropertyCallableRef('IconSize', 1, KProperty1, function (receiver) {
      return receiver.k32();
    }, null);
  }
  function FocusOutlineColor$factory() {
    return getPropertyCallableRef('FocusOutlineColor', 1, KProperty1, function (receiver) {
      return receiver.l32();
    }, null);
  }
  function FocusOutlineSpread$factory() {
    return getPropertyCallableRef('FocusOutlineSpread', 1, KProperty1, function (receiver) {
      return receiver.m32();
    }, null);
  }
  function UncheckedBackgroundColor$factory() {
    return getPropertyCallableRef('UncheckedBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.n32();
    }, null);
  }
  function IconColor$factory() {
    return getPropertyCallableRef('IconColor', 1, KProperty1, function (receiver) {
      return receiver.o32();
    }, null);
  }
  function IconBackgroundColor$factory() {
    return getPropertyCallableRef('IconBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.p32();
    }, null);
  }
  function IconBackgroundHoverColor$factory() {
    return getPropertyCallableRef('IconBackgroundHoverColor', 1, KProperty1, function (receiver) {
      return receiver.q32();
    }, null);
  }
  function TransitionDuration$factory() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.r32();
    }, null);
  }
  var properties_initialized_Checkbox_kt_pem0wr;
  function _init_properties_Checkbox_kt__x46qhp() {
    if (!properties_initialized_Checkbox_kt_pem0wr) {
      properties_initialized_Checkbox_kt_pem0wr = true;
      var tmp = rowClasses(Companion_instance, VOID, CenterVertically_instance);
      CheckboxStyle = CssStyle(tmp, CheckboxStyle$lambda);
      CheckboxEnabledAnim = new Keyframes(CheckboxEnabledAnim$lambda);
      CheckboxIconContainerStyle = CssStyle(VOID, CheckboxIconContainerStyle$lambda);
      var tmp_0 = get_CheckboxIconContainerStyle();
      UncheckedCheckboxIconContainerVariant = addVariantBase(tmp_0, VOID, UncheckedCheckboxIconContainerVariant$lambda);
      var tmp_1 = get_CheckboxIconContainerStyle();
      CheckedCheckboxIconContainerVariant = addVariant(tmp_1, VOID, CheckedCheckboxIconContainerVariant$lambda);
      var tmp_2 = Companion_instance_5;
      CheckboxIconStyle = base(tmp_2, VOID, CheckboxIconStyle$lambda);
      var tmp_3 = get_InputStyle();
      CheckboxInputVariant = addVariant(tmp_3, VOID, CheckboxInputVariant$lambda);
    }
  }
  function get_HiddenInputModifier() {
    _init_properties_Input_kt__b04mg8();
    return HiddenInputModifier;
  }
  var HiddenInputModifier;
  function get_InputGroupStyle() {
    _init_properties_Input_kt__b04mg8();
    return InputGroupStyle;
  }
  var InputGroupStyle;
  function get_InputStyle() {
    _init_properties_Input_kt__b04mg8();
    return InputStyle;
  }
  var InputStyle;
  function get_OutlinedInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return OutlinedInputVariant;
  }
  var OutlinedInputVariant;
  function get_FilledInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return FilledInputVariant;
  }
  var FilledInputVariant;
  function get_FlushedInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return FlushedInputVariant;
  }
  var FlushedInputVariant;
  function get_UnstyledInputVariant() {
    _init_properties_Input_kt__b04mg8();
    return UnstyledInputVariant;
  }
  var UnstyledInputVariant;
  function InputVars() {
    InputVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().c2k();
    tmp.v32_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.w32_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_FocusOutlineColorVar().c2k();
    tmp_0.x32_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    this.y32_1 = StyleVariable('silk');
    this.z32_1 = StyleVariable('silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().g30().c2k();
    tmp_1.a33_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    this.b33_1 = StyleVariable('silk');
    this.c33_1 = StyleVariable('silk');
    this.d33_1 = StyleVariable('silk');
    this.e33_1 = StyleVariable('silk');
    this.f33_1 = StyleVariable('silk');
    this.g33_1 = StyleVariable('silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_PlaceholderOpacityVar().c2k();
    tmp_2.h33_1 = StyleVariable_2(tmp0_defaultFallback_2, 'silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_PlaceholderColorVar().c2k();
    tmp_3.i33_1 = StyleVariable_0(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_cssRem(2.25);
    tmp_4.j33_1 = StyleVariable_0(tmp0_defaultFallback_4, 'silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = get_cssRem(2.25);
    tmp_5.k33_1 = StyleVariable_0(tmp0_defaultFallback_5, 'silk');
  }
  protoOf(InputVars).i30 = function () {
    return this.v32_1.i2k(this, BorderColor$factory_1());
  };
  protoOf(InputVars).g32 = function () {
    return this.w32_1.i2k(this, BorderRadius$factory_0());
  };
  protoOf(InputVars).l33 = function () {
    return this.x32_1.i2k(this, BorderFocusColor$factory());
  };
  protoOf(InputVars).m33 = function () {
    return this.y32_1.i2k(this, BorderHoverColor$factory());
  };
  protoOf(InputVars).n33 = function () {
    return this.z32_1.i2k(this, BorderInvalidColor$factory());
  };
  protoOf(InputVars).o30 = function () {
    return this.a33_1.i2k(this, ColorTransitionDuration$factory_1());
  };
  protoOf(InputVars).o33 = function () {
    return this.b33_1.i2k(this, FilledColor$factory());
  };
  protoOf(InputVars).p33 = function () {
    return this.c33_1.i2k(this, FilledHoverColor$factory());
  };
  protoOf(InputVars).q33 = function () {
    return this.d33_1.i2k(this, FilledFocusColor$factory());
  };
  protoOf(InputVars).c31 = function () {
    return this.e33_1.i2k(this, FontSize$factory_1());
  };
  protoOf(InputVars).d31 = function () {
    return this.f33_1.i2k(this, Height$factory_0());
  };
  protoOf(InputVars).r33 = function () {
    return this.g33_1.i2k(this, Padding$factory());
  };
  protoOf(InputVars).s33 = function () {
    return this.h33_1.i2k(this, PlaceholderOpacity$factory());
  };
  protoOf(InputVars).t33 = function () {
    return this.i33_1.i2k(this, PlaceholderColor$factory());
  };
  var InputVars_instance;
  function InputVars_getInstance() {
    if (InputVars_instance == null)
      new InputVars();
    return InputVars_instance;
  }
  function inputPadding(_this__u8e3s4) {
    _init_properties_Input_kt__b04mg8();
    var padding = InputVars_getInstance().r33().c2k();
    return paddingInline(_this__u8e3s4, padding, padding);
  }
  function Input_0(type, value, onValueChanged, modifier, variant, placeholder, size, enabled, valid, required, readOnly, spellCheck, autoComplete, onCommit, placeholderColor, focusBorderColor, invalidBorderColor, ref, $composer, $changed, $changed1, $default) {
    _init_properties_Input_kt__b04mg8();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var placeholder_0 = {_v: placeholder};
    var size_0 = {_v: size};
    var enabled_0 = {_v: enabled};
    var valid_0 = {_v: valid};
    var required_0 = {_v: required};
    var readOnly_0 = {_v: readOnly};
    var spellCheck_0 = {_v: spellCheck};
    var autoComplete_0 = {_v: autoComplete};
    var onCommit_0 = {_v: onCommit};
    var placeholderColor_0 = {_v: placeholderColor};
    var focusBorderColor_0 = {_v: focusBorderColor};
    var invalidBorderColor_0 = {_v: invalidBorderColor};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j19(-1251456891);
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 8) === 0)) {
      modifier_0._v = Companion_instance;
    }
    if (!(($default & 16) === 0)) {
      variant_0._v = InputDefaults_getInstance().a34_1;
      $dirty = $dirty & -57345;
    }
    if (!(($default & 32) === 0)) {
      placeholder_0._v = null;
    }
    if (!(($default & 64) === 0)) {
      size_0._v = InputDefaults_getInstance().z33_1;
      $dirty = $dirty & -3670017;
    }
    if (!(($default & 128) === 0)) {
      enabled_0._v = true;
    }
    if (!(($default & 256) === 0)) {
      valid_0._v = true;
    }
    if (!(($default & 512) === 0)) {
      required_0._v = false;
    }
    if (!(($default & 1024) === 0)) {
      readOnly_0._v = false;
    }
    if (!(($default & 2048) === 0)) {
      spellCheck_0._v = false;
    }
    if (!(($default & 4096) === 0)) {
      autoComplete_0._v = null;
    }
    if (!(($default & 8192) === 0)) {
      $composer_0.r17(-1298079411);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.v18();
      var tmp;
      if (false ? true : it === Companion_getInstance().j12_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms.Input.<anonymous>' call
        var value_0 = Input$lambda;
        this_0.b19(value_0);
        tmp = value_0;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.s17();
      onCommit_0._v = tmp0_group;
    }
    if (!(($default & 16384) === 0)) {
      placeholderColor_0._v = null;
    }
    if (!(($default & 32768) === 0)) {
      focusBorderColor_0._v = null;
    }
    if (!(($default & 65536) === 0)) {
      invalidBorderColor_0._v = null;
    }
    if (!(($default & 131072) === 0)) {
      ref_0._v = null;
    }
    if (isTraceInProgress()) {
      traceEventStart(-1251456891, $dirty, $dirty1, 'com.varabyte.kobweb.silk.components.forms.Input (Input.kt:620)');
    }
    _Input(type, value, onValueChanged, toModifier(size_0._v, $composer_0, 14 & $dirty >> 18).j2p(modifier_0._v), variant_0._v, placeholder_0._v, enabled_0._v, valid_0._v, required_0._v, readOnly_0._v, spellCheck_0._v, autoComplete_0._v, onCommit_0._v, placeholderColor_0._v, focusBorderColor_0._v, invalidBorderColor_0._v, ref_0._v, $composer_0, 4104 | (8 & $dirty >> 3) << 3 | 112 & $dirty | 896 & $dirty | 0 | 57344 & $dirty | 458752 & $dirty | 3670016 & $dirty >> 3 | 29360128 & $dirty >> 3 | 234881024 & $dirty >> 3 | 1879048192 & $dirty1 << 27, 299072 | 14 & $dirty1 >> 3 | 896 & $dirty1 >> 3 | 2097152 | 3670016 & $dirty1 >> 3, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.k19();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.h1e(Input$lambda_0(type, value, onValueChanged, modifier_0, variant_0, placeholder_0, size_0, enabled_0, valid_0, required_0, readOnly_0, spellCheck_0, autoComplete_0, onCommit_0, placeholderColor_0, focusBorderColor_0, invalidBorderColor_0, ref_0, $changed, $changed1, $default));
    }
  }
  function Companion_1() {
    Companion_instance_16 = this;
    this.b34_1 = new InputSize(FontSizeVars_getInstance().n31().c2k(), get_cssRem(1.25), get_cssRem(0.375), BorderRadiusVars_getInstance().n31().c2k());
    this.c34_1 = new InputSize(FontSizeVars_getInstance().o31().c2k(), get_cssRem(1.75), get_cssRem(0.5), BorderRadiusVars_getInstance().o31().c2k());
    this.d34_1 = new InputSize(FontSizeVars_getInstance().p31().c2k(), get_cssRem(2.25), get_cssRem(0.625), BorderRadiusVars_getInstance().p31().c2k());
    this.e34_1 = new InputSize(FontSizeVars_getInstance().q31().c2k(), get_cssRem(2.5), get_cssRem(0.75), BorderRadiusVars_getInstance().p31().c2k());
  }
  var Companion_instance_16;
  function Companion_getInstance_2() {
    if (Companion_instance_16 == null)
      new Companion_1();
    return Companion_instance_16;
  }
  function InputSize(fontSize, height, padding, borderRadius) {
    Companion_getInstance_2();
    Base_init_$Init$(setVariable(setVariable(setVariable(setVariable(Companion_instance, InputVars_getInstance().c31(), fontSize), InputVars_getInstance().d31(), height), InputVars_getInstance().r33(), padding), InputVars_getInstance().g32(), borderRadius), VOID, this);
  }
  function InputDefaults() {
    InputDefaults_instance = this;
    this.u33_1 = true;
    this.v33_1 = true;
    this.w33_1 = false;
    this.x33_1 = false;
    this.y33_1 = false;
    this.z33_1 = Companion_getInstance_2().d34_1;
    this.a34_1 = get_OutlinedInputVariant();
  }
  var InputDefaults_instance;
  function InputDefaults_getInstance() {
    if (InputDefaults_instance == null)
      new InputDefaults();
    return InputDefaults_instance;
  }
  function _Input(type, value, onValueChanged, modifier, variant, placeholder, enabled, valid, required, readOnly, spellCheck, autoComplete, onCommit, placeholderColor, focusBorderColor, invalidBorderColor, ref, $composer, $changed, $changed1, $default) {
    _init_properties_Input_kt__b04mg8();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var placeholder_0 = {_v: placeholder};
    var enabled_0 = {_v: enabled};
    var valid_0 = {_v: valid};
    var required_0 = {_v: required};
    var readOnly_0 = {_v: readOnly};
    var spellCheck_0 = {_v: spellCheck};
    var autoComplete_0 = {_v: autoComplete};
    var onCommit_0 = {_v: onCommit};
    var placeholderColor_0 = {_v: placeholderColor};
    var focusBorderColor_0 = {_v: focusBorderColor};
    var invalidBorderColor_0 = {_v: invalidBorderColor};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j19(-484912825);
    if (!(($default & 8) === 0)) {
      modifier_0._v = Companion_instance;
    }
    if (!(($default & 16) === 0)) {
      variant_0._v = null;
    }
    if (!(($default & 32) === 0)) {
      placeholder_0._v = null;
    }
    if (!(($default & 64) === 0)) {
      enabled_0._v = true;
    }
    if (!(($default & 128) === 0)) {
      valid_0._v = true;
    }
    if (!(($default & 256) === 0)) {
      required_0._v = false;
    }
    if (!(($default & 512) === 0)) {
      readOnly_0._v = false;
    }
    if (!(($default & 1024) === 0)) {
      spellCheck_0._v = false;
    }
    if (!(($default & 2048) === 0)) {
      autoComplete_0._v = null;
    }
    if (!(($default & 4096) === 0)) {
      $composer_0.r17(-302561821);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.v18();
      var tmp;
      if (false ? true : it === Companion_getInstance().j12_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms._Input.<anonymous>' call
        var value_0 = _Input$lambda;
        this_0.b19(value_0);
        tmp = value_0;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.s17();
      onCommit_0._v = tmp0_group;
    }
    if (!(($default & 8192) === 0)) {
      placeholderColor_0._v = null;
    }
    if (!(($default & 16384) === 0)) {
      focusBorderColor_0._v = null;
    }
    if (!(($default & 32768) === 0)) {
      invalidBorderColor_0._v = null;
    }
    if (!(($default & 65536) === 0)) {
      ref_0._v = null;
    }
    if (isTraceInProgress()) {
      traceEventStart(-484912825, $changed, $changed1, 'com.varabyte.kobweb.silk.components.forms._Input (Input.kt:462)');
    }
    $composer_0.r17(-302561617);
    if (!(ref_0._v == null)) {
      var tmp_1 = Companion_instance;
      // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
      // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_2 = toAttrs(display(tmp_1, 'none'));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.forms._Input.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, -419770335, true, _Input$lambda_0(ref_0));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.r17(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.kz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.v18();
      var tmp_4;
      if (invalid ? true : it_0 === Companion_getInstance().j12_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms._Input.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.b19(value_1);
        tmp_4 = value_1;
      } else {
        tmp_4 = it_0;
      }
      var tmp_5 = tmp_4;
      var tmp0 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
      $composer_1.s17();
      Div(tmp_2, tmp0, $composer_0, 48, 0);
    }
    $composer_0.s17();
    // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
    // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
    // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
    var tmp_6 = toModifier_0(get_InputStyle(), [variant_0._v], $composer_0, 0);
    var tmp0_safe_receiver = placeholderColor_0._v;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toModifier_1(tmp0_safe_receiver);
    var this_1 = setVariable(setVariable(tmp_6.j2p(tmp1_elvis_lhs == null ? Companion_instance : tmp1_elvis_lhs), InputVars_getInstance().l33(), focusBorderColor_0._v), InputVars_getInstance().n33(), invalidBorderColor_0._v);
    var tmp_7;
    if (!valid_0._v) {
      // Inline function 'com.varabyte.kobweb.silk.components.forms._Input.<anonymous>' call
      tmp_7 = setVariable(ariaInvalid(Companion_instance), InputVars_getInstance().i30(), InputVars_getInstance().n33().c2k());
    } else {
      tmp_7 = Companion_instance;
    }
    var this_2 = this_1.j2p(tmp_7);
    var tmp_8;
    if (!enabled_0._v) {
      // Inline function 'com.varabyte.kobweb.silk.components.forms._Input.<anonymous>' call
      tmp_8 = ariaDisabled(Companion_instance);
    } else {
      tmp_8 = Companion_instance;
    }
    var this_3 = this_2.j2p(tmp_8);
    var tmp_9;
    if (required_0._v) {
      // Inline function 'com.varabyte.kobweb.silk.components.forms._Input.<anonymous>' call
      tmp_9 = ariaRequired(Companion_instance);
    } else {
      tmp_9 = Companion_instance;
    }
    var tmp_10 = this_3.j2p(tmp_9).j2p(modifier_0._v);
    Input(type, toAttrs(tmp_10, _Input$lambda_1(value, placeholder_0, enabled_0, readOnly_0, required_0, spellCheck_0, autoComplete_0, onValueChanged, type, valid_0, onCommit_0)), $composer_0, 8);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.k19();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.h1e(_Input$lambda_2(type, value, onValueChanged, modifier_0, variant_0, placeholder_0, enabled_0, valid_0, required_0, readOnly_0, spellCheck_0, autoComplete_0, onCommit_0, placeholderColor_0, focusBorderColor_0, invalidBorderColor_0, ref_0, $changed, $changed1, $default));
    }
  }
  function toModifier_1(_this__u8e3s4) {
    _init_properties_Input_kt__b04mg8();
    return setVariable_0(setVariable(Companion_instance, InputVars_getInstance().t33(), _this__u8e3s4.j34_1), InputVars_getInstance().s33(), _this__u8e3s4.k34_1);
  }
  function InputGroupStyle$lambda($this$base) {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    var tmp_0 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = outline(tmp, tmp_0, 'solid', Colors_instance.h2q());
    var tmp_2 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return fontSize(borderRadius(border_0(tmp_1, tmp_2, 'solid', Colors_instance.h2q()), InputVars_getInstance().g32().c2k()), InputVars_getInstance().c31().c2k());
  }
  function InputStyle$lambda($this$CssStyle) {
    _init_properties_Input_kt__b04mg8();
    $this$CssStyle.y2u(InputStyle$lambda$lambda);
    var tmp = get_placeholder($this$CssStyle);
    tmp.a2u(InputStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function InputStyle$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = backgroundColor(fontSize(height(color(appearance(Companion_instance, Companion_instance_11.e2i()), get_ColorVar().c2k()), InputVars_getInstance().d31().c2k()), InputVars_getInstance().c31().c2k()), Colors_instance.h2q());
    var tmp_0 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = outline(tmp, tmp_0, 'solid', Colors_instance.h2q());
    var tmp_2 = get_px(0);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return transition_0(border_0(tmp_1, tmp_2, 'solid', Colors_instance.h2q()), Companion_instance_2.t2k(listOf(['border-color', 'box-shadow', 'background-color']), InputVars_getInstance().o30().c2k()));
  }
  function InputStyle$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return color(opacity(Companion_instance, InputVars_getInstance().s33().c2k()), InputVars_getInstance().t33().c2k());
  }
  function OutlinedInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.y2u(OutlinedInputVariant$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    tmp.a2u(OutlinedInputVariant$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).j2u(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_0.a2u(OutlinedInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).j2u(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.a2u(OutlinedInputVariant$lambda$lambda_2);
    return Unit_instance;
  }
  function invoke$bordered(_this__u8e3s4, color) {
    var tmp = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return boxShadow(border_0(_this__u8e3s4, tmp, 'solid', color), VOID, VOID, VOID, get_px(1), color);
  }
  function OutlinedInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = borderRadius(inputPadding(Companion_instance), InputVars_getInstance().g32().c2k());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border_0(tmp, tmp_0, 'solid', InputVars_getInstance().i30().c2k());
  }
  function OutlinedInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_instance, InputVars_getInstance().n33().c2k());
  }
  function OutlinedInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    return border(tmp, OutlinedInputVariant$lambda$lambda$lambda);
  }
  function OutlinedInputVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.x2q(InputVars_getInstance().m33().c2k());
    return Unit_instance;
  }
  function OutlinedInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered(Companion_instance, InputVars_getInstance().l33().c2k());
  }
  function FilledInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.y2u(FilledInputVariant$lambda$lambda);
    var tmp = get_hover($this$addVariant).j2u(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp.a2u(FilledInputVariant$lambda$lambda_0);
    var tmp_0 = get_ariaInvalid($this$addVariant);
    tmp_0.a2u(FilledInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).j2u(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.a2u(FilledInputVariant$lambda$lambda_2);
    return Unit_instance;
  }
  function invoke$bordered_0(_this__u8e3s4, color) {
    return boxShadow(border(_this__u8e3s4, FilledInputVariant$lambda$bordered$lambda(color)), VOID, VOID, VOID, get_px(1), color);
  }
  function FilledInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = borderRadius(backgroundColor(inputPadding(Companion_instance), InputVars_getInstance().o33().c2k()), InputVars_getInstance().g32().c2k());
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return border_0(tmp, tmp_0, 'solid', Colors_instance.h2q());
  }
  function FilledInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return backgroundColor(Companion_instance, InputVars_getInstance().p33().c2k());
  }
  function FilledInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(Companion_instance, InputVars_getInstance().n33().c2k());
  }
  function FilledInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_0(backgroundColor(Companion_instance, InputVars_getInstance().q33().c2k()), InputVars_getInstance().l33().c2k());
  }
  function FilledInputVariant$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.x2q($color);
      return Unit_instance;
    };
  }
  function FlushedInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    $this$addVariant.y2u(FlushedInputVariant$lambda$lambda);
    var tmp = get_ariaInvalid($this$addVariant);
    tmp.a2u(FlushedInputVariant$lambda$lambda_0);
    var tmp_0 = get_hover($this$addVariant).j2u(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_0.a2u(FlushedInputVariant$lambda$lambda_1);
    var tmp_1 = get_focusVisible($this$addVariant).j2u(not($this$addVariant, [get_disabled($this$addVariant)]));
    tmp_1.a2u(FlushedInputVariant$lambda$lambda_2);
    return Unit_instance;
  }
  function invoke$bordered_1(_this__u8e3s4, color) {
    return boxShadow(border(_this__u8e3s4, FlushedInputVariant$lambda$bordered$lambda(color)), VOID, get_px(1), VOID, VOID, color);
  }
  function FlushedInputVariant$lambda$lambda() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return borderBottom(tmp, tmp_0, 'solid', InputVars_getInstance().i30().c2k());
  }
  function FlushedInputVariant$lambda$lambda_0() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_instance, InputVars_getInstance().n33().c2k());
  }
  function FlushedInputVariant$lambda$lambda_1() {
    _init_properties_Input_kt__b04mg8();
    var tmp = Companion_instance;
    return border(tmp, FlushedInputVariant$lambda$lambda$lambda);
  }
  function FlushedInputVariant$lambda$lambda$lambda($this$border) {
    _init_properties_Input_kt__b04mg8();
    $this$border.x2q(InputVars_getInstance().m33().c2k());
    return Unit_instance;
  }
  function FlushedInputVariant$lambda$lambda_2() {
    _init_properties_Input_kt__b04mg8();
    return invoke$bordered_1(Companion_instance, InputVars_getInstance().l33().c2k());
  }
  function FlushedInputVariant$lambda$bordered$lambda($color) {
    return function ($this$border) {
      $this$border.x2q($color);
      return Unit_instance;
    };
  }
  function UnstyledInputVariant$lambda($this$addVariant) {
    _init_properties_Input_kt__b04mg8();
    return Unit_instance;
  }
  function Input$lambda() {
    _init_properties_Input_kt__b04mg8();
    return Unit_instance;
  }
  function Input$lambda_0($type, $value, $onValueChanged, $modifier, $variant, $placeholder, $size, $enabled, $valid, $required, $readOnly, $spellCheck, $autoComplete, $onCommit, $placeholderColor, $focusBorderColor, $invalidBorderColor, $ref, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      Input_0($type, $value, $onValueChanged, $modifier._v, $variant._v, $placeholder._v, $size._v, $enabled._v, $valid._v, $required._v, $readOnly._v, $spellCheck._v, $autoComplete._v, $onCommit._v, $placeholderColor._v, $focusBorderColor._v, $invalidBorderColor._v, $ref._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_instance;
    };
  }
  function _Input$lambda() {
    _init_properties_Input_kt__b04mg8();
    return Unit_instance;
  }
  function _Input$lambda$lambda(it) {
    _init_properties_Input_kt__b04mg8();
    var tmp = it.nextSibling;
    return tmp instanceof HTMLInputElement ? tmp : THROW_CCE();
  }
  function _Input$lambda_0($ref) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-419770335, $changed, -1, 'com.varabyte.kobweb.silk.components.forms._Input.<anonymous> (Input.kt:465)');
      }
      var tmp = $ref._v;
      $composer_0.r17(-92427198);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.v18();
      var tmp_0;
      if (false ? true : it === Companion_getInstance().j12_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.forms._Input.<anonymous>.<anonymous>.<anonymous>' call
        var value = _Input$lambda$lambda;
        $composer_0.b19(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.s17();
      registerRefScope($this$Div, tmp, tmp0_group, $composer_0, 456);
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.l22(p0, p1, p2);
    };
  }
  function _Input$lambda$lambda_0($onValueChanged, $type) {
    return function (evt) {
      $onValueChanged($type.n27(evt.j2f_1));
      return Unit_instance;
    };
  }
  function _Input$lambda$lambda_1($valid, $onCommit) {
    return function (evt) {
      var tmp;
      if ($valid._v ? evt.d2h_1 === 'Enter' : false) {
        evt.v2f();
        evt.w2f();
        tmp = $onCommit._v();
      }
      return Unit_instance;
    };
  }
  function _Input$lambda_1($value, $placeholder, $enabled, $readOnly, $required, $spellCheck, $autoComplete, $onValueChanged, $type, $valid, $onCommit) {
    return function ($this$toAttrs) {
      var tmp;
      if (!($value == null)) {
        var tmp0_subject = $value;
        var tmp_0;
        if (typeof tmp0_subject === 'string') {
          $this$toAttrs.j2b($value);
          tmp_0 = Unit_instance;
        } else {
          if (isNumber(tmp0_subject)) {
            $this$toAttrs.k2b($value);
            tmp_0 = Unit_instance;
          } else {
            if (typeof tmp0_subject === 'boolean') {
              $this$toAttrs.l2b($value);
              tmp_0 = Unit_instance;
            } else {
              if (tmp0_subject instanceof Unit) {
                tmp_0 = Unit_instance;
              } else {
                var message = 'Unexpected `Input` value type: ' + getKClassFromExpression(ensureNotNull($value));
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
        }
        tmp = tmp_0;
      }
      var tmp1_safe_receiver = $placeholder._v;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.silk.components.forms._Input.<anonymous>.<anonymous>' call
        placeholder($this$toAttrs, tmp1_safe_receiver);
      }
      var tmp_1;
      if (!$enabled._v) {
        disabled($this$toAttrs);
        tmp_1 = Unit_instance;
      }
      var tmp_2;
      if ($readOnly._v) {
        readOnly($this$toAttrs);
        tmp_2 = Unit_instance;
      }
      var tmp_3;
      if ($required._v) {
        required($this$toAttrs);
        tmp_3 = Unit_instance;
      }
      $this$toAttrs.s24($spellCheck._v);
      var tmp2_safe_receiver = $autoComplete._v;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.silk.components.forms._Input.<anonymous>.<anonymous>' call
        autoComplete($this$toAttrs, tmp2_safe_receiver);
      }
      $this$toAttrs.m2b(_Input$lambda$lambda_0($onValueChanged, $type));
      $this$toAttrs.v24(_Input$lambda$lambda_1($valid, $onCommit));
      return Unit_instance;
    };
  }
  function _Input$lambda_2($type, $value, $onValueChanged, $modifier, $variant, $placeholder, $enabled, $valid, $required, $readOnly, $spellCheck, $autoComplete, $onCommit, $placeholderColor, $focusBorderColor, $invalidBorderColor, $ref, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      _Input($type, $value, $onValueChanged, $modifier._v, $variant._v, $placeholder._v, $enabled._v, $valid._v, $required._v, $readOnly._v, $spellCheck._v, $autoComplete._v, $onCommit._v, $placeholderColor._v, $focusBorderColor._v, $invalidBorderColor._v, $ref._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_instance;
    };
  }
  function BorderColor$factory_1() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.i30();
    }, null);
  }
  function BorderRadius$factory_0() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.g32();
    }, null);
  }
  function BorderFocusColor$factory() {
    return getPropertyCallableRef('BorderFocusColor', 1, KProperty1, function (receiver) {
      return receiver.l33();
    }, null);
  }
  function BorderHoverColor$factory() {
    return getPropertyCallableRef('BorderHoverColor', 1, KProperty1, function (receiver) {
      return receiver.m33();
    }, null);
  }
  function BorderInvalidColor$factory() {
    return getPropertyCallableRef('BorderInvalidColor', 1, KProperty1, function (receiver) {
      return receiver.n33();
    }, null);
  }
  function ColorTransitionDuration$factory_1() {
    return getPropertyCallableRef('ColorTransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.o30();
    }, null);
  }
  function FilledColor$factory() {
    return getPropertyCallableRef('FilledColor', 1, KProperty1, function (receiver) {
      return receiver.o33();
    }, null);
  }
  function FilledHoverColor$factory() {
    return getPropertyCallableRef('FilledHoverColor', 1, KProperty1, function (receiver) {
      return receiver.p33();
    }, null);
  }
  function FilledFocusColor$factory() {
    return getPropertyCallableRef('FilledFocusColor', 1, KProperty1, function (receiver) {
      return receiver.q33();
    }, null);
  }
  function FontSize$factory_1() {
    return getPropertyCallableRef('FontSize', 1, KProperty1, function (receiver) {
      return receiver.c31();
    }, null);
  }
  function Height$factory_0() {
    return getPropertyCallableRef('Height', 1, KProperty1, function (receiver) {
      return receiver.d31();
    }, null);
  }
  function Padding$factory() {
    return getPropertyCallableRef('Padding', 1, KProperty1, function (receiver) {
      return receiver.r33();
    }, null);
  }
  function PlaceholderOpacity$factory() {
    return getPropertyCallableRef('PlaceholderOpacity', 1, KProperty1, function (receiver) {
      return receiver.s33();
    }, null);
  }
  function PlaceholderColor$factory() {
    return getPropertyCallableRef('PlaceholderColor', 1, KProperty1, function (receiver) {
      return receiver.t33();
    }, null);
  }
  var properties_initialized_Input_kt_tklayu;
  function _init_properties_Input_kt__b04mg8() {
    if (!properties_initialized_Input_kt_tklayu) {
      properties_initialized_Input_kt_tklayu = true;
      var tmp = whiteSpace(overflow_0(clip(padding(margin_0(size(border_0(Companion_instance, get_px(0)), get_px(1)), get_px(-1)), get_px(0)), RectF_init_$Create$(50.0)), Companion_instance_4.s2j()), Companion_instance_7.m2k());
      // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
      // Inline function 'org.jetbrains.compose.web.css.Position' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = 'absolute';
      HiddenInputModifier = position(tmp, tmp$ret$3);
      var tmp_0 = Companion_instance_5;
      InputGroupStyle = base(tmp_0, VOID, InputGroupStyle$lambda);
      InputStyle = CssStyle(VOID, InputStyle$lambda);
      var tmp_1 = get_InputStyle();
      OutlinedInputVariant = addVariant(tmp_1, VOID, OutlinedInputVariant$lambda);
      var tmp_2 = get_InputStyle();
      FilledInputVariant = addVariant(tmp_2, VOID, FilledInputVariant$lambda);
      var tmp_3 = get_InputStyle();
      FlushedInputVariant = addVariant(tmp_3, VOID, FlushedInputVariant$lambda);
      var tmp_4 = get_InputStyle();
      UnstyledInputVariant = addVariant(tmp_4, VOID, UnstyledInputVariant$lambda);
    }
  }
  function get_SwitchStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchStyle;
  }
  var SwitchStyle;
  function get_SwitchTrackStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchTrackStyle;
  }
  var SwitchTrackStyle;
  function get_SwitchInputVariant() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchInputVariant;
  }
  var SwitchInputVariant;
  function get_SwitchThumbStyle() {
    _init_properties_Switch_kt__dwcqr0();
    return SwitchThumbStyle;
  }
  var SwitchThumbStyle;
  function SwitchVars() {
    SwitchVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_px(9999);
    tmp.l34_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    this.m34_1 = StyleVariable('silk');
    this.n34_1 = StyleVariable('silk');
    this.o34_1 = StyleVariable('silk');
    this.p34_1 = StyleVariable('silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_FocusOutlineColorVar().c2k();
    tmp_0.q34_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    this.r34_1 = StyleVariable('silk');
    this.s34_1 = StyleVariable('silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = TransitionDurationVars_getInstance().u34().c2k();
    tmp_1.t34_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
  }
  protoOf(SwitchVars).g32 = function () {
    return this.l34_1.i2k(this, BorderRadius$factory_1());
  };
  protoOf(SwitchVars).v34 = function () {
    return this.m34_1.i2k(this, TrackWidth$factory());
  };
  protoOf(SwitchVars).w34 = function () {
    return this.n34_1.i2k(this, TrackHeight$factory());
  };
  protoOf(SwitchVars).x34 = function () {
    return this.o34_1.i2k(this, TrackPadding$factory());
  };
  protoOf(SwitchVars).y34 = function () {
    return this.p34_1.i2k(this, TrackBackgroundColor$factory());
  };
  protoOf(SwitchVars).z34 = function () {
    return this.q34_1.i2k(this, FocusColor$factory());
  };
  protoOf(SwitchVars).a35 = function () {
    return this.r34_1.i2k(this, ThumbOffset$factory());
  };
  protoOf(SwitchVars).b35 = function () {
    return this.s34_1.i2k(this, ThumbColor$factory());
  };
  protoOf(SwitchVars).r32 = function () {
    return this.t34_1.i2k(this, TransitionDuration$factory_0());
  };
  var SwitchVars_instance;
  function SwitchVars_getInstance() {
    if (SwitchVars_instance == null)
      new SwitchVars();
    return SwitchVars_instance;
  }
  function Companion_2() {
    Companion_instance_17 = this;
    this.c35_1 = new SwitchSize(get_cssRem(1.375), get_cssRem(0.75));
    this.d35_1 = new SwitchSize(get_cssRem(1.875), get_cssRem(1));
    this.e35_1 = new SwitchSize(get_cssRem(2.875), get_cssRem(1.5));
  }
  var Companion_instance_17;
  function Companion_getInstance_3() {
    if (Companion_instance_17 == null)
      new Companion_2();
    return Companion_instance_17;
  }
  function SwitchSize(width, height, padding) {
    Companion_getInstance_3();
    padding = padding === VOID ? get_cssRem(0.188) : padding;
    Base_init_$Init$(setVariable(setVariable(setVariable(Companion_instance, SwitchVars_getInstance().v34(), width), SwitchVars_getInstance().w34(), height), SwitchVars_getInstance().x34(), padding), VOID, this);
  }
  function SwitchStyle$lambda($this$base) {
    _init_properties_Switch_kt__dwcqr0();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return position(tmp, tmp$ret$3);
  }
  function SwitchTrackStyle$lambda($this$CssStyle) {
    _init_properties_Switch_kt__dwcqr0();
    $this$CssStyle.y2u(SwitchTrackStyle$lambda$lambda);
    var tmp = get_hover($this$CssStyle).j2u(not($this$CssStyle, [get_ariaDisabled($this$CssStyle)]));
    tmp.a2u(SwitchTrackStyle$lambda$lambda_0);
    return Unit_instance;
  }
  function SwitchTrackStyle$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    return boxSizing(transition(backgroundColor(borderRadius(padding(minHeight(height(minWidth(width(Companion_instance, SwitchVars_getInstance().v34().c2k()), SwitchVars_getInstance().v34().c2k()), SwitchVars_getInstance().w34().c2k()), SwitchVars_getInstance().w34().c2k()), SwitchVars_getInstance().x34().c2k()), SwitchVars_getInstance().g32().c2k()), SwitchVars_getInstance().y34().c2k()), [CSSTransition_init_$Create$('background-color', SwitchVars_getInstance().r32().c2k())]), Companion_instance_12.x2h());
  }
  function SwitchTrackStyle$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return cursor(Companion_instance, Companion_instance_1.b2i());
  }
  function SwitchInputVariant$lambda($this$addVariant) {
    _init_properties_Switch_kt__dwcqr0();
    $this$addVariant.y2u(SwitchInputVariant$lambda$lambda);
    $this$addVariant.q2v(':focus-visible + *', SwitchInputVariant$lambda$lambda_0);
    return Unit_instance;
  }
  function SwitchInputVariant$lambda$lambda() {
    _init_properties_Switch_kt__dwcqr0();
    return get_HiddenInputModifier();
  }
  function SwitchInputVariant$lambda$lambda_0() {
    _init_properties_Switch_kt__dwcqr0();
    return boxShadow(Companion_instance, VOID, VOID, VOID, get_cssRem(0.1875), SwitchVars_getInstance().z34().c2k());
  }
  function SwitchThumbStyle$lambda($this$base) {
    _init_properties_Switch_kt__dwcqr0();
    return transition(translateX(backgroundColor(borderRadius(size(Companion_instance, SwitchVars_getInstance().w34().c2k()), SwitchVars_getInstance().g32().c2k()), SwitchVars_getInstance().b35().c2k()), SwitchVars_getInstance().a35().c2k()), [CSSTransition_init_$Create$('translate', SwitchVars_getInstance().r32().c2k())]);
  }
  function BorderRadius$factory_1() {
    return getPropertyCallableRef('BorderRadius', 1, KProperty1, function (receiver) {
      return receiver.g32();
    }, null);
  }
  function TrackWidth$factory() {
    return getPropertyCallableRef('TrackWidth', 1, KProperty1, function (receiver) {
      return receiver.v34();
    }, null);
  }
  function TrackHeight$factory() {
    return getPropertyCallableRef('TrackHeight', 1, KProperty1, function (receiver) {
      return receiver.w34();
    }, null);
  }
  function TrackPadding$factory() {
    return getPropertyCallableRef('TrackPadding', 1, KProperty1, function (receiver) {
      return receiver.x34();
    }, null);
  }
  function TrackBackgroundColor$factory() {
    return getPropertyCallableRef('TrackBackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.y34();
    }, null);
  }
  function FocusColor$factory() {
    return getPropertyCallableRef('FocusColor', 1, KProperty1, function (receiver) {
      return receiver.z34();
    }, null);
  }
  function ThumbOffset$factory() {
    return getPropertyCallableRef('ThumbOffset', 1, KProperty1, function (receiver) {
      return receiver.a35();
    }, null);
  }
  function ThumbColor$factory() {
    return getPropertyCallableRef('ThumbColor', 1, KProperty1, function (receiver) {
      return receiver.b35();
    }, null);
  }
  function TransitionDuration$factory_0() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.r32();
    }, null);
  }
  var properties_initialized_Switch_kt_7kkg8m;
  function _init_properties_Switch_kt__dwcqr0() {
    if (!properties_initialized_Switch_kt_7kkg8m) {
      properties_initialized_Switch_kt_7kkg8m = true;
      var tmp = Companion_instance_5;
      SwitchStyle = base(tmp, VOID, SwitchStyle$lambda);
      var tmp_0 = ariaHidden(tabIndex(Companion_instance, -1));
      SwitchTrackStyle = CssStyle(tmp_0, SwitchTrackStyle$lambda);
      var tmp_1 = get_InputStyle();
      SwitchInputVariant = addVariant(tmp_1, VOID, SwitchInputVariant$lambda);
      var tmp_2 = Companion_instance_5;
      SwitchThumbStyle = base(tmp_2, VOID, SwitchThumbStyle$lambda);
    }
  }
  function get_CanvasStyle() {
    _init_properties_Canvas_kt__g1lz20();
    return CanvasStyle;
  }
  var CanvasStyle;
  function CanvasStyle$lambda($this$CssStyle) {
    _init_properties_Canvas_kt__g1lz20();
    return Unit_instance;
  }
  var properties_initialized_Canvas_kt_i28dei;
  function _init_properties_Canvas_kt__g1lz20() {
    if (!properties_initialized_Canvas_kt_i28dei) {
      properties_initialized_Canvas_kt_i28dei = true;
      CanvasStyle = CssStyle(VOID, CanvasStyle$lambda);
    }
  }
  function get_HorizontalDividerStyle() {
    _init_properties_Divider_kt__8b5dnr();
    return HorizontalDividerStyle;
  }
  var HorizontalDividerStyle;
  var DividerStyle;
  function get_VerticalDividerStyle() {
    _init_properties_Divider_kt__8b5dnr();
    return VerticalDividerStyle;
  }
  var VerticalDividerStyle;
  function DividerVars() {
    DividerVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().c2k();
    tmp.f35_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_percent(90);
    tmp_0.g35_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
  }
  protoOf(DividerVars).h30 = function () {
    return this.f35_1.i2k(this, Color$factory_1());
  };
  protoOf(DividerVars).h35 = function () {
    return this.g35_1.i2k(this, Length$factory());
  };
  var DividerVars_instance;
  function DividerVars_getInstance() {
    if (DividerVars_instance == null)
      new DividerVars();
    return DividerVars_instance;
  }
  function HorizontalDividerStyle$lambda($this$base) {
    _init_properties_Divider_kt__8b5dnr();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return width(borderTop(tmp, tmp_0, 'solid', DividerVars_getInstance().h30().c2k()), DividerVars_getInstance().h35().c2k());
  }
  function VerticalDividerStyle$lambda($this$base) {
    _init_properties_Divider_kt__8b5dnr();
    var tmp = Companion_instance;
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return height(borderLeft(tmp, tmp_0, 'solid', DividerVars_getInstance().h30().c2k()), DividerVars_getInstance().h35().c2k());
  }
  function Color$factory_1() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.h30();
    }, null);
  }
  function Length$factory() {
    return getPropertyCallableRef('Length', 1, KProperty1, function (receiver) {
      return receiver.h35();
    }, null);
  }
  var properties_initialized_Divider_kt_k1kxcn;
  function _init_properties_Divider_kt__8b5dnr() {
    if (!properties_initialized_Divider_kt_k1kxcn) {
      properties_initialized_Divider_kt_k1kxcn = true;
      var tmp = Companion_instance_5;
      HorizontalDividerStyle = base(tmp, VOID, HorizontalDividerStyle$lambda);
      DividerStyle = get_HorizontalDividerStyle();
      var tmp_0 = Companion_instance_5;
      VerticalDividerStyle = base(tmp_0, VOID, VerticalDividerStyle$lambda);
    }
  }
  function get_columnVariables() {
    _init_properties_SimpleGrid_kt__tvipdk();
    return columnVariables;
  }
  var columnVariables;
  function get_SimpleGridStyle() {
    _init_properties_SimpleGrid_kt__tvipdk();
    return SimpleGridStyle;
  }
  var SimpleGridStyle;
  function SimpleGridStyle$lambda($this$CssStyle) {
    _init_properties_SimpleGrid_kt__tvipdk();
    $this$CssStyle.y2u(SimpleGridStyle$lambda$lambda);
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = get_columnVariables().f2().k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.components.layout.SimpleGridStyle.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var breakpoint = element.i2();
      // Inline function 'kotlin.collections.component2' call
      var variable = element.j2();
      $this$CssStyle.s2v(breakpoint, SimpleGridStyle$lambda$lambda_0(variable));
    }
    return Unit_instance;
  }
  function SimpleGridStyle$lambda$lambda() {
    _init_properties_SimpleGrid_kt__tvipdk();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Grid' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'grid');
  }
  function SimpleGridStyle$lambda$lambda$lambda$lambda($this$repeat) {
    _init_properties_SimpleGrid_kt__tvipdk();
    $this$repeat.o2i(get_fr(1));
    return Unit_instance;
  }
  function SimpleGridStyle$lambda$lambda$lambda($variable) {
    return function ($this$gridTemplateColumns) {
      var tmp = $variable.c2k();
      $this$gridTemplateColumns.k2i(tmp, SimpleGridStyle$lambda$lambda$lambda$lambda);
      return Unit_instance;
    };
  }
  function SimpleGridStyle$lambda$lambda_0($variable) {
    return function () {
      var tmp = Companion_instance;
      return gridTemplateColumns(tmp, SimpleGridStyle$lambda$lambda$lambda($variable));
    };
  }
  var properties_initialized_SimpleGrid_kt_fum19i;
  function _init_properties_SimpleGrid_kt__tvipdk() {
    if (!properties_initialized_SimpleGrid_kt_fum19i) {
      properties_initialized_SimpleGrid_kt_fum19i = true;
      // Inline function 'kotlin.collections.associateWith' call
      var this_0 = get_entries();
      var result = LinkedHashMap_init_$Create$(coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16));
      // Inline function 'kotlin.collections.associateWithTo' call
      var tmp0_iterator = this_0.k();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'com.varabyte.kobweb.silk.components.layout.columnVariables.<anonymous>' call
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = element.r9_1.toLowerCase();
        var tmp$ret$2 = new NumberValue('simple-grid-col-count-' + tmp$ret$1, VOID, 'silk');
        result.g2(element, tmp$ret$2);
      }
      columnVariables = result;
      SimpleGridStyle = CssStyle(VOID, SimpleGridStyle$lambda);
    }
  }
  function get_SurfaceStyle() {
    _init_properties_Surface_kt__8o7unv();
    return SurfaceStyle;
  }
  var SurfaceStyle;
  function SurfaceVars() {
    SurfaceVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BackgroundColorVar().c2k();
    tmp.i35_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ColorVar().c2k();
    tmp_0.j35_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
  }
  protoOf(SurfaceVars).j30 = function () {
    return this.i35_1.i2k(this, BackgroundColor$factory_0());
  };
  protoOf(SurfaceVars).h30 = function () {
    return this.j35_1.i2k(this, Color$factory_2());
  };
  var SurfaceVars_instance;
  function SurfaceVars_getInstance() {
    if (SurfaceVars_instance == null)
      new SurfaceVars();
    return SurfaceVars_instance;
  }
  function Surface(modifier, variant, colorModeOverride, contentAlignment, ref, content, $composer, $changed, $default) {
    _init_properties_Surface_kt__8o7unv();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var colorModeOverride_0 = {_v: colorModeOverride};
    var contentAlignment_0 = {_v: contentAlignment};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j19(1423772139);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 2;
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.kz(variant_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.kz(colorModeOverride_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 1024;
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.kz(ref_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.m18(content) ? 131072 : 65536);
    if (!(($default & 9) === 9) ? true : !(($dirty & 374491) === 74898) ? true : !$composer_0.m17()) {
      $composer_0.t17();
      if (($changed & 1) === 0 ? true : $composer_0.x17()) {
        if (!(($default & 1) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 2) === 0)) {
          variant_0._v = null;
        }
        if (!(($default & 4) === 0)) {
          colorModeOverride_0._v = null;
        }
        if (!(($default & 8) === 0)) {
          contentAlignment_0._v = TopStart_instance;
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
          ref_0._v = null;
        }
      } else {
        $composer_0.d12();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.u17();
      if (isTraceInProgress()) {
        traceEventStart(1423772139, $dirty, -1, 'com.varabyte.kobweb.silk.components.layout.Surface (Surface.kt:56)');
      }
      $composer_0.r17(-1164412583);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.v18();
      var tmp;
      if (false ? true : it === Companion_getInstance().j12_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>' call
        var value = mutableStateOf(null);
        this_0.b19(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.s17();
      var surfaceElement$delegate = tmp0_group;
      var tmp_1 = toModifier_0(get_SurfaceStyle(), [variant_0._v], $composer_0, 0).j2p(modifier_0._v);
      var tmp_2 = contentAlignment_0._v;
      var tmp_3 = refScope(Surface$lambda_1(ref_0, surfaceElement$delegate));
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>' call
      var tmp_4 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_4, -1254733147, true, Surface$lambda_2(colorModeOverride_0, content, surfaceElement$delegate));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.r17(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.kz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.v18();
      var tmp_5;
      if (invalid ? true : it_0 === Companion_getInstance().j12_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.b19(value_0);
        tmp_5 = value_0;
      } else {
        tmp_5 = it_0;
      }
      var tmp_6 = tmp_5;
      var tmp0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_1.s17();
      Box(tmp_1, tmp_2, tmp_3, tmp0, $composer_0, 3656, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.d12();
    }
    var tmp1_safe_receiver = $composer_0.k19();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.h1e(Surface$lambda_3(modifier_0, variant_0, colorModeOverride_0, contentAlignment_0, ref_0, content, $changed, $default));
    }
  }
  function Surface$lambda($surfaceElement$delegate) {
    _init_properties_Surface_kt__8o7unv();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('surfaceElement', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $surfaceElement$delegate.j2();
  }
  function Surface$lambda_0($surfaceElement$delegate, value) {
    _init_properties_Surface_kt__8o7unv();
    getLocalDelegateReference('surfaceElement', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $surfaceElement$delegate.kq(value);
    return Unit_instance;
  }
  function SurfaceStyle$lambda($this$CssStyle) {
    _init_properties_Surface_kt__8o7unv();
    $this$CssStyle.y2u(SurfaceStyle$lambda$lambda);
    return Unit_instance;
  }
  function SurfaceStyle$lambda$lambda() {
    _init_properties_Surface_kt__8o7unv();
    return color(backgroundColor(Companion_instance, SurfaceVars_getInstance().j30().c2k()), SurfaceVars_getInstance().h30().c2k());
  }
  function Surface$lambda$lambda($surfaceElement$delegate) {
    return function (it) {
      Surface$lambda_0($surfaceElement$delegate, it);
      return Unit_instance;
    };
  }
  function Surface$lambda_1($ref, $surfaceElement$delegate) {
    return function ($this$refScope) {
      $this$refScope.h2l($ref._v);
      $this$refScope.g2l([], Surface$lambda$lambda($surfaceElement$delegate));
      return Unit_instance;
    };
  }
  function Surface$lambda$lambda$slambda($surfaceElement, $currColorMode, resultContinuation) {
    this.s35_1 = $surfaceElement;
    this.t35_1 = $currColorMode;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Surface$lambda$lambda$slambda).w1g = function ($this$LaunchedEffect, $completion) {
    var tmp = this.x1g($this$LaunchedEffect, $completion);
    tmp.xb_1 = Unit_instance;
    tmp.yb_1 = null;
    return tmp.hc();
  };
  protoOf(Surface$lambda$lambda$slambda).tc = function (p1, $completion) {
    return this.w1g((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Surface$lambda$lambda$slambda).hc = function () {
    var suspendResult = this.xb_1;
    $sm: do
      try {
        var tmp = this.vb_1;
        if (tmp === 0) {
          this.wb_1 = 1;
          setSilkWidgetVariables(this.s35_1, this.t35_1);
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.yb_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(Surface$lambda$lambda$slambda).x1g = function ($this$LaunchedEffect, completion) {
    var i = new Surface$lambda$lambda$slambda(this.s35_1, this.t35_1, completion);
    i.u35_1 = $this$LaunchedEffect;
    return i;
  };
  function Surface$lambda$lambda$slambda_0($surfaceElement, $currColorMode, resultContinuation) {
    var i = new Surface$lambda$lambda$slambda($surfaceElement, $currColorMode, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.w1g($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Surface$lambda$lambda_0($content, $this_Box, $surfaceElement) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.m17()) {
        if (isTraceInProgress()) {
          traceEventStart(-1856426530, $changed, -1, 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>.<anonymous> (Surface.kt:69)');
        }
        var currColorMode = Companion_instance_13.x2v($composer_0, 8);
        LaunchedEffect(currColorMode, Surface$lambda$lambda$slambda_0($surfaceElement, currColorMode, null), $composer_0, 64);
        $content($this_Box, $composer_0, 8);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      } else {
        $composer_0.d12();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.k17(p0, p1);
    };
  }
  function Surface$lambda_2($colorModeOverride, $content, $surfaceElement$delegate) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(-1254733147, $changed, -1, 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous> (Surface.kt:66)');
      }
      if (!($colorModeOverride._v == null)) {
        $composer_0.r17(321050182);
        var tmp0_safe_receiver = Surface$lambda($surfaceElement$delegate);
        var tmp;
        if (tmp0_safe_receiver == null) {
          tmp = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp_0 = $colorModeOverride._v.m2x();
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp_1 = $composer_0;
          var dispatchReceiver = composableLambda(tmp_1, -1856426530, true, Surface$lambda$lambda_0($content, $this$Box, tmp0_safe_receiver));
          // Inline function 'androidx.compose.runtime.remember' call
          var $composer_1 = $composer_0;
          $composer_1.r17(1157296644);
          sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid = $composer_1.kz(dispatchReceiver);
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var it = $composer_1.v18();
          var tmp_2;
          if (invalid ? true : it === Companion_getInstance().j12_1) {
            // Inline function 'com.varabyte.kobweb.silk.components.layout.Surface.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            var value = ComposableLambda$invoke$ref_0(dispatchReceiver);
            $composer_1.b19(value);
            tmp_2 = value;
          } else {
            tmp_2 = it;
          }
          var tmp_3 = tmp_2;
          var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
          $composer_1.s17();
          CompositionLocalProvider(tmp_0, tmp0, $composer_0, 48);
          tmp = Unit_instance;
        }
        $composer_0.s17();
      } else {
        $composer_0.r17(321050591);
        $content($this$Box, $composer_0, 8);
        $composer_0.s17();
      }
      var tmp_4;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_4 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.l22(p0, p1, p2);
    };
  }
  function Surface$lambda_3($modifier, $variant, $colorModeOverride, $contentAlignment, $ref, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Surface($modifier._v, $variant._v, $colorModeOverride._v, $contentAlignment._v, $ref._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function BackgroundColor$factory_0() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.j30();
    }, null);
  }
  function Color$factory_2() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.h30();
    }, null);
  }
  var properties_initialized_Surface_kt_k203pf;
  function _init_properties_Surface_kt__8o7unv() {
    if (!properties_initialized_Surface_kt_k203pf) {
      properties_initialized_Surface_kt_k203pf = true;
      SurfaceStyle = CssStyle(VOID, SurfaceStyle$lambda);
    }
  }
  function get_OverlayStyle() {
    _init_properties_Overlay_kt__p5agwu();
    return OverlayStyle;
  }
  var OverlayStyle;
  function OverlayVars() {
    OverlayVars_instance = this;
    this.v35_1 = StyleVariable('silk');
  }
  protoOf(OverlayVars).j30 = function () {
    return this.v35_1.i2k(this, BackgroundColor$factory_1());
  };
  var OverlayVars_instance;
  function OverlayVars_getInstance() {
    if (OverlayVars_instance == null)
      new OverlayVars();
    return OverlayVars_instance;
  }
  function OverlayStyle$lambda($this$base) {
    _init_properties_Overlay_kt__p5agwu();
    return backgroundColor(Companion_instance, OverlayVars_getInstance().j30().c2k());
  }
  function BackgroundColor$factory_1() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.j30();
    }, null);
  }
  var properties_initialized_Overlay_kt_mvmds0;
  function _init_properties_Overlay_kt__p5agwu() {
    if (!properties_initialized_Overlay_kt_mvmds0) {
      properties_initialized_Overlay_kt_mvmds0 = true;
      var tmp = Companion_instance_5;
      OverlayStyle = base(tmp, VOID, OverlayStyle$lambda);
    }
  }
  function get_PopupStyle() {
    _init_properties_Popup_kt__lluomy();
    return PopupStyle;
  }
  var PopupStyle;
  function PopupVars() {
    PopupVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = TransitionDurationVars_getInstance().u34().c2k();
    tmp.w35_1 = StyleVariable_1(tmp0_defaultFallback, 'silk');
  }
  protoOf(PopupVars).r32 = function () {
    return this.w35_1.i2k(this, TransitionDuration$factory_1());
  };
  var PopupVars_instance;
  function PopupVars_getInstance() {
    if (PopupVars_instance == null)
      new PopupVars();
    return PopupVars_instance;
  }
  function PopupStyle$lambda($this$base) {
    _init_properties_Popup_kt__lluomy();
    return transition(Companion_instance, [CSSTransition_init_$Create$('opacity', PopupVars_getInstance().r32().c2k())]);
  }
  function TransitionDuration$factory_1() {
    return getPropertyCallableRef('TransitionDuration', 1, KProperty1, function (receiver) {
      return receiver.r32();
    }, null);
  }
  var properties_initialized_Popup_kt_wwy6qs;
  function _init_properties_Popup_kt__lluomy() {
    if (!properties_initialized_Popup_kt_wwy6qs) {
      properties_initialized_Popup_kt_wwy6qs = true;
      var tmp = Companion_instance_5;
      PopupStyle = base(tmp, VOID, PopupStyle$lambda);
    }
  }
  function get_TRIANGLE_WIDTH() {
    _init_properties_Tooltip_kt__palx2n();
    return TRIANGLE_WIDTH;
  }
  var TRIANGLE_WIDTH;
  function get_TRIANGLE_WIDTH_2X() {
    _init_properties_Tooltip_kt__palx2n();
    return TRIANGLE_WIDTH_2X;
  }
  var TRIANGLE_WIDTH_2X;
  function get_TooltipStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipStyle;
  }
  var TooltipStyle;
  function get_TooltipArrowStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipArrowStyle;
  }
  var TooltipArrowStyle;
  function get_TopLeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopLeftTooltipArrowVariant;
  }
  var TopLeftTooltipArrowVariant;
  function get_TopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopTooltipArrowVariant;
  }
  var TopTooltipArrowVariant;
  function get_TopRightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return TopRightTooltipArrowVariant;
  }
  var TopRightTooltipArrowVariant;
  function get_LeftTopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftTopTooltipArrowVariant;
  }
  var LeftTopTooltipArrowVariant;
  function get_LeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftTooltipArrowVariant;
  }
  var LeftTooltipArrowVariant;
  function get_LeftBottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return LeftBottomTooltipArrowVariant;
  }
  var LeftBottomTooltipArrowVariant;
  function get_RightTopTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightTopTooltipArrowVariant;
  }
  var RightTopTooltipArrowVariant;
  function get_RightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightTooltipArrowVariant;
  }
  var RightTooltipArrowVariant;
  function get_RightBottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return RightBottomTooltipArrowVariant;
  }
  var RightBottomTooltipArrowVariant;
  function get_BottomLeftTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomLeftTooltipArrowVariant;
  }
  var BottomLeftTooltipArrowVariant;
  function get_BottomTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomTooltipArrowVariant;
  }
  var BottomTooltipArrowVariant;
  function get_BottomRightTooltipArrowVariant() {
    _init_properties_Tooltip_kt__palx2n();
    return BottomRightTooltipArrowVariant;
  }
  var BottomRightTooltipArrowVariant;
  function get_TooltipTextContainerStyle() {
    _init_properties_Tooltip_kt__palx2n();
    return TooltipTextContainerStyle;
  }
  var TooltipTextContainerStyle;
  function TooltipVars() {
    TooltipVars_instance = this;
    this.x35_1 = StyleVariable('silk');
    this.y35_1 = StyleVariable('silk');
  }
  protoOf(TooltipVars).j30 = function () {
    return this.x35_1.i2k(this, BackgroundColor$factory_2());
  };
  protoOf(TooltipVars).h30 = function () {
    return this.y35_1.i2k(this, Color$factory_3());
  };
  var TooltipVars_instance;
  function TooltipVars_getInstance() {
    if (TooltipVars_instance == null)
      new TooltipVars();
    return TooltipVars_instance;
  }
  function triangleDown(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleDown$lambda(color));
  }
  function triangleLeft(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleLeft$lambda(color));
  }
  function triangleRight(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleRight$lambda(color));
  }
  function triangleUp(_this__u8e3s4, color) {
    _init_properties_Tooltip_kt__palx2n();
    return styleModifier(_this__u8e3s4, triangleUp$lambda(color));
  }
  function TooltipStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Relative' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'relative';
    return borderRadius(color(backgroundColor(position(tmp, tmp$ret$3), TooltipVars_getInstance().j30().c2k()), TooltipVars_getInstance().h30().c2k()), get_px(6));
  }
  function TooltipArrowStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.Absolute' call
    // Inline function 'org.jetbrains.compose.web.css.Position' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = 'absolute';
    var tmp_0 = position(tmp, tmp$ret$3);
    return border(tmp_0, TooltipArrowStyle$lambda$lambda);
  }
  function TooltipArrowStyle$lambda$lambda($this$border) {
    _init_properties_Tooltip_kt__palx2n();
    $this$border.z2q(get_TRIANGLE_WIDTH());
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    $this$border.y2q('solid');
    return Unit_instance;
  }
  function TopLeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = get_TRIANGLE_WIDTH_2X();
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(margin_1(Companion_instance, tmp2_top, VOID, VOID, tmp1_left), get_px(0)), TooltipVars_getInstance().j30().c2k());
  }
  function TopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(left(margin_1(Companion_instance, tmp2_top, VOID, VOID, tmp1_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().j30().c2k());
  }
  function TopRightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_right = get_TRIANGLE_WIDTH_2X();
    var tmp2_top = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleDown(top(right(margin_1(Companion_instance, tmp2_top, tmp1_right), get_px(0)), get_px(0)), TooltipVars_getInstance().j30().c2k());
  }
  function LeftTopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_1(Companion_instance, get_TRIANGLE_WIDTH_2X(), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().j30().c2k());
  }
  function LeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(top(left(margin_1(Companion_instance, unaryMinus(get_TRIANGLE_WIDTH()), VOID, VOID, unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().j30().c2k());
  }
  function LeftBottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleLeft(bottom(left(margin_1(Companion_instance, VOID, VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().j30().c2k());
  }
  function RightTopTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_1(Companion_instance, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().j30().c2k());
  }
  function RightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleRight(top(right(margin_1(Companion_instance, unaryMinus(get_TRIANGLE_WIDTH()), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_percent(50)), TooltipVars_getInstance().j30().c2k());
  }
  function RightBottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_bottom = get_TRIANGLE_WIDTH_2X();
    var tmp2_right = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleRight(bottom(right(margin_1(Companion_instance, VOID, tmp2_right, tmp1_bottom), get_px(0)), get_px(0)), TooltipVars_getInstance().j30().c2k());
  }
  function BottomLeftTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = get_TRIANGLE_WIDTH_2X();
    var tmp2_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_1(Companion_instance, VOID, VOID, tmp2_bottom, tmp1_left), get_px(0)), get_px(0)), TooltipVars_getInstance().j30().c2k());
  }
  function BottomTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    var tmp1_left = unaryMinus(get_TRIANGLE_WIDTH());
    var tmp2_bottom = unaryMinus(get_TRIANGLE_WIDTH_2X());
    return triangleUp(bottom(left(margin_1(Companion_instance, VOID, VOID, tmp2_bottom, tmp1_left), get_percent(50)), get_px(0)), TooltipVars_getInstance().j30().c2k());
  }
  function BottomRightTooltipArrowVariant$lambda($this$addVariantBase) {
    _init_properties_Tooltip_kt__palx2n();
    return triangleUp(bottom(right(margin_1(Companion_instance, VOID, get_TRIANGLE_WIDTH_2X(), unaryMinus(get_TRIANGLE_WIDTH_2X())), get_px(0)), get_px(0)), TooltipVars_getInstance().j30().c2k());
  }
  function TooltipTextContainerStyle$lambda($this$base) {
    _init_properties_Tooltip_kt__palx2n();
    return padding(Companion_instance, get_px(5));
  }
  function triangleDown$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.w2c('border-color', 'transparent transparent ' + $color + ' transparent');
      return Unit_instance;
    };
  }
  function triangleLeft$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.w2c('border-color', 'transparent ' + $color + ' transparent transparent');
      return Unit_instance;
    };
  }
  function triangleRight$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.w2c('border-color', 'transparent transparent transparent ' + $color);
      return Unit_instance;
    };
  }
  function triangleUp$lambda($color) {
    return function ($this$styleModifier) {
      $this$styleModifier.w2c('border-color', '' + $color + ' transparent transparent transparent');
      return Unit_instance;
    };
  }
  function BackgroundColor$factory_2() {
    return getPropertyCallableRef('BackgroundColor', 1, KProperty1, function (receiver) {
      return receiver.j30();
    }, null);
  }
  function Color$factory_3() {
    return getPropertyCallableRef('Color', 1, KProperty1, function (receiver) {
      return receiver.h30();
    }, null);
  }
  var properties_initialized_Tooltip_kt_68t07n;
  function _init_properties_Tooltip_kt__palx2n() {
    if (!properties_initialized_Tooltip_kt_68t07n) {
      properties_initialized_Tooltip_kt_68t07n = true;
      TRIANGLE_WIDTH = get_px(5);
      TRIANGLE_WIDTH_2X = get_px(9);
      var tmp = Companion_instance_5;
      TooltipStyle = base(tmp, VOID, TooltipStyle$lambda);
      var tmp_0 = Companion_instance_5;
      TooltipArrowStyle = base(tmp_0, VOID, TooltipArrowStyle$lambda);
      var tmp_1 = get_TooltipArrowStyle();
      TopLeftTooltipArrowVariant = addVariantBase(tmp_1, VOID, TopLeftTooltipArrowVariant$lambda);
      var tmp_2 = get_TooltipArrowStyle();
      TopTooltipArrowVariant = addVariantBase(tmp_2, VOID, TopTooltipArrowVariant$lambda);
      var tmp_3 = get_TooltipArrowStyle();
      TopRightTooltipArrowVariant = addVariantBase(tmp_3, VOID, TopRightTooltipArrowVariant$lambda);
      var tmp_4 = get_TooltipArrowStyle();
      LeftTopTooltipArrowVariant = addVariantBase(tmp_4, VOID, LeftTopTooltipArrowVariant$lambda);
      var tmp_5 = get_TooltipArrowStyle();
      LeftTooltipArrowVariant = addVariantBase(tmp_5, VOID, LeftTooltipArrowVariant$lambda);
      var tmp_6 = get_TooltipArrowStyle();
      LeftBottomTooltipArrowVariant = addVariantBase(tmp_6, VOID, LeftBottomTooltipArrowVariant$lambda);
      var tmp_7 = get_TooltipArrowStyle();
      RightTopTooltipArrowVariant = addVariantBase(tmp_7, VOID, RightTopTooltipArrowVariant$lambda);
      var tmp_8 = get_TooltipArrowStyle();
      RightTooltipArrowVariant = addVariantBase(tmp_8, VOID, RightTooltipArrowVariant$lambda);
      var tmp_9 = get_TooltipArrowStyle();
      RightBottomTooltipArrowVariant = addVariantBase(tmp_9, VOID, RightBottomTooltipArrowVariant$lambda);
      var tmp_10 = get_TooltipArrowStyle();
      BottomLeftTooltipArrowVariant = addVariantBase(tmp_10, VOID, BottomLeftTooltipArrowVariant$lambda);
      var tmp_11 = get_TooltipArrowStyle();
      BottomTooltipArrowVariant = addVariantBase(tmp_11, VOID, BottomTooltipArrowVariant$lambda);
      var tmp_12 = get_TooltipArrowStyle();
      BottomRightTooltipArrowVariant = addVariantBase(tmp_12, VOID, BottomRightTooltipArrowVariant$lambda);
      var tmp_13 = Companion_instance_5;
      TooltipTextContainerStyle = base(tmp_13, VOID, TooltipTextContainerStyle$lambda);
    }
  }
  function get_SilkColorsStyle() {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    return SilkColorsStyle;
  }
  var SilkColorsStyle;
  function initSilkWidgets(ctx) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var mutableTheme = ctx.u2r_1;
    // Inline function 'kotlin.apply' call
    var this_0 = ctx.u2r_1.w2s_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgets.<anonymous>' call
    var focusOutline = Blue_getInstance().c2y_1.e2q().d2q(VOID, VOID, VOID, 0.5);
    var placeholder = Gray_getInstance().m2y_1;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var color = Colors_instance.i2q();
    set_background(this_0.r2y_1, Colors_instance.u2q());
    set_color(this_0.r2y_1, color);
    set_border(this_0.r2y_1, color.d2q(VOID, VOID, VOID, 0.2));
    set_focusOutline(this_0.r2y_1, focusOutline);
    set_overlay(this_0.r2y_1, color.d2q(VOID, VOID, VOID, 0.5));
    set_placeholder(this_0.r2y_1, placeholder);
    var buttonBase = Colors_instance.u2q().a2q(0.2);
    get_button_0(this_0.r2y_1).f36(buttonBase, buttonBase.a2q(0.2), Colors_instance.k2q(), buttonBase.a2q(0.4));
    get_checkbox_0(this_0.r2y_1).l36(Blue_getInstance().c2y_1, Blue_getInstance().d2y_1, Colors_instance.u2q());
    var inputFilled = Gray_getInstance().j2y_1;
    var tmp0_$this = get_input_0(this_0.r2y_1);
    var tmp1_filledFocus = Colors_instance.h2q();
    var tmp2_hoveredBorder = Gray_getInstance().m2y_1;
    var tmp3_invalidBorder = Red_getInstance().w2x_1;
    var tmp4_filledHover = inputFilled.a2q(0.1);
    tmp0_$this.t36(tmp2_hoveredBorder, tmp3_invalidBorder, inputFilled, tmp4_filledHover, tmp1_filledFocus);
    var tmp5_$this = get_switch_0(this_0.r2y_1);
    var tmp6_thumb = Colors_instance.u2q();
    var tmp7_backgroundOn = Colors_instance.o2q();
    var tmp8_backgroundOff = Colors_instance.p2q();
    tmp5_$this.l36(tmp7_backgroundOn, tmp8_backgroundOff, tmp6_thumb);
    get_tab_0(this_0.r2y_1).j37(Colors_instance.i2q(), Colors_instance.u2q(), Colors_instance.k2q(), VOID, VOID, Colors_instance.p2q(), Colors_instance.v2q(), Colors_instance.u2q());
    get_tooltip_0(this_0.r2y_1).o37(get_color_0(this_0.r2y_1), get_background_0(this_0.r2y_1));
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    var color_0 = Colors_instance.u2q();
    set_background(this_0.s2y_1, Colors_instance.i2q());
    set_color(this_0.s2y_1, color_0);
    set_border(this_0.s2y_1, color_0.d2q(VOID, VOID, VOID, 0.2));
    set_focusOutline(this_0.s2y_1, focusOutline);
    set_overlay(this_0.s2y_1, color_0.d2q(VOID, VOID, VOID, 0.5));
    set_placeholder(this_0.s2y_1, placeholder);
    var buttonBase_0 = lightened(Colors_instance.i2q(), 0.2);
    get_button_0(this_0.s2y_1).f36(buttonBase_0, lightened(buttonBase_0, 0.2), Colors_instance.q2q(), lightened(buttonBase_0, 0.4));
    get_checkbox_0(this_0.s2y_1).l36(Blue_getInstance().z2x_1, Blue_getInstance().a2y_1, Colors_instance.i2q());
    var inputFilled_0 = Gray_getInstance().q2y_1;
    var tmp0_$this_0 = get_input_0(this_0.s2y_1);
    var tmp1_filledFocus_0 = Colors_instance.h2q();
    var tmp2_hoveredBorder_0 = Gray_getInstance().n2y_1;
    var tmp3_invalidBorder_0 = Red_getInstance().q2x_1;
    var tmp4_filledHover_0 = lightened(inputFilled_0, 0.1);
    tmp0_$this_0.t36(tmp2_hoveredBorder_0, tmp3_invalidBorder_0, inputFilled_0, tmp4_filledHover_0, tmp1_filledFocus_0);
    var tmp5_$this_0 = get_switch_0(this_0.s2y_1);
    var tmp6_thumb_0 = Colors_instance.u2q();
    var tmp7_backgroundOn_0 = Colors_instance.q2q();
    var tmp8_backgroundOff_0 = Colors_instance.m2q();
    tmp5_$this_0.l36(tmp7_backgroundOn_0, tmp8_backgroundOff_0, tmp6_thumb_0);
    get_tab_0(this_0.s2y_1).j37(Colors_instance.u2q(), Colors_instance.i2q(), Colors_instance.q2q(), VOID, VOID, Colors_instance.n2q(), Colors_instance.m2q(), Colors_instance.i2q());
    get_tooltip_0(this_0.s2y_1).o37(get_color_0(this_0.s2y_1), get_background_0(this_0.s2y_1));
    mutableTheme.z2s('silk-colors', get_SilkColorsStyle());
    mutableTheme.y2s('silk-input', get_InputStyle());
    mutableTheme.c2x('-outlined', get_OutlinedInputVariant());
    mutableTheme.c2x('-filled', get_FilledInputVariant());
    mutableTheme.c2x('-flushed', get_FlushedInputVariant());
    mutableTheme.c2x('-unstyled', get_UnstyledInputVariant());
    mutableTheme.y2s('silk-input-group', get_InputGroupStyle());
    mutableTheme.z2s('silk-disabled', get_DisabledStyle());
    mutableTheme.z2s('silk-smooth-color', get_SmoothColorStyle());
    mutableTheme.y2s('silk-button', get_ButtonStyle());
    mutableTheme.y2s('silk-canvas', get_CanvasStyle());
    mutableTheme.y2s('silk-checkbox', get_CheckboxStyle());
    mutableTheme.c2x('-checkbox', get_CheckboxInputVariant());
    mutableTheme.y2s('silk-checkbox-icon-container', get_CheckboxIconContainerStyle());
    mutableTheme.y2s('silk-checkbox-icon', get_CheckboxIconStyle());
    mutableTheme.c2x('-checked', get_CheckedCheckboxIconContainerVariant());
    mutableTheme.c2x('-unchecked', get_UncheckedCheckboxIconContainerVariant());
    mutableTheme.y2s('silk-overlay', get_OverlayStyle());
    mutableTheme.y2s('silk-popup', get_PopupStyle());
    mutableTheme.y2s('silk-simple-grid', get_SimpleGridStyle());
    mutableTheme.y2s('silk-surface', get_SurfaceStyle());
    mutableTheme.y2s('silk-horizontal-divider', get_HorizontalDividerStyle());
    mutableTheme.y2s('silk-vertical-divider', get_VerticalDividerStyle());
    mutableTheme.y2s('silk-switch', get_SwitchStyle());
    mutableTheme.y2s('silk-switch-track', get_SwitchTrackStyle());
    mutableTheme.y2s('silk-switch-thumb', get_SwitchThumbStyle());
    mutableTheme.c2x('-switch', get_SwitchInputVariant());
    mutableTheme.y2s('silk-tabs', get_TabsStyle());
    mutableTheme.y2s('silk-tabs-tab-row', get_TabsTabRowStyle());
    mutableTheme.y2s('silk-tabs-tab', get_TabsTabStyle());
    mutableTheme.y2s('silk-tabs-panel', get_TabsPanelStyle());
    mutableTheme.y2s('silk-tooltip-arrow', get_TooltipArrowStyle());
    mutableTheme.c2x('-top-left', get_TopLeftTooltipArrowVariant());
    mutableTheme.c2x('-top', get_TopTooltipArrowVariant());
    mutableTheme.c2x('-top-right', get_TopRightTooltipArrowVariant());
    mutableTheme.c2x('-left-top', get_LeftTopTooltipArrowVariant());
    mutableTheme.c2x('-left', get_LeftTooltipArrowVariant());
    mutableTheme.c2x('-left-bottom', get_LeftBottomTooltipArrowVariant());
    mutableTheme.c2x('-right-top', get_RightTopTooltipArrowVariant());
    mutableTheme.c2x('-right', get_RightTooltipArrowVariant());
    mutableTheme.c2x('-right-bottom', get_RightBottomTooltipArrowVariant());
    mutableTheme.c2x('-bottom-left', get_BottomLeftTooltipArrowVariant());
    mutableTheme.c2x('-bottom', get_BottomTooltipArrowVariant());
    mutableTheme.c2x('-bottom-right', get_BottomRightTooltipArrowVariant());
    mutableTheme.y2s('silk-tooltip', get_TooltipStyle());
    mutableTheme.y2s('silk-tooltip-text', get_TooltipTextContainerStyle());
    mutableTheme.d2x('silk-checkbox-enabled', get_CheckboxEnabledAnim());
    mutableTheme.v2w('silk-button-size_xs', Companion_getInstance_0().f31_1);
    mutableTheme.v2w('silk-button-size_sm', Companion_getInstance_0().g31_1);
    mutableTheme.v2w('silk-button-size_md', Companion_getInstance_0().h31_1);
    mutableTheme.v2w('silk-button-size_lg', Companion_getInstance_0().i31_1);
    mutableTheme.v2w('silk-checkbox-size_sm', Companion_getInstance_1().s32_1);
    mutableTheme.v2w('silk-checkbox-size_md', Companion_getInstance_1().t32_1);
    mutableTheme.v2w('silk-checkbox-size_lg', Companion_getInstance_1().u32_1);
    mutableTheme.v2w('silk-input-size_xs', Companion_getInstance_2().b34_1);
    mutableTheme.v2w('silk-input-size_sm', Companion_getInstance_2().c34_1);
    mutableTheme.v2w('silk-input-size_md', Companion_getInstance_2().d34_1);
    mutableTheme.v2w('silk-input-size_lg', Companion_getInstance_2().e34_1);
    mutableTheme.v2w('silk-switch-size_sm', Companion_getInstance_3().c35_1);
    mutableTheme.v2w('silk-switch-size_md', Companion_getInstance_3().d35_1);
    mutableTheme.v2w('silk-switch-size_lg', Companion_getInstance_3().e35_1);
  }
  function setSilkWidgetVariables(_this__u8e3s4, colorMode) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.init.setSilkWidgetVariables.<anonymous>' call
    var silkColorsStyleName = get_SilkTheme().e2x(get_SilkColorsStyle());
    removeClass(_this__u8e3s4, [suffixedWith(silkColorsStyleName, colorMode.a2w())]);
    addClass(_this__u8e3s4, [suffixedWith(silkColorsStyleName, colorMode)]);
  }
  function setSilkWidgetVariables_0(_this__u8e3s4, $composer, $changed) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j19(-938405995);
    if (isTraceInProgress()) {
      traceEventStart(-938405995, $changed, -1, 'com.varabyte.kobweb.silk.init.setSilkWidgetVariables (InitSilkWidgets.kt:328)');
    }
    $composer_0.r17(263028585);
    // Inline function 'androidx.compose.runtime.cache' call
    var this_0 = $composer_0;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var it = this_0.v18();
    var tmp;
    if (false ? true : it === Companion_getInstance().j12_1) {
      // Inline function 'com.varabyte.kobweb.silk.init.setSilkWidgetVariables.<anonymous>' call
      var tmp_0 = _this__u8e3s4.getElementById('root');
      var value = tmp_0 instanceof HTMLElement ? tmp_0 : THROW_CCE();
      this_0.b19(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var tmp_1 = tmp;
    var tmp0_group = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
    $composer_0.s17();
    var root = tmp0_group;
    setSilkWidgetVariables_1(root, $composer_0, 8);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.k19();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.h1e(setSilkWidgetVariables$lambda(_this__u8e3s4, $changed));
    }
  }
  function setSilkWidgetVariables_1(_this__u8e3s4, $composer, $changed) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j19(1180012187);
    if (isTraceInProgress()) {
      traceEventStart(1180012187, $changed, -1, 'com.varabyte.kobweb.silk.init.setSilkWidgetVariables (InitSilkWidgets.kt:334)');
    }
    setSilkWidgetVariables(_this__u8e3s4, Companion_instance_13.x2v($composer_0, 8));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp0_safe_receiver = $composer_0.k19();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.h1e(setSilkWidgetVariables$lambda_0(_this__u8e3s4, $changed));
    }
  }
  function SilkColorsStyle$lambda($this$base) {
    _init_properties_InitSilkWidgets_kt__62z9ag();
    var palette = toPalette($this$base.t2v_1);
    return setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(setVariable(Companion_instance, get_BackgroundColorVar(), get_background(palette)), get_ColorVar(), get_color(palette)), get_BorderColorVar(), get_border(palette)), get_FocusOutlineColorVar(), get_focusOutline(palette)), get_PlaceholderColorVar(), get_placeholder_0(palette)), ButtonVars_getInstance().y30(), get_button(palette).p37()), ButtonVars_getInstance().a31(), get_button(palette).d2e()), ButtonVars_getInstance().b31(), get_button(palette).q37()), CheckboxVars_getInstance().p32(), get_checkbox(palette).r37()), CheckboxVars_getInstance().q32(), get_checkbox(palette).d2e()), CheckboxVars_getInstance().o32(), get_checkbox(palette).s37()), InputVars_getInstance().m33(), get_input(palette).t37()), InputVars_getInstance().n33(), get_input(palette).u37()), InputVars_getInstance().o33(), get_input(palette).v37()), InputVars_getInstance().p33(), get_input(palette).w37()), InputVars_getInstance().q33(), get_input(palette).x37()), OverlayVars_getInstance().j30(), get_overlay(palette)), SwitchVars_getInstance().b35(), get_switch(palette).y37()), TabVars_getInstance().h30(), get_tab(palette).s37()), TabVars_getInstance().j30(), get_tab(palette).r37()), TabVars_getInstance().k30(), get_tab(palette).z37()), TabVars_getInstance().l30(), get_tab(palette).d2e()), TabVars_getInstance().m30(), get_tab(palette).q37()), TooltipVars_getInstance().j30(), get_tooltip(palette).r37()), TooltipVars_getInstance().h30(), get_tooltip(palette).s37());
  }
  function setSilkWidgetVariables$lambda($this_setSilkWidgetVariables, $$changed) {
    return function ($composer, $force) {
      setSilkWidgetVariables_0($this_setSilkWidgetVariables, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function setSilkWidgetVariables$lambda_0($this_setSilkWidgetVariables, $$changed) {
    return function ($composer, $force) {
      setSilkWidgetVariables_1($this_setSilkWidgetVariables, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_InitSilkWidgets_kt_dse0va;
  function _init_properties_InitSilkWidgets_kt__62z9ag() {
    if (!properties_initialized_InitSilkWidgets_kt_dse0va) {
      properties_initialized_InitSilkWidgets_kt_dse0va = true;
      var tmp = Companion_instance_5;
      SilkColorsStyle = base_0(tmp, VOID, SilkColorsStyle$lambda);
    }
  }
  function get_DisabledStyle() {
    _init_properties_CommonStyles_kt__a7wisz();
    return DisabledStyle;
  }
  var DisabledStyle;
  function get_SmoothColorTransitionDurationVar() {
    _init_properties_CommonStyles_kt__a7wisz();
    return SmoothColorTransitionDurationVar$delegate.i2k(null, SmoothColorTransitionDurationVar$factory());
  }
  var SmoothColorTransitionDurationVar$delegate;
  function get_SmoothColorStyle() {
    _init_properties_CommonStyles_kt__a7wisz();
    return SmoothColorStyle;
  }
  var SmoothColorStyle;
  function DisabledStyle$lambda($composer, $changed) {
    _init_properties_CommonStyles_kt__a7wisz();
    var $composer_0 = $composer;
    $composer_0.r17(812442038);
    if (isTraceInProgress()) {
      traceEventStart(812442038, $changed, -1, 'com.varabyte.kobweb.silk.style.common.DisabledStyle.<anonymous> (CommonStyles.kt:16)');
    }
    var tmp0 = tabIndex(ariaDisabled(Companion_instance), -1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.s17();
    return tmp0;
  }
  function DisabledStyle$lambda_0($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return cursor(opacity(Companion_instance, 0.5), Companion_instance_1.c2i());
  }
  function SmoothColorStyle$lambda($this$base) {
    _init_properties_CommonStyles_kt__a7wisz();
    return transition(Companion_instance, [CSSTransition_init_$Create$('background-color', get_SmoothColorTransitionDurationVar().c2k())]);
  }
  function SmoothColorTransitionDurationVar$factory() {
    return getPropertyCallableRef('SmoothColorTransitionDurationVar', 0, KProperty0, function () {
      return get_SmoothColorTransitionDurationVar();
    }, null);
  }
  var properties_initialized_CommonStyles_kt_zd2b1t;
  function _init_properties_CommonStyles_kt__a7wisz() {
    if (!properties_initialized_CommonStyles_kt_zd2b1t) {
      properties_initialized_CommonStyles_kt_zd2b1t = true;
      var tmp = Companion_instance_5;
      var tmp_0 = DisabledStyle$lambda;
      DisabledStyle = base_1(tmp, tmp_0, DisabledStyle$lambda_0);
      var tmp0_defaultFallback = TransitionDurationVars_getInstance().g30().c2k();
      SmoothColorTransitionDurationVar$delegate = StyleVariable_1(tmp0_defaultFallback, 'silk');
      var tmp_1 = Companion_instance_5;
      SmoothColorStyle = base_0(tmp_1, VOID, SmoothColorStyle$lambda);
    }
  }
  function TransitionDurationVars() {
    TransitionDurationVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_ms(0);
    tmp.y2z_1 = StyleVariable_1(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_ms(50);
    tmp_0.z2z_1 = StyleVariable_1(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_ms(100);
    tmp_1.a30_1 = StyleVariable_1(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_ms(150);
    tmp_2.b30_1 = StyleVariable_1(tmp0_defaultFallback_2, 'silk');
    var tmp_3 = this;
    var tmp0_defaultFallback_3 = get_ms(200);
    tmp_3.c30_1 = StyleVariable_1(tmp0_defaultFallback_3, 'silk');
    var tmp_4 = this;
    var tmp0_defaultFallback_4 = get_ms(300);
    tmp_4.d30_1 = StyleVariable_1(tmp0_defaultFallback_4, 'silk');
    var tmp_5 = this;
    var tmp0_defaultFallback_5 = get_ms(400);
    tmp_5.e30_1 = StyleVariable_1(tmp0_defaultFallback_5, 'silk');
    var tmp_6 = this;
    var tmp0_defaultFallback_6 = get_ms(500);
    tmp_6.f30_1 = StyleVariable_1(tmp0_defaultFallback_6, 'silk');
  }
  protoOf(TransitionDurationVars).f32 = function () {
    return this.a30_1.i2k(this, VeryFast$factory());
  };
  protoOf(TransitionDurationVars).u34 = function () {
    return this.b30_1.i2k(this, Fast$factory());
  };
  protoOf(TransitionDurationVars).g30 = function () {
    return this.c30_1.i2k(this, Normal$factory());
  };
  var TransitionDurationVars_instance;
  function TransitionDurationVars_getInstance() {
    if (TransitionDurationVars_instance == null)
      new TransitionDurationVars();
    return TransitionDurationVars_instance;
  }
  function VeryFast$factory() {
    return getPropertyCallableRef('VeryFast', 1, KProperty1, function (receiver) {
      return receiver.f32();
    }, null);
  }
  function Fast$factory() {
    return getPropertyCallableRef('Fast', 1, KProperty1, function (receiver) {
      return receiver.u34();
    }, null);
  }
  function Normal$factory() {
    return getPropertyCallableRef('Normal', 1, KProperty1, function (receiver) {
      return receiver.g30();
    }, null);
  }
  function get_BackgroundColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return BackgroundColorVar$delegate.i2k(null, BackgroundColorVar$factory());
  }
  var BackgroundColorVar$delegate;
  function get_ColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return ColorVar$delegate.i2k(null, ColorVar$factory());
  }
  var ColorVar$delegate;
  function get_BorderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return BorderColorVar$delegate.i2k(null, BorderColorVar$factory());
  }
  var BorderColorVar$delegate;
  function get_FocusOutlineColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return FocusOutlineColorVar$delegate.i2k(null, FocusOutlineColorVar$factory());
  }
  var FocusOutlineColorVar$delegate;
  function get_PlaceholderOpacityVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return PlaceholderOpacityVar$delegate.i2k(null, PlaceholderOpacityVar$factory());
  }
  var PlaceholderOpacityVar$delegate;
  function get_PlaceholderColorVar() {
    _init_properties_ColorVars_kt__w8x7ib();
    return PlaceholderColorVar$delegate.i2k(null, PlaceholderColorVar$factory());
  }
  var PlaceholderColorVar$delegate;
  function BackgroundColorVar$factory() {
    return getPropertyCallableRef('BackgroundColorVar', 0, KProperty0, function () {
      return get_BackgroundColorVar();
    }, null);
  }
  function ColorVar$factory() {
    return getPropertyCallableRef('ColorVar', 0, KProperty0, function () {
      return get_ColorVar();
    }, null);
  }
  function BorderColorVar$factory() {
    return getPropertyCallableRef('BorderColorVar', 0, KProperty0, function () {
      return get_BorderColorVar();
    }, null);
  }
  function FocusOutlineColorVar$factory() {
    return getPropertyCallableRef('FocusOutlineColorVar', 0, KProperty0, function () {
      return get_FocusOutlineColorVar();
    }, null);
  }
  function PlaceholderOpacityVar$factory() {
    return getPropertyCallableRef('PlaceholderOpacityVar', 0, KProperty0, function () {
      return get_PlaceholderOpacityVar();
    }, null);
  }
  function PlaceholderColorVar$factory() {
    return getPropertyCallableRef('PlaceholderColorVar', 0, KProperty0, function () {
      return get_PlaceholderColorVar();
    }, null);
  }
  var properties_initialized_ColorVars_kt_3y5hvl;
  function _init_properties_ColorVars_kt__w8x7ib() {
    if (!properties_initialized_ColorVars_kt_3y5hvl) {
      properties_initialized_ColorVars_kt_3y5hvl = true;
      BackgroundColorVar$delegate = StyleVariable('silk');
      ColorVar$delegate = StyleVariable('silk');
      BorderColorVar$delegate = StyleVariable('silk');
      FocusOutlineColorVar$delegate = StyleVariable('silk');
      PlaceholderOpacityVar$delegate = StyleVariable_2(1.0, 'silk');
      PlaceholderColorVar$delegate = StyleVariable('silk');
    }
  }
  function FontSizeVars() {
    FontSizeVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_cssRem(0.75);
    tmp.j31_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.875);
    tmp_0.k31_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(1);
    tmp_1.l31_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(1.125);
    tmp_2.m31_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
  }
  protoOf(FontSizeVars).n31 = function () {
    return this.j31_1.i2k(this, XS$factory());
  };
  protoOf(FontSizeVars).o31 = function () {
    return this.k31_1.i2k(this, SM$factory());
  };
  protoOf(FontSizeVars).p31 = function () {
    return this.l31_1.i2k(this, MD$factory());
  };
  protoOf(FontSizeVars).q31 = function () {
    return this.m31_1.i2k(this, LG$factory());
  };
  var FontSizeVars_instance;
  function FontSizeVars_getInstance() {
    if (FontSizeVars_instance == null)
      new FontSizeVars();
    return FontSizeVars_instance;
  }
  function BorderRadiusVars() {
    BorderRadiusVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_cssRem(0.125);
    tmp.f34_1 = StyleVariable_0(tmp0_defaultFallback, 'silk');
    var tmp_0 = this;
    var tmp0_defaultFallback_0 = get_cssRem(0.25);
    tmp_0.g34_1 = StyleVariable_0(tmp0_defaultFallback_0, 'silk');
    var tmp_1 = this;
    var tmp0_defaultFallback_1 = get_cssRem(0.375);
    tmp_1.h34_1 = StyleVariable_0(tmp0_defaultFallback_1, 'silk');
    var tmp_2 = this;
    var tmp0_defaultFallback_2 = get_cssRem(0.5);
    tmp_2.i34_1 = StyleVariable_0(tmp0_defaultFallback_2, 'silk');
  }
  protoOf(BorderRadiusVars).n31 = function () {
    return this.f34_1.i2k(this, XS$factory_0());
  };
  protoOf(BorderRadiusVars).o31 = function () {
    return this.g34_1.i2k(this, SM$factory_0());
  };
  protoOf(BorderRadiusVars).p31 = function () {
    return this.h34_1.i2k(this, MD$factory_0());
  };
  var BorderRadiusVars_instance;
  function BorderRadiusVars_getInstance() {
    if (BorderRadiusVars_instance == null)
      new BorderRadiusVars();
    return BorderRadiusVars_instance;
  }
  function XS$factory() {
    return getPropertyCallableRef('XS', 1, KProperty1, function (receiver) {
      return receiver.n31();
    }, null);
  }
  function SM$factory() {
    return getPropertyCallableRef('SM', 1, KProperty1, function (receiver) {
      return receiver.o31();
    }, null);
  }
  function MD$factory() {
    return getPropertyCallableRef('MD', 1, KProperty1, function (receiver) {
      return receiver.p31();
    }, null);
  }
  function LG$factory() {
    return getPropertyCallableRef('LG', 1, KProperty1, function (receiver) {
      return receiver.q31();
    }, null);
  }
  function XS$factory_0() {
    return getPropertyCallableRef('XS', 1, KProperty1, function (receiver) {
      return receiver.n31();
    }, null);
  }
  function SM$factory_0() {
    return getPropertyCallableRef('SM', 1, KProperty1, function (receiver) {
      return receiver.o31();
    }, null);
  }
  function MD$factory_0() {
    return getPropertyCallableRef('MD', 1, KProperty1, function (receiver) {
      return receiver.p31();
    }, null);
  }
  function MutableButton(palette) {
    ColorGroup.call(this, palette, 'button');
    this.b36_1 = this.e2z();
    this.c36_1 = this.e2z();
    this.d36_1 = this.e2z();
    this.e36_1 = this.e2z();
  }
  protoOf(MutableButton).a38 = function (_set____db54di) {
    return this.b36_1.b2z(this, default$factory(), _set____db54di);
  };
  protoOf(MutableButton).p37 = function () {
    return this.b36_1.i2k(this, default$factory_0());
  };
  protoOf(MutableButton).b38 = function (_set____db54di) {
    return this.c36_1.b2z(this, hover$factory(), _set____db54di);
  };
  protoOf(MutableButton).d2e = function () {
    return this.c36_1.i2k(this, hover$factory_0());
  };
  protoOf(MutableButton).c38 = function (_set____db54di) {
    return this.d36_1.b2z(this, focus$factory(), _set____db54di);
  };
  protoOf(MutableButton).d38 = function () {
    return this.d36_1.i2k(this, focus$factory_0());
  };
  protoOf(MutableButton).e38 = function (_set____db54di) {
    return this.e36_1.b2z(this, pressed$factory(), _set____db54di);
  };
  protoOf(MutableButton).q37 = function () {
    return this.e36_1.i2k(this, pressed$factory_0());
  };
  protoOf(MutableButton).f36 = function (default_0, hover, focus, pressed) {
    this.a38(default_0);
    this.b38(hover);
    this.c38(focus);
    this.e38(pressed);
  };
  function MutableCheckbox(palette) {
    ColorGroup.call(this, palette, 'checkbox');
    this.i36_1 = this.e2z();
    this.j36_1 = this.e2z();
    this.k36_1 = this.e2z();
  }
  protoOf(MutableCheckbox).f38 = function (_set____db54di) {
    return this.i36_1.b2z(this, background$factory(), _set____db54di);
  };
  protoOf(MutableCheckbox).r37 = function () {
    return this.i36_1.i2k(this, background$factory_0());
  };
  protoOf(MutableCheckbox).b38 = function (_set____db54di) {
    return this.j36_1.b2z(this, hover$factory_1(), _set____db54di);
  };
  protoOf(MutableCheckbox).d2e = function () {
    return this.j36_1.i2k(this, hover$factory_2());
  };
  protoOf(MutableCheckbox).g38 = function (_set____db54di) {
    return this.k36_1.b2z(this, color$factory(), _set____db54di);
  };
  protoOf(MutableCheckbox).s37 = function () {
    return this.k36_1.i2k(this, color$factory_0());
  };
  protoOf(MutableCheckbox).l36 = function (background, hover, color) {
    this.f38(background);
    this.b38(hover);
    this.g38(color);
  };
  function MutableInput(palette) {
    ColorGroup.call(this, palette, 'input');
    this.o36_1 = this.e2z();
    this.p36_1 = this.e2z();
    this.q36_1 = this.e2z();
    this.r36_1 = this.e2z();
    this.s36_1 = this.e2z();
  }
  protoOf(MutableInput).h38 = function (_set____db54di) {
    return this.o36_1.b2z(this, hoveredBorder$factory(), _set____db54di);
  };
  protoOf(MutableInput).t37 = function () {
    return this.o36_1.i2k(this, hoveredBorder$factory_0());
  };
  protoOf(MutableInput).i38 = function (_set____db54di) {
    return this.p36_1.b2z(this, invalidBorder$factory(), _set____db54di);
  };
  protoOf(MutableInput).u37 = function () {
    return this.p36_1.i2k(this, invalidBorder$factory_0());
  };
  protoOf(MutableInput).j38 = function (_set____db54di) {
    return this.q36_1.b2z(this, filled$factory(), _set____db54di);
  };
  protoOf(MutableInput).v37 = function () {
    return this.q36_1.i2k(this, filled$factory_0());
  };
  protoOf(MutableInput).k38 = function (_set____db54di) {
    return this.r36_1.b2z(this, filledHover$factory(), _set____db54di);
  };
  protoOf(MutableInput).w37 = function () {
    return this.r36_1.i2k(this, filledHover$factory_0());
  };
  protoOf(MutableInput).l38 = function (_set____db54di) {
    return this.s36_1.b2z(this, filledFocus$factory(), _set____db54di);
  };
  protoOf(MutableInput).x37 = function () {
    return this.s36_1.i2k(this, filledFocus$factory_0());
  };
  protoOf(MutableInput).t36 = function (hoveredBorder, invalidBorder, filled, filledHover, filledFocus) {
    this.h38(hoveredBorder);
    this.i38(invalidBorder);
    this.j38(filled);
    this.k38(filledHover);
    this.l38(filledFocus);
  };
  function MutableSwitch(palette) {
    ColorGroup.call(this, palette, 'switch');
    this.w36_1 = this.e2z();
    this.x36_1 = this.e2z();
    this.y36_1 = this.e2z();
  }
  protoOf(MutableSwitch).m38 = function (_set____db54di) {
    return this.w36_1.b2z(this, backgroundOn$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).n38 = function () {
    return this.w36_1.i2k(this, backgroundOn$factory_0());
  };
  protoOf(MutableSwitch).o38 = function (_set____db54di) {
    return this.x36_1.b2z(this, backgroundOff$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).p38 = function () {
    return this.x36_1.i2k(this, backgroundOff$factory_0());
  };
  protoOf(MutableSwitch).q38 = function (_set____db54di) {
    return this.y36_1.b2z(this, thumb$factory(), _set____db54di);
  };
  protoOf(MutableSwitch).y37 = function () {
    return this.y36_1.i2k(this, thumb$factory_0());
  };
  protoOf(MutableSwitch).l36 = function (backgroundOn, backgroundOff, thumb) {
    this.m38(backgroundOn);
    this.o38(backgroundOff);
    this.q38(thumb);
  };
  function MutableTab(palette) {
    ColorGroup.call(this, palette, 'tab');
    this.b37_1 = this.e2z();
    this.c37_1 = this.e2z();
    this.d37_1 = this.e2z();
    this.e37_1 = this.e2z();
    this.f37_1 = this.e2z();
    this.g37_1 = this.e2z();
    this.h37_1 = this.e2z();
    this.i37_1 = this.e2z();
  }
  protoOf(MutableTab).g38 = function (_set____db54di) {
    return this.b37_1.b2z(this, color$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).s37 = function () {
    return this.b37_1.i2k(this, color$factory_2());
  };
  protoOf(MutableTab).f38 = function (_set____db54di) {
    return this.c37_1.b2z(this, background$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).r37 = function () {
    return this.c37_1.i2k(this, background$factory_2());
  };
  protoOf(MutableTab).r38 = function (_set____db54di) {
    return this.d37_1.b2z(this, selectedColor$factory(), _set____db54di);
  };
  protoOf(MutableTab).s38 = function () {
    return this.d37_1.i2k(this, selectedColor$factory_0());
  };
  protoOf(MutableTab).t38 = function (_set____db54di) {
    return this.e37_1.b2z(this, selectedBackground$factory(), _set____db54di);
  };
  protoOf(MutableTab).u38 = function () {
    return this.e37_1.i2k(this, selectedBackground$factory_0());
  };
  protoOf(MutableTab).v38 = function (_set____db54di) {
    return this.f37_1.b2z(this, selectedBorder$factory(), _set____db54di);
  };
  protoOf(MutableTab).w38 = function () {
    return this.f37_1.i2k(this, selectedBorder$factory_0());
  };
  protoOf(MutableTab).b38 = function (_set____db54di) {
    return this.g37_1.b2z(this, hover$factory_3(), _set____db54di);
  };
  protoOf(MutableTab).d2e = function () {
    return this.g37_1.i2k(this, hover$factory_4());
  };
  protoOf(MutableTab).e38 = function (_set____db54di) {
    return this.h37_1.b2z(this, pressed$factory_1(), _set____db54di);
  };
  protoOf(MutableTab).q37 = function () {
    return this.h37_1.i2k(this, pressed$factory_2());
  };
  protoOf(MutableTab).x38 = function (_set____db54di) {
    return this.i37_1.b2z(this, disabled$factory(), _set____db54di);
  };
  protoOf(MutableTab).z37 = function () {
    return this.i37_1.i2k(this, disabled$factory_0());
  };
  protoOf(MutableTab).y38 = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled) {
    this.g38(color);
    this.f38(background);
    this.r38(selectedColor);
    this.t38(selectedBackground);
    this.v38(selectedBorder);
    this.b38(hover);
    this.e38(pressed);
    this.x38(disabled);
  };
  protoOf(MutableTab).j37 = function (color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled, $super) {
    selectedBackground = selectedBackground === VOID ? background : selectedBackground;
    selectedBorder = selectedBorder === VOID ? selectedColor : selectedBorder;
    var tmp;
    if ($super === VOID) {
      this.y38(color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
      tmp = Unit_instance;
    } else {
      tmp = $super.y38.call(this, color, background, selectedColor, selectedBackground, selectedBorder, hover, pressed, disabled);
    }
    return tmp;
  };
  function MutableTooltip(palette) {
    ColorGroup.call(this, palette, 'tooltip');
    this.m37_1 = this.e2z();
    this.n37_1 = this.e2z();
  }
  protoOf(MutableTooltip).f38 = function (_set____db54di) {
    return this.m37_1.b2z(this, background$factory_3(), _set____db54di);
  };
  protoOf(MutableTooltip).r37 = function () {
    return this.m37_1.i2k(this, background$factory_4());
  };
  protoOf(MutableTooltip).g38 = function (_set____db54di) {
    return this.n37_1.b2z(this, color$factory_3(), _set____db54di);
  };
  protoOf(MutableTooltip).s37 = function () {
    return this.n37_1.i2k(this, color$factory_4());
  };
  protoOf(MutableTooltip).o37 = function (background, color) {
    this.f38(background);
    this.g38(color);
  };
  function get_tooltip(_this__u8e3s4) {
    return get_tooltip_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_tab(_this__u8e3s4) {
    return get_tab_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_switch(_this__u8e3s4) {
    return get_switch_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_overlay(_this__u8e3s4) {
    return _this__u8e3s4.x2y('overlay');
  }
  function get_input(_this__u8e3s4) {
    return get_input_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_checkbox(_this__u8e3s4) {
    return get_checkbox_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_button(_this__u8e3s4) {
    return get_button_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function get_placeholder_0(_this__u8e3s4) {
    return _this__u8e3s4.x2y('placeholder');
  }
  function get_focusOutline(_this__u8e3s4) {
    return _this__u8e3s4.x2y('focusOutline');
  }
  function get_border(_this__u8e3s4) {
    return _this__u8e3s4.x2y('border');
  }
  function get_color(_this__u8e3s4) {
    return _this__u8e3s4.x2y('color');
  }
  function get_background(_this__u8e3s4) {
    return _this__u8e3s4.x2y('background');
  }
  function get_tooltip_0(_this__u8e3s4) {
    return new MutableTooltip(_this__u8e3s4);
  }
  function get_tab_0(_this__u8e3s4) {
    return new MutableTab(_this__u8e3s4);
  }
  function get_switch_0(_this__u8e3s4) {
    return new MutableSwitch(_this__u8e3s4);
  }
  function get_input_0(_this__u8e3s4) {
    return new MutableInput(_this__u8e3s4);
  }
  function get_checkbox_0(_this__u8e3s4) {
    return new MutableCheckbox(_this__u8e3s4);
  }
  function get_button_0(_this__u8e3s4) {
    return new MutableButton(_this__u8e3s4);
  }
  function set_background(_this__u8e3s4, value) {
    _this__u8e3s4.f2z('background', value);
  }
  function get_background_0(_this__u8e3s4) {
    return _this__u8e3s4.x2y('background');
  }
  function set_color(_this__u8e3s4, value) {
    _this__u8e3s4.f2z('color', value);
  }
  function get_color_0(_this__u8e3s4) {
    return _this__u8e3s4.x2y('color');
  }
  function set_border(_this__u8e3s4, value) {
    _this__u8e3s4.f2z('border', value);
  }
  function set_focusOutline(_this__u8e3s4, value) {
    _this__u8e3s4.f2z('focusOutline', value);
  }
  function set_overlay(_this__u8e3s4, value) {
    _this__u8e3s4.f2z('overlay', value);
  }
  function set_placeholder(_this__u8e3s4, value) {
    _this__u8e3s4.f2z('placeholder', value);
  }
  function default$factory() {
    return getPropertyCallableRef('default', 1, KMutableProperty1, function (receiver) {
      return receiver.p37();
    }, function (receiver, value) {
      return receiver.a38(value);
    });
  }
  function default$factory_0() {
    return getPropertyCallableRef('default', 1, KMutableProperty1, function (receiver) {
      return receiver.p37();
    }, function (receiver, value) {
      return receiver.a38(value);
    });
  }
  function hover$factory() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.d2e();
    }, function (receiver, value) {
      return receiver.b38(value);
    });
  }
  function hover$factory_0() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.d2e();
    }, function (receiver, value) {
      return receiver.b38(value);
    });
  }
  function focus$factory() {
    return getPropertyCallableRef('focus', 1, KMutableProperty1, function (receiver) {
      return receiver.d38();
    }, function (receiver, value) {
      return receiver.c38(value);
    });
  }
  function focus$factory_0() {
    return getPropertyCallableRef('focus', 1, KMutableProperty1, function (receiver) {
      return receiver.d38();
    }, function (receiver, value) {
      return receiver.c38(value);
    });
  }
  function pressed$factory() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.q37();
    }, function (receiver, value) {
      return receiver.e38(value);
    });
  }
  function pressed$factory_0() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.q37();
    }, function (receiver, value) {
      return receiver.e38(value);
    });
  }
  function background$factory() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.r37();
    }, function (receiver, value) {
      return receiver.f38(value);
    });
  }
  function background$factory_0() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.r37();
    }, function (receiver, value) {
      return receiver.f38(value);
    });
  }
  function hover$factory_1() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.d2e();
    }, function (receiver, value) {
      return receiver.b38(value);
    });
  }
  function hover$factory_2() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.d2e();
    }, function (receiver, value) {
      return receiver.b38(value);
    });
  }
  function color$factory() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.s37();
    }, function (receiver, value) {
      return receiver.g38(value);
    });
  }
  function color$factory_0() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.s37();
    }, function (receiver, value) {
      return receiver.g38(value);
    });
  }
  function hoveredBorder$factory() {
    return getPropertyCallableRef('hoveredBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.t37();
    }, function (receiver, value) {
      return receiver.h38(value);
    });
  }
  function hoveredBorder$factory_0() {
    return getPropertyCallableRef('hoveredBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.t37();
    }, function (receiver, value) {
      return receiver.h38(value);
    });
  }
  function invalidBorder$factory() {
    return getPropertyCallableRef('invalidBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.u37();
    }, function (receiver, value) {
      return receiver.i38(value);
    });
  }
  function invalidBorder$factory_0() {
    return getPropertyCallableRef('invalidBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.u37();
    }, function (receiver, value) {
      return receiver.i38(value);
    });
  }
  function filled$factory() {
    return getPropertyCallableRef('filled', 1, KMutableProperty1, function (receiver) {
      return receiver.v37();
    }, function (receiver, value) {
      return receiver.j38(value);
    });
  }
  function filled$factory_0() {
    return getPropertyCallableRef('filled', 1, KMutableProperty1, function (receiver) {
      return receiver.v37();
    }, function (receiver, value) {
      return receiver.j38(value);
    });
  }
  function filledHover$factory() {
    return getPropertyCallableRef('filledHover', 1, KMutableProperty1, function (receiver) {
      return receiver.w37();
    }, function (receiver, value) {
      return receiver.k38(value);
    });
  }
  function filledHover$factory_0() {
    return getPropertyCallableRef('filledHover', 1, KMutableProperty1, function (receiver) {
      return receiver.w37();
    }, function (receiver, value) {
      return receiver.k38(value);
    });
  }
  function filledFocus$factory() {
    return getPropertyCallableRef('filledFocus', 1, KMutableProperty1, function (receiver) {
      return receiver.x37();
    }, function (receiver, value) {
      return receiver.l38(value);
    });
  }
  function filledFocus$factory_0() {
    return getPropertyCallableRef('filledFocus', 1, KMutableProperty1, function (receiver) {
      return receiver.x37();
    }, function (receiver, value) {
      return receiver.l38(value);
    });
  }
  function backgroundOn$factory() {
    return getPropertyCallableRef('backgroundOn', 1, KMutableProperty1, function (receiver) {
      return receiver.n38();
    }, function (receiver, value) {
      return receiver.m38(value);
    });
  }
  function backgroundOn$factory_0() {
    return getPropertyCallableRef('backgroundOn', 1, KMutableProperty1, function (receiver) {
      return receiver.n38();
    }, function (receiver, value) {
      return receiver.m38(value);
    });
  }
  function backgroundOff$factory() {
    return getPropertyCallableRef('backgroundOff', 1, KMutableProperty1, function (receiver) {
      return receiver.p38();
    }, function (receiver, value) {
      return receiver.o38(value);
    });
  }
  function backgroundOff$factory_0() {
    return getPropertyCallableRef('backgroundOff', 1, KMutableProperty1, function (receiver) {
      return receiver.p38();
    }, function (receiver, value) {
      return receiver.o38(value);
    });
  }
  function thumb$factory() {
    return getPropertyCallableRef('thumb', 1, KMutableProperty1, function (receiver) {
      return receiver.y37();
    }, function (receiver, value) {
      return receiver.q38(value);
    });
  }
  function thumb$factory_0() {
    return getPropertyCallableRef('thumb', 1, KMutableProperty1, function (receiver) {
      return receiver.y37();
    }, function (receiver, value) {
      return receiver.q38(value);
    });
  }
  function color$factory_1() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.s37();
    }, function (receiver, value) {
      return receiver.g38(value);
    });
  }
  function color$factory_2() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.s37();
    }, function (receiver, value) {
      return receiver.g38(value);
    });
  }
  function background$factory_1() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.r37();
    }, function (receiver, value) {
      return receiver.f38(value);
    });
  }
  function background$factory_2() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.r37();
    }, function (receiver, value) {
      return receiver.f38(value);
    });
  }
  function selectedColor$factory() {
    return getPropertyCallableRef('selectedColor', 1, KMutableProperty1, function (receiver) {
      return receiver.s38();
    }, function (receiver, value) {
      return receiver.r38(value);
    });
  }
  function selectedColor$factory_0() {
    return getPropertyCallableRef('selectedColor', 1, KMutableProperty1, function (receiver) {
      return receiver.s38();
    }, function (receiver, value) {
      return receiver.r38(value);
    });
  }
  function selectedBackground$factory() {
    return getPropertyCallableRef('selectedBackground', 1, KMutableProperty1, function (receiver) {
      return receiver.u38();
    }, function (receiver, value) {
      return receiver.t38(value);
    });
  }
  function selectedBackground$factory_0() {
    return getPropertyCallableRef('selectedBackground', 1, KMutableProperty1, function (receiver) {
      return receiver.u38();
    }, function (receiver, value) {
      return receiver.t38(value);
    });
  }
  function selectedBorder$factory() {
    return getPropertyCallableRef('selectedBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.w38();
    }, function (receiver, value) {
      return receiver.v38(value);
    });
  }
  function selectedBorder$factory_0() {
    return getPropertyCallableRef('selectedBorder', 1, KMutableProperty1, function (receiver) {
      return receiver.w38();
    }, function (receiver, value) {
      return receiver.v38(value);
    });
  }
  function hover$factory_3() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.d2e();
    }, function (receiver, value) {
      return receiver.b38(value);
    });
  }
  function hover$factory_4() {
    return getPropertyCallableRef('hover', 1, KMutableProperty1, function (receiver) {
      return receiver.d2e();
    }, function (receiver, value) {
      return receiver.b38(value);
    });
  }
  function pressed$factory_1() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.q37();
    }, function (receiver, value) {
      return receiver.e38(value);
    });
  }
  function pressed$factory_2() {
    return getPropertyCallableRef('pressed', 1, KMutableProperty1, function (receiver) {
      return receiver.q37();
    }, function (receiver, value) {
      return receiver.e38(value);
    });
  }
  function disabled$factory() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.z37();
    }, function (receiver, value) {
      return receiver.x38(value);
    });
  }
  function disabled$factory_0() {
    return getPropertyCallableRef('disabled', 1, KMutableProperty1, function (receiver) {
      return receiver.z37();
    }, function (receiver, value) {
      return receiver.x38(value);
    });
  }
  function background$factory_3() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.r37();
    }, function (receiver, value) {
      return receiver.f38(value);
    });
  }
  function background$factory_4() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return receiver.r37();
    }, function (receiver, value) {
      return receiver.f38(value);
    });
  }
  function color$factory_3() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.s37();
    }, function (receiver, value) {
      return receiver.g38(value);
    });
  }
  function color$factory_4() {
    return getPropertyCallableRef('color', 1, KMutableProperty1, function (receiver) {
      return receiver.s37();
    }, function (receiver, value) {
      return receiver.g38(value);
    });
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Input_0;
  _.$_$.b = Surface;
  _.$_$.c = get_SilkColorsStyle;
  _.$_$.d = initSilkWidgets;
  _.$_$.e = setSilkWidgetVariables_0;
  _.$_$.f = get_SmoothColorStyle;
  _.$_$.g = get_BorderColorVar;
  _.$_$.h = get_ColorVar;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-widgets.js.map
