import {AttackSkill} from "../../structures/skills/attack_skill";

export class Bufu extends AttackSkill {
    constructor() {
        super("Bufu", "Weak Ice attack to 1 foe", "Ice", 10, "single", [130], 98, 0, 0, [], [], false, '');
    }
}