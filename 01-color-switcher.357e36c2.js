const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");let a=null;e.addEventListener("click",(()=>{a=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),e.disabled=!0})),o.addEventListener("click",(()=>{clearInterval(a),console.log(`Interval with id ${a} has stopped!`),e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.357e36c2.js.map