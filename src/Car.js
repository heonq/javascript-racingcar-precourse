import CONSTANTS from '../utils/Constants.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }
  move() {
    const moveNumber = MissionUtils.Random.pickNumberInRange(
      CONSTANTS.minNumber,
      CONSTANTS.maxNumber,
    );
    if (moveNumber >= 4) this.distance += 1;
  }
}
