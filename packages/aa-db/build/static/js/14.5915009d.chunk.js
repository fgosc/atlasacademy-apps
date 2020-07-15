(this["webpackJsonpaa-db"]=this["webpackJsonpaa-db"]||[]).push([[14],{115:function(e,t,n){"use strict";var a=n(10),r=n(11),c=n(18),i=n(17),u=n(0),s=n.n(u),o=new Map([[1,"./assets/star1.png"],[2,"./assets/star2.png"],[3,"./assets/star3.png"],[4,"./assets/star4.png"],[5,"./assets/star5.png"]]),l=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e;return s.a.createElement("span",null,o.has(this.props.rarity)?s.a.createElement("img",{alt:"".concat(this.props.rarity," star(s)"),src:o.get(this.props.rarity),style:{height:null!==(e=this.props.height)&&void 0!==e?e:18}}):null)}}]),n}(s.a.Component);t.a=l},126:function(e,t,n){"use strict";var a=n(10),r=n(11),c=n(18),i=n(17),u=n(0),s=n.n(u),o=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return s.a.createElement("img",{alt:"",src:this.props.location,style:this.props.height?{height:this.props.height}:void 0})}}]),n}(s.a.Component);t.a=o},174:function(e,t,n){},183:function(e,t,n){"use strict";n.r(t);var a=n(10),r=n(11),c=n(18),i=n(17),u=n(0),s=n.n(u),o=n(182),l=n(22),f=n(98),p=n(53),h=n(126),v=n(12),g=n(115),b=(n(174),function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={loading:!0,craftEssences:[],activeRarityFilters:[]},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;try{f.a.craftEssenceList(this.props.region).then((function(t){e.setState({loading:!1,craftEssences:t})}))}catch(t){this.setState({error:t})}}},{key:"craftEssences",value:function(){var e=this,t=this.state.craftEssences.slice().reverse();return this.state.activeRarityFilters.length>0&&(t=t.filter((function(t){return-1!==e.state.activeRarityFilters.indexOf(t.rarity)}))),t}},{key:"render",value:function(){var e=this;return this.state.error?s.a.createElement(p.a,{error:this.state.error}):this.state.loading?s.a.createElement(v.a,null):s.a.createElement("div",{id:"craft-essences"},s.a.createElement(o.a,{striped:!0,bordered:!0,hover:!0},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{style:{textAlign:"center",width:"1px"}},"#"),s.a.createElement("th",{style:{textAlign:"center",width:"1px"}},"Thumbnail"),s.a.createElement("th",null,"Name"),s.a.createElement("th",null,"Rarity"))),s.a.createElement("tbody",null,this.craftEssences().map((function(t,n){var a="/".concat(e.props.region,"/craft-essence/").concat(t.collectionNo);return s.a.createElement("tr",{key:n},s.a.createElement("td",{align:"center"},s.a.createElement(l.b,{to:a},t.collectionNo)),s.a.createElement("td",{align:"center"},s.a.createElement(l.b,{to:a},s.a.createElement(h.a,{type:t.type,rarity:t.rarity,location:t.face,height:50}))),s.a.createElement("td",null,s.a.createElement(l.b,{to:a},t.name)),s.a.createElement("td",null,s.a.createElement(g.a,{rarity:t.rarity})))})))))}}]),n}(s.a.Component));t.default=b},98:function(e,t,n){"use strict";var a=n(118),r=n(10),c=n(11),i=n(99),u=n.n(i),s=n(100),o=n(123),l=n.n(o),f=n(24),p=n(31),h=n(29),v=function(){function e(){Object(r.a)(this,e),this.cache=new Map,this.pending=new Map,this.pendingCatches=new Map}return Object(c.a)(e,[{key:"get",value:function(e,t,n){var a=this,r=this.cache.get(e);if(void 0!==r)return new Promise((function(e){e(r)}));var c=this.pending.get(e);return void 0!==c?new Promise((function(t,n){var r;c.push(t),(null!==(r=a.pendingCatches.get(e))&&void 0!==r?r:[]).push(n)})):(this.pending.set(e,[]),this.pendingCatches.set(e,[]),new Promise((function(r,c){t.call(null).then((function(t){var c;(null!==(c=a.pending.get(e))&&void 0!==c?c:[]).forEach((function(e){e.call(null,t)})),a.cache.set(e,t),a.pending.delete(e),a.pendingCatches.delete(e),null!==n&&window.setTimeout((function(){a.cache.delete(e)}),n),r(t)})).catch((function(t){var n;(null!==(n=a.pendingCatches.get(e))&&void 0!==n?n:[]).forEach((function(e){e.call(null,t)})),a.pending.delete(e),a.pendingCatches.delete(e),c(t)}))})))}}]),e}(),g="https://api.atlasacademy.io",b=function(){var e=Object(s.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d={buff:new v,craftEssence:new v,craftEssenceList:new v,func:new v,mysticCode:new v,mysticCodeList:new v,noblePhantasm:new v,quest:new v,servant:new v,servantList:new v,skill:new v,traitMap:new v},m=function(){function e(){Object(r.a)(this,e)}return Object(c.a)(e,null,[{key:"buff",value:function(e,t){var n=f.a.language(),a="".concat(e,"-").concat(n,"-").concat(t);return d.buff.get(a,(function(){var a="?reverse=true"+(n===p.a.ENGLISH?"&lang=en":"");return b("".concat(g,"/nice/").concat(e,"/buff/").concat(t).concat(a))}),2e4)}},{key:"craftEssence",value:function(e,t){var n=f.a.language(),a="".concat(e,"-").concat(n,"-").concat(t);return d.craftEssence.get(a,(function(){var a="?lore=true"+(n===p.a.ENGLISH?"&lang=en":"");return b("".concat(g,"/nice/").concat(e,"/equip/").concat(t).concat(a))}),2e4)}},{key:"craftEssenceList",value:function(){var t=Object(s.a)(u.a.mark((function t(n){var r,c,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n!==h.a.NA){t.next=4;break}return t.abrupt("return",e.getCacheableCraftEssenceList(h.a.NA));case 4:if(n!==h.a.JP||f.a.language()!==p.a.DEFAULT){t.next=6;break}return t.abrupt("return",e.getCacheableCraftEssenceList(h.a.JP));case 6:return t.next=8,e.getCacheableCraftEssenceList(h.a.JP);case 8:return r=t.sent,t.next=11,e.getCacheableCraftEssenceList(h.a.NA);case 11:return c=t.sent,i=new Map(c.map((function(e){return[e.id,e.name]}))),t.abrupt("return",r.map((function(e){var t;return Object(a.a)(Object(a.a)({},e),{},{name:null!==(t=i.get(e.id))&&void 0!==t?t:e.name})})));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"func",value:function(e,t){var n=f.a.language(),a="".concat(e,"-").concat(n,"-").concat(t);return d.func.get(a,(function(){var a="?reverse=true"+(n===p.a.ENGLISH?"&lang=en":"");return b("".concat(g,"/nice/").concat(e,"/function/").concat(t).concat(a))}),2e4)}},{key:"mysticCode",value:function(e,t){var n="".concat(e,"-").concat(t);return d.mysticCode.get(n,(function(){return b("".concat(g,"/nice/").concat(e,"/MC/").concat(t))}),2e4)}},{key:"mysticCodeList",value:function(){var t=Object(s.a)(u.a.mark((function t(n){var r,c,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n!==h.a.NA){t.next=4;break}return t.abrupt("return",e.getCacheableMysticCodeList(h.a.NA));case 4:if(n!==h.a.JP||f.a.language()!==p.a.DEFAULT){t.next=6;break}return t.abrupt("return",e.getCacheableMysticCodeList(h.a.JP));case 6:return t.next=8,e.getCacheableMysticCodeList(h.a.JP);case 8:return r=t.sent,t.next=11,e.getCacheableMysticCodeList(h.a.NA);case 11:return c=t.sent,i=new Map(c.map((function(e){return[e.id,e.name]}))),t.abrupt("return",r.map((function(e){var t;return Object(a.a)(Object(a.a)({},e),{},{name:null!==(t=i.get(e.id))&&void 0!==t?t:e.name})})));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"noblePhantasm",value:function(e,t){var n=f.a.language(),a="".concat(e,"-").concat(n,"-").concat(t);return d.noblePhantasm.get(a,(function(){var a="?reverse=true"+(n===p.a.ENGLISH?"&lang=en":"");return b("".concat(g,"/nice/").concat(e,"/NP/").concat(t).concat(a))}),2e4)}},{key:"quest",value:function(e,t,n){var a="".concat(e,"-").concat(t,"-").concat(n);return d.quest.get(a,(function(){return b("".concat(g,"/nice/").concat(e,"/quest/").concat(t,"/").concat(n))}),2e4)}},{key:"servant",value:function(e,t){var n=f.a.language(),a="".concat(e,"-").concat(n,"-").concat(t);return d.servant.get(a,(function(){var a="?lore=true"+(n===p.a.ENGLISH?"&lang=en":"");return b("".concat(g,"/nice/").concat(e,"/servant/").concat(t).concat(a))}),2e4)}},{key:"servantList",value:function(){var t=Object(s.a)(u.a.mark((function t(n){var r,c,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n!==h.a.NA){t.next=4;break}return t.abrupt("return",e.getCacheableServantList(h.a.NA));case 4:if(n!==h.a.JP||f.a.language()!==p.a.DEFAULT){t.next=6;break}return t.abrupt("return",e.getCacheableServantList(h.a.JP));case 6:return t.next=8,e.getCacheableServantList(h.a.JP);case 8:return r=t.sent,t.next=11,e.getCacheableServantList(h.a.NA);case 11:return c=t.sent,i=new Map(c.map((function(e){return[e.id,e.name]}))),t.abrupt("return",r.map((function(e){var t;return Object(a.a)(Object(a.a)({},e),{},{name:null!==(t=i.get(e.id))&&void 0!==t?t:e.name})})));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"skill",value:function(e,t){var n=f.a.language(),a="".concat(e,"-").concat(n,"-").concat(t);return d.skill.get(a,(function(){var a="?reverse=true"+(n===p.a.ENGLISH?"&lang=en":"");return b("".concat(g,"/nice/").concat(e,"/skill/").concat(t).concat(a))}),2e4)}},{key:"traitMap",value:function(e){return d.traitMap.get(e,(function(){return b("".concat(g,"/export/").concat(e,"/nice_trait.json"))}),null)}},{key:"getCacheableCraftEssenceList",value:function(){var e=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",d.craftEssenceList.get(t,(function(){return b("".concat(g,"/export/").concat(t,"/basic_equip.json"))}),null));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCacheableMysticCodeList",value:function(){var e=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",d.mysticCodeList.get(t,(function(){return b("".concat(g,"/export/").concat(t,"/nice_mystic_code.json"))}),null));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCacheableServantList",value:function(){var e=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",d.servantList.get(t,(function(){return b("".concat(g,"/export/").concat(t,"/basic_servant.json"))}),null));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}();t.a=m}}]);
//# sourceMappingURL=14.5915009d.chunk.js.map