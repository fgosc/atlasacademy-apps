(this["webpackJsonpaa-db"]=this["webpackJsonpaa-db"]||[]).push([[0],{154:function(e,n,t){"use strict";var a=t(12),r=t(13),u=t(23),i=t(22),l=t(0),o=t.n(l),p=function(e){Object(u.a)(t,e);var n=Object(i.a)(t);function t(){return Object(a.a)(this,t),n.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var e;return o.a.createElement("img",{alt:"",src:this.props.location,style:{height:null!==(e=this.props.height)&&void 0!==e?e:25,verticalAlign:"bottom"}})}}]),t}(o.a.Component);n.a=p},155:function(e,n,t){"use strict";var a=t(20),r=t.n(a),u=t(34),i=t(12),l=t(13),o=t(23),p=t(22),f=t(161),s=t(0),c=t.n(s),T=t(14),A=t(49),E=t(182),d=function(e){Object(o.a)(t,e);var n=Object(p.a)(t);function t(e){var a;return Object(i.a)(this,t),(a=n.call(this,e)).state={id:"number"===typeof e.trait?e.trait:e.trait.id,trait:"number"===typeof e.trait?void 0:e.trait},a}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(r.a.mark((function e(){var n,t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.trait){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,A.a.traitList();case 4:n=e.sent,t=0;case 6:if(!(t<n.length)){e.next=14;break}if((a=n[t]).id!==this.state.id){e.next=11;break}return this.setState({trait:a}),e.abrupt("return");case 11:t++,e.next=6;break;case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getDescription",value:function(e){var n=f.f.describe(e,this.props.overrideTraits);return c.a.createElement(E.a,{region:this.props.region,descriptor:n})}},{key:"getLocation",value:function(){return"/".concat(this.props.region,"/entities/trait/").concat(this.state.id)}},{key:"render",value:function(){var e,n=null!==(e=this.state.trait)&&void 0!==e?e:this.state.id;return this.props.disableLink?c.a.createElement("span",null,"[",this.getDescription(n),"]"):c.a.createElement(T.b,{to:this.getLocation()},"[",this.getDescription(n),"]")}}],[{key:"renderAsString",value:function(e){var n=f.f.describe(e);return E.a.renderAsString(n)}}]),t}(c.a.Component);n.a=d},161:function(e,n,t){"use strict";t.d(n,"d",(function(){return a})),t.d(n,"e",(function(){return r})),t.d(n,"g",(function(){return u})),t.d(n,"a",(function(){return M})),t.d(n,"b",(function(){return m})),t.d(n,"c",(function(){return j})),t.d(n,"f",(function(){return x}));var a,r,u,i=function(){var e=function(n,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(n,t)};return function(n,t){function a(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}}();!function(e){e.PARTICLE="particle",e.REFERENCE="reference",e.TEXT="text",e.VALUE="value"}(a||(a={})),function(e){e.BUFF="buff",e.CARD="card",e.SKILL="skill",e.TRAIT="trait"}(r||(r={})),function(e){e.NUMBER="number",e.PERCENT="percent",e.UNKNOWN="unknown"}(u||(u={}));var l=function(e,n){this.type=e,this.value=n},o=function(e){function n(n){return e.call(this,a.PARTICLE,n)||this}return i(n,e),n}(l),p=function(e){function n(n,t){var r=e.call(this,a.REFERENCE,t)||this;return r.referenceType=n,r}return i(n,e),n}(l),f=function(e){function n(n){return e.call(this,a.TEXT,n)||this}return i(n,e),n}(l),s=function(e){function n(n,t){var r=e.call(this,a.VALUE,t)||this;return r.valueType=n,r}return i(n,e),n}(l),c=function(){function e(e){this._partials=e}return e.prototype.partials=function(){return this._partials},e.prototype.references=function(){return this._partials.filter((function(e){return e.type===a.REFERENCE}))},e}(),T=function(){var e=function(n,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(n,t)};return function(n,t){function a(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}}(),A=function(e){function n(n){return e.call(this,r.BUFF,n)||this}return T(n,e),n}(p);function E(e){var n=e.match(/[A-Z]*[a-z0-9]*/g);return n&&n.length?n.filter((function(e){return e.length>0})).map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" "):e}var d=function(){var e=function(n,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(n,t)};return function(n,t){function a(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}}(),D=function(e){function n(n){return e.call(this,r.TRAIT,n)||this}return d(n,e),n}(p),v=t(11),y=[{up:v.b.BuffType.ADD_MAXHP,down:v.b.BuffType.SUB_MAXHP,description:"Max HP"},{up:v.b.BuffType.UP_ATK,down:v.b.BuffType.DOWN_ATK,description:"ATK"},{up:v.b.BuffType.UP_CHAGETD,down:void 0,description:"Overcharge"},{up:v.b.BuffType.UP_COMMANDALL,down:v.b.BuffType.DOWN_COMMANDALL,description:"Card"},{up:v.b.BuffType.UP_COMMANDATK,down:v.b.BuffType.DOWN_COMMANDATK,description:"ATK"},{up:v.b.BuffType.UP_CRITICALDAMAGE,down:v.b.BuffType.DOWN_CRITICALDAMAGE,description:"Critical Damage"},{up:v.b.BuffType.UP_CRITICALPOINT,down:v.b.BuffType.DOWN_CRITICALPOINT,description:"Star Drop Rate"},{up:v.b.BuffType.UP_CRITICALRATE,down:v.b.BuffType.DOWN_CRITICALRATE,description:"Critical Rate"},{up:v.b.BuffType.UP_CRITICAL_RATE_DAMAGE_TAKEN,down:v.b.BuffType.DOWN_CRITICAL_RATE_DAMAGE_TAKEN,description:"Critical Rate Taken"},{up:v.b.BuffType.UP_DAMAGE,down:v.b.BuffType.DOWN_DAMAGE,description:"SP.DMG"},{up:v.b.BuffType.UP_DAMAGEDROPNP,down:v.b.BuffType.DOWN_DAMAGEDROPNP,description:"NP Gain When Damaged"},{up:v.b.BuffType.UP_DEFENCE,down:v.b.BuffType.DOWN_DEFENCE,description:"DEF"},{up:v.b.BuffType.UP_DEFENCECOMMANDALL,down:v.b.BuffType.DOWN_DEFENCECOMMANDALL,description:"Resistance"},{up:v.b.BuffType.UP_DROPNP,down:v.b.BuffType.DOWN_DROPNP,description:"NP Gain"},{up:v.b.BuffType.UP_FUNC_HP_REDUCE,down:v.b.BuffType.DOWN_FUNC_HP_REDUCE,description:"DoT Effectiveness"},{up:v.b.BuffType.UP_GRANT_INSTANTDEATH,down:v.b.BuffType.DOWN_GRANT_INSTANTDEATH,description:"Death Chance"},{up:v.b.BuffType.UP_GRANTSTATE,down:v.b.BuffType.DOWN_GRANTSTATE,description:"Buff Chance"},{up:void 0,down:v.b.BuffType.UP_NONRESIST_INSTANTDEATH,description:"Death Resist"},{up:v.b.BuffType.UP_NPDAMAGE,down:v.b.BuffType.DOWN_NPDAMAGE,description:"NP Damage"},{up:v.b.BuffType.UP_SPECIALDEFENCE,down:v.b.BuffType.DOWN_SPECIALDEFENCE,description:"SP.DEF"},{up:v.b.BuffType.UP_STARWEIGHT,down:v.b.BuffType.DOWN_STARWEIGHT,description:"Star Weight"},{up:v.b.BuffType.UP_TOLERANCE,down:v.b.BuffType.DOWN_TOLERANCE,description:"Debuff Resist"},{up:v.b.BuffType.UP_TOLERANCE_SUBSTATE,down:v.b.BuffType.DOWN_TOLERANCE_SUBSTATE,description:"Buff Removal Resist"}],N=new Map([[3012,"Charm"],[3015,"Burn"],[3026,"Curse"],[3045,"Stun"]]),_=new Map([[v.b.BuffType.AVOID_INSTANTDEATH,"Immune to Death"],[v.b.BuffType.AVOID_STATE,"Immunity"],[v.b.BuffType.ADD_DAMAGE,"Damage Plus"],[v.b.BuffType.ADD_INDIVIDUALITY,"Add Trait"],[v.b.BuffType.AVOIDANCE,"Evade"],[v.b.BuffType.CHANGE_COMMAND_CARD_TYPE,"Change Command Card Types"],[v.b.BuffType.COMMANDCODEATTACK_FUNCTION,"Command Code Effect"],[v.b.BuffType.BREAK_AVOIDANCE,"Sure Hit"],[v.b.BuffType.DELAY_FUNCTION,"Trigger Skill after Duration"],[v.b.BuffType.DONOT_NOBLE,"NP Seal"],[v.b.BuffType.DONOT_NOBLE_COND_MISMATCH,"NP Block if Condition Failed"],[v.b.BuffType.DONOT_RECOVERY,"Recovery Disabled"],[v.b.BuffType.DONOT_SELECT_COMMANDCARD,"Do Not Shuffle In Cards"],[v.b.BuffType.DONOT_SKILL,"Skill Seal"],[v.b.BuffType.FIELD_INDIVIDUALITY,"Change Field Type"],[v.b.BuffType.FIX_COMMANDCARD,"Freeze Command Cards"],[v.b.BuffType.GUTS,"Guts"],[v.b.BuffType.GUTS_FUNCTION,"Trigger Skill on Guts"],[v.b.BuffType.GUTS_RATIO,"Guts"],[v.b.BuffType.INVINCIBLE,"Invincible"],[v.b.BuffType.MULTIATTACK,"Multiple Hits"],[v.b.BuffType.PIERCE_INVINCIBLE,"Ignore Invincible"],[v.b.BuffType.REGAIN_HP,"HP Per Turn"],[v.b.BuffType.REGAIN_NP,"NP Per Turn"],[v.b.BuffType.REGAIN_STAR,"Stars Per Turn"],[v.b.BuffType.SELFTURNEND_FUNCTION,"Trigger Skill every Turn"],[v.b.BuffType.SPECIAL_INVINCIBLE,"Special invincible"],[v.b.BuffType.SUB_SELFDAMAGE,"Damage Cut"],[v.b.BuffType.TD_TYPE_CHANGE,"Change Noble Phantasm"],[v.b.BuffType.TD_TYPE_CHANGE_ARTS,"Set Noble Phantasm: Arts"],[v.b.BuffType.TD_TYPE_CHANGE_BUSTER,"Set Noble Phantasm: Buster"],[v.b.BuffType.TD_TYPE_CHANGE_QUICK,"Set Noble Phantasm: Quick"],[v.b.BuffType.UP_HATE,"Taunt"]]),b=new Map([[v.b.BuffType.ATTACK_FUNCTION,{after:!0,event:"attacks"}],[v.b.BuffType.COMMANDATTACK_FUNCTION,{after:!0,event:"cards"}],[v.b.BuffType.COMMANDATTACK_BEFORE_FUNCTION,{after:!1,event:"cards"}],[v.b.BuffType.DAMAGE_FUNCTION,{after:!0,when:"receiving",event:"attacks"}],[v.b.BuffType.DEAD_FUNCTION,{after:!0,event:"death"}],[v.b.BuffType.NPATTACK_PREV_BUFF,{after:!0,event:"NP"}]]);function h(e){for(var n in y)if(y[n].up===e||y[n].down===e)return y[n]}function C(e,n){var t=[],a=w(e),r=w(n);return a.length&&(t.push(new o(" for ")),t.push.apply(t,a)),r.length&&(t.push(new o(" vs. ")),t.push.apply(t,r)),t}function w(e){return function(e,n){for(var t=[],a=0;a<e.length;a++)a>0&&t.push(new o(n)),t.push(e[a]);return t}(e.map((function(e){return new D(e)}))," & ")}var U=function(){var e=function(n,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(n,t)};return function(n,t){function a(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}}(),V=function(e){function n(n){return e.call(this,r.CARD,n)||this}return U(n,e),n}(p),O=function(){var e=function(n,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(n,t)};return function(n,t){function a(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}}(),P=function(e){function n(n){return e.call(this,r.SKILL,n)||this}return O(n,e),n}(p),I=t(68),B=new Map([[v.b.BuffType.UP_ATK,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.DOWN_ATK,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.UP_COMMANDALL,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.DOWN_COMMANDALL,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.UP_COMMANDATK,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.DOWN_COMMANDATK,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.UP_CRITICALDAMAGE,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.DOWN_CRITICALDAMAGE,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.UP_CRITICALPOINT,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.DOWN_CRITICALPOINT,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.UP_CRITICALRATE,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.DOWN_CRITICALRATE,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.UP_CRITICAL_RATE_DAMAGE_TAKEN,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.DOWN_CRITICAL_RATE_DAMAGE_TAKEN,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.UP_DAMAGE,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.DOWN_DAMAGE,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.UP_DAMAGEDROPNP,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.DOWN_DAMAGEDROPNP,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.UP_DEFENCE,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.DOWN_DEFENCE,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.UP_DEFENCECOMMANDALL,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.DOWN_DEFENCECOMMANDALL,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.UP_DROPNP,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.DOWN_DROPNP,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.UP_FUNC_HP_REDUCE,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.DOWN_FUNC_HP_REDUCE,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.UP_GRANTSTATE,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.DOWN_GRANTSTATE,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.UP_HATE,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.UP_NONRESIST_INSTANTDEATH,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.UP_NPDAMAGE,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.DOWN_NPDAMAGE,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.UP_SPECIALDEFENCE,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.DOWN_SPECIALDEFENCE,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.UP_STARWEIGHT,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.DOWN_STARWEIGHT,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.UP_TOLERANCE,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.DOWN_TOLERANCE,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.UP_TOLERANCE_SUBSTATE,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.DOWN_TOLERANCE_SUBSTATE,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.GUTS_RATIO,{value:I.DataValField.VALUE,power:1}],[v.b.BuffType.REGAIN_NP,{value:I.DataValField.VALUE,power:2}]]),F=new Map([[v.b.BuffType.ATTACK_FUNCTION,{skill:I.DataValField.VALUE,level:I.DataValField.VALUE2}],[v.b.BuffType.COMMANDATTACK_FUNCTION,{skill:I.DataValField.VALUE,level:I.DataValField.VALUE2}],[v.b.BuffType.COMMANDATTACK_BEFORE_FUNCTION,{skill:I.DataValField.VALUE,level:I.DataValField.VALUE2}],[v.b.BuffType.DAMAGE_FUNCTION,{skill:I.DataValField.VALUE,level:I.DataValField.VALUE2}],[v.b.BuffType.DEAD_FUNCTION,{skill:I.DataValField.VALUE,level:I.DataValField.VALUE2}],[v.b.BuffType.DELAY_FUNCTION,{skill:I.DataValField.VALUE,level:I.DataValField.VALUE2}],[v.b.BuffType.NPATTACK_PREV_BUFF,{skill:I.DataValField.SKILL_ID,level:I.DataValField.SKILL_LV,position:I.DataValField.VALUE}],[v.b.BuffType.SELFTURNEND_FUNCTION,{skill:I.DataValField.VALUE,level:I.DataValField.VALUE2,rate:I.DataValField.USE_RATE}]]),R=new Map([[v.b.BuffType.FIELD_INDIVIDUALITY,{trait:I.DataValField.VALUE}]]),g=new Map([[v.b.BuffType.CHANGE_COMMAND_CARD_TYPE,{card:I.DataValField.VALUE}]]),L=function(e,n){var t=B.get(e.type);if(t)return S(null!==n&&void 0!==n?n:{},t.value,u.PERCENT,Math.pow(10,t.power));var a=F.get(e.type);if(a)return function(e,n){var t=[],a=e[n.skill],r=e[n.level],i=(n.position&&e[n.position],n.rate?e[n.rate]:void 0);"number"===typeof a&&(t.length&&t.push(new o(" + ")),t.push(new P(a)));"number"===typeof r&&(t.length&&t.push(new o(" + ")),t.push(new f("Lv. ")),t.push(new s(u.UNKNOWN,r)));"number"===typeof i&&(t.length&&t.push(new o(" + ")),t.push(new f("Chance: ")),t.push(new s(u.PERCENT,i/10)));return t.length>0?new c(t):void 0}(null!==n&&void 0!==n?n:{},a);var r=R.get(e.type);if(r)return function(e,n){var t=[],a=e[n.trait];"number"===typeof a&&t.push(new D(a));return t.length>0?new c(t):void 0}(null!==n&&void 0!==n?n:{},r);var i=g.get(e.type);return i?function(e,n){var t=[],a=e[n.card];"number"===typeof a&&t.push(new V(a));return t.length>0?new c(t):void 0}(null!==n&&void 0!==n?n:{},i):S(null!==n&&void 0!==n?n:{},v.e.DataValField.VALUE,u.NUMBER,1)};function S(e,n,t,a){var r=[],u=e[n];"number"===typeof u&&r.push(new s(t,u/a));var i=e.RatioHPLow;return void 0!==i&&(r.length&&r.push(new o(" + ")),r.push(new o("(")),r.push(new s(t,i/a)),r.push(new o(" Scales by Low HP)"))),r.length>0?new c(r):void 0}var M={describe:function(e){var n=[],t=h(e.type),a=b.get(e.type),r=function(e){var n=e.vals.map((function(e){return e.id}));for(var t in n){var a=n[t],r=N.get(a);if(void 0!==r)return r}}(e),u=_.get(e.type);return t?(t.up===e.type?n.push(new f(t.description+" Up")):n.push(new f(t.description+" Down")),n.push.apply(n,C(e.ckSelfIndv,e.ckOpIndv))):u?(n.push(new f(u)),n.push.apply(n,C(e.ckSelfIndv,e.ckOpIndv))):r?(n.push(new f(r)),n.push.apply(n,C(e.ckSelfIndv,e.ckOpIndv))):a?(n.push(new f("Trigger Skills")),n.push(new o(a.after?" on ":" before ")),a.when&&(n.push(new f(a.when)),n.push(new o(" "))),e.ckSelfIndv.length&&(n.push.apply(n,w(e.ckSelfIndv)),n.push(new o(" "))),n.push(new f(a.event)),n.push.apply(n,C([],e.ckOpIndv))):e.name?n.push(new f(e.name)):n.push(new f(E(e.type))),new c(n)},describeType:function(e){var n=h(e),t=b.get(e),a=_.get(e);return n?n.up===e?n.description+" Up":n.description+" Down":a||(t?"Trigger Skills "+(t.after?"on ":"before ")+(t.when?t.when+" ":"")+t.event:E(e))},describeValue:L,BuffReferencePartial:A},k=new Map([[1,v.c.NONE],[2,v.c.BUSTER],[3,v.c.ARTS],[4,v.c.QUICK],[5,v.c.EXTRA]]),m={describe:function(e){var n=[],t="number"===typeof e?k.get(e):e;return t?n.push(new f(E(t))):"number"===typeof e?n.push(new s(u.UNKNOWN,e)):n.push(new f(E(e))),new c(n)},CardReferencePartial:V},G=t(69),W=function(e){return Object.values(v.e.DataValField).filter((function(n){var t=e.map((function(e){return e[n]}));return new Set(t.map((function(e){return Array.isArray(e)?e.join(","):e}))).size>1}))};function K(e){var n=W(e),t={};for(var a in n)t[n[a]]=e[0][n[a]];return t}var j={describeValue:function(e,n,t,a){var r,i=[],l=function(e){i.length&&e.length&&i.push(new o(" + ")),i.push.apply(i,e)};if(a||void 0===t.Rate||i.push(new s(u.PERCENT,t.Rate/10),new f(" Chance")),e.funcType===G.FuncType.ADD_STATE||e.funcType===G.FuncType.ADD_STATE_SHORT){var p=L(e.buffs[0],t);l(null!==(r=null===p||void 0===p?void 0:p.partials())&&void 0!==r?r:[])}else if(e.funcType===G.FuncType.ABSORB_NPTURN)l(function(e,n){var t,a,r,i,l,p=[],c=[];switch(null!==(t=e.DependFuncId)&&void 0!==t?t:n.DependFuncId){case 469:if(void 0!==(null===(a=n.DependFuncVals)||void 0===a?void 0:a.Value)&&p.push(new s(u.PERCENT,n.DependFuncVals.Value/100)),void 0!==(null===(r=n.DependFuncVals)||void 0===r?void 0:r.Value2)){var T=(null===(i=n.DependFuncVals)||void 0===i?void 0:i.Value2)/100;c.push(new s(u.NUMBER,T),new o(" "),new f("Charge"+(T>1?"s":"")))}break;case 5061:void 0!==(null===(l=n.DependFuncVals)||void 0===l?void 0:l.Value)&&c.push(new s(u.NUMBER,n.DependFuncVals.Value))}return p.length&&c.length?p.concat([new o(" => ")],c):p.length?p:c.length?c:[]}(n,t));else if(e.funcType===G.FuncType.GAIN_HP_FROM_TARGETS)l(function(e,n){var t,a,r=[],i=[];switch(null!==(t=e.DependFuncId)&&void 0!==t?t:n.DependFuncId){case 711:void 0!==(null===(a=n.DependFuncVals)||void 0===a?void 0:a.Value)&&i.push(new s(u.NUMBER,n.DependFuncVals.Value))}return r.length&&i.length?r.concat([new o(" => ")],i):r.length?r:i.length?i:[]}(n,t));else if(e.funcType===G.FuncType.GAIN_NP_FROM_TARGETS)l(function(e,n){var t,a,r,i,l=[],p=[];switch(null!==(t=e.DependFuncId)&&void 0!==t?t:n.DependFuncId){case 474:if(void 0!==(null===(a=n.DependFuncVals)||void 0===a?void 0:a.Value)){var c=n.DependFuncVals.Value/100;l.push(new s(u.NUMBER,c),new o(" "),new f("Charge"+(c>1?"s":"")))}void 0!==(null===(r=n.DependFuncVals)||void 0===r?void 0:r.Value2)&&p.push(new s(u.PERCENT,n.DependFuncVals.Value2/100));break;case 3962:void 0!==(null===(i=n.DependFuncVals)||void 0===i?void 0:i.Value)&&p.push(new s(u.PERCENT,n.DependFuncVals.Value/100))}return l.length&&p.length?l.concat([new o(" => ")],p):l.length?l:p.length?p:[]}(n,t));else{if(void 0!==t.Value)switch(e.funcType){case v.g.FuncType.DAMAGE_NP:case v.g.FuncType.DAMAGE_NP_HPRATIO_LOW:case v.g.FuncType.DAMAGE_NP_INDIVIDUAL:case v.g.FuncType.DAMAGE_NP_INDIVIDUAL_SUM:case v.g.FuncType.DAMAGE_NP_PIERCE:case v.g.FuncType.DAMAGE_NP_RARE:case v.g.FuncType.DAMAGE_NP_STATE_INDIVIDUAL_FIX:case v.g.FuncType.GAIN_HP_PER:case v.g.FuncType.QP_DROP_UP:l([new s(u.PERCENT,t.Value/10)]);break;case v.g.FuncType.GAIN_NP:case v.g.FuncType.GAIN_NP_BUFF_INDIVIDUAL_SUM:case v.g.FuncType.LOSS_NP:l([new s(u.PERCENT,t.Value/100)]);break;default:l([new s(u.NUMBER,t.Value)])}if(void 0!==t.Value2)switch(e.funcType){case v.g.FuncType.DAMAGE_NP_INDIVIDUAL_SUM:l([new f("additional "),new s(u.PERCENT,t.Value2/10)])}if(void 0!==t.Correction)switch(e.funcType){case v.g.FuncType.DAMAGE_NP_INDIVIDUAL:case v.g.FuncType.DAMAGE_NP_RARE:case v.g.FuncType.DAMAGE_NP_STATE_INDIVIDUAL_FIX:l([new s(u.PERCENT,t.Correction/10)]);break;case v.g.FuncType.DAMAGE_NP_INDIVIDUAL_SUM:l([new o("("),new s(u.PERCENT,t.Correction/10),new f(" x count"),new o(")")]);break;default:l([new s(u.NUMBER,t.Correction)])}if(void 0!==t.Target)switch(e.funcType){case v.g.FuncType.DAMAGE_NP_HPRATIO_LOW:l([new s(u.PERCENT,t.Target/10)]);break;default:l([new s(u.UNKNOWN,t.Target)])}if(void 0!==t.AddCount&&l([new s(u.NUMBER,t.AddCount)]),void 0!==t.UseRate&&l([new s(u.PERCENT,t.UseRate/10),new f(" Chance to Trigger")]),void 0!==t.RateCount)switch(e.funcType){case v.g.FuncType.QP_DROP_UP:case v.g.FuncType.SERVANT_FRIENDSHIP_UP:case v.g.FuncType.USER_EQUIP_EXP_UP:l([new s(u.PERCENT,t.RateCount/10)]);break;default:l([new s(u.UNKNOWN,t.RateCount)])}void 0!==t.Count&&l([new s(u.NUMBER,t.Count),new f(" Time"+(t.Count>1?"s":""))])}return i.length?new c(i):void 0},getMutatingDataVal:function(e,n,t){var a=function(e){var n,t,a,r,u=e.svals.concat(null!==(n=e.svals2)&&void 0!==n?n:[],null!==(t=e.svals3)&&void 0!==t?t:[],null!==(a=e.svals4)&&void 0!==a?a:[],null!==(r=e.svals5)&&void 0!==r?r:[]);return u.length?W(u):[]}(e),r=function(e,n,t){var a,r,u,i,l,o=[];void 0===t||1===t?o=e.svals:2===t?o=null!==(a=e.svals2)&&void 0!==a?a:[]:3===t?o=null!==(r=e.svals3)&&void 0!==r?r:[]:4===t?o=null!==(u=e.svals4)&&void 0!==u?u:[]:5===t&&(o=null!==(i=e.svals5)&&void 0!==i?i:[]);return null!==(l=o[n-1])&&void 0!==l?l:{}}(e,n,t),u=Object.keys(r),i={};return u.forEach((function(e){-1===a.indexOf(e)&&(i[e]=r[e])})),i},getStaticDataVal:function(e){var n,t,a,r,u=e.svals.concat(null!==(n=e.svals2)&&void 0!==n?n:[],null!==(t=e.svals3)&&void 0!==t?t:[],null!==(a=e.svals4)&&void 0!==a?a:[],null!==(r=e.svals5)&&void 0!==r?r:[]);if(!u.length)return{};var i=K(u);if(u.filter((function(e){return void 0!==e.DependFuncVals})).length>0){var l=u.map((function(e){var n;return null!==(n=e.DependFuncVals)&&void 0!==n?n:{}}));i.DependFuncVals=K(l)}return i},getStaticDataValFields:W},H=new Map([[1,"Gender:Male"],[2,"Gender:Female"],[3,"Gender:Unknown"],[100,"Class:Saber"],[101,"Class:Lancer"],[102,"Class:Archer"],[103,"Class:Rider"],[104,"Class:Caster"],[105,"Class:Assassin"],[106,"Class:Berserker"],[107,"Class:Shielder"],[108,"Class:Ruler"],[109,"Class:Alter Ego"],[110,"Class:Avenger"],[111,"Demon Pillar"],[112,"Class:Grand Caster"],[113,"Beast I"],[114,"Beast II"],[115,"Class:Moon Cancer"],[116,"Beast IIIR"],[117,"Class:Foreigner"],[118,"Beast IIIL"],[119,"Beast Unknown"],[200,"Attribute:Sky"],[201,"Attribute:Earth"],[202,"Attribute:Human"],[203,"Attribute:Star"],[204,"Attribute:Beast"],[300,"Alignment:Lawful"],[301,"Alignment:Chaotic"],[302,"Alignment:Neutral"],[303,"Alignment:Good"],[304,"Alignment:Evil"],[305,"Alignment:Balanced"],[306,"Alignment:Madness"],[308,"Alignment:Summer"],[2386,"Kingprotea:Proliferation"],[2387,"Kingprotea:Growth"],[2664,"Kingprotea:Proliferation NP Defense"],[3005,"Buff:Debuff"],[3006,"Buff:Offensive"],[3007,"Buff:Defensive"],[3011,"Poison"],[3012,"Charm"],[3015,"Burn"],[3021,"Evade"],[3026,"Curse"],[3047,"Pigify"],[4001,"Card:Arts"],[4002,"Card:Buster"],[4003,"Card:Quick"],[4004,"Card:Extra"],[4008,"Player Card"],[4100,"Critical Hit"]]),x={describe:function(e,n){var t="number"===typeof e?e:e.id,a=H.get(t);if(void 0!==a)return new c([new f(a)]);var r=(null!==n&&void 0!==n?n:[]).find((function(e){return e.id===t}));if(r&&"unknown"!==r.name)return new c([new f(r.name)]);var i="number"===typeof e?"unknown":e.name;return new c("unknown"!==i?[new f(E(i))]:[new o("unknown("),new s(u.UNKNOWN,t),new o(")")])},TraitReferencePartial:D}},178:function(e,n,t){"use strict";var a=t(12),r=t(13),u=t(23),i=t(22),l=t(0),o=t.n(l),p=t(14),f=t(154),s=function(e){Object(u.a)(t,e);var n=Object(i.a)(t);function t(){return Object(a.a)(this,t),n.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(p.b,{to:"/".concat(this.props.region,"/skill/").concat(this.props.skill.id)},this.props.skill.icon?o.a.createElement(f.a,{location:this.props.skill.icon,height:this.props.iconHeight}):void 0,this.props.skill.icon?" ":void 0,"[",this.props.skill.name?this.props.skill.name:"Skill: ".concat(this.props.skill.id),"]")}}],[{key:"renderAsString",value:function(e){var n=e.name?e.name:"Skill: ".concat(e.id);return"[".concat(n,"]")}}]),t}(o.a.Component);n.a=s},179:function(e,n,t){"use strict";var a=t(20),r=t.n(a),u=t(34),i=t(12),l=t(13),o=t(23),p=t(22),f=t(0),s=t.n(f),c=t(14),T=t(49),A=t(178),E=function(e){Object(o.a)(t,e);var n=Object(p.a)(t);function t(e){var a;return Object(i.a)(this,t),(a=n.call(this,e)).state={},a}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=this,e.next=4,T.a.skill(this.props.id);case 4:e.t1=e.sent,e.t2={skill:e.t1},e.t0.setState.call(e.t0,e.t2),e.next=11;break;case 9:e.prev=9,e.t3=e.catch(0);case 11:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e="/".concat(this.props.region,"/skill/").concat(this.props.id);return void 0===this.state.skill?s.a.createElement(c.b,{to:e},"[Skill: ",this.props.id,"]"):s.a.createElement(A.a,{region:this.props.region,skill:this.state.skill})}}],[{key:"renderAsString",value:function(e){return"[Skill: ".concat(e,"]")}}]),t}(s.a.Component);n.a=E},182:function(e,n,t){"use strict";var a=t(12),r=t(13),u=t(23),i=t(22),l=t(161),o=t(0),p=t.n(o),f=function(e){Object(u.a)(t,e);var n=Object(i.a)(t);function t(){return Object(a.a)(this,t),n.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var e=l.b.describe(this.props.card);return p.a.createElement("span",null,"[",p.a.createElement(E,{region:this.props.region,descriptor:e}),"]")}}],[{key:"renderAsString",value:function(e){var n=l.b.describe(e);return"["+E.renderAsString(n)+"]"}}]),t}(p.a.Component),s=t(178),c=t(179),T=t(155),A=function(e){Object(u.a)(t,e);var n=Object(i.a)(t);function t(){return Object(a.a)(this,t),n.apply(this,arguments)}return Object(r.a)(t,[{key:"renderReference",value:function(e,n){return e.referenceType===l.e.CARD?p.a.createElement(f,{key:n,region:this.props.region,card:e.value}):e.referenceType===l.e.SKILL?"number"===typeof e.value?p.a.createElement(c.a,{key:n,region:this.props.region,id:e.value}):p.a.createElement(s.a,{key:n,region:this.props.region,skill:e.value}):e.referenceType===l.e.TRAIT?p.a.createElement(T.a,{key:n,region:this.props.region,trait:e.value}):e.value.toString()}},{key:"render",value:function(){for(var e=this.props.descriptor.partials(),n=[],a=0;a<e.length;a++){var r=e[a];r.type===l.d.PARTICLE?n.push(t.renderParticle(r)):r.type===l.d.REFERENCE?n.push(this.renderReference(r,a)):r.type===l.d.TEXT?n.push(t.renderText(r)):r.type===l.d.VALUE?n.push(t.renderValue(r)):n.push(r.value.toString())}return p.a.createElement(p.a.Fragment,null,n)}}],[{key:"renderParticle",value:function(e){return e.value}},{key:"renderReferenceAsString",value:function(e){return e.referenceType===l.e.CARD?f.renderAsString(e.value):e.referenceType===l.e.SKILL?"number"===typeof e.value?c.a.renderAsString(e.value):s.a.renderAsString(e.value):e.referenceType===l.e.TRAIT?T.a.renderAsString(e.value):e.value.toString()}},{key:"renderText",value:function(e){return e.value}},{key:"renderValue",value:function(e){return e.valueType===l.g.PERCENT?e.value.toString()+"%":e.value.toString()}},{key:"renderAsString",value:function(e){for(var n=e.partials(),a=[],r=0;r<n.length;r++){var u=n[r];u.type===l.d.PARTICLE?a.push(t.renderParticle(u)):u.type===l.d.REFERENCE?a.push(t.renderReferenceAsString(u)):u.type===l.d.TEXT?a.push(t.renderText(u)):u.type===l.d.VALUE?a.push(t.renderValue(u)):a.push(u.value.toString())}return a.join("")}}]),t}(p.a.Component),E=n.a=A}}]);
//# sourceMappingURL=0.4a8b1f78.chunk.js.map