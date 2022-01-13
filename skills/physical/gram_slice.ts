import {AttackSkill} from "../../structures/skills/attack_skill";

export class GramSlice extends AttackSkill {
    constructor() {
        super("Gram Slice", "Weak Physical attack to 1 foe. High chance of Critical", "Phys", 10, "single", [140], 98, 30, 0, [], [], true, '');
    }
}