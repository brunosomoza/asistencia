!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@fullcalendar/core")):"function"==typeof define&&define.amd?define(["exports","@fullcalendar/core"],t):t((e=e||self).FullCalendarDayGrid={},e.FullCalendar)}(this,function(e,D){"use strict";var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function t(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var o,c=function(){return(c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},r=(t(i,o=D.DateProfileGenerator),i.prototype.buildRenderRange=function(e,t,r){var n,i=this.dateEnv,e=o.prototype.buildRenderRange.call(this,e,t,r),r=e.start,e=e.end;return/^(year|month)$/.test(t)&&(r=i.startOfWeek(r),(n=i.startOfWeek(e)).valueOf()!==e.valueOf()&&(e=D.addWeeks(n,1))),this.options.monthMode&&this.options.fixedWeekCount&&(n=Math.ceil(D.diffWeeks(r,e)),e=D.addWeeks(e,6-n)),{start:r,end:e}},i);function i(){return null!==o&&o.apply(this,arguments)||this}var d=(s.prototype.show=function(){this.isHidden&&(this.el||this.render(),this.el.style.display="",this.position(),this.isHidden=!1,this.trigger("show"))},s.prototype.hide=function(){this.isHidden||(this.el.style.display="none",this.isHidden=!0,this.trigger("hide"))},s.prototype.render=function(){var t=this,e=this.options,r=this.el=D.createElement("div",{className:"fc-popover "+(e.className||""),style:{top:"0",left:"0"}});"function"==typeof e.content&&e.content(r),e.parentEl.appendChild(r),D.listenBySelector(r,"click",".fc-close",function(e){t.hide()}),e.autoHide&&document.addEventListener("mousedown",this.documentMousedown)},s.prototype.destroy=function(){this.hide(),this.el&&(D.removeElement(this.el),this.el=null),document.removeEventListener("mousedown",this.documentMousedown)},s.prototype.position=function(){var e=this.options,t=this.el,r=t.getBoundingClientRect(),n=D.computeRect(t.offsetParent),i=D.computeClippingRect(e.parentEl),o=e.top||0,e=void 0!==e.left?e.left:void 0!==e.right?e.right-r.width:0;o=Math.min(o,i.bottom-r.height-this.margin),o=Math.max(o,i.top+this.margin),e=Math.min(e,i.right-r.width-this.margin),e=Math.max(e,i.left+this.margin),D.applyStyle(t,{top:o-n.top,left:e-n.left})},s.prototype.trigger=function(e){this.options[e]&&this.options[e].apply(this,Array.prototype.slice.call(arguments,1))},s);function s(e){var t=this;this.isHidden=!0,this.margin=10,this.documentMousedown=function(e){t.el&&!t.el.contains(e.target)&&t.hide()},this.options=e}var l,a=(t(h,l=D.FgEventRenderer),h.prototype.renderSegHtml=function(e,t){var r,n=this.context,i=n.view,o=n.options,s=e.eventRange,l=s.def,a=s.ui,d=l.allDay,c=i.computeEventDraggable(l,a),n=d&&e.isStart&&i.computeEventStartResizable(l,a),i=d&&e.isEnd&&i.computeEventEndResizable(l,a),c=this.getSegClasses(e,c,n||i,t),t=D.cssToStr(this.getSkinCss(a)),a="";return c.unshift("fc-day-grid-event","fc-h-event"),e.isStart&&(r=this.getTimeText(s))&&(a='<span class="fc-time">'+D.htmlEscape(r)+"</span>"),r='<span class="fc-title">'+(D.htmlEscape(l.title||"")||"&nbsp;")+"</span>",'<a class="'+c.join(" ")+'"'+(l.url?' href="'+D.htmlEscape(l.url)+'"':"")+(t?' style="'+t+'"':"")+'><div class="fc-content">'+("rtl"===o.dir?r+" "+a:a+" "+r)+"</div>"+(n?'<div class="fc-resizer fc-start-resizer"></div>':"")+(i?'<div class="fc-resizer fc-end-resizer"></div>':"")+"</a>"},h.prototype.computeEventTimeFormat=function(){return{hour:"numeric",minute:"2-digit",omitZeroMinute:!0,meridiem:"narrow"}},h.prototype.computeDisplayEventEnd=function(){return!1},h);function h(){return null!==l&&l.apply(this,arguments)||this}var p,u=(t(f,p=a),f.prototype.attachSegs=function(e,t){var r=this.rowStructs=this.renderSegRows(e);this.dayGrid.rowEls.forEach(function(e,t){e.querySelector(".fc-content-skeleton > table").appendChild(r[t].tbodyEl)}),t||this.dayGrid.removeSegPopover()},f.prototype.detachSegs=function(){for(var e,t=this.rowStructs||[];e=t.pop();)D.removeElement(e.tbodyEl);this.rowStructs=null},f.prototype.renderSegRows=function(e){for(var t=[],r=this.groupSegRows(e),n=0;n<r.length;n++)t.push(this.renderSegRow(n,r[n]));return t},f.prototype.renderSegRow=function(e,t){var r,n,i,o,s,l,a,d=this.dayGrid,c=d.colCnt,h=d.isRtl,p=this.buildSegLevels(t),u=Math.max(1,p.length),f=document.createElement("tbody"),g=[],m=[],y=[];function v(e){for(;i<e;)(a=(y[r-1]||[])[i])?a.rowSpan=(a.rowSpan||1)+1:(a=document.createElement("td"),o.appendChild(a)),m[r][i]=a,y[r][i]=a,i++}for(r=0;r<u;r++){if(n=p[r],i=0,o=document.createElement("tr"),g.push([]),m.push([]),y.push([]),n)for(s=0;s<n.length;s++){l=n[s];var b=h?c-1-l.lastCol:l.firstCol,w=h?c-1-l.firstCol:l.lastCol;for(v(b),a=D.createElement("td",{className:"fc-event-container"},l.el),b!==w?a.colSpan=w-b+1:y[r][i]=a;i<=w;)m[r][i]=a,g[r][i]=l,i++;o.appendChild(a)}v(c);var S=d.renderProps.renderIntroHtml();S&&(d.isRtl?D.appendToElement(o,S):D.prependToElement(o,S)),f.appendChild(o)}return{row:e,tbodyEl:f,cellMatrix:m,segMatrix:g,segLevels:p,segs:t}},f.prototype.buildSegLevels=function(e){var t,r,n,i=this.dayGrid,o=i.isRtl,s=i.colCnt,l=[];for(e=this.sortEventSegs(e),t=0;t<e.length;t++){for(r=e[t],n=0;n<l.length&&function(e,t){var r,n;for(r=0;r<t.length;r++)if((n=t[r]).firstCol<=e.lastCol&&n.lastCol>=e.firstCol)return!0;return!1}(r,l[n]);n++);r.level=n,r.leftCol=o?s-1-r.lastCol:r.firstCol,r.rightCol=o?s-1-r.firstCol:r.lastCol,(l[n]||(l[n]=[])).push(r)}for(n=0;n<l.length;n++)l[n].sort(g);return l},f.prototype.groupSegRows=function(e){for(var t=[],r=0;r<this.dayGrid.rowCnt;r++)t.push([]);for(r=0;r<e.length;r++)t[e[r].row].push(e[r]);return t},f.prototype.computeDisplayEventEnd=function(){return 1===this.dayGrid.colCnt},f);function f(e){var t=p.call(this,e.context)||this;return t.dayGrid=e,t}function g(e,t){return e.leftCol-t.leftCol}var m,y=(t(v,m=u),v.prototype.attachSegs=function(e,t){var i=t.sourceSeg,o=this.rowStructs=this.renderSegRows(e);this.dayGrid.rowEls.forEach(function(e,t){var r=D.htmlToElement('<div class="fc-mirror-skeleton"><table></table></div>'),n=i&&i.row===t?i.el:(n=e.querySelector(".fc-content-skeleton tbody"))||e.querySelector(".fc-content-skeleton table"),n=n.getBoundingClientRect().top-e.getBoundingClientRect().top;r.style.top=n+"px",r.querySelector("table").appendChild(o[t].tbodyEl),e.appendChild(r)})},v);function v(){return null!==m&&m.apply(this,arguments)||this}var b,w='<td style="pointer-events:none"></td>',S=(t(C,b=D.FillRenderer),C.prototype.renderSegs=function(e,t){"bgEvent"===e&&(t=t.filter(function(e){return e.eventRange.def.allDay})),b.prototype.renderSegs.call(this,e,t)},C.prototype.attachSegs=function(e,t){for(var r,n,i=[],o=0;o<t.length;o++)r=t[o],n=this.renderFillRow(e,r),this.dayGrid.rowEls[r.row].appendChild(n),i.push(n);return i},C.prototype.renderFillRow=function(e,t){var r=this.dayGrid,n=r.colCnt,i=r.isRtl,o=i?n-1-t.lastCol:t.firstCol,s=(i?n-1-t.firstCol:t.lastCol)+1,i="businessHours"===e?"bgevent":e.toLowerCase(),e=D.htmlToElement('<div class="fc-'+i+'-skeleton"><table><tr></tr></table></div>'),i=e.getElementsByTagName("tr")[0];0<o&&D.appendToElement(i,new Array(o+1).join(w)),t.el.colSpan=s-o,i.appendChild(t.el),s<n&&D.appendToElement(i,new Array(n-s+1).join(w));s=r.renderProps.renderIntroHtml();return s&&(r.isRtl?D.appendToElement(i,s):D.prependToElement(i,s)),e},C);function C(e){var t=b.call(this,e.context)||this;return t.fillSegTag="td",t.dayGrid=e,t}var E,R=(t(H,E=D.DateComponent),H.prototype.render=function(e){this.renderFrame(e.date),this.renderFgEvents(e.fgSegs),this.renderEventSelection(e.eventSelection),this.renderEventDrag(e.eventDragInstances),this.renderEventResize(e.eventResizeInstances)},H.prototype.destroy=function(){E.prototype.destroy.call(this),this.renderFrame.unrender(),this.calendar.unregisterInteractiveComponent(this)},H.prototype._renderFrame=function(e){var t=this.theme,e=this.dateEnv.format(e,D.createFormatter(this.opt("dayPopoverFormat")));this.el.innerHTML='<div class="fc-header '+t.getClass("popoverHeader")+'"><span class="fc-title">'+D.htmlEscape(e)+'</span><span class="fc-close '+t.getIconClass("close")+'"></span></div><div class="fc-body '+t.getClass("popoverContent")+'"><div class="fc-event-container"></div></div>',this.segContainerEl=this.el.querySelector(".fc-event-container")},H.prototype.queryHit=function(e,t,r,n){var i=this.props.date;if(e<r&&t<n)return{component:this,dateSpan:{allDay:!0,range:{start:i,end:D.addDays(i,1)}},dayEl:this.el,rect:{left:0,top:0,right:r,bottom:n},layer:1}},H);function H(e,t){var r=E.call(this,e,t)||this,n=r.eventRenderer=new k(r),t=r.renderFrame=D.memoizeRendering(r._renderFrame);return r.renderFgEvents=D.memoizeRendering(n.renderSegs.bind(n),n.unrender.bind(n),[t]),r.renderEventSelection=D.memoizeRendering(n.selectByInstanceId.bind(n),n.unselectByInstanceId.bind(n),[r.renderFgEvents]),r.renderEventDrag=D.memoizeRendering(n.hideByHash.bind(n),n.showByHash.bind(n),[t]),r.renderEventResize=D.memoizeRendering(n.hideByHash.bind(n),n.showByHash.bind(n),[t]),e.calendar.registerInteractiveComponent(r,{el:r.el,useEventCenter:!1}),r}var P,k=(t(G,P=a),G.prototype.attachSegs=function(e){for(var t=0,r=e;t<r.length;t++){var n=r[t];this.dayTile.segContainerEl.appendChild(n.el)}},G.prototype.detachSegs=function(e){for(var t=0,r=e;t<r.length;t++){var n=r[t];D.removeElement(n.el)}},G);function G(e){var t=P.call(this,e.context)||this;return t.dayTile=e,t}var T=(z.prototype.renderHtml=function(e){var t=[];e.renderIntroHtml&&t.push(e.renderIntroHtml());for(var r,n,i,o,s,l,a=0,d=e.cells;a<d.length;a++){var c=d[a];t.push((r=c.date,n=e.dateProfile,i=this.context,o=c.htmlAttrs,c=l=s=void 0,s=i.dateEnv,l=i.theme,c=D.rangeContainsMarker(n.activeRange,r),(i=D.getDayClasses(r,n,i)).unshift("fc-day",l.getClass("widgetContent")),'<td class="'+i.join(" ")+'"'+(c?' data-date="'+s.formatIso(r,{omitTime:!0})+'"':"")+(o?" "+o:"")+"></td>"))}return e.cells.length||t.push('<td class="fc-day '+this.context.theme.getClass("widgetContent")+'"></td>'),"rtl"===this.context.options.dir&&t.reverse(),"<tr>"+t.join("")+"</tr>"},z);function z(e){this.context=e}var I,N=D.createFormatter({day:"numeric"}),x=D.createFormatter({week:"numeric"}),L=(t(B,I=D.DateComponent),B.prototype.render=function(e){var t=e.cells;this.rowCnt=t.length,this.colCnt=t[0].length,this.renderCells(t,e.isRigid),this.renderBusinessHours(e.businessHourSegs),this.renderDateSelection(e.dateSelectionSegs),this.renderBgEvents(e.bgEventSegs),this.renderFgEvents(e.fgEventSegs),this.renderEventSelection(e.eventSelection),this.renderEventDrag(e.eventDrag),this.renderEventResize(e.eventResize),this.segPopoverTile&&this.updateSegPopoverTile()},B.prototype.destroy=function(){I.prototype.destroy.call(this),this.renderCells.unrender()},B.prototype.getCellRange=function(e,t){t=this.props.cells[e][t].date;return{start:t,end:D.addDays(t,1)}},B.prototype.updateSegPopoverTile=function(e,t){var r=this.props;this.segPopoverTile.receiveProps({date:e||this.segPopoverTile.props.date,fgSegs:t||this.segPopoverTile.props.fgSegs,eventSelection:r.eventSelection,eventDragInstances:r.eventDrag?r.eventDrag.affectedInstances:null,eventResizeInstances:r.eventResize?r.eventResize.affectedInstances:null})},B.prototype._renderCells=function(e,t){for(var r,n=this.view,i=this.dateEnv,o=this.rowCnt,s=this.colCnt,l="",a=0;a<o;a++)l+=this.renderDayRowHtml(a,t);for(this.el.innerHTML=l,this.rowEls=D.findElements(this.el,".fc-row"),this.cellEls=D.findElements(this.el,".fc-day, .fc-disabled-day"),this.isRtl&&this.cellEls.reverse(),this.rowPositions=new D.PositionCache(this.el,this.rowEls,!1,!0),this.colPositions=new D.PositionCache(this.el,this.cellEls.slice(0,s),!0,!1),a=0;a<o;a++)for(r=0;r<s;r++)this.publiclyTrigger("dayRender",[{date:i.toDate(e[a][r].date),el:this.getCellEl(a,r),view:n}]);this.isCellSizesDirty=!0},B.prototype._unrenderCells=function(){this.removeSegPopover()},B.prototype.renderDayRowHtml=function(e,t){var r=this.theme,n=["fc-row","fc-week",r.getClass("dayRow")];t&&n.push("fc-rigid");t=new T(this.context);return'<div class="'+n.join(" ")+'"><div class="fc-bg"><table class="'+r.getClass("tableGrid")+'">'+t.renderHtml({cells:this.props.cells[e],dateProfile:this.props.dateProfile,renderIntroHtml:this.renderProps.renderBgIntroHtml})+'</table></div><div class="fc-content-skeleton"><table>'+(this.getIsNumbersVisible()?"<thead>"+this.renderNumberTrHtml(e)+"</thead>":"")+"</table></div></div>"},B.prototype.getIsNumbersVisible=function(){return this.getIsDayNumbersVisible()||this.renderProps.cellWeekNumbersVisible||this.renderProps.colWeekNumbersVisible},B.prototype.getIsDayNumbersVisible=function(){return 1<this.rowCnt},B.prototype.renderNumberTrHtml=function(e){var t=this.renderProps.renderNumberIntroHtml(e,this);return"<tr>"+(this.isRtl?"":t)+this.renderNumberCellsHtml(e)+(this.isRtl?t:"")+"</tr>"},B.prototype.renderNumberCellsHtml=function(e){for(var t,r=[],n=0;n<this.colCnt;n++)t=this.props.cells[e][n].date,r.push(this.renderNumberCellHtml(t));return this.isRtl&&r.reverse(),r.join("")},B.prototype.renderNumberCellHtml=function(e){var t,r,n=this.view,i=this.dateEnv,o="",s=D.rangeContainsMarker(this.props.dateProfile.activeRange,e),l=this.getIsDayNumbersVisible()&&s;return l||this.renderProps.cellWeekNumbersVisible?((t=D.getDayClasses(e,this.props.dateProfile,this.context)).unshift("fc-day-top"),this.renderProps.cellWeekNumbersVisible&&(r=i.weekDow),o+='<td class="'+t.join(" ")+'"'+(s?' data-date="'+i.formatIso(e,{omitTime:!0})+'"':"")+">",this.renderProps.cellWeekNumbersVisible&&e.getUTCDay()===r&&(o+=D.buildGotoAnchorHtml(n,{date:e,type:"week"},{class:"fc-week-number"},i.format(e,x))),l&&(o+=D.buildGotoAnchorHtml(n,e,{class:"fc-day-number"},i.format(e,N))),o+="</td>"):"<td></td>"},B.prototype.updateSize=function(e){var t=this.fillRenderer,r=this.eventRenderer,n=this.mirrorRenderer;(e||this.isCellSizesDirty||this.view.calendar.isEventsUpdated)&&(this.buildPositionCaches(),this.isCellSizesDirty=!1),t.computeSizes(e),r.computeSizes(e),n.computeSizes(e),t.assignSizes(e),r.assignSizes(e),n.assignSizes(e)},B.prototype.buildPositionCaches=function(){this.buildColPositions(),this.buildRowPositions()},B.prototype.buildColPositions=function(){this.colPositions.build()},B.prototype.buildRowPositions=function(){this.rowPositions.build(),this.rowPositions.bottoms[this.rowCnt-1]+=this.bottomCoordPadding},B.prototype.positionToHit=function(e,t){var r=this.colPositions,n=this.rowPositions,e=r.leftToIndex(e),t=n.topToIndex(t);if(null!=t&&null!=e)return{row:t,col:e,dateSpan:{range:this.getCellRange(t,e),allDay:!0},dayEl:this.getCellEl(t,e),relativeRect:{left:r.lefts[e],right:r.rights[e],top:n.tops[t],bottom:n.bottoms[t]}}},B.prototype.getCellEl=function(e,t){return this.cellEls[e*this.colCnt+t]},B.prototype._renderEventDrag=function(e){e&&(this.eventRenderer.hideByHash(e.affectedInstances),this.fillRenderer.renderSegs("highlight",e.segs))},B.prototype._unrenderEventDrag=function(e){e&&(this.eventRenderer.showByHash(e.affectedInstances),this.fillRenderer.unrender("highlight"))},B.prototype._renderEventResize=function(e){e&&(this.eventRenderer.hideByHash(e.affectedInstances),this.fillRenderer.renderSegs("highlight",e.segs),this.mirrorRenderer.renderSegs(e.segs,{isResizing:!0,sourceSeg:e.sourceSeg}))},B.prototype._unrenderEventResize=function(e){e&&(this.eventRenderer.showByHash(e.affectedInstances),this.fillRenderer.unrender("highlight"),this.mirrorRenderer.unrender(e.segs,{isResizing:!0,sourceSeg:e.sourceSeg}))},B.prototype.removeSegPopover=function(){this.segPopover&&this.segPopover.hide()},B.prototype.limitRows=function(e){for(var t,r=this.eventRenderer.rowStructs||[],n=0;n<r.length;n++)this.unlimitRow(n),!1!==(t=!!e&&("number"==typeof e?e:this.computeRowLevelLimit(n)))&&this.limitRow(n,t)},B.prototype.computeRowLevelLimit=function(e){for(var t,r=this.rowEls[e].getBoundingClientRect().bottom,n=D.findChildren(this.eventRenderer.rowStructs[e].tbodyEl),i=0;i<n.length;i++)if((t=n[i]).classList.remove("fc-limited"),t.getBoundingClientRect().bottom>r)return i;return!1},B.prototype.limitRow=function(t,r){function e(e){for(;E<e;)(a=v.getCellSegs(t,E,r)).length&&(h=i[r-1][E],y=v.renderMoreLink(t,E,a),m=D.createElement("div",null,y),h.appendChild(m),C.push(m)),E++}var n,i,o,s,l,a,d,c,h,p,u,f,g,m,y,v=this,b=this.colCnt,w=this.isRtl,S=this.eventRenderer.rowStructs[t],C=[],E=0;if(r&&r<S.segLevels.length){for(n=S.segLevels[r-1],i=S.cellMatrix,(o=D.findChildren(S.tbodyEl).slice(r)).forEach(function(e){e.classList.add("fc-limited")}),s=0;s<n.length;s++){l=n[s];var R=w?b-1-l.lastCol:l.firstCol,H=w?b-1-l.firstCol:l.lastCol;for(e(R),c=[],d=0;E<=H;)a=this.getCellSegs(t,E,r),c.push(a),d+=a.length,E++;if(d){for(p=(h=i[r-1][R]).rowSpan||1,u=[],f=0;f<c.length;f++)g=D.createElement("td",{className:"fc-more-cell",rowSpan:p}),a=c[f],y=this.renderMoreLink(t,R+f,[l].concat(a)),m=D.createElement("div",null,y),g.appendChild(m),u.push(g),C.push(g);h.classList.add("fc-limited"),D.insertAfterElement(h,u),o.push(h)}}e(this.colCnt),S.moreEls=C,S.limitedEls=o}},B.prototype.unlimitRow=function(e){e=this.eventRenderer.rowStructs[e];e.moreEls&&(e.moreEls.forEach(D.removeElement),e.moreEls=null),e.limitedEls&&(e.limitedEls.forEach(function(e){e.classList.remove("fc-limited")}),e.limitedEls=null)},B.prototype.renderMoreLink=function(l,a,d){var c=this,h=this.view,p=this.dateEnv,e=D.createElement("a",{className:"fc-more"});return e.innerText=this.getMoreLinkText(d.length),e.addEventListener("click",function(e){var t=c.opt("eventLimitClick"),r=c.isRtl?c.colCnt-a-1:a,n=c.props.cells[l][r].date,i=e.currentTarget,o=c.getCellEl(l,a),s=c.getCellSegs(l,a),r=c.resliceDaySegs(s,n),s=c.resliceDaySegs(d,n);"function"==typeof t&&(t=c.publiclyTrigger("eventLimitClick",[{date:p.toDate(n),allDay:!0,dayEl:o,moreEl:i,segs:r,hiddenSegs:s,jsEvent:e,view:h}])),"popover"===t?c.showSegPopover(l,a,i,r):"string"==typeof t&&h.calendar.zoomTo(n,t)}),e},B.prototype.showSegPopover=function(t,e,r,n){var i=this,o=this.calendar,s=this.view,l=this.theme,a=this.isRtl?this.colCnt-e-1:e,e=r.parentNode,r=1===this.rowCnt?s.el:this.rowEls[t],r={className:"fc-more-popover "+l.getClass("popover"),parentEl:s.el,top:D.computeRect(r).top,autoHide:!0,content:function(e){i.segPopoverTile=new R(i.context,e),i.updateSegPopoverTile(i.props.cells[t][a].date,n)},hide:function(){i.segPopoverTile.destroy(),i.segPopoverTile=null,i.segPopover.destroy(),i.segPopover=null}};this.isRtl?r.right=D.computeRect(e).right+1:r.left=D.computeRect(e).left-1,this.segPopover=new d(r),this.segPopover.show(),o.releaseAfterSizingTriggers()},B.prototype.resliceDaySegs=function(e,t){for(var r={start:t,end:D.addDays(t,1)},n=[],i=0,o=e;i<o.length;i++){var s=o[i],l=s.eventRange,a=l.range,d=D.intersectRanges(a,r);d&&n.push(c({},s,{eventRange:{def:l.def,ui:c({},l.ui,{durationEditable:!1}),instance:l.instance,range:d},isStart:s.isStart&&d.start.valueOf()===a.start.valueOf(),isEnd:s.isEnd&&d.end.valueOf()===a.end.valueOf()}))}return n},B.prototype.getMoreLinkText=function(e){var t=this.opt("eventLimitText");return"function"==typeof t?t(e):"+"+e+" "+t},B.prototype.getCellSegs=function(e,t,r){for(var n,i=this.eventRenderer.rowStructs[e].segMatrix,o=r||0,s=[];o<i.length;)(n=i[o][t])&&s.push(n),o++;return s},B);function B(e,t,r){var n=I.call(this,e,t)||this;n.bottomCoordPadding=0,n.isCellSizesDirty=!1;var i=n.eventRenderer=new u(n),e=n.fillRenderer=new S(n);n.mirrorRenderer=new y(n);t=n.renderCells=D.memoizeRendering(n._renderCells,n._unrenderCells);return n.renderBusinessHours=D.memoizeRendering(e.renderSegs.bind(e,"businessHours"),e.unrender.bind(e,"businessHours"),[t]),n.renderDateSelection=D.memoizeRendering(e.renderSegs.bind(e,"highlight"),e.unrender.bind(e,"highlight"),[t]),n.renderBgEvents=D.memoizeRendering(e.renderSegs.bind(e,"bgEvent"),e.unrender.bind(e,"bgEvent"),[t]),n.renderFgEvents=D.memoizeRendering(i.renderSegs.bind(i),i.unrender.bind(i),[t]),n.renderEventSelection=D.memoizeRendering(i.selectByInstanceId.bind(i),i.unselectByInstanceId.bind(i),[n.renderFgEvents]),n.renderEventDrag=D.memoizeRendering(n._renderEventDrag,n._unrenderEventDrag,[t]),n.renderEventResize=D.memoizeRendering(n._renderEventResize,n._unrenderEventResize,[t]),n.renderProps=r,n}var M,W=D.createFormatter({week:"numeric"}),V=(t(_,M=D.View),_.prototype.destroy=function(){M.prototype.destroy.call(this),this.dayGrid.destroy(),this.scroller.destroy()},_.prototype.renderSkeletonHtml=function(){var e=this.theme;return'<table class="'+e.getClass("tableGrid")+'">'+(this.opt("columnHeader")?'<thead class="fc-head"><tr><td class="fc-head-container '+e.getClass("widgetHeader")+'">&nbsp;</td></tr></thead>':"")+'<tbody class="fc-body"><tr><td class="'+e.getClass("widgetContent")+'"></td></tr></tbody></table>'},_.prototype.weekNumberStyleAttr=function(){return null!=this.weekNumberWidth?'style="width:'+this.weekNumberWidth+'px"':""},_.prototype.hasRigidRows=function(){var e=this.opt("eventLimit");return e&&"number"!=typeof e},_.prototype.updateSize=function(e,t,r){M.prototype.updateSize.call(this,e,t,r),this.dayGrid.updateSize(e)},_.prototype.updateBaseSize=function(e,t,r){var n,i=this.dayGrid,o=this.opt("eventLimit"),s=this.header?this.header.el:null;i.rowEls?(this.colWeekNumbersVisible&&(this.weekNumberWidth=D.matchCellWidths(D.findElements(this.el,".fc-week-number"))),this.scroller.clear(),s&&D.uncompensateScroll(s),i.removeSegPopover(),o&&"number"==typeof o&&i.limitRows(o),n=this.computeScrollerHeight(t),this.setGridHeight(n,r),o&&"number"!=typeof o&&i.limitRows(o),r||(this.scroller.setHeight(n),((o=this.scroller.getScrollbarWidths()).left||o.right)&&(s&&D.compensateScroll(s,o),n=this.computeScrollerHeight(t),this.scroller.setHeight(n)),this.scroller.lockOverflow(o))):r||(n=this.computeScrollerHeight(t),this.scroller.setHeight(n))},_.prototype.computeScrollerHeight=function(e){return e-D.subtractInnerElHeight(this.el,this.scroller.el)},_.prototype.setGridHeight=function(e,t){this.opt("monthMode")?(t&&(e*=this.dayGrid.rowCnt/6),D.distributeHeight(this.dayGrid.rowEls,e,!t)):t?D.undistributeHeight(this.dayGrid.rowEls):D.distributeHeight(this.dayGrid.rowEls,e,!0)},_.prototype.computeDateScroll=function(e){return{top:0}},_.prototype.queryDateScroll=function(){return{top:this.scroller.getScrollTop()}},_.prototype.applyDateScroll=function(e){void 0!==e.top&&this.scroller.setScrollTop(e.top)},_);function _(e,t,r,n){var i=M.call(this,e,t,r,n)||this;i.renderHeadIntroHtml=function(){var e=i.theme;return i.colWeekNumbersVisible?'<th class="fc-week-number '+e.getClass("widgetHeader")+'" '+i.weekNumberStyleAttr()+"><span>"+D.htmlEscape(i.opt("weekLabel"))+"</span></th>":""},i.renderDayGridNumberIntroHtml=function(e,t){var r=i.dateEnv,e=t.props.cells[e][0].date;return i.colWeekNumbersVisible?'<td class="fc-week-number" '+i.weekNumberStyleAttr()+">"+D.buildGotoAnchorHtml(i,{date:e,type:"week",forceOff:1===t.colCnt},r.format(e,W))+"</td>":""},i.renderDayGridBgIntroHtml=function(){var e=i.theme;return i.colWeekNumbersVisible?'<td class="fc-week-number '+e.getClass("widgetContent")+'" '+i.weekNumberStyleAttr()+"></td>":""},i.renderDayGridIntroHtml=function(){return i.colWeekNumbersVisible?'<td class="fc-week-number" '+i.weekNumberStyleAttr()+"></td>":""},i.el.classList.add("fc-dayGrid-view"),i.el.innerHTML=i.renderSkeletonHtml(),i.scroller=new D.ScrollComponent("hidden","auto");r=i.scroller.el;i.el.querySelector(".fc-body > tr > td").appendChild(r),r.classList.add("fc-day-grid-container");var o,n=D.createElement("div",{className:"fc-day-grid"});return r.appendChild(n),i.opt("weekNumbers")?i.opt("weekNumbersWithinDays")?(o=!0,i.colWeekNumbersVisible=!1):(o=!1,i.colWeekNumbersVisible=!0):o=i.colWeekNumbersVisible=!1,i.dayGrid=new L(i.context,n,{renderNumberIntroHtml:i.renderDayGridNumberIntroHtml,renderBgIntroHtml:i.renderDayGridBgIntroHtml,renderIntroHtml:i.renderDayGridIntroHtml,colWeekNumbersVisible:i.colWeekNumbersVisible,cellWeekNumbersVisible:o}),i}V.prototype.dateProfileGeneratorClass=r;var F,O=(t(A,F=D.DateComponent),A.prototype.destroy=function(){F.prototype.destroy.call(this),this.calendar.unregisterInteractiveComponent(this)},A.prototype.render=function(e){var t=this.dayGrid,r=e.dateProfile,n=e.dayTable;t.receiveProps(c({},this.slicer.sliceProps(e,r,e.nextDayThreshold,t,n),{dateProfile:r,cells:n.cells,isRigid:e.isRigid}))},A.prototype.buildPositionCaches=function(){this.dayGrid.buildPositionCaches()},A.prototype.queryHit=function(e,t){t=this.dayGrid.positionToHit(e,t);if(t)return{component:this.dayGrid,dateSpan:t.dateSpan,dayEl:t.dayEl,rect:{left:t.relativeRect.left,right:t.relativeRect.right,top:t.relativeRect.top,bottom:t.relativeRect.bottom},layer:0}},A);function A(e,t){var r=F.call(this,e,t.el)||this;return r.slicer=new q,r.dayGrid=t,e.calendar.registerInteractiveComponent(r,{el:r.dayGrid.el}),r}var j,q=(t(U,j=D.Slicer),U.prototype.sliceRange=function(e,t){return t.sliceRange(e)},U);function U(){return null!==j&&j.apply(this,arguments)||this}var Z,a=(t($,Z=V),$.prototype.destroy=function(){Z.prototype.destroy.call(this),this.header&&this.header.destroy(),this.simpleDayGrid.destroy()},$.prototype.render=function(e){Z.prototype.render.call(this,e);var t=this.props.dateProfile,r=this.dayTable=this.buildDayTable(t,this.dateProfileGenerator);this.header&&this.header.receiveProps({dateProfile:t,dates:r.headerDates,datesRepDistinctDays:1===r.rowCnt,renderIntroHtml:this.renderHeadIntroHtml}),this.simpleDayGrid.receiveProps({dateProfile:t,dayTable:r,businessHours:e.businessHours,dateSelection:e.dateSelection,eventStore:e.eventStore,eventUiBases:e.eventUiBases,eventSelection:e.eventSelection,eventDrag:e.eventDrag,eventResize:e.eventResize,isRigid:this.hasRigidRows(),nextDayThreshold:this.nextDayThreshold})},$);function $(e,t,r,n){n=Z.call(this,e,t,r,n)||this;return n.buildDayTable=D.memoize(J),n.opt("columnHeader")&&(n.header=new D.DayHeader(n.context,n.el.querySelector(".fc-head-container"))),n.simpleDayGrid=new O(n.context,n.dayGrid),n}function J(e,t){t=new D.DaySeries(e.renderRange,t);return new D.DayTable(t,/year|month|week/.test(e.currentRangeUnit))}r=D.createPlugin({defaultView:"dayGridMonth",views:{dayGrid:a,dayGridDay:{type:"dayGrid",duration:{days:1}},dayGridWeek:{type:"dayGrid",duration:{weeks:1}},dayGridMonth:{type:"dayGrid",duration:{months:1},monthMode:!0,fixedWeekCount:!0}}});e.AbstractDayGridView=V,e.DayBgRow=T,e.DayGrid=L,e.DayGridSlicer=q,e.DayGridView=a,e.SimpleDayGrid=O,e.buildBasicDayTable=J,e.default=r,Object.defineProperty(e,"__esModule",{value:!0})});