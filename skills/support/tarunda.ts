import {Skill} from "../../skill";
import {SkillEffects} from "../../skill_effects";

let tarundaEffect = new SkillEffects('atk', 'lower');

export class Tarunda extends Skill {
    constructor() {
        super("Tarunda", "Lowers Attack of 1 foe by 1 rank for 3 turns", "Supp", 8, [], 0, 0, [], [tarundaEffect], false, false, false, '');
    }
}