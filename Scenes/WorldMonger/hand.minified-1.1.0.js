﻿(function(){if(!Array.prototype.indexOf){Array.prototype.indexOf=function(e){var t=Object(this);var n=t.length>>>0;if(n===0){return-1}var r=0;if(arguments.length>0){r=Number(arguments[1]);if(r!=r){r=0}else if(r!=0&&r!=Infinity&&r!=-Infinity){r=(r>0||-1)*Math.floor(Math.abs(r))}}if(r>=n){return-1}var i=r>=0?r:Math.max(n-Math.abs(r),0);for(;i<n;i++){if(i in t&&t[i]===e){return i}}return-1}}var e=["PointerDown","PointerUp","PointerMove","PointerOver","PointerOut","PointerCancel","PointerEnter","PointerLeave","pointerdown","pointerup","pointermove","pointerover","pointerout","pointercancel","pointerenter","pointerleave"];var t="touch";var n="pen";var r="mouse";var i={};var s=function(e,i){var s;if(document.createEvent){s=document.createEvent("MouseEvents");s.initMouseEvent(i,true,true,window,1,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,null)}else{s=document.createEventObject();s.screenX=e.screenX;s.screenY=e.screenY;s.clientX=e.clientX;s.clientY=e.clientY;s.ctrlKey=e.ctrlKey;s.altKey=e.altKey;s.shiftKey=e.shiftKey;s.metaKey=e.metaKey;s.button=e.button}if(s.offsetX===undefined){if(e.offsetX!==undefined){if(Object&&Object.defineProperty!==undefined){Object.defineProperty(s,"offsetX",{writable:true});Object.defineProperty(s,"offsetY",{writable:true})}s.offsetX=e.offsetX;s.offsetY=e.offsetY}else if(e.layerX!==undefined){s.offsetX=e.layerX-e.currentTarget.offsetLeft;s.offsetY=e.layerY-e.currentTarget.offsetTop}}if(e.isPrimary!==undefined)s.isPrimary=e.isPrimary;else s.isPrimary=true;if(e.pressure)s.pressure=e.pressure;else{var o=0;if(e.which!==undefined)o=e.which;else if(e.button!==undefined){o=e.button}s.pressure=o==0?0:.5}if(e.rotation)s.rotation=e.rotation;else s.rotation=0;if(e.hwTimestamp)s.hwTimestamp=e.hwTimestamp;else s.hwTimestamp=0;if(e.tiltX)s.tiltX=e.tiltX;else s.tiltX=0;if(e.tiltY)s.tiltY=e.tiltY;else s.tiltY=0;if(e.height)s.height=e.height;else s.height=0;if(e.width)s.width=e.width;else s.width=0;s.preventDefault=function(){if(e.preventDefault!==undefined)e.preventDefault()};if(s.stopPropagation!==undefined){var u=s.stopPropagation;s.stopPropagation=function(){if(e.stopPropagation!==undefined)e.stopPropagation();u.call(this)}}s.POINTER_TYPE_TOUCH=t;s.POINTER_TYPE_PEN=n;s.POINTER_TYPE_MOUSE=r;s.pointerId=e.pointerId;s.pointerType=e.pointerType;switch(s.pointerType){case 2:s.pointerType=s.POINTER_TYPE_TOUCH;break;case 3:s.pointerType=s.POINTER_TYPE_PEN;break;case 4:s.pointerType=s.POINTER_TYPE_MOUSE;break}if(e.currentTarget&&e.currentTarget.handjs_forcePreventDefault===true)s.preventDefault();if(e.target){e.target.dispatchEvent(s)}else{e.srcElement.fireEvent("on"+l(i),s)}};var o=function(e,t){e.pointerId=1;e.pointerType=r;s(e,t)};var u=function(e,n,r,i){var o=n.identifier+2;n.pointerId=o;n.pointerType=t;n.currentTarget=r;n.target=r;if(i.preventDefault!==undefined){n.preventDefault=function(){i.preventDefault()}}s(n,e)};var a=function(e,t,n,r){if(n.__handjsGlobalRegisteredEvents&&n.__handjsGlobalRegisteredEvents[e]){u(e,t,n,r)}};var f=function(e,t,n,r){if(e.preventManipulation)e.preventManipulation();for(var s=0;s<e.changedTouches.length;++s){var o=e.changedTouches[s];if(n){i[o.identifier]=o.target}if(r){a(t,o,i[o.identifier],e)}else{u(t,o,i[o.identifier],e)}}};var l=function(e){return e.toLowerCase().replace("pointer","mouse")};var c=function(t,n,r){var i;if(r==r.toLowerCase()){var s=e.indexOf(r)-e.length/2;i=n+e[s]}else{i=n+r}if(i===n+"PointerEnter"&&t["on"+n.toLowerCase()+"pointerenter"]===undefined){i=n+"PointerOver"}if(i===n+"PointerLeave"&&t["on"+n.toLowerCase()+"pointerleave"]===undefined){i=n+"PointerOut"}return i};var h=function(e,t,n,r){if(e.__handjsRegisteredEvents===undefined){e.__handjsRegisteredEvents=[]}if(r){if(e.__handjsRegisteredEvents[t]!==undefined){e.__handjsRegisteredEvents[t]++;return}e.__handjsRegisteredEvents[t]=1;e.addEventListener(t,n,false)}else{if(e.__handjsRegisteredEvents.indexOf(t)!==-1){e.__handjsRegisteredEvents[t]--;if(e.__handjsRegisteredEvents[t]!=0){return}}e.removeEventListener(t,n);e.__handjsRegisteredEvents[t]=0}};var p=function(e,t,n){if(e.onpointerdown!==undefined){return}if(e.onmspointerdown!==undefined){var r=c(e,"MS",t);h(e,r,function(e){s(e,t)},n);return}if(e.ontouchstart!==undefined){switch(t){case"pointermove":h(e,"touchmove",function(e){f(e,t)},n);break;case"pointercancel":h(e,"touchcancel",function(e){f(e,t)},n);break;case"pointerdown":case"pointerup":case"pointerout":case"pointerover":case"pointerleave":case"pointerenter":if(!e.__handjsGlobalRegisteredEvents){e.__handjsGlobalRegisteredEvents=[]}if(n){if(e.__handjsGlobalRegisteredEvents[t]!==undefined){e.__handjsGlobalRegisteredEvents[t]++;return}e.__handjsGlobalRegisteredEvents[t]=1}else{if(e.__handjsGlobalRegisteredEvents[t]!==undefined){e.__handjsGlobalRegisteredEvents[t]--;if(e.__handjsGlobalRegisteredEvents[t]<0){e.__handjsGlobalRegisteredEvents[t]=0}}}break}}switch(t){case"pointerdown":h(e,"mousedown",function(e){o(e,t)},n);break;case"pointermove":h(e,"mousemove",function(e){o(e,t)},n);break;case"pointerup":h(e,"mouseup",function(e){o(e,t)},n);break;case"pointerover":h(e,"mouseover",function(e){o(e,t)},n);break;case"pointerout":h(e,"mouseout",function(e){o(e,t)},n);break;case"pointerenter":if(e.onmouseenter===undefined){h(e,"mouseover",function(e){o(e,t)},n)}else{h(e,"mouseenter",function(e){o(e,t)},n)}break;case"pointerleave":if(e.onmouseleave===undefined){h(e,"mouseout",function(e){o(e,t)},n)}else{h(e,"mouseleave",function(e){o(e,t)},n)}break}};var d=function(t){var n=t.prototype?t.prototype.addEventListener:t.addEventListener;var r=function(t,r,i){if(e.indexOf(t)!=-1){p(this,t,true)}if(n===undefined){this.attachEvent("on"+l(t),r)}else{n.call(this,t,r,i)}};if(t.prototype){t.prototype.addEventListener=r}else{t.addEventListener=r}};var v=function(t){var n=t.prototype?t.prototype.removeEventListener:t.removeEventListener;var r=function(t,r,i){if(e.indexOf(t)!=-1){p(this,t,false)}if(n===undefined){this.detachEvent(l(t),r)}else{n.call(this,t,r,i)}};if(t.prototype){t.prototype.removeEventListener=r}else{t.removeEventListener=r}};d(document);d(HTMLBodyElement);d(HTMLDivElement);d(HTMLImageElement);d(HTMLSpanElement);d(HTMLUListElement);d(HTMLAnchorElement);d(HTMLLIElement);if(window.HTMLCanvasElement){d(HTMLCanvasElement)}if(window.SVGElement){d(SVGElement)}v(document);v(HTMLBodyElement);v(HTMLDivElement);v(HTMLImageElement);v(HTMLSpanElement);v(HTMLUListElement);v(HTMLAnchorElement);v(HTMLLIElement);if(window.HTMLCanvasElement){v(HTMLCanvasElement)}if(window.SVGElement){v(SVGElement)}if(window.ontouchstart!==undefined){window.addEventListener("touchstart",function(e){for(var t=0;t<e.changedTouches.length;++t){var n=e.changedTouches[t];i[n.identifier]=n.target;a("pointerenter",n,n.target,e);a("pointerover",n,n.target,e);a("pointerdown",n,n.target,e)}});window.addEventListener("touchend",function(e){for(var t=0;t<e.changedTouches.length;++t){var n=e.changedTouches[t];var r=i[n.identifier];a("pointerup",n,r,e);a("pointerout",n,r,e);a("pointerleave",n,r,e)}});window.addEventListener("touchmove",function(e){for(var t=0;t<e.changedTouches.length;++t){var n=e.changedTouches[t];var r=document.elementFromPoint(n.clientX,n.clientY);var s=i[n.identifier];if(s===r){continue}if(s){a("pointerout",n,s,e);if(!s.contains(r)){a("pointerleave",n,s,e)}}if(r){a("pointerover",n,r,e);if(!r.contains(s)){a("pointerenter",n,r,e)}}i[n.identifier]=r}})}if(navigator.pointerEnabled===undefined){navigator.pointerEnabled=true;if(navigator.msPointerEnabled){navigator.maxTouchPoints=navigator.msMaxTouchPoints}}if(document.styleSheets&&document.addEventListener){document.addEventListener("DOMContentLoaded",function(){var e=function(e){return e.replace(/^\s+|\s+$/,"")};var t=function(t){var n=new RegExp(".+?{.*?}","m");var r=new RegExp(".+?{","m");while(t!=""){var i=n.exec(t)[0];t=e(t.replace(i,""));var s=e(r.exec(i)[0].replace("{",""));if(i.replace(/\s/g,"").indexOf("touch-action:none")!=-1){var o=document.querySelectorAll(s);for(var u=0;u<o.length;u++){var a=o[u];if(a.style.msTouchAction!==undefined){a.style.msTouchAction="none"}else{a.handjs_forcePreventDefault=true}}}}};try{for(var n=0;n<document.styleSheets.length;n++){var r=document.styleSheets[n];if(r.href==undefined){continue}var i=new XMLHttpRequest;i.open("get",r.href,false);i.send();var s=i.responseText.replace(/(\n|\r)/g,"");t(s)}}catch(o){}var u=document.getElementsByTagName("style");for(var n=0;n<u.length;n++){var a=u[n];var f=e(a.innerHTML.replace(/(\n|\r)/g,""));t(f)}},false)}})()