import {AttackItem} from "../../structures/items/attack_item";

export class LightShard extends AttackItem {
    constructor(amount) {
        super("Light Shard", "Weak Light attack to all foes. Chance of instakill when striking weakness", amount, "light", 105, 98, 40, true);
    }
}