import {Skill} from "../../skill";
import {SkillEffects} from "../../skill_effects";

let poismaEffect = new SkillEffects('poison', 'inflict');

export class Poisma extends Skill {
    constructor() {
        super("Poisma", "Chance of inflicting Poison to 1 foe", "Ailm", 10, [], 70, 0, [], [poismaEffect], false, false, false, '');
    }
}