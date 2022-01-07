import {AttackItem} from "../../structures/items/attack_item";

export class ForceGem extends AttackItem {
    constructor() {
        super("Force Gem", "Heavy Force attack to 1 foe", "force", 215, 98, 0, false);
    }
}