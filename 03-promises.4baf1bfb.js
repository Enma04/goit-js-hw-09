!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o),o("6JpON");var r=document.querySelector('input[name="delay"]'),u=document.querySelector('input[name="step"]'),i=document.querySelector('input[name="amount"]'),c=document.querySelector("button"),l=[],a=function(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t("✅ Fulfilled promise ".concat(e," in ").concat(n," ms")):o("❌ Rejected promise ".concat(e," in ").concat(n," ms"))}),n)}))};c.addEventListener("click",(function(e){e.preventDefault();for(var n=parseInt(r.value),t=parseInt(u.value),o=parseInt(i.value),c=t+n,d=1;d<=o;d+=1){var f=a(d,c);l.push(f),c+=t}Promise.all(l).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}))}();
//# sourceMappingURL=03-promises.4baf1bfb.js.map
