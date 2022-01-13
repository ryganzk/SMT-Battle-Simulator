import {AttackSkill} from "../../structures/skills/attack_skill";

export class Zio extends AttackSkill {
    constructor() {
        super("Zio", "Weak Electric attack to 1 foe", "Electric", 10, "single", [130], 98, 0, 0, [], [], false, '');
    }
}