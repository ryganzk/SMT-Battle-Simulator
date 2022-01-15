import {Item} from "../items/item";

//ATTACK ITEMS
import {FireShard} from "../../items/shards/fire_shard";
import {IceShard} from "../../items/shards/ice_shard";
import {ElecShard} from "../../items/shards/elec_shard";
import {ForceShard} from "../../items/shards/force_shard";
import {LightShard} from "../../items/shards/light_shard";
import {DarkShard} from "../../items/shards/dark_shard";
import {FireGem} from "../../items/gems/fire_gem";
import {IceGem} from "../../items/gems/ice_gem";
import {ElecGem} from "../../items/gems/elec_gem";
import {ForceGem} from "../../items/gems/force_gem";
import {LightGem} from "../../items/gems/light_gem";
import {DarkGem} from "../../items/gems/dark_gem";

//DEFENSE ITEMS
import {PhysDampener} from "../../items/dampeners/phys_dampener";
import {FireDampener} from "../../items/dampeners/fire_dampener";
import {IceDampener} from "../../items/dampeners/ice_dampener";
import {ElecDampener} from "../../items/dampeners/elec_dampener";
import {ForceDampener} from "../../items/dampeners/force_dampener";
import {LightDampener} from "../../items/dampeners/light_dampener";
import {DarkDampener} from "../../items/dampeners/dark_dampener";


//RECOVERY ITEMS
import {Bead} from "../../items/recovery/bead";
import {ChakraDrop} from "../../items/recovery/chakra_drop";
import {ChakraPot} from "../../items/recovery/chakra_pot";
import {AmritaSoda} from "../../items/recovery/amrita_soda";

//SUPPORT ITEMS

export class ItemCompendium {
    giveItem(itemName: string, amount: number): Item {
        switch(itemName.toLowerCase()) {
            case "fire shard":
                return new FireShard(amount);
            case "ice shard":
                return new IceShard(amount);
            case "elec shard":
                return new ElecShard(amount);
            case "force shard":
                return new ForceShard(amount);
            case "light shard":
                return new LightShard(amount);
            case "dark shard":
                return new DarkShard(amount);
            case "fire gem":
                return new FireGem(amount);
            case "ice gem":
                return new IceGem(amount);
            case "elec gem":
                return new ElecGem(amount);
            case "force gem":
                return new ForceGem(amount);
            case "light gem":
                return new LightGem(amount);
            case "dark gem":
                return new DarkGem(amount);
            case "phys dampener":
                return new PhysDampener(amount);
            case "fire dampener":
                return new FireDampener(amount);
            case "ice dampener":
                return new IceDampener(amount);
            case "elec dampener":
                return new ElecDampener(amount);
            case "force dampener":
                return new ForceDampener(amount);
            case "light dampener":
                return new LightDampener(amount);
            case "dark dampener":
                return new DarkDampener(amount);
            case "bead":
                return new Bead(amount);
            case "chakra drop":
                return new ChakraDrop(amount);
            case "chakra pot":
                return new ChakraPot(amount);
            case "amrita soda":
                return new AmritaSoda(amount);
            default:
                throw new Error("AN ITEM WITH THE NAME \"" + itemName.toUpperCase() + "\" DOES NOT EXIST!")
        }
    }

    giveShards(amount: number) {
        let shards: Item[] = []
        shards.push(this.giveItem('fire shard', amount))
        shards.push(this.giveItem('ice shard', amount))
        shards.push(this.giveItem('elec shard', amount))
        shards.push(this.giveItem('force shard', amount))
        shards.push(this.giveItem('light shard', amount))
        shards.push(this.giveItem('dark shard', amount))
        return shards
    }

    giveGems(amount: number) {
        let gems: Item[] = []
        gems.push(this.giveItem('fire gem', amount))
        gems.push(this.giveItem('ice gem', amount))
        gems.push(this.giveItem('elec gem', amount))
        gems.push(this.giveItem('force gem', amount))
        gems.push(this.giveItem('light gem', amount))
        gems.push(this.giveItem('dark gem', amount))
        return gems
    }

    giveDampeners(amount: number) {
        let dampeners: Item[] = []
        dampeners.push(this.giveItem('phys dampener', amount))
        dampeners.push(this.giveItem('fire dampener', amount))
        dampeners.push(this.giveItem('ice dampener', amount))
        dampeners.push(this.giveItem('elec dampener', amount))
        dampeners.push(this.giveItem('force dampener', amount))
        dampeners.push(this.giveItem('light dampener', amount))
        dampeners.push(this.giveItem('dark dampener', amount))
        return dampeners
    }
}