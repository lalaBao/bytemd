(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1051:function(e,o,t){!function(e){function o(e){e.state.placeholder&&(e.state.placeholder.parentNode.removeChild(e.state.placeholder),e.state.placeholder=null)}function t(e){o(e);var t=e.state.placeholder=document.createElement("pre");t.style.cssText="height: 0; overflow: visible",t.style.direction=e.getOption("direction"),t.className="CodeMirror-placeholder CodeMirror-line-like";var n=e.getOption("placeholder");"string"==typeof n&&(n=document.createTextNode(n)),t.appendChild(n),e.display.lineSpace.insertBefore(t,e.display.lineSpace.firstChild)}function n(e){i(e)&&t(e)}function r(e){var n=e.getWrapperElement(),r=i(e);n.className=n.className.replace(" CodeMirror-empty","")+(r?" CodeMirror-empty":""),r?t(e):o(e)}function i(e){return 1===e.lineCount()&&""===e.getLine(0)}e.defineOption("placeholder","",(function(i,a,l){var c=l&&l!=e.Init;if(a&&!c)i.on("blur",n),i.on("change",r),i.on("swapDoc",r),e.on(i.getInputField(),"compositionupdate",i.state.placeholderCompose=function(){!function(e){setTimeout((function(){var n=!1,r=e.getInputField();"TEXTAREA"==r.nodeName?n=!r.value:1==e.lineCount()&&(n=!/[^\u200b]/.test(r.querySelector(".CodeMirror-line").textContent)),n?t(e):o(e)}),20)}(i)}),r(i);else if(!a&&c){i.off("blur",n),i.off("change",r),i.off("swapDoc",r),e.off(i.getInputField(),"compositionupdate",i.state.placeholderCompose),o(i);var p=i.getWrapperElement();p.className=p.className.replace(" CodeMirror-empty","")}a&&!i.hasFocus()&&n(i)}))}(t(416))}}]);