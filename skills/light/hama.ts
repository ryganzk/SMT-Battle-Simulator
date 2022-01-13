import {AttackSkill} from "../../structures/skills/attack_skill";

export class Hama extends AttackSkill {
    constructor() {
        super("Hama", "Weak Light attack to 1 foe. Chance of instakill when striking weakness", "Light", 15, "single", [140], 98, 0, 40, [], [], false, '');
    }
}