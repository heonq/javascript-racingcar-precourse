import Car from './Car.js';
import Validator from '../utils/Validator.js';
import DOM from '../utils/DOM.js';

export default class CarRacingGame {
  Cars;
  constructor() {
    this.Cars = [];
  }

  init() {
    this.handleSubmit();
    this.handleNameInput();
    this.toggleRacingCountDisplay();
    this.toggleRacingGameResultDisplay();
    this.handleCountInput();
  }

  toggleDisplay(object) {
    object.forEach((element) => {
      element.style.display = element.style.display !== 'none' ? 'none' : 'block';
    });
  }
  toggleRacingCountDisplay() {
    const racingCount = [DOM.racingCountTitle, DOM.racingCountForm];
    this.toggleDisplay(racingCount);
  }
  toggleRacingGameResultDisplay() {
    const racingGameResult = [DOM.racingGameResult, DOM.winner];
    this.toggleDisplay(racingGameResult);
  }

  handleSubmit() {
    const forms = document.querySelectorAll('form');
    forms.forEach((form) => form.addEventListener('submit', (e) => e.preventDefault()));
  }

  handleNameInput() {
    DOM.carNamesSubmit.addEventListener('click', () => {
      const input = DOM.carNamesInput.value;
      this.generateCars(input.split(','));
      this.toggleRacingCountDisplay();
    });
  }

  generateCars(names) {
    if (!Validator.validateNames(names)) return;
    names.forEach((name) => this.Cars.push(new Car(name)));
  }

  handleRacing(number) {
    for (let i = 0; i < number; i++) {
      this.Cars.forEach((car) => car.move());
    }
  }
  handleCountInput() {
    DOM.racingCountSubmit.addEventListener('click', () => {
      const count = DOM.racingCountInput.value;
      this.handleRacing(count);
    });
  }
}

const carRacingGame = new CarRacingGame();

carRacingGame.init();
