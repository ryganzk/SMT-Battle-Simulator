import {AttackItem} from "../../structures/items/attack_item";

export class ElecGem extends AttackItem {
    constructor() {
        super("Elec Gem", "Heavy Electric attack to 1 foe", "electric", 215, 98, 0, false);
    }
}