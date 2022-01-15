import {AttackItem} from "../../structures/items/attack_item";

export class ForceShard extends AttackItem {
    constructor(amount) {
        super("Force Shard", "Weak Force attack to all foes", amount, "force", 95, 98, 0, true);
    }
}