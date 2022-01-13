import {AttackSkill} from "../../structures/skills/attack_skill";

export class Lunge extends AttackSkill {
    constructor() {
        super("Lunge", "Weak Physical attack to 1 foe", "Phys", 5, "single", [145], 98, 0, 0, [], [], true, '');
    }
}