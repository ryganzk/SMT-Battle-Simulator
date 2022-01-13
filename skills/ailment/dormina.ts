import {AilmentSkill} from "../../structures/skills/ailment_skill";
import {SkillEffects} from "../../structures/skills/skill_effects";

let dorminaEffect = new SkillEffects('sleep', 80);

export class Dormina extends AilmentSkill {
    constructor() {
        super("Dormina", "Chance of inflicting Sleep to 1 foe", 10, "single", [dorminaEffect], '');
    }
}