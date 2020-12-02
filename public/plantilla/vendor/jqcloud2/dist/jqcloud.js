!function(t,i){"function"==typeof define&&define.amd?define(["jquery"],i):"object"==typeof module&&module.exports?module.exports=i(require("jquery")):i(t.jQuery)}(this,function(l){"use strict";function r(t,i,e){this.$element=l(t),this.word_array=i||[],this.options=e,this.sizeGenerator=null,this.colorGenerator=null,this.data={placed_words:[],timeouts:{},namespace:null,step:null,angle:null,aspect_ratio:null,max_weight:null,min_weight:null,sizes:[],colors:[]},this.initialize()}r.DEFAULTS={width:100,height:100,center:{x:.5,y:.5},steps:10,delay:null,shape:"elliptic",classPattern:"w{n}",encodeURI:!0,removeOverflowing:!0,afterCloudRender:null,autoResize:!1,colors:null,fontSize:null,template:null},r.prototype={initialize:function(){if(this.options.width?this.$element.width(this.options.width):this.options.width=this.$element.width(),this.options.height?this.$element.height(this.options.height):this.options.height=this.$element.height(),this.options=l.extend(!0,{},r.DEFAULTS,this.options),null===this.options.delay&&(this.options.delay=50<this.word_array.length?10:0),1<this.options.center.x&&(this.options.center.x=this.options.center.x/this.options.width,this.options.center.y=this.options.center.y/this.options.height),"function"==typeof this.options.colors)this.colorGenerator=this.options.colors;else if(l.isArray(this.options.colors)){var t=this.options.colors.length;if(0<t){if(t<this.options.steps)for(var i=t;i<this.options.steps;i++)this.options.colors[i]=this.options.colors[t-1];this.colorGenerator=function(t){return this.options.colors[this.options.steps-t]}}}if("function"==typeof this.options.fontSize)this.sizeGenerator=this.options.fontSize;else if(l.isPlainObject(this.options.fontSize))this.sizeGenerator=function(t,i,e){var s=t*this.options.fontSize.from,t=t*this.options.fontSize.to;return Math.round(t+(s-t)/(this.options.steps-1)*(e-1))+"px"};else if(l.isArray(this.options.fontSize)){var e=this.options.fontSize.length;if(0<e){if(e<this.options.steps)for(var s=e;s<this.options.steps;s++)this.options.fontSize[s]=this.options.fontSize[e-1];this.sizeGenerator=function(t,i,e){return this.options.fontSize[this.options.steps-e]}}}var o,h,a,n;this.data.angle=6.28*Math.random(),this.data.step="rectangular"===this.options.shape?18:2,this.data.aspect_ratio=this.options.width/this.options.height,this.clearTimeouts(),this.data.namespace=(this.$element.attr("id")||Math.floor(1e6*Math.random()).toString(36))+"_word_",this.$element.addClass("jqcloud"),"static"===this.$element.css("position")&&this.$element.css("position","relative"),this.createTimeout(l.proxy(this.drawWordCloud,this),10),this.options.autoResize&&l(window).on("resize."+this.data.namespace,(o=this.resize,h=50,a=this,n={pid:null,last:0},function(){var t=(new Date).getTime()-n.last,i=arguments,e=this;function s(){return n.last=(new Date).getTime(),o.apply(a||e,Array.prototype.slice.call(i))}if(h<t)return s();clearTimeout(n.pid),n.pid=setTimeout(s,h-t)}))},createTimeout:function(t,i){var e=setTimeout(l.proxy(function(){delete this.data.timeouts[e],t()},this),i);this.data.timeouts[e]=!0},clearTimeouts:function(){l.each(this.data.timeouts,function(t){clearTimeout(t)}),this.data.timeouts={}},overlapping:function(t,i){return Math.abs(2*t.left+t.width-2*i.left-i.width)<t.width+i.width&&Math.abs(2*t.top+t.height-2*i.top-i.height)<t.height+i.height},hitTest:function(t){for(var i=0,e=this.data.placed_words.length;i<e;i++)if(this.overlapping(t,this.data.placed_words[i]))return!0;return!1},drawWordCloud:function(){var t,i;if(this.$element.children('[id^="'+this.data.namespace+'"]').remove(),0!==this.word_array.length){for(t=0,i=this.word_array.length;t<i;t++)this.word_array[t].weight=parseFloat(this.word_array[t].weight,10);if(this.word_array.sort(function(t,i){return i.weight-t.weight}),this.data.max_weight=this.word_array[0].weight,this.data.min_weight=this.word_array[this.word_array.length-1].weight,this.data.colors=[],this.colorGenerator)for(t=0;t<this.options.steps;t++)this.data.colors.push(this.colorGenerator(t+1));if(this.data.sizes=[],this.sizeGenerator)for(t=0;t<this.options.steps;t++)this.data.sizes.push(this.sizeGenerator(this.options.width,this.options.height,t+1));if(0<this.options.delay)this.drawOneWordDelayed();else{for(t=0,i=this.word_array.length;t<i;t++)this.drawOneWord(t,this.word_array[t]);"function"==typeof this.options.afterCloudRender&&this.options.afterCloudRender.call(this.$element)}}},drawOneWord:function(t,i){var e,s,o=this.data.namespace+t,h=this.data.angle,a=0,n=0,r=0,d=Math.floor(this.options.steps/2);for(i.attr=l.extend({},i.html,{id:o}),this.data.max_weight!=this.data.min_weight&&(d=Math.round((i.weight-this.data.min_weight)*(this.options.steps-1)/(this.data.max_weight-this.data.min_weight))+1),(o=l("<span>").attr(i.attr)).addClass("jqcloud-word"),this.options.classPattern&&o.addClass(this.options.classPattern.replace("{n}",d)),this.data.colors.length&&o.css("color",this.data.colors[d-1]),i.color&&o.css("color",i.color),this.data.sizes.length&&o.css("font-size",this.data.sizes[d-1]),this.options.template?o.html(this.options.template(i)):i.link?("string"==typeof i.link&&(i.link={href:i.link}),this.options.encodeURI&&(i.link.href=encodeURI(i.link.href).replace(/'/g,"%27")),o.append(l("<a>").attr(i.link).text(i.text))):o.text(i.text),i.handlers&&o.on(i.handlers),this.$element.append(o),(e={width:o.outerWidth(),height:o.outerHeight()}).left=this.options.center.x*this.options.width-e.width/2,e.top=this.options.center.y*this.options.height-e.height/2,(s=o[0].style).position="absolute",s.left=e.left+"px",s.top=e.top+"px";this.hitTest(e);){if("rectangular"===this.options.shape)switch(++n*this.data.step>(1+Math.floor(r/2))*this.data.step*(r%4%2==0?1:this.data.aspect_ratio)&&(n=0,r++),r%4){case 1:e.left+=this.data.step*this.data.aspect_ratio+2*Math.random();break;case 2:e.top-=this.data.step+2*Math.random();break;case 3:e.left-=this.data.step*this.data.aspect_ratio+2*Math.random();break;case 0:e.top+=this.data.step+2*Math.random()}else a+=this.data.step,h+=(t%2==0?1:-1)*this.data.step,e.left=this.options.center.x*this.options.width-e.width/2+a*Math.cos(h)*this.data.aspect_ratio,e.top=this.options.center.y*this.options.height+a*Math.sin(h)-e.height/2;s.left=e.left+"px",s.top=e.top+"px"}this.options.removeOverflowing&&(e.left<0||e.top<0||e.left+e.width>this.options.width||e.top+e.height>this.options.height)?o.remove():(this.data.placed_words.push(e),"function"==typeof i.afterWordRender&&i.afterWordRender.call(o))},drawOneWordDelayed:function(t){t=t||0,this.$element.is(":visible")?t<this.word_array.length?(this.drawOneWord(t,this.word_array[t]),this.createTimeout(l.proxy(function(){this.drawOneWordDelayed(t+1)},this),this.options.delay)):"function"==typeof this.options.afterCloudRender&&this.options.afterCloudRender.call(this.$element):this.createTimeout(l.proxy(function(){this.drawOneWordDelayed(t)},this),10)},destroy:function(){this.options.autoResize&&l(window).off("resize."+this.data.namespace),this.clearTimeouts(),this.$element.removeClass("jqcloud"),this.$element.removeData("jqcloud"),this.$element.children('[id^="'+this.data.namespace+'"]').remove()},update:function(t){this.word_array=t,this.data.placed_words=[],this.clearTimeouts(),this.drawWordCloud()},resize:function(){var t={width:this.$element.width(),height:this.$element.height()};t.width==this.options.width&&t.height==this.options.height||(this.options.width=t.width,this.options.height=t.height,this.data.aspect_ratio=this.options.width/this.options.height,this.update(this.word_array))}},l.fn.jQCloud=function(s,o){var h=arguments;return this.each(function(){var t,i=l(this),e=i.data("jqcloud");!e&&"destroy"===s||(e?"string"==typeof s&&e[s].apply(e,Array.prototype.slice.call(h,1)):(t="object"==typeof o?o:{},i.data("jqcloud",e=new r(this,s,t))))})},l.fn.jQCloud.defaults={set:function(t){l.extend(!0,r.DEFAULTS,t)},get:function(t){var i=r.DEFAULTS;return t&&(i=i[t]),l.extend(!0,{},i)}}});