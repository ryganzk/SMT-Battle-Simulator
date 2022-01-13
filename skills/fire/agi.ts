import {AttackSkill} from "../../structures/skills/attack_skill";

export class Agi extends AttackSkill {
    constructor() {
        super("Agi", "Weak Fire attack to 1 foe", "Fire", 10, "single", [130], 98, 0, 0, [], [], false, '');
    }
}