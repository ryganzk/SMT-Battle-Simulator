import {AttackItem} from "../../structures/items/attack_item";

export class IceGem extends AttackItem {
    constructor(amount) {
        super("Ice Gem", "Heavy Ice attack to 1 foe", amount, "ice", 215, 98, 0, false);
    }
}