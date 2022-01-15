import {AttackItem} from "../../structures/items/attack_item";

export class IceShard extends AttackItem {
    constructor(amount) {
        super("Ice Shard", "Weak Ice attack to all foes", amount, "ice", 95, 98, 0, true);
    }
}