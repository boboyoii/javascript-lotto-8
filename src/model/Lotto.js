import validator from '../utils/Validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    validator.validateWinningNumbers(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
