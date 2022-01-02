import {Demon} from "../../demon";
import {TypeResistances} from "../../type_resistances";
import {AilResistances} from "../../ail_resistances";
import {SkillPotential} from "../../skill_potential";

export class Preta extends Demon {
    constructor() {
        super("Preta", 40, 54, 8, 6, 6, 6, 5, new TypeResistances(1, 0, 1, 1, 0, 0, 2), new AilResistances(1, 1, 1, 1, 1, 1), new SkillPotential(1, 0, 1, 0, 0, -3, 3, 0, 0, -1, 0));
    }
}