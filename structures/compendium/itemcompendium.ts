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
    giveItem(itemName: string): Item {
        switch(itemName.toLowerCase()) {
            case "fire shard":
                return new FireShard();
            case "ice shard":
                return new IceShard();
            case "elec shard":
                return new ElecShard();
            case "force shard":
                return new ForceShard();
            case "light shard":
                return new LightShard();
            case "dark shard":
                return new DarkShard();
            case "fire gem":
                return new FireGem();
            case "ice gem":
                return new IceGem();
            case "elec gem":
                return new ElecGem();
            case "force gem":
                return new ForceGem();
            case "light gem":
                return new LightGem();
            case "dark gem":
                return new DarkGem();
            case "phys dampener":
                return new PhysDampener();
            case "fire dampener":
                return new FireDampener();
            case "ice dampener":
                return new IceDampener();
            case "elec dampener":
                return new ElecDampener();
            case "force dampener":
                return new ForceDampener();
            case "light dampener":
                return new LightDampener();
            case "dark dampener":
                return new DarkDampener();
            case "bead":
                return new Bead();
            case "chakra drop":
                return new ChakraDrop();
            case "chakra pot":
                return new ChakraPot();
            case "amrita soda":
                return new AmritaSoda();
            default:
                throw new Error("AN ITEM WITH THE NAME \"" + itemName.toUpperCase() + "\" DOES NOT EXIST!")
        }
    }
}