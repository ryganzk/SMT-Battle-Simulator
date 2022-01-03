import {Skill} from "../../structures/skills/skill";
import {SkillEffects} from "../../structures/skills/skill_effects";

let tarukajaEffect = new SkillEffects('atk', 'raise');

export class Tarukaja extends Skill {
    constructor() {
        super("Tarukaja", "Raises Attack of 1 ally by 1 rank for 3 turns", "Supp", 8, [], 0, 0, [], [tarukajaEffect], false, false, false, '');
    }
}