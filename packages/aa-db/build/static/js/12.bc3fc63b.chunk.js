(this["webpackJsonpaa-db"]=this["webpackJsonpaa-db"]||[]).push([[12],{138:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t){if("string"===typeof e)return i(parseInt(e),t);var n=(null!==e&&void 0!==e?e:0)/Math.pow(10,t);return"".concat(n,"%")}function s(e){return String(e).replace(/(.)(?=(\d{3})+$)/g,"$1,")}function c(e){return e?a.a.createElement("span",null,u(e.split("\n"),a.a.createElement("br",null))):""}function o(e,t){var n=[],r=function(e){if(void 0!==e)if("object"!==typeof e)if(0!==n.length){var t=n[n.length-1];"string"===typeof t?n[n.length-1]=t+e.toString():n.push(e.toString())}else n.push(e.toString());else n.push(e)};return e.forEach((function(e,n){n>0&&r(t),r(e)})),n}function u(e,t){return a.a.createElement(a.a.Fragment,null,o(e,t).map((function(e,t){return a.a.createElement(a.a.Fragment,{key:t},e)})))}},143:function(e,t,n){"use strict";n.d(t,"b",(function(){return d}));var r=n(20),a=n.n(r),i=n(34),s=n(12),c=n(13),o=n(23),u=n(22),l=n(0),p=n.n(l),f=n(14),h=n(49),d=new Map([[1,"Gender:Male"],[2,"Gender:Female"],[3,"Gender:Unknown"],[100,"Class:Saber"],[101,"Class:Lancer"],[102,"Class:Archer"],[103,"Class:Rider"],[104,"Class:Caster"],[105,"Class:Assassin"],[106,"Class:Berserker"],[107,"Class:Shielder"],[108,"Class:Ruler"],[109,"Class:Alter Ego"],[110,"Class:Avenger"],[111,"Demon Pillar"],[112,"Class:Grand Caster"],[113,"Beast I"],[114,"Beast II"],[115,"Class:Moon Cancer"],[116,"Beast IIIR"],[117,"Class:Foreigner"],[118,"Beast IIIL"],[119,"Beast Unknown"],[200,"Attribute:Sky"],[201,"Attribute:Earth"],[202,"Attribute:Human"],[203,"Attribute:Star"],[204,"Attribute:Beast"],[300,"Alignment:Lawful"],[301,"Alignment:Chaotic"],[302,"Alignment:Neutral"],[303,"Alignment:Good"],[304,"Alignment:Evil"],[305,"Alignment:Balanced"],[306,"Alignment:Madness"],[308,"Alignment:Summer"],[1e3,"Servant"],[1002,"Undead"],[1122,"Shadow Servant"],[1172,"Threats against Humanity"],[2004,"Roman"],[2005,"Beasts"],[2019,"Demonic"],[2039,"Near Water"],[2386,"Kingprotea: Proliferation"],[2387,"Kingprotea: Growth"],[2466,"Argonaut"],[2654,"Pseudo-Servant"],[2664,"Kingprotea: Proliferation NP Defense"],[3004,"Buff"],[3005,"Debuff"],[3006,"Buff:Offensive"],[3007,"Buff:Defensive"],[3011,"Poison"],[3012,"Charm"],[3015,"Burn"],[3021,"Evade"],[3026,"Curse"],[3047,"Pigify"],[4001,"Card:Arts"],[4002,"Card:Buster"],[4003,"Card:Quick"],[4004,"Card:Extra"],[4008,"Player Card"],[4100,"Critical Hit"]]),E=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={id:"number"===typeof e.trait?e.trait:e.trait.id,trait:"number"===typeof e.trait?void 0:e.trait},r}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(a.a.mark((function e(){var t,n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.trait){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,h.a.traitList();case 4:t=e.sent,n=0;case 6:if(!(n<t.length)){e.next=14;break}if((r=t[n]).id!==this.state.id){e.next=11;break}return this.setState({trait:r}),e.abrupt("return");case 11:n++,e.next=6;break;case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getDescription",value:function(){return d.get(this.state.id)||(this.state.trait&&"unknown"!==this.state.trait.name?this.state.trait.name:"unknown(".concat(this.state.id,")"))}},{key:"getLocation",value:function(){return"/".concat(this.props.region,"/entities/trait/").concat(this.state.id)}},{key:"render",value:function(){return this.props.disableLink?p.a.createElement("span",null,"[",this.getDescription(),"]"):p.a.createElement(f.b,{to:this.getLocation()},"[",this.getDescription(),"]")}}]),n}(p.a.Component);t.a=E},145:function(e,t,n){"use strict";var r=n(12),a=n(13),i=n(23),s=n(22),c=n(0),o=n.n(c),u=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var e;return o.a.createElement("img",{alt:"",src:this.props.location,style:{height:null!==(e=this.props.height)&&void 0!==e?e:25,verticalAlign:"bottom"}})}}]),n}(o.a.Component);t.a=u},150:function(e,t,n){"use strict";var r=n(20),a=n.n(r),i=n(34),s=n(12),c=n(13),o=n(23),u=n(22),l=n(59),p=n(35),f=n(0),h=n.n(f),d=n(165),E=(n(151),function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={ref:h.a.createRef(),selected:e.selected,focused:!1,results:!1},r}return Object(c.a)(n,[{key:"clearSelection",value:function(){var e=Object(i.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({selected:void 0,results:!0});case 2:this.state.ref.current.clear();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getDescription",value:function(e){if(void 0===e)return"All";var t=this.props.labels.get(e);return this.props.disableLabelStyling?t||("string"===typeof e?e:"Unknown"):t?"".concat(t," - ").concat(e):"(".concat(e,")")}},{key:"getOption",value:function(e){return{label:this.getDescription(e),value:e}}},{key:"getOptions",value:function(){var e=this;return(this.props.hideAll?[]:[this.getOption()]).concat(this.props.options.map((function(t){return e.getOption(t)})))}},{key:"resetInput",value:function(){this.setState({focused:!1,results:!1})}},{key:"selectOption",value:function(){var e=Object(i.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=4;break}this.setState({results:!1}),e.next=8;break;case 4:return n=t[0].value,e.next=7,this.setState({selected:n,results:!0});case 7:this.props.onChange(n);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this;return h.a.createElement(d.a,{ref:this.state.ref,id:this.props.id,options:this.getOptions(),placeholder:this.getDescription(this.state.selected),selected:this.state.focused&&this.state.results?[this.getOption(this.state.selected)]:[],ignoreDiacritics:!0,maxResults:null!==(e=this.props.maxResults)&&void 0!==e?e:1e3,onBlur:function(){t.resetInput()},onChange:function(e){t.selectOption(e)},onFocus:function(){t.setState({focused:!0})}},this.props.hideReset?null:h.a.createElement("button",{className:"searchable-select-clear",onClick:function(e){e.preventDefault(),t.clearSelection()},onMouseDown:function(e){e.preventDefault()}},h.a.createElement(p.a,{icon:l.e})))}}]),n}(h.a.Component));t.a=E},151:function(e,t,n){},153:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return i}))},158:function(e,t,n){"use strict";n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return g}));var r=n(12),a=n(13),i=n(23),s=n(22),c=n(11),o=n(0),u=n.n(o),l=n(14),p=n(145),f=n(138),h=n(143),d=[{up:c.c.ADD_MAXHP,down:c.c.SUB_MAXHP,description:"Max HP"},{up:c.c.UP_ATK,down:c.c.DOWN_ATK,description:"ATK"},{up:c.c.UP_CHAGETD,down:void 0,description:"Overcharge"},{up:c.c.UP_COMMANDATK,down:c.c.DOWN_COMMANDATK,description:"ATK"},{up:c.c.UP_CRITICALDAMAGE,down:c.c.DOWN_CRITICALDAMAGE,description:"Critical Damage"},{up:c.c.UP_CRITICALPOINT,down:c.c.DOWN_CRITICALPOINT,description:"Star Drop Rate"},{up:c.c.UP_CRITICALRATE,down:c.c.DOWN_CRITICALRATE,description:"Critical Rate"},{up:c.c.UP_CRITICAL_RATE_DAMAGE_TAKEN,down:c.c.DOWN_CRITICAL_RATE_DAMAGE_TAKEN,description:"Critical Rate Taken"},{up:c.c.UP_DAMAGE,down:c.c.DOWN_DAMAGE,description:"SP.DMG"},{up:c.c.UP_DAMAGEDROPNP,down:c.c.DOWN_DAMAGEDROPNP,description:"NP Gain When Damaged"},{up:c.c.UP_DEFENCE,down:c.c.DOWN_DEFENCE,description:"DEF"},{up:c.c.UP_DEFENCECOMMANDALL,down:c.c.DOWN_DEFENCECOMMANDALL,description:"Resistance"},{up:c.c.UP_DROPNP,down:c.c.DOWN_DROPNP,description:"NP Gain"},{up:c.c.UP_FUNC_HP_REDUCE,down:c.c.DOWN_FUNC_HP_REDUCE,description:"DoT Effectiveness"},{up:c.c.UP_GRANT_INSTANTDEATH,down:c.c.DOWN_GRANT_INSTANTDEATH,description:"Death Chance"},{up:c.c.UP_GRANTSTATE,down:c.c.DOWN_GRANTSTATE,description:"Buff Chance"},{up:void 0,down:c.c.UP_NONRESIST_INSTANTDEATH,description:"Death Resist"},{up:c.c.UP_NPDAMAGE,down:c.c.DOWN_NPDAMAGE,description:"NP Damage"},{up:c.c.UP_SPECIALDEFENCE,down:c.c.DOWN_SPECIALDEFENCE,description:"SP.DEF"},{up:c.c.UP_STARWEIGHT,down:c.c.DOWN_STARWEIGHT,description:"Star Weight"},{up:c.c.UP_TOLERANCE,down:c.c.DOWN_TOLERANCE,description:"Debuff Resist"},{up:c.c.UP_TOLERANCE_SUBSTATE,down:c.c.DOWN_TOLERANCE_SUBSTATE,description:"Buff Removal Resist"}],E=new Map([[3012,"Charm"],[3015,"Burn"],[3026,"Curse"],[3045,"Stun"]]),g=new Map([[c.c.AVOID_INSTANTDEATH,"Immune to Death"],[c.c.AVOID_STATE,"Immunity"],[c.c.ADD_DAMAGE,"Damage Plus"],[c.c.ADD_INDIVIDUALITY,"Add Trait"],[c.c.AVOIDANCE,"Evade"],[c.c.CHANGE_COMMAND_CARD_TYPE,"Change Command Card Types"],[c.c.COMMANDCODEATTACK_FUNCTION,"Command Code Effect"],[c.c.BREAK_AVOIDANCE,"Sure Hit"],[c.c.DELAY_FUNCTION,"Trigger Skill after Duration"],[c.c.DONOT_NOBLE,"NP Seal"],[c.c.DONOT_NOBLE_COND_MISMATCH,"NP Block if Condition Failed"],[c.c.DONOT_RECOVERY,"Recovery Disabled"],[c.c.DONOT_SELECT_COMMANDCARD,"Do Not Shuffle In Cards"],[c.c.DONOT_SKILL,"Skill Seal"],[c.c.FIELD_INDIVIDUALITY,"Change Field Type"],[c.c.FIX_COMMANDCARD,"Freeze Command Cards"],[c.c.GUTS,"Guts"],[c.c.GUTS_FUNCTION,"Trigger Skill on Guts"],[c.c.INVINCIBLE,"Invincible"],[c.c.MULTIATTACK,"Multiple Hits"],[c.c.PIERCE_INVINCIBLE,"Ignore Invincible"],[c.c.REGAIN_HP,"HP Per Turn"],[c.c.REGAIN_NP,"NP Per Turn"],[c.c.REGAIN_STAR,"Stars Per Turn"],[c.c.SELFTURNEND_FUNCTION,"Trigger Skill every Turn"],[c.c.SPECIAL_INVINCIBLE,"Special invincible"],[c.c.SUB_SELFDAMAGE,"Damage Cut"],[c.c.TD_TYPE_CHANGE,"Change Noble Phantasm"],[c.c.TD_TYPE_CHANGE_ARTS,"Set Noble Phantasm: Arts"],[c.c.TD_TYPE_CHANGE_BUSTER,"Set Noble Phantasm: Buster"],[c.c.TD_TYPE_CHANGE_QUICK,"Set Noble Phantasm: Quick"],[c.c.UP_HATE,"Taunt"]]),A=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"getTraitFilterAppend",value:function(){if(this.getTraitFilters())return u.a.createElement(u.a.Fragment,null," for ",this.getTraitFilters())}},{key:"getTraitFilterAppendWithoutCards",value:function(){var e=this,t=this.props.buff.ckSelfIndv.filter((function(e){return-1===[4001,4002,4003,4004].indexOf(e.id)}));if(t.length)return u.a.createElement(u.a.Fragment,null," ","for"," ",Object(f.d)(t.map((function(t){return u.a.createElement(h.a,{region:e.props.region,trait:t})}))," & "))}},{key:"getCommandCardTypes",value:function(){var e=[];return this.hasApplicableTrait(4001)&&e.push("Arts"),this.hasApplicableTrait(4002)&&e.push("Buster"),this.hasApplicableTrait(4003)&&e.push("Quick"),this.hasApplicableTrait(4004)&&e.push("Extra"),e.length||e.push("Command Card"),e.join(" & ")}},{key:"getEffectiveTargetsDescriptions",value:function(){var e=this,t=this.props.buff;if(t.ckOpIndv.length)return u.a.createElement(u.a.Fragment,null," vs. ",Object(f.d)(t.ckOpIndv.map((function(t){return u.a.createElement(h.a,{region:e.props.region,trait:t})}))," & ").map((function(e,t){return u.a.createElement(u.a.Fragment,{key:t},e)})))}},{key:"getTraitDescription",value:function(){var e=this.props.buff.vals.map((function(e){return e.id}));for(var t in e){var n=e[t],r=E.get(n);if(void 0!==r)return r}return""}},{key:"getTraitFilters",value:function(){var e=this;if(this.props.buff.ckSelfIndv.length)return u.a.createElement(u.a.Fragment,null,Object(f.e)(this.props.buff.ckSelfIndv.map((function(t){return u.a.createElement(h.a,{region:e.props.region,trait:t})}))," & "))}},{key:"getTypeDescription",value:function(){var e,t=this.props.buff.type;return null!==(e=g.get(t))&&void 0!==e?e:""}},{key:"getUpDownDescription",value:function(){var e=this.props.buff.type;for(var t in d){if(d[t].up===e)return"".concat(d[t].description," Up");if(d[t].down===e)return"".concat(d[t].description," Down")}return""}},{key:"hasApplicableTrait",value:function(e){return this.props.buff.ckSelfIndv.filter((function(t){return t.id===e})).length>0}},{key:"hasTraitDescription",value:function(){var e=this.props.buff.vals.map((function(e){return e.id}));for(var t in e){var n=e[t];if(void 0!==E.get(n))return!0}return!1}},{key:"hasTypeDescription",value:function(){var e=this.props.buff;return g.has(e.type)}},{key:"isUpDownBuff",value:function(){var e=this.props.buff.type;for(var t in d)if(d[t].up===e||d[t].down===e)return!0;return!1}},{key:"render",value:function(){var e=this.props.buff,t=e.name;return this.isUpDownBuff()?t=u.a.createElement(u.a.Fragment,null,this.getUpDownDescription(),this.getTraitFilterAppend()):e.type===c.c.UP_COMMANDALL?t=u.a.createElement(u.a.Fragment,null,this.getCommandCardTypes()," Up",this.getTraitFilterAppendWithoutCards()):e.type===c.c.DOWN_COMMANDALL?t=u.a.createElement(u.a.Fragment,null,this.getCommandCardTypes()," Down",this.getTraitFilterAppendWithoutCards()):e.type===c.c.ATTACK_FUNCTION?t=u.a.createElement(u.a.Fragment,null,"Trigger Skill on ",this.getTraitFilters()," attacks"):e.type===c.c.COMMANDATTACK_FUNCTION?t=u.a.createElement(u.a.Fragment,null,"Trigger Skill on ",this.getTraitFilters()," cards"):e.type===c.c.COMMANDATTACK_BEFORE_FUNCTION?t=u.a.createElement(u.a.Fragment,null,"Trigger Skill before ",this.getTraitFilters()," cards"):e.type===c.c.DAMAGE_FUNCTION?t=u.a.createElement(u.a.Fragment,null,"Trigger Skill on receiving ",this.getTraitFilters()," attacks"):e.type===c.c.DEAD_FUNCTION?t=u.a.createElement(u.a.Fragment,null,"Trigger Skill on death",this.getTraitFilterAppend()):e.type===c.c.NPATTACK_PREV_BUFF?t=u.a.createElement(u.a.Fragment,null,"Trigger Skill on ",this.getTraitFilters()," NP"):this.hasTypeDescription()?t=u.a.createElement(u.a.Fragment,null,this.getTypeDescription(),this.getTraitFilterAppend()):this.hasTraitDescription()&&(t=u.a.createElement(u.a.Fragment,null,this.getTraitDescription(),this.getTraitFilterAppend())),u.a.createElement(l.b,{to:"/".concat(this.props.region,"/buff/").concat(e.id)},"[",e.icon?u.a.createElement(p.a,{location:e.icon}):void 0,e.icon?" ":void 0,t,this.getEffectiveTargetsDescriptions(),"]")}}]),n}(u.a.Component);t.a=A},167:function(e,t,n){"use strict";var r=n(1),a=n(3),i=n(4),s=n.n(i),c=n(0),o=n.n(c),u=n(5),l=o.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,c=e.striped,l=e.bordered,p=e.borderless,f=e.hover,h=e.size,d=e.variant,E=e.responsive,g=Object(a.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),A=Object(u.b)(n,"table"),m=s()(i,A,d&&A+"-"+d,h&&A+"-"+h,c&&A+"-striped",l&&A+"-bordered",p&&A+"-borderless",f&&A+"-hover"),v=o.a.createElement("table",Object(r.a)({},g,{className:m,ref:t}));if(E){var T=A+"-responsive";return"string"===typeof E&&(T=T+"-"+E),o.a.createElement("div",{className:T},v)}return v}));t.a=l},266:function(e,t,n){"use strict";n.r(t);var r=n(20),a=n.n(r),i=n(34),s=n(153),c=n(12),o=n(13),u=n(23),l=n(22),p=n(11),f=n(59),h=n(35),d=n(0),E=n.n(d),g=n(136),A=n(134),m=n(167),v=n(49),T=n(60),D=n(10),C=n(150),b=n(158),N=n(6),O=new Map([]),_=new Map;Object.values(p.c).forEach((function(e){var t;for(var n in b.c)b.c[n].up===e&&(t=b.c[n].description+" Up"),b.c[n].down===e&&(t=b.c[n].description+" Down");void 0===t&&(t=b.b.get(e)),void 0!==t&&_.set(e,t)}));var y=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r,a;return Object(c.a)(this,n),(a=t.call(this,e)).state=null!==(r=O.get(e.region))&&void 0!==r?r:{searching:!1,buffs:[]},N.a.setRegion(a.props.region),a}return Object(o.a)(n,[{key:"componentDidUpdate",value:function(){O.set(this.props.region,Object(s.a)({},this.state))}},{key:"search",value:function(){var e=Object(i.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.name||this.state.type){e.next=4;break}return this.setState({buffs:[]}),alert("Please refine the results before searching"),e.abrupt("return");case 4:return e.prev=4,e.next=7,this.setState({searching:!0,buffs:[]});case 7:return e.next=9,v.a.searchBuffs(this.state.name,this.state.type);case 9:t=e.sent,this.setState({searching:!1,buffs:t}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),this.setState({error:e.t0});case 16:case"end":return e.stop()}}),e,this,[[4,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this;return this.state.error?E.a.createElement(T.a,{error:this.state.error}):E.a.createElement("div",null,this.state.searching?E.a.createElement(D.a,null):null,E.a.createElement("h1",null,"Buffs Search"),E.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t.search()}},E.a.createElement(g.a.Group,null,E.a.createElement(g.a.Label,null,"Name"),E.a.createElement(g.a.Control,{value:null!==(e=this.state.name)&&void 0!==e?e:"",onChange:function(e){t.setState({name:e.target.value})}})),E.a.createElement(g.a.Group,null,E.a.createElement(g.a.Label,null,"Type"),E.a.createElement(C.a,{id:"select-BuffType",options:Object.values(p.c),labels:_,selected:this.state.type,onChange:function(e){t.setState({type:e})}})),E.a.createElement(A.a,{variant:"primary",onClick:function(){return t.search()}},"Search"," ",E.a.createElement(h.a,{icon:f.b}))),E.a.createElement("hr",null),E.a.createElement(m.a,{responsive:!0},E.a.createElement("thead",null,E.a.createElement("tr",null,E.a.createElement("th",null,"#"),E.a.createElement("th",null,"Buff"),E.a.createElement("th",null,"Usage Count"))),E.a.createElement("tbody",null,this.state.buffs.map((function(e,n){var r,a,i;return E.a.createElement("tr",{key:n},E.a.createElement("td",null,e.id),E.a.createElement("td",null,E.a.createElement(b.a,{region:t.props.region,buff:e})),E.a.createElement("td",null,(null!==(r=null===(a=e.reverse)||void 0===a||null===(i=a.nice)||void 0===i?void 0:i.function)&&void 0!==r?r:[]).length))})))))}}]),n}(E.a.Component);t.default=y}}]);
//# sourceMappingURL=12.bc3fc63b.chunk.js.map