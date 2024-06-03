(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kobweb-frontend-silk-widgets.js', './kobweb-frontend-compose-html-ext.js', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-compose.js', './html-html-core.js', './kobweb-frontend-silk-foundation.js', './compose-multiplatform-core-compose-runtime-runtime.js', './kobweb-frontend-kobweb-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kobweb-frontend-silk-widgets.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./html-html-core.js'), require('./kobweb-frontend-silk-foundation.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./kobweb-frontend-kobweb-core.js'));
  else {
    if (typeof this['kobweb-frontend-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-silk-widgets' was not found. Please, check whether 'kobweb-frontend-silk-widgets' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['kobweb-frontend-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-kobweb-core' was not found. Please, check whether 'kobweb-frontend-kobweb-core' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    root['kobweb-frontend-silk-widgets-kobweb'] = factory(typeof this['kobweb-frontend-silk-widgets-kobweb'] === 'undefined' ? {} : this['kobweb-frontend-silk-widgets-kobweb'], this['kobweb-frontend-silk-widgets'], this['kobweb-frontend-compose-html-ext'], this['kotlin-kotlin-stdlib'], this['kobweb-frontend-kobweb-compose'], this['html-html-core'], this['kobweb-frontend-silk-foundation'], this['compose-multiplatform-core-compose-runtime-runtime'], this['kobweb-frontend-kobweb-core']);
  }
}(this, function (_, kotlin_com_varabyte_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_com_varabyte_kobweb_kobweb_core) {
  'use strict';
  //region block: imports
  var get_BorderColorVar = kotlin_com_varabyte_kobweb_silk_widgets.$_$.g;
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g;
  var protoOf = kotlin_kotlin.$_$.k6;
  var objectMeta = kotlin_kotlin.$_$.j6;
  var setMetadataFor = kotlin_kotlin.$_$.l6;
  var Companion_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y2;
  var Companion_instance_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e2;
  var listStyle = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.i1;
  var Companion_instance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h2;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d2;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.r1;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.r2;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m;
  var Companion_instance_2 = kotlin_org_jetbrains_compose_html_html_core.$_$.l;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o;
  var KProperty1 = kotlin_kotlin.$_$.w6;
  var getPropertyCallableRef = kotlin_kotlin.$_$.v5;
  var Companion_instance_3 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m1;
  var VOID = kotlin_kotlin.$_$.d;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.y;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.u;
  var Unit_instance = kotlin_kotlin.$_$.e2;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var Companion_instance_4 = kotlin_org_jetbrains_compose_html_html_core.$_$.i;
  var display = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o2;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var THROW_CCE = kotlin_kotlin.$_$.p8;
  var Div = kotlin_org_jetbrains_compose_html_html_core.$_$.b3;
  var Companion_instance_5 = kotlin_com_varabyte_kobweb_kobweb_core.$_$.i;
  var prependIf = kotlin_com_varabyte_kobweb_kobweb_core.$_$.e;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a1;
  var Img = kotlin_org_jetbrains_compose_html_html_core.$_$.c3;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.p2;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m2;
  var Companion_instance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f2;
  var objectFit = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o1;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var registerRefScope = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.t1;
  var CssStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s;
  var StyleVariable_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f;
  var get_link = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m;
  var get_visited = kotlin_com_varabyte_kobweb_silk_foundation.$_$.p;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.l;
  var Companion_instance_7 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i2;
  var textDecorationLine = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e2;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u;
  var get_ColorVar = kotlin_com_varabyte_kobweb_silk_widgets.$_$.h;
  var addVariant = kotlin_com_varabyte_kobweb_silk_foundation.$_$.v;
  var Colors_instance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.t2;
  var get_SilkColorsStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.c;
  var modifyStyleBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.i1;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.e1;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a2;
  var ColorGroup = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c1;
  var classMeta = kotlin_kotlin.$_$.o5;
  var MutablePalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.d1;
  var KMutableProperty1 = kotlin_kotlin.$_$.u6;
  //endregion
  //region block: pre-declaration
  setMetadataFor(TocVars, 'TocVars', objectMeta);
  setMetadataFor(LinkVars, 'LinkVars', objectMeta);
  setMetadataFor(MutableLink, 'MutableLink', classMeta, ColorGroup);
  //endregion
  function get_TocStyle() {
    _init_properties_Toc_kt__9n5312();
    return TocStyle;
  }
  var TocStyle;
  function get_TocBorderedVariant() {
    _init_properties_Toc_kt__9n5312();
    return TocBorderedVariant;
  }
  var TocBorderedVariant;
  function TocVars() {
    TocVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().c2k();
    tmp.z38_1 = StyleVariable(tmp0_defaultFallback, 'silk');
  }
  protoOf(TocVars).i30 = function () {
    return this.z38_1.i2k(this, BorderColor$factory());
  };
  var TocVars_instance;
  function TocVars_getInstance() {
    if (TocVars_instance == null)
      new TocVars();
    return TocVars_instance;
  }
  function TocStyle$lambda($this$base) {
    _init_properties_Toc_kt__9n5312();
    return padding(textAlign(listStyle(Companion_instance, Companion_instance_0.e2i()), Companion_instance_1.t2h()), get_cssRem(0));
  }
  function TocBorderedVariant$lambda($this$addVariantBase) {
    _init_properties_Toc_kt__9n5312();
    var tmp = borderRadius(Companion_instance, get_px(5));
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return padding(border(tmp, tmp_0, 'solid', TocVars_getInstance().i30().c2k()), get_cssRem(1));
  }
  function BorderColor$factory() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.i30();
    }, null);
  }
  var properties_initialized_Toc_kt_t9o4p4;
  function _init_properties_Toc_kt__9n5312() {
    if (!properties_initialized_Toc_kt_t9o4p4) {
      properties_initialized_Toc_kt_t9o4p4 = true;
      var tmp = Companion_instance_3;
      TocStyle = base(tmp, VOID, TocStyle$lambda);
      var tmp_0 = get_TocStyle();
      TocBorderedVariant = addVariantBase(tmp_0, VOID, TocBorderedVariant$lambda);
    }
  }
  function get_ImageStyle() {
    _init_properties_Image_kt__h9v8mh();
    return ImageStyle;
  }
  var ImageStyle;
  function get_FitWidthImageVariant() {
    _init_properties_Image_kt__h9v8mh();
    return FitWidthImageVariant;
  }
  var FitWidthImageVariant;
  function Image(src, description, modifier, variant, width, height, autoPrefix, ref, $composer, $changed, $default) {
    _init_properties_Image_kt__h9v8mh();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var width_0 = {_v: width};
    var height_0 = {_v: height};
    var autoPrefix_0 = {_v: autoPrefix};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j19(2126309876);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.kz(src) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.kz(description) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 128;
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.kz(variant_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.kz(width_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.kz(height_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.n18(autoPrefix_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.kz(ref_0._v) ? 8388608 : 4194304);
    if (!(($default & 4) === 4) ? true : !(($dirty & 23967451) === 4793490) ? true : !$composer_0.m17()) {
      if (!(($default & 4) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 8) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        width_0._v = null;
      }
      if (!(($default & 32) === 0)) {
        height_0._v = null;
      }
      if (!(($default & 64) === 0)) {
        autoPrefix_0._v = true;
      }
      if (!(($default & 128) === 0)) {
        ref_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(2126309876, $dirty, -1, 'com.varabyte.kobweb.silk.components.graphics.Image (Image.kt:95)');
      }
      Image_0(src, modifier_0._v, variant_0._v, width_0._v, height_0._v, description, autoPrefix_0._v, ref_0._v, $composer_0, 64 | 14 & $dirty | 0 | 896 & $dirty >> 3 | 7168 & $dirty >> 3 | 57344 & $dirty >> 3 | 458752 & $dirty << 12 | 3670016 & $dirty | 16777216 | 29360128 & $dirty, 0);
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
      tmp0_safe_receiver.h1e(Image$lambda(src, description, modifier_0, variant_0, width_0, height_0, autoPrefix_0, ref_0, $changed, $default));
    }
  }
  function Image_0(src, modifier, variant, width, height, alt, autoPrefix, ref, $composer, $changed, $default) {
    _init_properties_Image_kt__h9v8mh();
    var modifier_0 = {_v: modifier};
    var variant_0 = {_v: variant};
    var width_0 = {_v: width};
    var height_0 = {_v: height};
    var alt_0 = {_v: alt};
    var autoPrefix_0 = {_v: autoPrefix};
    var ref_0 = {_v: ref};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j19(-316775194);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.kz(src) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 16;
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.kz(variant_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.kz(width_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.kz(height_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.kz(alt_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.n18(autoPrefix_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.kz(ref_0._v) ? 8388608 : 4194304);
    if (!(($default & 2) === 2) ? true : !(($dirty & 23967451) === 4793490) ? true : !$composer_0.m17()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 4) === 0)) {
        variant_0._v = null;
      }
      if (!(($default & 8) === 0)) {
        width_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        height_0._v = null;
      }
      if (!(($default & 32) === 0)) {
        alt_0._v = '';
      }
      if (!(($default & 64) === 0)) {
        autoPrefix_0._v = true;
      }
      if (!(($default & 128) === 0)) {
        ref_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-316775194, $dirty, -1, 'com.varabyte.kobweb.silk.components.graphics.Image (Image.kt:57)');
      }
      $composer_0.r17(1385171955);
      if (!(ref_0._v == null)) {
        var tmp = Companion_instance;
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        // Inline function 'org.jetbrains.compose.web.css.DisplayStyle' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = toAttrs(display(tmp, 'none'));
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'com.varabyte.kobweb.silk.components.graphics.Image.<anonymous>' call
        var tmp_1 = $composer_0;
        var dispatchReceiver = composableLambda(tmp_1, 861319372, true, Image$lambda_0(ref_0));
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
          // Inline function 'com.varabyte.kobweb.silk.components.graphics.Image.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref(dispatchReceiver);
          $composer_1.b19(value);
          tmp_2 = value;
        } else {
          tmp_2 = it;
        }
        var tmp_3 = tmp_2;
        var tmp0 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
        $composer_1.s17();
        Div(tmp_0, tmp0, $composer_0, 48, 0);
      }
      $composer_0.s17();
      var tmp_4 = prependIf(Companion_instance_5, autoPrefix_0._v, src);
      var tmp_5 = alt_0._v;
      var tmp_6 = toModifier(get_ImageStyle(), [variant_0._v], $composer_0, 0).j2p(modifier_0._v);
      $composer_0.r17(1385172239);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid_0 = !!(($dirty & 7168) === 2048 | ($dirty & 57344) === 16384);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_0.v18();
      var tmp_7;
      if (invalid_0 ? true : it_0 === Companion_getInstance().j12_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.graphics.Image.<anonymous>' call
        var value_0 = Image$lambda_1(width_0, height_0);
        this_0.b19(value_0);
        tmp_7 = value_0;
      } else {
        tmp_7 = it_0;
      }
      var tmp_8 = tmp_7;
      var tmp0_group = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      $composer_0.s17();
      Img(tmp_4, tmp_5, toAttrs(tmp_6, tmp0_group), $composer_0, 112 & $dirty >> 12, 0);
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
      tmp1_safe_receiver.h1e(Image$lambda_2(src, modifier_0, variant_0, width_0, height_0, alt_0, autoPrefix_0, ref_0, $changed, $default));
    }
  }
  function ImageStyle$lambda($this$CssStyle) {
    _init_properties_Image_kt__h9v8mh();
    return Unit_instance;
  }
  function FitWidthImageVariant$lambda($this$addVariantBase) {
    _init_properties_Image_kt__h9v8mh();
    return objectFit(width(Companion_instance, get_percent(100)), Companion_instance_6.n2j());
  }
  function Image$lambda($src, $description, $modifier, $variant, $width, $height, $autoPrefix, $ref, $$changed, $$default) {
    return function ($composer, $force) {
      Image($src, $description, $modifier._v, $variant._v, $width._v, $height._v, $autoPrefix._v, $ref._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Image$lambda$lambda(it) {
    _init_properties_Image_kt__h9v8mh();
    var tmp = it.nextSibling;
    return tmp instanceof HTMLImageElement ? tmp : THROW_CCE();
  }
  function Image$lambda_0($ref) {
    return function ($this$Div, $composer, $changed) {
      var $composer_0 = $composer;
      if (isTraceInProgress()) {
        traceEventStart(861319372, $changed, -1, 'com.varabyte.kobweb.silk.components.graphics.Image.<anonymous> (Image.kt:60)');
      }
      var tmp = $ref._v;
      $composer_0.r17(-980642170);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_0.v18();
      var tmp_0;
      if (false ? true : it === Companion_getInstance().j12_1) {
        // Inline function 'com.varabyte.kobweb.silk.components.graphics.Image.<anonymous>.<anonymous>.<anonymous>' call
        var value = Image$lambda$lambda;
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
  function Image$lambda_1($width, $height) {
    return function ($this$toAttrs) {
      var tmp;
      if (!($width._v == null)) {
        $this$toAttrs.l24('width', $width._v.toString());
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!($height._v == null)) {
        $this$toAttrs.l24('height', $height._v.toString());
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function Image$lambda_2($src, $modifier, $variant, $width, $height, $alt, $autoPrefix, $ref, $$changed, $$default) {
    return function ($composer, $force) {
      Image_0($src, $modifier._v, $variant._v, $width._v, $height._v, $alt._v, $autoPrefix._v, $ref._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_Image_kt_7kjzpx;
  function _init_properties_Image_kt__h9v8mh() {
    if (!properties_initialized_Image_kt_7kjzpx) {
      properties_initialized_Image_kt_7kjzpx = true;
      ImageStyle = CssStyle(VOID, ImageStyle$lambda);
      var tmp = get_ImageStyle();
      FitWidthImageVariant = addVariantBase(tmp, VOID, FitWidthImageVariant$lambda);
    }
  }
  function get_LinkStyle() {
    _init_properties_Link_kt__dm1ox2();
    return LinkStyle;
  }
  var LinkStyle;
  function get_UndecoratedLinkVariant() {
    _init_properties_Link_kt__dm1ox2();
    return UndecoratedLinkVariant;
  }
  var UndecoratedLinkVariant;
  function get_UncoloredLinkVariant() {
    _init_properties_Link_kt__dm1ox2();
    return UncoloredLinkVariant;
  }
  var UncoloredLinkVariant;
  function get_AlwaysUnderlinedLinkVariant() {
    _init_properties_Link_kt__dm1ox2();
    return AlwaysUnderlinedLinkVariant;
  }
  var AlwaysUnderlinedLinkVariant;
  function LinkVars() {
    LinkVars_instance = this;
    this.a39_1 = StyleVariable_0('silk');
    this.b39_1 = StyleVariable_0('silk');
  }
  protoOf(LinkVars).c39 = function () {
    return this.a39_1.i2k(this, DefaultColor$factory());
  };
  protoOf(LinkVars).d39 = function () {
    return this.b39_1.i2k(this, VisitedColor$factory());
  };
  var LinkVars_instance;
  function LinkVars_getInstance() {
    if (LinkVars_instance == null)
      new LinkVars();
    return LinkVars_instance;
  }
  function LinkStyle$lambda($this$CssStyle) {
    _init_properties_Link_kt__dm1ox2();
    $this$CssStyle.y2u(LinkStyle$lambda$lambda);
    var tmp = get_link($this$CssStyle);
    tmp.a2u(LinkStyle$lambda$lambda_0);
    var tmp_0 = get_visited($this$CssStyle);
    tmp_0.a2u(LinkStyle$lambda$lambda_1);
    var tmp_1 = get_hover($this$CssStyle);
    tmp_1.a2u(LinkStyle$lambda$lambda_2);
    return Unit_instance;
  }
  function LinkStyle$lambda$lambda() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_instance, Companion_instance_7.e2i());
  }
  function LinkStyle$lambda$lambda_0() {
    _init_properties_Link_kt__dm1ox2();
    return color(Companion_instance, LinkVars_getInstance().c39().c2k());
  }
  function LinkStyle$lambda$lambda_1() {
    _init_properties_Link_kt__dm1ox2();
    return color(Companion_instance, LinkVars_getInstance().d39().c2k());
  }
  function LinkStyle$lambda$lambda_2() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_instance, Companion_instance_7.q2k());
  }
  function UndecoratedLinkVariant$lambda($this$addVariant) {
    _init_properties_Link_kt__dm1ox2();
    var tmp = get_hover($this$addVariant);
    tmp.a2u(UndecoratedLinkVariant$lambda$lambda);
    return Unit_instance;
  }
  function UndecoratedLinkVariant$lambda$lambda() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_instance, Companion_instance_7.e2i());
  }
  function UncoloredLinkVariant$lambda($this$addVariant) {
    _init_properties_Link_kt__dm1ox2();
    var colorModifier = color(Companion_instance, get_ColorVar().c2k());
    var tmp = get_link($this$addVariant);
    tmp.a2u(UncoloredLinkVariant$lambda$lambda(colorModifier));
    var tmp_0 = get_visited($this$addVariant);
    tmp_0.a2u(UncoloredLinkVariant$lambda$lambda_0(colorModifier));
    return Unit_instance;
  }
  function UncoloredLinkVariant$lambda$lambda($colorModifier) {
    return function () {
      return $colorModifier;
    };
  }
  function UncoloredLinkVariant$lambda$lambda_0($colorModifier) {
    return function () {
      return $colorModifier;
    };
  }
  function AlwaysUnderlinedLinkVariant$lambda($this$addVariant) {
    _init_properties_Link_kt__dm1ox2();
    $this$addVariant.y2u(AlwaysUnderlinedLinkVariant$lambda$lambda);
    return Unit_instance;
  }
  function AlwaysUnderlinedLinkVariant$lambda$lambda() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_instance, Companion_instance_7.q2k());
  }
  function DefaultColor$factory() {
    return getPropertyCallableRef('DefaultColor', 1, KProperty1, function (receiver) {
      return receiver.c39();
    }, null);
  }
  function VisitedColor$factory() {
    return getPropertyCallableRef('VisitedColor', 1, KProperty1, function (receiver) {
      return receiver.d39();
    }, null);
  }
  var properties_initialized_Link_kt_5x6v44;
  function _init_properties_Link_kt__dm1ox2() {
    if (!properties_initialized_Link_kt_5x6v44) {
      properties_initialized_Link_kt_5x6v44 = true;
      LinkStyle = CssStyle(VOID, LinkStyle$lambda);
      var tmp = get_LinkStyle();
      UndecoratedLinkVariant = addVariant(tmp, VOID, UndecoratedLinkVariant$lambda);
      var tmp_0 = get_LinkStyle();
      UncoloredLinkVariant = addVariant(tmp_0, VOID, UncoloredLinkVariant$lambda);
      var tmp_1 = get_LinkStyle();
      AlwaysUnderlinedLinkVariant = addVariant(tmp_1, VOID, AlwaysUnderlinedLinkVariant$lambda);
    }
  }
  function initSilkWidgetsKobweb(ctx) {
    var mutableTheme = ctx.u2r_1;
    // Inline function 'kotlin.apply' call
    var this_0 = mutableTheme.w2s_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgetsKobweb.<anonymous>' call
    // Inline function 'kotlin.apply' call
    var this_1 = this_0.r2y_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgetsKobweb.<anonymous>.<anonymous>' call
    get_link_0(this_1).o37(Colors_instance.j2q(), Colors_instance.r2q());
    // Inline function 'kotlin.apply' call
    var this_2 = this_0.s2y_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgetsKobweb.<anonymous>.<anonymous>' call
    get_link_0(this_2).o37(Colors_instance.l2q(), Colors_instance.t2q());
    var tmp = get_SilkColorsStyle();
    modifyStyleBase(mutableTheme, tmp, VOID, initSilkWidgetsKobweb$lambda);
    mutableTheme.y2s('silk-image', get_ImageStyle());
    mutableTheme.c2x('-fit-width', get_FitWidthImageVariant());
    mutableTheme.y2s('silk-link', get_LinkStyle());
    mutableTheme.c2x('-uncolored', get_UncoloredLinkVariant());
    mutableTheme.c2x('-undecorated', get_UndecoratedLinkVariant());
    mutableTheme.c2x('-always-underlined', get_AlwaysUnderlinedLinkVariant());
    mutableTheme.y2s('silk-toc', get_TocStyle());
    mutableTheme.c2x('-bordered', get_TocBorderedVariant());
  }
  function initSilkWidgetsKobweb$lambda($this$modifyStyleBase) {
    var palette = toPalette($this$modifyStyleBase.t2v_1);
    return setVariable(setVariable(Companion_instance, LinkVars_getInstance().c39(), get_link_1(palette).p37()), LinkVars_getInstance().d39(), get_link_1(palette).i39());
  }
  function MutableLink(palette) {
    ColorGroup.call(this, palette, 'link');
    this.g39_1 = this.e2z();
    this.h39_1 = this.e2z();
  }
  protoOf(MutableLink).a38 = function (_set____db54di) {
    return this.g39_1.b2z(this, default$factory(), _set____db54di);
  };
  protoOf(MutableLink).p37 = function () {
    return this.g39_1.i2k(this, default$factory_0());
  };
  protoOf(MutableLink).j39 = function (_set____db54di) {
    return this.h39_1.b2z(this, visited$factory(), _set____db54di);
  };
  protoOf(MutableLink).i39 = function () {
    return this.h39_1.i2k(this, visited$factory_0());
  };
  protoOf(MutableLink).o37 = function (default_0, visited) {
    this.a38(default_0);
    this.j39(visited);
  };
  function get_link_0(_this__u8e3s4) {
    return new MutableLink(_this__u8e3s4);
  }
  function get_link_1(_this__u8e3s4) {
    return get_link_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
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
  function visited$factory() {
    return getPropertyCallableRef('visited', 1, KMutableProperty1, function (receiver) {
      return receiver.i39();
    }, function (receiver, value) {
      return receiver.j39(value);
    });
  }
  function visited$factory_0() {
    return getPropertyCallableRef('visited', 1, KMutableProperty1, function (receiver) {
      return receiver.i39();
    }, function (receiver, value) {
      return receiver.j39(value);
    });
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Image;
  _.$_$.b = initSilkWidgetsKobweb;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-widgets-kobweb.js.map
