parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n=document.querySelector(".box"),r=document.querySelector("style"),a="/*你好！我是小u，我来展示一下我的前端功底。\n首先清除一些默认样式*/\n* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n/*\n媒体查询，如果是移动端设备，需要设置新样式\n*/\n@media (max-width: 500px) {\n    .box {\n        position: fixed;\n        top: 50vh;\n        height:50vh;\n        overflow:auto\n    }\n}\n/*\n设置内容颜色为红色，并让内容自动换行\n*/\nbody {\n    color:red;\n    word-break: break-all;\n}\n\n/*\n现在开始准备一个div\n然后用这个div来制作一个八卦图\n*/\n.gossip {\n    position:fixed;\n    top:0px;\n    left: 50vw;\n    transform: translate(-50%);\n    width:300px;\n    height:300px;\n    border:1px solid black;\n    border-radius:50%;\n    background: linear-gradient(90deg, rgba(255,255,255,1) \n    0%, rgba(255,255,255,1) 50%, \n    rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n\n/*\n使用伪元素before、after来制作八卦图的内半圆\n在内半圆中使用css的颜色渐变实现中心的小圆\n*/\n.gossip::before{\n    content:'';\n    display:block;\n    height:50%;\n    width:50%;\n    margin-left:50%;\n    transform:translate(-50%);\n    border-radius:50%;\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%, \n    rgba(0,0,0,1) 20%, \n    rgba(255,255,255,1) 20%, \n    rgba(255,255,255,1) 100%);\n}\n\n.gossip::after {\n    content:'';\n    display:block;\n    height:50%;\n    width:50%;\n    margin-left:50%;\n    transform:translate(-50%);\n    border-radius:50%;\n    background: radial-gradient(circle, \n        rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%, \n        rgba(0,0,0,1) 20%, rgba(0,0,0,1) 100%);\n}\n\n/*\n八卦图制作好啦！感谢观看！\n*/\n",e=0,o="",i=a.length,t=function t(){e<i&&setTimeout(function(){"\n"===a[e]?o+="<br>":" "===a[e]?o+="&nbsp;":o+=a[e],n.innerHTML=o,window.scrollTo(0,9999),n.scrollTo(0,9999),r.innerHTML=a.substring(0,e),e+=1,t()},35)};t();
},{}]},{},["epB2"], null)
//# sourceMappingURL=/main.041f5a79.js.map