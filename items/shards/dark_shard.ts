import {AttackItem} from "../../structures/items/attack_item";

export class LightShard extends AttackItem {
    constructor() {
        super("Dark Shard", "Weak Dark attack to all foes. Chance of instakill when striking weakness", "dark", 105, 98, 40, true);
    }
}