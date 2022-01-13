import {AilmentSkill} from "../../structures/skills/ailment_skill";
import {SkillEffects} from "../../structures/skills/skill_effects";

let marinKarinEffect = new SkillEffects('charm', 70);

export class MarinKarin extends AilmentSkill {
    constructor() {
        super("Marin Karin", "Chance of inflicting Charm to 1 foe", 10, "single", [marinKarinEffect], '');
    }
}