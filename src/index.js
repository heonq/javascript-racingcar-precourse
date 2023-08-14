import Car from './Car.js';
import Validator from '../utils/Validator.js';
import DOM from '../utils/DOM.js';

export default class CarRacingGame {
  Cars;
  constructor() {
    this.Cars = [];
  }

  init() {
    const forms = document.querySelectorAll('form');
    forms.forEach((form) => form.addEventListener('submit', (e) => e.preventDefault()));
    this.handleEvent();
  }

  handleEvent() {
    $('#car-names-submit').addEventListener('click', () => {
      const input = DOM.carNamesInput.value;
      this.generateCars(input.split(','));
    });
  }

  generateCars(names) {
    if (!Validator.validateNames(names)) return;
    names.forEach((name) => this.Cars.push(new Car(name)));
  }
}

const carRacingGame = new CarRacingGame();

carRacingGame.init();
