import {AttackItem} from "../../structures/items/attack_item";

export class IceShard extends AttackItem {
    constructor() {
        super("Ice Shard", "Weak Ice attack to all foes", "ice", 95, 98, 0, true);
    }
}