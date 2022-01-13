import {AilmentSkill} from "../../structures/skills/ailment_skill";
import {SkillEffects} from "../../structures/skills/skill_effects";

let pulinpaEffect = new SkillEffects('confusion', 70);

export class Pulinpa extends AilmentSkill {
    constructor() {
        super("Pulinpa", "Chance of inflicting Confusion to 1 foe", 10, "single", [pulinpaEffect], '');
    }
}