import {Skill} from "../../structures/skills/skill";

export class Lunge extends Skill {
    constructor() {
        super("Lunge", "Weak Physical attack to 1 foe", "Phys", 5, [145], 98, 0, [], [], true, false, false, '');
    }
}