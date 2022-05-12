//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (abilityValue) => {
  if (abilityValue <= 2) {
    throw new Error("Ability scores must be at least 3");
  }
  if (abilityValue >= 19) {
    throw new Error("Ability scores can be at most 18");
  }
  return Math.floor((abilityValue - 10) / 2);
};

export class Character {
  constructor() {
    this.strength = Character.rollAbility();
    this.dexterity = Character.rollAbility();
    this.constitution = Character.rollAbility();
    this.intelligence = Character.rollAbility();
    this.wisdom = Character.rollAbility();
    this.charisma = Character.rollAbility();
    this.hitpoints = 10 + abilityModifier(this.constitution);
  }
  static rollAbility() {
    let rolledDices = [];
    for (let i = 0; i < 6; i++) {
      rolledDices.push(Math.floor(Math.random() * 7));
    }
    let sortedRolledDices = rolledDices.sort().slice(3, 6);
    return sortedRolledDices.reduce((total, dice) => {
      return (total += dice);
    }, 0);
  }
}
