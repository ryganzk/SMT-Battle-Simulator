import {AttackItem} from "../../structures/items/attack_item";

export class DarkGem extends AttackItem {
    constructor() {
        super("Dark Gem", "Heavy Dark attack to all foes. Chance of instakill when striking weakness", "dark", 175, 98, 40, false);
    }
}