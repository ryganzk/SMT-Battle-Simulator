import {AttackItem} from "../../structures/items/attack_item";

export class DarkShard extends AttackItem {
    constructor(amount) {
        super("Dark Shard", "Weak Dark attack to all foes. Chance of instakill when striking weakness", amount, "dark", 105, 98, 40, true);
    }
}