(this["webpackJsonpaa-db"]=this["webpackJsonpaa-db"]||[]).push([[0],{153:function(e,t,n){"use strict";var r=n(12),a=n(13),i=n(23),u=n(22),p=n(0),o=n.n(p),f=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var e;return o.a.createElement("img",{alt:"",src:this.props.location,style:{height:null!==(e=this.props.height)&&void 0!==e?e:25,verticalAlign:"bottom"}})}}]),n}(o.a.Component);t.a=f},154:function(e,t,n){"use strict";var r=n(20),a=n.n(r),i=n(34),u=n(12),p=n(13),o=n(23),f=n(22),l=n(167),s=n(0),c=n.n(s),T=n(14),A=n(49),E=n(188),d=function(e){Object(o.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={id:"number"===typeof e.trait?e.trait:e.trait.id,trait:"number"===typeof e.trait?void 0:e.trait},r}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(a.a.mark((function e(){var t,n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.trait){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,A.a.traitList();case 4:t=e.sent,n=0;case 6:if(!(n<t.length)){e.next=14;break}if((r=t[n]).id!==this.state.id){e.next=11;break}return this.setState({trait:r}),e.abrupt("return");case 11:n++,e.next=6;break;case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getDescription",value:function(e){var t=l.e.describe(e);return c.a.createElement(E.a,{region:this.props.region,descriptor:t})}},{key:"getLocation",value:function(){return"/".concat(this.props.region,"/entities/trait/").concat(this.state.id)}},{key:"render",value:function(){var e,t=null!==(e=this.state.trait)&&void 0!==e?e:this.state.id;return this.props.disableLink?c.a.createElement("span",null,"[",this.getDescription(t),"]"):c.a.createElement(T.b,{to:this.getLocation()},"[",this.getDescription(t),"]")}}],[{key:"renderAsString",value:function(e){var t=l.e.describe(e);return E.a.renderAsString(t)}}]),n}(c.a.Component);t.a=d},167:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"f",(function(){return i})),n.d(t,"a",(function(){return S})),n.d(t,"b",(function(){return m})),n.d(t,"e",(function(){return G}));var r,a,i,u=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();!function(e){e.PARTICLE="particle",e.REFERENCE="reference",e.TEXT="text",e.VALUE="value"}(r||(r={})),function(e){e.BUFF="buff",e.CARD="card",e.SKILL="skill",e.TRAIT="trait"}(a||(a={})),function(e){e.NUMBER="number",e.PERCENT="percent",e.UNKNOWN="unknown"}(i||(i={}));var p=function(e,t){this.type=e,this.value=t},o=function(e){function t(t){return e.call(this,r.PARTICLE,t)||this}return u(t,e),t}(p),f=function(e){function t(t,n){var a=e.call(this,r.REFERENCE,n)||this;return a.referenceType=t,a}return u(t,e),t}(p),l=function(e){function t(t){return e.call(this,r.TEXT,t)||this}return u(t,e),t}(p),s=function(e){function t(t,n){var a=e.call(this,r.VALUE,n)||this;return a.valueType=t,a}return u(t,e),t}(p),c=function(){function e(e){this._partials=e}return e.prototype.partials=function(){return this._partials},e.prototype.references=function(){return this._partials.filter((function(e){return e.type===r.REFERENCE}))},e}(),T=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),A=function(e){function t(t){return e.call(this,a.BUFF,t)||this}return T(t,e),t}(f);function E(e){var t=e.match(/[A-Z]*[a-z0-9]*/g);return t&&t.length?t.filter((function(e){return e.length>0})).map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" "):e}var d=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),y=function(e){function t(t){return e.call(this,a.TRAIT,t)||this}return d(t,e),t}(f),D=n(11),b=[{up:D.b.BuffType.ADD_MAXHP,down:D.b.BuffType.SUB_MAXHP,description:"Max HP"},{up:D.b.BuffType.UP_ATK,down:D.b.BuffType.DOWN_ATK,description:"ATK"},{up:D.b.BuffType.UP_CHAGETD,down:void 0,description:"Overcharge"},{up:D.b.BuffType.UP_COMMANDALL,down:D.b.BuffType.DOWN_COMMANDALL,description:"Card"},{up:D.b.BuffType.UP_COMMANDATK,down:D.b.BuffType.DOWN_COMMANDATK,description:"ATK"},{up:D.b.BuffType.UP_CRITICALDAMAGE,down:D.b.BuffType.DOWN_CRITICALDAMAGE,description:"Critical Damage"},{up:D.b.BuffType.UP_CRITICALPOINT,down:D.b.BuffType.DOWN_CRITICALPOINT,description:"Star Drop Rate"},{up:D.b.BuffType.UP_CRITICALRATE,down:D.b.BuffType.DOWN_CRITICALRATE,description:"Critical Rate"},{up:D.b.BuffType.UP_CRITICAL_RATE_DAMAGE_TAKEN,down:D.b.BuffType.DOWN_CRITICAL_RATE_DAMAGE_TAKEN,description:"Critical Rate Taken"},{up:D.b.BuffType.UP_DAMAGE,down:D.b.BuffType.DOWN_DAMAGE,description:"SP.DMG"},{up:D.b.BuffType.UP_DAMAGEDROPNP,down:D.b.BuffType.DOWN_DAMAGEDROPNP,description:"NP Gain When Damaged"},{up:D.b.BuffType.UP_DEFENCE,down:D.b.BuffType.DOWN_DEFENCE,description:"DEF"},{up:D.b.BuffType.UP_DEFENCECOMMANDALL,down:D.b.BuffType.DOWN_DEFENCECOMMANDALL,description:"Resistance"},{up:D.b.BuffType.UP_DROPNP,down:D.b.BuffType.DOWN_DROPNP,description:"NP Gain"},{up:D.b.BuffType.UP_FUNC_HP_REDUCE,down:D.b.BuffType.DOWN_FUNC_HP_REDUCE,description:"DoT Effectiveness"},{up:D.b.BuffType.UP_GRANT_INSTANTDEATH,down:D.b.BuffType.DOWN_GRANT_INSTANTDEATH,description:"Death Chance"},{up:D.b.BuffType.UP_GRANTSTATE,down:D.b.BuffType.DOWN_GRANTSTATE,description:"Buff Chance"},{up:void 0,down:D.b.BuffType.UP_NONRESIST_INSTANTDEATH,description:"Death Resist"},{up:D.b.BuffType.UP_NPDAMAGE,down:D.b.BuffType.DOWN_NPDAMAGE,description:"NP Damage"},{up:D.b.BuffType.UP_SPECIALDEFENCE,down:D.b.BuffType.DOWN_SPECIALDEFENCE,description:"SP.DEF"},{up:D.b.BuffType.UP_STARWEIGHT,down:D.b.BuffType.DOWN_STARWEIGHT,description:"Star Weight"},{up:D.b.BuffType.UP_TOLERANCE,down:D.b.BuffType.DOWN_TOLERANCE,description:"Debuff Resist"},{up:D.b.BuffType.UP_TOLERANCE_SUBSTATE,down:D.b.BuffType.DOWN_TOLERANCE_SUBSTATE,description:"Buff Removal Resist"}],N=new Map([[3012,"Charm"],[3015,"Burn"],[3026,"Curse"],[3045,"Stun"]]),_=new Map([[D.b.BuffType.AVOID_INSTANTDEATH,"Immune to Death"],[D.b.BuffType.AVOID_STATE,"Immunity"],[D.b.BuffType.ADD_DAMAGE,"Damage Plus"],[D.b.BuffType.ADD_INDIVIDUALITY,"Add Trait"],[D.b.BuffType.AVOIDANCE,"Evade"],[D.b.BuffType.CHANGE_COMMAND_CARD_TYPE,"Change Command Card Types"],[D.b.BuffType.COMMANDCODEATTACK_FUNCTION,"Command Code Effect"],[D.b.BuffType.BREAK_AVOIDANCE,"Sure Hit"],[D.b.BuffType.DELAY_FUNCTION,"Trigger Skill after Duration"],[D.b.BuffType.DONOT_NOBLE,"NP Seal"],[D.b.BuffType.DONOT_NOBLE_COND_MISMATCH,"NP Block if Condition Failed"],[D.b.BuffType.DONOT_RECOVERY,"Recovery Disabled"],[D.b.BuffType.DONOT_SELECT_COMMANDCARD,"Do Not Shuffle In Cards"],[D.b.BuffType.DONOT_SKILL,"Skill Seal"],[D.b.BuffType.FIELD_INDIVIDUALITY,"Change Field Type"],[D.b.BuffType.FIX_COMMANDCARD,"Freeze Command Cards"],[D.b.BuffType.GUTS,"Guts"],[D.b.BuffType.GUTS_FUNCTION,"Trigger Skill on Guts"],[D.b.BuffType.GUTS_RATIO,"Guts"],[D.b.BuffType.INVINCIBLE,"Invincible"],[D.b.BuffType.MULTIATTACK,"Multiple Hits"],[D.b.BuffType.PIERCE_INVINCIBLE,"Ignore Invincible"],[D.b.BuffType.REGAIN_HP,"HP Per Turn"],[D.b.BuffType.REGAIN_NP,"NP Per Turn"],[D.b.BuffType.REGAIN_STAR,"Stars Per Turn"],[D.b.BuffType.SELFTURNEND_FUNCTION,"Trigger Skill every Turn"],[D.b.BuffType.SPECIAL_INVINCIBLE,"Special invincible"],[D.b.BuffType.SUB_SELFDAMAGE,"Damage Cut"],[D.b.BuffType.TD_TYPE_CHANGE,"Change Noble Phantasm"],[D.b.BuffType.TD_TYPE_CHANGE_ARTS,"Set Noble Phantasm: Arts"],[D.b.BuffType.TD_TYPE_CHANGE_BUSTER,"Set Noble Phantasm: Buster"],[D.b.BuffType.TD_TYPE_CHANGE_QUICK,"Set Noble Phantasm: Quick"],[D.b.BuffType.UP_HATE,"Taunt"]]),v=new Map([[D.b.BuffType.ATTACK_FUNCTION,{after:!0,event:"attacks"}],[D.b.BuffType.COMMANDATTACK_FUNCTION,{after:!0,event:"cards"}],[D.b.BuffType.COMMANDATTACK_BEFORE_FUNCTION,{after:!1,event:"cards"}],[D.b.BuffType.DAMAGE_FUNCTION,{after:!0,when:"receiving",event:"attacks"}],[D.b.BuffType.DEAD_FUNCTION,{after:!0,event:"death"}],[D.b.BuffType.NPATTACK_PREV_BUFF,{after:!0,event:"NP"}]]);function C(e){for(var t in b)if(b[t].up===e||b[t].down===e)return b[t]}function h(e,t){var n=[],r=O(e),a=O(t);return r.length&&(n.push(new o(" for ")),n.push.apply(n,r)),a.length&&(n.push(new o(" vs. ")),n.push.apply(n,a)),n}function O(e){return function(e,t){for(var n=[],r=0;r<e.length;r++)r>0&&n.push(new o(t)),n.push(e[r]);return n}(e.map((function(e){return new y(e)}))," & ")}var B=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),U=function(e){function t(t){return e.call(this,a.CARD,t)||this}return B(t,e),t}(f),w=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),L=function(e){function t(t){return e.call(this,a.SKILL,t)||this}return w(t,e),t}(f),I=n(68),P=new Map([[D.b.BuffType.UP_ATK,{value:I.DataValField.VALUE,power:1}],[D.b.BuffType.DOWN_ATK,{value:I.DataValField.VALUE,power:1}],[D.b.BuffType.UP_COMMANDALL,{value:I.DataValField.VALUE,power:1}],[D.b.BuffType.DOWN_COMMANDALL,{value:I.DataValField.VALUE,power:1}],[D.b.BuffType.UP_CRITICALDAMAGE,{value:I.DataValField.VALUE,power:1}],[D.b.BuffType.DOWN_CRITICALDAMAGE,{value:I.DataValField.VALUE,power:1}],[D.b.BuffType.UP_CRITICALPOINT,{value:I.DataValField.VALUE,power:1}],[D.b.BuffType.DOWN_CRITICALPOINT,{value:I.DataValField.VALUE,power:1}],[D.b.BuffType.UP_CRITICALRATE,{value:I.DataValField.VALUE,power:1}],[D.b.BuffType.DOWN_CRITICALRATE,{value:I.DataValField.VALUE,power:1}],[D.b.BuffType.UP_CRITICAL_RATE_DAMAGE_TAKEN,{value:I.DataValField.VALUE,power:1}],[D.b.BuffType.DOWN_CRITICAL_RATE_DAMAGE_TAKEN,{value:I.DataValField.VALUE,power:1}],[D.b.BuffType.UP_DAMAGE,{value:I.DataValField.VALUE,power:1}],[D.b.BuffType.DOWN_DAMAGE,{value:I.DataValField.VALUE,power:1}],[D.b.BuffType.UP_DAMAGEDROPNP,{value:I.DataValField.VALUE,power:1}],[D.b.BuffType.DOWN_DAMAGEDROPNP,{value:I.DataValField.VALUE,power:1}],[D.b.BuffType.UP_DEFENCE,{value:I.DataValField.VALUE,power:1}],[D.b.BuffType.DOWN_DEFENCE,{value:I.DataValField.VALUE,power:1}],[D.b.BuffType.UP_DEFENCECOMMANDALL,{value:I.DataValField.VALUE,power:1}],[D.b.BuffType.DOWN_DEFENCECOMMANDALL,{value:I.DataValField.VALUE,power:1}],[D.b.BuffType.UP_DROPNP,{value:I.DataValField.VALUE,power:1}],[D.b.BuffType.DOWN_DROPNP,{value:I.DataValField.VALUE,power:1}],[D.b.BuffType.UP_FUNC_HP_REDUCE,{value:I.DataValField.VALUE,power:1}],[D.b.BuffType.DOWN_FUNC_HP_REDUCE,{value:I.DataValField.VALUE,power:1}],[D.b.BuffType.UP_HATE,{value:I.DataValField.VALUE,power:1}],[D.b.BuffType.UP_NONRESIST_INSTANTDEATH,{value:I.DataValField.VALUE,power:1}],[D.b.BuffType.UP_NPDAMAGE,{value:I.DataValField.VALUE,power:1}],[D.b.BuffType.DOWN_NPDAMAGE,{value:I.DataValField.VALUE,power:1}],[D.b.BuffType.UP_SPECIALDEFENCE,{value:I.DataValField.VALUE,power:1}],[D.b.BuffType.DOWN_SPECIALDEFENCE,{value:I.DataValField.VALUE,power:1}],[D.b.BuffType.UP_STARWEIGHT,{value:I.DataValField.VALUE,power:1}],[D.b.BuffType.DOWN_STARWEIGHT,{value:I.DataValField.VALUE,power:1}],[D.b.BuffType.UP_TOLERANCE,{value:I.DataValField.VALUE,power:1}],[D.b.BuffType.DOWN_TOLERANCE,{value:I.DataValField.VALUE,power:1}],[D.b.BuffType.UP_TOLERANCE_SUBSTATE,{value:I.DataValField.VALUE,power:1}],[D.b.BuffType.DOWN_TOLERANCE_SUBSTATE,{value:I.DataValField.VALUE,power:1}],[D.b.BuffType.GUTS_RATIO,{value:I.DataValField.VALUE,power:1}],[D.b.BuffType.REGAIN_NP,{value:I.DataValField.VALUE,power:2}]]),V=new Map([[D.b.BuffType.ATTACK_FUNCTION,{skill:I.DataValField.VALUE,level:I.DataValField.VALUE2}],[D.b.BuffType.COMMANDATTACK_FUNCTION,{skill:I.DataValField.VALUE,level:I.DataValField.VALUE2}],[D.b.BuffType.COMMANDATTACK_BEFORE_FUNCTION,{skill:I.DataValField.VALUE,level:I.DataValField.VALUE2}],[D.b.BuffType.DAMAGE_FUNCTION,{skill:I.DataValField.VALUE,level:I.DataValField.VALUE2}],[D.b.BuffType.DEAD_FUNCTION,{skill:I.DataValField.VALUE,level:I.DataValField.VALUE2}],[D.b.BuffType.DELAY_FUNCTION,{skill:I.DataValField.VALUE,level:I.DataValField.VALUE2}],[D.b.BuffType.NPATTACK_PREV_BUFF,{skill:I.DataValField.SKILL_ID,level:I.DataValField.SKILL_LV,position:I.DataValField.VALUE}],[D.b.BuffType.SELFTURNEND_FUNCTION,{skill:I.DataValField.VALUE,level:I.DataValField.VALUE2,rate:I.DataValField.USE_RATE}]]),R=new Map([[D.b.BuffType.FIELD_INDIVIDUALITY,{trait:I.DataValField.VALUE}]]),F=new Map([[D.b.BuffType.CHANGE_COMMAND_CARD_TYPE,{card:I.DataValField.VALUE}]]);function g(e,t,n,r){var a=[],i=e[t];"number"===typeof i&&a.push(new s(n,i/r));var u=e.RatioHPLow;return void 0!==u&&(a.length&&a.push(new o(" + ")),a.push(new o("(")),a.push(new s(n,u/r)),a.push(new o(" Scales by Low HP)"))),a.length>0?new c(a):void 0}var S={describe:function(e){var t=[],n=C(e.type),r=v.get(e.type),a=function(e){var t=e.vals.map((function(e){return e.id}));for(var n in t){var r=t[n],a=N.get(r);if(void 0!==a)return a}}(e),i=_.get(e.type);return n?(n.up===e.type?t.push(new l(n.description+" Up")):t.push(new l(n.description+" Down")),t.push.apply(t,h(e.ckSelfIndv,e.ckOpIndv))):i?(t.push(new l(i)),t.push.apply(t,h(e.ckSelfIndv,e.ckOpIndv))):a?(t.push(new l(a)),t.push.apply(t,h(e.ckSelfIndv,e.ckOpIndv))):r?(t.push(new l("Trigger Skills")),t.push(new o(r.after?" on ":" before ")),r.when&&(t.push(new l(r.when)),t.push(new o(" "))),e.ckSelfIndv.length&&(t.push.apply(t,O(e.ckSelfIndv)),t.push(new o(" "))),t.push(new l(r.event)),t.push.apply(t,h([],e.ckOpIndv))):e.name?t.push(new l(e.name)):t.push(new l(E(e.type))),new c(t)},describeType:function(e){var t=C(e),n=v.get(e),r=_.get(e);return t?t.up===e?t.description+" Up":t.description+" Down":r||(n?"Trigger Skills "+(n.after?"on ":"before ")+(n.when?n.when+" ":"")+n.event:E(e))},describeValue:function(e,t){var n=P.get(e.type);if(n)return g(null!==t&&void 0!==t?t:{},n.value,i.PERCENT,Math.pow(10,n.power));var r=V.get(e.type);if(r)return function(e,t){var n=[],r=e[t.skill],a=e[t.level],u=(t.position&&e[t.position],t.rate?e[t.rate]:void 0);"number"===typeof r&&(n.length&&n.push(new o(" + ")),n.push(new L(r)));"number"===typeof a&&(n.length&&n.push(new o(" + ")),n.push(new l("Lv. ")),n.push(new s(i.UNKNOWN,a)));"number"===typeof u&&(n.length&&n.push(new o(" + ")),n.push(new l("Chance: ")),n.push(new s(i.PERCENT,u/10)));return n.length>0?new c(n):void 0}(null!==t&&void 0!==t?t:{},r);var a=R.get(e.type);if(a)return function(e,t){var n=[],r=e[t.trait];"number"===typeof r&&n.push(new y(r));return n.length>0?new c(n):void 0}(null!==t&&void 0!==t?t:{},a);var u=F.get(e.type);return u?function(e,t){var n=[],r=e[t.card];"number"===typeof r&&n.push(new U(r));return n.length>0?new c(n):void 0}(null!==t&&void 0!==t?t:{},u):g(null!==t&&void 0!==t?t:{},D.e.DataValField.VALUE,i.NUMBER,1)},BuffReferencePartial:A},k=new Map([[1,D.c.NONE],[2,D.c.BUSTER],[3,D.c.ARTS],[4,D.c.QUICK],[5,D.c.EXTRA]]),m={describe:function(e){var t=[],n="number"===typeof e?k.get(e):e;return n?t.push(new l(E(n))):"number"===typeof e?t.push(new s(i.UNKNOWN,e)):t.push(new l(E(e))),new c(t)},CardReferencePartial:U},M=new Map([[1,"Gender:Male"],[2,"Gender:Female"],[3,"Gender:Unknown"],[100,"Class:Saber"],[101,"Class:Lancer"],[102,"Class:Archer"],[103,"Class:Rider"],[104,"Class:Caster"],[105,"Class:Assassin"],[106,"Class:Berserker"],[107,"Class:Shielder"],[108,"Class:Ruler"],[109,"Class:Alter Ego"],[110,"Class:Avenger"],[111,"Demon Pillar"],[112,"Class:Grand Caster"],[113,"Beast I"],[114,"Beast II"],[115,"Class:Moon Cancer"],[116,"Beast IIIR"],[117,"Class:Foreigner"],[118,"Beast IIIL"],[119,"Beast Unknown"],[200,"Attribute:Sky"],[201,"Attribute:Earth"],[202,"Attribute:Human"],[203,"Attribute:Star"],[204,"Attribute:Beast"],[300,"Alignment:Lawful"],[301,"Alignment:Chaotic"],[302,"Alignment:Neutral"],[303,"Alignment:Good"],[304,"Alignment:Evil"],[305,"Alignment:Balanced"],[306,"Alignment:Madness"],[308,"Alignment:Summer"],[2386,"Kingprotea:Proliferation"],[2387,"Kingprotea:Growth"],[2664,"Kingprotea:Proliferation NP Defense"],[3005,"Buff:Debuff"],[3006,"Buff:Offensive"],[3007,"Buff:Defensive"],[3011,"Poison"],[3012,"Charm"],[3015,"Burn"],[3021,"Evade"],[3026,"Curse"],[3047,"Pigify"],[4001,"Card:Arts"],[4002,"Card:Buster"],[4003,"Card:Quick"],[4004,"Card:Extra"],[4008,"Player Card"],[4100,"Critical Hit"]]),G={describe:function(e){var t="number"===typeof e?e:e.id,n=M.get(t);if(void 0!==n)return new c([new l(n)]);var r="number"===typeof e?"unknown":e.name;return new c("unknown"!==r?[new l(E(r))]:[new o("unknown("),new s(i.UNKNOWN,t),new o(")")])},TraitReferencePartial:y}},177:function(e,t,n){"use strict";var r=n(12),a=n(13),i=n(23),u=n(22),p=n(0),o=n.n(p),f=n(14),l=n(153),s=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return o.a.createElement(f.b,{to:"/".concat(this.props.region,"/skill/").concat(this.props.skill.id)},this.props.skill.icon?o.a.createElement(l.a,{location:this.props.skill.icon,height:this.props.iconHeight}):void 0,this.props.skill.icon?" ":void 0,"[",this.props.skill.name?this.props.skill.name:"Skill: ".concat(this.props.skill.id),"]")}}],[{key:"renderAsString",value:function(e){var t=e.name?e.name:"Skill: ".concat(e.id);return"[".concat(t,"]")}}]),n}(o.a.Component);t.a=s},178:function(e,t,n){"use strict";var r=n(20),a=n.n(r),i=n(34),u=n(12),p=n(13),o=n(23),f=n(22),l=n(0),s=n.n(l),c=n(14),T=n(49),A=n(177),E=function(e){Object(o.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={},r}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=this,e.next=4,T.a.skill(this.props.id);case 4:e.t1=e.sent,e.t2={skill:e.t1},e.t0.setState.call(e.t0,e.t2),e.next=11;break;case 9:e.prev=9,e.t3=e.catch(0);case 11:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e="/".concat(this.props.region,"/skill/").concat(this.props.id);return void 0===this.state.skill?s.a.createElement(c.b,{to:e},"[Skill: ",this.props.id,"]"):s.a.createElement(A.a,{region:this.props.region,skill:this.state.skill})}}],[{key:"renderAsString",value:function(e){return"[Skill: ".concat(e,"]")}}]),n}(s.a.Component);t.a=E},188:function(e,t,n){"use strict";var r=n(12),a=n(13),i=n(23),u=n(22),p=n(167),o=n(0),f=n.n(o),l=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var e=p.b.describe(this.props.card);return f.a.createElement("span",null,"[",f.a.createElement(E,{region:this.props.region,descriptor:e}),"]")}}],[{key:"renderAsString",value:function(e){var t=p.b.describe(e);return"["+E.renderAsString(t)+"]"}}]),n}(f.a.Component),s=n(177),c=n(178),T=n(154),A=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"renderReference",value:function(e,t){return e.referenceType===p.d.CARD?f.a.createElement(l,{key:t,region:this.props.region,card:e.value}):e.referenceType===p.d.SKILL?"number"===typeof e.value?f.a.createElement(c.a,{key:t,region:this.props.region,id:e.value}):f.a.createElement(s.a,{key:t,region:this.props.region,skill:e.value}):e.referenceType===p.d.TRAIT?f.a.createElement(T.a,{key:t,region:this.props.region,trait:e.value}):e.value.toString()}},{key:"render",value:function(){for(var e=this.props.descriptor.partials(),t=[],r=0;r<e.length;r++){var a=e[r];a.type===p.c.PARTICLE?t.push(n.renderParticle(a)):a.type===p.c.REFERENCE?t.push(this.renderReference(a,r)):a.type===p.c.TEXT?t.push(n.renderText(a)):a.type===p.c.VALUE?t.push(n.renderValue(a)):t.push(a.value.toString())}return f.a.createElement(f.a.Fragment,null,t)}}],[{key:"renderParticle",value:function(e){return e.value}},{key:"renderReferenceAsString",value:function(e){return e.referenceType===p.d.CARD?l.renderAsString(e.value):e.referenceType===p.d.SKILL?"number"===typeof e.value?c.a.renderAsString(e.value):s.a.renderAsString(e.value):e.referenceType===p.d.TRAIT?T.a.renderAsString(e.value):e.value.toString()}},{key:"renderText",value:function(e){return e.value}},{key:"renderValue",value:function(e){return e.valueType===p.f.PERCENT?e.value.toString()+"%":e.value.toString()}},{key:"renderAsString",value:function(e){for(var t=e.partials(),r=[],a=0;a<t.length;a++){var i=t[a];i.type===p.c.PARTICLE?r.push(n.renderParticle(i)):i.type===p.c.REFERENCE?r.push(n.renderReferenceAsString(i)):i.type===p.c.TEXT?r.push(n.renderText(i)):i.type===p.c.VALUE?r.push(n.renderValue(i)):r.push(i.value.toString())}return r.join("")}}]),n}(f.a.Component),E=t.a=A}}]);
//# sourceMappingURL=0.95dcaf21.chunk.js.map