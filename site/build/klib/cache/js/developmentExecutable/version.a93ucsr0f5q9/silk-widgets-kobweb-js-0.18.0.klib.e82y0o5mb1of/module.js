(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kobweb-frontend-silk-foundation.js', './kobweb-frontend-silk-widgets.js', './kobweb-frontend-compose-html-ext.js', './kobweb-frontend-kobweb-compose.js', './html-html-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-silk-foundation.js'), require('./kobweb-frontend-silk-widgets.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./html-html-core.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['kobweb-frontend-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-silk-widgets' was not found. Please, check whether 'kobweb-frontend-silk-widgets' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    if (typeof this['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-silk-widgets-kobweb'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'kobweb-frontend-silk-widgets-kobweb'.");
    }
    root['kobweb-frontend-silk-widgets-kobweb'] = factory(typeof this['kobweb-frontend-silk-widgets-kobweb'] === 'undefined' ? {} : this['kobweb-frontend-silk-widgets-kobweb'], this['kotlin-kotlin-stdlib'], this['kobweb-frontend-silk-foundation'], this['kobweb-frontend-silk-widgets'], this['kobweb-frontend-compose-html-ext'], this['kobweb-frontend-kobweb-compose'], this['html-html-core']);
  }
}(this, function (_, kotlin_kotlin, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_com_varabyte_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_compose_html_html_core) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.ob;
  var ComponentKind = kotlin_com_varabyte_kobweb_silk_foundation.$_$.o;
  var interfaceMeta = kotlin_kotlin.$_$.qa;
  var setMetadataFor = kotlin_kotlin.$_$.pb;
  var VOID = kotlin_kotlin.$_$.e;
  var get_BorderColorVar = kotlin_com_varabyte_kobweb_silk_widgets.$_$.f;
  var StyleVariable = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.g;
  var objectMeta = kotlin_kotlin.$_$.nb;
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q2;
  var Companion_getInstance_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.h2;
  var listStyle = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e1;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.k2;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x1;
  var get_cssRem = kotlin_org_jetbrains_compose_html_html_core.$_$.q3;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q1;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.p4;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_html_html_core.$_$.k;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l;
  var KProperty1 = kotlin_kotlin.$_$.fc;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ma;
  var Companion_getInstance_3 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j1;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.w;
  var addVariantBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.s;
  var Unit_getInstance = kotlin_kotlin.$_$.l4;
  var get_percent = kotlin_org_jetbrains_compose_html_html_core.$_$.n4;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g2;
  var Companion_getInstance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.i2;
  var objectFit = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.k1;
  var CssStyle = kotlin_com_varabyte_kobweb_silk_foundation.$_$.q;
  var StyleVariable_0 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.f;
  var get_link = kotlin_com_varabyte_kobweb_silk_foundation.$_$.k;
  var get_visited = kotlin_com_varabyte_kobweb_silk_foundation.$_$.n;
  var get_hover = kotlin_com_varabyte_kobweb_silk_foundation.$_$.j;
  var Companion_getInstance_5 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.l2;
  var textDecorationLine = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.y1;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r;
  var get_ColorVar = kotlin_com_varabyte_kobweb_silk_widgets.$_$.g;
  var addVariant = kotlin_com_varabyte_kobweb_silk_foundation.$_$.t;
  var Colors_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m2;
  var get_SilkColorsStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.b;
  var modifyStyleBase = kotlin_com_varabyte_kobweb_silk_foundation.$_$.f1;
  var toPalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b1;
  var setVariable = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u1;
  var ColorGroup = kotlin_com_varabyte_kobweb_silk_foundation.$_$.z;
  var classMeta = kotlin_kotlin.$_$.ea;
  var THROW_CCE = kotlin_kotlin.$_$.qe;
  var MutablePalette = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a1;
  var KMutableProperty1 = kotlin_kotlin.$_$.dc;
  //endregion
  //region block: pre-declaration
  setMetadataFor(TocKind, 'TocKind', interfaceMeta, VOID, [ComponentKind]);
  setMetadataFor(TocVars, 'TocVars', objectMeta);
  setMetadataFor(ImageKind, 'ImageKind', interfaceMeta, VOID, [ComponentKind]);
  setMetadataFor(LinkKind, 'LinkKind', interfaceMeta, VOID, [ComponentKind]);
  setMetadataFor(LinkVars, 'LinkVars', objectMeta);
  setMetadataFor(Link, 'Link', interfaceMeta);
  setMetadataFor(MutableLink, 'MutableLink', classMeta, ColorGroup, [ColorGroup, Link]);
  setMetadataFor(SilkWidgetKobwebColorGroups, 'SilkWidgetKobwebColorGroups', objectMeta);
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
  function TocKind() {
  }
  function TocVars() {
    TocVars_instance = this;
    var tmp = this;
    var tmp0_defaultFallback = get_BorderColorVar().value$default_36t2hw_k$();
    tmp.BorderColor$delegate_1 = StyleVariable(tmp0_defaultFallback, 'silk');
  }
  protoOf(TocVars).get_BorderColor_hljtgy_k$ = function () {
    return this.BorderColor$delegate_1.getValue_fbnwi2_k$(this, BorderColor$factory());
  };
  var TocVars_instance;
  function TocVars_getInstance() {
    if (TocVars_instance == null)
      new TocVars();
    return TocVars_instance;
  }
  function TocStyle$lambda($this$base) {
    _init_properties_Toc_kt__9n5312();
    return padding(textAlign(listStyle(Companion_getInstance(), Companion_getInstance_0().get_None_wo6tgh_k$()), Companion_getInstance_1().get_Start_ih4i6x_k$()), get_cssRem(0));
  }
  function TocBorderedVariant$lambda($this$addVariantBase) {
    _init_properties_Toc_kt__9n5312();
    var tmp = borderRadius(Companion_getInstance(), get_px(5));
    var tmp_0 = get_px(1);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_2();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return padding(border(tmp, tmp_0, 'solid', TocVars_getInstance().get_BorderColor_hljtgy_k$().value$default_36t2hw_k$()), get_cssRem(1));
  }
  function BorderColor$factory() {
    return getPropertyCallableRef('BorderColor', 1, KProperty1, function (receiver) {
      return receiver.get_BorderColor_hljtgy_k$();
    }, null);
  }
  var properties_initialized_Toc_kt_t9o4p4;
  function _init_properties_Toc_kt__9n5312() {
    if (!properties_initialized_Toc_kt_t9o4p4) {
      properties_initialized_Toc_kt_t9o4p4 = true;
      var tmp = Companion_getInstance_3();
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
  function ImageKind() {
  }
  function ImageStyle$lambda($this$CssStyle) {
    _init_properties_Image_kt__h9v8mh();
    return Unit_getInstance();
  }
  function FitWidthImageVariant$lambda($this$addVariantBase) {
    _init_properties_Image_kt__h9v8mh();
    return objectFit(width(Companion_getInstance(), get_percent(100)), Companion_getInstance_4().get_ScaleDown_ala7ur_k$());
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
  function LinkKind() {
  }
  function LinkVars() {
    LinkVars_instance = this;
    this.DefaultColor$delegate_1 = StyleVariable_0('silk');
    this.VisitedColor$delegate_1 = StyleVariable_0('silk');
  }
  protoOf(LinkVars).get_DefaultColor_3x88vp_k$ = function () {
    return this.DefaultColor$delegate_1.getValue_fbnwi2_k$(this, DefaultColor$factory());
  };
  protoOf(LinkVars).get_VisitedColor_7oj77i_k$ = function () {
    return this.VisitedColor$delegate_1.getValue_fbnwi2_k$(this, VisitedColor$factory());
  };
  var LinkVars_instance;
  function LinkVars_getInstance() {
    if (LinkVars_instance == null)
      new LinkVars();
    return LinkVars_instance;
  }
  function LinkStyle$lambda($this$CssStyle) {
    _init_properties_Link_kt__dm1ox2();
    $this$CssStyle.base_y8uu8g_k$(LinkStyle$lambda$lambda);
    var tmp = get_link($this$CssStyle);
    tmp.invoke_ts7809_k$(LinkStyle$lambda$lambda_0);
    var tmp_0 = get_visited($this$CssStyle);
    tmp_0.invoke_ts7809_k$(LinkStyle$lambda$lambda_1);
    var tmp_1 = get_hover($this$CssStyle);
    tmp_1.invoke_ts7809_k$(LinkStyle$lambda$lambda_2);
    return Unit_getInstance();
  }
  function LinkStyle$lambda$lambda() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_getInstance(), Companion_getInstance_5().get_None_wo6tgh_k$());
  }
  function LinkStyle$lambda$lambda_0() {
    _init_properties_Link_kt__dm1ox2();
    return color(Companion_getInstance(), LinkVars_getInstance().get_DefaultColor_3x88vp_k$().value$default_36t2hw_k$());
  }
  function LinkStyle$lambda$lambda_1() {
    _init_properties_Link_kt__dm1ox2();
    return color(Companion_getInstance(), LinkVars_getInstance().get_VisitedColor_7oj77i_k$().value$default_36t2hw_k$());
  }
  function LinkStyle$lambda$lambda_2() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_getInstance(), Companion_getInstance_5().get_Underline_oo7egz_k$());
  }
  function UndecoratedLinkVariant$lambda($this$addVariant) {
    _init_properties_Link_kt__dm1ox2();
    var tmp = get_hover($this$addVariant);
    tmp.invoke_ts7809_k$(UndecoratedLinkVariant$lambda$lambda);
    return Unit_getInstance();
  }
  function UndecoratedLinkVariant$lambda$lambda() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_getInstance(), Companion_getInstance_5().get_None_wo6tgh_k$());
  }
  function UncoloredLinkVariant$lambda($this$addVariant) {
    _init_properties_Link_kt__dm1ox2();
    var colorModifier = color(Companion_getInstance(), get_ColorVar().value$default_36t2hw_k$());
    var tmp = get_link($this$addVariant);
    tmp.invoke_ts7809_k$(UncoloredLinkVariant$lambda$lambda(colorModifier));
    var tmp_0 = get_visited($this$addVariant);
    tmp_0.invoke_ts7809_k$(UncoloredLinkVariant$lambda$lambda_0(colorModifier));
    return Unit_getInstance();
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
    $this$addVariant.base_y8uu8g_k$(AlwaysUnderlinedLinkVariant$lambda$lambda);
    return Unit_getInstance();
  }
  function AlwaysUnderlinedLinkVariant$lambda$lambda() {
    _init_properties_Link_kt__dm1ox2();
    return textDecorationLine(Companion_getInstance(), Companion_getInstance_5().get_Underline_oo7egz_k$());
  }
  function DefaultColor$factory() {
    return getPropertyCallableRef('DefaultColor', 1, KProperty1, function (receiver) {
      return receiver.get_DefaultColor_3x88vp_k$();
    }, null);
  }
  function VisitedColor$factory() {
    return getPropertyCallableRef('VisitedColor', 1, KProperty1, function (receiver) {
      return receiver.get_VisitedColor_7oj77i_k$();
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
    var mutableTheme = ctx.get_theme_iz24rk_k$();
    // Inline function 'kotlin.apply' call
    var this_0 = mutableTheme.get_palettes_f7ft27_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgetsKobweb.<anonymous>' call
    // Inline function 'kotlin.apply' call
    var this_1 = this_0.get_light_iuogdp_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgetsKobweb.<anonymous>.<anonymous>' call
    get_link_0(this_1).set_djj1hu_k$(Colors_getInstance().get_Blue_wnz3k3_k$(), Colors_getInstance().get_Purple_33oyqt_k$());
    // Inline function 'kotlin.apply' call
    var this_2 = this_0.get_dark_wokkvz_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.varabyte.kobweb.silk.init.initSilkWidgetsKobweb.<anonymous>.<anonymous>' call
    get_link_0(this_2).set_djj1hu_k$(Colors_getInstance().get_Cyan_wnzzpo_k$(), Colors_getInstance().get_Violet_5rb5wo_k$());
    var tmp = get_SilkColorsStyle();
    modifyStyleBase(mutableTheme, tmp, VOID, initSilkWidgetsKobweb$lambda);
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-image', get_ImageStyle());
    mutableTheme.registerVariant$default_k7o5vi_k$('-fit-width', get_FitWidthImageVariant());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-link', get_LinkStyle());
    mutableTheme.registerVariant$default_k7o5vi_k$('-uncolored', get_UncoloredLinkVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-undecorated', get_UndecoratedLinkVariant());
    mutableTheme.registerVariant$default_k7o5vi_k$('-always-underlined', get_AlwaysUnderlinedLinkVariant());
    mutableTheme.registerStyle$default_z1l3ol_k$('silk-toc', get_TocStyle());
    mutableTheme.registerVariant$default_k7o5vi_k$('-bordered', get_TocBorderedVariant());
  }
  function initSilkWidgetsKobweb$lambda($this$modifyStyleBase) {
    var palette = toPalette($this$modifyStyleBase.get_colorMode_trbg8z_k$());
    return setVariable(setVariable(Companion_getInstance(), LinkVars_getInstance().get_DefaultColor_3x88vp_k$(), get_link_1(palette).get_default_qtagd4_k$()), LinkVars_getInstance().get_VisitedColor_7oj77i_k$(), get_link_1(palette).get_visited_8zg8qp_k$());
  }
  function Link() {
  }
  function MutableLink(palette) {
    ColorGroup.call(this, palette, 'link');
    this.default$delegate_1 = this.paletteEntry_4qg1pz_k$();
    this.visited$delegate_1 = this.paletteEntry_4qg1pz_k$();
  }
  protoOf(MutableLink).set_default_r70t7m_k$ = function (_set____db54di) {
    return this.default$delegate_1.setValue_jpcais_k$(this, default$factory(), _set____db54di);
  };
  protoOf(MutableLink).get_default_qtagd4_k$ = function () {
    return this.default$delegate_1.getValue_fbnwi2_k$(this, default$factory_0());
  };
  protoOf(MutableLink).set_visited_wsyhe3_k$ = function (_set____db54di) {
    return this.visited$delegate_1.setValue_jpcais_k$(this, visited$factory(), _set____db54di);
  };
  protoOf(MutableLink).get_visited_8zg8qp_k$ = function () {
    return this.visited$delegate_1.getValue_fbnwi2_k$(this, visited$factory_0());
  };
  protoOf(MutableLink).set_djj1hu_k$ = function (default_0, visited) {
    this.set_default_r70t7m_k$(default_0);
    this.set_visited_wsyhe3_k$(visited);
  };
  function SilkWidgetKobwebColorGroups() {
    SilkWidgetKobwebColorGroups_instance = this;
  }
  var SilkWidgetKobwebColorGroups_instance;
  function SilkWidgetKobwebColorGroups_getInstance() {
    if (SilkWidgetKobwebColorGroups_instance == null)
      new SilkWidgetKobwebColorGroups();
    return SilkWidgetKobwebColorGroups_instance;
  }
  function get_link_0(_this__u8e3s4) {
    return new MutableLink(_this__u8e3s4);
  }
  function get_link_1(_this__u8e3s4) {
    return get_link_0(_this__u8e3s4 instanceof MutablePalette ? _this__u8e3s4 : THROW_CCE());
  }
  function default$factory() {
    return getPropertyCallableRef('default', 1, KMutableProperty1, function (receiver) {
      return receiver.get_default_qtagd4_k$();
    }, function (receiver, value) {
      return receiver.set_default_r70t7m_k$(value);
    });
  }
  function default$factory_0() {
    return getPropertyCallableRef('default', 1, KMutableProperty1, function (receiver) {
      return receiver.get_default_qtagd4_k$();
    }, function (receiver, value) {
      return receiver.set_default_r70t7m_k$(value);
    });
  }
  function visited$factory() {
    return getPropertyCallableRef('visited', 1, KMutableProperty1, function (receiver) {
      return receiver.get_visited_8zg8qp_k$();
    }, function (receiver, value) {
      return receiver.set_visited_wsyhe3_k$(value);
    });
  }
  function visited$factory_0() {
    return getPropertyCallableRef('visited', 1, KMutableProperty1, function (receiver) {
      return receiver.get_visited_8zg8qp_k$();
    }, function (receiver, value) {
      return receiver.set_visited_wsyhe3_k$(value);
    });
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = initSilkWidgetsKobweb;
  //endregion
  return _;
}));
