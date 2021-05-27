import {Card} from "@atlasacademy/api-connector";
import {expect} from 'chai';
import {BattleAttackActionList} from "../../../../src/Action/BattleAttackAction";
import {Battle} from "../../../../src/Battle";
import {BattleTeam} from "../../../../src/Enum/BattleTeam";
import {commandCardAttack} from "../../../../src/Func/Implementations/getDamageList";
import {servant} from "../../../helpers";

describe('getDamageList commandCardAttack', () => {
    it('no bonus', () => {
        const actor = servant(153, BattleTeam.PLAYER),
            target = servant(17, BattleTeam.ENEMY),
            battle = new Battle(null);

        battle.addActor(actor);
        battle.addActor(target);

        const actions = new BattleAttackActionList();
        actions.add(actor, Card.BUSTER, false);
        actions.add(actor, Card.QUICK, false);
        actions.add(actor, Card.ARTS, false);

        expect(commandCardAttack(battle, actions.get(1), actor, target).value()).to.equal(2);
        expect(commandCardAttack(battle, actions.get(2), actor, target).value()).to.be.closeTo(0.96, 0.0001);
        expect(commandCardAttack(battle, actions.get(3), actor, target).value()).to.be.closeTo(1.4, 0.0001);
        expect(commandCardAttack(battle, actions.get(4), actor, target).value()).to.equal(1);
    });

    it('bonus - musashi mana burst', async () => {
        const actor = servant(153, BattleTeam.PLAYER),
            target = servant(17, BattleTeam.ENEMY),
            battle = new Battle(null);

        battle.addActor(actor);
        battle.addActor(target);

        let actions = new BattleAttackActionList();
        actions.add(actor, Card.BUSTER, false);
        expect(commandCardAttack(battle, actions.get(1), actor, target).value()).to.equal(2);

        await actor.skill(2)?.activate(battle);
        actions = new BattleAttackActionList();
        actions.add(actor, Card.BUSTER, false);
        expect(commandCardAttack(battle, actions.get(1), actor, target).value()).to.equal(2.75);
    });
});
