import {AttackItem} from "../../structures/items/attack_item";

export class LightGem extends AttackItem {
    constructor(amount) {
        super("Light Gem", "Heavy Light attack to all foes. Chance of instakill when striking weakness", amount, "light", 175, 98, 40, false);
    }
}