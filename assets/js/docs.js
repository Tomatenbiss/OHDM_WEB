var Hogan={};!function(t){function n(t,n,e){var s;return n&&"object"==typeof n&&(void 0!==n[t]?s=n[t]:e&&n.get&&"function"==typeof n.get&&(s=n.get(t))),s}function e(t,n,e,s,r,i){function a(){}function o(){}a.prototype=t,o.prototype=t.subs;var c,u=new a;u.subs=new o,u.subsText={},u.buf="",s=s||{},u.stackSubs=s,u.subsText=i;for(c in n)s[c]||(s[c]=n[c]);for(c in s)u.subs[c]=s[c];r=r||{},u.stackPartials=r;for(c in e)r[c]||(r[c]=e[c]);for(c in r)u.partials[c]=r[c];return u}function s(t){return String(null===t||void 0===t?"":t)}function r(t){return t=s(t),l.test(t)?t.replace(i,"&amp;").replace(a,"&lt;").replace(o,"&gt;").replace(c,"&#39;").replace(u,"&quot;"):t}t.Template=function(t,n,e,s){t=t||{},this.r=t.code||this.r,this.c=e,this.options=s||{},this.text=n||"",this.partials=t.partials||{},this.subs=t.subs||{},this.buf=""},t.Template.prototype={r:function(){return""},v:r,t:s,render:function(t,n,e){return this.ri([t],n||{},e)},ri:function(t,n,e){return this.r(t,n,e)},ep:function(t,n){var s=this.partials[t],r=n[s.name];if(s.instance&&s.base==r)return s.instance;if("string"==typeof r){if(!this.c)throw new Error("No compiler available.");r=this.c.compile(r,this.options)}if(!r)return null;if(this.partials[t].base=r,s.subs){n.stackText||(n.stackText={});for(key in s.subs)n.stackText[key]||(n.stackText[key]=void 0!==this.activeSub&&n.stackText[this.activeSub]?n.stackText[this.activeSub]:this.text);r=e(r,s.subs,s.partials,this.stackSubs,this.stackPartials,n.stackText)}return this.partials[t].instance=r,r},rp:function(t,n,e,s){var r=this.ep(t,e);return r?r.ri(n,e,s):""},rs:function(t,n,e){var s=t[t.length-1];if(!p(s))return e(t,n,this),void 0;for(var r=0;r<s.length;r++)t.push(s[r]),e(t,n,this),t.pop()},s:function(t,n,e,s,r,i,a){var o;return p(t)&&0===t.length?!1:("function"==typeof t&&(t=this.ms(t,n,e,s,r,i,a)),o=!!t,!s&&o&&n&&n.push("object"==typeof t?t:n[n.length-1]),o)},d:function(t,e,s,r){var i,a=t.split("."),o=this.f(a[0],e,s,r),c=this.options.modelGet,u=null;if("."===t&&p(e[e.length-2]))o=e[e.length-1];else for(var l=1;l<a.length;l++)i=n(a[l],o,c),void 0!==i?(u=o,o=i):o="";return r&&!o?!1:(r||"function"!=typeof o||(e.push(u),o=this.mv(o,e,s),e.pop()),o)},f:function(t,e,s,r){for(var i=!1,a=null,o=!1,c=this.options.modelGet,u=e.length-1;u>=0;u--)if(a=e[u],i=n(t,a,c),void 0!==i){o=!0;break}return o?(r||"function"!=typeof i||(i=this.mv(i,e,s)),i):r?!1:""},ls:function(t,n,e,r,i){var a=this.options.delimiters;return this.options.delimiters=i,this.b(this.ct(s(t.call(n,r)),n,e)),this.options.delimiters=a,!1},ct:function(t,n,e){if(this.options.disableLambda)throw new Error("Lambda features disabled.");return this.c.compile(t,this.options).render(n,e)},b:function(t){this.buf+=t},fl:function(){var t=this.buf;return this.buf="",t},ms:function(t,n,e,s,r,i,a){var o,c=n[n.length-1],u=t.call(c);return"function"==typeof u?s?!0:(o=this.activeSub&&this.subsText&&this.subsText[this.activeSub]?this.subsText[this.activeSub]:this.text,this.ls(u,c,e,o.substring(r,i),a)):u},mv:function(t,n,e){var r=n[n.length-1],i=t.call(r);return"function"==typeof i?this.ct(s(i.call(r)),r,e):i},sub:function(t,n,e,s){var r=this.subs[t];r&&(this.activeSub=t,r(n,e,this,s),this.activeSub=!1)}};var i=/&/g,a=/</g,o=/>/g,c=/\'/g,u=/\"/g,l=/[&<>\"\']/,p=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}}("undefined"!=typeof exports?exports:Hogan),function(t){function n(t){"}"===t.n.substr(t.n.length-1)&&(t.n=t.n.substring(0,t.n.length-1))}function e(t){return t.trim?t.trim():t.replace(/^\s*|\s*$/g,"")}function s(t,n,e){if(n.charAt(e)!=t.charAt(0))return!1;for(var s=1,r=t.length;r>s;s++)if(n.charAt(e+s)!=t.charAt(s))return!1;return!0}function r(n,e,s,o){var c=[],u=null,l=null,p=null;for(l=s[s.length-1];n.length>0;){if(p=n.shift(),l&&"<"==l.tag&&!(p.tag in k))throw new Error("Illegal content in < super tag.");if(t.tags[p.tag]<=t.tags.$||i(p,o))s.push(p),p.nodes=r(n,p.tag,s,o);else{if("/"==p.tag){if(0===s.length)throw new Error("Closing tag without opener: /"+p.n);if(u=s.pop(),p.n!=u.n&&!a(p.n,u.n,o))throw new Error("Nesting error: "+u.n+" vs. "+p.n);return u.end=p.i,c}"\n"==p.tag&&(p.last=0==n.length||"\n"==n[0].tag)}c.push(p)}if(s.length>0)throw new Error("missing closing tag: "+s.pop().n);return c}function i(t,n){for(var e=0,s=n.length;s>e;e++)if(n[e].o==t.n)return t.tag="#",!0}function a(t,n,e){for(var s=0,r=e.length;r>s;s++)if(e[s].c==t&&e[s].o==n)return!0}function o(t){var n=[];for(var e in t)n.push('"'+u(e)+'": function(c,p,t,i) {'+t[e]+"}");return"{ "+n.join(",")+" }"}function c(t){var n=[];for(var e in t.partials)n.push('"'+u(e)+'":{name:"'+u(t.partials[e].name)+'", '+c(t.partials[e])+"}");return"partials: {"+n.join(",")+"}, subs: "+o(t.subs)}function u(t){return t.replace(m,"\\\\").replace(g,'\\"').replace(d,"\\n").replace(v,"\\r").replace(w,"\\u2028").replace(y,"\\u2029")}function l(t){return~t.indexOf(".")?"d":"f"}function p(t,n){var e="<"+(n.prefix||""),s=e+t.n+x++;return n.partials[s]={name:t.n,partials:{}},n.code+='t.b(t.rp("'+u(s)+'",c,p,"'+(t.indent||"")+'"));',s}function f(t,n){n.code+="t.b(t.t(t."+l(t.n)+'("'+u(t.n)+'",c,p,0)));'}function b(t){return"t.b("+t+");"}var h=/\S/,g=/\"/g,d=/\n/g,v=/\r/g,m=/\\/g,w=/\u2028/,y=/\u2029/;t.tags={"#":1,"^":2,"<":3,$:4,"/":5,"!":6,">":7,"=":8,_v:9,"{":10,"&":11,_t:12},t.scan=function(r,i){function a(){m.length>0&&(w.push({tag:"_t",text:new String(m)}),m="")}function o(){for(var n=!0,e=x;e<w.length;e++)if(n=t.tags[w[e].tag]<t.tags._v||"_t"==w[e].tag&&null===w[e].text.match(h),!n)return!1;return n}function c(t,n){if(a(),t&&o())for(var e,s=x;s<w.length;s++)w[s].text&&((e=w[s+1])&&">"==e.tag&&(e.indent=w[s].text.toString()),w.splice(s,1));else n||w.push({tag:"\n"});y=!1,x=w.length}function u(t,n){var s="="+T,r=t.indexOf(s,n),i=e(t.substring(t.indexOf("=",n)+1,r)).split(" ");return S=i[0],T=i[i.length-1],r+s.length-1}var l=r.length,p=0,f=1,b=2,g=p,d=null,v=null,m="",w=[],y=!1,k=0,x=0,S="{{",T="}}";for(i&&(i=i.split(" "),S=i[0],T=i[1]),k=0;l>k;k++)g==p?s(S,r,k)?(--k,a(),g=f):"\n"==r.charAt(k)?c(y):m+=r.charAt(k):g==f?(k+=S.length-1,v=t.tags[r.charAt(k+1)],d=v?r.charAt(k+1):"_v","="==d?(k=u(r,k),g=p):(v&&k++,g=b),y=k):s(T,r,k)?(w.push({tag:d,n:e(m),otag:S,ctag:T,i:"/"==d?y-S.length:k+T.length}),m="",k+=T.length-1,g=p,"{"==d&&("}}"==T?k++:n(w[w.length-1]))):m+=r.charAt(k);return c(y,!0),w};var k={_t:!0,"\n":!0,$:!0,"/":!0};t.stringify=function(n){return"{code: function (c,p,i) { "+t.wrapMain(n.code)+" },"+c(n)+"}"};var x=0;t.generate=function(n,e,s){x=0;var r={code:"",subs:{},partials:{}};return t.walk(n,r),s.asString?this.stringify(r,e,s):this.makeTemplate(r,e,s)},t.wrapMain=function(t){return'var t=this;t.b(i=i||"");'+t+"return t.fl();"},t.template=t.Template,t.makeTemplate=function(t,n,e){var s=this.makePartials(t);return s.code=new Function("c","p","i",this.wrapMain(t.code)),new this.template(s,n,this,e)},t.makePartials=function(t){var n,e={subs:{},partials:t.partials,name:t.name};for(n in e.partials)e.partials[n]=this.makePartials(e.partials[n]);for(n in t.subs)e.subs[n]=new Function("c","p","t","i",t.subs[n]);return e},t.codegen={"#":function(n,e){e.code+="if(t.s(t."+l(n.n)+'("'+u(n.n)+'",c,p,1),c,p,0,'+n.i+","+n.end+',"'+n.otag+" "+n.ctag+'")){t.rs(c,p,function(c,p,t){',t.walk(n.nodes,e),e.code+="});c.pop();}"},"^":function(n,e){e.code+="if(!t.s(t."+l(n.n)+'("'+u(n.n)+'",c,p,1),c,p,1,0,0,"")){',t.walk(n.nodes,e),e.code+="};"},">":p,"<":function(n,e){var s={partials:{},code:"",subs:{},inPartial:!0};t.walk(n.nodes,s);var r=e.partials[p(n,e)];r.subs=s.subs,r.partials=s.partials},$:function(n,e){var s={subs:{},code:"",partials:e.partials,prefix:n.n};t.walk(n.nodes,s),e.subs[n.n]=s.code,e.inPartial||(e.code+='t.sub("'+u(n.n)+'",c,p,i);')},"\n":function(t,n){n.code+=b('"\\n"'+(t.last?"":" + i"))},_v:function(t,n){n.code+="t.b(t.v(t."+l(t.n)+'("'+u(t.n)+'",c,p,0)));'},_t:function(t,n){n.code+=b('"'+u(t.text)+'"')},"{":f,"&":f},t.walk=function(n,e){for(var s,r=0,i=n.length;i>r;r++)s=t.codegen[n[r].tag],s&&s(n[r],e);return e},t.parse=function(t,n,e){return e=e||{},r(t,"",[],e.sectionTags||[])},t.cache={},t.cacheKey=function(t,n){return[t,!!n.asString,!!n.disableLambda,n.delimiters,!!n.modelGet].join("||")},t.compile=function(n,e){e=e||{};var s=t.cacheKey(n,e),r=this.cache[s];if(r){var i=r.partials;for(var a in i)delete i[a].instance;return r}return r=this.generate(this.parse(this.scan(n,e.delimiters),n,e),n,e),this.cache[s]=r}}("undefined"!=typeof exports?exports:Hogan);var Mustache=function(t){function n(n,e,s,r){var i=this.f(n,e,s,0),a=e;return i&&(a=a.concat(i)),t.Template.prototype.rp.call(this,n,a,s,r)}var e=function(e,s,r){this.rp=n,t.Template.call(this,e,s,r)};e.prototype=t.Template.prototype;var s,r=function(){this.cache={},this.generate=function(t,n){return new e(new Function("c","p","i",t),n,s)}};return r.prototype=t,s=new r,{to_html:function(t,n,e,r){var i=s.compile(t),a=i.render(n,e);return r?(r(a),void 0):a}}}(Hogan);"document"in self&&("classList"in document.createElement("_")?!function(){"use strict";var t=document.createElement("_");if(t.classList.add("c1","c2"),!t.classList.contains("c2")){var n=function(t){var n=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var e,s=arguments.length;for(e=0;s>e;e++)t=arguments[e],n.call(this,t)}};n("add"),n("remove")}if(t.classList.toggle("c3",!1),t.classList.contains("c3")){var e=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,n){return 1 in arguments&&!this.contains(t)==!n?n:e.call(this,t)}}t=null}():!function(t){"use strict";if("Element"in t){var n="classList",e="prototype",s=t.Element[e],r=Object,i=String[e].trim||function(){return this.replace(/^\s+|\s+$/g,"")},a=Array[e].indexOf||function(t){for(var n=0,e=this.length;e>n;n++)if(n in this&&this[n]===t)return n;return-1},o=function(t,n){this.name=t,this.code=DOMException[t],this.message=n},c=function(t,n){if(""===n)throw new o("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(n))throw new o("INVALID_CHARACTER_ERR","String contains an invalid character");return a.call(t,n)},u=function(t){for(var n=i.call(t.getAttribute("class")||""),e=n?n.split(/\s+/):[],s=0,r=e.length;r>s;s++)this.push(e[s]);this._updateClassName=function(){t.setAttribute("class",this.toString())}},l=u[e]=[],p=function(){return new u(this)};if(o[e]=Error[e],l.item=function(t){return this[t]||null},l.contains=function(t){return t+="",-1!==c(this,t)},l.add=function(){var t,n=arguments,e=0,s=n.length,r=!1;do t=n[e]+"",-1===c(this,t)&&(this.push(t),r=!0);while(++e<s);r&&this._updateClassName()},l.remove=function(){var t,n,e=arguments,s=0,r=e.length,i=!1;do for(t=e[s]+"",n=c(this,t);-1!==n;)this.splice(n,1),i=!0,n=c(this,t);while(++s<r);i&&this._updateClassName()},l.toggle=function(t,n){t+="";var e=this.contains(t),s=e?n!==!0&&"remove":n!==!1&&"add";return s&&this[s](t),n===!0||n===!1?n:!e},l.toString=function(){return this.join(" ")},r.defineProperty){var f={get:p,enumerable:!0,configurable:!0};try{r.defineProperty(s,n,f)}catch(b){-2146823252===b.number&&(f.enumerable=!1,r.defineProperty(s,n,f))}}else r[e].__defineGetter__&&s.__defineGetter__(n,p)}}(self));var templates={};templates.controls=new Hogan.Template({code:function(t,n,e){var s=this;return s.b(e=e||""),s.b('<div class="player-controls">'),s.b("\n"+e),s.b('    <div class="player-progress">'),s.b("\n"+e),s.b('        <label for="seek{id}" class="sr-only">Seek</label>'),s.b("\n"+e),s.b('        <input id="seek{id}" class="player-progress-seek" type="range" min="0" max="100" step="0.5" value="0" data-player="seek">'),s.b("\n"+e),s.b('        <progress class="player-progress-played" max="100" value="0">'),s.b("\n"+e),s.b("            <span>0</span>% played"),s.b("\n"+e),s.b("        </progress>"),s.b("\n"+e),s.b('        <progress class="player-progress-buffer" max="100" value="0">'),s.b("\n"+e),s.b("            <span>0</span>% buffered"),s.b("\n"+e),s.b("        </progress>"),s.b("\n"+e),s.b("    </div>"),s.b("\n"+e),s.b('    <span class="player-controls-left">'),s.b("\n"+e),s.b('        <button type="button" data-player="restart">'),s.b("\n"+e),s.b('            <svg><use xlink:href="#icon-restart"></use></svg>'),s.b("\n"+e),s.b('            <span class="sr-only">Restart</span>'),s.b("\n"+e),s.b("        </button>"),s.b("\n"+e),s.b('        <button type="button" data-player="rewind">'),s.b("\n"+e),s.b('            <svg><use xlink:href="#icon-rewind"></use></svg>'),s.b("\n"+e),s.b('            <span class="sr-only">Rewind {seektime} secs</span>'),s.b("\n"+e),s.b("        </button>"),s.b("\n"+e),s.b('        <button type="button" data-player="play">'),s.b("\n"+e),s.b('            <svg><use xlink:href="#icon-play"></use></svg>'),s.b("\n"+e),s.b('            <span class="sr-only">Play</span>'),s.b("\n"+e),s.b("        </button>"),s.b("\n"+e),s.b('        <button type="button" data-player="pause">'),s.b("\n"+e),s.b('            <svg><use xlink:href="#icon-pause"></use></svg>'),s.b("\n"+e),s.b('            <span class="sr-only">Pause</span>'),s.b("\n"+e),s.b("        </button>"),s.b("\n"+e),s.b('        <button type="button" data-player="fast-forward">'),s.b("\n"+e),s.b('            <svg><use xlink:href="#icon-fast-forward"></use></svg>'),s.b("\n"+e),s.b('            <span class="sr-only">Forward {seektime} secs</span>'),s.b("\n"+e),s.b("        </button>"),s.b("\n"+e),s.b('        <span class="player-time">'),s.b("\n"+e),s.b('            <span class="sr-only">Current time</span>'),s.b("\n"+e),s.b('            <span class="player-current-time">00:00</span>'),s.b("\n"+e),s.b("        </span>"),s.b("\n"+e),s.b('        <span class="player-time">'),s.b("\n"+e),s.b('            <span class="sr-only">Duration</span>'),s.b("\n"+e),s.b('            <span class="player-duration">00:00</span>'),s.b("\n"+e),s.b("        </span>"),s.b("\n"+e),s.b("    </span>"),s.b("\n"+e),s.b('    <span class="player-controls-right">'),s.b("\n"+e),s.b('        <button type="button" data-player="mute">'),s.b("\n"+e),s.b('            <svg class="icon-muted"><use xlink:href="#icon-muted"></use></svg>'),s.b("\n"+e),s.b('            <svg><use xlink:href="#icon-volume"></use></svg>'),s.b("\n"+e),s.b('            <span class="sr-only">Toggle Mute</span>'),s.b("\n"+e),s.b("        </button>"),s.b("\n"+e),s.b('        <label for="volume{id}" class="sr-only">Volume</label>'),s.b("\n"+e),s.b('        <input id="volume{id}" class="player-volume" type="range" min="0" max="10" step="0.5" value="0" data-player="volume">'),s.b("\n"+e),s.b('        <button type="button" data-player="captions">'),s.b("\n"+e),s.b('            <svg class="icon-captions-on"><use xlink:href="#icon-captions-on"></use></svg>'),s.b("\n"+e),s.b('            <svg><use xlink:href="#icon-captions-off"></use></svg>'),s.b("\n"+e),s.b('            <span class="sr-only">Toggle Captions</span>'),s.b("\n"+e),s.b("        </button>"),s.b("\n"+e),s.b('        <button type="button" data-player="fullscreen">'),s.b("\n"+e),s.b('            <svg class="icon-exit-fullscreen"><use xlink:href="#icon-exit-fullscreen"></use></svg>'),s.b("\n"+e),s.b('            <svg><use xlink:href="#icon-enter-fullscreen"></use></svg>'),s.b("\n"+e),s.b('            <span class="sr-only">Toggle Fullscreen</span>'),s.b("\n"+e),s.b("        </button>"),s.b("\n"+e),s.b("    </span>"),s.b("\n"+e),s.b("</div>"),s.fl()},partials:{},subs:{}}),plyr.setup({debug:!0,volume:9,title:"Video demo",html:templates.controls.render({}),tooltips:!0,captions:{defaultActive:!0},onSetup:function(){if("media"in this){var t=this,n=t.media.tagName.toLowerCase(),e=document.querySelector("[data-toggle='fullscreen']");console.log("âœ“ Setup done for <"+n+">"),"video"===n&&e&&e.addEventListener("click",t.toggleFullscreen,!1)}}}),function(){function t(t){"a"==t.target.nodeName.toLowerCase()&&(t.preventDefault?t.preventDefault():t.returnValue=!1);var n=t.target,e=n.href,s=n.getAttribute("data-window-width")||600,r=n.getAttribute("data-window-height")||600,i=n.getAttribute("data-window-name")||"popup";if(window["window-"+i]&&!window["window-"+i].closed)window["window-"+i].focus();else{var a=void 0!==window.screenLeft?window.screenLeft:screen.left,o=void 0!==window.screenTop?window.screenTop:screen.top,c=screen.width/2-s/2+a,u=screen.height/2-r/2+o;window["window-"+i]=window.open(e,i,"top="+u+",left="+c+",width="+s+",height="+r),window["window-"+i].focus()}}function n(t,n){var e="jsonp_callback_"+Math.round(1e5*Math.random());window[e]=function(t){delete window[e],document.body.removeChild(s),n(t)};var s=document.createElement("script");s.setAttribute("src",t+(t.indexOf("?")>=0?"&":"?")+"callback="+e),document.body.appendChild(s)}function e(t,n){document.querySelector(t).innerHTML=n}function s(t){return"&#9733; "+t}function r(t){t.preventDefault();for(var n=t.target,e=document.querySelector(n.getAttribute("href")),s=c.length-1;s>=0;s--)c[s].classList.remove(u);for(var r=o.length-1;r>=0;r--)o[r].classList.remove(u);e.classList.add(u),t.target.classList.add(u)}document.querySelector(".js-popup").addEventListener("click",t);var i="sessionStorage"in window,a={github:".js-stargazers-count",twitter:".js-tweet-count"};i&&"github_stargazers"in window.sessionStorage?e(a.github,s(window.sessionStorage.github_stargazers)):n("https://api.github.com/repos/selz/plyr?access_token=a46ac653210ba6a6be44260c29c333470c3fbbf5",function(t){t&&"undefined"!=typeof t.data.stargazers_count&&(e(a.github,s(t.data.stargazers_count)),window.sessionStorage.github_stargazers=t.data.stargazers_count)}),i&&"tweets"in window.sessionStorage?e(a.twitter,window.sessionStorage.tweets):n("https://cdn.api.twitter.com/1/urls/count.json?url=plyr.io",function(t){t&&"undefined"!=typeof t.count&&(e(a.twitter,t.count),window.sessionStorage.tweets=t.count)});for(var o=document.querySelectorAll(".nav-panel a"),c=document.querySelectorAll(".panels > .panel"),u="active",l=o.length-1;l>=0;l--)o[l].addEventListener("click",r)}(),document.domain.indexOf("plyr.io")>-1&&(!function(t,n,e,s,r,i,a){t.GoogleAnalyticsObject=r,t[r]=t[r]||function(){(t[r].q=t[r].q||[]).push(arguments)},t[r].l=1*new Date,i=n.createElement(e),a=n.getElementsByTagName(e)[0],i.async=1,i.src=s,a.parentNode.insertBefore(i,a)});
