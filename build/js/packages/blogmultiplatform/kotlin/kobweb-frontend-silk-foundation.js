(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kobweb-frontend-kobweb-compose.js', './html-html-core.js', './kobweb-frontend-compose-html-ext.js', './kobweb-frontend-browser-ext.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./html-html-core.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kobweb-frontend-browser-ext.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    if (typeof this['kobweb-frontend-browser-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-foundation'. Its dependency 'kobweb-frontend-browser-ext' was not found. Please, check whether 'kobweb-frontend-browser-ext' is loaded prior to 'kobweb-frontend-silk-foundation'.");
    }
    root['kobweb-frontend-silk-foundation'] = factory(typeof this['kobweb-frontend-silk-foundation'] === 'undefined' ? {} : this['kobweb-frontend-silk-foundation'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-compose-runtime-runtime'], this['kobweb-frontend-kobweb-compose'], this['html-html-core'], this['kobweb-frontend-compose-html-ext'], this['kobweb-frontend-browser-ext']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_com_varabyte_kobweb_browser_ext) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.e2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var THROW_CCE = kotlin_kotlin.$_$.p8;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var KobwebComposeStyleSheet_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r2;
  var Style = kotlin_org_jetbrains_compose_html_html_core.$_$.f3;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var StyleSheet = kotlin_org_jetbrains_compose_html_html_core.$_$.h1;
  var VOID = kotlin_kotlin.$_$.d;
  var StyleSheet_init_$Init$ = kotlin_org_jetbrains_compose_html_html_core.$_$.a;
  var protoOf = kotlin_kotlin.$_$.k6;
  var objectMeta = kotlin_kotlin.$_$.j6;
  var setMetadataFor = kotlin_kotlin.$_$.l6;
  var classMeta = kotlin_kotlin.$_$.o5;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y2;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.r1;
  var endsWith = kotlin_kotlin.$_$.f7;
  var startsWith = kotlin_kotlin.$_$.u7;
  var Companion_instance_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l2;
  var whiteSpace = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l2;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o2;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var Span = kotlin_org_jetbrains_compose_html_html_core.$_$.e3;
  var registerRefScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u1;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.g3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var CompositionLocalProvider = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var toString = kotlin_kotlin.$_$.n6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var to = kotlin_kotlin.$_$.f9;
  var listOf = kotlin_kotlin.$_$.u3;
  var invokeLater = kotlin_com_varabyte_kobweb_browser_ext.$_$.b;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.v2;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.h;
  var toSet = kotlin_kotlin.$_$.n4;
  var asList = kotlin_kotlin.$_$.h9;
  var addAll = kotlin_kotlin.$_$.s2;
  var plus = kotlin_kotlin.$_$.c4;
  var joinToString = kotlin_kotlin.$_$.m3;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var Map = kotlin_kotlin.$_$.o2;
  var isInterface = kotlin_kotlin.$_$.c6;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var listOf_0 = kotlin_kotlin.$_$.t3;
  var emptyList = kotlin_kotlin.$_$.b3;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.x;
  var charSequenceLength = kotlin_kotlin.$_$.n5;
  var mapCapacity = kotlin_kotlin.$_$.v3;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.o;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var ComparableAttrsScope_init_$Create$ = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v1;
  var trimMargin = kotlin_kotlin.$_$.d8;
  var media = kotlin_org_jetbrains_compose_html_html_core.$_$.j2;
  var layer = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.c1;
  var isNotEmpty = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.z;
  var mutableListOf = kotlin_kotlin.$_$.y3;
  var plus_0 = kotlin_kotlin.$_$.b4;
  var interfaceMeta = kotlin_kotlin.$_$.z5;
  var ComparableStyleScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b;
  var toStyles = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.p2;
  var equals = kotlin_kotlin.$_$.r5;
  var substringAfterLast = kotlin_kotlin.$_$.v7;
  var endsWith_0 = kotlin_kotlin.$_$.g7;
  var copyToArray = kotlin_kotlin.$_$.z2;
  var classNames = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t;
  var getValue = kotlin_kotlin.$_$.k3;
  var toList = kotlin_kotlin.$_$.l4;
  var objectCreate = kotlin_kotlin.$_$.i6;
  var getStringHashCode = kotlin_kotlin.$_$.w5;
  var isBlank = kotlin_kotlin.$_$.i7;
  var first = kotlin_kotlin.$_$.h7;
  var Char = kotlin_kotlin.$_$.h8;
  var setOf = kotlin_kotlin.$_$.g4;
  var From_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.g;
  var To_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.h;
  var hashCode = kotlin_kotlin.$_$.x5;
  var StyleScopeBuilder = kotlin_org_jetbrains_compose_html_html_core.$_$.f1;
  var CSSKeyframeRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.y;
  var CSSKeyframesRuleDeclaration = kotlin_org_jetbrains_compose_html_html_core.$_$.z;
  var distinct = kotlin_kotlin.$_$.a3;
  var lazy = kotlin_kotlin.$_$.y8;
  var enumEntries = kotlin_kotlin.$_$.g5;
  var Enum = kotlin_kotlin.$_$.i8;
  var Raw = kotlin_org_jetbrains_compose_html_html_core.$_$.b1;
  var Companion_instance_1 = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w;
  var trimIndent = kotlin_kotlin.$_$.c8;
  var getKClass = kotlin_kotlin.$_$.b;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.r1;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.q;
  var MediaFeature = kotlin_org_jetbrains_compose_html_html_core.$_$.a1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.r2;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.z8;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var KProperty0 = kotlin_kotlin.$_$.v6;
  var getPropertyCallableRef = kotlin_kotlin.$_$.v5;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l;
  var Companion_instance_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s2;
  var ensureNotNull = kotlin_kotlin.$_$.x8;
  var styleModifier = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.n2;
  //endregion
  //region block: pre-declaration
  setMetadataFor(SilkStyleSheet, 'SilkStyleSheet', objectMeta, StyleSheet);
  setMetadataFor(ComponentVariant, 'ComponentVariant', classMeta);
  setMetadataFor(SimpleComponentVariant, 'SimpleComponentVariant', classMeta, ComponentVariant);
  setMetadataFor(DeferredComposablesState, 'DeferredComposablesState', classMeta, VOID, VOID, DeferredComposablesState);
  setMetadataFor(ComposableSingletons$DeferredKt, 'ComposableSingletons$DeferredKt', objectMeta);
  setMetadataFor(InitSilkContext, 'InitSilkContext', classMeta);
  setMetadataFor(SilkCssLayerNames, 'SilkCssLayerNames', objectMeta);
  setMetadataFor(MutableSilkConfig, 'MutableSilkConfig', classMeta, VOID, VOID, MutableSilkConfig);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(SilkStylesheetInstance, 'SilkStylesheetInstance', objectMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(CssRule, 'CssRule', classMeta);
  setMetadataFor(NonMediaCssRule, 'NonMediaCssRule', classMeta, CssRule);
  setMetadataFor(OfAttributeSelector, 'OfAttributeSelector', classMeta, NonMediaCssRule);
  setMetadataFor(OfPseudoClass, 'OfPseudoClass', classMeta, NonMediaCssRule);
  setMetadataFor(OfPseudoElement, 'OfPseudoElement', classMeta, NonMediaCssRule);
  setMetadataFor(CompositeOpen, 'CompositeOpen', classMeta, NonMediaCssRule);
  setMetadataFor(CssStyle, 'CssStyle', classMeta);
  setMetadataFor(Restricted, 'Restricted', classMeta, CssStyle);
  setMetadataFor(Base, 'Base', classMeta, Restricted);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(StyleScope, 'StyleScope', classMeta);
  setMetadataFor(CssStyleScope, 'CssStyleScope', classMeta, StyleScope);
  setMetadataFor(ComponentKind, 'ComponentKind', interfaceMeta);
  setMetadataFor(RestrictedKind, 'RestrictedKind', interfaceMeta);
  setMetadataFor(CssStyleBaseScope, 'CssStyleBaseScope', classMeta);
  setMetadataFor(Light, 'Light', classMeta);
  setMetadataFor(Dark, 'Dark', classMeta);
  setMetadataFor(ColorAgnostic, 'ColorAgnostic', classMeta);
  setMetadataFor(ColorAware, 'ColorAware', classMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(ImmutableCssStyle, 'ImmutableCssStyle', classMeta);
  setMetadataFor(GeneralKind, 'GeneralKind', interfaceMeta);
  setMetadataFor(ExtendingCssStyle, 'ExtendingCssStyle', classMeta, CssStyle);
  setMetadataFor(CssStyle$2, VOID, classMeta, CssStyle);
  setMetadataFor(CssStyle$4, VOID, classMeta, CssStyle);
  setMetadataFor(CssStyle$6, VOID, classMeta, CssStyle);
  setMetadataFor(base$3, VOID, classMeta, CssStyle);
  setMetadataFor(CssStyleVariant, 'CssStyleVariant', classMeta);
  setMetadataFor(SimpleCssStyleVariant$1, VOID, classMeta, CssStyle);
  setMetadataFor(SimpleCssStyleVariant, 'SimpleCssStyleVariant', classMeta, CssStyleVariant);
  setMetadataFor(ExtendingCssStyleVariant, 'ExtendingCssStyleVariant', classMeta, SimpleCssStyleVariant);
  setMetadataFor(CompositeCssStyleVariant, 'CompositeCssStyleVariant', classMeta, CssStyleVariant);
  setMetadataFor(addVariant$1, VOID, classMeta, CssStyle);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(Key, 'Key', classMeta);
  setMetadataFor(CssModifier, 'CssModifier', classMeta);
  setMetadataFor(KeyframesBuilder, 'KeyframesBuilder', classMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(Keyframes, 'Keyframes', classMeta);
  setMetadataFor(Breakpoint, 'Breakpoint', classMeta, Enum);
  setMetadataFor(BreakpointValues, 'BreakpointValues', classMeta);
  setMetadataFor(BreakpointUnitValue, 'BreakpointUnitValue', classMeta);
  setMetadataFor(Rem, 'Rem', classMeta, BreakpointUnitValue);
  setMetadataFor(MutableSilkTheme$replaceStyle$newStyle$1, VOID, classMeta, CssStyle);
  setMetadataFor(MutableSilkTheme, 'MutableSilkTheme', classMeta, VOID, VOID, MutableSilkTheme);
  setMetadataFor(ImmutableSilkTheme, 'ImmutableSilkTheme', classMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(ColorMode, 'ColorMode', classMeta, Enum);
  setMetadataFor(Red, 'Red', objectMeta);
  setMetadataFor(Blue, 'Blue', objectMeta);
  setMetadataFor(Gray, 'Gray', objectMeta);
  function get(colorMode) {
    var tmp;
    switch (colorMode.s9_1) {
      case 0:
        tmp = this.t2y();
        break;
      case 1:
        tmp = this.u2y();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  setMetadataFor(Palettes, 'Palettes', interfaceMeta);
  setMetadataFor(MutablePalettes, 'MutablePalettes', classMeta, VOID, [Palettes], MutablePalettes);
  function getValue_0(key) {
    return ensureNotNull(this.w2y(key));
  }
  setMetadataFor(Palette, 'Palette', interfaceMeta);
  setMetadataFor(EntryDelegate, 'EntryDelegate', classMeta);
  setMetadataFor(ColorGroup, 'ColorGroup', classMeta);
  setMetadataFor(MutablePalette, 'MutablePalette', classMeta, VOID, [Palette], MutablePalette);
  setMetadataFor(RectF, 'RectF', classMeta, VOID, VOID, RectF_init_$Create$);
  setMetadataFor(Path, 'Path', classMeta);
  setMetadataFor(InsetPath, 'InsetPath', classMeta, Path);
  //endregion
  function prepareSilkFoundation(initSilk_0, content, $composer, $changed, $default) {
    var initSilk_1 = {_v: initSilk_0};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j19(-776510055);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.m18(initSilk_1._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.m18(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.m17()) {
      if (!(($default & 1) === 0)) {
        $composer_0.r17(2035960038);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = this_0.v18();
        var tmp;
        if (false ? true : it === Companion_getInstance().j12_1) {
          // Inline function 'com.varabyte.kobweb.silk.prepareSilkFoundation.<anonymous>' call
          var value = prepareSilkFoundation$lambda;
          this_0.b19(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var tmp_0 = tmp;
        var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
        $composer_0.s17();
        initSilk_1._v = tmp0_group;
      }
      if (isTraceInProgress()) {
        traceEventStart(-776510055, $dirty, -1, 'com.varabyte.kobweb.silk.prepareSilkFoundation (PrepareSilkFoundation.kt:10)');
      }
      $composer_0.u14(2035960081, Unit_instance);
      $composer_0.r17(2035960185);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      var invalid = ($dirty & 14) === 4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.v18();
      var tmp_1;
      if (invalid ? true : it_0 === Companion_getInstance().j12_1) {
        // Inline function 'com.varabyte.kobweb.silk.prepareSilkFoundation.<anonymous>' call
        var value_0 = prepareSilkFoundation$lambda_0(initSilk_1);
        this_1.b19(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.s17();
      initSilk(tmp1_group);
      $composer_0.x14();
      // Inline function 'org.jetbrains.compose.web.css.Style' call
      var styleSheet = KobwebComposeStyleSheet_getInstance();
      var $composer_1 = $composer_0;
      $composer_1.r17(-1196466140);
      Style(null, styleSheet.w2d(), $composer_1, 0, 1);
      $composer_1.s17();
      // Inline function 'org.jetbrains.compose.web.css.Style' call
      var styleSheet_0 = SilkStyleSheet_getInstance();
      var $composer_2 = $composer_0;
      $composer_2.r17(-1196466140);
      Style(null, styleSheet_0.w2d(), $composer_2, 0, 1);
      $composer_2.s17();
      content($composer_0, 14 & $dirty >> 3);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.d12();
    }
    var tmp2_safe_receiver = $composer_0.k19();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.h1e(prepareSilkFoundation$lambda_1(initSilk_1, content, $changed, $default));
    }
  }
  function prepareSilkFoundation$lambda(it) {
    return Unit_instance;
  }
  function prepareSilkFoundation$lambda_0($initSilk) {
    return function (ctx) {
      $initSilk._v(ctx);
      return Unit_instance;
    };
  }
  function prepareSilkFoundation$lambda_1($initSilk, $content, $$changed, $$default) {
    return function ($composer, $force) {
      prepareSilkFoundation($initSilk._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function SilkStyleSheet() {
    SilkStyleSheet_instance = this;
    StyleSheet_init_$Init$(VOID, VOID, this);
  }
  protoOf(SilkStyleSheet).a2e = function (selector, cssRule) {
    return this.z2d(selector, cssRule);
  };
  var SilkStyleSheet_instance;
  function SilkStyleSheet_getInstance() {
    if (SilkStyleSheet_instance == null)
      new SilkStyleSheet();
    return SilkStyleSheet_instance;
  }
  function registerKeyframes(_this__u8e3s4, keyframes) {
    return _this__u8e3s4.k2r(keyframes.i2r_1, keyframes.h2r_1);
  }
  function ComponentVariant() {
  }
  function SimpleComponentVariant() {
  }
  function get_SpanTextStyle() {
    _init_properties_SpanText_kt__upt1hl();
    return SpanTextStyle;
  }
  var SpanTextStyle;
  function SpanText(text, modifier, variant, ref, $composer, $changed, $default) {
    _init_properties_SpanText_kt__upt1hl();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j19(-1400383509);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.kz(text) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 16;
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.kz(variant_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.kz(ref_0._v) ? 2048 : 1024);
    if (!(($default & 2) === 2) ? true : !(($dirty & 5851) === 1170) ? true : !$composer_0.m17()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 4) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        ref_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-1400383509, $dirty, -1, 'com.varabyte.kobweb.silk.components.text.SpanText (SpanText.kt:52)');
      }
      // Inline function 'com.varabyte.kobweb.compose.ui.thenIf' call
      var this_0 = toModifier_0(get_SpanTextStyle(), [variant_0._v], $composer_0, 6).j2p(modifier_0._v);
      var tmp;
      if (startsWith(text, _Char___init__impl__6a9atx(32)) ? true : endsWith(text, _Char___init__impl__6a9atx(32))) {
        // Inline function 'com.varabyte.kobweb.silk.components.text.SpanText.<anonymous>' call
        tmp = whiteSpace(Companion_instance, Companion_instance_0.n2k());
      } else {
        tmp = Companion_instance;
      }
      var finalModifier = this_0.j2p(tmp);
      var tmp_0 = toAttrs(finalModifier);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.components.text.SpanText.<anonymous>' call
      var tmp_1 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_1, 262293193, true, SpanText$lambda(ref_0, text));
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
        // Inline function 'com.varabyte.kobweb.silk.components.text.SpanText.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.b19(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var tmp_3 = tmp_2;
      var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_1.s17();
      Span(tmp_0, tmp0, $composer_0, 48, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.d12();
    }
    var tmp0_safe_receiver = $composer_0.k19();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.h1e(SpanText$lambda_0(text, modifier_0, variant_0, ref_0, $changed, $default));
    }
  }
  function SpanTextStyle$lambda($this$CssStyle) {
    _init_properties_SpanText_kt__upt1hl();
    return Unit_instance;
  }
  function SpanText$lambda($ref, $text) {
    return function ($this$Span, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(262293193, $changed, -1, 'com.varabyte.kobweb.silk.components.text.SpanText.<anonymous> (SpanText.kt:61)');
      }
      registerRefScope($this$Span, $ref._v, $composer_0, 72);
      Text($text, $composer_0, 0);
      var tmp;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.l22(p0, p1, p2);
    };
  }
  function SpanText$lambda_0($text, $modifier, $variant, $ref, $$changed, $$default) {
    return function ($composer, $force) {
      SpanText($text, $modifier._v, $variant._v, $ref._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_SpanText_kt_kccny1;
  function _init_properties_SpanText_kt__upt1hl() {
    if (!properties_initialized_SpanText_kt_kccny1) {
      properties_initialized_SpanText_kt_kccny1 = true;
      SpanTextStyle = CssStyle_0(VOID, SpanTextStyle$lambda);
    }
  }
  function get_LocalDeferred() {
    _init_properties_Deferred_kt__im2yn();
    return LocalDeferred;
  }
  var LocalDeferred;
  function DeferredComposablesState$forEach$lambda($tmp0_rcvr, $render, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.o2r($render, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function DeferredComposablesState() {
    this.l2r_1 = -1;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.m2r_1 = ArrayList_init_$Create$();
    this.n2r_1 = mutableStateListOf();
  }
  protoOf(DeferredComposablesState).o2r = function (render, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j19(-1296527038);
    var $dirty = $changed;
    if (isTraceInProgress()) {
      traceEventStart(-1296527038, $dirty, -1, 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.forEach (Deferred.kt:31)');
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.n2r_1.k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.defer.DeferredComposablesState.forEach.<anonymous>' call
      render(element, $composer_0, 8 | 112 & $dirty << 3);
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    var tmp1_safe_receiver = $composer_0.k19();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.h1e(DeferredComposablesState$forEach$lambda(this, render, $changed));
    }
  };
  function renderWithDeferred(content, $composer, $changed) {
    _init_properties_Deferred_kt__im2yn();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j19(2037104680);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.m18(content) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.m17()) {
      if (isTraceInProgress()) {
        traceEventStart(2037104680, $dirty, -1, 'com.varabyte.kobweb.silk.defer.renderWithDeferred (Deferred.kt:75)');
      }
      var state = new DeferredComposablesState();
      var tmp = get_LocalDeferred().f1e(state);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.defer.renderWithDeferred.<anonymous>' call
      var tmp_0 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_0, 564114664, true, renderWithDeferred$lambda(content, state));
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
      var tmp_1;
      if (invalid ? true : it === Companion_getInstance().j12_1) {
        // Inline function 'com.varabyte.kobweb.silk.defer.renderWithDeferred.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_1(dispatchReceiver);
        $composer_1.b19(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp_2 = tmp_1;
      var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_1.s17();
      CompositionLocalProvider(tmp, tmp0, $composer_0, 56);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.d12();
    }
    var tmp0_safe_receiver = $composer_0.k19();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.h1e(renderWithDeferred$lambda_0(content, $changed));
    }
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.l22(p0, p1, p2);
    };
  }
  function ComposableSingletons$DeferredKt$lambda_1$lambda_ynev9p(entry, $composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-300134205, $changed, -1, 'com.varabyte.kobweb.silk.defer.ComposableSingletons$DeferredKt.lambda-1.<anonymous> (Deferred.kt:83)');
    }
    var tmp0_safe_receiver = entry.p2r_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      renderWithDeferred(tmp0_safe_receiver, $composer_0, 0);
      tmp = Unit_instance;
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return Unit_instance;
  }
  function ComposableSingletons$DeferredKt() {
    ComposableSingletons$DeferredKt_instance = this;
    var tmp = this;
    tmp.r2r_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-300134205, false, ComposableSingletons$DeferredKt$lambda_1$lambda_ynev9p));
  }
  var ComposableSingletons$DeferredKt_instance;
  function ComposableSingletons$DeferredKt_getInstance() {
    if (ComposableSingletons$DeferredKt_instance == null)
      new ComposableSingletons$DeferredKt();
    return ComposableSingletons$DeferredKt_instance;
  }
  function LocalDeferred$lambda() {
    _init_properties_Deferred_kt__im2yn();
    var message = 'Attempting to defer rendering without calling `renderWithDeferred`, a required pre-requisite.';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function renderWithDeferred$lambda($content, $state) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.m17()) {
        if (isTraceInProgress()) {
          traceEventStart(564114664, $changed, -1, 'com.varabyte.kobweb.silk.defer.renderWithDeferred.<anonymous> (Deferred.kt:78)');
        }
        $content($composer_0, 0);
        $state.o2r(ComposableSingletons$DeferredKt_getInstance().r2r_1, $composer_0, 70);
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
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1) {
      return $boundThis.k17(p0, p1);
    };
  }
  function renderWithDeferred$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      renderWithDeferred($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_Deferred_kt_1ab2bj;
  function _init_properties_Deferred_kt__im2yn() {
    if (!properties_initialized_Deferred_kt_1ab2bj) {
      properties_initialized_Deferred_kt_1ab2bj = true;
      LocalDeferred = staticCompositionLocalOf(LocalDeferred$lambda);
    }
  }
  function set_additionalSilkInitialization(_set____db54di) {
    _init_properties_InitSilk_kt__vukue3();
    additionalSilkInitialization = _set____db54di;
  }
  function get_additionalSilkInitialization() {
    _init_properties_InitSilk_kt__vukue3();
    return additionalSilkInitialization;
  }
  var additionalSilkInitialization;
  function InitSilkContext(config, stylesheet, theme) {
    this.s2r_1 = config;
    this.t2r_1 = stylesheet;
    this.u2r_1 = theme;
  }
  function SilkCssLayerNames() {
    this.v2r_1 = 'reset';
    this.w2r_1 = 'component-styles';
    this.x2r_1 = 'component-variants';
    this.y2r_1 = 'restricted-styles';
    this.z2r_1 = 'general-styles';
  }
  var SilkCssLayerNames_instance;
  function SilkCssLayerNames_getInstance() {
    return SilkCssLayerNames_instance;
  }
  function initSilk(additionalInit) {
    var tmp;
    if (additionalInit === VOID) {
      tmp = initSilk$lambda;
    } else {
      tmp = additionalInit;
    }
    additionalInit = tmp;
    _init_properties_InitSilk_kt__vukue3();
    var mutableTheme = new MutableSilkTheme();
    var config = new MutableSilkConfig();
    mutableTheme.y2s('silk-span-text', get_SpanTextStyle());
    var ctx = new InitSilkContext(config, SilkStylesheetInstance_getInstance(), mutableTheme);
    additionalInit(ctx);
    get_additionalSilkInitialization()(ctx);
    var displayStyles = listOf([to(get_DisplayIfAtLeastZeroStyle(), 'silk-display-if-at-least-zero'), to(get_DisplayIfAtLeastSmStyle(), 'silk-display-if-at-least-sm'), to(get_DisplayIfAtLeastMdStyle(), 'silk-display-if-at-least-md'), to(get_DisplayIfAtLeastLgStyle(), 'silk-display-if-at-least-lg'), to(get_DisplayIfAtLeastXlStyle(), 'silk-display-if-at-least-xl'), to(get_DisplayUntilZeroStyle(), 'silk-display-until-zero'), to(get_DisplayUntilSmStyle(), 'silk-display-until-sm'), to(get_DisplayUntilMdStyle(), 'silk-display-until-md'), to(get_DisplayUntilLgStyle(), 'silk-display-until-lg'), to(get_DisplayUntilXlStyle(), 'silk-display-until-xl')]);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = displayStyles.k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>' call
      var style = element.ee();
      var name = element.fe();
      mutableTheme.z2s(name, style);
    }
    set_MutableSilkConfigInstance(config);
    set__SilkTheme(new ImmutableSilkTheme(mutableTheme));
    get_SilkTheme().f2t(SilkStylesheetInstance_getInstance());
    SilkStylesheetInstance_getInstance().j2t(SilkStyleSheet_getInstance());
    get_SilkTheme().k2t(SilkStyleSheet_getInstance());
    var tmp_0 = window;
    invokeLater(tmp_0, initSilk$lambda_0(displayStyles));
  }
  function additionalSilkInitialization$lambda(it) {
    _init_properties_InitSilk_kt__vukue3();
    return Unit_instance;
  }
  function initSilk$lambda(it) {
    _init_properties_InitSilk_kt__vukue3();
    return Unit_instance;
  }
  function initSilk$lambda_0($displayStyles) {
    return function () {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.collections.map' call
      var this_0 = $displayStyles;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.k();
      while (tmp0_iterator.x()) {
        var item = tmp0_iterator.z();
        // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>' call
        var name = item.fe();
        var tmp$ret$0 = '.' + name;
        destination.u(tmp$ret$0);
      }
      var displayStyleSelectorNames = toSet(destination);
      // Inline function 'kotlin.collections.flatMap' call
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterIsInstance' call
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var this_1 = asList(document.styleSheets);
      var destination_0 = ArrayList_init_$Create$();
      var tmp0_iterator_0 = this_1.k();
      while (tmp0_iterator_0.x()) {
        var element = tmp0_iterator_0.z();
        if (element instanceof CSSStyleSheet) {
          destination_0.u(element);
        }
      }
      // Inline function 'kotlin.collections.filterTo' call
      var destination_1 = ArrayList_init_$Create$();
      var tmp0_iterator_1 = destination_0.k();
      while (tmp0_iterator_1.x()) {
        var element_0 = tmp0_iterator_1.z();
        // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>' call
        if (element_0.href == null) {
          destination_1.u(element_0);
        }
      }
      // Inline function 'kotlin.collections.flatMapTo' call
      var destination_2 = ArrayList_init_$Create$();
      var tmp0_iterator_2 = destination_1.k();
      while (tmp0_iterator_2.x()) {
        var element_1 = tmp0_iterator_2.z();
        // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.flatMap' call
        // Inline function 'kotlin.collections.mapNotNull' call
        // Inline function 'kotlin.collections.flatMap' call
        // Inline function 'kotlin.collections.filterIsInstance' call
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var this_2 = asList(element_1.cssRules);
        var destination_3 = ArrayList_init_$Create$();
        var tmp0_iterator_3 = this_2.k();
        while (tmp0_iterator_3.x()) {
          var element_2 = tmp0_iterator_3.z();
          if (element_2 instanceof CSSMediaRule) {
            destination_3.u(element_2);
          }
        }
        // Inline function 'kotlin.collections.flatMapTo' call
        var destination_4 = ArrayList_init_$Create$();
        var tmp0_iterator_4 = destination_3.k();
        while (tmp0_iterator_4.x()) {
          var element_3 = tmp0_iterator_4.z();
          // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var list = asList(element_3.cssRules);
          addAll(destination_4, list);
        }
        // Inline function 'kotlin.collections.mapNotNullTo' call
        var destination_5 = ArrayList_init_$Create$();
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator_5 = destination_4.k();
        while (tmp0_iterator_5.x()) {
          var element_4 = tmp0_iterator_5.z();
          // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
          // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp0_safe_receiver = element_4 instanceof CSSLayerBlockRule ? element_4 : null;
          var tmp;
          if (tmp0_safe_receiver == null) {
            tmp = null;
          } else {
            // Inline function 'kotlin.takeIf' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp_0;
            // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
            if (tmp0_safe_receiver.name === 'general-styles') {
              tmp_0 = tmp0_safe_receiver;
            } else {
              tmp_0 = null;
            }
            tmp = tmp_0;
          }
          var tmp0_safe_receiver_0 = tmp;
          if (tmp0_safe_receiver_0 == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            destination_5.u(tmp0_safe_receiver_0);
          }
        }
        // Inline function 'kotlin.collections.flatMapTo' call
        var destination_6 = ArrayList_init_$Create$();
        var tmp0_iterator_6 = destination_5.k();
        while (tmp0_iterator_6.x()) {
          var element_5 = tmp0_iterator_6.z();
          // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.collections.filterIsInstance' call
          // Inline function 'kotlin.collections.filterIsInstanceTo' call
          var this_3 = asList(element_5.cssRules);
          var destination_7 = ArrayList_init_$Create$();
          var tmp0_iterator_7 = this_3.k();
          while (tmp0_iterator_7.x()) {
            var element_6 = tmp0_iterator_7.z();
            if (element_6 instanceof CSSStyleRule) {
              destination_7.u(element_6);
            }
          }
          var list_0 = destination_7;
          addAll(destination_6, list_0);
        }
        var list_1 = destination_6;
        addAll(destination_2, list_1);
      }
      var tmp0_iterator_8 = destination_2.k();
      while (tmp0_iterator_8.x()) {
        var element_7 = tmp0_iterator_8.z();
        // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>.<anonymous>' call
        var selectorText = element_7.selectorText;
        var innerStyle = element_7.style;
        if (displayStyleSelectorNames.m(selectorText)) {
          var displayValue = innerStyle.getPropertyValue('display');
          innerStyle.setProperty('display', displayValue, 'important');
        }
      }
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterIsInstance' call
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var this_4 = asList(document.styleSheets);
      var destination_8 = ArrayList_init_$Create$();
      var tmp0_iterator_9 = this_4.k();
      while (tmp0_iterator_9.x()) {
        var element_8 = tmp0_iterator_9.z();
        if (element_8 instanceof CSSStyleSheet) {
          destination_8.u(element_8);
        }
      }
      // Inline function 'kotlin.collections.filterTo' call
      var destination_9 = ArrayList_init_$Create$();
      var tmp0_iterator_10 = destination_8.k();
      while (tmp0_iterator_10.x()) {
        var element_9 = tmp0_iterator_10.z();
        // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>' call
        if (element_9.href == null) {
          destination_9.u(element_9);
        }
      }
      var tmp0_iterator_11 = destination_9.k();
      while (tmp0_iterator_11.x()) {
        var element_10 = tmp0_iterator_11.z();
        // Inline function 'com.varabyte.kobweb.silk.init.initSilk.<anonymous>.<anonymous>' call
        var cssLayers = plus(listOf(['reset', 'component-styles', 'component-variants', 'restricted-styles', 'general-styles']), SilkStylesheetInstance_getInstance().i2t_1);
        element_10.insertRule('@layer ' + joinToString(cssLayers) + ';', 0);
      }
      return Unit_instance;
    };
  }
  var properties_initialized_InitSilk_kt_8x89gn;
  function _init_properties_InitSilk_kt__vukue3() {
    if (!properties_initialized_InitSilk_kt_8x89gn) {
      properties_initialized_InitSilk_kt_8x89gn = true;
      additionalSilkInitialization = additionalSilkInitialization$lambda;
    }
  }
  function set_MutableSilkConfigInstance(_set____db54di) {
    _init_properties_SilkConfig_kt__z9kok7();
    MutableSilkConfigInstance = _set____db54di;
  }
  function get_MutableSilkConfigInstance() {
    _init_properties_SilkConfig_kt__z9kok7();
    return MutableSilkConfigInstance;
  }
  var MutableSilkConfigInstance;
  function MutableSilkConfig() {
    this.l2t_1 = ColorMode_LIGHT_getInstance();
  }
  protoOf(MutableSilkConfig).m2t = function () {
    return this.l2t_1;
  };
  function Companion() {
  }
  protoOf(Companion).n2t = function () {
    return get_MutableSilkConfigInstance();
  };
  var Companion_instance_3;
  function Companion_getInstance_0() {
    return Companion_instance_3;
  }
  var properties_initialized_SilkConfig_kt_bfwaef;
  function _init_properties_SilkConfig_kt__z9kok7() {
    if (!properties_initialized_SilkConfig_kt_bfwaef) {
      properties_initialized_SilkConfig_kt_bfwaef = true;
      MutableSilkConfigInstance = new MutableSilkConfig();
    }
  }
  function SilkStylesheetInstance() {
    SilkStylesheetInstance_instance = this;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.g2t_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.h2t_1 = LinkedHashMap_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.i2t_1 = ArrayList_init_$Create$();
  }
  protoOf(SilkStylesheetInstance).k2r = function (name, build) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.h2t_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!!(isInterface(this_0, Map) ? this_0 : THROW_CCE()).m2(name)) {
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerKeyframes.<anonymous>' call
      var message = 'User is registering duplicate keyframe name: ' + name;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    this.h2t_1.g2(name, build);
  };
  protoOf(SilkStylesheetInstance).j2t = function (siteStyleSheet) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.g2t_1.k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerStylesAndKeyframesInto.<anonymous>' call
      element.s2t(siteStyleSheet);
    }
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.h2t_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(this_0.i());
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_0 = this_0.f2().k();
    while (tmp0_iterator_0.x()) {
      var item = tmp0_iterator_0.z();
      // Inline function 'com.varabyte.kobweb.silk.init.SilkStylesheetInstance.registerStylesAndKeyframesInto.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var name = item.i2();
      // Inline function 'kotlin.collections.component2' call
      var build = item.j2();
      // Inline function 'kotlin.apply' call
      var this_1 = new KeyframesBuilder(ColorMode_LIGHT_getInstance());
      // Inline function 'kotlin.contracts.contract' call
      build(this_1);
      var lightBuilder = this_1;
      // Inline function 'kotlin.apply' call
      var this_2 = new KeyframesBuilder(ColorMode_DARK_getInstance());
      // Inline function 'kotlin.contracts.contract' call
      build(this_2);
      var darkBuilder = this_2;
      if (lightBuilder.equals(darkBuilder)) {
        lightBuilder.v2t(siteStyleSheet, name);
      } else {
        lightBuilder.v2t(siteStyleSheet, suffixedWith(name, ColorMode_LIGHT_getInstance()));
        darkBuilder.v2t(siteStyleSheet, suffixedWith(name, ColorMode_DARK_getInstance()));
      }
      destination.u(Unit_instance);
    }
  };
  var SilkStylesheetInstance_instance;
  function SilkStylesheetInstance_getInstance() {
    if (SilkStylesheetInstance_instance == null)
      new SilkStylesheetInstance();
    return SilkStylesheetInstance_instance;
  }
  function Companion_0() {
  }
  protoOf(Companion_0).w2t = function (target, pseudoClass, params) {
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = 0;
    var last = params.length;
    while (inductionVariable < last) {
      var element = params[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'com.varabyte.kobweb.silk.style.Companion.OfFunctionalPseudoClass.<anonymous>' call
      var tmp0_safe_receiver = element.z2t();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        destination.u(tmp0_safe_receiver);
      }
    }
    return new OfPseudoClass(target, pseudoClass + '(' + joinToString(destination) + ')');
  };
  var Companion_instance_4;
  function Companion_getInstance_1() {
    return Companion_instance_4;
  }
  function NonMediaCssRule(target) {
    CssRule.call(this, target);
  }
  function OfAttributeSelector(target, attributeSelector) {
    NonMediaCssRule.call(this, target);
    this.f2u_1 = attributeSelector;
  }
  protoOf(OfAttributeSelector).z2t = function () {
    return this.c2u(listOf_0(this), emptyList(), null);
  };
  function OfPseudoClass(target, pseudoClass) {
    NonMediaCssRule.call(this, target);
    this.i2u_1 = pseudoClass;
  }
  protoOf(OfPseudoClass).z2t = function () {
    return this.c2u(emptyList(), listOf_0(this), null);
  };
  protoOf(OfPseudoClass).j2u = function (other) {
    return new CompositeOpen(this.x2t_1, null, emptyList(), listOf([this, other]));
  };
  function OfPseudoElement(target, pseudoElement) {
    NonMediaCssRule.call(this, target);
    this.m2u_1 = pseudoElement;
  }
  protoOf(OfPseudoElement).z2t = function () {
    return this.c2u(emptyList(), emptyList(), this);
  };
  function CompositeOpen(target, mediaQuery, attributeSelectors, pseudoClasses) {
    NonMediaCssRule.call(this, target);
    this.p2u_1 = mediaQuery;
    this.q2u_1 = attributeSelectors;
    this.r2u_1 = pseudoClasses;
  }
  protoOf(CompositeOpen).b2u = function () {
    return this.p2u_1;
  };
  protoOf(CompositeOpen).z2t = function () {
    return this.c2u(this.q2u_1, this.r2u_1, null);
  };
  function CssRule(target) {
    this.x2t_1 = target;
    this.y2t_1 = null;
  }
  protoOf(CssRule).a2u = function (createModifier) {
    this.x2t_1.u2u(this.b2u(), this.z2t(), createModifier);
  };
  protoOf(CssRule).b2u = function () {
    return this.y2t_1;
  };
  protoOf(CssRule).z2t = function () {
    return null;
  };
  protoOf(CssRule).c2u = function (attributeSelectors, pseudoClasses, pseudoElement) {
    // Inline function 'kotlin.takeIf' call
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.style.CssRule.buildSelectorText.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = attributeSelectors.k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.style.CssRule.buildSelectorText.<anonymous>.<anonymous>' call
      this_0.q5('[' + element.f2u_1 + ']');
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = pseudoClasses.k();
    while (tmp0_iterator_0.x()) {
      var element_0 = tmp0_iterator_0.z();
      // Inline function 'com.varabyte.kobweb.silk.style.CssRule.buildSelectorText.<anonymous>.<anonymous>' call
      this_0.q5(':' + element_0.i2u_1);
    }
    if (!(pseudoElement == null)) {
      this_0.q5('::' + pseudoElement.m2u_1);
    }
    var this_1 = this_0.toString();
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'com.varabyte.kobweb.silk.style.CssRule.buildSelectorText.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_1) > 0) {
      tmp = this_1;
    } else {
      tmp = null;
    }
    return tmp;
  };
  function Base_init_$Init$(init, extraModifier, $this) {
    var tmp;
    if (extraModifier === VOID) {
      tmp = CssStyle$Restricted$Base$_init_$lambda_wfn4zd_1;
    } else {
      tmp = extraModifier;
    }
    extraModifier = tmp;
    Base.call($this, CssStyle$Restricted$Base$_init_$lambda_wfn4zd_2(init), extraModifier);
    return $this;
  }
  function CssStyle$Restricted$Base$_init_$lambda_wfn4zd($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.r17(-589847720);
    if (isTraceInProgress()) {
      traceEventStart(-589847720, $changed, -1, 'com.varabyte.kobweb.silk.style.CssStyle.Restricted.Base.<init>.<anonymous> (CssStyle.kt:170)');
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.s17();
    return Companion_instance;
  }
  function CssStyle$Restricted$Base$_init_$lambda$lambda_7ly36($init, $this_null) {
    return function () {
      return $init(new CssStyleBaseScope($this_null.x2u_1));
    };
  }
  function CssStyle$Restricted$Base$_init_$lambda_wfn4zd_0($init) {
    return function ($this$null) {
      $this$null.y2u(CssStyle$Restricted$Base$_init_$lambda$lambda_7ly36($init, $this$null));
      return Unit_instance;
    };
  }
  function CssStyle$Restricted$Base$_init_$lambda_wfn4zd_1($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.r17(1583284929);
    if (isTraceInProgress()) {
      traceEventStart(1583284929, $changed, -1, 'com.varabyte.kobweb.silk.style.CssStyle.Restricted.Base.<init>.<anonymous> (CssStyle.kt:172)');
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.s17();
    return Companion_instance;
  }
  function CssStyle$Restricted$Base$_init_$lambda_wfn4zd_2($init) {
    return function ($this$null) {
      return $init;
    };
  }
  function Base(init, extraModifier) {
    var tmp;
    if (extraModifier === VOID) {
      tmp = CssStyle$Restricted$Base$_init_$lambda_wfn4zd;
    } else {
      tmp = extraModifier;
    }
    extraModifier = tmp;
    Restricted.call(this, CssStyle$Restricted$Base$_init_$lambda_wfn4zd_0(init), extraModifier);
  }
  function CssStyle$Restricted$_init_$lambda_tv1gbe($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.r17(-941642769);
    if (isTraceInProgress()) {
      traceEventStart(-941642769, $changed, -1, 'com.varabyte.kobweb.silk.style.CssStyle.Restricted.<init>.<anonymous> (CssStyle.kt:163)');
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.s17();
    return Companion_instance;
  }
  function Restricted(init, extraModifier) {
    var tmp;
    if (extraModifier === VOID) {
      tmp = CssStyle$Restricted$_init_$lambda_tv1gbe;
    } else {
      tmp = extraModifier;
    }
    extraModifier = tmp;
    CssStyle.call(this, init, extraModifier);
  }
  function addStyles(_this__u8e3s4, $this, cssRule, styles) {
    _this__u8e3s4.b2e(cssRule, CssStyle$addStyles$lambda(styles));
  }
  function withFinalSelectorName($this, selectorBaseName, group, handler) {
    if (group instanceof Light)
      handler(suffixedWith(selectorBaseName, ColorMode_LIGHT_getInstance()), group.h2v_1);
    else {
      if (group instanceof Dark)
        handler(suffixedWith(selectorBaseName, ColorMode_DARK_getInstance()), group.g2v_1);
      else {
        if (group instanceof ColorAgnostic)
          handler(selectorBaseName, group.f2v_1);
        else {
          if (group instanceof ColorAware) {
            handler(suffixedWith(selectorBaseName, ColorMode_LIGHT_getInstance()), group.d2v_1);
            handler(suffixedWith(selectorBaseName, ColorMode_DARK_getInstance()), group.e2v_1);
          }
        }
      }
    }
  }
  function mergeCssModifiers(_this__u8e3s4, $this, init) {
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.groupBy' call
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    init(_this__u8e3s4);
    // Inline function 'kotlin.collections.groupByTo' call
    var this_0 = _this__u8e3s4.t2u_1;
    var destination = LinkedHashMap_init_$Create$();
    var tmp0_iterator = this_0.k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.mergeCssModifiers.<anonymous>' call
      var key = element.i2();
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination.p2(key);
      var tmp;
      if (value == null) {
        // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
        var answer = ArrayList_init_$Create$();
        destination.g2(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var list = tmp;
      list.u(element);
    }
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_0 = LinkedHashMap_init_$Create$_0(mapCapacity(destination.i()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator_0 = destination.f2().k();
    while (tmp0_iterator_0.x()) {
      var element_0 = tmp0_iterator_0.z();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp_0 = element_0.i2();
      // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.mergeCssModifiers.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var group = element_0.j2();
      // Inline function 'kotlin.collections.reduce' call
      var iterator = group.k();
      if (!iterator.x())
        throw UnsupportedOperationException_init_$Create$("Empty collection can't be reduced.");
      var accumulator = iterator.z();
      while (iterator.x()) {
        // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.mergeCssModifiers.<anonymous>.<anonymous>' call
        var acc = accumulator;
        var curr = iterator.z();
        accumulator = acc.l2v(curr);
      }
      var tmp$ret$10 = accumulator;
      destination_0.g2(tmp_0, tmp$ret$10);
    }
    return destination_0;
  }
  function assertNoAttributeModifiers(_this__u8e3s4, $this, selectorName, layer) {
    // Inline function 'kotlin.collections.onEach' call
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.onEach.<anonymous>' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = _this__u8e3s4.f2().k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      $l$block: {
        // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.assertNoAttributeModifiers.<anonymous>' call
        // Inline function 'kotlin.collections.component2' call
        var cssModifier = element.j2();
        var attrsScope = ComparableAttrsScope_init_$Create$();
        toAttrs(cssModifier.i2v_1)(attrsScope);
        if (attrsScope.o2h_1.o()) {
          break $l$block;
        }
        // Inline function 'kotlin.error' call
        // Inline function 'kotlin.text.buildString' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.apply' call
        var this_0 = StringBuilder_init_$Create$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.assertNoAttributeModifiers.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.text.appendLine' call
        var value = 'Style block declarations cannot contain Modifiers that specify attributes. Please move Modifiers associated with attributes to the `extraModifier` parameter.';
        // Inline function 'kotlin.text.appendLine' call
        this_0.q5(value).r5(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.text.appendLine' call
        this_0.r5(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.text.appendLine' call
        var value_0 = 'Details:';
        // Inline function 'kotlin.text.appendLine' call
        this_0.q5(value_0).r5(_Char___init__impl__6a9atx(10));
        this_0.q5('\tCSS rule: ');
        this_0.q5('"' + selectorName);
        if (!(cssModifier.j2v_1 == null)) {
          this_0.p5(cssModifier.j2v_1);
        }
        if (!(cssModifier.k2v_1 == null)) {
          this_0.q5(cssModifier.k2v_1);
        }
        // Inline function 'kotlin.text.appendLine' call
        // Inline function 'kotlin.text.appendLine' call
        this_0.q5('"').r5(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.text.appendLine' call
        var tmp = attrsScope.o2h_1.d2();
        var value_1 = '\tAttribute(s): ' + joinToString(tmp, ', ', VOID, VOID, VOID, VOID, CssStyle$assertNoAttributeModifiers$lambda);
        // Inline function 'kotlin.text.appendLine' call
        this_0.q5(value_1).r5(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.text.appendLine' call
        this_0.r5(_Char___init__impl__6a9atx(10));
        var tmp_0;
        if (layer === 'component-variants') {
          tmp_0 = 'val SomeExampleVariant = ExampleStyle.addVariant';
        } else {
          if (layer === 'component-styles') {
            tmp_0 = 'val ExampleStyle = CssStyle<ExampleKind>';
          } else {
            tmp_0 = 'val ExampleStyle = CssStyle';
          }
        }
        var styleDeclaration = tmp_0;
        // Inline function 'kotlin.text.appendLine' call
        var value_2 = 'An example of how to fix this (if the offending attribute was `tab-index`):';
        // Inline function 'kotlin.text.appendLine' call
        this_0.q5(value_2).r5(_Char___init__impl__6a9atx(10));
        // Inline function 'kotlin.text.appendLine' call
        var value_3 = trimMargin('\n                    |   // Before\n                    |   ' + styleDeclaration + ' {\n                    |       base {\n                    |          Modifier\n                    |              .backgroundColor(Colors.Magenta))\n                    |              .tabIndex(0) // <-- The offending attribute modifier\n                    |       }\n                    |   }\n                    |   \n                    |   // After\n                    |   ' + styleDeclaration + '(extraModifier = Modifier.tabIndex(0)) {\n                    |       base {\n                    |           Modifier.backgroundColor(Colors.Magenta)\n                    |       }\n                    |   }\n                    ');
        // Inline function 'kotlin.text.appendLine' call
        this_0.q5(value_3).r5(_Char___init__impl__6a9atx(10));
        var message = this_0.toString();
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    return _this__u8e3s4;
  }
  function Companion_1() {
  }
  var Companion_instance_5;
  function Companion_getInstance_2() {
    return Companion_instance_5;
  }
  function addStylesInto$mediaOrInPlace(_this__u8e3s4, query, rulesBuild) {
    if (query == null) {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      rulesBuild(_this__u8e3s4);
    } else {
      media(_this__u8e3s4, query, rulesBuild);
    }
  }
  function addStylesInto$layerOrInPlace(_this__u8e3s4, name, rulesBuild) {
    if (name == null) {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      rulesBuild(_this__u8e3s4);
    } else {
      layer(_this__u8e3s4, name, rulesBuild);
    }
  }
  function CssStyle$_init_$lambda_598xul($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.r17(2126113218);
    if (isTraceInProgress()) {
      traceEventStart(2126113218, $changed, -1, 'com.varabyte.kobweb.silk.style.CssStyle.<init>.<anonymous> (CssStyle.kt:130)');
    }
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.s17();
    return Companion_instance;
  }
  function CssStyle$addStyles$lambda($styles) {
    return function ($this$null) {
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator = $styles.z2h_1.f2().k();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.addStyles.<anonymous>.<anonymous>' call
        $this$null.w2c(element.i2(), element.j2());
      }
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator_0 = $styles.a2i_1.f2().k();
      while (tmp0_iterator_0.x()) {
        var element_0 = tmp0_iterator_0.z();
        // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.addStyles.<anonymous>.<anonymous>' call
        $this$null.c2d(element_0.i2(), element_0.j2());
      }
      return Unit_instance;
    };
  }
  function CssStyle$assertNoAttributeModifiers$lambda(it) {
    return '"' + it + '"';
  }
  function CssStyle$addStylesInto$lambda$lambda(this$0, $name, $styles) {
    return function ($this$layerOrInPlace) {
      addStyles($this$layerOrInPlace, this$0, $name, $styles);
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda($classNames, $styleSheet, $layer, this$0) {
    return function (name, styles) {
      var tmp;
      if (isNotEmpty(styles)) {
        $classNames.u(name);
        addStylesInto$layerOrInPlace($styleSheet, $layer, CssStyle$addStylesInto$lambda$lambda(this$0, name, styles));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda$lambda$lambda(this$0, $cssRule, $styles) {
    return function ($this$layerOrInPlace) {
      addStyles($this$layerOrInPlace, this$0, $cssRule, $styles);
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda$lambda_0($layer, this$0, $cssRule, $styles) {
    return function ($this$mediaOrInPlace) {
      addStylesInto$layerOrInPlace($this$mediaOrInPlace, $layer, CssStyle$addStylesInto$lambda$lambda$lambda(this$0, $cssRule, $styles));
      return Unit_instance;
    };
  }
  function CssStyle$addStylesInto$lambda_0($classNames, $cssRuleKey, $styleSheet, $layer, this$0) {
    return function (name, styles) {
      var tmp;
      if (isNotEmpty(styles)) {
        $classNames.u(name);
        // Inline function 'kotlin.text.orEmpty' call
        var tmp0_elvis_lhs = $cssRuleKey.n2v_1;
        var cssRule = name + (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
        addStylesInto$mediaOrInPlace($styleSheet, $cssRuleKey.m2v_1, CssStyle$addStylesInto$lambda$lambda_0($layer, this$0, cssRule, styles));
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function CssStyle(init, extraModifier) {
    var tmp;
    if (extraModifier === VOID) {
      tmp = CssStyle$_init_$lambda_598xul;
    } else {
      tmp = extraModifier;
    }
    extraModifier = tmp;
    this.z2u_1 = init;
    this.a2v_1 = extraModifier;
  }
  protoOf(CssStyle).b2v = function (selector, styleSheet, layer) {
    var classNames = mutableListOf([selector]);
    var lightModifiers = assertNoAttributeModifiers(mergeCssModifiers(new CssStyleScope(ColorMode_LIGHT_getInstance()), this, this.z2u_1), this, selector, layer);
    var darkModifiers = assertNoAttributeModifiers(mergeCssModifiers(new CssStyleScope(ColorMode_DARK_getInstance()), this, this.z2u_1), this, selector, layer);
    var tmp = Companion_instance_6;
    var tmp0_safe_receiver = lightModifiers.p2(Companion_getInstance_4().o2v_1);
    var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i2v_1;
    var tmp1_safe_receiver = darkModifiers.p2(Companion_getInstance_4().o2v_1);
    var tmp2_safe_receiver = tmp.p2v(tmp_0, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.i2v_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      withFinalSelectorName(this, selector, tmp2_safe_receiver, CssStyle$addStylesInto$lambda(classNames, styleSheet, layer, this));
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = plus_0(lightModifiers.d2(), darkModifiers.d2());
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.style.CssStyle.addStylesInto.<anonymous>' call
      if (!element.equals(Companion_getInstance_4().o2v_1)) {
        destination.u(element);
      }
    }
    var allCssRuleKeys = destination;
    var tmp3_iterator = allCssRuleKeys.k();
    $l$loop: while (tmp3_iterator.x()) {
      var cssRuleKey = tmp3_iterator.z();
      var tmp_1 = Companion_instance_6;
      var tmp4_safe_receiver = lightModifiers.p2(cssRuleKey);
      var tmp_2 = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.i2v_1;
      var tmp5_safe_receiver = darkModifiers.p2(cssRuleKey);
      var tmp6_elvis_lhs = tmp_1.p2v(tmp_2, tmp5_safe_receiver == null ? null : tmp5_safe_receiver.i2v_1);
      var tmp_3;
      if (tmp6_elvis_lhs == null) {
        continue $l$loop;
      } else {
        tmp_3 = tmp6_elvis_lhs;
      }
      var group = tmp_3;
      withFinalSelectorName(this, selector, group, CssStyle$addStylesInto$lambda_0(classNames, cssRuleKey, styleSheet, layer, this));
    }
    return _ClassSelectors___init__impl__tbnzdx(classNames);
  };
  protoOf(CssStyle).c2v = function (classSelectors) {
    return new ImmutableCssStyle(classSelectors, this.a2v_1);
  };
  function CssStyle_0(extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    return new CssStyle$2(init, extraModifier);
  }
  function CssStyleScope(colorMode) {
    StyleScope.call(this);
    this.x2u_1 = colorMode;
  }
  function ComponentKind() {
  }
  function RestrictedKind() {
  }
  function CssStyleBaseScope(colorMode) {
    this.t2v_1 = colorMode;
  }
  function Light(styles) {
    this.h2v_1 = styles;
  }
  function Dark(styles) {
    this.g2v_1 = styles;
  }
  function ColorAgnostic(styles) {
    this.f2v_1 = styles;
  }
  function ColorAware(lightStyles, darkStyles) {
    this.d2v_1 = lightStyles;
    this.e2v_1 = darkStyles;
  }
  function Companion_2() {
  }
  protoOf(Companion_2).p2v = function (lightModifiers, darkModifiers) {
    var tmp;
    if (lightModifiers == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.style.Companion.from.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_0 = new ComparableStyleScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.style.Companion.from.<anonymous>.<anonymous>' call
      toStyles(lightModifiers)(this_0);
      tmp = this_0;
    }
    var lightStyles = tmp;
    var tmp_0;
    if (darkModifiers == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.style.Companion.from.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_1 = new ComparableStyleScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.style.Companion.from.<anonymous>.<anonymous>' call
      toStyles(darkModifiers)(this_1);
      tmp_0 = this_1;
    }
    var darkStyles = tmp_0;
    if (lightStyles == null ? darkStyles == null : false)
      return null;
    if (!(lightStyles == null) ? darkStyles == null : false)
      return new Light(lightStyles);
    if (lightStyles == null ? !(darkStyles == null) : false)
      return new Dark(darkStyles);
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(!(lightStyles == null) ? !(darkStyles == null) : false)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp_1;
    if (equals(lightStyles, darkStyles)) {
      tmp_1 = new ColorAgnostic(lightStyles);
    } else {
      tmp_1 = new ColorAware(lightStyles, darkStyles);
    }
    return tmp_1;
  };
  var Companion_instance_6;
  function Companion_getInstance_3() {
    return Companion_instance_6;
  }
  function _ClassSelectors___init__impl__tbnzdx(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _ClassSelectors___get_classNames__impl__eyto04($this) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = _get_value__a43j40($this);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.k();
    while (tmp0_iterator.x()) {
      var item = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.style.ClassSelectors.<get-classNames>.<anonymous>' call
      var tmp$ret$0 = substringAfterLast(item, _Char___init__impl__6a9atx(46));
      destination.u(tmp$ret$0);
    }
    return destination;
  }
  function ImmutableCssStyle(classSelectors, extraModifier) {
    this.u2v_1 = extraModifier;
    this.v2v_1 = toSet(_ClassSelectors___get_classNames__impl__eyto04(classSelectors));
  }
  protoOf(ImmutableCssStyle).w2v = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.r17(114788234);
    if (isTraceInProgress()) {
      traceEventStart(114788234, $changed, -1, 'com.varabyte.kobweb.silk.style.ImmutableCssStyle.toModifier (CssStyle.kt:415)');
    }
    $composer_0.r17(357888305);
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var this_0 = this.v2v_1;
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.style.ImmutableCssStyle.toModifier.<anonymous>' call
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = Companion_instance_9.x2v($composer_0, 6).a2w().r9_1.toLowerCase();
      if (!endsWith_0(element, tmp$ret$1)) {
        destination.u(element);
      }
    }
    $composer_0.s17();
    var currentClassNames = destination;
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!currentClassNames.o()) {
      var tmp_0 = Companion_instance;
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp$ret$6 = copyToArray(currentClassNames);
      tmp = classNames(tmp_0, tmp$ret$6.slice());
    } else {
      tmp = Companion_instance;
    }
    var tmp0 = tmp.j2p(this.u2v_1($composer_0, 0));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.s17();
    return tmp0;
  };
  function GeneralKind() {
  }
  function CssStyle_1(extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    return new CssStyle$4(init, extraModifier);
  }
  function ExtendingCssStyle() {
  }
  function toModifier(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.r17(748086722);
    if (isTraceInProgress()) {
      traceEventStart(748086722, $changed, -1, 'com.varabyte.kobweb.silk.style.toModifier (CssStyle.kt:557)');
    }
    var tmp0 = _toModifier(_this__u8e3s4, $composer_0, 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.s17();
    return tmp0;
  }
  function _toModifier(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.r17(1265379901);
    if (isTraceInProgress()) {
      traceEventStart(1265379901, $changed, -1, 'com.varabyte.kobweb.silk.style._toModifier (CssStyle.kt:554)');
    }
    var tmp0 = getValue(get_SilkTheme().e2t_1, _this__u8e3s4).w2v($composer_0, 8);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.s17();
    return tmp0;
  }
  function toModifier_0(_this__u8e3s4, variants, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.r17(-431222543);
    if (isTraceInProgress()) {
      traceEventStart(-431222543, $changed, -1, 'com.varabyte.kobweb.silk.style.toModifier (CssStyle.kt:568)');
    }
    var tmp = _toModifier(_this__u8e3s4, $composer_0, 14 & $changed);
    var tmp0_safe_receiver = combine(toList(variants), $composer_0, 8);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w2v($composer_0, 0);
    var tmp0 = tmp.j2p(tmp1_elvis_lhs == null ? Companion_instance : tmp1_elvis_lhs);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.s17();
    return tmp0;
  }
  function base(_this__u8e3s4, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    return base_2(_this__u8e3s4, base$lambda(extraModifier), init);
  }
  function CssStyle_2(extraModifier, init) {
    return new CssStyle$6(init, extraModifier);
  }
  function base_0(_this__u8e3s4, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    return base_1(_this__u8e3s4, base$lambda_0(extraModifier), init);
  }
  function base_1(_this__u8e3s4, extraModifier, init) {
    return new base$3(extraModifier, init);
  }
  function base_2(_this__u8e3s4, extraModifier, init) {
    return CssStyle_2(extraModifier, base$lambda_1(init));
  }
  function toModifier_1(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.r17(748086722);
    if (isTraceInProgress()) {
      traceEventStart(748086722, $changed, -1, 'com.varabyte.kobweb.silk.style.toModifier (CssStyle.kt:565)');
    }
    var tmp0 = _toModifier(_this__u8e3s4, $composer_0, 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.s17();
    return tmp0;
  }
  function CssStyle$o$_init_$lambda_60e9n6($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.r17(-256215983);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-256215983, $changed, -1, 'com.varabyte.kobweb.silk.style.CssStyle.<no name provided>.<init>.<anonymous> (CssStyle.kt:514)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifier;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.s17();
      return tmp0;
    };
  }
  function CssStyle$2($init, $extraModifier) {
    CssStyle.call(this, $init, CssStyle$o$_init_$lambda_60e9n6($extraModifier));
  }
  function CssStyle$o$_init_$lambda_60e9n6_0($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.r17(-256215983);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-256215983, $changed, -1, 'com.varabyte.kobweb.silk.style.CssStyle.<no name provided>.<init>.<anonymous> (CssStyle.kt:496)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifier;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.s17();
      return tmp0;
    };
  }
  function CssStyle$4($init, $extraModifier) {
    CssStyle.call(this, $init, CssStyle$o$_init_$lambda_60e9n6_0($extraModifier));
  }
  function base$lambda($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.r17(-2139862911);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-2139862911, $changed, -1, 'com.varabyte.kobweb.silk.style.base.<anonymous> (CssStyle.kt:524)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifier;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.s17();
      return tmp0;
    };
  }
  function CssStyle$6($init, $extraModifier) {
    CssStyle.call(this, $init, $extraModifier);
  }
  function base$lambda_0($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.r17(-2139862911);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-2139862911, $changed, -1, 'com.varabyte.kobweb.silk.style.base.<anonymous> (CssStyle.kt:506)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifier;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.s17();
      return tmp0;
    };
  }
  function base$o$_init_$lambda$lambda_d0jdie($this_null, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new CssStyleBaseScope($this_null.x2u_1);
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function base$o$_init_$lambda_5dljwv($init) {
    return function ($this$null) {
      $this$null.y2u(base$o$_init_$lambda$lambda_d0jdie($this$null, $init));
      return Unit_instance;
    };
  }
  function base$3($extraModifier, $init) {
    CssStyle.call(this, base$o$_init_$lambda_5dljwv($init), $extraModifier);
  }
  function base$lambda$lambda($this_CssStyle, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new CssStyleBaseScope($this_CssStyle.x2u_1);
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function base$lambda_1($init) {
    return function ($this$CssStyle) {
      $this$CssStyle.y2u(base$lambda$lambda($this$CssStyle, $init));
      return Unit_instance;
    };
  }
  function CssStyleVariant() {
  }
  protoOf(CssStyleVariant).b2w = function (next) {
    return new CompositeCssStyleVariant(this, next);
  };
  function SimpleCssStyleVariant_init_$Init$(init, extraModifier, baseStyle, $this) {
    SimpleCssStyleVariant.call($this, new SimpleCssStyleVariant$1(init, extraModifier), baseStyle);
    return $this;
  }
  function SimpleCssStyleVariant_init_$Create$(init, extraModifier, baseStyle) {
    return SimpleCssStyleVariant_init_$Init$(init, extraModifier, baseStyle, objectCreate(protoOf(SimpleCssStyleVariant)));
  }
  function SimpleCssStyleVariant$1($init, $extraModifier) {
    CssStyle.call(this, $init, $extraModifier);
  }
  function SimpleCssStyleVariant(cssStyle, baseStyle) {
    CssStyleVariant.call(this);
    this.c2w_1 = cssStyle;
    this.d2w_1 = baseStyle;
  }
  protoOf(SimpleCssStyleVariant).w2v = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.r17(-1935545974);
    if (isTraceInProgress()) {
      traceEventStart(-1935545974, $changed, -1, 'com.varabyte.kobweb.silk.style.SimpleCssStyleVariant.toModifier (CssStyleVariant.kt:46)');
    }
    var tmp0 = toModifier_0(this.c2w_1, [], $composer_0, 64);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.s17();
    return tmp0;
  };
  function ExtendingCssStyleVariant() {
  }
  function addVariant(_this__u8e3s4, extraModifier, init) {
    return new SimpleCssStyleVariant(new addVariant$1(init, extraModifier), _this__u8e3s4);
  }
  function CompositeCssStyleVariant(head, tail) {
    CssStyleVariant.call(this);
    this.e2w_1 = head;
    this.f2w_1 = tail;
  }
  protoOf(CompositeCssStyleVariant).w2v = function ($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.r17(1761922567);
    if (isTraceInProgress()) {
      traceEventStart(1761922567, $changed, -1, 'com.varabyte.kobweb.silk.style.CompositeCssStyleVariant.toModifier (CssStyleVariant.kt:54)');
    }
    var tmp0 = this.e2w_1.w2v($composer_0, 0).j2p(this.f2w_1.w2v($composer_0, 0));
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.s17();
    return tmp0;
  };
  function combine(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.r17(867312062);
    if (isTraceInProgress()) {
      traceEventStart(867312062, $changed, -1, 'com.varabyte.kobweb.silk.style.combine (CssStyleVariant.kt:97)');
    }
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.collections.reduceOrNull' call
      var iterator = _this__u8e3s4.k();
      if (!iterator.x()) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var accumulator = iterator.z();
      while (iterator.x()) {
        // Inline function 'com.varabyte.kobweb.silk.style.combine.<anonymous>' call
        var acc = accumulator;
        var variant = iterator.z();
        var tmp;
        if (!(acc == null) ? !(variant == null) : false) {
          tmp = acc.b2w(variant);
        } else {
          tmp = acc == null ? variant : acc;
        }
        accumulator = tmp;
      }
      tmp$ret$0 = accumulator;
    }
    var tmp0 = tmp$ret$0;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.s17();
    return tmp0;
  }
  function addVariantBase(_this__u8e3s4, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    return addVariantBase_0(_this__u8e3s4, addVariantBase$lambda(extraModifier), init);
  }
  function addVariant_0(_this__u8e3s4, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    return addVariant(_this__u8e3s4, addVariant$lambda(extraModifier), init);
  }
  function addVariantBase_0(_this__u8e3s4, extraModifier, init) {
    return SimpleCssStyleVariant_init_$Create$(addVariantBase$lambda_0(init), extraModifier, _this__u8e3s4);
  }
  function addVariant$1($init, $extraModifier) {
    CssStyle.call(this, $init, $extraModifier);
  }
  function addVariantBase$lambda($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.r17(754846533);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(754846533, $changed, -1, 'com.varabyte.kobweb.silk.style.addVariantBase.<anonymous> (CssStyleVariant.kt:129)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifier;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.s17();
      return tmp0;
    };
  }
  function addVariant$lambda($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.r17(1967918819);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(1967918819, $changed, -1, 'com.varabyte.kobweb.silk.style.addVariant.<anonymous> (CssStyleVariant.kt:107)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifier;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.s17();
      return tmp0;
    };
  }
  function addVariantBase$lambda$lambda($this_$receiver, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new CssStyleBaseScope($this_$receiver.x2u_1);
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function addVariantBase$lambda_0($init) {
    return function ($this$$receiver) {
      $this$$receiver.y2u(addVariantBase$lambda$lambda($this$$receiver, $init));
      return Unit_instance;
    };
  }
  function get_selectorSeparators() {
    _init_properties_StyleScope_kt__rik58j();
    return selectorSeparators;
  }
  var selectorSeparators;
  function StyleScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.s2u_1 = ArrayList_init_$Create$();
    this.t2u_1 = this.s2u_1;
  }
  protoOf(StyleScope).y2u = function (createModifier) {
    this.s2u_1.u(new CssModifier(createModifier()));
  };
  protoOf(StyleScope).u2u = function (mediaQuery, suffix, createModifier) {
    this.s2u_1.u(new CssModifier(createModifier(), mediaQuery, suffix));
  };
  protoOf(StyleScope).q2v = function (suffix, createModifier) {
    this.s2u_1.u(new CssModifier(createModifier(), null, suffix));
  };
  protoOf(StyleScope).r2v = function (mediaQuery, createModifier) {
    this.s2u_1.u(new CssModifier(createModifier(), mediaQuery));
  };
  protoOf(StyleScope).s2v = function (_this__u8e3s4, createModifier) {
    this.r2v(toMinWidthQuery(_this__u8e3s4), createModifier);
  };
  function Companion_3() {
    Companion_instance_7 = this;
    this.o2v_1 = new Key(null, null);
  }
  var Companion_instance_7;
  function Companion_getInstance_4() {
    if (Companion_instance_7 == null)
      new Companion_3();
    return Companion_instance_7;
  }
  function Key(mediaQuery, suffix) {
    this.m2v_1 = mediaQuery;
    this.n2v_1 = suffix;
  }
  protoOf(Key).toString = function () {
    return 'Key(mediaQuery=' + this.m2v_1 + ', suffix=' + this.n2v_1 + ')';
  };
  protoOf(Key).hashCode = function () {
    var result = this.m2v_1 == null ? 0 : getStringHashCode(this.m2v_1);
    result = imul(result, 31) + (this.n2v_1 == null ? 0 : getStringHashCode(this.n2v_1)) | 0;
    return result;
  };
  protoOf(Key).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Key))
      return false;
    var tmp0_other_with_cast = other instanceof Key ? other : THROW_CCE();
    if (!(this.m2v_1 == tmp0_other_with_cast.m2v_1))
      return false;
    if (!(this.n2v_1 == tmp0_other_with_cast.n2v_1))
      return false;
    return true;
  };
  function CssModifier(modifier, mediaQuery, suffix) {
    Companion_getInstance_4();
    mediaQuery = mediaQuery === VOID ? null : mediaQuery;
    suffix = suffix === VOID ? null : suffix;
    this.i2v_1 = modifier;
    this.j2v_1 = mediaQuery;
    var tmp = this;
    var tmp_0;
    if (suffix == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_1;
      // Inline function 'com.varabyte.kobweb.silk.style.CssModifier.suffix.<anonymous>' call
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(suffix)) {
        tmp_1 = suffix;
      } else {
        tmp_1 = null;
      }
      tmp_0 = tmp_1;
    }
    var tmp1_safe_receiver = tmp_0;
    var tmp_2;
    if (tmp1_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.style.CssModifier.suffix.<anonymous>' call
      tmp_2 = !get_selectorSeparators().m(new Char(first(tmp1_safe_receiver))) ? ' ' + tmp1_safe_receiver : tmp1_safe_receiver;
    }
    tmp.k2v_1 = tmp_2;
  }
  protoOf(CssModifier).l2v = function (other) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!((!(this === other) ? equals(this.j2v_1, other.j2v_1) : false) ? this.k2v_1 == other.k2v_1 : false)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return new CssModifier(this.i2v_1.j2p(other.i2v_1), this.j2v_1, this.k2v_1);
  };
  protoOf(CssModifier).i2 = function () {
    var tmp0_safe_receiver = this.j2v_1;
    return new Key(tmp0_safe_receiver == null ? null : toString(tmp0_safe_receiver), this.k2v_1);
  };
  var properties_initialized_StyleScope_kt_8wepyz;
  function _init_properties_StyleScope_kt__rik58j() {
    if (!properties_initialized_StyleScope_kt_8wepyz) {
      properties_initialized_StyleScope_kt_8wepyz = true;
      selectorSeparators = setOf([new Char(_Char___init__impl__6a9atx(32)), new Char(_Char___init__impl__6a9atx(62)), new Char(_Char___init__impl__6a9atx(43)), new Char(_Char___init__impl__6a9atx(126)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(58)), new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(91))]);
    }
  }
  function _get_comparableKeyframeStyles__erog4h($this) {
    // Inline function 'kotlin.collections.mapValues' call
    var this_0 = $this.u2t_1;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$_0(mapCapacity(this_0.i()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator = this_0.f2().k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp = element.i2();
      // Inline function 'com.varabyte.kobweb.silk.style.animation.KeyframesBuilder.<get-comparableKeyframeStyles>.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var modifier = element.j2();
      // Inline function 'kotlin.apply' call
      var this_1 = new ComparableStyleScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.style.animation.KeyframesBuilder.<get-comparableKeyframeStyles>.<anonymous>.<anonymous>' call
      toStyles(modifier)(this_1);
      destination.g2(tmp, this_1);
    }
    return destination;
  }
  function KeyframesBuilder(colorMode) {
    this.t2t_1 = colorMode;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.u2t_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(KeyframesBuilder).g2w = function (createStyle) {
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.u2t_1;
    var pair = to(From_getInstance(), createStyle());
    this_0.g2(pair.ce_1, pair.de_1);
  };
  protoOf(KeyframesBuilder).h2w = function (createStyle) {
    // Inline function 'kotlin.collections.plusAssign' call
    var this_0 = this.u2t_1;
    var pair = to(To_getInstance(), createStyle());
    this_0.g2(pair.ce_1, pair.de_1);
  };
  protoOf(KeyframesBuilder).equals = function (other) {
    if (!(other instanceof KeyframesBuilder))
      return false;
    return this === other ? true : equals(_get_comparableKeyframeStyles__erog4h(this), _get_comparableKeyframeStyles__erog4h(other));
  };
  protoOf(KeyframesBuilder).hashCode = function () {
    return hashCode(_get_comparableKeyframeStyles__erog4h(this));
  };
  protoOf(KeyframesBuilder).v2t = function (stylesheet, keyframesName) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.u2t_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(this_0.i());
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this_0.f2().k();
    while (tmp0_iterator.x()) {
      var item = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.style.animation.KeyframesBuilder.addKeyframesIntoStylesheet.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var keyframe = item.i2();
      // Inline function 'kotlin.collections.component2' call
      var modifier = item.j2();
      var styles = toStyles(modifier);
      var cssRuleBuilder = new StyleScopeBuilder();
      styles(cssRuleBuilder);
      var tmp$ret$3 = new CSSKeyframeRuleDeclaration(keyframe, cssRuleBuilder);
      destination.u(tmp$ret$3);
    }
    var keyframeRules = destination;
    stylesheet.i2c(new CSSKeyframesRuleDeclaration(keyframesName, keyframeRules));
  };
  function Companion_4() {
  }
  protoOf(Companion_4).i2w = function (build) {
    // Inline function 'kotlin.collections.count' call
    // Inline function 'kotlin.collections.map' call
    var this_0 = listOf([ColorMode_LIGHT_getInstance(), ColorMode_DARK_getInstance()]);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.k();
    while (tmp0_iterator.x()) {
      var item = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.style.animation.Companion.isColorModeAgnostic.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_1 = new KeyframesBuilder(item);
      // Inline function 'kotlin.contracts.contract' call
      build(this_1);
      destination.u(this_1);
    }
    return distinct(destination).i() === 1;
  };
  var Companion_instance_8;
  function Companion_getInstance_5() {
    return Companion_instance_8;
  }
  function Keyframes$usesColorMode$delegate$lambda(this$0) {
    return function () {
      return !Companion_instance_8.i2w(this$0.j2w_1);
    };
  }
  function Keyframes(init) {
    this.j2w_1 = init;
    var tmp = this;
    tmp.k2w_1 = lazy(Keyframes$usesColorMode$delegate$lambda(this));
  }
  var Breakpoint_ZERO_instance;
  var Breakpoint_SM_instance;
  var Breakpoint_MD_instance;
  var Breakpoint_LG_instance;
  var Breakpoint_XL_instance;
  function values() {
    return [Breakpoint_ZERO_getInstance(), Breakpoint_SM_getInstance(), Breakpoint_MD_getInstance(), Breakpoint_LG_getInstance(), Breakpoint_XL_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var Breakpoint_entriesInitialized;
  function Breakpoint_initEntries() {
    if (Breakpoint_entriesInitialized)
      return Unit_instance;
    Breakpoint_entriesInitialized = true;
    Breakpoint_ZERO_instance = new Breakpoint('ZERO', 0);
    Breakpoint_SM_instance = new Breakpoint('SM', 1);
    Breakpoint_MD_instance = new Breakpoint('MD', 2);
    Breakpoint_LG_instance = new Breakpoint('LG', 3);
    Breakpoint_XL_instance = new Breakpoint('XL', 4);
  }
  var $ENTRIES;
  function Breakpoint(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Breakpoint_ZERO_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_ZERO_instance;
  }
  function Breakpoint_SM_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_SM_instance;
  }
  function Breakpoint_MD_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_MD_instance;
  }
  function Breakpoint_LG_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_LG_instance;
  }
  function Breakpoint_XL_getInstance() {
    Breakpoint_initEntries();
    return Breakpoint_XL_instance;
  }
  function get_DisplayIfAtLeastZeroStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastZeroStyle;
  }
  var DisplayIfAtLeastZeroStyle;
  function get_DisplayIfAtLeastSmStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastSmStyle;
  }
  var DisplayIfAtLeastSmStyle;
  function get_DisplayIfAtLeastMdStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastMdStyle;
  }
  var DisplayIfAtLeastMdStyle;
  function get_DisplayIfAtLeastLgStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastLgStyle;
  }
  var DisplayIfAtLeastLgStyle;
  function get_DisplayIfAtLeastXlStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayIfAtLeastXlStyle;
  }
  var DisplayIfAtLeastXlStyle;
  function get_DisplayUntilZeroStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilZeroStyle;
  }
  var DisplayUntilZeroStyle;
  function get_DisplayUntilSmStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilSmStyle;
  }
  var DisplayUntilSmStyle;
  function get_DisplayUntilMdStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilMdStyle;
  }
  var DisplayUntilMdStyle;
  function get_DisplayUntilLgStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilLgStyle;
  }
  var DisplayUntilLgStyle;
  function get_DisplayUntilXlStyle() {
    _init_properties_BreakpointConditions_kt__53om95();
    return DisplayUntilXlStyle;
  }
  var DisplayUntilXlStyle;
  function invert(_this__u8e3s4) {
    _init_properties_BreakpointConditions_kt__53om95();
    return new Raw('not all and ' + _this__u8e3s4);
  }
  function DisplayIfAtLeastZeroStyle$lambda($this$CssStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_ZERO_getInstance()));
    $this$CssStyle.r2v(tmp, DisplayIfAtLeastZeroStyle$lambda$lambda);
    return Unit_instance;
  }
  function DisplayIfAtLeastZeroStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastSmStyle$lambda($this$CssStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_SM_getInstance()));
    $this$CssStyle.r2v(tmp, DisplayIfAtLeastSmStyle$lambda$lambda);
    return Unit_instance;
  }
  function DisplayIfAtLeastSmStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastMdStyle$lambda($this$CssStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_MD_getInstance()));
    $this$CssStyle.r2v(tmp, DisplayIfAtLeastMdStyle$lambda$lambda);
    return Unit_instance;
  }
  function DisplayIfAtLeastMdStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastLgStyle$lambda($this$CssStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_LG_getInstance()));
    $this$CssStyle.r2v(tmp, DisplayIfAtLeastLgStyle$lambda$lambda);
    return Unit_instance;
  }
  function DisplayIfAtLeastLgStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayIfAtLeastXlStyle$lambda($this$CssStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = invert(toMinWidthQuery(Breakpoint_XL_getInstance()));
    $this$CssStyle.r2v(tmp, DisplayIfAtLeastXlStyle$lambda$lambda);
    return Unit_instance;
  }
  function DisplayIfAtLeastXlStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilZeroStyle$lambda($this$CssStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_ZERO_getInstance();
    $this$CssStyle.s2v(tmp, DisplayUntilZeroStyle$lambda$lambda);
    return Unit_instance;
  }
  function DisplayUntilZeroStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilSmStyle$lambda($this$CssStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_SM_getInstance();
    $this$CssStyle.s2v(tmp, DisplayUntilSmStyle$lambda$lambda);
    return Unit_instance;
  }
  function DisplayUntilSmStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilMdStyle$lambda($this$CssStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_MD_getInstance();
    $this$CssStyle.s2v(tmp, DisplayUntilMdStyle$lambda$lambda);
    return Unit_instance;
  }
  function DisplayUntilMdStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilLgStyle$lambda($this$CssStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_LG_getInstance();
    $this$CssStyle.s2v(tmp, DisplayUntilLgStyle$lambda$lambda);
    return Unit_instance;
  }
  function DisplayUntilLgStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  function DisplayUntilXlStyle$lambda($this$CssStyle) {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Breakpoint_XL_getInstance();
    $this$CssStyle.s2v(tmp, DisplayUntilXlStyle$lambda$lambda);
    return Unit_instance;
  }
  function DisplayUntilXlStyle$lambda$lambda() {
    _init_properties_BreakpointConditions_kt__53om95();
    var tmp = Companion_instance;
    // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
    // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return display(tmp, 'none');
  }
  var properties_initialized_BreakpointConditions_kt_kx7tgr;
  function _init_properties_BreakpointConditions_kt__53om95() {
    if (!properties_initialized_BreakpointConditions_kt_kx7tgr) {
      properties_initialized_BreakpointConditions_kt_kx7tgr = true;
      DisplayIfAtLeastZeroStyle = CssStyle_1(VOID, DisplayIfAtLeastZeroStyle$lambda);
      DisplayIfAtLeastSmStyle = CssStyle_1(VOID, DisplayIfAtLeastSmStyle$lambda);
      DisplayIfAtLeastMdStyle = CssStyle_1(VOID, DisplayIfAtLeastMdStyle$lambda);
      DisplayIfAtLeastLgStyle = CssStyle_1(VOID, DisplayIfAtLeastLgStyle$lambda);
      DisplayIfAtLeastXlStyle = CssStyle_1(VOID, DisplayIfAtLeastXlStyle$lambda);
      DisplayUntilZeroStyle = CssStyle_1(VOID, DisplayUntilZeroStyle$lambda);
      DisplayUntilSmStyle = CssStyle_1(VOID, DisplayUntilSmStyle$lambda);
      DisplayUntilMdStyle = CssStyle_1(VOID, DisplayUntilMdStyle$lambda);
      DisplayUntilLgStyle = CssStyle_1(VOID, DisplayUntilLgStyle$lambda);
      DisplayUntilXlStyle = CssStyle_1(VOID, DisplayUntilXlStyle$lambda);
    }
  }
  function BreakpointValues(sm, md, lg, xl) {
    this.l2w_1 = sm;
    this.m2w_1 = md;
    this.n2w_1 = lg;
    this.o2w_1 = xl;
  }
  protoOf(BreakpointValues).toString = function () {
    return 'BreakpointValues(sm=' + this.l2w_1 + ', md=' + this.m2w_1 + ', lg=' + this.n2w_1 + ', xl=' + this.o2w_1 + ')';
  };
  protoOf(BreakpointValues).hashCode = function () {
    var result = hashCode(this.l2w_1);
    result = imul(result, 31) + hashCode(this.m2w_1) | 0;
    result = imul(result, 31) + hashCode(this.n2w_1) | 0;
    result = imul(result, 31) + hashCode(this.o2w_1) | 0;
    return result;
  };
  protoOf(BreakpointValues).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BreakpointValues))
      return false;
    var tmp0_other_with_cast = other instanceof BreakpointValues ? other : THROW_CCE();
    if (!equals(this.l2w_1, tmp0_other_with_cast.l2w_1))
      return false;
    if (!equals(this.m2w_1, tmp0_other_with_cast.m2w_1))
      return false;
    if (!equals(this.n2w_1, tmp0_other_with_cast.n2w_1))
      return false;
    if (!equals(this.o2w_1, tmp0_other_with_cast.o2w_1))
      return false;
    return true;
  };
  function BreakpointSizes(sm, md, lg, xl) {
    return new BreakpointValues(new Rem(sm), new Rem(md), new Rem(lg), new Rem(xl));
  }
  function Rem(value) {
    BreakpointUnitValue.call(this, value);
  }
  function BreakpointUnitValue(width) {
    this.p2w_1 = width;
  }
  function get_ariaDisabled(_this__u8e3s4) {
    return new OfAttributeSelector(_this__u8e3s4, 'aria-disabled="true"');
  }
  function not(_this__u8e3s4, params) {
    return Companion_instance_4.w2t(_this__u8e3s4, 'not', params.slice());
  }
  function get_hover(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'hover');
  }
  function get_active(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'active');
  }
  function get_focusVisible(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'focus-visible');
  }
  function get_placeholder(_this__u8e3s4) {
    return new OfPseudoElement(_this__u8e3s4, 'placeholder');
  }
  function get_ariaInvalid(_this__u8e3s4) {
    return new OfAttributeSelector(_this__u8e3s4, 'aria-invalid="true"');
  }
  function get_disabled(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'disabled');
  }
  function get_link(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'link');
  }
  function get_visited(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'visited');
  }
  function get_focus(_this__u8e3s4) {
    return new OfPseudoClass(_this__u8e3s4, 'focus');
  }
  function set__SilkTheme(_set____db54di) {
    _SilkTheme = _set____db54di;
  }
  var _SilkTheme;
  function _registerStyle($this, name, style, kind, layer) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme._registerStyle.<anonymous>' call
    var it = $this.b2s_1.p2(name);
    // Inline function 'kotlin.contracts.contract' call
    if (!(it == null ? true : it === style)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme._registerStyle.<anonymous>' call
      var message = trimIndent('\n                Attempting to register a second CssStyle with a name that\'s already used: "' + name + '"\n\n                If this was an intentional override, you should use `replaceStyle` instead.\n            ');
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    $this.a2s_1.g2(name, style);
    // Inline function 'kotlin.collections.set' call
    $this.e2s_1.g2(style, name);
    var tmp;
    if (layer == null) {
      // Inline function 'kotlin.takeIf' call
      var tmp_0;
      if (kind.equals(getKClass(ComponentKind))) {
        tmp_0 = 'component-styles';
      } else if (kind.equals(getKClass(RestrictedKind))) {
        tmp_0 = 'restricted-styles';
      } else if (kind.equals(getKClass(GeneralKind))) {
        tmp_0 = 'general-styles';
      } else {
        var message_0 = 'Unknown kind: ' + kind;
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
      var this_0 = tmp_0;
      // Inline function 'kotlin.contracts.contract' call
      var tmp_1;
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme._registerStyle.<anonymous>' call
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(this_0) > 0) {
        tmp_1 = this_0;
      } else {
        tmp_1 = null;
      }
      tmp = tmp_1;
    } else {
      tmp = layer;
    }
    var finalLayer = tmp;
    if (finalLayer == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.g2s_1.g2(name, finalLayer);
    }
    if (style instanceof ExtendingCssStyle) {
      // Inline function 'kotlin.collections.getOrPut' call
      var this_1 = $this.k2s_1;
      var value = this_1.p2(style);
      var tmp_2;
      if (value == null) {
        // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme._registerStyle.<anonymous>' call
        // Inline function 'kotlin.collections.mutableListOf' call
        var answer = ArrayList_init_$Create$();
        this_1.g2(style, answer);
        tmp_2 = answer;
      } else {
        tmp_2 = value;
      }
      tmp_2.u(style.s2w_1);
    }
  }
  function updateReplaced($this, originalStyle, newStyle) {
    // Inline function 'kotlin.collections.set' call
    $this.i2s_1.g2(originalStyle, newStyle);
    var tmp0_safe_receiver = $this.k2s_1.h2(originalStyle);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.k2s_1.g2(newStyle, tmp0_safe_receiver);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = $this.k2s_1.e2().k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.updateReplaced.<anonymous>' call
      if (element.v(originalStyle)) {
        element.u(newStyle);
      }
    }
  }
  function MutableSilkTheme$replaceStyle$newStyle$1($init, $extraModifier) {
    CssStyle.call(this, $init, $extraModifier);
  }
  function MutableSilkTheme() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.a2s_1 = LinkedHashMap_init_$Create$();
    this.b2s_1 = this.a2s_1;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.c2s_1 = LinkedHashMap_init_$Create$();
    this.d2s_1 = this.c2s_1;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.e2s_1 = LinkedHashMap_init_$Create$();
    this.f2s_1 = this.e2s_1;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_2.g2s_1 = LinkedHashMap_init_$Create$();
    this.h2s_1 = this.g2s_1;
    var tmp_3 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_3.i2s_1 = LinkedHashMap_init_$Create$();
    this.j2s_1 = this.i2s_1;
    var tmp_4 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_4.k2s_1 = LinkedHashMap_init_$Create$();
    this.l2s_1 = this.k2s_1;
    var tmp_5 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_5.m2s_1 = LinkedHashMap_init_$Create$();
    this.n2s_1 = this.m2s_1;
    var tmp_6 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_6.o2s_1 = LinkedHashMap_init_$Create$();
    this.p2s_1 = this.o2s_1;
    var tmp_7 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_7.q2s_1 = LinkedHashMap_init_$Create$();
    this.r2s_1 = this.q2s_1;
    var tmp_8 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_8.s2s_1 = LinkedHashMap_init_$Create$();
    this.t2s_1 = this.s2s_1;
    var tmp_9 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_9.u2s_1 = LinkedHashMap_init_$Create$();
    this.v2s_1 = this.u2s_1;
    this.w2s_1 = new MutablePalettes();
    this.x2s_1 = BreakpointSizes(get_cssRem(30), get_cssRem(48), get_cssRem(62), get_cssRem(80));
  }
  protoOf(MutableSilkTheme).t2w = function (name, style, layer) {
    return _registerStyle(this, name, style, getKClass(ComponentKind), layer);
  };
  protoOf(MutableSilkTheme).y2s = function (name, style, layer, $super) {
    layer = layer === VOID ? null : layer;
    var tmp;
    if ($super === VOID) {
      this.t2w(name, style, layer);
      tmp = Unit_instance;
    } else {
      tmp = $super.t2w.call(this, name, style, layer);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).u2w = function (name, style, layer) {
    return _registerStyle(this, name, style, getKClass(RestrictedKind), layer);
  };
  protoOf(MutableSilkTheme).v2w = function (name, style, layer, $super) {
    layer = layer === VOID ? null : layer;
    var tmp;
    if ($super === VOID) {
      this.u2w(name, style, layer);
      tmp = Unit_instance;
    } else {
      tmp = $super.u2w.call(this, name, style, layer);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).w2w = function (name, style, layer) {
    return _registerStyle(this, name, style, getKClass(GeneralKind), layer);
  };
  protoOf(MutableSilkTheme).z2s = function (name, style, layer, $super) {
    layer = layer === VOID ? null : layer;
    var tmp;
    if ($super === VOID) {
      this.w2w(name, style, layer);
      tmp = Unit_instance;
    } else {
      tmp = $super.w2w.call(this, name, style, layer);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).x2w = function (style, extraModifier, init) {
    var tmp0_elvis_lhs = this.f2s_1.p2(style);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Attempting to replace a CSS style that was never registered.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var name = tmp;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.j2s_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!!(isInterface(this_0, Map) ? this_0 : THROW_CCE()).m2(style)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.replaceStyle.<anonymous>' call
      var message_0 = 'Attempting to override style "' + name + '" twice';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var newStyle = new MutableSilkTheme$replaceStyle$newStyle$1(init, extraModifier);
    // Inline function 'kotlin.collections.set' call
    this.a2s_1.g2(name, newStyle);
    // Inline function 'kotlin.collections.set' call
    this.e2s_1.g2(newStyle, name);
    updateReplaced(this, style, newStyle);
  };
  protoOf(MutableSilkTheme).y2w = function (name, variant, layer) {
    var tmp0_elvis_lhs = variant instanceof SimpleCssStyleVariant ? variant : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'You can only register variants created by `addVariant` or `addVariantBase`.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var simpleVariant = tmp;
    var tmp_0;
    if (startsWith(name, _Char___init__impl__6a9atx(45))) {
      var tmp1_elvis_lhs = this.f2s_1.p2(simpleVariant.d2w_1);
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        var message_0 = 'When registering variant "' + name + '", somehow its base style was not registered correctly. This is not expected, so please report the issue.';
        throw IllegalStateException_init_$Create$(toString(message_0));
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var baseStyleName = tmp_1;
      tmp_0 = baseStyleName + name;
    } else {
      tmp_0 = name;
    }
    var name_0 = tmp_0;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerVariant.<anonymous>' call
    var it = this.d2s_1.p2(name_0);
    // Inline function 'kotlin.contracts.contract' call
    if (!(it == null ? true : it === variant)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerVariant.<anonymous>' call
      var message_1 = trimIndent('\n            Attempting to register a second variant with a name that\'s already used: "' + name_0 + "\"\n\n            This isn't allowed. Please choose a different name. If there's a usecase for this I'm unaware of,\n            consider filing an issue at https://github.com/varabyte/kobweb/issues\n        ");
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.collections.set' call
    this.c2s_1.g2(name_0, variant);
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.e2s_1;
    var key = variant.c2w_1;
    this_0.g2(key, name_0);
    // Inline function 'kotlin.takeIf' call
    var tmp_2;
    if (layer == null) {
      tmp_2 = 'component-variants';
    } else {
      tmp_2 = layer;
    }
    var this_1 = tmp_2;
    // Inline function 'kotlin.contracts.contract' call
    var tmp_3;
    // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerVariant.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_1) > 0) {
      tmp_3 = this_1;
    } else {
      tmp_3 = null;
    }
    var finalLayer = tmp_3;
    if (finalLayer == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.g2s_1.g2(name_0, finalLayer);
    }
    if (variant instanceof ExtendingCssStyleVariant) {
      // Inline function 'kotlin.collections.getOrPut' call
      var this_2 = this.k2s_1;
      var key_0 = variant.c2w_1;
      var value = this_2.p2(key_0);
      var tmp_4;
      if (value == null) {
        // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerVariant.<anonymous>' call
        // Inline function 'kotlin.collections.mutableListOf' call
        var answer = ArrayList_init_$Create$();
        this_2.g2(key_0, answer);
        tmp_4 = answer;
      } else {
        tmp_4 = value;
      }
      tmp_4.u(variant.b2x_1.c2w_1);
    }
  };
  protoOf(MutableSilkTheme).c2x = function (name, variant, layer, $super) {
    layer = layer === VOID ? null : layer;
    var tmp;
    if ($super === VOID) {
      this.y2w(name, variant, layer);
      tmp = Unit_instance;
    } else {
      tmp = $super.y2w.call(this, name, variant, layer);
    }
    return tmp;
  };
  protoOf(MutableSilkTheme).d2x = function (name, keyframes) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerKeyframes.<anonymous>' call
    var it = this.q2s_1.p2(name);
    // Inline function 'kotlin.contracts.contract' call
    if (!(it == null ? true : it === keyframes)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.MutableSilkTheme.registerKeyframes.<anonymous>' call
      var message = trimIndent('\n                Attempting to register a second keyframes with a name that\'s already used: "' + name + '"\n            ');
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    this.q2s_1.g2(name, keyframes);
    // Inline function 'kotlin.collections.set' call
    this.s2s_1.g2(keyframes, name);
  };
  function registerStylesInto$orderStyles$visit(visited, $dependencies, orderedStyles, style) {
    if (visited.m(style))
      return Unit_instance;
    visited.u(style);
    var tmp0_safe_receiver = $dependencies.p2(style);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = tmp0_safe_receiver.k();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.orderStyles.visit.<anonymous>' call
        registerStylesInto$orderStyles$visit(visited, $dependencies, orderedStyles, element);
      }
    }
    orderedStyles.u(style);
  }
  function registerStylesInto$orderStyles(styles, dependencies) {
    if (dependencies.o())
      return styles;
    // Inline function 'kotlin.collections.mutableListOf' call
    var orderedStyles = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.mutableSetOf' call
    var visited = LinkedHashSet_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = styles.k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.orderStyles.<anonymous>' call
      registerStylesInto$orderStyles$visit(visited, dependencies, orderedStyles, element);
    }
    return orderedStyles;
  }
  function ImmutableSilkTheme(mutableSilkTheme) {
    this.a2t_1 = mutableSilkTheme;
    var tmp = this;
    var tmp_0 = this.a2t_1.w2s_1;
    tmp.b2t_1 = isInterface(tmp_0, Palettes) ? tmp_0 : THROW_CCE();
    this.c2t_1 = this.a2t_1.x2s_1;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_1.d2t_1 = LinkedHashMap_init_$Create$();
    this.e2t_1 = this.d2t_1;
  }
  protoOf(ImmutableSilkTheme).e2x = function (style) {
    return getValue(this.a2t_1.f2s_1, style);
  };
  protoOf(ImmutableSilkTheme).f2t = function (silkStyleSheet) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(_SilkTheme == null)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this.a2t_1.r2s_1.f2().k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerKeyframesInto.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var name = element.i2();
      // Inline function 'kotlin.collections.component2' call
      var keyframes = element.j2();
      silkStyleSheet.k2r(name, keyframes.j2w_1);
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_0 = this.a2t_1.v2s_1.f2().k();
    while (tmp0_iterator_0.x()) {
      var element_0 = tmp0_iterator_0.z();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerKeyframesInto.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var keyframes_0 = element_0.j2();
      registerKeyframes(silkStyleSheet, keyframes_0);
    }
  };
  protoOf(ImmutableSilkTheme).k2t = function (stylesheet) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(_SilkTheme == null)) {
      // Inline function 'kotlin.check.<anonymous>' call
      var message = 'Check failed.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp = this.a2t_1.b2s_1.e2();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var this_0 = this.a2t_1.d2s_1.e2();
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      if (element instanceof SimpleCssStyleVariant) {
        destination.u(element);
      }
    }
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination, 10));
    var tmp0_iterator_0 = destination.k();
    while (tmp0_iterator_0.x()) {
      var item = tmp0_iterator_0.z();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.<anonymous>' call
      var tmp$ret$3 = item.c2w_1;
      destination_0.u(tmp$ret$3);
    }
    var tmp_0 = plus(tmp, destination_0);
    // Inline function 'kotlin.collections.map' call
    var this_1 = this.a2t_1.n2s_1.e2();
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_1, 10));
    var tmp0_iterator_1 = this_1.k();
    while (tmp0_iterator_1.x()) {
      var item_0 = tmp0_iterator_1.z();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.<anonymous>' call
      var tmp$ret$6 = item_0.k2x_1;
      destination_1.u(tmp$ret$6);
    }
    var tmp_1 = plus(tmp_0, destination_1);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.filterIsInstance' call
    // Inline function 'kotlin.collections.filterIsInstanceTo' call
    var this_2 = this.a2t_1.p2s_1.e2();
    var destination_2 = ArrayList_init_$Create$();
    var tmp0_iterator_2 = this_2.k();
    while (tmp0_iterator_2.x()) {
      var element_0 = tmp0_iterator_2.z();
      if (element_0 instanceof SimpleComponentVariant) {
        destination_2.u(element_0);
      }
    }
    // Inline function 'kotlin.collections.mapTo' call
    var destination_3 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination_2, 10));
    var tmp0_iterator_3 = destination_2.k();
    while (tmp0_iterator_3.x()) {
      var item_1 = tmp0_iterator_3.z();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.<anonymous>' call
      var tmp$ret$11 = item_1.l2x_1;
      destination_3.u(tmp$ret$11);
    }
    var allCssStyles = plus(tmp_1, destination_3);
    var allCssStylesSorted = registerStylesInto$orderStyles(allCssStyles, this.a2t_1.l2s_1);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_4 = allCssStylesSorted.k();
    while (tmp0_iterator_4.x()) {
      var element_1 = tmp0_iterator_4.z();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.<anonymous>' call
      var className = this.e2x(element_1);
      var layer = this.a2t_1.h2s_1.p2(className);
      var classSelectors = element_1.b2v('.' + className, stylesheet, layer);
      // Inline function 'kotlin.collections.set' call
      var this_3 = this.d2t_1;
      var value = element_1.c2v(classSelectors);
      this_3.g2(element_1, value);
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_5 = this.a2t_1.j2s_1.f2().k();
    while (tmp0_iterator_5.x()) {
      var element_2 = tmp0_iterator_5.z();
      // Inline function 'com.varabyte.kobweb.silk.theme.ImmutableSilkTheme.registerStylesInto.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var originalStyle = element_2.i2();
      // Inline function 'kotlin.collections.component2' call
      var overrideStyle = element_2.j2();
      // Inline function 'kotlin.collections.set' call
      var this_4 = this.d2t_1;
      var value_0 = getValue(this.d2t_1, overrideStyle);
      this_4.g2(originalStyle, value_0);
    }
  };
  function get_SilkTheme() {
    var tmp0_elvis_lhs = _SilkTheme;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = "You can't access SilkTheme before first calling SilkApp";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function modifyStyleBase(_this__u8e3s4, style, extraModifier, init) {
    extraModifier = extraModifier === VOID ? Companion_instance : extraModifier;
    modifyStyleBase_0(_this__u8e3s4, style, modifyStyleBase$lambda(extraModifier), init);
  }
  function modifyStyleBase_0(_this__u8e3s4, style, extraModifier, init) {
    modifyStyle(_this__u8e3s4, style, extraModifier, modifyStyleBase$lambda_0(init));
  }
  function modifyStyle(_this__u8e3s4, style, extraModifier, init) {
    var tmp0_elvis_lhs = _this__u8e3s4.f2s_1.p2(style);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Attempting to modify a style that was never registered.';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var styleName = tmp;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = _this__u8e3s4.b2s_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(isInterface(this_0, Map) ? this_0 : THROW_CCE()).m2(styleName)) {
      // Inline function 'com.varabyte.kobweb.silk.theme.modifyStyle.<anonymous>' call
      var message_0 = 'Attempting to modify a style that was never registered: "' + styleName + '"';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var existingExtraModifier = style.a2v_1;
    var existingInit = style.z2u_1;
    var tmp_0 = modifyStyle$lambda(existingExtraModifier, extraModifier);
    _this__u8e3s4.x2w(style, tmp_0, modifyStyle$lambda_0(existingInit, init));
  }
  function modifyStyleBase$lambda($extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.r17(-308722568);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(-308722568, $changed, -1, 'com.varabyte.kobweb.silk.theme.modifyStyleBase.<anonymous> (SilkTheme.kt:485)');
        tmp = Unit_instance;
      }
      var tmp0 = $extraModifier;
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.s17();
      return tmp0;
    };
  }
  function modifyStyleBase$lambda$lambda($this_modifyStyle, $init) {
    return function () {
      // Inline function 'kotlin.let' call
      var this_0 = new CssStyleBaseScope($this_modifyStyle.x2u_1);
      // Inline function 'kotlin.contracts.contract' call
      return $init(this_0);
    };
  }
  function modifyStyleBase$lambda_0($init) {
    return function ($this$modifyStyle) {
      $this$modifyStyle.y2u(modifyStyleBase$lambda$lambda($this$modifyStyle, $init));
      return Unit_instance;
    };
  }
  function modifyStyle$lambda($existingExtraModifier, $extraModifier) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.r17(551899353);
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(551899353, $changed, -1, 'com.varabyte.kobweb.silk.theme.modifyStyle.<anonymous> (SilkTheme.kt:473)');
        tmp = Unit_instance;
      }
      var tmp0 = $existingExtraModifier($composer_0, 0).j2p($extraModifier($composer_0, 0));
      var tmp_0;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_0 = Unit_instance;
      }
      $composer_0.s17();
      return tmp0;
    };
  }
  function modifyStyle$lambda_0($existingInit, $init) {
    return function ($this$replaceStyle) {
      $existingInit($this$replaceStyle);
      $init($this$replaceStyle);
      return Unit_instance;
    };
  }
  function toMinWidthQuery(_this__u8e3s4) {
    return new MediaFeature('min-width', toWidth(_this__u8e3s4));
  }
  function toWidth(_this__u8e3s4) {
    var tmp0_safe_receiver = toValue(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p2w_1;
    return tmp1_elvis_lhs == null ? get_px(0) : tmp1_elvis_lhs;
  }
  function toValue(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.s9_1) {
      case 0:
        tmp = null;
        break;
      case 1:
        tmp = get_SilkTheme().c2t_1.l2w_1;
        break;
      case 2:
        tmp = get_SilkTheme().c2t_1.m2w_1;
        break;
      case 3:
        tmp = get_SilkTheme().c2t_1.n2w_1;
        break;
      case 4:
        tmp = get_SilkTheme().c2t_1.o2w_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function get_rootColorModeState() {
    _init_properties_ColorMode_kt__lz79sc();
    // Inline function 'kotlin.getValue' call
    var this_0 = rootColorModeState$delegate;
    rootColorModeState$factory();
    return this_0.j2();
  }
  var rootColorModeState$delegate;
  function get_LocalColorMode() {
    _init_properties_ColorMode_kt__lz79sc();
    return LocalColorMode;
  }
  var LocalColorMode;
  var ColorMode_LIGHT_instance;
  var ColorMode_DARK_instance;
  function Companion_5() {
  }
  protoOf(Companion_5).x2v = function ($composer, $changed) {
    var $composer_0 = $composer;
    if (isTraceInProgress()) {
      traceEventStart(-754713740, $changed, -1, 'com.varabyte.kobweb.silk.theme.colors.ColorMode.Companion.<get-current> (ColorMode.kt:33)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalColorMode();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 2023513938, 'CC:CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.e19(this_0);
    sourceInformationMarkerEnd($composer_1);
    var tmp0_0 = tmp0.j2();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    return tmp0_0;
  };
  var Companion_instance_9;
  function Companion_getInstance_6() {
    return Companion_instance_9;
  }
  var ColorMode_entriesInitialized;
  function ColorMode_initEntries() {
    if (ColorMode_entriesInitialized)
      return Unit_instance;
    ColorMode_entriesInitialized = true;
    ColorMode_LIGHT_instance = new ColorMode('LIGHT', 0);
    ColorMode_DARK_instance = new ColorMode('DARK', 1);
  }
  function ColorMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(ColorMode).a2w = function () {
    var tmp;
    switch (this.s9_1) {
      case 0:
        tmp = ColorMode_DARK_getInstance();
        break;
      case 1:
        tmp = ColorMode_LIGHT_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(ColorMode).m2x = function () {
    return get_LocalColorMode().f1e(mutableStateOf(this));
  };
  function suffixedWith(_this__u8e3s4, colorMode) {
    _init_properties_ColorMode_kt__lz79sc();
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4 + '_' + colorMode.r9_1.toLowerCase();
  }
  function rootColorModeState$delegate$lambda() {
    _init_properties_ColorMode_kt__lz79sc();
    return mutableStateOf(Companion_instance_3.n2t().m2t());
  }
  function LocalColorMode$lambda() {
    _init_properties_ColorMode_kt__lz79sc();
    return get_rootColorModeState();
  }
  function ColorMode_LIGHT_getInstance() {
    ColorMode_initEntries();
    return ColorMode_LIGHT_instance;
  }
  function ColorMode_DARK_getInstance() {
    ColorMode_initEntries();
    return ColorMode_DARK_instance;
  }
  function rootColorModeState$factory() {
    return getPropertyCallableRef('rootColorModeState', 0, KProperty0, function () {
      return get_rootColorModeState();
    }, null);
  }
  var properties_initialized_ColorMode_kt_kbhp7u;
  function _init_properties_ColorMode_kt__lz79sc() {
    if (!properties_initialized_ColorMode_kt_kbhp7u) {
      properties_initialized_ColorMode_kt_kbhp7u = true;
      rootColorModeState$delegate = lazy(rootColorModeState$delegate$lambda);
      LocalColorMode = compositionLocalOf(VOID, LocalColorMode$lambda);
    }
  }
  function Red() {
    Red_instance = this;
    this.n2x_1 = Companion_instance_2.f2q(16772078);
    this.o2x_1 = Companion_instance_2.f2q(16764370);
    this.p2x_1 = Companion_instance_2.f2q(15702682);
    this.q2x_1 = Companion_instance_2.f2q(15037299);
    this.r2x_1 = Companion_instance_2.f2q(15684432);
    this.s2x_1 = Companion_instance_2.f2q(16007990);
    this.t2x_1 = Companion_instance_2.f2q(15022389);
    this.u2x_1 = Companion_instance_2.f2q(13840175);
    this.v2x_1 = Companion_instance_2.f2q(12986408);
    this.w2x_1 = Companion_instance_2.f2q(12000284);
  }
  var Red_instance;
  function Red_getInstance() {
    if (Red_instance == null)
      new Red();
    return Red_instance;
  }
  function Blue() {
    Blue_instance = this;
    this.x2x_1 = Companion_instance_2.f2q(14938877);
    this.y2x_1 = Companion_instance_2.f2q(12312315);
    this.z2x_1 = Companion_instance_2.f2q(9489145);
    this.a2y_1 = Companion_instance_2.f2q(6600182);
    this.b2y_1 = Companion_instance_2.f2q(4367861);
    this.c2y_1 = Companion_instance_2.f2q(2201331);
    this.d2y_1 = Companion_instance_2.f2q(2001125);
    this.e2y_1 = Companion_instance_2.f2q(1668818);
    this.f2y_1 = Companion_instance_2.f2q(1402304);
    this.g2y_1 = Companion_instance_2.f2q(870305);
  }
  var Blue_instance;
  function Blue_getInstance() {
    if (Blue_instance == null)
      new Blue();
    return Blue_instance;
  }
  function Gray() {
    Gray_instance = this;
    this.h2y_1 = Companion_instance_2.f2q(16448250);
    this.i2y_1 = Companion_instance_2.f2q(16119285);
    this.j2y_1 = Companion_instance_2.f2q(15658734);
    this.k2y_1 = Companion_instance_2.f2q(14737632);
    this.l2y_1 = Companion_instance_2.f2q(12434877);
    this.m2y_1 = Companion_instance_2.f2q(10395294);
    this.n2y_1 = Companion_instance_2.f2q(7697781);
    this.o2y_1 = Companion_instance_2.f2q(6381921);
    this.p2y_1 = Companion_instance_2.f2q(4342338);
    this.q2y_1 = Companion_instance_2.f2q(2171169);
  }
  var Gray_instance;
  function Gray_getInstance() {
    if (Gray_instance == null)
      new Gray();
    return Gray_instance;
  }
  function MutablePalettes() {
    this.r2y_1 = new MutablePalette();
    this.s2y_1 = new MutablePalette();
  }
  protoOf(MutablePalettes).t2y = function () {
    return this.r2y_1;
  };
  protoOf(MutablePalettes).u2y = function () {
    return this.s2y_1;
  };
  function Palettes() {
  }
  function Palette() {
  }
  function EntryDelegate(palette, prefix) {
    prefix = prefix === VOID ? null : prefix;
    this.y2y_1 = palette;
    this.z2y_1 = prefix;
  }
  protoOf(EntryDelegate).i2k = function (thisRef, property) {
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.z2y_1;
    var tmp$ret$0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    return getValue(this.y2y_1.a2z_1, tmp$ret$0 + property.callableName);
  };
  protoOf(EntryDelegate).b2z = function (thisRef, property, value) {
    // Inline function 'kotlin.collections.set' call
    var this_0 = this.y2y_1.a2z_1;
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.z2y_1;
    var key = (tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs) + property.callableName;
    this_0.g2(key, value);
  };
  function ColorGroup(palette, groupName) {
    this.c2z_1 = palette;
    this.d2z_1 = groupName;
  }
  protoOf(ColorGroup).e2z = function () {
    return new EntryDelegate(this.c2z_1, this.d2z_1 + '.');
  };
  function MutablePalette() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.a2z_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(MutablePalette).w2y = function (key) {
    return this.a2z_1.p2(key);
  };
  protoOf(MutablePalette).f2z = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    this.a2z_1.g2(key, value);
  };
  function toPalette(_this__u8e3s4) {
    return get_SilkTheme().b2t_1.v2y(_this__u8e3s4);
  }
  function clip(_this__u8e3s4, shape) {
    var tmp0_safe_receiver = shape.g2z();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.theme.shapes.clip.<anonymous>' call
      tmp = styleModifier(_this__u8e3s4, clip$lambda(tmp0_safe_receiver));
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function RectF_init_$Init$($this) {
    RectF_init_$Init$_0(get_px(0), $this);
    return $this;
  }
  function RectF_init_$Create$() {
    return RectF_init_$Init$(objectCreate(protoOf(RectF)));
  }
  function RectF_init_$Init$_0(cornerRadius, $this) {
    RectF.call($this, to(0.0, 0.0), to(100.0, 100.0), cornerRadius);
    return $this;
  }
  function RectF_init_$Init$_1(side, cornerRadius, $this) {
    cornerRadius = cornerRadius === VOID ? get_px(0) : cornerRadius;
    RectF.call($this, to(side, side), from100(to(side, side)), cornerRadius);
    return $this;
  }
  function RectF_init_$Create$_0(side, cornerRadius) {
    return RectF_init_$Init$_1(side, cornerRadius, objectCreate(protoOf(RectF)));
  }
  function RectF(topLeft, botRight, cornerRadius) {
    cornerRadius = cornerRadius === VOID ? get_px(0) : cornerRadius;
    this.h2z_1 = topLeft;
    this.i2z_1 = botRight;
    this.j2z_1 = cornerRadius;
  }
  protoOf(RectF).g2z = function () {
    var tmp;
    if ((((!(this.h2z_1.ce_1 === 0.0) ? true : !(this.h2z_1.de_1 === 0.0)) ? true : !(this.i2z_1.ce_1 === 100.0)) ? true : !(this.i2z_1.de_1 === 100.0)) ? true : !equals(this.j2z_1, get_px(0))) {
      tmp = new InsetPath(this.h2z_1, this.i2z_1, this.j2z_1);
    } else {
      tmp = null;
    }
    return tmp;
  };
  function Path() {
  }
  protoOf(Path).l2z = function (_this__u8e3s4) {
    return toString(_this__u8e3s4) + '%';
  };
  protoOf(Path).m2z = function (_this__u8e3s4) {
    return toString(_this__u8e3s4.ce_1) + '% ' + toString(_this__u8e3s4.de_1) + '%';
  };
  function from100(_this__u8e3s4) {
    return to(100.0 - _this__u8e3s4.ce_1, 100.0 - _this__u8e3s4.de_1);
  }
  function InsetPath(topLeft, botRight, roundness) {
    roundness = roundness === VOID ? get_px(0) : roundness;
    Path.call(this);
    this.n2z_1 = topLeft;
    this.o2z_1 = roundness;
    this.p2z_1 = from100(botRight);
  }
  protoOf(InsetPath).k2z = function () {
    // Inline function 'kotlin.takeIf' call
    var this_0 = this.o2z_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'com.varabyte.kobweb.silk.theme.shapes.InsetPath.toPathStr.<anonymous>' call
    if (!equals(this_0, get_px(0))) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.varabyte.kobweb.silk.theme.shapes.InsetPath.toPathStr.<anonymous>' call
      tmp_0 = 'round ' + tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = tmp_0;
    var roundnessPart = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var left = this.n2z_1.ce_1;
    var top = this.n2z_1.de_1;
    var right = this.p2z_1.ce_1;
    var bottom = this.p2z_1.de_1;
    var insetPart = ((left === top ? right === bottom : false) ? left === right : false) ? this.l2z(left) : (left === right ? top === bottom : false) ? this.m2z(to(top, left)) : this.l2z(top) + ' ' + this.l2z(right) + ' ' + this.l2z(bottom) + ' ' + this.l2z(left);
    return 'inset(' + insetPart + roundnessPart + ')';
  };
  function clip$lambda($path) {
    return function ($this$styleModifier) {
      $this$styleModifier.w2c('clip-path', $path.k2z());
      return Unit_instance;
    };
  }
  //region block: post-declaration
  protoOf(MutablePalettes).v2y = get;
  protoOf(MutablePalette).x2y = getValue_0;
  //endregion
  //region block: init
  SilkCssLayerNames_instance = new SilkCssLayerNames();
  Companion_instance_3 = new Companion();
  Companion_instance_4 = new Companion_0();
  Companion_instance_5 = new Companion_1();
  Companion_instance_6 = new Companion_2();
  Companion_instance_8 = new Companion_4();
  _SilkTheme = null;
  Companion_instance_9 = new Companion_5();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SpanText;
  _.$_$.b = renderWithDeferred;
  _.$_$.c = set_additionalSilkInitialization;
  _.$_$.d = Keyframes;
  _.$_$.e = get_entries;
  _.$_$.f = get_active;
  _.$_$.g = get_ariaDisabled;
  _.$_$.h = get_ariaInvalid;
  _.$_$.i = get_disabled;
  _.$_$.j = get_focus;
  _.$_$.k = get_focusVisible;
  _.$_$.l = get_hover;
  _.$_$.m = get_link;
  _.$_$.n = not;
  _.$_$.o = get_placeholder;
  _.$_$.p = get_visited;
  _.$_$.q = Base;
  _.$_$.r = CssStyle_1;
  _.$_$.s = CssStyle_0;
  _.$_$.t = CssStyle_2;
  _.$_$.u = addVariantBase;
  _.$_$.v = addVariant_0;
  _.$_$.w = base_1;
  _.$_$.x = base_0;
  _.$_$.y = base;
  _.$_$.z = toModifier_1;
  _.$_$.a1 = toModifier_0;
  _.$_$.b1 = toModifier;
  _.$_$.c1 = ColorGroup;
  _.$_$.d1 = MutablePalette;
  _.$_$.e1 = toPalette;
  _.$_$.f1 = suffixedWith;
  _.$_$.g1 = clip;
  _.$_$.h1 = get_SilkTheme;
  _.$_$.i1 = modifyStyleBase;
  _.$_$.j1 = prepareSilkFoundation;
  _.$_$.k1 = Base_init_$Init$;
  _.$_$.l1 = RectF_init_$Create$_0;
  _.$_$.m1 = Companion_instance_5;
  _.$_$.n1 = Companion_instance_9;
  _.$_$.o1 = Blue_getInstance;
  _.$_$.p1 = Gray_getInstance;
  _.$_$.q1 = Red_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-foundation.js.map
