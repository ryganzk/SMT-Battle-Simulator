export class TypeResistances {
    phys: number; fire: number; ice: number; elec: number; force: number; light: number; dark: number;

    //Weak: 0
    //Neutral: 1
    //Resist: 2
    //Null: 3
    //Reflect: 4
    //Drain: 5

    constructor(phys: number, fire: number, ice: number, elec: number, force: number, light: number, dark: number) {
        this.phys = phys;
        this.fire = fire;
        this.ice = ice;
        this.elec = elec;
        this.force = force;
        this.light = light;
        this.dark = dark;
    }
}