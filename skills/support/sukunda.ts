import {Skill} from "../../skill";
import {SkillEffects} from "../../skill_effects";

let sukundaEffect = new SkillEffects('spd', 'lower');

export class Sukunda extends Skill {
    constructor() {
        super("Sukunda", "Lowers Accuracy/Evasion of 1 foe by 1 rank for 3 turns", "Supp", 8, [], 0, 0, [], [sukundaEffect], false, false, false, null);
    }
}