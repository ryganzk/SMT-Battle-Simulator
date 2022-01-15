import {Item} from "./item";
import {ItemCompendium} from "../compendium/itemcompendium";

export class ItemStock {
    fireShards: Item; iceShards: Item; elecShards: Item; forceShards: Item; lightShards: Item; darkShards: Item;
    fireGems: Item; iceGems: Item; elecGems: Item; forceGems: Item; lightGems: Item; darkGems: Item;
    physDampeners: Item; fireDampeners: Item; iceDampeners: Item; elecDampeners: Item; forceDampeners: Item; lightDampeners: Item; darkDampeners: Item;
    constructor() {
        let items = setItems()
        this.fireShards = items[0]
        this.iceShards = items[1]
        this.elecShards = items[2]
        this.forceShards = items[3]
        this.lightShards = items[4]
        this.darkShards = items[5]
        this.fireGems = items[6]
        this.iceGems = items[7]
        this.elecGems = items[8]
        this.forceGems = items[9]
        this.lightGems = items[10]
        this.darkGems = items[11]
        this.physDampeners = items[12]
        this.fireDampeners = items[13]
        this.iceDampeners = items[14]
        this.elecDampeners = items[15]
        this.forceDampeners = items[16]
        this.lightDampeners = items[17]
        this.darkDampeners = items[18]
    }
}

function setItems() {
    let compendium: ItemCompendium = new ItemCompendium()
    let items: Item[] = []

    items.push(...compendium.giveShards(3))
    items.push(...compendium.giveGems(3))
    items.push(...compendium.giveDampeners(1))

    return items
}