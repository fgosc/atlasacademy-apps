(this["webpackJsonpaa-db"]=this["webpackJsonpaa-db"]||[]).push([[8],{138:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return l}));var a=n(0),r=n.n(a);function i(e,t){if("string"===typeof e)return i(parseInt(e),t);var n=(null!==e&&void 0!==e?e:0)/Math.pow(10,t);return"".concat(n,"%")}function s(e){return String(e).replace(/(.)(?=(\d{3})+$)/g,"$1,")}function o(e){return e?r.a.createElement("span",null,l(e.split("\n"),r.a.createElement("br",null))):""}function c(e,t){var n=[],a=function(e){if(void 0!==e)if("object"!==typeof e)if(0!==n.length){var t=n[n.length-1];"string"===typeof t?n[n.length-1]=t+e.toString():n.push(e.toString())}else n.push(e.toString());else n.push(e)};return e.forEach((function(e,n){n>0&&a(t),a(e)})),n}function l(e,t){return r.a.createElement(r.a.Fragment,null,c(e,t).map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},e)})))}},139:function(e,t,n){"use strict";var a=n(12),r=n(13),i=n(22),s=n(21),o=n(0),c=n.n(o),l=n(169),u=(n(147),function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,this.props.header?c.a.createElement("div",{className:"data-header"},this.props.header):null,c.a.createElement(l.a,{bordered:!0,hover:!0,className:"data-table"},c.a.createElement("tbody",null,Object.keys(this.props.data).map((function(t,a){return c.a.createElement("tr",{key:a},c.a.createElement("th",null,t),c.a.createElement("td",null,n.dumpValue(e.props.data[t])))})))))}}],[{key:"dumpValue",value:function(e){if("object"===typeof e){var t=e;return void 0!==t.key&&void 0!==t.props&&void 0!==t.type?t:JSON.stringify(e)}return e}}]),n}(c.a.Component));t.a=u},141:function(e,t,n){"use strict";var a=n(12),r=n(13),i=n(22),s=n(21),o=n(0),c=n.n(o),l=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e;return c.a.createElement("img",{alt:"",src:this.props.location,style:{height:null!==(e=this.props.height)&&void 0!==e?e:"2em"}})}}]),n}(c.a.Component);t.a=l},142:function(e,t,n){"use strict";var a=n(26),r=n.n(a),i=n(37),s=n(12),o=n(13),c=n(22),l=n(21),u=n(59),p=n(34),f=n(158),h=n.n(f),d=n(159),E=n.n(d),m=n(0),b=n.n(m),v=n(135),A=n(160),g=n.n(A),T=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={showing:!1},a}return Object(o.a)(n,[{key:"hide",value:function(){this.setState({showing:!1})}},{key:"show",value:function(){var e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.data){e.next=4;break}this.setState({showing:!0}),e.next=20;break;case 4:if("object"!==typeof this.props.data){e.next=8;break}this.setState({showing:!0,data:this.props.data}),e.next=20;break;case 8:return e.prev=8,e.t0=this,e.next=12,h.a.get(this.props.data);case 12:e.t1=e.sent.data,e.t2={showing:!0,data:e.t1},e.t0.setState.call(e.t0,e.t2),e.next=20;break;case 17:e.prev=17,e.t3=e.catch(8),this.setState({showing:!0,data:{error:e.t3}});case 20:case"end":return e.stop()}}),e,this,[[8,17]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return b.a.createElement("div",null,b.a.createElement("span",{className:"text-primary",style:{cursor:"pointer"},onClick:function(){e.show()}},"View \xa0",b.a.createElement(p.a,{icon:u.c})),b.a.createElement(v.a,{size:"lg",show:this.state.showing,onHide:function(){return e.hide()}},b.a.createElement(v.a.Header,{closeButton:!0},b.a.createElement(v.a.Title,null,"Raw Data Viewer")),b.a.createElement(v.a.Body,null,this.state.data?b.a.createElement(g.a,{src:this.state.data,collapsed:1,enableClipboard:function(e){"string"===typeof e.src&&E()(e.src)}}):null)))}}]),n}(b.a.Component);t.a=T},144:function(e,t,n){"use strict";var a=n(26),r=n.n(a),i=n(37),s=n(12),o=n(13),c=n(22),l=n(21),u=n(0),p=n.n(u),f=n(49),h=new Map([[1,"Gender:Male"],[2,"Gender:Female"],[3,"Gender:Unknown"],[100,"Class:Saber"],[101,"Class:Lancer"],[102,"Class:Archer"],[103,"Class:Rider"],[104,"Class:Caster"],[105,"Class:Assassin"],[106,"Class:Berserker"],[107,"Class:Shielder"],[108,"Class:Ruler"],[109,"Class:Alter Ego"],[110,"Class:Avenger"],[111,"Demon Pillar"],[112,"Class:Grand Caster"],[113,"Beast I"],[114,"Beast II"],[115,"Class:Moon Cancer"],[116,"Beast IIIR"],[117,"Class:Foreigner"],[118,"Beast IIIL"],[119,"Beast Unknown"],[200,"Attribute:Sky"],[201,"Attribute:Eart"],[202,"Attribute:Human"],[203,"Attribute:Star"],[204,"Attribute:Beast"],[300,"Alignment:Lawful"],[301,"Alignment:Chaotic"],[302,"Alignment:Neutral"],[303,"Alignment:Good"],[304,"Alignment:Evil"],[305,"Alignment:Balanced"],[306,"Alignment:Madness"],[308,"Alignment:Summer"],[1e3,"Servant"],[1002,"Undead"],[1122,"Shadow Servant"],[1172,"Threats against Humanity"],[2004,"Roman"],[2005,"Beasts"],[2019,"Demonic"],[2039,"Near Water"],[2386,"Kingprotea: Proliferation"],[2387,"Kingprotea: Growth"],[2466,"Argonaut"],[2654,"Pseudo-Servant"],[2664,"Kingprotea: Proliferation NP Defense"],[3004,"Buff"],[3005,"Debuff"],[3006,"Buff:Offensive"],[3007,"Buff:Defensive"],[3011,"Poison"],[3012,"Charm"],[3015,"Burn"],[3021,"Evade"],[3026,"Curse"],[3047,"Pigify"],[4001,"Card:Arts"],[4002,"Card:Buster"],[4003,"Card:Quick"],[4004,"Card:Extra"],[4008,"Player Card"],[4100,"Critical Hit"]]),d=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={id:"number"===typeof e.trait?e.trait:e.trait.id,trait:"number"===typeof e.trait?void 0:e.trait},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){var t,n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.trait){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,f.a.traitList();case 4:t=e.sent,n=0;case 6:if(!(n<t.length)){e.next=14;break}if((a=t[n]).id!==this.state.id){e.next=11;break}return this.setState({trait:a}),e.abrupt("return");case 11:n++,e.next=6;break;case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getDescription",value:function(){return h.get(this.state.id)||(this.state.trait&&"unknown"!==this.state.trait.name?this.state.trait.name:"unknown(".concat(this.state.id,")"))}},{key:"render",value:function(){return p.a.createElement("span",null,"[",this.getDescription(),"]")}}]),n}(p.a.Component);t.a=d},146:function(e,t,n){"use strict";var a=n(12),r=n(13),i=n(22),s=n(21),o=n(0),c=n.n(o),l=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e;return c.a.createElement("img",{alt:"",src:this.props.location,style:{height:null!==(e=this.props.height)&&void 0!==e?e:25,verticalAlign:"bottom"}})}}]),n}(c.a.Component);t.a=l},147:function(e,t,n){},149:function(e,t,n){"use strict";var a=n(12),r=n(13),i=n(22),s=n(21),o=n(11),c=n(0),l=n.n(c),u=new Map([[0,0],[1,1],[2,1],[3,2],[4,3],[5,3]]),p=new Map([[o.c.SABER,1],[o.c.ARCHER,2],[o.c.LANCER,3],[o.c.RIDER,4],[o.c.CASTER,5],[o.c.ASSASSIN,6],[o.c.BERSERKER,7],[o.c.SHIELDER,8],[o.c.RULER,9],[o.c.ALTER_EGO,10],[o.c.AVENGER,11],[o.c.MOON_CANCER,23],[o.c.FOREIGNER,25],[o.c.GRAND_CASTER,5],[o.c.BEAST_I,20],[o.c.BEAST_II,20],[o.c.BEAST_IIIL,20],[o.c.BEAST_IIIR,20],[o.c.BEAST_UNKNOWN,20],[o.c.ALL,1001],[o.c.EXTRA,1002]]),f=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e;return l.a.createElement("img",{alt:"",src:this.location(),style:{height:null!==(e=this.props.height)&&void 0!==e?e:24}})}},{key:"location",value:function(){var e,t=p.has(this.props.className)?p.get(this.props.className):12,n=null!==(e=this.props.rarity)&&void 0!==e?e:5,a=u.has(n)?u.get(n):3;return"https://assets.atlasacademy.io/GameData/NA/ClassIcons/class".concat(a,"_").concat(t,".png")}}]),n}(l.a.Component);t.a=f},154:function(e,t,n){"use strict";n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(12),r=n(13),i=n(22),s=n(21),o=n(11),c=n(0),l=n.n(c),u=n(16),p=n(146),f=n(138),h=n(144),d=[{up:o.b.ADD_MAXHP,down:o.b.SUB_MAXHP,description:"Max HP"},{up:o.b.UP_ATK,down:o.b.DOWN_ATK,description:"ATK"},{up:o.b.UP_CHAGETD,down:void 0,description:"Overcharge"},{up:o.b.UP_COMMANDATK,down:o.b.DOWN_COMMANDATK,description:"ATK"},{up:o.b.UP_CRITICALDAMAGE,down:o.b.DOWN_CRITICALDAMAGE,description:"Critical Damage"},{up:o.b.UP_CRITICALPOINT,down:o.b.DOWN_CRITICALPOINT,description:"Star Drop Rate"},{up:o.b.UP_CRITICALRATE,down:o.b.DOWN_CRITICALRATE,description:"Critical Rate"},{up:o.b.UP_CRITICAL_RATE_DAMAGE_TAKEN,down:o.b.DOWN_CRITICAL_RATE_DAMAGE_TAKEN,description:"Critical Rate Taken"},{up:o.b.UP_DAMAGE,down:o.b.DOWN_DAMAGE,description:"SP.DMG"},{up:o.b.UP_DAMAGEDROPNP,down:o.b.DOWN_DAMAGEDROPNP,description:"NP Gain When Damaged"},{up:o.b.UP_DEFENCE,down:o.b.DOWN_DEFENCE,description:"DEF"},{up:o.b.UP_DEFENCECOMMANDALL,down:o.b.DOWN_DEFENCECOMMANDALL,description:"Resistance"},{up:o.b.UP_DROPNP,down:o.b.DOWN_DROPNP,description:"NP Gain"},{up:o.b.UP_FUNC_HP_REDUCE,down:o.b.DOWN_FUNC_HP_REDUCE,description:"DoT Effectiveness"},{up:o.b.UP_GRANT_INSTANTDEATH,down:o.b.DOWN_GRANT_INSTANTDEATH,description:"Death Chance"},{up:o.b.UP_GRANTSTATE,down:o.b.DOWN_GRANTSTATE,description:"Buff Chance"},{up:void 0,down:o.b.UP_NONRESIST_INSTANTDEATH,description:"Death Resist"},{up:o.b.UP_NPDAMAGE,down:o.b.DOWN_NPDAMAGE,description:"NP Damage"},{up:o.b.UP_SPECIALDEFENCE,down:o.b.DOWN_SPECIALDEFENCE,description:"SP.DEF"},{up:o.b.UP_STARWEIGHT,down:o.b.DOWN_STARWEIGHT,description:"Star Weight"},{up:o.b.UP_TOLERANCE,down:o.b.DOWN_TOLERANCE,description:"Debuff Resist"},{up:o.b.UP_TOLERANCE_SUBSTATE,down:o.b.DOWN_TOLERANCE_SUBSTATE,description:"Buff Removal Resist"}],E=new Map([[3012,"Charm"],[3015,"Burn"],[3026,"Curse"],[3045,"Stun"]]),m=new Map([[o.b.AVOID_INSTANTDEATH,"Immune to Death"],[o.b.AVOID_STATE,"Immunity"],[o.b.ADD_DAMAGE,"Damage Plus"],[o.b.ADD_INDIVIDUALITY,"Add Trait"],[o.b.AVOIDANCE,"Evade"],[o.b.CHANGE_COMMAND_CARD_TYPE,"Change Command Card Types"],[o.b.COMMANDCODEATTACK_FUNCTION,"Command Code Effect"],[o.b.BREAK_AVOIDANCE,"Sure Hit"],[o.b.DELAY_FUNCTION,"Trigger Skill after Duration"],[o.b.DONOT_NOBLE,"NP Seal"],[o.b.DONOT_NOBLE_COND_MISMATCH,"NP Block if Condition Failed"],[o.b.DONOT_RECOVERY,"Recovery Disabled"],[o.b.DONOT_SELECT_COMMANDCARD,"Do Not Shuffle In Cards"],[o.b.DONOT_SKILL,"Skill Seal"],[o.b.FIELD_INDIVIDUALITY,"Change Field Type"],[o.b.FIX_COMMANDCARD,"Freeze Command Cards"],[o.b.GUTS,"Guts"],[o.b.GUTS_FUNCTION,"Trigger Skill on Guts"],[o.b.INVINCIBLE,"Invincible"],[o.b.MULTIATTACK,"Multiple Hits"],[o.b.PIERCE_INVINCIBLE,"Ignore Invincible"],[o.b.REGAIN_HP,"HP Per Turn"],[o.b.REGAIN_NP,"NP Per Turn"],[o.b.REGAIN_STAR,"Stars Per Turn"],[o.b.SELFTURNEND_FUNCTION,"Trigger Skill every Turn"],[o.b.SPECIAL_INVINCIBLE,"Special invincible"],[o.b.SUB_SELFDAMAGE,"Damage Cut"],[o.b.TD_TYPE_CHANGE,"Change Noble Phantasm"],[o.b.TD_TYPE_CHANGE_ARTS,"Set Noble Phantasm: Arts"],[o.b.TD_TYPE_CHANGE_BUSTER,"Set Noble Phantasm: Buster"],[o.b.TD_TYPE_CHANGE_QUICK,"Set Noble Phantasm: Quick"],[o.b.UP_HATE,"Taunt"]]),b=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"getTraitFilterAppend",value:function(){if(this.getTraitFilters())return l.a.createElement(l.a.Fragment,null," for ",this.getTraitFilters())}},{key:"getTraitFilterAppendWithoutCards",value:function(){var e=this,t=this.props.buff.ckSelfIndv.filter((function(e){return-1===[4001,4002,4003,4004].indexOf(e.id)}));if(t.length)return l.a.createElement(l.a.Fragment,null," ","for"," ",Object(f.d)(t.map((function(t){return l.a.createElement(h.a,{region:e.props.region,trait:t})}))," & "))}},{key:"getCommandCardTypes",value:function(){var e=[];return this.hasApplicableTrait(4001)&&e.push("Arts"),this.hasApplicableTrait(4002)&&e.push("Buster"),this.hasApplicableTrait(4003)&&e.push("Quick"),this.hasApplicableTrait(4004)&&e.push("Extra"),e.length||e.push("Command Card"),e.join(" & ")}},{key:"getEffectiveTargetsDescriptions",value:function(){var e=this,t=this.props.buff;if(t.ckOpIndv.length)return l.a.createElement(l.a.Fragment,null," vs. ",Object(f.d)(t.ckOpIndv.map((function(t){return l.a.createElement(h.a,{region:e.props.region,trait:t})}))," & ").map((function(e,t){return l.a.createElement(l.a.Fragment,{key:t},e)})))}},{key:"getTraitDescription",value:function(){var e=this.props.buff.vals.map((function(e){return e.id}));for(var t in e){var n=e[t],a=E.get(n);if(void 0!==a)return a}return""}},{key:"getTraitFilters",value:function(){var e=this;if(this.props.buff.ckSelfIndv.length)return l.a.createElement(l.a.Fragment,null,Object(f.e)(this.props.buff.ckSelfIndv.map((function(t){return l.a.createElement(h.a,{region:e.props.region,trait:t})}))," & "))}},{key:"getTypeDescription",value:function(){var e,t=this.props.buff.type;return null!==(e=m.get(t))&&void 0!==e?e:""}},{key:"getUpDownDescription",value:function(){var e=this.props.buff.type;for(var t in d){if(d[t].up===e)return"".concat(d[t].description," Up");if(d[t].down===e)return"".concat(d[t].description," Down")}return""}},{key:"hasApplicableTrait",value:function(e){return this.props.buff.ckSelfIndv.filter((function(t){return t.id===e})).length>0}},{key:"hasTraitDescription",value:function(){var e=this.props.buff.vals.map((function(e){return e.id}));for(var t in e){var n=e[t];if(void 0!==E.get(n))return!0}return!1}},{key:"hasTypeDescription",value:function(){var e=this.props.buff;return m.has(e.type)}},{key:"isUpDownBuff",value:function(){var e=this.props.buff.type;for(var t in d)if(d[t].up===e||d[t].down===e)return!0;return!1}},{key:"render",value:function(){var e=this.props.buff,t=e.name;return this.isUpDownBuff()?t=l.a.createElement(l.a.Fragment,null,this.getUpDownDescription(),this.getTraitFilterAppend()):e.type===o.b.UP_COMMANDALL?t=l.a.createElement(l.a.Fragment,null,this.getCommandCardTypes()," Up",this.getTraitFilterAppendWithoutCards()):e.type===o.b.DOWN_COMMANDALL?t=l.a.createElement(l.a.Fragment,null,this.getCommandCardTypes()," Down",this.getTraitFilterAppendWithoutCards()):e.type===o.b.ATTACK_FUNCTION?t=l.a.createElement(l.a.Fragment,null,"Trigger Skill on ",this.getTraitFilters()," attacks"):e.type===o.b.COMMANDATTACK_FUNCTION?t=l.a.createElement(l.a.Fragment,null,"Trigger Skill on ",this.getTraitFilters()," cards"):e.type===o.b.COMMANDATTACK_BEFORE_FUNCTION?t=l.a.createElement(l.a.Fragment,null,"Trigger Skill before ",this.getTraitFilters()," cards"):e.type===o.b.DAMAGE_FUNCTION?t=l.a.createElement(l.a.Fragment,null,"Trigger Skill on receiving ",this.getTraitFilters()," attacks"):e.type===o.b.DEAD_FUNCTION?t=l.a.createElement(l.a.Fragment,null,"Trigger Skill on death",this.getTraitFilterAppend()):e.type===o.b.NPATTACK_PREV_BUFF?t=l.a.createElement(l.a.Fragment,null,"Trigger Skill on ",this.getTraitFilters()," NP"):this.hasTypeDescription()?t=l.a.createElement(l.a.Fragment,null,this.getTypeDescription(),this.getTraitFilterAppend()):this.hasTraitDescription()&&(t=l.a.createElement(l.a.Fragment,null,this.getTraitDescription(),this.getTraitFilterAppend())),l.a.createElement(u.b,{to:"/".concat(this.props.region,"/buff/").concat(e.id)},"[",e.icon?l.a.createElement(p.a,{location:e.icon}):void 0,e.icon?" ":void 0,t,this.getEffectiveTargetsDescriptions(),"]")}}]),n}(l.a.Component);t.a=b},165:function(e,t,n){"use strict";var a=n(12),r=n(13),i=n(22),s=n(21),o=n(64),c=n(59),l=n(34),u=n(0),p=n.n(u),f=n(16),h=n(141),d=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.craftEssence.extraAssets.faces.equip,t=e?e[this.props.craftEssence.id]:void 0;return p.a.createElement(f.b,{to:"/".concat(this.props.region,"/craft-essence/").concat(this.props.craftEssence.collectionNo)},t?p.a.createElement(h.a,{type:o.a.SERVANT_EQUIP,rarity:this.props.craftEssence.rarity,location:t,height:"2em"}):void 0,t?" ":void 0,this.props.craftEssence.name," ",p.a.createElement(l.a,{icon:c.d}))}}]),n}(p.a.Component);t.a=d},166:function(e,t,n){"use strict";var a=n(12),r=n(13),i=n(22),s=n(21),o=n(0),c=n.n(o),l=n(16),u=n(149),p=n(141),f=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"faceIconLocation",value:function(){var e=this.props.servant.extraAssets.faces;if(e.ascension){var t=Object.values(e.ascension).shift();if(t)return t}if(e.costume){var n=Object.values(e.costume).shift();if(n)return n}}},{key:"render",value:function(){var e=this.faceIconLocation();return c.a.createElement(l.b,{to:"/".concat(this.props.region,"/servant/").concat(this.props.servant.collectionNo)},c.a.createElement(u.a,{className:this.props.servant.className,rarity:this.props.servant.rarity,height:this.props.iconHeight})," ",e?c.a.createElement(p.a,{location:e,rarity:this.props.servant.rarity,type:this.props.servant.type,height:this.props.iconHeight}):void 0,e?" ":void 0,this.props.servant.name)}}]),n}(c.a.Component);t.a=f},167:function(e,t,n){"use strict";var a=n(12),r=n(13),i=n(22),s=n(21),o=n(0),c=n.n(o),l=n(139),u=n(142),p=n(154),f=n(144),h=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e,t=this,n=this.props.func;return c.a.createElement(l.a,{data:{Data:c.a.createElement(u.a,{data:n}),Raw:c.a.createElement(u.a,{data:"https://api.atlasacademy.io/raw/".concat(this.props.region,"/function/").concat(n.funcId,"?expand=true")}),ID:n.funcId,Type:n.funcType,Target:n.funcTargetType,"Affects Players/Enemies":n.funcTargetTeam,"Popup Text":n.funcPopupText,"Target Traits":c.a.createElement("div",null,n.functvals.map((function(e,n){return c.a.createElement(f.a,{key:n,region:t.props.region,trait:e})}))),"Affects Traits":c.a.createElement("div",null,null===(e=n.traitVals)||void 0===e?void 0:e.map((function(e,n){return c.a.createElement(f.a,{key:n,region:t.props.region,trait:e})}))),Buffs:c.a.createElement("div",null,n.buffs.map((function(e,n){return c.a.createElement(p.a,{key:n,region:t.props.region,buff:e})})))}})}}]),n}(c.a.Component);t.a=h},170:function(e,t,n){"use strict";var a=n(12),r=n(13),i=n(22),s=n(21),o=n(0),c=n.n(o),l=n(16),u=n(146),p=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return c.a.createElement(l.b,{to:"/".concat(this.props.region,"/skill/").concat(this.props.skill.id)},this.props.skill.icon?c.a.createElement(u.a,{location:this.props.skill.icon,height:this.props.iconHeight}):void 0,this.props.skill.icon?" ":void 0,"[",this.props.skill.name?this.props.skill.name:"Skill: ".concat(this.props.skill.id),"]")}}]),n}(c.a.Component);t.a=p},173:function(e,t,n){"use strict";var a=n(1),r=n(3),i=n(4),s=n.n(i),o=n(0),c=n.n(o),l=n(5),u=["xl","lg","md","sm","xs"],p=c.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,o=e.noGutters,p=e.as,f=void 0===p?"div":p,h=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),d=Object(l.b)(n,"row"),E=d+"-cols",m=[];return u.forEach((function(e){var t,n=h[e];delete h[e];var a="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"===typeof n?n.cols:n)&&m.push(""+E+a+"-"+t)})),c.a.createElement(f,Object(a.a)({ref:t},h,{className:s.a.apply(void 0,[i,d,o&&"no-gutters"].concat(m))}))}));p.displayName="Row",p.defaultProps={noGutters:!1},t.a=p},178:function(e,t,n){"use strict";var a=n(12),r=n(13),i=n(22),s=n(21),o=n(0),c=n.n(o),l=n(16),u=n(141),p=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return c.a.createElement(l.b,{to:"/".concat(this.props.region,"/mystic-code/").concat(this.props.mysticCode.id)},c.a.createElement(u.a,{location:this.props.mysticCode.extraAssets.item.male}),c.a.createElement(u.a,{location:this.props.mysticCode.extraAssets.item.female})," ","[",this.props.mysticCode.name,"]")}}]),n}(c.a.Component);t.a=p},179:function(e,t,n){"use strict";var a=n(12),r=n(13),i=n(22),s=n(21),o=n(0),c=n.n(o),l=n(16),u=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return c.a.createElement(l.b,{to:"/".concat(this.props.region,"/noble-phantasm/").concat(this.props.noblePhantasm.id)},"[",this.props.noblePhantasm.name,"]")}}]),n}(c.a.Component);t.a=u},267:function(e,t,n){"use strict";n.r(t);var a=n(26),r=n.n(a),i=n(37),s=n(12),o=n(13),c=n(22),l=n(21),u=n(11),p=n(0),f=n.n(p),h=n(173),d=n(90),E=n(169),m=n(49),b=n(146),v=n(60),A=n(10),g=n(165),T=n(178),C=n(179),N=n(166),O=n(170),D=n(7),y=n(167),_=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={loading:!0},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){D.a.setRegion(this.props.region),this.loadFunc()}},{key:"loadFunc",value:function(){var e=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.func(this.props.id);case 3:t=e.sent,this.setState({loading:!1,func:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.setState({error:e.t0});case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t,n,a,r,i,s=this;if(this.state.error)return f.a.createElement(v.a,{error:this.state.error});if(this.state.loading||!this.state.func)return f.a.createElement(A.a,null);var o=this.state.func;return f.a.createElement("div",null,f.a.createElement("h1",null,o.funcPopupIcon?f.a.createElement("span",null,f.a.createElement(b.a,{location:o.funcPopupIcon,height:48}),"\xa0"):null,"Function: ",this.props.id),f.a.createElement("br",null),f.a.createElement(y.a,{region:this.props.region,func:o}),f.a.createElement(h.a,null,f.a.createElement(d.a,{xs:12,lg:6},f.a.createElement("h3",null,"Related Skills"),f.a.createElement(E.a,{style:{fontSize:"0.8em"}},f.a.createElement("tbody",null,(null!==(e=null===(t=o.reverse)||void 0===t||null===(n=t.nice)||void 0===n?void 0:n.skill)&&void 0!==e?e:[]).map((function(e,t){var n,a,r,i,o,c;return f.a.createElement("tr",{key:t},f.a.createElement("td",null,(null!==(n=null===(a=e.reverse)||void 0===a||null===(r=a.nice)||void 0===r?void 0:r.servant)&&void 0!==n?n:[]).map((function(e,t){return e.type===u.e.SERVANT_EQUIP?f.a.createElement("p",{key:t},f.a.createElement(g.a,{region:s.props.region,craftEssence:e})):e.type===u.e.NORMAL||e.type===u.e.HEROINE?f.a.createElement("p",{key:t},f.a.createElement(N.a,{region:s.props.region,servant:e})):""})),(null!==(i=null===(o=e.reverse)||void 0===o||null===(c=o.nice)||void 0===c?void 0:c.MC)&&void 0!==i?i:[]).map((function(e,t){return f.a.createElement("p",{key:t},f.a.createElement(T.a,{region:s.props.region,mysticCode:e}))}))),f.a.createElement("td",null,f.a.createElement(O.a,{region:s.props.region,skill:e})))}))))),f.a.createElement(d.a,{xs:12,lg:6},f.a.createElement("h3",null,"Related Noble Phantasms"),f.a.createElement(E.a,{style:{fontSize:"0.8em"}},f.a.createElement("tbody",null,(null!==(a=null===(r=o.reverse)||void 0===r||null===(i=r.nice)||void 0===i?void 0:i.NP)&&void 0!==a?a:[]).map((function(e,t){var n,a,r;return f.a.createElement("tr",{key:t},f.a.createElement("td",null,(null!==(n=null===(a=e.reverse)||void 0===a||null===(r=a.nice)||void 0===r?void 0:r.servant)&&void 0!==n?n:[]).map((function(e,t){return e.type===u.e.SERVANT_EQUIP?f.a.createElement("p",{key:t},f.a.createElement(g.a,{region:s.props.region,craftEssence:e})):e.type===u.e.NORMAL||e.type===u.e.HEROINE?f.a.createElement("p",{key:t},f.a.createElement(N.a,{region:s.props.region,servant:e})):""}))),f.a.createElement("td",null,f.a.createElement(C.a,{region:s.props.region,noblePhantasm:e})))})))))))}}]),n}(f.a.Component);t.default=_}}]);
//# sourceMappingURL=8.80bd50a6.chunk.js.map