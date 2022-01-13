import {AttackSkill} from "../../structures/skills/attack_skill";

export class Mudo extends AttackSkill {
    constructor() {
        super("Mudo", "Weak Dark attack to 1 foe. Chance of instakill when striking weakness", "Dark", 15, "single", [140], 98, 0, 40, [], [], false, '');
    }
}