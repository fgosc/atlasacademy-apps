(this["webpackJsonpaa-db"]=this["webpackJsonpaa-db"]||[]).push([[0],{115:function(e,t,a){},116:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var n,r,c=a(0),i=a.n(c),l=a(31),u=a.n(l),o=a(6),s=a(7),E=a(9),p=a(8),m=(a(90),a(121)),d=a(15),A=a(11),h=a(57),N=a(34),f=a(27),_=a(128),v=a(83),T=a(45),O=a(122),g=a(126),D=a(127);!function(e){e.DEFAULT="Default",e.ENGLISH="English"}(n||(n={})),function(e){e.JP="JP",e.NA="NA"}(r||(r={}));var S=[],b=function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,null,[{key:"language",value:function(){var e=window.localStorage.getItem("language"),t=Object.values(n).find((function(t){return t===e}));return null!==t&&void 0!==t?t:n.DEFAULT}},{key:"region",value:function(){var e=window.localStorage.getItem("region"),t=Object.values(r).find((function(t){return t===e}));return null!==t&&void 0!==t?t:r.JP}},{key:"setLanguage",value:function(t){var a=Object.values(n).find((function(e){return e===t}));void 0!==a&&(window.localStorage.setItem("language",a),e.triggerCallbacks())}},{key:"setRegion",value:function(t){var a=Object.values(r).find((function(e){return e===t}));void 0!==a&&(window.localStorage.setItem("region",a),e.triggerCallbacks())}},{key:"onUpdate",value:function(e){S.push(e)}},{key:"triggerCallbacks",value:function(){S.forEach((function(e){e.call(null)}))}}]),e}(),I=function(e){Object(E.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={region:b.region(),language:b.language()},b.onUpdate((function(){return n.syncSettings()})),n}return Object(s.a)(a,[{key:"syncSettings",value:function(){this.setState({region:b.region(),language:b.language()})}},{key:"updateLanguage",value:function(e){b.setLanguage(e)}},{key:"updateRegion",value:function(e){b.setRegion(e)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(D.a,null,i.a.createElement(D.a.Group,null,i.a.createElement(D.a.Label,null,"Region"),i.a.createElement(D.a.Control,{as:"select",value:this.state.region,onChange:function(t){return e.updateRegion(t.target.value)}},Object.values(r).map((function(e){return i.a.createElement("option",{value:e},e)})))),i.a.createElement(D.a.Group,null,i.a.createElement(D.a.Label,null,"Language"),i.a.createElement(D.a.Control,{as:"select",value:this.state.language,onChange:function(t){return e.updateLanguage(t.target.value)}},Object.values(n).map((function(e){return i.a.createElement("option",{value:e},e)}))))))}}]),a}(i.a.Component),R=function(e){Object(E.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={showSettings:!1},n}return Object(s.a)(a,[{key:"hideSettings",value:function(){this.setState({showSettings:!1})}},{key:"showSettings",value:function(){this.setState({showSettings:!0})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(_.a,{bg:"dark",variant:"dark",expand:"lg"},i.a.createElement(m.a,null,i.a.createElement(d.b,{to:"/",className:"navbar-brand"},"AA-DB"),i.a.createElement(_.a.Toggle,null),i.a.createElement(_.a.Collapse,null,i.a.createElement(v.a,null,i.a.createElement(d.b,{to:"/servants",className:"nav-link"},i.a.createElement(T.a,null,"Servants"))),i.a.createElement(v.a,{className:"ml-auto"},i.a.createElement(v.a.Link,{href:"https://discord.gg/TKJmuCR",target:"_blank"},i.a.createElement(f.a,{icon:h.a})),i.a.createElement(v.a.Link,{href:"https://github.com/atlasacademy/aa-db",target:"_blank"},i.a.createElement(f.a,{icon:h.b})),i.a.createElement(O.a,{variant:"primary",onClick:function(){return e.showSettings()}},i.a.createElement(f.a,{icon:N.a})))))),i.a.createElement(g.a,{show:this.state.showSettings,onHide:function(){return e.hideSettings()}},i.a.createElement(g.a.Header,{closeButton:!0},i.a.createElement(g.a.Title,null,"Settings")),i.a.createElement(g.a.Body,null,i.a.createElement(I,null))))}}]),a}(i.a.Component),P=a(13),C=a.n(P),y=a(24),L=a(59),U=a(80),G=a.n(U),k="https://api.atlasacademy.io",M=function(){var e=Object(y.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.get(t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(e){var t;return(e=null!==(t=e)&&void 0!==t?t:b.region())===r.NA?"NA":"JP"},j=new Map,w=function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,null,[{key:"buff",value:function(e){var t="?reverse=true"+(b.language()===n.ENGLISH?"&lang=en":"");return M("".concat(k,"/nice/").concat(H(),"/buff/").concat(e).concat(t))}},{key:"func",value:function(e){var t="?reverse=true"+(b.language()===n.ENGLISH?"&lang=en":"");return M("".concat(k,"/nice/").concat(H(),"/function/").concat(e).concat(t))}},{key:"servant",value:function(e){var t="?lore=true"+(b.language()===n.ENGLISH?"&lang=en":"");return M("".concat(k,"/nice/").concat(H(),"/servant/").concat(e).concat(t))}},{key:"servantList",value:function(){var t=Object(y.a)(C.a.mark((function t(){var a,c,i;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(b.region()!==r.NA){t.next=4;break}return t.abrupt("return",e.getCacheableServantList(r.NA));case 4:if(b.region()!==r.JP||b.language()!==n.DEFAULT){t.next=6;break}return t.abrupt("return",e.getCacheableServantList(r.JP));case 6:return t.next=8,e.getCacheableServantList(r.JP);case 8:return a=t.sent,t.next=11,e.getCacheableServantList(r.NA);case 11:return c=t.sent,i=new Map(c.map((function(e){return[e.id,e.name]}))),t.abrupt("return",a.map((function(e){var t;return Object(L.a)(Object(L.a)({},e),{},{name:null!==(t=i.get(e.id))&&void 0!==t?t:e.name})})));case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"getCacheableServantList",value:function(){var e=Object(y.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===(a=j.get(t))){e.next=3;break}return e.abrupt("return",a);case 3:return e.next=5,M("".concat(k,"/export/").concat(H(t),"/basic_servant.json"));case 5:return a=e.sent,j.set(t,a),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),F=function(e){Object(E.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e;return i.a.createElement("img",{alt:"",src:this.props.location,style:{height:null!==(e=this.props.height)&&void 0!==e?e:25,verticalAlign:"bottom"}})}}]),a}(i.a.Component),B=a(123),V=(a(115),function(e){Object(E.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,this.props.header?i.a.createElement("div",{className:"data-header"},this.props.header):null,i.a.createElement(B.a,{bordered:!0,hover:!0,className:"data-table"},i.a.createElement("tbody",null,Object.keys(this.props.data).map((function(t,a){return i.a.createElement("tr",{key:a},i.a.createElement("th",null,t),i.a.createElement("td",null,e.props.data[t]))})))))}}]),a}(i.a.Component));var x=function(){return i.a.createElement("div",null,"Loading ...")};function W(e,t){var a=[],n=function(e){if("object"!==typeof e)if(0!==a.length){var t=a[a.length-1];"string"===typeof t?a[a.length-1]=t+e.toString():a.push(e.toString())}else a.push(e.toString());else a.push(e)};return e.forEach((function(e,a){a>0&&n(t),n(e)})),a}var Y=function(e){Object(E.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={loading:!0},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.loadBuff()}},{key:"loadBuff",value:function(){var e=Object(y.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.buff(this.props.id);case 2:t=e.sent,this.setState({loading:!1,buff:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(this.state.loading||!this.state.buff)return i.a.createElement(x,null);var e=this.state.buff;return i.a.createElement("div",null,i.a.createElement("h1",null,i.a.createElement(F,{location:e.icon,height:48}),"\xa0",e.name),i.a.createElement("br",null),i.a.createElement(V,{data:{ID:e.id,Name:e.name,Detail:e.detail,Type:e.type,"Gained Traits":i.a.createElement("div",null,W(e.vals.map((function(e){return e.name})),", "))}}))}}]),a}(i.a.Component),K=function(e){Object(E.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={loading:!0},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.loadFunc()}},{key:"loadFunc",value:function(){var e=Object(y.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.func(this.props.id);case 2:t=e.sent,this.setState({loading:!1,func:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading||!this.state.func?i.a.createElement(x,null):i.a.createElement("div",null,i.a.createElement("h1",null,"Function: ",this.props.id),i.a.createElement("br",null))}}]),a}(i.a.Component),J=function(e){Object(E.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,"Noble Phantasm: ",this.props.id)}}]),a}(i.a.Component),X=a(82),Q=a(124),q=a(73),z=a(129),$=a(125);function Z(e,t){var a=(null!==e&&void 0!==e?e:0)/Math.pow(10,t);return"".concat(a,"%")}var ee,te="https://assets.atlasacademy.io/GameData/JP/BuffIcons",ae="".concat(te,"/bufficon_337.png"),ne="".concat(te,"/bufficon_349.png"),re="".concat(te,"/bufficon_303.png"),ce="".concat(te,"/bufficon_310.png"),ie=function(e){return void 0===e?"":i.a.createElement("span",null,e.map((function(e,t){return(t>0?", ":"")+Z(e,0)})),"\xa0-\xa0",e.length," Hits")},le=function(e){Object(E.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"hitsColumn",value:function(){return i.a.createElement(q.a,{xs:12,md:12,lg:4},i.a.createElement(V,{header:i.a.createElement("div",null,i.a.createElement(F,{location:ne}),"\xa0 Hit Count"),data:{Buster:ie(this.props.servant.hitsDistribution.buster),Arts:ie(this.props.servant.hitsDistribution.arts),Quick:ie(this.props.servant.hitsDistribution.quick),Extra:ie(this.props.servant.hitsDistribution.extra)}}))}},{key:"miscColumn",value:function(){return i.a.createElement(q.a,{xs:12,md:12,lg:4},i.a.createElement(V,{header:i.a.createElement("div",null,i.a.createElement(F,{location:ce}),"\xa0Crit Stars"),data:{"Star Absorb":this.props.servant.starAbsorb,"Star Gen":Z(this.props.servant.starGen,1)}}),i.a.createElement(V,{header:i.a.createElement("div",null,i.a.createElement(F,{location:ae}),"\xa0Instant Death"),data:{"Death Chance":Z(this.props.servant.instantDeathChance,1)}}))}},{key:"npGainColumn",value:function(){return i.a.createElement(q.a,{xs:12,md:12,lg:4},i.a.createElement(V,{header:i.a.createElement("div",null,i.a.createElement(F,{location:re}),"\xa0NP Gain"),data:{Buster:Z(this.props.servant.npGain.buster,2),Arts:Z(this.props.servant.npGain.arts,2),Quick:Z(this.props.servant.npGain.quick,2),Extra:Z(this.props.servant.npGain.extra,2),Defense:Z(this.props.servant.npGain.defence,2)}}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(Q.a,null,this.hitsColumn(),this.npGainColumn(),this.miscColumn()))}}]),a}(i.a.Component);!function(e){e.SABER="saber",e.ARCHER="archer",e.LANCER="lancer",e.RIDER="rider",e.CASTER="caster",e.ASSASSIN="assassin",e.BERSERKER="berserker",e.SHIELDER="shielder",e.RULER="ruler",e.ALTER_EGO="alterEgo",e.AVENGER="avenger",e.GRAND_CASTER="grandCaster",e.BEAST_II="beastII",e.BEAST_I="beastI",e.MOON_CANCER="moonCancer",e.BEAST_IIIR="beastIIIR",e.FOREIGNER="foreigner",e.BEAST_IIIL="beastIIIL",e.BEAST_UNKNOWN="beastUnknown",e.ALL="ALL"}(ee||(ee={}));var ue,oe,se,Ee,pe,me=ee,de=new Map([[1,1],[2,1],[3,2],[4,3],[5,3]]),Ae=new Map([[me.SABER,1],[me.ARCHER,2],[me.LANCER,3],[me.RIDER,4],[me.CASTER,5],[me.ASSASSIN,6],[me.BERSERKER,7],[me.SHIELDER,8],[me.RULER,9],[me.ALTER_EGO,10],[me.AVENGER,11]]),he=function(e){Object(E.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("img",{alt:"",src:this.location(),style:this.props.height?{height:this.props.height}:void 0})}},{key:"location",value:function(){var e,t=Ae.has(this.props.className)?Ae.get(this.props.className):12,a=null!==(e=this.props.rarity)&&void 0!==e?e:5,n=de.has(a)?de.get(a):3;return"https://assets.atlasacademy.io/GameData/NA/ClassIcons/class".concat(n,"_").concat(t,".png")}}]),a}(i.a.Component),Ne=a(81),fe=a.n(Ne),_e=function(e){Object(E.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={showing:!1},n}return Object(s.a)(a,[{key:"hide",value:function(){this.setState({showing:!1})}},{key:"show",value:function(){this.setState({showing:!0})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("span",{className:"text-primary",style:{cursor:"pointer"},onClick:function(){e.show()}},"View Raw \xa0",i.a.createElement(f.a,{icon:N.b})),i.a.createElement(g.a,{size:"lg",show:this.state.showing,onHide:function(){return e.hide()}},i.a.createElement(g.a.Header,{closeButton:!0},i.a.createElement(g.a.Title,null,"Raw Data Viewer")),i.a.createElement(g.a.Body,null,i.a.createElement(fe.a,{src:this.props.data}))))}}]),a}(i.a.Component),ve=function(e){Object(E.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.servant;return i.a.createElement("div",null,i.a.createElement("h1",null,i.a.createElement(he,{className:e.className,rarity:e.rarity}),"\xa0",e.name),i.a.createElement(V,{data:{Raw:i.a.createElement(_e,{data:e}),ID:e.id,Collection:e.collectionNo,Name:e.name,Class:e.className,Rarity:e.rarity,Cost:e.cost,Gender:e.gender,Attribute:e.attribute,"Max Lv.":e.lvMax,"Base Hp":e.hpBase,"Base Atk":e.atkBase,"Max Hp":e.hpMax,"Max Atk":e.atkMax}}))}}]),a}(i.a.Component);!function(e){e.NONE="none",e.ADD_STATE="addState",e.SUB_STATE="subState",e.DAMAGE="damage",e.DAMAGE_NP="damageNp",e.GAIN_STAR="gainStar",e.GAIN_HP="gainHp",e.GAIN_NP="gainNp",e.LOSS_NP="lossNp",e.SHORTEN_SKILL="shortenSkill",e.EXTEND_SKILL="extendSkill",e.RELEASE_STATE="releaseState",e.LOSS_HP="lossHp",e.INSTANT_DEATH="instantDeath",e.DAMAGE_NP_PIERCE="damageNpPierce",e.DAMAGE_NP_INDIVIDUAL="damageNpIndividual",e.ADD_STATE_SHORT="addStateShort",e.GAIN_HP_PER="gainHpPer",e.DAMAGE_NP_STATE_INDIVIDUAL="damageNpStateIndividual",e.HASTEN_NPTURN="hastenNpturn",e.DELAY_NPTURN="delayNpturn",e.DAMAGE_NP_HPRATIO_HIGH="damageNpHpratioHigh",e.DAMAGE_NP_HPRATIO_LOW="damageNpHpratioLow",e.CARD_RESET="cardReset",e.REPLACE_MEMBER="replaceMember",e.LOSS_HP_SAFE="lossHpSafe",e.DAMAGE_NP_COUNTER="damageNpCounter",e.DAMAGE_NP_STATE_INDIVIDUAL_FIX="damageNpStateIndividualFix",e.DAMAGE_NP_SAFE="damageNpSafe",e.CALL_SERVANT="callServant",e.PT_SHUFFLE="ptShuffle",e.LOSS_STAR="lossStar",e.CHANGE_SERVANT="changeServant",e.CHANGE_BG="changeBg",e.DAMAGE_VALUE="damageValue",e.WITHDRAW="withdraw",e.FIX_COMMANDCARD="fixCommandcard",e.SHORTEN_BUFFTURN="shortenBuffturn",e.EXTEND_BUFFTURN="extendBuffturn",e.SHORTEN_BUFFCOUNT="shortenBuffcount",e.EXTEND_BUFFCOUNT="extendBuffcount",e.CHANGE_BGM="changeBgm",e.DISPLAY_BUFFSTRING="displayBuffstring",e.EXP_UP="expUp",e.QP_UP="qpUp",e.DROP_UP="dropUp",e.FRIEND_POINT_UP="friendPointUp",e.EVENT_DROP_UP="eventDropUp",e.EVENT_DROP_RATE_UP="eventDropRateUp",e.EVENT_POINT_UP="eventPointUp",e.EVENT_POINT_RATE_UP="eventPointRateUp",e.TRANSFORM_SERVANT="transformServant",e.QP_DROP_UP="qpDropUp",e.SERVANT_FRIENDSHIP_UP="servantFriendshipUp",e.USER_EQUIP_EXP_UP="userEquipExpUp",e.CLASS_DROP_UP="classDropUp",e.ENEMY_ENCOUNT_COPY_RATE_UP="enemyEncountCopyRateUp",e.ENEMY_ENCOUNT_RATE_UP="enemyEncountRateUp",e.ENEMY_PROB_DOWN="enemyProbDown"}(ue||(ue={})),function(e){e.SELF="self",e.PT_ONE="ptOne",e.PT_ANOTHER="ptAnother",e.PT_ALL="ptAll",e.ENEMY="enemy",e.ENEMY_ANOTHER="enemyAnother",e.ENEMY_ALL="enemyAll",e.PT_FULL="ptFull",e.ENEMY_FULL="enemyFull",e.PT_OTHER="ptOther",e.PT_ONE_OTHER="ptOneOther",e.PT_RANDOM="ptRandom",e.ENEMY_OTHER="enemyOther",e.ENEMY_RANDOM="enemyRandom",e.PT_OTHER_FULL="ptOtherFull",e.ENEMY_OTHER_FULL="enemyOtherFull",e.PTSELECT_ONE_SUB="ptselectOneSub",e.PTSELECT_SUB="ptselectSub",e.PT_ONE_ANOTHER_RANDOM="ptOneAnotherRandom"}(oe||(oe={})),function(e){e.PLAYER="player",e.ENEMY="enemy",e.PLAYER_AND_ENEMY="playerAndEnemy"}(se||(se={})),function(e){e.RATE="Rate",e.TURN="Turn",e.COUNT="Count",e.VALUE="Value",e.VALUE2="Value2",e.USE_RATE="UseRate",e.TARGET="Target",e.CORRECTION="Correction",e.PARAM_ADD="ParamAdd",e.PARAM_MAX="ParamMax",e.HIDE_MISS="HideMiss",e.ON_FIELD="OnField",e.HIDE_NO_EFFECT="HideNoEffect",e.UNAFFECTED="Unaffected",e.SHOW_STATE="ShowState",e.AURA_EFFECT_ID="AuraEffectId",e.ACT_SET="ActSet",e.ACT_SET_WEIGHT="ActSetWeight",e.SHOW_QUEST_NO_EFFECT="ShowQuestNoEffect",e.CHECK_DEAD="CheckDead",e.RATIO_HP_HIGH="RatioHPHigh",e.RATIO_HP_LOW="RatioHPLow",e.SET_PASSIVE_FRAME="SetPassiveFrame",e.PROC_PASSIVE="ProcPassive",e.PROC_ACTIVE="ProcActive",e.HIDE_PARAM="HideParam",e.SKILL_ID="SkillID",e.SKILL_LV="SkillLV",e.SHOW_CARD_ONLY="ShowCardOnly",e.EFFECT_SUMMON="EffectSummon",e.RATIO_HP_RANGE_HIGH="RatioHPRangeHigh",e.RATIO_HP_RANGE_LOW="RatioHPRangeLow",e.TARGET_LIST="TargetList",e.OPPONENT_ONLY="OpponentOnly",e.TARGET_RARITY_LIST="TargetRarityList"}(Ee||(Ee={})),function(e){e.NONE="none",e.UP_COMMANDATK="upCommandatk",e.UP_STARWEIGHT="upStarweight",e.UP_CRITICALPOINT="upCriticalpoint",e.DOWN_CRITICALPOINT="downCriticalpoint",e.REGAIN_NP="regainNp",e.REGAIN_STAR="regainStar",e.REGAIN_HP="regainHp",e.REDUCE_HP="reduceHp",e.UP_ATK="upAtk",e.DOWN_ATK="downAtk",e.UP_DAMAGE="upDamage",e.DOWN_DAMAGE="downDamage",e.ADD_DAMAGE="addDamage",e.SUB_DAMAGE="subDamage",e.UP_NPDAMAGE="upNpdamage",e.DOWN_NPDAMAGE="downNpdamage",e.UP_DROPNP="upDropnp",e.UP_CRITICALDAMAGE="upCriticaldamage",e.DOWN_CRITICALDAMAGE="downCriticaldamage",e.UP_SELFDAMAGE="upSelfdamage",e.DOWN_SELFDAMAGE="downSelfdamage",e.ADD_SELFDAMAGE="addSelfdamage",e.SUB_SELFDAMAGE="subSelfdamage",e.AVOIDANCE="avoidance",e.BREAK_AVOIDANCE="breakAvoidance",e.INVINCIBLE="invincible",e.UP_GRANTSTATE="upGrantstate",e.DOWN_GRANTSTATE="downGrantstate",e.UP_TOLERANCE="upTolerance",e.DOWN_TOLERANCE="downTolerance",e.AVOID_STATE="avoidState",e.DONOT_ACT="donotAct",e.DONOT_SKILL="donotSkill",e.DONOT_NOBLE="donotNoble",e.DONOT_RECOVERY="donotRecovery",e.DISABLE_GENDER="disableGender",e.GUTS="guts",e.UP_HATE="upHate",e.ADD_INDIVIDUALITY="addIndividuality",e.SUB_INDIVIDUALITY="subIndividuality",e.UP_DEFENCE="upDefence",e.DOWN_DEFENCE="downDefence",e.UP_COMMANDSTAR="upCommandstar",e.UP_COMMANDNP="upCommandnp",e.UP_COMMANDALL="upCommandall",e.DOWN_COMMANDALL="downCommandall",e.DOWN_STARWEIGHT="downStarweight",e.REDUCE_NP="reduceNp",e.DOWN_DROPNP="downDropnp",e.UP_GAIN_HP="upGainHp",e.DOWN_GAIN_HP="downGainHp",e.DOWN_COMMANDATK="downCommandatk",e.DOWN_COMMANSTAR="downCommanstar",e.DOWN_COMMANDNP="downCommandnp",e.UP_CRITICALRATE="upCriticalrate",e.DOWN_CRITICALRATE="downCriticalrate",e.PIERCE_INVINCIBLE="pierceInvincible",e.AVOID_INSTANTDEATH="avoidInstantdeath",e.UP_RESIST_INSTANTDEATH="upResistInstantdeath",e.UP_NONRESIST_INSTANTDEATH="upNonresistInstantdeath",e.DELAY_FUNCTION="delayFunction",e.REGAIN_NP_USED_NOBLE="regainNpUsedNoble",e.DEAD_FUNCTION="deadFunction",e.UP_MAXHP="upMaxhp",e.DOWN_MAXHP="downMaxhp",e.ADD_MAXHP="addMaxhp",e.SUB_MAXHP="subMaxhp",e.BATTLESTART_FUNCTION="battlestartFunction",e.WAVESTART_FUNCTION="wavestartFunction",e.SELFTURNEND_FUNCTION="selfturnendFunction",e.UP_GIVEGAIN_HP="upGivegainHp",e.DOWN_GIVEGAIN_HP="downGivegainHp",e.COMMANDATTACK_FUNCTION="commandattackFunction",e.DEADATTACK_FUNCTION="deadattackFunction",e.UP_SPECIALDEFENCE="upSpecialdefence",e.DOWN_SPECIALDEFENCE="downSpecialdefence",e.UP_DAMAGEDROPNP="upDamagedropnp",e.DOWN_DAMAGEDROPNP="downDamagedropnp",e.ENTRY_FUNCTION="entryFunction",e.UP_CHAGETD="upChagetd",e.REFLECTION_FUNCTION="reflectionFunction",e.UP_GRANT_SUBSTATE="upGrantSubstate",e.DOWN_GRANT_SUBSTATE="downGrantSubstate",e.UP_TOLERANCE_SUBSTATE="upToleranceSubstate",e.DOWN_TOLERANCE_SUBSTATE="downToleranceSubstate",e.UP_GRANT_INSTANTDEATH="upGrantInstantdeath",e.DOWN_GRANT_INSTANTDEATH="downGrantInstantdeath",e.GUTS_RATIO="gutsRatio",e.DAMAGE_FUNCTION="damageFunction",e.UP_DEFENCECOMMANDALL="upDefencecommandall",e.DOWN_DEFENCECOMMANDALL="downDefencecommandall",e.OVERWRITE_BATTLECLASS="overwriteBattleclass",e.OVERWRITE_CLASSRELATIO_ATK="overwriteClassrelatioAtk",e.OVERWRITE_CLASSRELATIO_DEF="overwriteClassrelatioDef",e.UP_DAMAGE_INDIVIDUALITY="upDamageIndividuality",e.DOWN_DAMAGE_INDIVIDUALITY="downDamageIndividuality",e.UP_DAMAGE_INDIVIDUALITY_ACTIVEONLY="upDamageIndividualityActiveonly",e.DOWN_DAMAGE_INDIVIDUALITY_ACTIVEONLY="downDamageIndividualityActiveonly",e.UP_NPTURNVAL="upNpturnval",e.DOWN_NPTURNVAL="downNpturnval",e.MULTIATTACK="multiattack",e.UP_GIVE_NP="upGiveNp",e.DOWN_GIVE_NP="downGiveNp",e.UP_RESISTANCE_DELAY_NPTURN="upResistanceDelayNpturn",e.DOWN_RESISTANCE_DELAY_NPTURN="downResistanceDelayNpturn",e.PIERCE_DEFENCE="pierceDefence",e.UP_GUTS_HP="upGutsHp",e.DOWN_GUTS_HP="downGutsHp",e.UP_FUNCGAIN_NP="upFuncgainNp",e.DOWN_FUNCGAIN_NP="downFuncgainNp",e.UP_FUNC_HP_REDUCE="upFuncHpReduce",e.DOWN_FUNC_HP_REDUCE="downFuncHpReduce",e.UP_DEFENCECOMMAN_DAMAGE="upDefencecommanDamage",e.DOWN_DEFENCECOMMAN_DAMAGE="downDefencecommanDamage",e.NPATTACK_PREV_BUFF="npattackPrevBuff",e.FIX_COMMANDCARD="fixCommandcard",e.DONOT_GAINNP="donotGainnp",e.FIELD_INDIVIDUALITY="fieldIndividuality",e.DONOT_ACT_COMMANDTYPE="donotActCommandtype",e.UP_DAMAGE_EVENT_POINT="upDamageEventPoint"}(pe||(pe={}));var Te=function(e){if(!e.length)return!1;for(var t=e[0],a=1;a<e.length;a++){if(JSON.stringify(t)!==JSON.stringify(e[a]))return!0;t=e[a]}return!1},Oe=function(e){return new Set(e).size>1};function ge(e){var t=Se(e),a=!t&&be(e),n=function(e){if(!e.length)return{};var t=function(e){return Object.values(Ee).filter((function(t){var a=e.map((function(e){return e[t]}));return!Oe(a)}))}(e),a={};for(var n in t)a[t[n]]=e[0][t[n]];return a}(t?Ie(e):a?Re(e):e.svals),r=[];return n.Rate&&1e3!==n.Rate&&r.push(n.Rate/10+"% Chance to"),e.funcType===ue.DAMAGE_NP?r.push("Deal damage"):e.funcType===ue.DAMAGE_NP_PIERCE?r.push("Deal damage that pierces defence"):e.funcType===ue.ADD_STATE||e.funcType===ue.ADD_STATE_SHORT?(r.push("Apply"),e.buffs.forEach((function(e,t){t>0&&r.push("&"),r.push(i.a.createElement("span",null,'"',function(e){var t,a,n=e.name;return e.type===pe.DONOT_ACT&&(t=e.vals,a=3012,t.filter((function(e){return e.id===a})).length>0&&(n="Charm")),i.a.createElement(d.b,{to:"/buff/".concat(e.id)},n," ",i.a.createElement(F,{location:e.icon}))}(e),'"'))}))):e.funcType===ue.GAIN_NP?r.push("Charge NP"):e.funcType===ue.GAIN_HP&&r.push("Gain HP"),e.funcTargetType===oe.ENEMY_ALL?r.push("to all enemies"):e.funcTargetType===oe.PT_ALL?r.push("to party"):e.funcTargetType===oe.PT_OTHER?r.push("to other party members"):e.funcTargetType===oe.SELF&&r.push("to self"),n.Turn&&r.push(1===n.Turn?"(1 Turn)":"(".concat(n.Turn," Turns)")),t&&r.push("<LEVEL>"),a&&r.push("<OVERCHARGE>"),i.a.createElement("span",null,W(r," ").map((function(e,t){return i.a.createElement("span",{key:t},e)})))}function De(e){var t=Se(e),a=!t&&be(e);return function(e){if(!e.length)return[];var t=function(e){return Object.values(Ee).filter((function(t){var a=e.map((function(e){return e[t]}));return Oe(a)}))}(e);return e.map((function(e){var a={};for(var n in t)a[t[n]]=e[t[n]];return a}))}(t?Ie(e):a?Re(e):e.svals).map((function(t){var a=[];return t.Value&&(e.buffs[0]&&function(e){switch(e.type){case pe.SUB_SELFDAMAGE:return!0;default:return!1}}(e.buffs[0])?a.push(t.Value.toString()):e.funcType===ue.GAIN_NP||e.funcType===ue.LOSS_NP?a.push(Z(t.Value,2)):e.funcType===ue.GAIN_HP||e.funcType===ue.LOSS_HP?a.push(t.Value.toString()):a.push(Z(t.Value,1))),a.join(" ")})).filter((function(e){return e.length}))}function Se(e){return Te(Ie(e))}function be(e){return Te(Re(e))}function Ie(e){return e.svals}function Re(e){var t=[e.svals[0]];return e.svals2&&t.push(e.svals2[0]),e.svals3&&t.push(e.svals3[0]),e.svals4&&t.push(e.svals4[0]),e.svals5&&t.push(e.svals5[0]),t.filter((function(e){return void 0!==e}))}var Pe=function(e){Object(E.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={showFunc:!1},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.noblePhantasm;return i.a.createElement("div",null,i.a.createElement("h3",null,e.name,"\xa0",i.a.createElement(d.b,{to:"/noble-phantasm/".concat(e.id)},i.a.createElement(f.a,{icon:N.c}))),i.a.createElement("p",null,e.detail),i.a.createElement(B.a,{responsive:!0},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Effect"),i.a.createElement("th",null,"1"),i.a.createElement("th",null,"2"),i.a.createElement("th",null,"3"),i.a.createElement("th",null,"4"),i.a.createElement("th",null,"5"))),i.a.createElement("tbody",null,e.functions.map((function(e,t){for(var a=ge(e),n=De(e),r=0;r<5;r++)n[r]||n.push("-");return i.a.createElement("tr",{key:t},i.a.createElement("td",null,a,"\xa0",i.a.createElement(d.b,{to:"/func/".concat(e.funcId)},i.a.createElement(f.a,{icon:N.c}))),n.map((function(e,t){return i.a.createElement("td",{key:t},e)})))})))))}}]),a}(i.a.Component),Ce=a(72),ye=function(e){Object(E.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"changeServant",value:function(e){this.props.history.push("/servant/".concat(e))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,"Jump to:",i.a.createElement(Ce.a,{as:"select",custom:!0,onChange:function(t){e.changeServant(parseInt(t.target.value))},value:this.props.id},this.props.servants.map((function(e,t){return i.a.createElement("option",{key:t,value:e.collectionNo},e.name)}))))}}]),a}(i.a.Component),Le=Object(A.f)(ye),Ue=function(e){Object(E.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("img",{alt:this.props.servant.name,className:"profile",src:this.props.servant.extraAssets.charaGraph.ascension[1]}))}}]),a}(i.a.Component),Ge=function(e){Object(E.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,"Skill: ",this.props.skill.name)}}]),a}(i.a.Component),ke=function(e){Object(E.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,W(this.props.traits.map((function(e){return function(e){return i.a.createElement("span",{key:"trait-".concat(e.id)},e.name)}(e)})),", ").map((function(e,t){return i.a.createElement("span",{key:t},e)})))}}]),a}(i.a.Component),Me=(a(116),function(e){Object(E.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={loading:!0,id:parseInt(n.props.id),servants:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.loadServant()}},{key:"loadServant",value:function(){var e=Object(y.a)(C.a.mark((function e(){var t,a,n,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([w.servantList(),w.servant(this.state.id)]);case 2:t=e.sent,a=Object(X.a)(t,2),n=a[0],r=a[1],this.setState({loading:!1,servants:n,servant:r});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading||!this.state.servant?i.a.createElement(x,null):i.a.createElement("div",{id:"servant"},i.a.createElement(Le,{servants:this.state.servants,id:this.state.servant.collectionNo}),i.a.createElement("hr",null),i.a.createElement(Q.a,null,i.a.createElement(q.a,{xs:{span:12,order:2},lg:{span:6,order:1}},i.a.createElement(ve,{servant:this.state.servant})),i.a.createElement(q.a,{xs:{span:12,order:1},lg:{span:6,order:2}},i.a.createElement(Ue,{servant:this.state.servant}))),i.a.createElement(z.a,{id:"servant-tabs",defaultActiveKey:"skills",transition:!1},i.a.createElement($.a,{eventKey:"skills",title:"Skills"},i.a.createElement("br",null),this.state.servant.skills.map((function(e,t){return i.a.createElement(Ge,{key:t,skill:e})}))),i.a.createElement($.a,{eventKey:"nps",title:"Noble Phantasms"},i.a.createElement("br",null),this.state.servant.noblePhantasms.map((function(e,t){return i.a.createElement(Pe,{key:t,noblePhantasm:e})}))),i.a.createElement($.a,{eventKey:"traits",title:"Traits"},i.a.createElement("br",null),i.a.createElement(ke,{traits:this.state.servant.traits})),i.a.createElement($.a,{eventKey:"misc",title:"Misc"},i.a.createElement("br",null),i.a.createElement(le,{servant:this.state.servant}))))}}]),a}(i.a.Component)),He=function(e,t){return new Array(e).fill(null).map((function(e){return t})).join("")},je=function(e){Object(E.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,He(this.props.rarity,"\u2605")+He(5-this.props.rarity,"\u2606"))}}]),a}(i.a.Component),we=function(e){Object(E.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("img",{alt:"",src:this.props.location,style:this.props.height?{height:this.props.height}:void 0})}}]),a}(i.a.Component),Fe=(a(118),function(e){Object(E.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={loading:!0,servants:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;w.servantList().then((function(t){e.setState({loading:!1,servants:t})}))}},{key:"render",value:function(){return this.state.loading?i.a.createElement(x,null):i.a.createElement("div",{id:"servants"},i.a.createElement(B.a,{striped:!0,bordered:!0,hover:!0},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{style:{textAlign:"center",width:"1px"}},"#"),i.a.createElement("th",{style:{textAlign:"center",width:"1px"}},"Class"),i.a.createElement("th",{style:{textAlign:"center",width:"1px"}},"Thumbnail"),i.a.createElement("th",null,"Name"),i.a.createElement("th",null,"Rarity"))),i.a.createElement("tbody",null,this.state.servants.map((function(e,t){return i.a.createElement("tr",{key:t},i.a.createElement("td",{align:"center"},i.a.createElement(d.b,{to:"/servant/".concat(e.collectionNo)},e.collectionNo)),i.a.createElement("td",{align:"center"},i.a.createElement(he,{className:e.className,rarity:e.rarity,height:50})),i.a.createElement("td",{align:"center"},i.a.createElement(d.b,{to:"/servant/".concat(e.collectionNo)},i.a.createElement(we,{rarity:e.rarity,location:e.face,height:50}))),i.a.createElement("td",null,i.a.createElement(d.b,{to:"/servant/".concat(e.collectionNo)},e.name)),i.a.createElement("td",null,i.a.createElement(je,{rarity:e.rarity})))})))))}}]),a}(i.a.Component)),Be=function(e){Object(E.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={region:b.region(),language:b.language()},b.onUpdate((function(){return n.updateSettings()})),n}return Object(s.a)(a,[{key:"updateSettings",value:function(){this.setState({region:b.region(),language:b.language()})}},{key:"render",value:function(){return i.a.createElement(d.a,null,i.a.createElement(R,null),i.a.createElement("br",null),i.a.createElement(m.a,{key:"".concat(this.state.region,"-").concat(this.state.language)},i.a.createElement(A.c,null,i.a.createElement(A.a,{path:"/buff/:id",render:function(e){return i.a.createElement(Y,{key:e.match.params.id,id:e.match.params.id})}}),i.a.createElement(A.a,{path:"/func/:id",render:function(e){return i.a.createElement(K,{key:e.match.params.id,id:e.match.params.id})}}),i.a.createElement(A.a,{path:"/noble-phantasm/:id",render:function(e){return i.a.createElement(J,{key:e.match.params.id,id:e.match.params.id})}}),i.a.createElement(A.a,{path:"/servant/:id",render:function(e){return i.a.createElement(Me,{key:e.match.params.id,id:e.match.params.id})}}),i.a.createElement(A.a,{path:"/servants",component:Fe}),i.a.createElement(A.a,{path:"/",component:Fe}))))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Be,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},85:function(e,t,a){e.exports=a(119)}},[[85,1,2]]]);
//# sourceMappingURL=main.4b05ddf3.chunk.js.map