!function(){var t=document.querySelector(".start"),e=document.querySelector(".stop"),r=null,n=document.querySelector("body");t.addEventListener("click",(function(){r=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),t.setAttribute("disabled",!0),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(r),e.setAttribute("disabled",!0),t.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.78a25f34.js.map
