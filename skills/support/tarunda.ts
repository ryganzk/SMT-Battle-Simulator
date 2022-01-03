import {Skill} from "../../structures/skills/skill";
import {SkillEffects} from "../../structures/skills/skill_effects";

let tarundaEffect = new SkillEffects('atk', 'lower');

export class Tarunda extends Skill {
    constructor() {
        super("Tarunda", "Lowers Attack of 1 foe by 1 rank for 3 turns", "Supp", 8, [], 0, 0, [], [tarundaEffect], false, false, false, '');
    }
}