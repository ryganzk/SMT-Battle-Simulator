import {AttackSkill} from "../../structures/skills/attack_skill";

export class BestialBite extends AttackSkill {
    constructor() {
        super("Bestial Bite", "Weak Physical attack to one foe. Greater effect if a Critical hit", "Phys", 5, "single", [130, 200], 98, 0, 0, [], [], true, '');
    }
}