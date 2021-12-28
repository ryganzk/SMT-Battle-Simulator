import {Skill} from "../../skill";
import {SkillEffects} from "../../skill_effects";

let pulinpaEffect = new SkillEffects('confusion', 'inflict');

export class Pulinpa extends Skill {
    constructor() {
        super("Pulinpa", "Chance to inflict Confusion to 1 foe", "Ailm", 10, [], 70, 0, [], [pulinpaEffect], false, false, false, null);
    }
}