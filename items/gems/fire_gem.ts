import {AttackItem} from "../../structures/items/attack_item";

export class FireGem extends AttackItem {
    constructor(amount) {
        super("Fire Gem", "Heavy Fire attack to 1 foe", amount, "fire", 215, 98, 0, false);
    }
}