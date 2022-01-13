import {AttackSkill} from "../../structures/skills/attack_skill";

export class HellishSlash extends AttackSkill {
    constructor() {
        super("Hellish Slash", "(Unique) 4 weak Physical attacks to 1 foe. Low Accuracy", "Phys", 5, "single", [55], 50, 0, 0, [4], [], true, 'Daemon');
    }
}