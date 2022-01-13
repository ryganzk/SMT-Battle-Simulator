import {AttackSkill} from "../../structures/skills/attack_skill";

export class Zan extends AttackSkill {
    constructor() {
        super("Zan", "Weak Force attack to 1 foe", "Force", 10, "single", [130], 98, 0, 0, [], [], false, '');
    }
}