export class TypeResistances {
    phys: number; fire: number; ice: number; electric: number; force: number; light: number; dark: number;

    //Weak: 0
    //Neutral: 1
    //Resist: 2
    //Null: 3
    //Reflect: 4
    //Drain: 5

    constructor(phys, fire, ice, electric, force, light, dark) {
        this.phys = phys;
        this.fire = fire;
        this.ice = ice;
        this.electric = electric;
        this.force = force;
        this.light = light;
        this.dark = dark;
    }
}