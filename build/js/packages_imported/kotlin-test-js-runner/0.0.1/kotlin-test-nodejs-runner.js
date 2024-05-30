#!/usr/bin/env node
"use strict";function t(t,e){return t.slice(0,e.length)==e}var e=/[\\^$.*+?()[\]{}|]/g,n=RegExp(e.source);function r(t){return t&&n.test(t)?t.replace(e,"\\$&"):t}function i(t,e){null!==e&&t.push(e)}function s(t){console.log(t)}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function u(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var s=arguments[e],u=0,o=s.length;u<o;u++,i++)r[i]=s[u];return r}var o=require("format-util"),a="skip",l="reportAsIgnoredTest",c="reportAllInnerTestsAsIgnored";function f(t,e){return(e=e||{}).name=t,e}var p=["log","info","warn","error","debug"];function h(t,e){return{suite:function(e,n,r){t.suite(e,n,r)},test:function(n,r,i){t.test(n,r,(function(){var t=console,r=p.map((function(r){var i,s=t[r];return t[r]=(i=r,function(t){for(var r,s=[],a=1;a<arguments.length;a++)s[a-1]=arguments[a];r="warn"==i||"error"==i?"testStdErr":"testStdOut",e.sendMessage(r,f(n,{out:"["+i+"] "+o.apply(void 0,u([t],s))+"\n"}))}),function(){return t[r]=s}}));try{return i()}catch(t){throw t}finally{r.forEach((function(t){return t()}))}}))}}}var g=function(){function e(t,e){this.description=t,this.onFail=e}return e.prototype.printUsage=function(){var t=this.description;for(var e in s(t.bin+" v"+t.version+" - "+t.description),s(),s("Usage: "+t.bin+" "+t.usage),s(),t.args){var n=t.args[e];s("  "+n.keys.join(", "));if(s("    "+n.help),n.values&&n.valuesHelp){s("    Possible values:");for(var r=0;r<n.values.length;r++){s('     - "'+n.values[r]+'": '+n.valuesHelp[r])}}n.default&&s("    By default: "+n.default),s("")}},e.prototype.badArgsExit=function(t){s(t),s(),this.printUsage(),this.onFail(1)},e.prototype.parse=function(e){var n=this.description,r={free:[]};for(var i in n.args)n.args[i].single||(r[i]=[]);t:for(;0!=e.length;){var s=e.shift();if(t(s,"--"))for(var u in n.args){var o=n.args[u];if(-1!=o.keys.indexOf(s)){0==e.length&&this.badArgsExit("Missed value after option "+s);var a=e.shift();o.values&&-1==o.values.indexOf(a)&&this.badArgsExit("Unsupported value for option "+s),o.single?r[u]=a:r[u].push(a);continue t}}else r.free.push(s)}return n.freeArgsTitle&&0==r.free.length&&this.badArgsExit("At least one "+n.freeArgsTitle+" should be provided"),r},e}();function d(e){if(null==e)return null;if(0==(e=(e=e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")).replace(/\*+/,"*")).length)return null;if("*"==e)return v;if(-1==e.indexOf("*"))return new x(e);if(t(e,"*"))return new m(e);var n=e.split("*",2),r=n[0],i=n[1];return new y(r,i?new m(e):null)}var v=new(function(){function t(){}return t.prototype.mayContainTestsFromSuite=function(t){return!0},t.prototype.containsTest=function(t){return!0},t}()),y=function(){function e(t,e){this.prefix=t,this.filter=e}return e.prototype.mayContainTestsFromSuite=function(e){return t(this.prefix,e)||t(e,this.prefix)},e.prototype.containsAllTestsFromSuite=function(e){return null==this.filter&&t(e,this.prefix)},e.prototype.containsTest=function(e){return t(e,this.prefix)&&(null==this.filter||this.filter.containsTest(e))},e}(),x=function(){function e(t){this.fqn=t,this.classNameOnlyRegExp=RegExp("^"+r(this.fqn+".")+"[^.]+$")}return e.prototype.mayContainTestsFromSuite=function(e){return t(this.fqn,e)},e.prototype.containsTest=function(t){return t===this.fqn||this.classNameOnlyRegExp.test(t)},e}(),m=function(){function t(t){this.regexp=RegExp("^"+t.split("*").map((function(t){return r(t)})).join(".*")+"$")}return t.prototype.mayContainTestsFromSuite=function(t){return!0},t.prototype.containsTest=function(t){return this.regexp.test(t)},t.prototype.toString=function(){return this.regexp.toString()},t}(),T=function(){function t(t,e){var n=this;this.include=t,this.exclude=e,this.excludePrefix=[],this.exclude.forEach((function(t){t instanceof y&&null==t.filter&&n.excludePrefix.push(t)}))}return t.prototype.mayContainTestsFromSuite=function(t,e){for(var n=0,r=this.excludePrefix;n<r.length;n++){var i=r[n];if(i.containsAllTestsFromSuite(t)||i.containsAllTestsFromSuite(e))return!1}for(var s=0,u=this.include;s<u.length;s++){var o=u[s];if(o.mayContainTestsFromSuite(t)||o.mayContainTestsFromSuite(e))return!0}return!1},t.prototype.containsTest=function(t,e){for(var n=0,r=this.exclude;n<r.length;n++){var i=r[n];if(i.containsTest(t)||i.containsTest(e))return!1}for(var s=0,u=this.include;s<u.length;s++){var o=u[s];if(o.containsTest(t)||o.containsTest(e))return!0}return!1},t}();require("format-util");var S=function(){function t(t,e){this.send=e,this.id=t||Math.floor(9999000001*Math.random())+1e6}return t.prototype.sendMessage=function(t,e){e.flowId=this.id,e.timestamp=(new Date).toISOString().slice(0,-1);var n=Object.keys(e).map((function(t){return t+"='"+(((n=e[t])?n.toString().replace(/\x1B.*?m/g,"").replace(/\|/g,"||").replace(/\n/g,"|n").replace(/\r/g,"|r").replace(/\[/g,"|[").replace(/\]/g,"|]").replace(/\u0085/g,"|x").replace(/\u2028/g,"|l").replace(/\u2029/g,"|p").replace(/'/g,"|'"):"")+"'");var n})).join(" ");this.send("##teamcity["+t+" "+n+"]")},t}();function w(t,e){var n=console.log,r=new S(null,(function(t){return n(t)}));return h(function(t,e){var n={include:e.include,exclude:e.exclude},r=t;return r=function(t,e,n){var r=[],s=[];function u(t,e,n){var r,s,u;(r=t,s=function(t){return t.split(",")},u=[],r.forEach((function(t){s(t).forEach((function(t){u.push(t)}))})),u).map((function(t){t.length&&"!"==t[0]?i(n,d(t.substring(1))):i(e,d(t))}))}if(u(e,r,s),u(n,s,r),0==r.length&&0==s.length)return t;0==r.length&&r.push(v);var o=new T(r,s);return function(t,e){var n=[];function r(){return n[0]?n.join("."):n.slice(1).join(".")}function i(){var t=""+n.slice(1).join("$");return n[0]?t?n[0]+"."+t:n[0]:t}return{suite:function(s,u,o){n.push(s);try{if(n.length>0&&!e.mayContainTestsFromSuite(r(),i()))return;t.suite(s,u,o)}finally{n.pop()}},test:function(n,s,u){try{if(!e.containsTest(r()+"."+n,i()+"."+n))return;t.test(n,s,u)}finally{}}}}(t,o)}(r,n.include,n.exclude)}(t,e),r)}var F=new g({version:"0.0.1",bin:"kotlin-js-tests",description:"Simple Kotlin/JS tests runner with TeamCity reporter",usage:"[-t --tests] [-e --exclude] <module_name1>, <module_name2>, ..",args:{include:{keys:["--tests","--include"],help:"Tests to include. Example: MySuite.test1,MySuite.MySubSuite.*,*unix*,!*windows*",default:"*"},exclude:{keys:["--exclude"],help:"Tests to exclude. Example: MySuite.test1,MySuite.MySubSuite.*,*unix*"},ignoredTestSuites:{keys:["--ignoredTestSuites"],help:"How to deal with ignored test suites",single:!0,values:[a,l,c],valuesHelp:["don't report ignored test suites","useful to speedup large ignored test suites","will cause visiting all inner tests"],default:c}},freeArgsTitle:null},process.exit).parse(process.argv);globalThis.kotlinTest={adapterTransformer:function(t){return w(t,F)}};
//# sourceMappingURL=kotlin-test-nodejs-runner.js.map