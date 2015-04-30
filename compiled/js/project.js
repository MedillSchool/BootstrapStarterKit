function whichTransitionEvent(){var t,e=document.createElement("fakeelement"),n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in n)if(void 0!==e.style[t])return n[t]}!function($){function t(t){return t.replace(/(:|\.)/g,"\\$1")}var e="1.4.13",n={},i={exclude:[],excludeWithin:[],offset:0,direction:"top",scrollElement:null,scrollTarget:null,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficent:2,preventDefault:!0},o=function(t){var e=[],n=!1,i=t.dir&&"left"==t.dir?"scrollLeft":"scrollTop";return this.each(function(){if(this!=document&&this!=window){var t=$(this);t[i]()>0?e.push(this):(t[i](1),n=t[i]()>0,n&&e.push(this),t[i](0))}}),e.length||this.each(function(t){"BODY"===this.nodeName&&(e=[this])}),"first"===t.el&&e.length>1&&(e=[e[0]]),e},r="ontouchend"in document;$.fn.extend({scrollable:function(t){var e=o.call(this,{dir:t});return this.pushStack(e)},firstScrollable:function(t){var e=o.call(this,{el:"first",dir:t});return this.pushStack(e)},smoothScroll:function(e,n){if(e=e||{},"options"===e)return n?this.each(function(){var t=$(this),e=$.extend(t.data("ssOpts")||{},n);$(this).data("ssOpts",e)}):this.first().data("ssOpts");var i=$.extend({},$.fn.smoothScroll.defaults,e),o=$.smoothScroll.filterPath(location.pathname);return this.unbind("click.smoothscroll").bind("click.smoothscroll",function(e){var n=this,r=$(this),a=$.extend({},i,r.data("ssOpts")||{}),s=i.exclude,l=a.excludeWithin,c=0,u=0,d=!0,f={},h=location.hostname===n.hostname||!n.hostname,g=a.scrollTarget||($.smoothScroll.filterPath(n.pathname)||o)===o,p=t(n.hash);if(a.scrollTarget||h&&g&&p){for(;d&&c<s.length;)r.is(t(s[c++]))&&(d=!1);for(;d&&u<l.length;)r.closest(l[u++]).length&&(d=!1)}else d=!1;d&&(a.preventDefault&&e.preventDefault(),$.extend(f,a,{scrollTarget:a.scrollTarget||p,link:n}),$.smoothScroll(f))}),this}}),$.smoothScroll=function(t,e){if("options"===t&&"object"==typeof e)return $.extend(n,e);var i,o,r,a,s=0,l="offset",c="scrollTop",u={},d={},f=[];"number"==typeof t?(i=$.extend({link:null},$.fn.smoothScroll.defaults,n),r=t):(i=$.extend({link:null},$.fn.smoothScroll.defaults,t||{},n),i.scrollElement&&(l="position","static"==i.scrollElement.css("position")&&i.scrollElement.css("position","relative"))),c="left"==i.direction?"scrollLeft":c,i.scrollElement?(o=i.scrollElement,/^(?:HTML|BODY)$/.test(o[0].nodeName)||(s=o[c]())):o=$("html, body").firstScrollable(i.direction),i.beforeScroll.call(o,i),r="number"==typeof t?t:e||$(i.scrollTarget)[l]()&&$(i.scrollTarget)[l]()[i.direction]||0,u[c]=r+s+i.offset,a=i.speed,"auto"===a&&(a=u[c]||o.scrollTop(),a/=i.autoCoefficent),d={duration:a,easing:i.easing,complete:function(){i.afterScroll.call(i.link,i)}},i.step&&(d.step=i.step),o.length?o.stop().animate(u,d):i.afterScroll.call(i.link,i)},$.smoothScroll.version=e,$.smoothScroll.filterPath=function(t){return t.replace(/^\//,"").replace(/(?:index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},$.fn.smoothScroll.defaults=i}(jQuery),jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(t,e,n,i,o){return jQuery.easing[jQuery.easing.def](t,e,n,i,o)},easeInQuad:function(t,e,n,i,o){return i*(e/=o)*e+n},easeOutQuad:function(t,e,n,i,o){return-i*(e/=o)*(e-2)+n},easeInOutQuad:function(t,e,n,i,o){return(e/=o/2)<1?i/2*e*e+n:-i/2*(--e*(e-2)-1)+n},easeInCubic:function(t,e,n,i,o){return i*(e/=o)*e*e+n},easeOutCubic:function(t,e,n,i,o){return i*((e=e/o-1)*e*e+1)+n},easeInOutCubic:function(t,e,n,i,o){return(e/=o/2)<1?i/2*e*e*e+n:i/2*((e-=2)*e*e+2)+n},easeInQuart:function(t,e,n,i,o){return i*(e/=o)*e*e*e+n},easeOutQuart:function(t,e,n,i,o){return-i*((e=e/o-1)*e*e*e-1)+n},easeInOutQuart:function(t,e,n,i,o){return(e/=o/2)<1?i/2*e*e*e*e+n:-i/2*((e-=2)*e*e*e-2)+n},easeInQuint:function(t,e,n,i,o){return i*(e/=o)*e*e*e*e+n},easeOutQuint:function(t,e,n,i,o){return i*((e=e/o-1)*e*e*e*e+1)+n},easeInOutQuint:function(t,e,n,i,o){return(e/=o/2)<1?i/2*e*e*e*e*e+n:i/2*((e-=2)*e*e*e*e+2)+n},easeInSine:function(t,e,n,i,o){return-i*Math.cos(e/o*(Math.PI/2))+i+n},easeOutSine:function(t,e,n,i,o){return i*Math.sin(e/o*(Math.PI/2))+n},easeInOutSine:function(t,e,n,i,o){return-i/2*(Math.cos(Math.PI*e/o)-1)+n},easeInExpo:function(t,e,n,i,o){return 0==e?n:i*Math.pow(2,10*(e/o-1))+n},easeOutExpo:function(t,e,n,i,o){return e==o?n+i:i*(-Math.pow(2,-10*e/o)+1)+n},easeInOutExpo:function(t,e,n,i,o){return 0==e?n:e==o?n+i:(e/=o/2)<1?i/2*Math.pow(2,10*(e-1))+n:i/2*(-Math.pow(2,-10*--e)+2)+n},easeInCirc:function(t,e,n,i,o){return-i*(Math.sqrt(1-(e/=o)*e)-1)+n},easeOutCirc:function(t,e,n,i,o){return i*Math.sqrt(1-(e=e/o-1)*e)+n},easeInOutCirc:function(t,e,n,i,o){return(e/=o/2)<1?-i/2*(Math.sqrt(1-e*e)-1)+n:i/2*(Math.sqrt(1-(e-=2)*e)+1)+n},easeInElastic:function(t,e,n,i,o){var r=1.70158,a=0,s=i;if(0==e)return n;if(1==(e/=o))return n+i;if(a||(a=.3*o),s<Math.abs(i)){s=i;var r=a/4}else var r=a/(2*Math.PI)*Math.asin(i/s);return-(s*Math.pow(2,10*(e-=1))*Math.sin(2*(e*o-r)*Math.PI/a))+n},easeOutElastic:function(t,e,n,i,o){var r=1.70158,a=0,s=i;if(0==e)return n;if(1==(e/=o))return n+i;if(a||(a=.3*o),s<Math.abs(i)){s=i;var r=a/4}else var r=a/(2*Math.PI)*Math.asin(i/s);return s*Math.pow(2,-10*e)*Math.sin(2*(e*o-r)*Math.PI/a)+i+n},easeInOutElastic:function(t,e,n,i,o){var r=1.70158,a=0,s=i;if(0==e)return n;if(2==(e/=o/2))return n+i;if(a||(a=.3*o*1.5),s<Math.abs(i)){s=i;var r=a/4}else var r=a/(2*Math.PI)*Math.asin(i/s);return 1>e?-.5*s*Math.pow(2,10*(e-=1))*Math.sin(2*(e*o-r)*Math.PI/a)+n:s*Math.pow(2,-10*(e-=1))*Math.sin(2*(e*o-r)*Math.PI/a)*.5+i+n},easeInBack:function(t,e,n,i,o,r){return void 0==r&&(r=1.70158),i*(e/=o)*e*((r+1)*e-r)+n},easeOutBack:function(t,e,n,i,o,r){return void 0==r&&(r=1.70158),i*((e=e/o-1)*e*((r+1)*e+r)+1)+n},easeInOutBack:function(t,e,n,i,o,r){return void 0==r&&(r=1.70158),(e/=o/2)<1?i/2*e*e*(((r*=1.525)+1)*e-r)+n:i/2*((e-=2)*e*(((r*=1.525)+1)*e+r)+2)+n},easeInBounce:function(t,e,n,i,o){return i-jQuery.easing.easeOutBounce(t,o-e,0,i,o)+n},easeOutBounce:function(t,e,n,i,o){return(e/=o)<1/2.75?7.5625*i*e*e+n:2/2.75>e?i*(7.5625*(e-=1.5/2.75)*e+.75)+n:2.5/2.75>e?i*(7.5625*(e-=2.25/2.75)*e+.9375)+n:i*(7.5625*(e-=2.625/2.75)*e+.984375)+n},easeInOutBounce:function(t,e,n,i,o){return o/2>e?.5*jQuery.easing.easeInBounce(t,2*e,0,i,o)+n:.5*jQuery.easing.easeOutBounce(t,2*e-o,0,i,o)+.5*i+n}}),function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1},e=[].slice;!function(t,e){return"function"==typeof define&&define.amd?define("waypoints",["jquery"],function($){return e($,t)}):e(t.jQuery,t)}(this,function($,n){var i,o,r,a,s,l,c,u,d,f,h,g,p,m,v,w;return i=$(n),u=t.call(n,"ontouchstart")>=0,a={horizontal:{},vertical:{}},s=1,c={},l="waypoints-context-id",h="resize.waypoints",g="scroll.waypoints",p=1,m="waypoints-waypoint-ids",v="waypoint",w="waypoints",o=function(){function t(t){var e=this;this.$element=t,this.element=t[0],this.didResize=!1,this.didScroll=!1,this.id="context"+s++,this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()},this.waypoints={horizontal:{},vertical:{}},t.data(l,this.id),c[this.id]=this,t.bind(g,function(){var t;return e.didScroll||u?void 0:(e.didScroll=!0,t=function(){return e.doScroll(),e.didScroll=!1},n.setTimeout(t,$[w].settings.scrollThrottle))}),t.bind(h,function(){var t;return e.didResize?void 0:(e.didResize=!0,t=function(){return $[w]("refresh"),e.didResize=!1},n.setTimeout(t,$[w].settings.resizeThrottle))})}return t.prototype.doScroll=function(){var t,e=this;return t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}},!u||t.vertical.oldScroll&&t.vertical.newScroll||$[w]("refresh"),$.each(t,function(t,n){var i,o,r;return r=[],o=n.newScroll>n.oldScroll,i=o?n.forward:n.backward,$.each(e.waypoints[t],function(t,e){var i,o;return n.oldScroll<(i=e.offset)&&i<=n.newScroll?r.push(e):n.newScroll<(o=e.offset)&&o<=n.oldScroll?r.push(e):void 0}),r.sort(function(t,e){return t.offset-e.offset}),o||r.reverse(),$.each(r,function(t,e){return e.options.continuous||t===r.length-1?e.trigger([i]):void 0})}),this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}},t.prototype.refresh=function(){var t,e,n,i=this;return n=$.isWindow(this.element),e=this.$element.offset(),this.doScroll(),t={horizontal:{contextOffset:n?0:e.left,contextScroll:n?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:n?0:e.top,contextScroll:n?0:this.oldScroll.y,contextDimension:n?$[w]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}},$.each(t,function(t,e){return $.each(i.waypoints[t],function(t,n){var i,o,r,a,s;return i=n.options.offset,r=n.offset,o=$.isWindow(n.element)?0:n.$element.offset()[e.offsetProp],$.isFunction(i)?i=i.apply(n.element):"string"==typeof i&&(i=parseFloat(i),n.options.offset.indexOf("%")>-1&&(i=Math.ceil(e.contextDimension*i/100))),n.offset=o-e.contextOffset+e.contextScroll-i,n.options.onlyOnScroll&&null!=r||!n.enabled?void 0:null!==r&&r<(a=e.oldScroll)&&a<=n.offset?n.trigger([e.backward]):null!==r&&r>(s=e.oldScroll)&&s>=n.offset?n.trigger([e.forward]):null===r&&e.oldScroll>=n.offset?n.trigger([e.forward]):void 0})})},t.prototype.checkEmpty=function(){return $.isEmptyObject(this.waypoints.horizontal)&&$.isEmptyObject(this.waypoints.vertical)?(this.$element.unbind([h,g].join(" ")),delete c[this.id]):void 0},t}(),r=function(){function t(t,e,n){var i,o;n=$.extend({},$.fn[v].defaults,n),"bottom-in-view"===n.offset&&(n.offset=function(){var t;return t=$[w]("viewportHeight"),$.isWindow(e.element)||(t=e.$element.height()),t-$(this).outerHeight()}),this.$element=t,this.element=t[0],this.axis=n.horizontal?"horizontal":"vertical",this.callback=n.handler,this.context=e,this.enabled=n.enabled,this.id="waypoints"+p++,this.offset=null,this.options=n,e.waypoints[this.axis][this.id]=this,a[this.axis][this.id]=this,i=null!=(o=t.data(m))?o:[],i.push(this.id),t.data(m,i)}return t.prototype.trigger=function(t){return this.enabled?(null!=this.callback&&this.callback.apply(this.element,t),this.options.triggerOnce?this.destroy():void 0):void 0},t.prototype.disable=function(){return this.enabled=!1},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0},t.prototype.destroy=function(){return delete a[this.axis][this.id],delete this.context.waypoints[this.axis][this.id],this.context.checkEmpty()},t.getWaypointsByElement=function(t){var e,n;return(n=$(t).data(m))?(e=$.extend({},a.horizontal,a.vertical),$.map(n,function(t){return e[t]})):[]},t}(),f={init:function(t,e){var n;return null==e&&(e={}),null==(n=e.handler)&&(e.handler=t),this.each(function(){var t,n,i,a;return t=$(this),i=null!=(a=e.context)?a:$.fn[v].defaults.context,$.isWindow(i)||(i=t.closest(i)),i=$(i),n=c[i.data(l)],n||(n=new o(i)),new r(t,n,e)}),$[w]("refresh"),this},disable:function(){return f._invoke(this,"disable")},enable:function(){return f._invoke(this,"enable")},destroy:function(){return f._invoke(this,"destroy")},prev:function(t,e){return f._traverse.call(this,t,e,function(t,e,n){return e>0?t.push(n[e-1]):void 0})},next:function(t,e){return f._traverse.call(this,t,e,function(t,e,n){return e<n.length-1?t.push(n[e+1]):void 0})},_traverse:function(t,e,i){var o,r;return null==t&&(t="vertical"),null==e&&(e=n),r=d.aggregate(e),o=[],this.each(function(){var e;return e=$.inArray(this,r[t]),i(o,e,r[t])}),this.pushStack(o)},_invoke:function(t,e){return t.each(function(){var t;return t=r.getWaypointsByElement(this),$.each(t,function(t,n){return n[e](),!0})}),this}},$.fn[v]=function(){var t,n;return n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[],f[n]?f[n].apply(this,t):$.isFunction(n)?f.init.apply(this,arguments):$.isPlainObject(n)?f.init.apply(this,[null,n]):$.error(n?"The "+n+" method does not exist in jQuery Waypoints.":"jQuery Waypoints needs a callback function or handler option.")},$.fn[v].defaults={context:n,continuous:!0,enabled:!0,horizontal:!1,offset:0,triggerOnce:!1},d={refresh:function(){return $.each(c,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return null!=(t=n.innerHeight)?t:i.height()},aggregate:function(t){var e,n,i;return e=a,t&&(e=null!=(i=c[$(t).data(l)])?i.waypoints:void 0),e?(n={horizontal:[],vertical:[]},$.each(n,function(t,i){return $.each(e[t],function(t,e){return i.push(e)}),i.sort(function(t,e){return t.offset-e.offset}),n[t]=$.map(i,function(t){return t.element}),n[t]=$.unique(n[t])}),n):[]},above:function(t){return null==t&&(t=n),d._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){return null==t&&(t=n),d._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){return null==t&&(t=n),d._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){return null==t&&(t=n),d._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return d._invoke("enable")},disable:function(){return d._invoke("disable")},destroy:function(){return d._invoke("destroy")},extendFn:function(t,e){return f[t]=e},_invoke:function(t){var e;return e=$.extend({},a.vertical,a.horizontal),$.each(e,function(e,n){return n[t](),!0})},_filter:function(t,e,n){var i,o;return(i=c[$(t).data(l)])?(o=[],$.each(i.waypoints[e],function(t,e){return n(i,e)?o.push(e):void 0}),o.sort(function(t,e){return t.offset-e.offset}),$.map(o,function(t){return t.element})):[]}},$[w]=function(){var t,n;return n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[],d[n]?d[n].apply(null,t):d.aggregate.call(null,n)},$[w].settings={resizeThrottle:100,scrollThrottle:30},i.load(function(){return $[w]("refresh")})})}.call(this),function(){!function(t,e){return"function"==typeof define&&define.amd?define(["jquery","waypoints"],e):e(t.jQuery)}(this,function($){var t,e;return t={wrapper:'<div class="sticky-wrapper" />',stuckClass:"stuck"},e=function(t,e){return t.wrap(e.wrapper),t.parent()},$.waypoints("extendFn","sticky",function(n){var i,o,r;return o=$.extend({},$.fn.waypoint.defaults,t,n),i=e(this,o),r=o.handler,o.handler=function(t){var e,n;return e=$(this).children(":first"),n="down"===t||"right"===t,e.toggleClass(o.stuckClass,n),i.height(n?e.outerHeight():""),null!=r?r.call(this,t):void 0},i.waypoint(o),this.data("stuckClass",o.stuckClass)}),$.waypoints("extendFn","unsticky",function(){return this.parent().waypoint("destroy"),this.unwrap(),this.removeClass(this.data("stuckClass"))})})}.call(this),function($,t){var e=function(t,e,n){var i;return function o(){function o(){n||t.apply(r,a),i=null}var r=this,a=arguments;i?clearTimeout(i):n&&t.apply(r,a),i=setTimeout(o,e||100)}};jQuery.fn[t]=function(n){return n?this.bind("resize",e(n)):this.trigger(t)}}(jQuery,"smartresize");var customTransitionEnd=whichTransitionEvent();!function($){var t=0;$.fn.fluidbox=function(e){var n=$.extend(!0,{viewportFill:.95,debounceResize:!0,stackIndex:1e3,stackIndexDelta:10,closeTrigger:[{selector:".fluidbox-overlay",event:"click"},{selector:"document",event:"keyup",keyCode:27}],immediateOpen:!1,loadingEle:!0},e),i=["keyup","keydown","keypress"];n.stackIndex<n.stackIndexDelta&&(n.stackIndexDelta=n.stackIndex),$fbOverlay=$("<div />",{"class":"fluidbox-overlay",css:{"z-index":n.stackIndex}});var o=this,r=$(window),a,s=function(t){$(t+".fluidbox-opened").trigger("click")},l=function(t,e){var i=t.find("img").first(),o=t.find(".fluidbox-ghost"),s=t.find(".fluidbox-loader"),l=t.find(".fluidbox-wrap"),c=t.data(),u=0,d=0,f={height:window.innerHeight,width:window.innerWidth};i.data().imgRatio=c.natWidth/c.natHeight,a>i.data().imgRatio?(u=c.natHeight<r.height()*n.viewportFill?c.natHeight:f.height*n.viewportFill,c.imgScale=u/i.height(),c.imgScaleY=c.imgScale,c.imgScaleX=c.natWidth*(i.height()*c.imgScaleY/c.natHeight)/i.width()):(d=c.natWidth<r.width()*n.viewportFill?c.natWidth:r.width()*n.viewportFill,c.imgScale=d/i.width(),c.imgScaleX=c.imgScale,c.imgScaleY=c.natHeight*(i.width()*c.imgScaleX/c.natWidth)/i.height());var h=r.scrollTop()-i.offset().top+.5*i.data("imgHeight")*(i.data("imgScale")-1)+.5*(f.height-i.data("imgHeight")*i.data("imgScale")),g=.5*i.data("imgWidth")*(i.data("imgScale")-1)+.5*(r.width()-i.data("imgWidth")*i.data("imgScale"))-i.offset().left,p=parseInt(1e3*c.imgScaleX)/1e3+","+parseInt(1e3*c.imgScaleY)/1e3;trace(r),trace(r.height()),trace(f.height),trace("offsetY"+h),trace(r.scrollTop()),trace(i.offset().top),trace(i.data("imgHeight")),trace(i.data("imgScale")),trace(r.height()),trace(i.data("imgHeight")),trace(i.data("imgScale")),o.add(s).css({transform:"translate("+parseInt(10*g)/10+"px,"+parseInt(10*h)/10+"px) scale("+p+")",top:i.offset().top-l.offset().top,left:i.offset().left-l.offset().left}),o.one(customTransitionEnd,function(){$.each(e,function(e,n){t.trigger(n)})})},c=function(t){function e(){c.imgWidth=i.width(),c.imgHeight=i.height(),c.imgRatio=i.width()/i.height(),o.add(s).css({width:i.width(),height:i.height(),top:i.offset().top-l.offset().top+parseInt(i.css("borderTopWidth"))+parseInt(i.css("paddingTop")),left:i.offset().left-l.offset().left+parseInt(i.css("borderLeftWidth"))+parseInt(i.css("paddingLeft"))}),a>c.imgRatio?c.imgScale=r.height()*n.viewportFill/i.height():c.imgScale=r.width()*n.viewportFill/i.width()}if(a=r.width()/r.height(),t.hasClass("fluidbox")){var i=t.find("img").first(),o=t.find(".fluidbox-ghost"),s=t.find(".fluidbox-loader"),l=t.find(".fluidbox-wrap"),c=i.data();e(),i.load(e)}},u=function(t){if($(this).hasClass("fluidbox")){var e=$(this),i=$(this).find("img").first(),o=$(this).find(".fluidbox-ghost"),r=$(this).find(".fluidbox-loader"),a=$(this).find(".fluidbox-wrap"),s=encodeURI(e.attr("href")),c={},u=function(){e.trigger("openstart"),e.append($fbOverlay).data("fluidbox-state",1).removeClass("fluidbox-closed").addClass("fluidbox-opened"),c.close&&window.clearTimeout(c.close),c.open=window.setTimeout(function(){$(".fluidbox-overlay").css({opacity:1})},10),$(".fluidbox-wrap").css({zIndex:n.stackIndex-n.stackIndexDelta-1}),a.css({"z-index":n.stackIndex+n.stackIndexDelta})},d=function(){e.trigger("closestart"),e.data("fluidbox-state",0).removeClass("fluidbox-opened fluidbox-loaded fluidbox-loading").addClass("fluidbox-closed"),c.open&&window.clearTimeout(c.open),c.close=window.setTimeout(function(){$(".fluidbox-overlay").remove(),a.css({"z-index":n.stackIndex-n.stackIndexDelta})},10),$(".fluidbox-overlay").css({opacity:0}),o.add(r).css({transform:"translate(0,0) scale(1,1)",opacity:0,top:i.offset().top-a.offset().top+parseInt(i.css("borderTopWidth"))+parseInt(i.css("paddingTop")),left:i.offset().left-a.offset().left+parseInt(i.css("borderLeftWidth"))+parseInt(i.css("paddingLeft"))}),o.one(customTransitionEnd,function(){e.trigger("closeend")}),i.css({opacity:1})};0!==$(this).data("fluidbox-state")&&$(this).data("fluidbox-state")?d():(e.addClass("fluidbox-loading"),i.css({opacity:0}),o.css({"background-image":"url("+i.attr("src")+")",opacity:1}),n.immediateOpen?(e.data("natWidth",i[0].naturalWidth).data("natHeight",i[0].naturalHeight),u(),l(e,["openend"]),$("<img />",{src:s}).load(function(){e.trigger("imageloaddone").trigger("delayedloaddone").removeClass("fluidbox-loading").addClass("fluidbox-loaded").data("natWidth",$(this)[0].naturalWidth).data("natHeight",$(this)[0].naturalHeight),o.css({"background-image":"url("+s+")"}),l(e,["delayedreposdone"])}).error(function(){e.trigger("imageloadfail"),d()})):$("<img />",{src:s}).load(function(){e.trigger("imageloaddone").removeClass("fluidbox-loading").addClass("fluidbox-loaded").data("natWidth",$(this)[0].naturalWidth).data("natHeight",$(this)[0].naturalHeight),o.css({"background-image":"url("+s+")"}),u(),l(e,["openend"])}).error(function(){e.trigger("imageloadfail"),d()})),t.preventDefault()}},d=function(t){t?c(t):o.each(function(){c($(this))});var e=$("a.fluidbox.fluidbox-opened");e.length>0&&l(e,["resizeend"])};return n.debounceResize?$(window).smartresize(function(){d()}):$(window).resize(function(){d()}),o.each(function(e){if($(this).is("a")&&1===$(this).children().length&&$(this).children().is("img")&&"none"!==$(this).css("display")&&"none"!==$(this).parents().css("display")){var o=$("<div />",{"class":"fluidbox-wrap",css:{"z-index":n.stackIndex-n.stackIndexDelta}}),a=$("<div />",{"class":"fluidbox-loader"});t+=1;var l=$(this);l.addClass("fluidbox fluidbox-closed").attr("id","fluidbox-"+t).wrapInner(o).find("img").first().css({opacity:1}).after('<div class="fluidbox-ghost" />').each(function(){var t=$(this);t.width()>0&&t.height()>0?(c(l),l.click(u)):t.load(function(){c(l),l.click(u),l.trigger("thumbloaddone")}).error(function(){l.trigger("thumbloadfail")})}),n.loadingEle&&l.find(".fluidbox-ghost").after(a),$(this).on("recompute",function(){d($(this)),$(this).trigger("recomputeend")});var f="#fluidbox-"+t;n.closeTrigger&&$.each(n.closeTrigger,function(t){var e=n.closeTrigger[t];"window"!=e.selector?"document"==e.selector&&(e.keyCode&&i.indexOf(e.event)>-1?$(document).on(e.event,function(t){t.keyCode==e.keyCode&&s(f)}):$(document).on(e.event,f,function(){s(f)})):r.on(e.event,function(){s(f)})})}}),o}}(jQuery),/** 
 * @preserve LaziestLoader - v0.5.0 - 2014-06-19
 * A responsive lazy loader for jQuery.
 * http://sjwilliams.github.io/laziestloader/
 * Copyright (c) 2014 Josh Williams; Licensed MIT
 */
function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function($){var t=function(e,n){function i(t){var n,i,o=t.data();return o.pattern&&o.widths&&$.isArray(o.widths)?(n=d?o.patternRetina:o.pattern,n=n||o.pattern,"object"==typeof o.widths[0]?(i=function(){for(var e=$.map(o.widths,function(t){return t.size}),n=h(t.width(),e),i=o.widths.length-1;i>=0;i--)if(o.widths[i].size===n)return o.widths[i].slug}(),n=n.replace(e.sizePattern,i)):n=n.replace(e.sizePattern,h(t.width(),o.widths))):(n=d?o.srcRetina:o.src,n=n||o.src),n}function o(){c.one("laziestloader",function(){var t=$(this),i;t.data().ratio&&s.call(this),e.setSourceMode?(i=e.getSource(t),i&&this.getAttribute("src")!==i&&(this.setAttribute("src",i),"function"==typeof n&&n.call(this))):"function"==typeof n&&n.call(this),t.addClass("ll-loaded").removeClass("ll-notloaded")})}function r(){c.off("laziestloader")}function a(){var t=c.not(u).filter(function(){var t=$(this),n=e.threshold;if(!t.is(":hidden")){var i=l.scrollTop(),o=i+l.height(),r=t.offset().top,a=r+t.height();return a>=i-n&&o+n>=r}});t.trigger("laziestloader"),u.add(t)}function s(){var t=$(this),e=t.data();e.ratio=e.ratio||e.heightMultiplier,e.ratio&&t.css({height:Math.round(t.width()*e.ratio)})}var l=$(window),c=this,u=$(),d=window.devicePixelRatio>1,f=!1;e=$.extend(!0,{threshold:0,sizePattern:/{{SIZE}}/gi,getSource:i,scrollThrottle:250,sizeOffsetPercent:0,setSourceMode:!0},e);var h=t.bestFit=function(t,n){var i=n[n.length-1],o=n.length,r=t*(e.sizeOffsetPercent/100);for(n.sort(function(t,e){return t-e});o--;)t-r<=n[o]&&(i=n[o]);return i};return c.addClass("ll-init ll-notloaded").each(s),o(),l.scroll(function(){f=!0}),setInterval(function(){f&&(f=!1,a())},e.scrollThrottle),l.resize(function(){u=$(),r(),o(),a()}),a(),this};$.fn.laziestloader=t}),$(document).ready(function(){function t(){$("img").laziestloader(),$("img").load(function(){this.style.opacity=1}),$("figure").each(function(t){if(trace($(this).scrollTop()),trace($(this).position()),$(this).find("a img").length);else{var e,n=createEl("a","enlarge"),i=$(this).find("img");e=$(this).find("img").attr("data-src"),trace($(this).find("img").position()),trace($(this).find("img").offset()),void 0==e&&(e=$(this).find("img").attr("src")),$(i).detach(),$(n).attr("href",e),$(n).append(i),$(this).prepend(n)}}),$(".enlarge").fluidbox({viewportFill:.85})}var e=500,n=!1,i=!1,o=100,r="../",a=!1;$("a").smoothScroll({offset:-290}),$("#story-cover").length?(i=!0,o=window.innerHeight,$("#story-cover").height(o),$(window).resize(function(){o=window.innerHeight,$("#story-cover").height(o)}),$(".story-cover-arrow").click(function(){$.smoothScroll({scrollElement:$("body"),scrollTarget:"article"})})):$("#navbar-product").addClass("no-cover"),t()}),trace=function(t){window.console?console.log(t):"undefined"!=typeof jsTrace&&jsTrace.send(t)},createEl=function(t,e){var n=document.createElement(t);return n.className=e,n},function(t,e,n,i,o,r,a){t.GoogleAnalyticsObject=o,t[o]=t[o]||function(){(t[o].q=t[o].q||[]).push(arguments)},t[o].l=1*new Date,r=e.createElement(n),a=e.getElementsByTagName(n)[0],r.async=1,r.src=i,a.parentNode.insertBefore(r,a)}(window,document,"script","http://www.google-analytics.com/analytics.js","ga"),ga("create","UA-537357-22","auto"),ga("send","pageview");