import {Skill} from "../../structures/skills/skill";
import {SkillEffects} from "../../structures/skills/skill_effects";

let rakundaEffect = new SkillEffects('def', 'lower');

export class Rakunda extends Skill {
    constructor() {
        super("Rakunda", "Lowers Defense of 1 foe by 1 rank for 3 turns", "Supp", 8, [], 0, 0, [], [rakundaEffect], false, false, false, '');
    }
}