import {AttackItem} from "../../structures/items/attack_item";

export class ElecShard extends AttackItem {
    constructor(amount) {
        super("Elec Shard", "Weak electric attack to all foes", amount, "electric", 95, 98, 0, true);
    }
}