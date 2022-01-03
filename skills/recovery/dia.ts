import {Skill} from "../../structures/skills/skill";
import {SkillEffects} from "../../structures/skills/skill_effects";

let diaEffect = new SkillEffects('hp', 'heal slighty');

export class Dia extends Skill {
    constructor() {
        super("Dia", "Slight HP recovery to 1 ally", "Recv", 8, [], 0, 0, [], [diaEffect], false, false, false, '');
    }
}