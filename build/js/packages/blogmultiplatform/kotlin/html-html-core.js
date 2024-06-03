(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-internal-html-core-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-internal-html-core-runtime.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'html-html-core'.");
    }
    if (typeof this['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'html-html-core'.");
    }
    if (typeof this['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'html-html-core'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'html-html-core'.");
    }
    root['html-html-core'] = factory(typeof this['html-html-core'] === 'undefined' ? {} : this['html-html-core'], this['kotlin-kotlin-stdlib'], this['compose-multiplatform-core-compose-runtime-runtime'], this['html-internal-html-core-runtime']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.e2;
  var protoOf = kotlin_kotlin.$_$.k6;
  var asList = kotlin_kotlin.$_$.u2;
  var interfaceMeta = kotlin_kotlin.$_$.z5;
  var setMetadataFor = kotlin_kotlin.$_$.l6;
  var VOID = kotlin_kotlin.$_$.d;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var addAll = kotlin_kotlin.$_$.r2;
  var to = kotlin_kotlin.$_$.f9;
  var THROW_CCE = kotlin_kotlin.$_$.p8;
  var Pair = kotlin_kotlin.$_$.n8;
  var classMeta = kotlin_kotlin.$_$.o5;
  var objectMeta = kotlin_kotlin.$_$.j6;
  var toString = kotlin_kotlin.$_$.n6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f1;
  var equals = kotlin_kotlin.$_$.r5;
  var charSequenceLength = kotlin_kotlin.$_$.n5;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.q;
  var ensureNotNull = kotlin_kotlin.$_$.x8;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n;
  var DisposableEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var toString_0 = kotlin_kotlin.$_$.e9;
  var toBoolean = kotlin_kotlin.$_$.z7;
  var hashCode = kotlin_kotlin.$_$.x5;
  var getStringHashCode = kotlin_kotlin.$_$.w5;
  var numberToDouble = kotlin_kotlin.$_$.g6;
  var getNumberHashCode = kotlin_kotlin.$_$.u5;
  var defineProp = kotlin_kotlin.$_$.q5;
  var isInterface = kotlin_kotlin.$_$.c6;
  var Collection = kotlin_kotlin.$_$.l2;
  var objectCreate = kotlin_kotlin.$_$.i6;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var mutableStateListOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.o;
  var listOfNotNull = kotlin_kotlin.$_$.s3;
  var joinToString = kotlin_kotlin.$_$.m3;
  var joinToString_0 = kotlin_kotlin.$_$.n3;
  var contains = kotlin_kotlin.$_$.a7;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var Companion_getInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var _SkippableUpdater___get_composer__impl__6t7yne = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a1;
  var DomNodeWrapper = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.b;
  var emptyList = kotlin_kotlin.$_$.b3;
  var copyToArray = kotlin_kotlin.$_$.z2;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.d9;
  var lazy = kotlin_kotlin.$_$.y8;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m;
  var DomApplier = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.a;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var DisposableEffect_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h;
  var KProperty1 = kotlin_kotlin.$_$.w6;
  var getPropertyCallableRef = kotlin_kotlin.$_$.v5;
  //endregion
  //region block: pre-declaration
  function onKeyUp(listener) {
    this.u24(new KeyboardEventListener('keyup', listener));
  }
  setMetadataFor(EventsListenerScope, 'EventsListenerScope', interfaceMeta);
  function classes(classes) {
    return this.p24(asList(classes));
  }
  function tabIndex(value) {
    return this.l24('tabindex', value.toString());
  }
  function spellCheck(value) {
    return this.l24('spellcheck', value.toString());
  }
  setMetadataFor(AttrsScope, 'AttrsScope', interfaceMeta, VOID, [EventsListenerScope]);
  setMetadataFor(AttrsScopeBuilder, 'AttrsScopeBuilder', classMeta, VOID, [AttrsScope, EventsListenerScope], AttrsScopeBuilder);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(EventsListenerScopeBuilder, 'EventsListenerScopeBuilder', classMeta, VOID, [EventsListenerScope], EventsListenerScopeBuilder);
  setMetadataFor(InputType, 'InputType', classMeta);
  setMetadataFor(InputTypeWithUnitValue, 'InputTypeWithUnitValue', classMeta, InputType);
  setMetadataFor(Button, 'Button', objectMeta, InputTypeWithUnitValue);
  setMetadataFor(InputTypeCheckedValue, 'InputTypeCheckedValue', classMeta, InputType);
  setMetadataFor(Checkbox, 'Checkbox', objectMeta, InputTypeCheckedValue);
  setMetadataFor(InputTypeWithStringValue, 'InputTypeWithStringValue', classMeta, InputType);
  setMetadataFor(Color, 'Color', objectMeta, InputTypeWithStringValue);
  setMetadataFor(Date_0, 'Date', objectMeta, InputTypeWithStringValue);
  setMetadataFor(DateTimeLocal, 'DateTimeLocal', objectMeta, InputTypeWithStringValue);
  setMetadataFor(Email, 'Email', objectMeta, InputTypeWithStringValue);
  setMetadataFor(File, 'File', objectMeta, InputTypeWithStringValue);
  setMetadataFor(Hidden, 'Hidden', objectMeta, InputTypeWithStringValue);
  setMetadataFor(Month, 'Month', objectMeta, InputTypeWithStringValue);
  setMetadataFor(InputTypeNumberValue, 'InputTypeNumberValue', classMeta, InputType);
  setMetadataFor(Number_0, 'Number', objectMeta, InputTypeNumberValue);
  setMetadataFor(Password, 'Password', objectMeta, InputTypeWithStringValue);
  setMetadataFor(Radio, 'Radio', objectMeta, InputTypeCheckedValue);
  setMetadataFor(Range, 'Range', objectMeta, InputTypeNumberValue);
  setMetadataFor(Search, 'Search', objectMeta, InputTypeWithStringValue);
  setMetadataFor(Submit, 'Submit', objectMeta, InputTypeWithUnitValue);
  setMetadataFor(Tel, 'Tel', objectMeta, InputTypeWithStringValue);
  setMetadataFor(Text_0, 'Text', objectMeta, InputTypeWithStringValue);
  setMetadataFor(Time, 'Time', objectMeta, InputTypeWithStringValue);
  setMetadataFor(Url, 'Url', objectMeta, InputTypeWithStringValue);
  setMetadataFor(Week, 'Week', objectMeta, InputTypeWithStringValue);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(SyntheticEventListener, 'SyntheticEventListener', classMeta);
  setMetadataFor(KeyboardEventListener, 'KeyboardEventListener', classMeta, SyntheticEventListener);
  setMetadataFor(InputEventListener, 'InputEventListener', classMeta, SyntheticEventListener);
  setMetadataFor(InputAttrsScope, 'InputAttrsScope', classMeta, VOID, [AttrsScope]);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(CSSKeyframe, 'CSSKeyframe', classMeta);
  setMetadataFor(From, 'From', objectMeta, CSSKeyframe);
  setMetadataFor(To, 'To', objectMeta, CSSKeyframe);
  setMetadataFor(CSSStyledRuleDeclaration, 'CSSStyledRuleDeclaration', interfaceMeta);
  setMetadataFor(CSSKeyframeRuleDeclaration, 'CSSKeyframeRuleDeclaration', classMeta, VOID, [CSSStyledRuleDeclaration]);
  setMetadataFor(CSSKeyframesRuleDeclaration, 'CSSKeyframesRuleDeclaration', classMeta);
  setMetadataFor(Raw, 'Raw', classMeta);
  setMetadataFor(MediaFeature, 'MediaFeature', classMeta);
  setMetadataFor(CSSGroupingRuleDeclaration, 'CSSGroupingRuleDeclaration', interfaceMeta);
  setMetadataFor(CSSMediaRuleDeclaration, 'CSSMediaRuleDeclaration', classMeta, VOID, [CSSGroupingRuleDeclaration]);
  setMetadataFor(CSSStyleRuleDeclaration, 'CSSStyleRuleDeclaration', classMeta, VOID, [CSSStyledRuleDeclaration]);
  function property(propertyName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.b2d(propertyName, value);
  }
  function property_0(propertyName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.b2d(propertyName, value);
  }
  function variable(variableName, value) {
    // Inline function 'org.jetbrains.compose.web.css.StylePropertyValue' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.d2d(variableName, value);
  }
  setMetadataFor(StyleScope, 'StyleScope', interfaceMeta);
  setMetadataFor(StyleHolder, 'StyleHolder', interfaceMeta);
  setMetadataFor(StyleScopeBuilder, 'StyleScopeBuilder', classMeta, VOID, [StyleScope, StyleHolder], StyleScopeBuilder);
  setMetadataFor(CSSRuleBuilderImpl, 'CSSRuleBuilderImpl', classMeta, StyleScopeBuilder, [StyleScope, StyleScopeBuilder], CSSRuleBuilderImpl);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(CSSUnitValueTyped, 'CSSUnitValueTyped', classMeta);
  setMetadataFor(RGB, 'RGB', classMeta);
  setMetadataFor(StylePropertyDeclaration, 'StylePropertyDeclaration', classMeta);
  setMetadataFor(Companion_9, 'Companion', objectMeta);
  function add(selector, style) {
    this.i2c(new CSSStyleRuleDeclaration(selector, style));
  }
  setMetadataFor(CSSRulesHolder, 'CSSRulesHolder', interfaceMeta);
  function returnUniversalSelector() {
    return get_Universal();
  }
  function returnHoverSelector() {
    return this.d2e();
  }
  function get_hover() {
    return new PseudoClassInternal('hover');
  }
  setMetadataFor(SelectorsScope, 'SelectorsScope', interfaceMeta);
  function invoke(_this__u8e3s4, cssRule) {
    this.a2e(new RawSelector(_this__u8e3s4), cssRule);
  }
  function style(_this__u8e3s4, cssRule) {
    this.a2e(new RawSelector(_this__u8e3s4), cssRule);
  }
  setMetadataFor(GenericStyleSheetBuilder, 'GenericStyleSheetBuilder', interfaceMeta, VOID, [CSSRulesHolder, SelectorsScope]);
  function style_0(selector, cssRule) {
    this.x2d(selector, buildCSSStyleRule(cssRule));
  }
  setMetadataFor(StyleSheetBuilder, 'StyleSheetBuilder', interfaceMeta, VOID, [CSSRulesHolder, GenericStyleSheetBuilder]);
  setMetadataFor(StyleSheet, 'StyleSheet', classMeta, VOID, [StyleSheetBuilder, CSSRulesHolder], StyleSheet_init_$Create$);
  setMetadataFor(CSSRulesHolderState, 'CSSRulesHolderState', classMeta, VOID, [CSSRulesHolder], CSSRulesHolderState);
  setMetadataFor(CSSSelector, 'CSSSelector', classMeta);
  setMetadataFor(RawSelector, 'RawSelector', classMeta, CSSSelector);
  setMetadataFor(PseudoClassInternal, 'PseudoClassInternal', classMeta, CSSSelector);
  setMetadataFor(CSSBorder, 'CSSBorder', classMeta, VOID, VOID, CSSBorder);
  setMetadataFor(DomElementWrapper, 'DomElementWrapper', classMeta, DomNodeWrapper);
  setMetadataFor(ElementScopeBase, 'ElementScopeBase', classMeta);
  setMetadataFor(ElementScopeImpl, 'ElementScopeImpl', classMeta, ElementScopeBase, VOID, ElementScopeImpl);
  setMetadataFor(ElementBuilderImplementation, 'ElementBuilderImplementation', classMeta);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv_1, VOID, classMeta);
  setMetadataFor(SyntheticEvent, 'SyntheticEvent', classMeta);
  setMetadataFor(SyntheticInputEvent, 'SyntheticInputEvent', classMeta, SyntheticEvent);
  setMetadataFor(SyntheticKeyboardEvent, 'SyntheticKeyboardEvent', classMeta, SyntheticEvent);
  //endregion
  function get_setInputValue() {
    _init_properties_Attrs_kt__w5qjhs();
    return setInputValue;
  }
  var setInputValue;
  var setTextAreaDefaultValue;
  function get_setCheckedValue() {
    _init_properties_Attrs_kt__w5qjhs();
    return setCheckedValue;
  }
  var setCheckedValue;
  function placeholder(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.l24('placeholder', value);
  }
  function readOnly(_this__u8e3s4) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.l24('readonly', '');
  }
  function required(_this__u8e3s4) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.l24('required', '');
  }
  function autoComplete(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.l24('autocomplete', value);
  }
  function type(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.l24('type', value.m24_1);
  }
  function alt(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.l24('alt', value);
  }
  function src(_this__u8e3s4, value) {
    _init_properties_Attrs_kt__w5qjhs();
    return _this__u8e3s4.l24('src', value);
  }
  function setInputValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    if (!(v === e.value)) {
      e.value = v;
    }
    saveControlledInputState(e, v);
    return Unit_instance;
  }
  function setTextAreaDefaultValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    e.innerText = v;
    return Unit_instance;
  }
  function setCheckedValue$lambda(e, v) {
    _init_properties_Attrs_kt__w5qjhs();
    e.checked = v;
    saveControlledInputState(e, v);
    return Unit_instance;
  }
  var properties_initialized_Attrs_kt_uypsku;
  function _init_properties_Attrs_kt__w5qjhs() {
    if (!properties_initialized_Attrs_kt_uypsku) {
      properties_initialized_Attrs_kt_uypsku = true;
      setInputValue = setInputValue$lambda;
      setTextAreaDefaultValue = setTextAreaDefaultValue$lambda;
      setCheckedValue = setCheckedValue$lambda;
    }
  }
  function AttrsScope() {
  }
  function AttrsScopeBuilder(eventsListenerScopeBuilder) {
    eventsListenerScopeBuilder = eventsListenerScopeBuilder === VOID ? new EventsListenerScopeBuilder() : eventsListenerScopeBuilder;
    this.w24_1 = eventsListenerScopeBuilder;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.x24_1 = LinkedHashMap_init_$Create$();
    this.y24_1 = new StyleScopeBuilder();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.z24_1 = ArrayList_init_$Create$();
    this.a25_1 = null;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.b25_1 = ArrayList_init_$Create$();
    this.c25_1 = 8;
  }
  protoOf(AttrsScopeBuilder).v24 = function (listener) {
    this.w24_1.v24(listener);
  };
  protoOf(AttrsScopeBuilder).u24 = function (listener) {
    this.w24_1.u24(listener);
  };
  protoOf(AttrsScopeBuilder).p24 = function (classes) {
    this.b25_1.a1(classes);
  };
  protoOf(AttrsScopeBuilder).q24 = function (classes) {
    addAll(this.b25_1, classes);
  };
  protoOf(AttrsScopeBuilder).o24 = function (builder) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    builder(this.y24_1);
  };
  protoOf(AttrsScopeBuilder).l24 = function (attr, value) {
    // Inline function 'kotlin.collections.set' call
    this.x24_1.g2(attr, value);
    return this;
  };
  protoOf(AttrsScopeBuilder).t24 = function (update, value) {
    var tmp = to(update, value);
    this.z24_1.u(tmp instanceof Pair ? tmp : THROW_CCE());
  };
  protoOf(AttrsScopeBuilder).f25 = function () {
    return this.x24_1;
  };
  function Companion() {
    this.g25_1 = 'copy';
    this.h25_1 = 'cut';
    this.i25_1 = 'paste';
    this.j25_1 = 'contextmenu';
    this.k25_1 = 'click';
    this.l25_1 = 'dblclick';
    this.m25_1 = 'focus';
    this.n25_1 = 'blur';
    this.o25_1 = 'focusin';
    this.p25_1 = 'focusout';
    this.q25_1 = 'keydown';
    this.r25_1 = 'keyup';
    this.s25_1 = 'mousedown';
    this.t25_1 = 'mouseup';
    this.u25_1 = 'mouseenter';
    this.v25_1 = 'mouseleave';
    this.w25_1 = 'mousemove';
    this.x25_1 = 'mouseout';
    this.y25_1 = 'mouseover';
    this.z25_1 = 'wheel';
    this.a26_1 = 'scroll';
    this.b26_1 = 'select';
    this.c26_1 = 'touchcancel';
    this.d26_1 = 'touchend';
    this.e26_1 = 'touchmove';
    this.f26_1 = 'touchstart';
    this.g26_1 = 'animationcancel';
    this.h26_1 = 'animationend';
    this.i26_1 = 'animationiteration';
    this.j26_1 = 'animationstart';
    this.k26_1 = 'beforeinput';
    this.l26_1 = 'input';
    this.m26_1 = 'change';
    this.n26_1 = 'invalid';
    this.o26_1 = 'drag';
    this.p26_1 = 'drop';
    this.q26_1 = 'dragstart';
    this.r26_1 = 'dragend';
    this.s26_1 = 'dragover';
    this.t26_1 = 'dragenter';
    this.u26_1 = 'dragleave';
    this.v26_1 = 'submit';
    this.w26_1 = 'reset';
  }
  var Companion_instance;
  function Companion_getInstance_0() {
    return Companion_instance;
  }
  function EventsListenerScope() {
  }
  function EventsListenerScopeBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.d25_1 = ArrayList_init_$Create$();
    this.e25_1 = 8;
  }
  protoOf(EventsListenerScopeBuilder).u24 = function (listener) {
    this.d25_1.u(listener);
  };
  protoOf(EventsListenerScopeBuilder).x26 = function () {
    return this.d25_1;
  };
  function Button() {
    Button_instance = this;
    InputTypeWithUnitValue.call(this, 'button');
    this.b27_1 = 0;
  }
  var Button_instance;
  function Button_getInstance() {
    if (Button_instance == null)
      new Button();
    return Button_instance;
  }
  function Checkbox() {
    Checkbox_instance = this;
    InputTypeCheckedValue.call(this, 'checkbox');
    this.j27_1 = 0;
  }
  var Checkbox_instance;
  function Checkbox_getInstance() {
    if (Checkbox_instance == null)
      new Checkbox();
    return Checkbox_instance;
  }
  function Color() {
    Color_instance = this;
    InputTypeWithStringValue.call(this, 'color');
    this.r27_1 = 0;
  }
  var Color_instance;
  function Color_getInstance() {
    if (Color_instance == null)
      new Color();
    return Color_instance;
  }
  function Date_0() {
    Date_instance = this;
    InputTypeWithStringValue.call(this, 'date');
    this.y27_1 = 0;
  }
  var Date_instance;
  function Date_getInstance() {
    if (Date_instance == null)
      new Date_0();
    return Date_instance;
  }
  function DateTimeLocal() {
    DateTimeLocal_instance = this;
    InputTypeWithStringValue.call(this, 'datetime-local');
    this.c28_1 = 0;
  }
  var DateTimeLocal_instance;
  function DateTimeLocal_getInstance() {
    if (DateTimeLocal_instance == null)
      new DateTimeLocal();
    return DateTimeLocal_instance;
  }
  function Email() {
    Email_instance = this;
    InputTypeWithStringValue.call(this, 'email');
    this.g28_1 = 0;
  }
  var Email_instance;
  function Email_getInstance() {
    if (Email_instance == null)
      new Email();
    return Email_instance;
  }
  function File() {
    File_instance = this;
    InputTypeWithStringValue.call(this, 'file');
    this.k28_1 = 0;
  }
  var File_instance;
  function File_getInstance() {
    if (File_instance == null)
      new File();
    return File_instance;
  }
  function Hidden() {
    Hidden_instance = this;
    InputTypeWithStringValue.call(this, 'hidden');
    this.o28_1 = 0;
  }
  var Hidden_instance;
  function Hidden_getInstance() {
    if (Hidden_instance == null)
      new Hidden();
    return Hidden_instance;
  }
  function Month() {
    Month_instance = this;
    InputTypeWithStringValue.call(this, 'month');
    this.s28_1 = 0;
  }
  var Month_instance;
  function Month_getInstance() {
    if (Month_instance == null)
      new Month();
    return Month_instance;
  }
  function Number_0() {
    Number_instance = this;
    InputTypeNumberValue.call(this, 'number');
    this.w28_1 = 0;
  }
  var Number_instance;
  function Number_getInstance() {
    if (Number_instance == null)
      new Number_0();
    return Number_instance;
  }
  function Password() {
    Password_instance = this;
    InputTypeWithStringValue.call(this, 'password');
    this.d29_1 = 0;
  }
  var Password_instance;
  function Password_getInstance() {
    if (Password_instance == null)
      new Password();
    return Password_instance;
  }
  function Radio() {
    Radio_instance = this;
    InputTypeCheckedValue.call(this, 'radio');
    this.h29_1 = 0;
  }
  var Radio_instance;
  function Radio_getInstance() {
    if (Radio_instance == null)
      new Radio();
    return Radio_instance;
  }
  function Range() {
    Range_instance = this;
    InputTypeNumberValue.call(this, 'range');
    this.l29_1 = 0;
  }
  var Range_instance;
  function Range_getInstance() {
    if (Range_instance == null)
      new Range();
    return Range_instance;
  }
  function Search() {
    Search_instance = this;
    InputTypeWithStringValue.call(this, 'search');
    this.p29_1 = 0;
  }
  var Search_instance;
  function Search_getInstance() {
    if (Search_instance == null)
      new Search();
    return Search_instance;
  }
  function Submit() {
    Submit_instance = this;
    InputTypeWithUnitValue.call(this, 'submit');
    this.t29_1 = 0;
  }
  var Submit_instance;
  function Submit_getInstance() {
    if (Submit_instance == null)
      new Submit();
    return Submit_instance;
  }
  function Tel() {
    Tel_instance = this;
    InputTypeWithStringValue.call(this, 'tel');
    this.x29_1 = 0;
  }
  var Tel_instance;
  function Tel_getInstance() {
    if (Tel_instance == null)
      new Tel();
    return Tel_instance;
  }
  function Text_0() {
    Text_instance = this;
    InputTypeWithStringValue.call(this, 'text');
    this.b2a_1 = 0;
  }
  var Text_instance;
  function Text_getInstance() {
    if (Text_instance == null)
      new Text_0();
    return Text_instance;
  }
  function Time() {
    Time_instance = this;
    InputTypeWithStringValue.call(this, 'time');
    this.f2a_1 = 0;
  }
  var Time_instance;
  function Time_getInstance() {
    if (Time_instance == null)
      new Time();
    return Time_instance;
  }
  function Url() {
    Url_instance = this;
    InputTypeWithStringValue.call(this, 'url');
    this.j2a_1 = 0;
  }
  var Url_instance;
  function Url_getInstance() {
    if (Url_instance == null)
      new Url();
    return Url_instance;
  }
  function Week() {
    Week_instance = this;
    InputTypeWithStringValue.call(this, 'week');
    this.n2a_1 = 0;
  }
  var Week_instance;
  function Week_getInstance() {
    if (Week_instance == null)
      new Week();
    return Week_instance;
  }
  function InputTypeWithStringValue(name) {
    InputType.call(this, name);
    this.u27_1 = 0;
  }
  protoOf(InputTypeWithStringValue).n27 = function (event) {
    return Week_getInstance().o2a(event);
  };
  function InputTypeWithUnitValue(name) {
    InputType.call(this, name);
    this.e27_1 = 0;
  }
  protoOf(InputTypeWithUnitValue).f27 = function (event) {
    return Unit_instance;
  };
  protoOf(InputTypeWithUnitValue).n27 = function (event) {
    this.f27(event);
    return Unit_instance;
  };
  function InputTypeCheckedValue(name) {
    InputType.call(this, name);
    this.m27_1 = 0;
  }
  protoOf(InputTypeCheckedValue).n27 = function (event) {
    var tmp0_safe_receiver = event.target;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp0_safe_receiver;
    }
    var tmp1_safe_receiver = tmp;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.checked;
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp_0 = tmp2_safe_receiver;
    }
    var tmp3_elvis_lhs = tmp_0;
    return tmp3_elvis_lhs == null ? false : tmp3_elvis_lhs;
  };
  function InputTypeNumberValue(name) {
    InputType.call(this, name);
    this.z28_1 = 0;
  }
  protoOf(InputTypeNumberValue).n27 = function (event) {
    var tmp0_safe_receiver = event.target;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp0_safe_receiver;
    }
    var tmp1_safe_receiver = tmp;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.valueAsNumber;
    return tmp2_elvis_lhs == null ? null : tmp2_elvis_lhs;
  };
  function Companion_0() {
  }
  protoOf(Companion_0).p2a = function (type) {
    var tmp;
    switch (type) {
      case 'button':
        tmp = Button_getInstance();
        break;
      case 'checkbox':
        tmp = Checkbox_getInstance();
        break;
      case 'color':
        tmp = Color_getInstance();
        break;
      case 'date':
        tmp = Date_getInstance();
        break;
      case 'datetime-local':
        tmp = DateTimeLocal_getInstance();
        break;
      case 'email':
        tmp = Email_getInstance();
        break;
      case 'file':
        tmp = File_getInstance();
        break;
      case 'hidden':
        tmp = Hidden_getInstance();
        break;
      case 'month':
        tmp = Month_getInstance();
        break;
      case 'number':
        tmp = Number_getInstance();
        break;
      case 'password':
        tmp = Password_getInstance();
        break;
      case 'radio':
        tmp = Radio_getInstance();
        break;
      case 'range':
        tmp = Range_getInstance();
        break;
      case 'search':
        tmp = Search_getInstance();
        break;
      case 'submit':
        tmp = Submit_getInstance();
        break;
      case 'tel':
        tmp = Tel_getInstance();
        break;
      case 'text':
        tmp = Text_getInstance();
        break;
      case 'time':
        tmp = Time_getInstance();
        break;
      case 'url':
        tmp = Url_getInstance();
        break;
      case 'week':
        tmp = Week_getInstance();
        break;
      default:
        var message = 'fromString got unknown type - ' + type;
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    return Companion_instance_0;
  }
  function InputType(typeStr) {
    this.m24_1 = typeStr;
    this.n24_1 = 0;
  }
  protoOf(InputType).o2a = function (event) {
    var tmp0_safe_receiver = event.target;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp0_safe_receiver;
    }
    var tmp1_safe_receiver = tmp;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.value;
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp_0 = tmp2_safe_receiver;
    }
    var tmp3_elvis_lhs = tmp_0;
    return tmp3_elvis_lhs == null ? '' : tmp3_elvis_lhs;
  };
  function SyntheticEventListener(event, listener) {
    this.q2a_1 = event;
    this.r2a_1 = listener;
    this.s2a_1 = this.q2a_1;
    this.t2a_1 = 0;
  }
  protoOf(SyntheticEventListener).n1o = function () {
    return this.s2a_1;
  };
  protoOf(SyntheticEventListener).u2a = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = new SyntheticEvent(event);
    this.r2a_1(tmp$ret$1);
  };
  protoOf(SyntheticEventListener).handleEvent = function (event) {
    return this.u2a(event);
  };
  function KeyboardEventListener(event, listener) {
    SyntheticEventListener.call(this, event, listener);
    this.z2a_1 = 0;
  }
  protoOf(KeyboardEventListener).u2a = function (event) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.r2a_1(new SyntheticKeyboardEvent(event));
  };
  protoOf(KeyboardEventListener).handleEvent = function (event) {
    return this.u2a(event);
  };
  function InputEventListener(eventName, inputType, listener) {
    var tmp;
    if (eventName === VOID) {
      tmp = 'input';
    } else {
      tmp = eventName;
    }
    eventName = tmp;
    SyntheticEventListener.call(this, eventName, listener);
    this.e2b_1 = inputType;
    this.f2b_1 = 0;
  }
  protoOf(InputEventListener).u2a = function (event) {
    var value = this.e2b_1.n27(event);
    this.r2a_1(new SyntheticInputEvent(value, event));
  };
  protoOf(InputEventListener).handleEvent = function (event) {
    return this.u2a(event);
  };
  function InputAttrsScope(inputType, attrsScope) {
    this.g2b_1 = inputType;
    this.h2b_1 = attrsScope;
    this.i2b_1 = 8;
  }
  protoOf(InputAttrsScope).l24 = function (attr, value) {
    return this.h2b_1.l24(attr, value);
  };
  protoOf(InputAttrsScope).q24 = function (classes) {
    this.h2b_1.q24(classes);
  };
  protoOf(InputAttrsScope).p24 = function (classes) {
    this.h2b_1.p24(classes);
  };
  protoOf(InputAttrsScope).v24 = function (listener) {
    this.h2b_1.v24(listener);
  };
  protoOf(InputAttrsScope).t24 = function (update, value) {
    this.h2b_1.t24(update, value);
  };
  protoOf(InputAttrsScope).u24 = function (listener) {
    this.h2b_1.u24(listener);
  };
  protoOf(InputAttrsScope).s24 = function (value) {
    return this.h2b_1.s24(value);
  };
  protoOf(InputAttrsScope).o24 = function (builder) {
    this.h2b_1.o24(builder);
  };
  protoOf(InputAttrsScope).r24 = function (value) {
    return this.h2b_1.r24(value);
  };
  protoOf(InputAttrsScope).j2b = function (value) {
    var tmp0_subject = this.g2b_1;
    if (((equals(tmp0_subject, Checkbox_getInstance()) ? true : equals(tmp0_subject, Radio_getInstance())) ? true : equals(tmp0_subject, Hidden_getInstance())) ? true : equals(tmp0_subject, Submit_getInstance())) {
      this.l24('value', value);
    } else {
      this.t24(get_setInputValue(), value);
    }
    return this;
  };
  protoOf(InputAttrsScope).k2b = function (value) {
    this.j2b(toString(value));
    return this;
  };
  protoOf(InputAttrsScope).l2b = function (checked) {
    this.t24(get_setCheckedValue(), checked);
    return this;
  };
  protoOf(InputAttrsScope).m2b = function (listener) {
    this.u24(new InputEventListener('input', this.g2b_1, listener));
  };
  function get_controlledInputsValuesWeakMap() {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    return controlledInputsValuesWeakMap;
  }
  var controlledInputsValuesWeakMap;
  function get_controlledRadioGroups() {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    return controlledRadioGroups;
  }
  var controlledRadioGroups;
  function saveControlledInputState(element, value) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    get_controlledInputsValuesWeakMap().set(element, value);
    if (element instanceof HTMLInputElement) {
      updateRadioGroupIfNeeded(element);
    }
  }
  function updateRadioGroupIfNeeded(element) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    var tmp;
    if (element.type === 'radio') {
      // Inline function 'kotlin.text.isNotEmpty' call
      var this_0 = element.name;
      tmp = charSequenceLength(this_0) > 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      if (!get_controlledRadioGroups().m2(element.name)) {
        // Inline function 'kotlin.collections.set' call
        var this_1 = get_controlledRadioGroups();
        var key = element.name;
        // Inline function 'kotlin.collections.mutableSetOf' call
        var value = LinkedHashSet_init_$Create$();
        this_1.g2(key, value);
      }
      ensureNotNull(get_controlledRadioGroups().p2(element.name)).u(element);
    }
  }
  function DisposeRadioGroupEffect(_this__u8e3s4, $composer, $changed) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    var $composer_0 = $composer;
    $composer_0.r17(-1451478773);
    if (isTraceInProgress()) {
      traceEventStart(-1451478773, $changed, -1, 'org.jetbrains.compose.web.attributes.builders.DisposeRadioGroupEffect (InternalControlledInputUtils.kt:67)');
    }
    DisposableEffect(null, DisposeRadioGroupEffect$lambda(_this__u8e3s4), $composer_0, 6);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.s17();
  }
  function restoreControlledInputState(inputElement) {
    _init_properties_InternalControlledInputUtils_kt__h0qaxa();
    var type = Companion_instance_0.p2a(inputElement.type);
    if (get_controlledInputsValuesWeakMap().has(inputElement)) {
      if (equals(type, Radio_getInstance())) {
        var tmp0_safe_receiver = get_controlledRadioGroups().p2(inputElement.name);
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator = tmp0_safe_receiver.k();
          while (tmp0_iterator.x()) {
            var element = tmp0_iterator.z();
            // Inline function 'org.jetbrains.compose.web.attributes.builders.restoreControlledInputState.<anonymous>' call
            element.checked = toBoolean(toString_0(get_controlledInputsValuesWeakMap().get(element)));
          }
        }
        inputElement.checked = toBoolean(toString_0(get_controlledInputsValuesWeakMap().get(inputElement)));
        return Unit_instance;
      }
      if (equals(type, Checkbox_getInstance())) {
        inputElement.checked = toBoolean(toString_0(get_controlledInputsValuesWeakMap().get(inputElement)));
      } else {
        inputElement.value = toString_0(get_controlledInputsValuesWeakMap().get(inputElement));
      }
    }
  }
  function _no_name_provided__qut3iv($ref) {
    this.n2b_1 = $ref;
  }
  protoOf(_no_name_provided__qut3iv).nk = function () {
    // Inline function 'org.jetbrains.compose.web.attributes.builders.DisposeRadioGroupEffect.<anonymous>.<anonymous>' call
    var tmp0_safe_receiver = get_controlledRadioGroups().p2(this.n2b_1.name);
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.v(this.n2b_1);
    var tmp1_safe_receiver = get_controlledRadioGroups().p2(this.n2b_1.name);
    if ((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.o()) === true) {
      get_controlledRadioGroups().h2(this.n2b_1.name);
    }
  };
  function DisposeRadioGroupEffect$lambda($this_DisposeRadioGroupEffect) {
    return function ($this$DisposableEffect) {
      var ref = $this_DisposeRadioGroupEffect.o2b($this$DisposableEffect);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv(ref);
    };
  }
  var properties_initialized_InternalControlledInputUtils_kt_dwq2r0;
  function _init_properties_InternalControlledInputUtils_kt__h0qaxa() {
    if (!properties_initialized_InternalControlledInputUtils_kt_dwq2r0) {
      properties_initialized_InternalControlledInputUtils_kt_dwq2r0 = true;
      // Inline function 'kotlin.js.unsafeCast' call
      controlledInputsValuesWeakMap = new WeakMap();
      // Inline function 'kotlin.collections.mutableMapOf' call
      controlledRadioGroups = LinkedHashMap_init_$Create$();
    }
  }
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_2() {
    return Companion_instance_1;
  }
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    return Companion_instance_2;
  }
  function Companion_3() {
  }
  var Companion_instance_3;
  function Companion_getInstance_4() {
    return Companion_instance_3;
  }
  function Companion_4() {
  }
  var Companion_instance_4;
  function Companion_getInstance_5() {
    return Companion_instance_4;
  }
  function Companion_5() {
  }
  var Companion_instance_5;
  function Companion_getInstance_6() {
    return Companion_instance_5;
  }
  function Companion_6() {
  }
  var Companion_instance_6;
  function Companion_getInstance_7() {
    return Companion_instance_6;
  }
  function Companion_7() {
  }
  var Companion_instance_7;
  function Companion_getInstance_8() {
    return Companion_instance_7;
  }
  function From() {
    From_instance = this;
    CSSKeyframe.call(this);
    this.q2b_1 = 0;
  }
  protoOf(From).toString = function () {
    return 'from';
  };
  var From_instance;
  function From_getInstance() {
    if (From_instance == null)
      new From();
    return From_instance;
  }
  function To() {
    To_instance = this;
    CSSKeyframe.call(this);
    this.s2b_1 = 0;
  }
  protoOf(To).toString = function () {
    return 'to';
  };
  var To_instance;
  function To_getInstance() {
    if (To_instance == null)
      new To();
    return To_instance;
  }
  function CSSKeyframe() {
    this.t2b_1 = 0;
  }
  function CSSKeyframeRuleDeclaration(keyframe, style) {
    this.u2b_1 = keyframe;
    this.v2b_1 = style;
    this.w2b_1 = 8;
  }
  protoOf(CSSKeyframeRuleDeclaration).x2b = function () {
    return this.v2b_1;
  };
  protoOf(CSSKeyframeRuleDeclaration).y2b = function () {
    return this.u2b_1.toString();
  };
  protoOf(CSSKeyframeRuleDeclaration).toString = function () {
    return 'CSSKeyframeRuleDeclaration(keyframe=' + this.u2b_1 + ', style=' + this.v2b_1 + ')';
  };
  protoOf(CSSKeyframeRuleDeclaration).hashCode = function () {
    var result = hashCode(this.u2b_1);
    result = imul(result, 31) + hashCode(this.v2b_1) | 0;
    return result;
  };
  protoOf(CSSKeyframeRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSKeyframeRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSKeyframeRuleDeclaration ? other : THROW_CCE();
    if (!equals(this.u2b_1, tmp0_other_with_cast.u2b_1))
      return false;
    if (!equals(this.v2b_1, tmp0_other_with_cast.v2b_1))
      return false;
    return true;
  };
  function CSSKeyframesRuleDeclaration(name, keys) {
    this.z2b_1 = name;
    this.a2c_1 = keys;
    this.b2c_1 = 8;
  }
  protoOf(CSSKeyframesRuleDeclaration).y2b = function () {
    return '@keyframes ' + this.z2b_1;
  };
  protoOf(CSSKeyframesRuleDeclaration).toString = function () {
    return 'CSSKeyframesRuleDeclaration(name=' + this.z2b_1 + ', keys=' + this.a2c_1 + ')';
  };
  protoOf(CSSKeyframesRuleDeclaration).hashCode = function () {
    var result = getStringHashCode(this.z2b_1);
    result = imul(result, 31) + hashCode(this.a2c_1) | 0;
    return result;
  };
  protoOf(CSSKeyframesRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSKeyframesRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSKeyframesRuleDeclaration ? other : THROW_CCE();
    if (!(this.z2b_1 === tmp0_other_with_cast.z2b_1))
      return false;
    if (!equals(this.a2c_1, tmp0_other_with_cast.a2c_1))
      return false;
    return true;
  };
  function Raw(string) {
    this.c2c_1 = string;
    this.d2c_1 = 0;
  }
  protoOf(Raw).toString = function () {
    return this.c2c_1;
  };
  protoOf(Raw).hashCode = function () {
    return getStringHashCode(this.c2c_1);
  };
  protoOf(Raw).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Raw))
      return false;
    var tmp0_other_with_cast = other instanceof Raw ? other : THROW_CCE();
    if (!(this.c2c_1 === tmp0_other_with_cast.c2c_1))
      return false;
    return true;
  };
  function MediaFeature(name, value) {
    value = value === VOID ? null : value;
    this.e2c_1 = name;
    this.f2c_1 = value;
    this.g2c_1 = 8;
  }
  protoOf(MediaFeature).equals = function (other) {
    var tmp;
    if (other instanceof MediaFeature) {
      tmp = this.e2c_1 === other.e2c_1 ? toString_0(this.f2c_1) === toString_0(other.f2c_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MediaFeature).toString = function () {
    var tmp;
    if (this.f2c_1 == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.web.css.MediaFeature.toString.<anonymous>' call
      tmp = ': ' + this.f2c_1 + ')';
    }
    var tmp1_elvis_lhs = tmp;
    return '(' + this.e2c_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  function media(_this__u8e3s4, query, rulesBuild) {
    media_0(_this__u8e3s4, new Raw(query), rulesBuild);
  }
  function media_0(_this__u8e3s4, query, rulesBuild) {
    var rules = _this__u8e3s4.h2c(rulesBuild);
    _this__u8e3s4.i2c(new CSSMediaRuleDeclaration(query, rules));
  }
  function CSSMediaRuleDeclaration(query, rules) {
    this.j2c_1 = query;
    this.k2c_1 = rules;
    this.l2c_1 = 0;
  }
  protoOf(CSSMediaRuleDeclaration).m2c = function () {
    return this.k2c_1;
  };
  protoOf(CSSMediaRuleDeclaration).y2b = function () {
    return '@media ' + this.j2c_1;
  };
  protoOf(CSSMediaRuleDeclaration).equals = function (other) {
    var tmp;
    if (other instanceof CSSMediaRuleDeclaration) {
      tmp = equals(this.k2c_1, other.k2c_1) ? equals(this.j2c_1, other.j2c_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  function unaryMinus(_this__u8e3s4) {
    return new CSSUnitValueTyped(-_this__u8e3s4.value, _this__u8e3s4.unit);
  }
  function CSSStyleRuleDeclaration(selector, style) {
    this.n2c_1 = selector;
    this.o2c_1 = style;
    this.p2c_1 = 8;
  }
  protoOf(CSSStyleRuleDeclaration).x2b = function () {
    return this.o2c_1;
  };
  protoOf(CSSStyleRuleDeclaration).y2b = function () {
    return this.n2c_1.r2c();
  };
  protoOf(CSSStyleRuleDeclaration).toString = function () {
    return 'CSSStyleRuleDeclaration(selector=' + this.n2c_1 + ', style=' + this.o2c_1 + ')';
  };
  protoOf(CSSStyleRuleDeclaration).hashCode = function () {
    var result = hashCode(this.n2c_1);
    result = imul(result, 31) + hashCode(this.o2c_1) | 0;
    return result;
  };
  protoOf(CSSStyleRuleDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSStyleRuleDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof CSSStyleRuleDeclaration ? other : THROW_CCE();
    if (!equals(this.n2c_1, tmp0_other_with_cast.n2c_1))
      return false;
    if (!equals(this.o2c_1, tmp0_other_with_cast.o2c_1))
      return false;
    return true;
  };
  function CSSGroupingRuleDeclaration() {
  }
  function CSSStyledRuleDeclaration() {
  }
  function buildCSSStyleRule(cssRule) {
    var builder = new CSSRuleBuilderImpl();
    cssRule(builder);
    return builder;
  }
  function CSSRuleBuilderImpl() {
    StyleScopeBuilder.call(this);
    this.v2c_1 = 0;
  }
  function Companion_8() {
  }
  var Companion_instance_8;
  function Companion_getInstance_9() {
    return Companion_instance_8;
  }
  function get_cssRem(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.rem' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'rem');
  }
  function get_px(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'px');
  }
  function get_percent(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.percent' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, '%');
  }
  function get_fr(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.fr' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'fr');
  }
  function get_ms(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.ms' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'ms');
  }
  function get_vh(_this__u8e3s4) {
    var tmp = numberToDouble(_this__u8e3s4);
    // Inline function 'org.jetbrains.compose.web.css.Companion.vh' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new CSSUnitValueTyped(tmp, 'vh');
  }
  function CSSUnitValueTyped(value, unit) {
    this.g2d_1 = value;
    this.h2d_1 = unit;
    this.i2d_1 = 0;
  }
  protoOf(CSSUnitValueTyped).j2 = function () {
    return this.g2d_1;
  };
  protoOf(CSSUnitValueTyped).j2d = function () {
    return this.h2d_1;
  };
  protoOf(CSSUnitValueTyped).toString = function () {
    return '' + this.g2d_1 + this.h2d_1;
  };
  protoOf(CSSUnitValueTyped).hashCode = function () {
    var result = getNumberHashCode(this.g2d_1);
    result = imul(result, 31) + hashCode(this.h2d_1) | 0;
    return result;
  };
  protoOf(CSSUnitValueTyped).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CSSUnitValueTyped))
      return false;
    var tmp0_other_with_cast = other instanceof CSSUnitValueTyped ? other : THROW_CCE();
    if (!equals(this.g2d_1, tmp0_other_with_cast.g2d_1))
      return false;
    if (!equals(this.h2d_1, tmp0_other_with_cast.h2d_1))
      return false;
    return true;
  };
  function rgb(r, g, b) {
    return new RGB(r, g, b);
  }
  function RGB(r, g, b) {
    this.k2d_1 = r;
    this.l2d_1 = g;
    this.m2d_1 = b;
  }
  protoOf(RGB).toString = function () {
    return 'rgb(' + toString(this.k2d_1) + ', ' + toString(this.l2d_1) + ', ' + toString(this.m2d_1) + ')';
  };
  function StyleScope() {
  }
  function StyleScopeBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.y2c_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.z2c_1 = ArrayList_init_$Create$();
    this.a2d_1 = 0;
  }
  protoOf(StyleScopeBuilder).e2d = function () {
    return this.y2c_1;
  };
  protoOf(StyleScopeBuilder).f2d = function () {
    return this.z2c_1;
  };
  protoOf(StyleScopeBuilder).b2d = function (propertyName, value) {
    this.e2d().u(new StylePropertyDeclaration(propertyName, value));
  };
  protoOf(StyleScopeBuilder).d2d = function (variableName, value) {
    this.f2d().u(new StylePropertyDeclaration(variableName, value));
  };
  protoOf(StyleScopeBuilder).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, StyleHolder) : false) {
      tmp = nativeEquals(this.e2d(), other.e2d()) ? nativeEquals(this.f2d(), other.f2d()) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  function StyleHolder() {
  }
  function StylePropertyDeclaration(name, value) {
    this.n2d_1 = name;
    this.o2d_1 = value;
    this.p2d_1 = 8;
  }
  protoOf(StylePropertyDeclaration).ee = function () {
    return this.n2d_1;
  };
  protoOf(StylePropertyDeclaration).fe = function () {
    return this.o2d_1;
  };
  protoOf(StylePropertyDeclaration).toString = function () {
    return 'StylePropertyDeclaration(name=' + this.n2d_1 + ', value=' + this.o2d_1 + ')';
  };
  protoOf(StylePropertyDeclaration).hashCode = function () {
    var result = getStringHashCode(this.n2d_1);
    result = imul(result, 31) + hashCode(this.o2d_1) | 0;
    return result;
  };
  protoOf(StylePropertyDeclaration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StylePropertyDeclaration))
      return false;
    var tmp0_other_with_cast = other instanceof StylePropertyDeclaration ? other : THROW_CCE();
    if (!(this.n2d_1 === tmp0_other_with_cast.n2d_1))
      return false;
    if (!equals(this.o2d_1, tmp0_other_with_cast.o2d_1))
      return false;
    return true;
  };
  function nativeEquals(_this__u8e3s4, properties) {
    if (!(_this__u8e3s4.i() === properties.i()))
      return false;
    var index = 0;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(_this__u8e3s4, Collection)) {
        tmp = _this__u8e3s4.o();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = _this__u8e3s4.k();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'org.jetbrains.compose.web.css.nativeEquals.<anonymous>' call
        var tmp0 = index;
        index = tmp0 + 1 | 0;
        var otherProp = properties.j(tmp0);
        if (!(element.n2d_1 === otherProp.n2d_1 ? toString(element.o2d_1) === toString(otherProp.o2d_1) : false)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  }
  function StyleSheet_init_$Init$(rulesHolder, usePrefix, $this) {
    rulesHolder = rulesHolder === VOID ? new CSSRulesHolderState() : rulesHolder;
    usePrefix = usePrefix === VOID ? true : usePrefix;
    StyleSheet.call($this, usePrefix ? null : '', rulesHolder);
    return $this;
  }
  function StyleSheet_init_$Create$(rulesHolder, usePrefix) {
    return StyleSheet_init_$Init$(rulesHolder, usePrefix, objectCreate(protoOf(StyleSheet)));
  }
  function Companion_9() {
    this.q2d_1 = 0;
  }
  var Companion_instance_9;
  function Companion_getInstance_10() {
    return Companion_instance_9;
  }
  function StyleSheet(customPrefix, rulesHolder) {
    rulesHolder = rulesHolder === VOID ? new CSSRulesHolderState() : rulesHolder;
    this.r2d_1 = rulesHolder;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.s2d_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    tmp_0.t2d_1 = customPrefix == null ? '' + getKClassFromExpression(this).s6() + '-' : customPrefix;
    this.u2d_1 = customPrefix == null;
    this.v2d_1 = 0;
  }
  protoOf(StyleSheet).w2d = function () {
    return this.r2d_1.w2d();
  };
  protoOf(StyleSheet).i2c = function (cssRule) {
    this.r2d_1.i2c(cssRule);
  };
  protoOf(StyleSheet).x2d = function (selector, style) {
    this.r2d_1.x2d(selector, style);
  };
  protoOf(StyleSheet).y2d = function (rulesBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = StyleSheet_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    rulesBuild(this_0);
    return this_0.w2d();
  };
  protoOf(StyleSheet).h2c = function (rulesBuild) {
    return this.y2d(rulesBuild);
  };
  protoOf(StyleSheet).a2e = function (selector, cssRule) {
    return this.z2d(selector, cssRule);
  };
  function CSSRulesHolderState() {
    this.e2e_1 = mutableStateListOf();
    this.f2e_1 = 0;
  }
  protoOf(CSSRulesHolderState).w2d = function () {
    return this.e2e_1;
  };
  protoOf(CSSRulesHolderState).i2c = function (cssRule) {
    this.e2e_1.h16(cssRule);
  };
  function get_Universal() {
    _init_properties_StyleSheetBuilder_kt__ftybdn();
    return Universal;
  }
  var Universal;
  function RawSelector(selector) {
    CSSSelector.call(this);
    this.h2e_1 = selector;
  }
  protoOf(RawSelector).toString = function () {
    return this.h2e_1;
  };
  protoOf(RawSelector).hashCode = function () {
    return getStringHashCode(this.h2e_1);
  };
  protoOf(RawSelector).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RawSelector))
      return false;
    var tmp0_other_with_cast = other instanceof RawSelector ? other : THROW_CCE();
    if (!(this.h2e_1 === tmp0_other_with_cast.h2e_1))
      return false;
    return true;
  };
  function SelectorsScope() {
  }
  function PseudoClassInternal(name) {
    CSSSelector.call(this);
    this.j2e_1 = name;
  }
  protoOf(PseudoClassInternal).equals = function (other) {
    var tmp;
    if (other instanceof PseudoClassInternal) {
      tmp = this.j2e_1 === other.j2e_1 ? this.k2e() == other.k2e() : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(PseudoClassInternal).k2e = function () {
    return null;
  };
  protoOf(PseudoClassInternal).toString = function () {
    var tmp0_safe_receiver = this.k2e();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.web.css.PseudoClassInternal.toString.<anonymous>' call
      tmp = '(' + tmp0_safe_receiver + ')';
    }
    var tmp1_elvis_lhs = tmp;
    return ':' + this.j2e_1 + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs);
  };
  function GenericStyleSheetBuilder() {
  }
  function CSSRulesHolder() {
  }
  function StyleSheetBuilder() {
  }
  var properties_initialized_StyleSheetBuilder_kt_uqx9b1;
  function _init_properties_StyleSheetBuilder_kt__ftybdn() {
    if (!properties_initialized_StyleSheetBuilder_kt_uqx9b1) {
      properties_initialized_StyleSheetBuilder_kt_uqx9b1 = true;
      Universal = new RawSelector('*');
    }
  }
  function backgroundColor(_this__u8e3s4, value) {
    _this__u8e3s4.b2d('background-color', value);
  }
  function borderRadius(_this__u8e3s4, r) {
    _this__u8e3s4.b2d('border-radius', r);
  }
  function border(_this__u8e3s4, width, style, color) {
    width = width === VOID ? null : width;
    style = style === VOID ? null : style;
    color = color === VOID ? null : color;
    border_0(_this__u8e3s4, border$lambda(width, style, color));
  }
  function CSSBorder() {
    this.l2e_1 = null;
    this.m2e_1 = null;
    this.n2e_1 = null;
    this.o2e_1 = 8;
  }
  protoOf(CSSBorder).equals = function (other) {
    var tmp;
    if (other instanceof CSSBorder) {
      tmp = (equals(this.l2e_1, other.l2e_1) ? equals(this.m2e_1, other.m2e_1) : false) ? equals(this.n2e_1, other.n2e_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CSSBorder).toString = function () {
    var values = listOfNotNull([this.l2e_1, this.m2e_1, this.n2e_1]);
    return joinToString(values, ' ');
  };
  function width(_this__u8e3s4, size) {
    _this__u8e3s4.l2e_1 = size;
  }
  function style_1(_this__u8e3s4, style) {
    _this__u8e3s4.m2e_1 = style;
  }
  function color(_this__u8e3s4, color) {
    _this__u8e3s4.n2e_1 = color;
  }
  function border_0(_this__u8e3s4, borderBuild) {
    // Inline function 'kotlin.apply' call
    var this_0 = new CSSBorder();
    // Inline function 'kotlin.contracts.contract' call
    borderBuild(this_0);
    _this__u8e3s4.b2d('border', this_0);
  }
  function border$lambda($width, $style, $color) {
    return function ($this$border) {
      var tmp0_safe_receiver = $width;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        width($this$border, tmp0_safe_receiver);
      }
      var tmp1_safe_receiver = $style;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        style_1($this$border, tmp1_safe_receiver);
      }
      var tmp2_safe_receiver = $color;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        color($this$border, tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function width_0(_this__u8e3s4, value) {
    _this__u8e3s4.b2d('width', value);
  }
  function minWidth(_this__u8e3s4, value) {
    _this__u8e3s4.b2d('min-width', value);
  }
  function height(_this__u8e3s4, value) {
    _this__u8e3s4.b2d('height', value);
  }
  function minHeight(_this__u8e3s4, value) {
    _this__u8e3s4.b2d('min-height', value);
  }
  function boxSizing(_this__u8e3s4, value) {
    _this__u8e3s4.w2c('box-sizing', value);
  }
  function color_0(_this__u8e3s4, value) {
    _this__u8e3s4.b2d('color', value);
  }
  function flexGrow(_this__u8e3s4, value) {
    _this__u8e3s4.x2c('flex-grow', value);
  }
  function alignItems(_this__u8e3s4, alignItems) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.w2c('align-items', alignItems);
  }
  function alignSelf(_this__u8e3s4, alignSelf) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.w2c('align-self', alignSelf);
  }
  function flexDirection(_this__u8e3s4, flexDirection) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.w2c('flex-direction', flexDirection);
  }
  function justifyContent(_this__u8e3s4, justifyContent) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.w2c('justify-content', justifyContent);
  }
  function gap(_this__u8e3s4, value) {
    _this__u8e3s4.b2d('gap', value);
  }
  function gridTemplateColumns(_this__u8e3s4, value) {
    _this__u8e3s4.w2c('grid-template-columns', value);
  }
  function gridArea(_this__u8e3s4, rowStart, columnStart) {
    _this__u8e3s4.w2c('grid-area', rowStart + ' / ' + columnStart);
  }
  function gridTemplateRows(_this__u8e3s4, value) {
    _this__u8e3s4.w2c('grid-template-rows', value);
  }
  function gridAutoColumns(_this__u8e3s4, value) {
    _this__u8e3s4.w2c('grid-auto-columns', value);
  }
  function gridAutoRows(_this__u8e3s4, value) {
    _this__u8e3s4.w2c('grid-auto-rows', value);
  }
  function margin(_this__u8e3s4, value) {
    _this__u8e3s4.w2c('margin', joinToString_0(value, ' '));
  }
  function padding(_this__u8e3s4, value) {
    _this__u8e3s4.w2c('padding', joinToString_0(value, ' '));
  }
  function position(_this__u8e3s4, position) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.w2c('position', position);
  }
  function top(_this__u8e3s4, value) {
    _this__u8e3s4.b2d('top', value);
  }
  function left(_this__u8e3s4, value) {
    _this__u8e3s4.b2d('left', value);
  }
  function right(_this__u8e3s4, value) {
    _this__u8e3s4.b2d('right', value);
  }
  function bottom(_this__u8e3s4, value) {
    _this__u8e3s4.b2d('bottom', value);
  }
  function display(_this__u8e3s4, displayStyle) {
    // Inline function 'org.jetbrains.compose.web.css.value' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.w2c('display', displayStyle);
  }
  function opacity(_this__u8e3s4, value) {
    _this__u8e3s4.x2c('opacity', value);
  }
  function lineHeight(_this__u8e3s4, value) {
    _this__u8e3s4.w2c('line-height', value);
  }
  function fontSize(_this__u8e3s4, value) {
    _this__u8e3s4.b2d('font-size', value);
  }
  function fontFamily(_this__u8e3s4, value) {
    _this__u8e3s4.w2c('font-family', joinToString_0(value, ', ', VOID, VOID, VOID, VOID, fontFamily$lambda));
  }
  function fontFamily$lambda(it) {
    return contains(it, ' ') ? '"' + it + '"' : it;
  }
  function CSSSelector() {
    this.q2c_1 = 0;
  }
  protoOf(CSSSelector).r2c = function () {
    return toString(this);
  };
  function TagElement(elementBuilder, applyAttrs, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j19(-576127026);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.kz(elementBuilder) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.m18(applyAttrs) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.m18(content) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.m17()) {
      if (isTraceInProgress()) {
        traceEventStart(-576127026, $dirty, -1, 'org.jetbrains.compose.web.dom.TagElement (Base.kt:110)');
      }
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.r17(-492369756);
      sourceInformation($composer_1, 'CC(remember):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.v18();
      var tmp;
      if (false ? true : it === Companion_getInstance().j12_1) {
        // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>' call
        var value = new ElementScopeImpl();
        $composer_1.b19(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.s17();
      var scope = tmp0;
      var refEffect = null;
      // Inline function 'org.jetbrains.compose.web.dom.ComposeDomNode' call
      var $composer_2 = $composer_0;
      $composer_2.h12();
      if ($composer_2.z17()) {
        var tmp_1 = $composer_2;
        tmp_1.b18(TagElement$lambda(elementBuilder, scope));
      } else {
        $composer_2.e18();
      }
      // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>' call
      var $this$ComposeDomNode = _SkippableUpdater___init__impl__4ft0t9($composer_2);
      var $composer_3 = $composer_2;
      var attrsScope = new AttrsScopeBuilder();
      if (applyAttrs == null)
        null;
      else
        applyAttrs(attrsScope);
      refEffect = attrsScope.a25_1;
      // Inline function 'androidx.compose.runtime.SkippableUpdater.update' call
      _SkippableUpdater___get_composer__impl__6t7yne($this$ComposeDomNode).r17(509942095);
      // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>.<anonymous>' call
      var $this$update = _Updater___init__impl__rbfxm8(_SkippableUpdater___get_composer__impl__6t7yne($this$ComposeDomNode));
      Updater__set_impl_v7kwss($this$update, attrsScope.b25_1, DomElementWrapper$updateClasses$ref());
      Updater__set_impl_v7kwss($this$update, attrsScope.y24_1, DomElementWrapper$updateStyleDeclarations$ref());
      var tmp_2 = attrsScope.f25();
      Updater__set_impl_v7kwss($this$update, tmp_2, DomElementWrapper$updateAttrs$ref());
      var tmp_3 = attrsScope.w24_1.x26();
      Updater__set_impl_v7kwss($this$update, tmp_3, DomElementWrapper$updateEventListeners$ref());
      Updater__set_impl_v7kwss($this$update, attrsScope.z24_1, DomElementWrapper$updateProperties$ref());
      _SkippableUpdater___get_composer__impl__6t7yne($this$ComposeDomNode).s17();
      $composer_2.r17(2058660585);
      // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>' call
      var $changed_0 = 8 & 64 >> 3 | 14 & 64 >> 3 | 112 & 64 >> 6;
      var $composer_4 = $composer_2;
      $composer_4.r17(-914956529);
      content == null || content(scope, $composer_4, 14 & $changed_0 | 112 & $dirty >> 3);
      $composer_4.s17();
      $composer_2.s17();
      $composer_2.g18();
      var tmp0_safe_receiver = refEffect;
      var tmp_4;
      if (tmp0_safe_receiver == null) {
        tmp_4 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        DisposableEffect(null, TagElement$lambda_0(tmp0_safe_receiver, scope), $composer_0, 6);
        tmp_4 = Unit_instance;
      }
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
      tmp1_safe_receiver.h1e(TagElement$lambda_1(elementBuilder, applyAttrs, content, $changed));
    }
  }
  function DomElementWrapper(node) {
    DomNodeWrapper.call(this, node);
    this.r2e_1 = node;
    this.s2e_1 = emptyList();
  }
  protoOf(DomElementWrapper).y22 = function () {
    return this.r2e_1;
  };
  protoOf(DomElementWrapper).t2e = function (list) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.s2e_1.k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateEventListeners.<anonymous>' call
      this.r2e_1.removeEventListener(element.n1o(), element);
    }
    this.s2e_1 = list;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = this.s2e_1.k();
    while (tmp0_iterator_0.x()) {
      var element_0 = tmp0_iterator_0.z();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateEventListeners.<anonymous>' call
      this.r2e_1.addEventListener(element_0.n1o(), element_0);
    }
  };
  protoOf(DomElementWrapper).u2e = function (applicators) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = applicators.k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateProperties.<anonymous>' call
      var applicator = element.ee();
      var item = element.fe();
      applicator(this.r2e_1, item);
    }
  };
  protoOf(DomElementWrapper).v2e = function (styleApplier) {
    var tmp0_subject = this.r2e_1;
    var tmp;
    if (tmp0_subject instanceof HTMLElement) {
      tmp = true;
    } else {
      tmp = tmp0_subject instanceof SVGElement;
    }
    if (tmp) {
      this.r2e_1.removeAttribute('style');
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var style = this.r2e_1.style;
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = styleApplier.e2d().k();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateStyleDeclarations.<anonymous>' call
        var name = element.ee();
        var value = element.fe();
        style.setProperty(name, toString(value));
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = styleApplier.f2d().k();
      while (tmp0_iterator_0.x()) {
        var element_0 = tmp0_iterator_0.z();
        // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateStyleDeclarations.<anonymous>' call
        var name_0 = element_0.ee();
        var value_0 = element_0.fe();
        style.setProperty(name_0, toString(value_0));
      }
    }
  };
  protoOf(DomElementWrapper).w2e = function (attrs) {
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = this.r2e_1.getAttributeNames();
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateAttrs.<anonymous>' call
      switch (element) {
        case 'style':
        case 'class':
          break;
        default:
          this.r2e_1.removeAttribute(element);
          break;
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = attrs.f2().k();
    while (tmp0_iterator.x()) {
      var element_0 = tmp0_iterator.z();
      // Inline function 'org.jetbrains.compose.web.dom.DomElementWrapper.updateAttrs.<anonymous>' call
      this.r2e_1.setAttribute(element_0.i2(), element_0.j2());
    }
  };
  protoOf(DomElementWrapper).x2e = function (classes) {
    this.r2e_1.removeAttribute('class');
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!classes.o()) {
      var tmp = this.r2e_1.classList;
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp$ret$1 = copyToArray(classes);
      (function () {
        var $externalVarargReceiverTmp = tmp;
        return $externalVarargReceiverTmp.add.apply($externalVarargReceiverTmp, [].slice.call(tmp$ret$1.slice()));
      }.call(this));
    }
  };
  function TagElement$lambda($elementBuilder, $scope) {
    return function () {
      // Inline function 'org.jetbrains.compose.web.dom.TagElement.<anonymous>' call
      var node = $elementBuilder.d1m();
      $scope.c2f(node);
      return new DomElementWrapper(node);
    };
  }
  function DomElementWrapper$updateClasses$ref() {
    var l = function (p0, p1) {
      p0.x2e(p1);
      return Unit_instance;
    };
    l.callableName = 'updateClasses';
    return l;
  }
  function DomElementWrapper$updateStyleDeclarations$ref() {
    var l = function (p0, p1) {
      p0.v2e(p1);
      return Unit_instance;
    };
    l.callableName = 'updateStyleDeclarations';
    return l;
  }
  function DomElementWrapper$updateAttrs$ref() {
    var l = function (p0, p1) {
      p0.w2e(p1);
      return Unit_instance;
    };
    l.callableName = 'updateAttrs';
    return l;
  }
  function DomElementWrapper$updateEventListeners$ref() {
    var l = function (p0, p1) {
      p0.t2e(p1);
      return Unit_instance;
    };
    l.callableName = 'updateEventListeners';
    return l;
  }
  function DomElementWrapper$updateProperties$ref() {
    var l = function (p0, p1) {
      p0.u2e(p1);
      return Unit_instance;
    };
    l.callableName = 'updateProperties';
    return l;
  }
  function TagElement$lambda_0($this, $scope) {
    return function ($this$DisposableEffect) {
      return $this($this$DisposableEffect, $scope.d2f());
    };
  }
  function TagElement$lambda_1($elementBuilder, $applyAttrs, $content, $$changed) {
    return function ($composer, $force) {
      TagElement($elementBuilder, $applyAttrs, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function ElementScopeImpl() {
    ElementScopeBase.call(this);
    this.b2f_1 = 8;
  }
  protoOf(ElementScopeImpl).c2f = function (_set____db54di) {
    this.a2f_1 = _set____db54di;
  };
  protoOf(ElementScopeImpl).d2f = function () {
    var tmp = this.a2f_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('element');
    }
  };
  protoOf(ElementScopeImpl).o2b = function (_this__u8e3s4) {
    return this.d2f();
  };
  function ElementScopeBase() {
    this.e2f_1 = 0;
    this.f2f_1 = 8;
  }
  var Address;
  var Article;
  var Aside;
  var Header;
  var Area;
  var Audio;
  var Map;
  var Track;
  var Video;
  var Datalist;
  var Fieldset;
  var Legend;
  var Meter;
  var Output;
  var Progress;
  var Embed;
  var Iframe;
  var Object_0;
  var Param;
  var Picture;
  var Source;
  var Canvas;
  var DList;
  var DTerm;
  var DDescription;
  function get_Div() {
    _init_properties_Elements_kt__eyv5nt();
    return Div;
  }
  var Div;
  var A;
  function get_Input() {
    _init_properties_Elements_kt__eyv5nt();
    return Input;
  }
  var Input;
  function get_Button() {
    _init_properties_Elements_kt__eyv5nt();
    return Button_0;
  }
  var Button_0;
  var H1;
  var H2;
  var H3;
  var H4;
  var H5;
  var H6;
  var P;
  var Em;
  var I;
  var B;
  var Small;
  var Sup;
  var Sub;
  var Blockquote;
  function get_Span() {
    _init_properties_Elements_kt__eyv5nt();
    return Span;
  }
  var Span;
  var Br;
  var Ul;
  var Ol;
  var Li;
  function get_Img() {
    _init_properties_Elements_kt__eyv5nt();
    return Img;
  }
  var Img;
  var Form;
  var Select;
  var Option;
  var OptGroup;
  var Section;
  var TextArea;
  var Nav;
  var Pre;
  var Code;
  var Main;
  var Footer;
  var Hr;
  var Label;
  var Table;
  var Caption;
  var Col;
  var Colgroup;
  var Tr;
  var Thead;
  var Th;
  var Td;
  var Tbody;
  var Tfoot;
  function get_Style() {
    _init_properties_Elements_kt__eyv5nt();
    return Style;
  }
  var Style;
  function _get_el__ndc0ck($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.h2f_1;
    el$factory();
    return this_0.j2();
  }
  function ElementBuilderImplementation$el$delegate$lambda(this$0) {
    return function () {
      return document.createElement(this$0.g2f_1);
    };
  }
  function ElementBuilderImplementation(tagName) {
    this.g2f_1 = tagName;
    var tmp = this;
    tmp.h2f_1 = lazy(ElementBuilderImplementation$el$delegate$lambda(this));
  }
  protoOf(ElementBuilderImplementation).d1m = function () {
    var tmp = _get_el__ndc0ck(this).cloneNode();
    return tmp instanceof Element ? tmp : THROW_CCE();
  };
  function Div_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j19(1121267064);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.m18(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.m18(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.m17()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(1121267064, $dirty, -1, 'org.jetbrains.compose.web.dom.Div (Elements.kt:495)');
      }
      TagElement(get_Div(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.h1e(Div$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Text_1(value, $composer, $changed) {
    _init_properties_Elements_kt__eyv5nt();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j19(-1813500779);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.kz(value) ? 4 : 2);
    if (!(($dirty & 11) === 2) ? true : !$composer_0.m17()) {
      if (isTraceInProgress()) {
        traceEventStart(-1813500779, $dirty, -1, 'org.jetbrains.compose.web.dom.Text (Elements.kt:482)');
      }
      // Inline function 'androidx.compose.runtime.ComposeNode' call
      $composer_0.r17(-671462136);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.v18();
      var tmp;
      if (false ? true : it === Companion_getInstance().j12_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Text.<anonymous>' call
        var value_0 = Text$lambda;
        this_0.b19(value_0);
        tmp = value_0;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmpCache = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.s17();
      var $composer_1 = $composer_0;
      $composer_1.r17(1886828752);
      sourceInformation($composer_1, 'CC(ComposeNode):Composables.kt#9igjgp');
      var tmp_1 = $composer_1.n17();
      if (!(tmp_1 instanceof DomApplier)) {
        invalidApplier();
      }
      $composer_1.h12();
      if ($composer_1.z17()) {
        var tmp_2 = $composer_1;
        tmp_2.b18(Text$lambda_0(tmpCache));
      } else {
        $composer_1.e18();
      }
      // Inline function 'org.jetbrains.compose.web.dom.Text.<anonymous>' call
      var $this$ComposeNode = _Updater___init__impl__rbfxm8($composer_1);
      Updater__set_impl_v7kwss($this$ComposeNode, value, Text$lambda_1);
      $composer_1.g18();
      $composer_1.s17();
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
      tmp0_safe_receiver.h1e(Text$lambda_2(value, $changed));
    }
  }
  function Button_1(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j19(17018421);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.m18(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.m18(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.m17()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(17018421, $dirty, -1, 'org.jetbrains.compose.web.dom.Button (Elements.kt:527)');
      }
      TagElement(get_Button(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.h1e(Button$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Span_0(attrs, content, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var attrs_0 = {_v: attrs};
    var content_0 = {_v: content};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j19(-606646835);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.m18(attrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.m18(content_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.m17()) {
      if (!(($default & 1) === 0)) {
        attrs_0._v = null;
      }
      if (!(($default & 2) === 0)) {
        content_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(-606646835, $dirty, -1, 'org.jetbrains.compose.web.dom.Span (Elements.kt:617)');
      }
      TagElement(get_Span(), attrs_0._v, content_0._v, $composer_0, 112 & $dirty << 3 | 896 & $dirty << 3);
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
      tmp0_safe_receiver.h1e(Span$lambda(attrs_0, content_0, $changed, $default));
    }
  }
  function Input_0(type, attrs, $composer, $changed) {
    _init_properties_Elements_kt__eyv5nt();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j19(330436284);
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.kz(type) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.m18(attrs) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.m17()) {
      if (isTraceInProgress()) {
        traceEventStart(330436284, $dirty, -1, 'org.jetbrains.compose.web.dom.Input (Elements.kt:1078)');
      }
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.r17(-492369756);
      sourceInformation($composer_1, 'CC(remember):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.v18();
      var tmp;
      if (false ? true : it === Companion_getInstance().j12_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Input.<anonymous>' call
        var value = mutableStateOf(0);
        $composer_1.b19(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_1.s17();
      var keyForRestoringControlledState = tmp0;
      var tmp_1 = get_Input();
      $composer_0.r17(-671446402);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = !!(!!($composer_0.kz(type) | $composer_0.kz(keyForRestoringControlledState)) | $composer_0.m18(attrs));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_0.v18();
      var tmp_2;
      if (invalid ? true : it_0 === Companion_getInstance().j12_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Input.<anonymous>' call
        var value_0 = Input$lambda(type, attrs, keyForRestoringControlledState);
        this_0.b19(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp_3 = tmp_2;
      var tmpCache = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      $composer_0.s17();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.web.dom.Input.<anonymous>' call
      var tmp_4 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_4, 558133459, true, Input$lambda_0(type, keyForRestoringControlledState));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      $composer_2.r17(1157296644);
      sourceInformation($composer_2, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_2.kz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = $composer_2.v18();
      var tmp_5;
      if (invalid_0 ? true : it_1 === Companion_getInstance().j12_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Input.<anonymous>.<anonymous>' call
        var value_1 = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_2.b19(value_1);
        tmp_5 = value_1;
      } else {
        tmp_5 = it_1;
      }
      var tmp_6 = tmp_5;
      var tmp0_0 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
      $composer_2.s17();
      TagElement(tmp_1, tmpCache, tmp0_0, $composer_0, 384);
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
      tmp0_safe_receiver.h1e(Input$lambda_1(type, attrs, $changed));
    }
  }
  function Img_0(src, alt, attrs, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var alt_0 = {_v: alt};
    var attrs_0 = {_v: attrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j19(140604733);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.kz(src) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.kz(alt_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.m18(attrs_0._v) ? 256 : 128);
    if (!(($dirty & 731) === 146) ? true : !$composer_0.m17()) {
      if (!(($default & 2) === 0)) {
        alt_0._v = '';
      }
      if (!(($default & 4) === 0)) {
        attrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(140604733, $dirty, -1, 'org.jetbrains.compose.web.dom.Img (Elements.kt:646)');
      }
      var tmp = get_Img();
      $composer_0.r17(-671457079);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = !!(!!($composer_0.kz(src) | $composer_0.kz(alt_0._v)) | $composer_0.m18(attrs_0._v));
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.v18();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance().j12_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Img.<anonymous>' call
        var value = Img$lambda(src, alt_0, attrs_0);
        this_0.b19(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.s17();
      TagElement(tmp, tmpCache, null, $composer_0, 384);
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
      tmp0_safe_receiver.h1e(Img$lambda_0(src, alt_0, attrs_0, $changed, $default));
    }
  }
  function Style_0(applyAttrs, cssRules, $composer, $changed, $default) {
    _init_properties_Elements_kt__eyv5nt();
    var applyAttrs_0 = {_v: applyAttrs};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.j19(244974285);
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.m18(applyAttrs_0._v) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.kz(cssRules) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.m17()) {
      if (!(($default & 1) === 0)) {
        applyAttrs_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(244974285, $dirty, -1, 'org.jetbrains.compose.web.dom.Style (Elements.kt:1002)');
      }
      var tmp = get_Style();
      $composer_0.r17(-671448825);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      var invalid = $composer_0.m18(applyAttrs_0._v);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.v18();
      var tmp_0;
      if (invalid ? true : it === Companion_getInstance().j12_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Style.<anonymous>' call
        var value = Style$lambda(applyAttrs_0);
        this_0.b19(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp_1 = tmp_0;
      var tmpCache = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      $composer_0.s17();
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.compose.web.dom.Style.<anonymous>' call
      var tmp_2 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_2, 962227798, true, Style$lambda_0(cssRules));
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      $composer_1.r17(1157296644);
      sourceInformation($composer_1, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid_0 = $composer_1.kz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.v18();
      var tmp_3;
      if (invalid_0 ? true : it_0 === Companion_getInstance().j12_1) {
        // Inline function 'org.jetbrains.compose.web.dom.Style.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref_0(dispatchReceiver);
        $composer_1.b19(value_0);
        tmp_3 = value_0;
      } else {
        tmp_3 = it_0;
      }
      var tmp_4 = tmp_3;
      var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_1.s17();
      TagElement(tmp, tmpCache, tmp0, $composer_0, 384);
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
      tmp0_safe_receiver.h1e(Style$lambda_1(applyAttrs_0, cssRules, $changed, $default));
    }
  }
  function clearCSSRules(_this__u8e3s4) {
    _init_properties_Elements_kt__eyv5nt();
    // Inline function 'kotlin.repeat' call
    var times = _this__u8e3s4.cssRules.length;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.jetbrains.compose.web.dom.clearCSSRules.<anonymous>' call
        _this__u8e3s4.deleteRule(0);
      }
       while (inductionVariable < times);
  }
  function Div$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Div_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Text$lambda() {
    _init_properties_Elements_kt__eyv5nt();
    return new DomNodeWrapper(document.createTextNode(''));
  }
  function Text$lambda_0($factory) {
    return function () {
      return $factory();
    };
  }
  function Text$lambda_1($this$set, value) {
    _init_properties_Elements_kt__eyv5nt();
    var tmp = $this$set.y22();
    (tmp instanceof Text ? tmp : THROW_CCE()).data = value;
    return Unit_instance;
  }
  function Text$lambda_2($value, $$changed) {
    return function ($composer, $force) {
      Text_1($value, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Button$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Button_1($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Span$lambda($attrs, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Span_0($attrs._v, $content._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Input$lambda$lambda($keyForRestoringControlledState) {
    return function (it) {
      $keyForRestoringControlledState.kq($keyForRestoringControlledState.j2() + 1 | 0);
      return Unit_instance;
    };
  }
  function Input$lambda($type, $attrs, $keyForRestoringControlledState) {
    return function ($this$TagElement) {
      var inputAttrsBuilder = new InputAttrsScope($type, $this$TagElement);
      type(inputAttrsBuilder, $type);
      inputAttrsBuilder.m2b(Input$lambda$lambda($keyForRestoringControlledState));
      $attrs(inputAttrsBuilder);
      return Unit_instance;
    };
  }
  function _no_name_provided__qut3iv_0() {
  }
  protoOf(_no_name_provided__qut3iv_0).nk = function () {
    // Inline function 'org.jetbrains.compose.web.dom.Input.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
  };
  function Input$lambda$lambda_0($this_TagElement) {
    return function ($this$DisposableEffect) {
      restoreControlledInputState($this_TagElement.o2b($this$DisposableEffect));
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_0();
    };
  }
  function Input$lambda_0($type, $keyForRestoringControlledState) {
    return function ($this$TagElement, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.kz($this$TagElement) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.m17()) {
        if (isTraceInProgress()) {
          traceEventStart(558133459, $dirty, -1, 'org.jetbrains.compose.web.dom.Input.<anonymous> (Elements.kt:1095)');
        }
        $composer_0.r17(-1812148288);
        if (equals($type, Radio_getInstance())) {
          DisposeRadioGroupEffect($this$TagElement, $composer_0, 14 & $dirty);
        }
        $composer_0.s17();
        var tmp_1 = $keyForRestoringControlledState.j2();
        DisposableEffect(tmp_1, Input$lambda$lambda_0($this$TagElement), $composer_0, 0);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp_0 = tmp_2;
      } else {
        $composer_0.d12();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.l22(p0, p1, p2);
    };
  }
  function Input$lambda_1($type, $attrs, $$changed) {
    return function ($composer, $force) {
      Input_0($type, $attrs, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Img$lambda($src, $alt, $attrs) {
    return function ($this$TagElement) {
      alt(src($this$TagElement, $src), $alt._v);
      var tmp;
      if (!($attrs._v == null)) {
        tmp = $attrs._v($this$TagElement);
      }
      return Unit_instance;
    };
  }
  function Img$lambda_0($src, $alt, $attrs, $$changed, $$default) {
    return function ($composer, $force) {
      Img_0($src, $alt._v, $attrs._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function Style$lambda($applyAttrs) {
    return function ($this$TagElement) {
      var tmp;
      if (!($applyAttrs._v == null)) {
        tmp = $applyAttrs._v($this$TagElement);
      }
      return Unit_instance;
    };
  }
  function _no_name_provided__qut3iv_1($cssStylesheet) {
    this.i2f_1 = $cssStylesheet;
  }
  protoOf(_no_name_provided__qut3iv_1).nk = function () {
    // Inline function 'org.jetbrains.compose.web.dom.Style.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
    var tmp0_safe_receiver = this.i2f_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      clearCSSRules(tmp0_safe_receiver);
    }
  };
  function Style$lambda$lambda($this_TagElement, $cssRules) {
    return function ($this$DisposableEffect) {
      var tmp = $this_TagElement.o2b($this$DisposableEffect).sheet;
      var cssStylesheet = tmp instanceof CSSStyleSheet ? tmp : null;
      if (cssStylesheet == null)
        null;
      else {
        setCSSRules(cssStylesheet, $cssRules);
      }
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new _no_name_provided__qut3iv_1(cssStylesheet);
    };
  }
  function Style$lambda_0($cssRules) {
    return function ($this$TagElement, $composer, $changed) {
      var $composer_0 = $composer;
      var $dirty = $changed;
      var tmp;
      if (($changed & 14) === 0) {
        $dirty = $dirty | ($composer_0.kz($this$TagElement) ? 4 : 2);
        tmp = Unit_instance;
      }
      var tmp_0;
      if (!(($dirty & 91) === 18) ? true : !$composer_0.m17()) {
        if (isTraceInProgress()) {
          traceEventStart(962227798, $dirty, -1, 'org.jetbrains.compose.web.dom.Style.<anonymous> (Elements.kt:1011)');
        }
        var tmp_1 = $cssRules.i();
        DisposableEffect_0($cssRules, tmp_1, Style$lambda$lambda($this$TagElement, $cssRules), $composer_0, 0);
        var tmp_2;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_2 = Unit_instance;
        }
        tmp_0 = tmp_2;
      } else {
        $composer_0.d12();
        tmp_0 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.l22(p0, p1, p2);
    };
  }
  function Style$lambda_1($applyAttrs, $cssRules, $$changed, $$default) {
    return function ($composer, $force) {
      Style_0($applyAttrs._v, $cssRules, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function el$factory() {
    return getPropertyCallableRef('el', 1, KProperty1, function (receiver) {
      return _get_el__ndc0ck(receiver);
    }, null);
  }
  var properties_initialized_Elements_kt_gtqiqv;
  function _init_properties_Elements_kt__eyv5nt() {
    if (!properties_initialized_Elements_kt_gtqiqv) {
      properties_initialized_Elements_kt_gtqiqv = true;
      Address = new ElementBuilderImplementation('address');
      Article = new ElementBuilderImplementation('article');
      Aside = new ElementBuilderImplementation('aside');
      Header = new ElementBuilderImplementation('header');
      Area = new ElementBuilderImplementation('area');
      Audio = new ElementBuilderImplementation('audio');
      Map = new ElementBuilderImplementation('map');
      Track = new ElementBuilderImplementation('track');
      Video = new ElementBuilderImplementation('video');
      Datalist = new ElementBuilderImplementation('datalist');
      Fieldset = new ElementBuilderImplementation('fieldset');
      Legend = new ElementBuilderImplementation('legend');
      Meter = new ElementBuilderImplementation('meter');
      Output = new ElementBuilderImplementation('output');
      Progress = new ElementBuilderImplementation('progress');
      Embed = new ElementBuilderImplementation('embed');
      Iframe = new ElementBuilderImplementation('iframe');
      Object_0 = new ElementBuilderImplementation('object');
      Param = new ElementBuilderImplementation('param');
      Picture = new ElementBuilderImplementation('picture');
      Source = new ElementBuilderImplementation('source');
      Canvas = new ElementBuilderImplementation('canvas');
      DList = new ElementBuilderImplementation('dl');
      DTerm = new ElementBuilderImplementation('dt');
      DDescription = new ElementBuilderImplementation('dd');
      Div = new ElementBuilderImplementation('div');
      A = new ElementBuilderImplementation('a');
      Input = new ElementBuilderImplementation('input');
      Button_0 = new ElementBuilderImplementation('button');
      H1 = new ElementBuilderImplementation('h1');
      H2 = new ElementBuilderImplementation('h2');
      H3 = new ElementBuilderImplementation('h3');
      H4 = new ElementBuilderImplementation('h4');
      H5 = new ElementBuilderImplementation('h5');
      H6 = new ElementBuilderImplementation('h6');
      P = new ElementBuilderImplementation('p');
      Em = new ElementBuilderImplementation('em');
      I = new ElementBuilderImplementation('i');
      B = new ElementBuilderImplementation('b');
      Small = new ElementBuilderImplementation('small');
      Sup = new ElementBuilderImplementation('sup');
      Sub = new ElementBuilderImplementation('sub');
      Blockquote = new ElementBuilderImplementation('blockquote');
      Span = new ElementBuilderImplementation('span');
      Br = new ElementBuilderImplementation('br');
      Ul = new ElementBuilderImplementation('ul');
      Ol = new ElementBuilderImplementation('ol');
      Li = new ElementBuilderImplementation('li');
      Img = new ElementBuilderImplementation('img');
      Form = new ElementBuilderImplementation('form');
      Select = new ElementBuilderImplementation('select');
      Option = new ElementBuilderImplementation('option');
      OptGroup = new ElementBuilderImplementation('optgroup');
      Section = new ElementBuilderImplementation('section');
      TextArea = new ElementBuilderImplementation('textarea');
      Nav = new ElementBuilderImplementation('nav');
      Pre = new ElementBuilderImplementation('pre');
      Code = new ElementBuilderImplementation('code');
      Main = new ElementBuilderImplementation('main');
      Footer = new ElementBuilderImplementation('footer');
      Hr = new ElementBuilderImplementation('hr');
      Label = new ElementBuilderImplementation('label');
      Table = new ElementBuilderImplementation('table');
      Caption = new ElementBuilderImplementation('caption');
      Col = new ElementBuilderImplementation('col');
      Colgroup = new ElementBuilderImplementation('colgroup');
      Tr = new ElementBuilderImplementation('tr');
      Thead = new ElementBuilderImplementation('thead');
      Th = new ElementBuilderImplementation('th');
      Td = new ElementBuilderImplementation('td');
      Tbody = new ElementBuilderImplementation('tbody');
      Tfoot = new ElementBuilderImplementation('tfoot');
      Style = new ElementBuilderImplementation('style');
    }
  }
  function setCSSRules(_this__u8e3s4, cssRules) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = cssRules.k();
    while (tmp0_iterator.x()) {
      var element = tmp0_iterator.z();
      // Inline function 'org.jetbrains.compose.web.dom.setCSSRules.<anonymous>' call
      addRule(_this__u8e3s4, element);
    }
  }
  function addRule(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_0(_this__u8e3s4, cssRuleDeclaration.y2b() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_0(_this__u8e3s4, cssRule) {
    var cssRuleIndex = _this__u8e3s4.insertRule(cssRule, _this__u8e3s4.cssRules.length);
    return _this__u8e3s4.cssRules.item(cssRuleIndex);
  }
  function fillRule(cssRuleDeclaration, cssRule) {
    if (isInterface(cssRuleDeclaration, CSSStyledRuleDeclaration)) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var cssStyleRule = cssRule;
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator = cssRuleDeclaration.x2b().e2d().k();
      while (tmp0_iterator.x()) {
        var element = tmp0_iterator.z();
        // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
        var name = element.ee();
        var value = element.fe();
        setProperty(cssStyleRule.style, name, value);
      }
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = cssRuleDeclaration.x2b().f2d().k();
      while (tmp0_iterator_0.x()) {
        var element_0 = tmp0_iterator_0.z();
        // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
        var name_0 = element_0.ee();
        var value_0 = element_0.fe();
        setVariable(cssStyleRule.style, name_0, value_0);
      }
    } else {
      if (isInterface(cssRuleDeclaration, CSSGroupingRuleDeclaration)) {
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var cssGroupingRule = cssRule;
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator_1 = cssRuleDeclaration.m2c().k();
        while (tmp0_iterator_1.x()) {
          var element_1 = tmp0_iterator_1.z();
          // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
          addRule_1(cssGroupingRule, element_1);
        }
      } else {
        if (cssRuleDeclaration instanceof CSSKeyframesRuleDeclaration) {
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var cssGroupingRule_0 = cssRule;
          // Inline function 'kotlin.collections.forEach' call
          var tmp0_iterator_2 = cssRuleDeclaration.a2c_1.k();
          while (tmp0_iterator_2.x()) {
            var element_2 = tmp0_iterator_2.z();
            // Inline function 'org.jetbrains.compose.web.dom.fillRule.<anonymous>' call
            addRule_2(cssGroupingRule_0, element_2);
          }
        }
      }
    }
  }
  function setProperty(style, name, value) {
    style.setProperty(name, toString(value));
  }
  function setVariable(style, name, value) {
    style.setProperty('--' + name, toString(value));
  }
  function addRule_1(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_3(_this__u8e3s4, cssRuleDeclaration.y2b() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_2(_this__u8e3s4, cssRuleDeclaration) {
    var tmp0_safe_receiver = addRule_4(_this__u8e3s4, cssRuleDeclaration.y2b() + ' {}');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      fillRule(cssRuleDeclaration, tmp0_safe_receiver);
    }
  }
  function addRule_3(_this__u8e3s4, cssRule) {
    var cssRuleIndex = _this__u8e3s4.insertRule(cssRule, _this__u8e3s4.cssRules.length);
    return _this__u8e3s4.cssRules.item(cssRuleIndex);
  }
  function addRule_4(_this__u8e3s4, cssRule) {
    // Inline function 'org.jetbrains.compose.web.css.appendRule' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.appendRule(cssRule);
    return _this__u8e3s4.cssRules.item(_this__u8e3s4.cssRules.length - 1 | 0);
  }
  function SyntheticEvent(nativeEvent) {
    this.j2f_1 = nativeEvent;
    var tmp = this;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.k2f_1 = this.j2f_1.target;
    this.l2f_1 = this.j2f_1.bubbles;
    this.m2f_1 = this.j2f_1.cancelable;
    this.n2f_1 = this.j2f_1.composed;
    this.o2f_1 = this.j2f_1.currentTarget;
    this.p2f_1 = this.j2f_1.eventPhase;
    this.q2f_1 = this.j2f_1.defaultPrevented;
    this.r2f_1 = this.j2f_1.timeStamp;
    this.s2f_1 = this.j2f_1.type;
    this.t2f_1 = this.j2f_1.isTrusted;
    this.u2f_1 = 0;
  }
  protoOf(SyntheticEvent).v2f = function () {
    return this.j2f_1.preventDefault();
  };
  protoOf(SyntheticEvent).w2f = function () {
    return this.j2f_1.stopPropagation();
  };
  function SyntheticInputEvent(value, nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.j2g_1 = value;
    var tmp = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = nativeEvent.data;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp_0 = tmp0_safe_receiver;
    }
    tmp.k2g_1 = tmp_0;
    var tmp_1 = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver_0 = nativeEvent.dataTransfer;
    var tmp_2;
    if (tmp0_safe_receiver_0 == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp_2 = tmp0_safe_receiver_0;
    }
    tmp_1.l2g_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver_1 = nativeEvent.inputType;
    var tmp_4;
    if (tmp0_safe_receiver_1 == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp_4 = tmp0_safe_receiver_1;
    }
    tmp_3.m2g_1 = tmp_4;
    var tmp_5 = this;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver_2 = nativeEvent.isComposing;
    var tmp_6;
    if (tmp0_safe_receiver_2 == null) {
      tmp_6 = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp_6 = tmp0_safe_receiver_2;
    }
    var tmp1_elvis_lhs = tmp_6;
    tmp_5.n2g_1 = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    this.o2g_1 = 0;
  }
  function SyntheticKeyboardEvent(nativeEvent) {
    SyntheticEvent.call(this, nativeEvent);
    this.b2h_1 = nativeEvent;
    this.c2h_1 = nativeEvent.altKey;
    this.d2h_1 = nativeEvent.code;
    this.e2h_1 = nativeEvent.ctrlKey;
    this.f2h_1 = nativeEvent.isComposing;
    this.g2h_1 = nativeEvent.key;
    var tmp = this;
    // Inline function 'kotlin.js.asDynamic' call
    tmp.h2h_1 = toString(nativeEvent.locale);
    this.i2h_1 = nativeEvent.location;
    this.j2h_1 = nativeEvent.metaKey;
    this.k2h_1 = nativeEvent.repeat;
    this.l2h_1 = nativeEvent.shiftKey;
    this.m2h_1 = 0;
  }
  //region block: post-declaration
  protoOf(AttrsScopeBuilder).r24 = tabIndex;
  protoOf(AttrsScopeBuilder).s24 = spellCheck;
  protoOf(EventsListenerScopeBuilder).v24 = onKeyUp;
  protoOf(StyleScopeBuilder).w2c = property;
  protoOf(StyleScopeBuilder).x2c = property_0;
  protoOf(StyleScopeBuilder).c2d = variable;
  defineProp(protoOf(CSSUnitValueTyped), 'value', function () {
    return this.j2();
  });
  defineProp(protoOf(CSSUnitValueTyped), 'unit', function () {
    return this.j2d();
  });
  protoOf(StyleSheet).z2d = style_0;
  protoOf(StyleSheet).b2e = style;
  protoOf(StyleSheet).c2e = invoke;
  protoOf(StyleSheet).returnUniversalSelector = returnUniversalSelector;
  protoOf(StyleSheet).returnHoverSelector = returnHoverSelector;
  protoOf(StyleSheet).d2e = get_hover;
  protoOf(CSSRulesHolderState).x2d = add;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Companion_instance_3 = new Companion_3();
  Companion_instance_4 = new Companion_4();
  Companion_instance_5 = new Companion_5();
  Companion_instance_6 = new Companion_6();
  Companion_instance_7 = new Companion_7();
  Companion_instance_8 = new Companion_8();
  Companion_instance_9 = new Companion_9();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = StyleSheet_init_$Init$;
  _.$_$.b = StyleSheet_init_$Create$;
  _.$_$.c = Password_getInstance;
  _.$_$.d = Text_getInstance;
  _.$_$.e = Companion_instance_4;
  _.$_$.f = Companion_instance_5;
  _.$_$.g = From_getInstance;
  _.$_$.h = To_getInstance;
  _.$_$.i = Companion_instance_1;
  _.$_$.j = Companion_instance_6;
  _.$_$.k = Companion_instance_7;
  _.$_$.l = Companion_instance_2;
  _.$_$.m = Companion_instance_3;
  _.$_$.n = classes;
  _.$_$.o = spellCheck;
  _.$_$.p = tabIndex;
  _.$_$.q = AttrsScope;
  _.$_$.r = onKeyUp;
  _.$_$.s = autoComplete;
  _.$_$.t = placeholder;
  _.$_$.u = readOnly;
  _.$_$.v = required;
  _.$_$.w = CSSBorder;
  _.$_$.x = CSSGroupingRuleDeclaration;
  _.$_$.y = CSSKeyframeRuleDeclaration;
  _.$_$.z = CSSKeyframesRuleDeclaration;
  _.$_$.a1 = MediaFeature;
  _.$_$.b1 = Raw;
  _.$_$.c1 = property;
  _.$_$.d1 = property_0;
  _.$_$.e1 = variable;
  _.$_$.f1 = StyleScopeBuilder;
  _.$_$.g1 = StyleScope;
  _.$_$.h1 = StyleSheet;
  _.$_$.i1 = alignItems;
  _.$_$.j1 = alignSelf;
  _.$_$.k1 = backgroundColor;
  _.$_$.l1 = borderRadius;
  _.$_$.m1 = border;
  _.$_$.n1 = bottom;
  _.$_$.o1 = boxSizing;
  _.$_$.p1 = color;
  _.$_$.q1 = color_0;
  _.$_$.r1 = get_cssRem;
  _.$_$.s1 = display;
  _.$_$.t1 = flexDirection;
  _.$_$.u1 = flexGrow;
  _.$_$.v1 = fontFamily;
  _.$_$.w1 = fontSize;
  _.$_$.x1 = get_fr;
  _.$_$.y1 = gap;
  _.$_$.z1 = gridArea;
  _.$_$.a2 = gridAutoColumns;
  _.$_$.b2 = gridAutoRows;
  _.$_$.c2 = gridTemplateColumns;
  _.$_$.d2 = gridTemplateRows;
  _.$_$.e2 = height;
  _.$_$.f2 = justifyContent;
  _.$_$.g2 = left;
  _.$_$.h2 = lineHeight;
  _.$_$.i2 = margin;
  _.$_$.j2 = media;
  _.$_$.k2 = minHeight;
  _.$_$.l2 = minWidth;
  _.$_$.m2 = get_ms;
  _.$_$.n2 = opacity;
  _.$_$.o2 = padding;
  _.$_$.p2 = get_percent;
  _.$_$.q2 = position;
  _.$_$.r2 = get_px;
  _.$_$.s2 = rgb;
  _.$_$.t2 = right;
  _.$_$.u2 = style_1;
  _.$_$.v2 = top;
  _.$_$.w2 = unaryMinus;
  _.$_$.x2 = get_vh;
  _.$_$.y2 = width_0;
  _.$_$.z2 = width;
  _.$_$.a3 = Button_1;
  _.$_$.b3 = Div_0;
  _.$_$.c3 = Img_0;
  _.$_$.d3 = Input_0;
  _.$_$.e3 = Span_0;
  _.$_$.f3 = Style_0;
  _.$_$.g3 = Text_1;
  //endregion
  return _;
}));

//# sourceMappingURL=html-html-core.js.map
