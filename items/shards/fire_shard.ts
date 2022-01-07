import {AttackItem} from "../../structures/items/attack_item";

export class FireShard extends AttackItem {
    constructor() {
        super("Fire Shard", "Weak Fire attack to all foes", "fire", 95, 98, 0, true);
    }
}