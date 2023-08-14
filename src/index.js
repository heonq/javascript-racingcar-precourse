import Car from './Car.js';

export default class CarRacing {
  Cars;
  constructor() {
    this.Cars = [];
  }

  generateCars(names) {
    names.forEach((name) => this.Cars.push(new Car(name)));
  }
}
