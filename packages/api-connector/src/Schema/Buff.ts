import {Func} from "./Func";
import {Trait} from "./Trait";

export enum BuffType {
    NONE = "none",
    UP_COMMANDATK = "upCommandatk",
    UP_STARWEIGHT = "upStarweight",
    UP_CRITICALPOINT = "upCriticalpoint",
    DOWN_CRITICALPOINT = "downCriticalpoint",
    REGAIN_NP = "regainNp",
    REGAIN_STAR = "regainStar",
    REGAIN_HP = "regainHp",
    REDUCE_HP = "reduceHp",
    UP_ATK = "upAtk",
    DOWN_ATK = "downAtk",
    UP_DAMAGE = "upDamage",
    DOWN_DAMAGE = "downDamage",
    ADD_DAMAGE = "addDamage",
    SUB_DAMAGE = "subDamage",
    UP_NPDAMAGE = "upNpdamage",
    DOWN_NPDAMAGE = "downNpdamage",
    UP_DROPNP = "upDropnp",
    UP_CRITICALDAMAGE = "upCriticaldamage",
    DOWN_CRITICALDAMAGE = "downCriticaldamage",
    UP_SELFDAMAGE = "upSelfdamage",
    DOWN_SELFDAMAGE = "downSelfdamage",
    ADD_SELFDAMAGE = "addSelfdamage",
    SUB_SELFDAMAGE = "subSelfdamage",
    AVOIDANCE = "avoidance",
    BREAK_AVOIDANCE = "breakAvoidance",
    INVINCIBLE = "invincible",
    UP_GRANTSTATE = "upGrantstate",
    DOWN_GRANTSTATE = "downGrantstate",
    UP_TOLERANCE = "upTolerance",
    DOWN_TOLERANCE = "downTolerance",
    AVOID_STATE = "avoidState",
    DONOT_ACT = "donotAct",
    DONOT_SKILL = "donotSkill",
    DONOT_NOBLE = "donotNoble",
    DONOT_RECOVERY = "donotRecovery",
    DISABLE_GENDER = "disableGender",
    GUTS = "guts",
    UP_HATE = "upHate",
    ADD_INDIVIDUALITY = "addIndividuality",
    SUB_INDIVIDUALITY = "subIndividuality",
    UP_DEFENCE = "upDefence",
    DOWN_DEFENCE = "downDefence",
    UP_COMMANDSTAR = "upCommandstar",
    UP_COMMANDNP = "upCommandnp",
    UP_COMMANDALL = "upCommandall",
    DOWN_COMMANDALL = "downCommandall",
    DOWN_STARWEIGHT = "downStarweight",
    REDUCE_NP = "reduceNp",
    DOWN_DROPNP = "downDropnp",
    UP_GAIN_HP = "upGainHp",
    DOWN_GAIN_HP = "downGainHp",
    DOWN_COMMANDATK = "downCommandatk",
    DOWN_COMMANSTAR = "downCommanstar",
    DOWN_COMMANDNP = "downCommandnp",
    UP_CRITICALRATE = "upCriticalrate",
    DOWN_CRITICALRATE = "downCriticalrate",
    PIERCE_INVINCIBLE = "pierceInvincible",
    AVOID_INSTANTDEATH = "avoidInstantdeath",
    UP_RESIST_INSTANTDEATH = "upResistInstantdeath",
    UP_NONRESIST_INSTANTDEATH = "upNonresistInstantdeath",
    DELAY_FUNCTION = "delayFunction",
    REGAIN_NP_USED_NOBLE = "regainNpUsedNoble",
    DEAD_FUNCTION = "deadFunction",
    UP_MAXHP = "upMaxhp",
    DOWN_MAXHP = "downMaxhp",
    ADD_MAXHP = "addMaxhp",
    SUB_MAXHP = "subMaxhp",
    BATTLESTART_FUNCTION = "battlestartFunction",
    WAVESTART_FUNCTION = "wavestartFunction",
    SELFTURNEND_FUNCTION = "selfturnendFunction",
    UP_GIVEGAIN_HP = "upGivegainHp",
    DOWN_GIVEGAIN_HP = "downGivegainHp",
    COMMANDATTACK_FUNCTION = "commandattackFunction",
    DEADATTACK_FUNCTION = "deadattackFunction",
    UP_SPECIALDEFENCE = "upSpecialdefence",
    DOWN_SPECIALDEFENCE = "downSpecialdefence",
    UP_DAMAGEDROPNP = "upDamagedropnp",
    DOWN_DAMAGEDROPNP = "downDamagedropnp",
    ENTRY_FUNCTION = "entryFunction",
    UP_CHAGETD = "upChagetd",
    REFLECTION_FUNCTION = "reflectionFunction",
    UP_GRANT_SUBSTATE = "upGrantSubstate",
    DOWN_GRANT_SUBSTATE = "downGrantSubstate",
    UP_TOLERANCE_SUBSTATE = "upToleranceSubstate",
    DOWN_TOLERANCE_SUBSTATE = "downToleranceSubstate",
    UP_GRANT_INSTANTDEATH = "upGrantInstantdeath",
    DOWN_GRANT_INSTANTDEATH = "downGrantInstantdeath",
    GUTS_RATIO = "gutsRatio",
    DAMAGE_FUNCTION = "damageFunction",
    UP_DEFENCECOMMANDALL = "upDefencecommandall",
    DOWN_DEFENCECOMMANDALL = "downDefencecommandall",
    OVERWRITE_BATTLECLASS = "overwriteBattleclass",
    OVERWRITE_CLASSRELATIO_ATK = "overwriteClassrelatioAtk",
    OVERWRITE_CLASSRELATIO_DEF = "overwriteClassrelatioDef",
    UP_DAMAGE_INDIVIDUALITY = "upDamageIndividuality",
    DOWN_DAMAGE_INDIVIDUALITY = "downDamageIndividuality",
    UP_DAMAGE_INDIVIDUALITY_ACTIVEONLY = "upDamageIndividualityActiveonly",
    DOWN_DAMAGE_INDIVIDUALITY_ACTIVEONLY = "downDamageIndividualityActiveonly",
    UP_NPTURNVAL = "upNpturnval",
    DOWN_NPTURNVAL = "downNpturnval",
    MULTIATTACK = "multiattack",
    UP_GIVE_NP = "upGiveNp",
    DOWN_GIVE_NP = "downGiveNp",
    UP_RESISTANCE_DELAY_NPTURN = "upResistanceDelayNpturn",
    DOWN_RESISTANCE_DELAY_NPTURN = "downResistanceDelayNpturn",
    PIERCE_DEFENCE = "pierceDefence",
    UP_GUTS_HP = "upGutsHp",
    DOWN_GUTS_HP = "downGutsHp",
    UP_FUNCGAIN_NP = "upFuncgainNp",
    DOWN_FUNCGAIN_NP = "downFuncgainNp",
    UP_FUNC_HP_REDUCE = "upFuncHpReduce",
    DOWN_FUNC_HP_REDUCE = "downFuncHpReduce",
    UP_DEFENCECOMMAN_DAMAGE = "upDefencecommanDamage",
    DOWN_DEFENCECOMMAN_DAMAGE = "downDefencecommanDamage",
    NPATTACK_PREV_BUFF = "npattackPrevBuff",
    FIX_COMMANDCARD = "fixCommandcard",
    DONOT_GAINNP = "donotGainnp",
    FIELD_INDIVIDUALITY = "fieldIndividuality",
    DONOT_ACT_COMMANDTYPE = "donotActCommandtype",
    UP_DAMAGE_EVENT_POINT = "upDamageEventPoint",
    UP_DAMAGE_SPECIAL = "upDamageSpecial",
    ATTACK_FUNCTION = "attackFunction",
    COMMANDCODEATTACK_FUNCTION = "commandcodeattackFunction",
    DONOT_NOBLE_COND_MISMATCH = "donotNobleCondMismatch",
    DONOT_SELECT_COMMANDCARD = "donotSelectCommandcard",
    DONOT_REPLACE = "donotReplace",
    SHORTEN_USER_EQUIP_SKILL = "shortenUserEquipSkill",
    TD_TYPE_CHANGE = "tdTypeChange",
    OVERWRITE_CLASS_RELATION = "overwriteClassRelation",
    TD_TYPE_CHANGE_ARTS = "tdTypeChangeArts",
    TD_TYPE_CHANGE_BUSTER = "tdTypeChangeBuster",
    TD_TYPE_CHANGE_QUICK = "tdTypeChangeQuick",
    COMMANDATTACK_BEFORE_FUNCTION = "commandattackBeforeFunction",
    GUTS_FUNCTION = "gutsFunction",
    UP_CRITICAL_RATE_DAMAGE_TAKEN = "upCriticalRateDamageTaken",
    DOWN_CRITICAL_RATE_DAMAGE_TAKEN = "downCriticalRateDamageTaken",
    UP_CRITICAL_STAR_DAMAGE_TAKEN = "upCriticalStarDamageTaken",
    DOWN_CRITICAL_STAR_DAMAGE_TAKEN = "downCriticalStarDamageTaken",
    SKILL_RANK_UP = "skillRankUp",
    AVOIDANCE_INDIVIDUALITY = "avoidanceIndividuality",
    CHANGE_COMMAND_CARD_TYPE = "changeCommandCardType",
    SPECIAL_INVINCIBLE = "specialInvincible",
    PREVENT_DEATH_BY_DAMAGE = "preventDeathByDamage",
    COMMANDCODEATTACK_AFTER_FUNCTION = "commandcodeattackAfterFunction",
    ATTACK_BEFORE_FUNCTION = "attackBeforeFunction",
}

export interface Buff {
    id: number;
    name: string;
    detail: string;
    icon?: string;
    type: BuffType;
    buffGroup: number;
    vals: Trait[];
    tvals: Trait[];
    ckSelfIndv: Trait[];
    ckOpIndv: Trait[];
    maxRate: number;
    reverse?: {
        nice?: {
            function?: Func[];
        }
    }
}
