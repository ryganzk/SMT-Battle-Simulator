import {Skill} from "../../structures/skills/skill";
import {SkillEffects} from "../../structures/skills/skill_effects";

let pulinpaEffect = new SkillEffects('confusion', 'inflict');

export class Pulinpa extends Skill {
    constructor() {
        super("Pulinpa", "Chance of inflicting Confusion to 1 foe", "Ailm", 10, [], 70, 0, [], [pulinpaEffect], false, false, false, '');
    }
}